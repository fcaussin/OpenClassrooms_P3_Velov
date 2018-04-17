var $boutonLeft = $("#left");
var $boutonRight = $("#right");
var $etape = $(".etape");
var $body = $("body");


// Objet Slider
var Slider = {
  slideIndex : 1,
  sliderAuto : null,


  // Méthode: initialise le Slider
  initSlider: function () {
    Slider.afficherSlider();
    Slider.clickBouton();
    Slider.eventClavier();

    // Démarrage du slider automatique
    Slider.sliderAuto = setInterval(function () {
      Slider.slideIndex ++;
      Slider.afficherSlider(Slider.slideIndex);
    }, 6000);
  },


  // Méthode: affichage du slider
  afficherSlider: function  (n) {
    // Index = 1 s'il dépasse le nombre d'éléments du slider
    if (n > $etape.length) {
      Slider.slideIndex = 1;
    }
    // index = dernier élément du slider si il dépasse le premier élément
    if (n < 1) {
      Slider.slideIndex = $etape.length;
    }
    // N'affiche aucun élément du slider
    $etape.hide();
    // Affiche l'élément du slider voulu
    $etape.eq(Slider.slideIndex - 1).fadeIn("slow");
  },


  // Méthode: changer de slide
  changeSlide: function  (d) {
    // Arrête le slider auto
    clearInterval(Slider.sliderAuto);
    // Affiche le slide suivant
    if (d === 39) {
      Slider.afficherSlider(Slider.slideIndex += 1);
    }
    // Affiche le slide précédent
    if (d === 37) {
      Slider.afficherSlider(Slider.slideIndex -= 1);
    }
  },


  // Méthode: contrôle du slider avec les boutons
  clickBouton: function () {
    // Event du clic sur le bouton droit
    $boutonRight.on("click", function () {
      sens = 39;
      Slider.changeSlide(sens);
    });
    // Event du clic sur le bouton gauche
    $boutonLeft.on("click", function () {
      sens = 37;
      Slider.changeSlide(sens);
    });
  },


  // Méthode: contrôle du slider avec le clavier
  eventClavier: function () {
    $body.on("keyup", function (e) {
      sens = e.keyCode;
      Slider.changeSlide(sens);
    });
  }
};


Slider.initSlider();
