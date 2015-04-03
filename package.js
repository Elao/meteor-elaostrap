Package.describe({
    name: 'yoh:meteor-elao-strap',
    version: '0.0.1',
    summary: 'ElaoStrap (bootstrap fork) integration for MeteorJs',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1');
    api.imply(['iron:router', 'aldeed:template-extension', 'natestrauser:select2']);
    api.use(['templating', 'aldeed:template-extension'], 'client');

    Npm.depends({
        "bootstrap-sass": "3.3.1",
        "elaostrap": "0.1.12",
    });

    var elaoStrapPath = '.npm/package/node_modules/elaostrap';
    var bootstrapPath = '.npm/package/node_modules/bootstrap-sass';

    var prefixPaths = function(prefix, paths) {
        return paths.map(function(path){
            return prefix + path;
        });
    };

    // add elaoStrap assets + vendors js
    api.addFiles(prefixPaths(elaoStrapPath, [
        '/assets/fonts/elaostrap/elaostrap.eot',
        '/assets/fonts/elaostrap/elaostrap.svg',
        '/assets/fonts/elaostrap/elaostrap.ttf',
        '/assets/fonts/elaostrap/elaostrap.woff',
        '/assets/images/fancybox/fancybox_loading.gif',
        '/assets/images/fancybox/fancybox_loading@2x.gif',
    ]), 'client', {isAsset: true});

    // add elaoStrap vendors js
    api.addFiles(prefixPaths(elaoStrapPath, [
        '/assets/js/vendors/datepicker.js',
        '/assets/js/vendors/jquery.easing.js',
        '/assets/js/vendors/jquery.fancybox.pack.js',
        '/assets/js/vendors/jquery.simple-selector.js',
        '/assets/js/vendors/mobile-nav.js',
    ]), 'client');

    // add bootstrap-sass js
    api.addFiles(prefixPaths(bootstrapPath, [
        '/assets/javascripts/bootstrap/tab.js',
        '/assets/javascripts/bootstrap/collapse.js',
        '/assets/javascripts/bootstrap/tooltip.js',
        '/assets/javascripts/bootstrap/popover.js',
        '/assets/javascripts/bootstrap/dropdown.js',
    ]), 'client');

    // add elaoStrap sass files
    api.addFiles(prefixPaths(elaoStrapPath, [
        '/assets/sass/admin/components/_dropdowns.scss',
        '/assets/sass/admin/components/_filters.scss',
        '/assets/sass/admin/components/_navbar.scss',
        '/assets/sass/admin/components/_select2.scss',
        '/assets/sass/admin/components/_sidebar.scss',
        '/assets/sass/admin/components/_tables.scss',
        '/assets/sass/admin/components/_tabs.scss',
        '/assets/sass/admin/helpers/_responsive-phone.scss',
        '/assets/sass/admin/helpers/_responsive-tablet-h.scss',
        '/assets/sass/admin/helpers/_responsive-tablet-v.scss',
        '/assets/sass/admin/helpers/_responsive.scss',
        '/assets/sass/admin/layout/_form.scss',
        '/assets/sass/admin/layout/_layout.scss',
        '/assets/sass/admin/pages/_login.scss',
        '/assets/sass/admin/variables/_variables.scss',
        '/assets/sass/base/_font.scss',
        '/assets/sass/base/_normalize.scss',
        '/assets/sass/base/_reset.scss',
        '/assets/sass/base/_typography.scss',
        '/assets/sass/components/_alerts.scss',
        '/assets/sass/components/_button-groups.scss',
        '/assets/sass/components/_buttons.scss',
        '/assets/sass/components/_datepicker.scss',
        '/assets/sass/components/_dropdowns.scss',
        '/assets/sass/components/_fancybox.scss',
        '/assets/sass/components/_input-groups.scss',
        '/assets/sass/components/_labels.scss',
        '/assets/sass/components/_loader.scss',
        '/assets/sass/components/_media.scss',
        '/assets/sass/components/_mobile-nav.scss',
        '/assets/sass/components/_navbar.scss',
        '/assets/sass/components/_pagination.scss',
        '/assets/sass/components/_panels.scss',
        '/assets/sass/components/_popovers.scss',
        '/assets/sass/components/_progress-bar.scss',
        '/assets/sass/components/_select2.scss',
        '/assets/sass/components/_simpleInputFile.scss',
        '/assets/sass/components/_simpleSelector.scss',
        '/assets/sass/components/_tables.scss',
        '/assets/sass/components/_tabs.scss',
        '/assets/sass/components/_tooltips.scss',
        '/assets/sass/helpers/_mixins.scss',
        '/assets/sass/helpers/_responsive-phone.scss',
        '/assets/sass/helpers/_responsive-tablet-h.scss',
        '/assets/sass/helpers/_responsive-tablet-v.scss',
        '/assets/sass/helpers/_responsive-utilities.scss',
        '/assets/sass/helpers/_responsive.scss',
        '/assets/sass/helpers/_shortcuts.scss',
        '/assets/sass/helpers/mixins/_alerts.scss',
        '/assets/sass/helpers/mixins/_base.scss',
        '/assets/sass/helpers/mixins/_buttons.scss',
        '/assets/sass/helpers/mixins/_forms.scss',
        '/assets/sass/helpers/mixins/_grid.scss',
        '/assets/sass/helpers/mixins/_labels.scss',
        '/assets/sass/helpers/mixins/_pagination.scss',
        '/assets/sass/helpers/mixins/_panels.scss',
        '/assets/sass/helpers/mixins/_progress-bar.scss',
        '/assets/sass/helpers/mixins/_responsive-visibility.scss',
        '/assets/sass/layout/_forms.scss',
        '/assets/sass/layout/_grid.scss',
        '/assets/sass/layout/_layout.scss',
        '/assets/sass/pages/_doc.scss',
        '/assets/sass/variables/_base.scss',
        '/assets/sass/variables/_default.scss',
        '/assets/sass/admin/variables/_variables.scss',
        '/assets/sass/admin/layout/_layout.scss',
        '/assets/sass/admin/layout/_form.scss',
        '/assets/sass/admin/components/_navbar.scss',
        '/assets/sass/admin/components/_sidebar.scss',
        '/assets/sass/admin/components/_tables.scss',
        '/assets/sass/admin/components/_dropdowns.scss',
        '/assets/sass/admin/components/_filters.scss',
        '/assets/sass/admin/components/_tabs.scss',
        '/assets/sass/admin/components/_select2.scss',
        '/assets/sass/admin/pages/_login.scss',
        '/assets/sass/admin/helpers/_responsive.scss',
    ]), 'server');

    // add custom package files
    api.addFiles([
        // there is bug on this 2 files...
        // don't know why... we need to add one line on the top of files...
        'lib/sass/helpers/_responsive-tablet-v.scss',
        'lib/sass/helpers/_responsive.scss',

        // add style & admin files for default
        'lib/style.scss',
        'lib/admin.scss',
    ], 'server');

    // add elaoStrap templates
    api.addFiles([
        'template/layout.scss',
    ], 'server');

    api.addFiles([
        'template/layout.html',
        'template/layout.js',
        'template/navbars.html',
        'template/navbars.js',
    ], 'client');
});

Package.onTest(function(api) {
});
