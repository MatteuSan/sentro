---
title: Settings
slug: /api/settings
---
# Settings
Here's the configuration API when using the main Sentro module.

## `$prefix`
It accepts a string. This will serve as the prefix for your design system. Prefixes are a great solution to identifying your design system from another.

## `$context`
It accepts a string. This will serve as the token context for your design system. Meaning what's the terminology for your tokens. For example, I like to use `theme` as my context so when it outputs my tokens it will look something like:
```css
:root {
  --sdc-theme-primary-400: #232323;
}
```

## `$separator`
It accepts a string. This will be the separator for your tokens. By default, it uses `-` as the separator.

This is specifically useful if your design system specifications call for a different separator for tokens. For example, you want to use `.` instead of `-` for your tokens. You can set it like this:

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $separator: '.' // uses . instead of - to separate tokens.
);
```

Now your tokens consumption will look like this:
```scss
body {
  color: sentro.token-get('primary.400');
}

// Output

body {
  color: var(--sdc-theme-primary-400);
}
```

### Scope
The scope of this setting is not only exclusive to tokens but also to keys and breakpoints:

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $separator: '.'
);

@include sentro.breakpoint-config((
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  'mobile': (
    'phone': 320px,
    'tablet': 640px
  )
));

:root {
  @include sentro.token-config((
    'primary': (
      200: pink,
      400: red,
      600: darkred,
    ),
    'accent': (
      200: lightblue,
      400: blue,
      600: darkblue,
    )
  ));
}

body {
  background: sentro.key-create('global.bg-color', sentro.token-get('accent.200'));
  color: sentro.key-create('global.text-color', sentro.token-get('primary.400'));
  border: 1px solid sentro.key-get('global.bg-color');

  @include sentro.breakpoint-create('mobile.tablet') {
    @include sentro.key-bind('global.bg-color', sentro.token-get('accent.400'));
    @include sentro.key-bind('global.text-color', sentro.token-get('primary.200'));
  }
}
```

## `$token-validation`
It accepts a boolean value. This will enable/disable token validation throughout the whole design system. Meaning you won't get any errors for any invalid token. It is turned on by default.

### Usage
Use it upon using the module in the root stylesheet.

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $token-validation: false
);
```

## `$key-validation`
It accepts a boolean value. This will enable/disable key validation throughout the whole design system. Meaning you won't get any errors for any invalid key. It is turned on by default.

### Usage
Use it upon using the module in the root stylesheet.

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $key-validation: false
);
```

## `$default-separator`
It accepts a character. This will be the default token separator for your entire design system.

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $default-separator: '.' // uses . instead of - to separate tokens.
);
```

## `$verbose`
It accepts a boolean value. Specifies if the errors and warnings provided are verbose. It is turned off by default.

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $verbose: true
);
```

## `$strict-values`
It accepts a boolean value. This will allow functions like `key-create` to automatically query the token registry and get its value in CSS custom property form. Otherwise, it will only use the entered value as-is. If this setting is turned on, you are required to specify what action to perform by calling Sentro's other functions such as `token-get-raw()`, `token-switch()`, etc. This is turned off by default.

```scss
@use 'pkg:@matteusan/sentro' with (
  $prefix: 'sdc',
  $context: 'theme',
  $strict-values: true
);
```