# Sentro
A low-level SCSS library for building robust token-driven design systems at scale.

## Installation
```sh
# NPM
npm install @matteusan/sentro --save
```

## Documentation
- The documentation for this project is located [here](https://docs.matteusan.me/docs/sentro).

## Showcase
#### SCSS Input
```scss
@use '@matteusan/sentro' with (
  $prefix: 'sdc',
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
  background: sentro.key-create('button-fill', 'secondary');
  color: sentro.key-create('button-ink', 'secondary-ink');
  border-color: sentro.key-create('button-border', 'secondary');
  border-radius: sentro.key-create('button-radius', 'radius-small');
}
```

#### CSS Output
```css
:root {
  --sdc-theme-primary: #122c53;
  --sdc-theme-primary-light: #536b99;
  --sdc-theme-primary-dark: #061021;
  --sdc-theme-primary-ink: #fff;
  --sdc-theme-secondary: #ffac00;
  --sdc-theme-secondary-light: #ffd77e;
  --sdc-theme-secondary-dark: #533800;
  --sdc-theme-secondary-ink: #000;
  --sdc-theme-radius-small: 0.3rem;
  --sdc-theme-radius-medium: 0.5rem;
  --sdc-theme-radius-large: 0.7rem;
}

.my-button-theme {
    background: var(--sdc-button-fill, var(--sdc-theme-secondary));
    color: var(--sdc-button-ink, var(--sdc-theme-secondary-ink));
    border-color: var(--sdc-button-border, var(--sdc-theme-secondary));
    border-radius: var(--sdc-button-radius, var(--sdc-theme-radius-small));
}
```