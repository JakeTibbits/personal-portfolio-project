$(document).ready(function(){

  //NAVBAR TRIGGER
  $('#nav-trigger').on('click touchend', function(){
    $('#header-nav').toggleClass('hidden showing');
    $(this).toggleClass('colored');
  })
  $('.nav-item').on('click touchend', function(){
    $('#header-nav').toggleClass('hidden showing');
  })


  //SMOOTH Scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



  // SCROLL TRIGGERS

  function doScrollEffects(heights) {
    var scroll = checkScroll();
    var width = checkWidth();
    //console.log(scroll);

    //Header resize
    if ( scroll > 1 && width < 768 ) {
      $('#site-header').addClass('reduced');
      $('main').addClass('scrolled');
    }  else {
      $('#site-header').removeClass('reduced');
      $('main').removeClass('scrolled');
    }

    //Hero Animation

    if ( scroll > 1 && ((width <768 && scroll < 590) || (width >= 768 && scroll < 700)) ) {
      $('#your-project').css("transform", "translate3d(" + scroll/9 + "px," + scroll*0.5 + "px,0)");
      $('#designed').css("transform", "translate3d(" + scroll/1.2 + "px," + scroll/2 + "px,0) scale("+((scroll/600)+1)+"");
      $('#developed').css("transform", "translate3d(-" + scroll*4 + "px," + scroll/2 + "px,0)");
      $('#tested').css("transform", "translate3d(" + scroll/3.2 + "px,-" + scroll*1.1 + "px,0)");
      $('#and').css("transform", "translate3d(0px,-" + scroll + "px,0)");
      $('#users').css("transform", "translate3d(-" + scroll*1.5 + "px," + scroll*0.3 + "px,0) scale("+((scroll/400)+1)+")");
      $('#hero-cta-btn').css("transform", "translate3d(0px," + scroll*0.2 + "px,0)");
    } else {
      if ( scroll == 0 ){
        $('#your-project').css("transform", "translate3d(0,0,0)");
        $('#designed').css("transform", "translate3d(0,0,0)");
        $('#developed').css("transform", "translate3d(0,0,0)");
        $('#tested').css("transform", "translate3d(0,0,0)");
        $('#and').css("transform", "translate3d(0,0,0)");
        $('#users').css("transform", "translate3d(0,0,0)");
      }
    }


    //NavBar Effects


  if ( width >= 768 ){
    heightA = heights[0];
    heightB = heights[0]+heights[1];
    heightC = heights[0]+heights[1]+heights[2];
    heightD = heights[0]+heights[1]+heights[2]+heights[3];
    //console.log("scroll: "+scroll+" A:"+heightA+" B:"+heightB+" C:"+heightC+" D:"+heightD)

    if(scroll < heightA){
      $('.nav-item.active').removeClass('active');
    }

    if(scroll >= heightA && scroll < heightB){
      if(!$('.nav-item[page-position="1"]').hasClass('active')){
        $('.nav-item[page-position="1"]').addClass('active');
      }
      if($('.nav-item[page-position="2"]').hasClass('active')){
        $('.nav-item[page-position="2"]').removeClass('active');
      }
      if($('.nav-item[page-position="3"]').hasClass('active')){
        $('.nav-item[page-position="3"]').removeClass('active');
      }
    }

    if(scroll >= heightB && scroll < heightC){
      if($('.nav-item[page-position="1"]').hasClass('active')){
        $('.nav-item[page-position="1"]').removeClass('active');
      }
      if(!$('.nav-item[page-position="2"]').hasClass('active')){
        $('.nav-item[page-position="2"]').addClass('active');
      }
      if($('.nav-item[page-position="3"]').hasClass('active')){
        $('.nav-item[page-position="3"]').removeClass('active');
      }
    }

    if(scroll >= heightC && scroll < heightD){
      if($('.nav-item[page-position="1"]').hasClass('active')){
        $('.nav-item[page-position="1"]').removeClass('active');
      }
      if($('.nav-item[page-position="2"]').hasClass('active')){
        $('.nav-item[page-position="2"]').removeClass('active');
      }
      if(!$('.nav-item[page-position="3"]').hasClass('active')){
        $('.nav-item[page-position="3"]').addClass('active');
      }
    }

  }




  }

  function checkScroll() {
    return $("html").scrollTop();
  }
  function checkWidth() {
    return window.innerWidth;
  }
  function checkHeights() {
    var sectionHeights = [];
    $('.site-content section').each(function(){
      var height = $(this).height();
      sectionHeights.push(height)
    });
    return sectionHeights;
  }

  var sectionHeights = checkHeights();


  $( window ).resize(function() {
    var sectionHeights = checkHeights();
    doScrollEffects(sectionHeights);
  });

  $( window ).scroll(function() {
    doScrollEffects(sectionHeights);
  });


  //CTA Hover
  $('#hero-cta-btn').on('hover touchstart', function(){
    $(this)
  });


});
