---
title: Tokens
slug: /tokens/
---

# Tokens

Tokens are a valuable asset to your design system, as this is the source of truth for most of your CSS property values.
By creating and managing tokens using powerful vanilla CSS features like the CSS custom properties feature, you'll be
able to create a very reliable source of truth for your design system. Sentro makes this process very easy to do and to
maintain.

## Basic Usage
### Configuring tokens
Configure your tokens using the `sentro.token-config()` mixin.

It can be a map with a default value and variants, or a separate variable argument.  For maps, the `default` key is the set non-variant key for the parent key (please see the examples below).

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

:root {
  @include sentro.token-config(
    $brand-color: (
      'default': #122c53,
      'ink': #fff
    ),
    $small-radius: 0.3rem,
    $medium-radius: 0.5rem,
  );
}

...
```

The `token-config()` mixin also supports map-based token sets using the `$map` parameter.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-token-map: (
  'brand-color': (
    'default': #122c53,
    'ink': #fff
  ),
  'radius': (
    'small': 0.3rem,
    'medium': 0.5rem
  )
);

:root {
  @include sentro.token-config(
    $map: $_my-token-map
  );
}

...
```

### Two-way token configuration

It also supports both at the same time.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-token-map: (
  'brand-color': (
    'default': #122c53,
    'ink': #fff
  ),
  'radius': (
    'small': 0.3rem,
    'medium': 0.5rem
  )
);

:root {
  @include sentro.token-config(
    $map: $_my-token-map,
    $accent-color: (
      'default': #122c53,
      'ink': #fff
    )
  );
}
```

### Nesting tokens
You can also nest tokens. Though we do not recommend nesting too deep, about 3 levels is the maximum.

```scss
:root {
  @include sentro.token-config(
    $accent-color: (
      'default': #122c53,
      'ink': #fff,
      'variant': (
        'default': default-token,
        'light': light-ver,
        'dark': (
          'default': dark-ver,
          'point-1': point-1-ver
        )
      )
    )
  );
}
```

### Using tokens
Using these tokens in your CSS property values using the `sentro.token-get()` function.

If the token you created has the `default` as the key of its variant, you won't have to point it to add `default` to
  your `token-get()` key as sentro automatically maps it for you.

```scss
...
.my-component {
  background: sentro.token-get('brand-color');
  color: sentro.token-get('brand-color-ink');
}
```

#### CSS Output

```css
/* CSS Output */
:root {
  --sdc-token-brand-color: #122c53;
  --sdc-token-brand-color-ink: #fff;
}

.my-component {
  background: var(--sdc-token-brand-color);
  color: var(--sdc-token-brand-color-ink);
}
```

### Using tokens with a custom separator
When you want to use custom separators for your tokens, the global separator can be changed using the `$separator` parameter. Please refer to [this guide](../api/settings.md#separator) for more information.