$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#tmMainNav").singlePageNav();

  // Carousel in Our Work section
  $(".tm-gallery").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Image Pop Up
  $(".tm-gallery").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enabled: true }
  });

  $(".navbar-toggler").on("click", function(e) {
    $(".tm-sidebar").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function(e) {
    var sidebar = document.getElementById("tmSidebar");

    if (!sidebar.contains(e.target)) {
      $(".tm-sidebar").removeClass("show");
    }
  });

  $("#tmMainNav .nav-link").click(function(e) {
    $(".tm-sidebar").removeClass("show");
  });
});


const abrirForm = document.getElementById('abrirForm');
const modalForm = document.getElementById('modalForm');
const fecharForm = document.getElementById('fecharForm');
const formParticipar = document.getElementById('formParticipar');

// Abrir modal
abrirForm.addEventListener('click', () => {
  modalForm.style.display = 'flex';
});

// Fechar modal
fecharForm.addEventListener('click', () => {
  modalForm.style.display = 'none';
});

// Submeter formulário
formParticipar.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  if(nome && telefone){
    // Redirecionar para a página da roleta
    window.location.href = './Roleta_AJ/roleta.html';
  } else {
    alert('Preencha todos os campos!');
  }
});

// Fechar modal clicando fora do conteúdo
modalForm.addEventListener('click', (e) => {
  if(e.target === modalForm) modalForm.style.display = 'none';
});