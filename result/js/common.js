jQuery(document).ready(function( $ ) {

/*sticky slider*/


/*  class StickyNavigation {
    
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $('.et-hero-tab').click(function() { 
        self.onTabClick(event, $(this)); 
      });
      $(window).scroll(() => { this.onScroll(); });
      $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
    
    onResize() {
      if(this.currentId) {
        this.setSliderCss();
      }
    }
    
    checkTabContainerPosition() {
      let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if($(window).scrollTop() > offset) {
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
      } 
      else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
      }
    }
    
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.et-hero-tab').each(function() {
        let id = $(this).attr('href');
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if(this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
    
    setSliderCss() {
      let width = 0;
      let left = 0;
      if(this.currentTab) {
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.et-hero-tab-slider').css('width', width);
      $('.et-hero-tab-slider').css('left', left);
    }
    
  }

  new StickyNavigation();*/

/*end sticky slider*/


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

  let top3 = $(document).scrollTop();
  $(window).scroll(function() {
    let topPosIndImg = $('.ind__img-1').offset().top;
    

    if (top3 > topPosIndImg) {
      //console.log('22');
    }
  });
  


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

