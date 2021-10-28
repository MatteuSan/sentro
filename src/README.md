# Sentro
![lang](https://img.shields.io/badge/lang-SCSS-%23c69)
[![version_badge](https://img.shields.io/npm/v/@matteusan/sentro)](https://www.npmjs.com/package/@matteusan/sentro)
![license_badge](https://img.shields.io/npm/l/@matteusan/sentro)
![stars](https://img.shields.io/github/stars/MatteuSan/sentro?style=social)

A token based design system builder.

## Showcase
#### SCSS Input
- Tokenize your UI while creating an intuitive theming API for your design system.
```scss
@use 'path/to/sentro/Theme' with ($prefix: 'sdb');

:root {
  @include Theme.token-add(
          $primary: (
                  'default': #122c53,
                  'light': #536b99,
                  'dark': #061021,
                  'ink': #fff
          ),
          $secondary: (
                  'default': #ffac00,
                  'light': #ffd77e,
                  'dark': #533800,
                  'ink': #000
          ),
          $radius: (
                  'small': 0.3rem,
                  'medium': 0.5rem,
                  'large': 0.7rem
          ),
  );
}

.my-button-theme {
  background: Theme.key-create('button-fill', Theme.token-get('secondary'));
  color: Theme.key-create('button-ink', Theme.token-get('secondary-ink'));
  border-color: Theme.key-create('button-border', Theme.token-get('secondary'));
  border-radius: Theme.key-create('button-radius', Theme.token-get('radius-small'));
}
```
#### CSS Output
- Voila!
```css
:root {
  --sdb-theme-primary: #122c53;
  --sdb-theme-primary-light: #536b99;
  --sdb-theme-primary-dark: #061021;
  --sdb-theme-primary-ink: #fff;
  --sdb-theme-secondary: #ffac00;
  --sdb-theme-secondary-light: #ffd77e;
  --sdb-theme-secondary-dark: #533800;
  --sdb-theme-secondary-ink: #000;
  --sdb-theme-radius-small: 0.3rem;
  --sdb-theme-radius-medium: 0.5rem;
  --sdb-theme-radius-large: 0.7rem;
}

.my-button-theme {
    background: var(--sdb-button-fill, var(--sdb-theme-secondary));
    color: var(--sdb-button-ink, var(--sdb-theme-secondary-ink));
    border-color: var(--sdb-button-border, var(--sdb-theme-secondary));
    border-radius: var(--sdb-button-radius, var(--sdb-theme-radius-small));
}
```

## Setup
### Prerequisites
- `NodeJS` - v14.x (or above)
- `Sass`
- Some build pack like `gulp`, `webpack`, etc.
  - *Alternatively, you can use a live sass watcher.*

### Installation
```shell
# NPM
npm install @matteusan/sentro

# Yarn
yarn add @matteusan/sentro
```

### Instantiation
- In your SCSS stylesheet, use the `@use` directive to use the library.
```scss
@use 'path/to/@matteusan/sentro/Theme';
```
- Then configure the prefix to be used in your design system using the `with ()` sass feature.
```scss
@use 'path/to/@matteusan/sentro/Theme' with ($prefix: 'my-prefix');
```
- Configure your tokens.
```scss
:root {
    @include Theme.token-add(
        // It can be a map with a default value and variants.
        $brand-color: (
            'default': #122c53,
            'light': #536b99,
            'dark': #061021,
            'ink': #fff
        ),
        // It can also be separate variable arguments.
        $small-radius: 0.3rem,
        $medium-radius: 0.5rem,
    );
}
```
- Apply these tokens to your design system property values.
```scss
.my-component {
  background: Theme.token-get('brand-color-default');
  color: Theme.token-get('brand-color-ink');
}
```
- Let the library do its magic... then... wait for it... VOILA!
```css
/* CSS Output */
.my-component {
  background: var(--my-prefix-brand-color-default);
  color: var(--my-prefix-brand-color-ink);
}
```