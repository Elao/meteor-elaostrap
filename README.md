# Meteor ElaoStrap

[ElaoStrap](https://github.com/JeremyFagis/ElaoStrap) (bootstrap fork) integration for MeteorJs

## Dependencies

* [Bootstrap SASS](https://github.com/twbs/bootstrap-sass)
* [ElaoStrap](https://github.com/JeremyFagis/ElaoStrap)

## Installation

In your `client/` directory, write a scss file to import what you need :

- to add ***default*** style use :
```scss
@import ".meteor/local/build/programs/server/assets/packages/yoh_meteor-elao-strap/lib/style";
```


 - to add ***admin*** style use :
```scss
@import ".meteor/local/build/programs/server/assets/packages/yoh_meteor-elao-strap/lib/admin";
```

- you can also import only \*.scss you need (see **lib/style.scss** or **lib/admin.scss** for examples)

## Use case examples

### Basic default layout with fixed top navbar

- Write in `client/template/layout/layout.html` :

```html
<head>
    <title>Application title</title>
</head>

<template name="layout">
    {{> elao_strap_layout bodyClass="with-fixed-top-navbar"}}
</template>

<template name="top_navbar">
    {{#elao_strap_top_navbar  title="Application title" mobileTitle="App title"}}
        <nav id="main-nav" class="pull-right">
            <ul>
                <li><a href="https://github.com/yoh/meteor-elao-strap" target="_blank" class="line-hover"><i class="elaostrap-font-github"></i> ElaoStrap for Meteor</a></li>
                <li><a href="https://github.com/JeremyFagis/ElaoStrap" target="_blank" class="line-hover"><i class="elaostrap-font-github"></i> ElaoStrap</a></li>
            </ul>
        </nav>
    {{/elao_strap_top_navbar}}
</template>
```

- Write in `client/template/layout/layout.scss` :

```scss
@import ".meteor/local/build/programs/server/assets/packages/yoh_meteor-elao-strap/lib/style";
@import ".meteor/local/build/programs/server/assets/packages/yoh_meteor-elao-strap/template/layout";
```

- Write in your routing file (use of iron-router) `client/routing.js` :

```js
Router.configure({
    layoutTemplate: 'layout',
    yieldRegions: {
        'top_navbar': {to: 'top_navbar'},
    }
});

Router.map(function() {
    this.route('homepage', {path: '/'});
});
```

- Write in `client/template/homepage/homepage.html` :

```html
<template name="homepage">
    <h1>Homepage</h1>
    <p>This is a basic utilisation of the default layout with fixed top navbar !</p>
</template>
```
