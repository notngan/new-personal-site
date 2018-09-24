$(document).ready(function(){
  
  // scroll to the section on navbar click 
  $(".menu a[href*='#']").bind('click', function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top    
    }, 1000, function(){
      location.hash = target;
    });
    return false;
  });


  $(window).scroll(function(){
    // parallax effect
     let introPos =  $(window).scrollTop() / 3 + 'px';
     let containerPos =  $(window).scrollTop() / 2.5 + 'px';
    
     $('#intro').css('transform', 'translateY(' + introPos + ')')
     $('#about').css('transform', 'translateY(' + containerPos + ')')
    var scrollDistance = $(window).scrollTop();

    // hide aside at the first page
    if (scrollDistance >= $('#intro').height()) {
      $('aside').fadeIn();
    } else {
      $('aside').fadeOut();
    }
    
    // add current class to navbar item
    $('section').each(function(i) {
      if($(this).position().top <= scrollDistance - 100) {
        $('.menu a.current').removeClass('current');
        $('.menu a').eq(i).addClass('current');
      }
      console.log($('section').position());
    });
  }).scroll();
});
