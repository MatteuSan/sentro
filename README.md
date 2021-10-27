# Sentro
 A token based design system builder.

## Showcase
#### SCSS Input
- Tokenize your UI while creating an intuitive theming API for your design system.
```scss
@use 'path/to/sentro/Theme' with ($prefix: 'sdb');

// :root context
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
    color: Theme.key-create('button-ink', Theme.token-get('on-secondary'));
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
  --sdb-theme-on-primary: #fff;
  --sdb-theme-secondary: #ffac00;
  --sdb-theme-secondary-light: #ffd77e;
  --sdb-theme-secondary-dark: #533800;
  --sdb-theme-on-secondary: #000;
  --sdb-theme-radius-small: 0.3rem;
  --sdb-theme-radius-medium: 0.5rem;
  --sdb-theme-radius-large: 0.7rem;
}

.my-button-theme {
    background: var(--sdb-button-fill, var(--sdb-theme-secondary));
    color: var(--sdb-button-ink, var(--sdb-theme-on-secondary));
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
