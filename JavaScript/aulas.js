var linksAulas = document.querySelectorAll('.aulas');
linksAulas.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        var href = this.getAttribute('href');
        
        var conteudoAulas = document.getElementById("conteudo-aulas");
        
        if (conteudoAulas.innerHTML.trim() !== '') {
            conteudoAulas.innerHTML = '';
        }
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                conteudoAulas.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", href, true);
        xhttp.send();
    });
});

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
    }
};
xhttp2.open("GET", "header.html", true);
xhttp2.send();
