Template.elao_strap_top_navbar.hooks({
    rendered: function(){
        this.$('#main-nav').mobileNav();
    }
});

Template.elao_strap_left_sidebar.hooks({
    rendered: function(){
        this.$('.sidebar nav').find('a').on('click', function(e){
            if ($(this).siblings('ul').length > 0) {
                e.preventDefault();
                $(this).parent().toggleClass('opened');
            }
        });

        this.$('.sidebar nav').find('li.active').parents('li').each(function(){
            $(this).addClass('opened');
        });

        this.$('.sidebar nav').find('li').each(function(){
            if ($(this).children('ul').length > 0) {
                $(this).children('a').append('<span class="submenu-icon"></span>');
            }
        });

        this.$('.mobile-nav-toggle').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.sidebar').toggleClass('active');
            $('body').toggleClass('nav-opened');
        });
    }
});
