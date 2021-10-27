# Sentro
 A token based design system builder.

## Showcase
#### SCSS Input
- Tokenize your UI while creating an intuitive theming API for your design system.
```scss
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
