---
title: Sentro
slug: /
---
# Sentro
A low-level SCSS library for building and managing token-driven design systems.

By utilizing a token-driven approach for your design system, it is easier than ever to enforce consistency, beauty, and delightful DX without sacrificing flexibility, and scalability.

## What makes it different?
Other token-driven libraries tend to use the utility class method. However, this library uses native css custom properties to its fullest extent. This makes it much more flexible compared to the other libraries as you're working directly with CSS and you are in control with your styles.

Sentro is well-equipped for making your design system into a production ready design API for your developers to consume.

## Showcase
#### SCSS Input
```scss
@use 'pkg:@matteusan/sentro' with (
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
  background: sentro.key-create('button-fill', sentro.token-get('secondary'));
  color: sentro.key-create('button-ink', sentro.token-get('secondary-ink'));
  border-color: sentro.key-create('button-border', sentro.token-get('secondary'));
  border-radius: sentro.key-create('button-radius', sentro.token-get('radius-small'));
}
```

#### CSS Output
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