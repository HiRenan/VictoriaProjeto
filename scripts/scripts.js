
$(document).ready(function () {
  // Quando uma imagem da galeria for clicada
  $('.gallery-item img').on('click', function () {
    // Obter o src da imagem clicada
    var imgSrc = $(this).attr('src');

    // Atualizar o src da imagem dentro do modal e exibir o modal
    $('#modal-img').attr('src', imgSrc);
    $('#modal').fadeIn();
  });

  // Fechar o modal ao clicar fora da imagem
  $('#modal').on('click', function (e) {
    if ($(e.target).is('#modal')) {
      $(this).fadeOut();
    }
  });
});

$(document).ready(function () {
  // Quando uma imagem da galeria for clicada
  $('.gallery-item img').on('click', function () {
    // Obter o src da imagem clicada
    var imgSrc = $(this).attr('src');

    // Atualizar o src da imagem dentro do modal e exibir o modal
    $('#modal-img').attr('src', imgSrc);
    $('#modal').fadeIn();
  });

  // Fechar o modal ao clicar fora da imagem
  $('#modal').on('click', function (e) {
    if ($(e.target).is('#modal')) {
      $(this).fadeOut();
    }
  });
});



$(document).ready(function () {
  // Função para exibir e ocultar a logo
  function animateLogo() {
    // Exibe a logo
    $(".animated-logo").css("opacity", "1");

    // Oculta a logo após 8 segundos
    setTimeout(function () {
      $(".animated-logo").css("opacity", "0");
    }, 8000);
  }

  // Chama a função animateLogo a cada 5 segundos
  setInterval(animateLogo, 5000);

  // Chama a função animateLogo pela primeira vez
  animateLogo();
});


$('.sobre-img img').on('click', function () {
  var imgSrc = $(this).attr('src');
  $('#modal-img').attr('src', imgSrc);
  $('#modal').fadeIn();
});

//reload da página
$(window).on('load', function () {
  $('#preloader').fadeOut(3500); // Altere para 2000 para aumentar o tempo de exibição
});







