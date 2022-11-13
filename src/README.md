# Sentro
![lang](https://img.shields.io/badge/lang-SCSS-%23c69)
[![version_badge](https://img.shields.io/npm/v/@matteusan/sentro)](https://www.npmjs.com/package/@matteusan/sentro)
![license_badge](https://img.shields.io/npm/l/@matteusan/sentro)
![stars](https://img.shields.io/github/stars/MatteuSan/sentro?style=social)

A low-level SCSS library for building and managing token-driven design systems.

## Installation

```sh
# NPM
npm install @matteusan/sentro --save

# Yarn
yarn add @matteusan/sentro
```

## Documentation

- The documentation for this project is located [here](https://docs.matteusan.com/docs/sentro).

## Showcase
#### SCSS Input

- Tokenize your UI while creating an intuitive theming API for your design system.

```scss
@use 'path/to/@matteusan/sentro' with (
  $prefix: 'sdb',
  $context: 'theme'
);

:root {
  @include sentro.token-config(
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
  background: sentro.key-create('button-fill', sentro.token-get('secondary'));
  color: sentro.key-create('button-ink', sentro.token-get('secondary-ink'));
  border-color: sentro.key-create('button-border', sentro.token-get('secondary'));
  border-radius: sentro.key-create('button-radius', sentro.token-get('radius-small'));
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