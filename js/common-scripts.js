
(function($){
	$(function(){



        // Phone nav click function

        if($('.home-page').length){
            $('body').addClass('home-page')
        }
        
        if($('.journal-page').length){
            $('body').addClass('journal-page')
        }
        
        if($('.ambassidor-page').length){
            $('body').addClass('ambassidor-page')
        }
        if($('.calendar-event').length){
            $('body').addClass('calendar-event-page')
        }
        if($('.shop-product').length){
            $('body').addClass('shop-product-page')
        }
        if($('.membership').length){
            $('body').addClass('membership-page')
        }
        
        if ($('.events-slider-wrap').length) {
            $('.events-slider-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
            });
            $(window).on('resize', function () {
                $('.events-slider-wrap').slick('resize');

            });
        }
        
        
        
        if ($('.testimonial-item-wrap').length) {
            $('.testimonial-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
            });
            $(window).on('resize', function () {
                $('.testimonial-item-wrap').slick('resize');

            });
        }
        
        
        if ($('.upcoming-item-wrap').length) {
            $('.upcoming-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                responsive: [

                    {
                        breakpoint: 779,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.upcoming-item-wrap').slick('resize');

            });
        }
        
        
        
        $(".question-content-info").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
                if($this.find(".question-content-text:visible").length){
                    $(".question-content-info").removeClass("accordion-active")
                    $(".question-content-text").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".question-content-text").slideUp();
                    $this.find(" > .question-content-text").slideDown();
                }
            })
        });

        
        
        if ($('.gallery-slider-wrap').length) {
            $('.gallery-slider-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
            });
            $(window).on('resize', function () {
                $('.gallery-slider-wrap').slick('resize');

            });
        }
        
        


        
        if ($("select.size").length) {
            $('select.size').selectric({
            });
        }
        
        
        $('.shop-product-item-inner:first-child').fadeIn();
        $('.shop-product-tab-triger-wrap ul li:first-child').addClass('tab-active');

        
        $('.shop-product-tab-triger-wrap ul li a').on('click', function (event) {
            event.preventDefault();
            $('.shop-product-tab-triger-wrap ul li').removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            $('.shop-product-item-inner').hide();
            $($(this).attr('href')).show();
        });



        $('.selectric-shown').click(function(){
            var $$_this = $(this);
            $('.selectric-dropdown').slideToggle();
        })

        $('.selectric-dropdown ul li').click(function(){
            var thisText = $(this).text();
            $('.selectric-shown em').text(thisText)
            $('.selectric-dropdown').slideUp();
            $('.selectric-dropdown ul li').removeClass('dropdown-active')
            $(this).addClass('dropdown-active')


        })

        $('.hamburger').click(function (e) {
            $('body').addClass('navshown')
            e.preventDefault()
            $(".navigation-wrap").fadeToggle()
            $('.navigation-close').click(function () {
                $(".navigation-wrap").fadeOut()
                $('body').removeClass('navshown')
            })

        });

        $('.modal-trigger').click(function () {
            $('.popup-wrap').fadeIn();
            var activeTabTrigger = $(this).attr('href');
            console.log(activeTabTrigger)
            $(activeTabTrigger).addClass('modalShown');
            return false;
        });

        $('.popup-close').click(function () {
            $('.popup-wrap').fadeOut();
            $('.modalShown').removeClass('modalShown')
        })


	})// End ready function.
   
    
    
    
    

	

})(jQuery)




var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
function decreaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

