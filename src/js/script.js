$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
       // adaptiveHeight: true,
        speed: 1200, 
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive:
        [
            {
                breakpoint: 992,
                    settings: 
                    {
                        arrows: false,
                        dots: true
                    }
            }
        ]
    }
    
    );
    /* $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab.active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          $('.catalog-item__link').each(function(i){


        });
 */
        //mobal
        $('[data-modal=consultation]').on('click', function(){
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function(){
            $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
        });
        $('#consultation-form').validate(),
        $('#consultation form').validate(),
        $('#order form').validate();
  });