    // script per a fixar el menú a top Opx, executa cada cop que baixam a la web.
    window.onscroll = function() {scrollingNavbar()};

    // cream variable per a la navbar
    var navbar = document.getElementById("navbar");
    
    // posició actual navbar
    var sticky = navbar.offsetTop;
    
    // quan la navbar arriba a top 0px, aplicam propietat sticky.
    function scrollingNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    
    //script per a enviar text del formulari a la caixa de comentaris
    function afegirComentari(){
      
        var nomUsuari = document.getElementById("nom").value;
        var edat = document.getElementById("edat").value;
        var comentari = document.getElementById("ressenya").value;
        var cereal = document.getElementById("cereal").value;

        //Format comentari a afegir.
        
        var edaticereal = edat + ", " + cereal;
        var comentari = `<h3>${nomUsuari}</h3><h5>${edaticereal}</h5><p>${comentari}</p>`;

        //Element a afegir

        li = document.createElement("li")
        li.classList.add("ressenya");

        //Introduir comentari dins els nous elements

        li.innerHTML = comentari;

        document.getElementById("caixaComentaris").appendChild(li);                

    }
