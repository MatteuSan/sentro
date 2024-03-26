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
  --hc-theme-primary: #232323;
}
```

## `$token-validation`
It accepts a boolean value. This will enable/disable token validation throughout the whole design system. Meaning you won't get any errors for any invalid token. It is turned on by default.

### Usage
Use it upon using the module in the root stylesheet.

```scss
@use 'node_modules/@matteusan/sentro' with (
  $prefix: 'hc',
  $context: 'theme',
  $token-validation: false
);
```

## `$key-validation`
It accepts a boolean value. This will enable/disable key validation throughout the whole design system. Meaning you won't get any errors for any invalid key. It is turned on by default.

### Usage
Use it upon using the module in the root stylesheet.

```scss
@use 'node_modules/@matteusan/sentro' with (
  $prefix: 'hc',
  $context: 'theme',
  $key-validation: false
);
```