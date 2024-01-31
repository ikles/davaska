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


$('.head__menu li a').click(function () {
  $('body').removeClass("body-open");
  $('.header__col').removeClass("open"); 
  $('.burger').removeClass('burger-open');
});


function tabs(element) {    
  $(element).find('.tabs__list-item').click(function () {
    $(element).find('.tabs__list-item').removeClass('active');
    $(this).addClass('active');    
    let num = $(this).index();
    $(element).find('.tabs__content-list-item').removeClass('active');
    $(element).find('.tabs__content-list-item').eq(num).addClass('active');  
  });
}

tabs('.create__tabs');


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


let count = 0;








$('.ind').bind('mousewheel', function(e){

  if(e.originalEvent.wheelDelta / 10 > 0) {
    if (count > 0) {
      count--;        

    }
    if (count < 1) {

    }
      //console.log(count);
  }
  else{
    count++;

    if (count > 2) {

    }
      //console.log(count);
  }
});



$('[data-fancybox="gallery"]').fancybox({
  'width':755,    
  'autoSize' : false,
  arrows: true,
  infobar: false,
  smallBtn: true,
  toolbar: false,
  parentEl: "body",
  iframe : {
    css : {
      width : '450px'
    }
  },    
  slideClass: "catgal__slide",
  baseClass: "catgal__container"
});



  //const topPosIndRight = $('.ind__r').offset().top;





var topPos2 = $('.top').offset().top; 
$(window).scroll(function() {
  var top2 = $(document).scrollTop();
  if (top2 > topPos2) {
    let radius;
    if ( (top2 / 5) <= 40 ) {
      let radius = (top2 / 5);
      $('.head').css('border-radius', radius+'px');
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


  /*$('.popform__close').click(function () {
    $('.popform').fadeOut();
  });*/



$('.ind__ul li a').click(function (e) {
  e.preventDefault();
})



    var visibleElements = []; // Массив для хранения видимых элементов

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
                visibleElements.push(entry.target); // Добавляем элемент в массив видимых
              } else {
                visibleElements = visibleElements.filter(function(el) {
                  return el !== entry.target;
                }); // Удаляем элемент из массива
              }
            });
      updateActiveClass();
    }, { threshold: 0.9 });

    function updateActiveClass() {
      if (visibleElements.length > 0) {
        var activeIndex = $('.ind__img').index($(visibleElements[visibleElements.length - 1]));
        setActiveElements(activeIndex);
      }
    }

    function setActiveElements(activeIndex) {
        // Добавляем класс 'active', только если он не установлен
      if (!$('.ind__img').eq(activeIndex).hasClass('active')) {
        $('.ind__img').removeClass('active').eq(activeIndex).addClass('active');
        $('.ind__ul li').removeClass('active').eq(activeIndex).addClass('active');
        $('.ind__content-list li').removeClass('active').eq(activeIndex).addClass('active');
      }
    }

    // Наблюдаем за всеми элементами с классом .ind__img
    $('.ind__img').each(function() {
      observer.observe(this);
    });

    // Обработчик события прокрутки
    $(window).on('scroll', function() {
      var firstItem = $('.ind__img').first();
      var lastItem = $('.ind__img').last();

      if ($(window).scrollTop() + $(window).height() > lastItem.offset().top + lastItem.outerHeight()) {
            // Если пользователь прокрутил за последний .ind__img
        setActiveElements($('.ind__img').length - 1);
      } else if ($(window).scrollTop() < firstItem.offset().top) {
            // Если пользователь прокрутил выше первого .ind__img
        setActiveElements(0);
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
      pauseOnHover: false,  
    });

    


    

    


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
    
    popup('a.btn', '.modal-overlay_1', '.modal-close_1');


    $('a[href*=\\#]:not([href=\\#])').click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 800);
      return false;
    });

    $('.footer__arr-up').click(function () {
      $('.head').addClass('w100');
    })


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

