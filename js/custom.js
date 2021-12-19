//  For image slider ===>

// $(document).ready(function(){
//    $('.img-slider').slick({
//       arrows: false,
//       autoplay: true,
//       dots: true,
//       slidesToShow: 3,
//       slidesToScroll: 2,
//    })
//  });

$(document).ready(function(){
   $('.banner-slider').slick({
      autoplay: true,
      prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
      dots: true,
      fade: true,
   })

   //feedback images slider ====>
   $('.feedback-img-slider').slick({
      arrows: false,
      autoplay: true,
      asNavFor: '.feedback-text-slider',
      // slidesToShow: ,
      // slidesToScroll: ,
   })

   $('.feedback-text-slider').slick({
      arrows: false,
      autoplay: true,
      asNavFor: '.feedback-img-slider',
      // slidesToShow: ,
      // slidesToScroll: ,
   })


   // team slider ====>

   $('.team-slider').slick({
      arrows: false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
   })

   var typed = new Typed('.element', {
      strings: ['Web Designer', 'Graphics designer','SEO Sepcilist',],
      smartBackspace: true, // Default value
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,

    });

});