









$("#portfolio1").click(function(){


    parent.proFunction();
    
    });
    
       
    $("#portfolio2").click(function(){
    
    
    parent.proFunction();
    
    });
    
       
    
    $("#portfolio3").click(function(){
    
    
    parent.proFunction();
    
    });
    
    
    
    
    
    $("#portfolio1").click(function(){
    
    
    parent.proFunction();
    
    });
    
       
    $("#portfolio2").click(function(){
    
    
    parent.proFunction();
    
    });
    
       
    
    $("#portfolio3").click(function(){
    
    
    parent.proFunction();
    
    });
    
    
    
    
    
    
    
    
    
    
       
    $("#resume1").click(function(){
    
    
    parent.resumeFunction();
    
    });
    
    
    $("#resume2").click(function(){
    
    
    parent.resumeFunction();
    
    });
    
    
    
    
    $("#resume3").click(function(){
    
    
    parent.resumeFunction();
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.navdown ul li').on('click', function(){
        $('ul li.active1').removeClass('active1');
        $(this).addClass('active1');
    });
    
    
    
    $('.navdowna ul li').on('click', function(){
        $('ul li.web_active1').removeClass('web_active1');
        $(this).addClass('web_active1');
    });
    
    
    
    
    $('.global-wrapper ul li').on('click', function(){
        $('ul li.active1').removeClass('active1');
        $(this).addClass('active1');
    });
    
    
    
    $('.global-wrapper ul li').on('click', function(){
        $('ul li.web_active1').removeClass('web_active1');
        $(this).addClass('web_active1');
    });
    
    
    
    
    
    
    
    
    
    
    $("#test1").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    $("#test2").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    
    $("#test3").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    
    
    
    
    
    $("#web_test1").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#web_iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    $("#web_test2").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#web_iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    
    $("#web_test3").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#web_iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    $("#web_test4").on('click', function() {
      
    
    
    var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#web_iframe1').css({
            width: width,
            height: height
        }).attr('src', src);
    
    
    
    });
    
    
    
    
    
    
    
    
    
    var $carousel = $('.app__container-slider').flickity({
      initialIndex: 1,
      cellAlign: 'left',
      pageDots: false,
      wrapAround: true,
      contain: true,
      selectedAttraction: 0.01,
      friction: 0.14
    });
    
    var $designerSlider = $('.app__designer-slider').flickity({
      cellAlign: 'left',
      prevNextButtons: false,
      pageDots: false,
      freeScroll: true,
      contain: true
    });
    
    var toggleMenu = function() {
      $(document).on('click', '.app__menu-toggle', function() {
        $('body').addClass('is-menu-open');
      });
    };
    
    var closeMenu = function() {
      $(document).on('click', '.app__menu-close', function() {
        $('body').removeClass('is-menu-open');
      });
    };
    
    var Accordion = function() {
      $(document).on('click', '.accordion__head', function() {
        var parent = $(this).parent();
        if (parent.hasClass('is-active')) {
          parent.removeClass('is-active');
        } else {
          $('.app__accordion').removeClass('is-active');
          parent.addClass('is-active');
        }
      });
    };
    
    var initialAnim = function() {
      $('body').addClass('is-loaded'); 
    };
    
    $(window).on('load', function() {
      initialAnim();
    });
    
    Accordion();
    toggleMenu();
    closeMenu();
    
    
    
    
    
    
    
    
    
    
    
    