var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "header.html", true);
xhttp.send();

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });

require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(document.getElementById('editorContainer'), {
        language: 'html',
        theme: 'vs-dark',
        minimap: {
            enabled: false
        },
    });

    editor.onDidChangeModelContent(() => {
        const content = editor.getValue();
        const iframe = document.getElementById('previewIframe');
        iframe.srcdoc = content;
    });
});