jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });



//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }



/*Прокрутка колесом мыши*/

/*end Прокрутка колесом мыши*/


/*  let count = 0;

  $('.head').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta / 10 > 0) {
      if (count > 0) {
        count--;        
      $('body').removeClass('ohi');
      }
      if (count < 1) {
        $('body').addClass('ohi');
      }
      console.log(count);
    }
    else{
      count++;
      $('.head').css('width', 'calc(100% - '+(count*10)+'px)')
      .removeClass('w100');
      if (count > 8) {
        $('body').removeClass('ohi');
      }
      console.log(count);
    }
  });*/



  

  


  var topPos2 = $('.top').offset().top; 
  $(window).scroll(function() {      
    var top2 = $(document).scrollTop();
    if (top2 > topPos2) {
      let radius;
      if ( (top2 / 5) <= 40 ) {
        let radius = (top2 / 5);
        $('.head').css('border-radius', '0 0 '+radius+'px ' + radius+'px');
      }
      if ( (top2 / 6) <= 30 ) {
        let width = 'calc(100% - '+(top2*2)+'px)';        
        $('.head').css('width', width)
        .removeClass('w100');
        //console.log(top2 / 6)
        
      }
      if (top2 < 60) {
        $('.head').addClass('w100');
      }     
    }
    else {

    }
  });

  var topPos = (($('.ab').offset().top) - 200);
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > topPos) {
      $('.top').addClass('fixed');      
    }
    else {
      $('.top').removeClass('fixed');     
    }
  });


  $('.open__slider').slick({
    infinite: true,    
    speed: 1000,
    cssEase: 'linear',
    autoplaySpeed: 900,  
    fade: true,
    slidesToScroll: 1,
    autoplay: true,    
    slidesToShow: 1,    
    arrows: false,
    pauseOnHover: true,  
  });

  let currentSlide = $('.gal__slider').slick('slickCurrentSlide') + 1;
  const slideCount = $(".gal__slider").slick("getSlick").slideCount;


  $(".gal__slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".gal__actions span").text(currentSlide + 1);
  });


  $('.gal__actions span').html(currentSlide);
  $('.gal__actions div').html(slideCount);


/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/

  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

  $('.accordion-header').toggleClass('inactive-header');
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordioon-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }

    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });

  return false;

}); //ready

