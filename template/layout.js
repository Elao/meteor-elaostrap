Template.elao_strap_layout.hooks({
    rendered: function(){
        if($('#loading').length > 0) {
            $('#loading').delay(200).fadeOut(400);
            $('body').removeClass('loading');
        }

        // Scroll top button
        var scrollTopLimit = 150;
        $(window).scroll(function(){
            s = $(window).scrollTop();

            if (s > scrollTopLimit) {
                $('.scroll-to-top').addClass('visible');
            } else {
                $('.scroll-to-top').removeClass('visible');
            }
        });

        if($(window).scrollTop() > scrollTopLimit) {
            $('.scroll-to-top').addClass('visible');
        } else {
            $('.scroll-to-top').removeClass('visible');
        }

        $('.scroll-to-top').on('click', function(){
            $('html, body').animate({scrollTop : 0}, 800, 'easeInOutExpo');
            return false;
        });
    }
});
