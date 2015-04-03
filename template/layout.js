Template.elao_strap_layout.hooks({
    rendered: function(){
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

Template.abstract_elao_strap_layout.hooks({
    rendered: function(){
        this.$(".selector").simpleSelector();

        this.$('.nav-tabs li:not(.disabled) a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });

        this.$('.collapse').collapse();

        this.$('.has-tooltip, [data-toggle="tooltip"]').tooltip({ container: 'body' });
        this.$('.has-popover, [data-toggle="popover"]').popover({ trigger: 'hover' });

        this.$('.dropdown-toggle, [data-toggle="dropdown"]').dropdown();

        this.$(".fancybox").fancybox({
            padding: 0,
            nextEffect: 'fade',
            prevEffect: 'fade',
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">&times;</a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span>&larr;</span></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span>&rarr;</span></a>'
            },
            helpers: {
                title: { type: 'over' }
            }
        });

        this.$('[datepicker]').datepicker({
            language: "en",
            todayHighlight: true
        });

        this.$(".select2").select2();
    }
});
