var typed = new Typed('.type', {
    strings: [ 
        'Web Designer',
        'Front end Developer',
        'Responsive  designer',
             ],
     typespeed:100,
     backSpeed:60,
     loop:true
  }); 
  var typed = new Typed('.typing', {
    strings: [ 
        'Web Designer',
        'front developer',
        'Responsive  designer',
             ],
     typespeed:100,
     backSpeed:60,
     loop:true
  });
  // type end 

//   progress bar 

$(document).ready(function(){

	$('#bar1').barfiller({barColor: '#ca44a2' , duration: 9000,});
	$('#bar2').barfiller({ barColor: '	#FA8072', duration: 9000 });
	$('#bar3').barfiller({ barColor: ' #62c1ee ' , duration: 9000 });
	$('#bar4').barfiller({ barColor: 'crimson', duration: 9000 });
	$('#bar5').barfiller({ barColor: ' #82e0aa ', duration: 9000 });
	
}); 
// progress bar end 
// mixi start 
var mixer = mixitup('.port_mixi'); 
// mixi end 
// venobox start 
$(document).ready(function(){
  $('.venobox').venobox({ 
  }); 
}); 
// venobox end 
// slick start 
$('.team_slick').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed:1000,
  autoplay:true,
  autoplaySpeed:500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }

  ]
}); 





// counter part start 
$('.counter').counterUp({ 
  delay: 10,
  time: 2000
});



new WOW().init(); 
// back to top start 
$(".back2top").click(function(){
  $("html, body").animate({
      scrollTop:0
  }, 1000)
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 50){
      $(".menu_bar").addClass("menu_ng");
  }else{
      $(".menu_bar").removeClass("menu_ng");
  }
  if(scrolling > 30){
      $(".back2top").fadeIn(500);
  }else{
      $(".back2top").fadeOut(500); 
  }
});
// animation scroll start 
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});   
// animation scrol end
