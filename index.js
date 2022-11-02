if(jQuery(window).width() > 768){
  jQuery(document).on('hover mouseenter', '.swiper-slide a', function(){
    var slideIDD = jQuery(this).parent().parent().data('slide');
    jQuery('swiper-pagination span:nth-child('+slideIDD+')').trigger('click');
    if(slideIDD == 1){
      jQuery('.swiper-button-prev').addClass('swiper-button-disabled');
    }else if(slideIDD == 4){
      jQuery('.swiper-button-next').addClass('swiper-button-disabled');
    }else{
      jQuery('.swiper-button-prev, .swiper-button-next').removeClass('swiper-button-disabled');
    }
  });
}
jQuery(document).ready(function(){
  var swiper = new Swiper('.swiper-container.two', {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 0,
    speed : 1000,
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    coverflow: {
      rotate: 30,
      stretch: 0,
      depth:750,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev'
    }
  });
  jQuery('.swiper-container.two').on('click', '.swiper-button-prev', function(){
    var slideID = jQuery('.swiper-slide-active').data('slide');
    swiper.slidePrev();
    if(slideID == 2){
      jQuery('.swiper-button-prev').addClass('swiper-button-disabled');
    }else{
      jQuery('.swiper-button-prev, .swiper-button-next').removeClass('swiper-button-disabled');
    }
  })
  .on('click', '.swiper-button-next', function(){
    var slideId = jQuery('.swiper-slide-active').data('slide');
    if(slideId == 3){
      jQuery('.swiper-button-next').addClass('swiper-button-disabled');
    }else{
      jQuery('.swiper-button-next, .swiper-button-prev').removeClass('swiper-button-disabled');
    }
    swiper.slideNext();
  });
});
