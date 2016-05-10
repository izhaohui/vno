$(document).ready(function() {

  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  var trigger = $('.btn-mobile-menu__icon'),navigation = $('.navigation-wrapper');
  navigation.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {      
    if(trigger.hasClass('fa-bars')){
      navigation.removeClass('visible animated bounceInDown bounceOutUp');
    }else{
      navigation.removeClass('animated bounceInDown bounceOutUp');
    }
  });

  trigger.click(function() {
    var visible = !trigger.hasClass('fa-bars');    
    if (visible) {      
      navigation.addClass('animated bounceInDown bounceOutUp');
    } else {
      navigation.addClass('visible animated bounceInDown');
    }
    trigger.toggleClass('fa-bars fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }
    
    $('.btn-mobile-menu__icon').toggleClass('fa fa-bars fa fa-angle-up animated fadeIn');
  });
});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
