---
title: Token Module API
slug: /api/tokens
---

# Token API

## `token-config()` mixin

Adds tokens to the design system. Must be used in a valid CSS selector.

There are two parameters to this mixin. The first one is to insert a pre-made token map. It could be from the design
team, or from the project's UX lead. Then the second one is for adding your own tokens.

Both parameters can be used simultaneously, or if you don't want that you can always use one or the other.

### Syntax

```scss
/// @param {map} $token-map
/// @param {args} $tokens...
token-config($map: (), $tokens...) {}
```

### Usage

```scss
@use '../../node_modules/@matteusan/sentro/index' with ($prefix: 'sdc', $context: 'theme');

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

## `token-check()` function

Checks if a token is a valid token or not. Must be used within a valid SCSS conditional statement.

**NOTE: It does not throw and error when the value is asserted as false, you need to make the error yourself.**

### Syntax

```scss
/// @param {*} query
token-check($query) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@function tell-me-if-its-a-token($token) {
  @if sentro.token-check($token) {
    @return 'IT IS A TOKEN!';
  } @else {
    @return 'Oh, that\'s disappointing...';
  }
}

...
```

## `token-create()` mixin

Creates a token. Must be used within a valid CSS selector.

This is the smallest and the most basic mixin for this API. This is where all the individual tokens gets passed and made
into a design token available for querying.

### Syntax

```scss
/// @param {string} $key
/// @param {*} $value
token-create($key, $value) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

:root {
  @include sentro.token-create('brand-color-light', #ff7700);
}

...
```

## `token-get()` function

Queries and retrieves a token in its CSS custom property form. Must be used as a property value, css-function value, or
key-fallback value.

Allows you to query your own tokens and pass it off inside a property to be used.

### Syntax

```scss
/// @param {string} $key
token-get($key) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

.my-selector {
  background-color: sentro.token-get('brand-color-light');
}

...
```

## `token-get-raw()` function

Queries and retrieves a token in its raw value form. Must be used as a property value, css-function value, or
key-fallback value.

Allows you to query your own tokens and pass it off inside a property to be used.

This is especially useful when using the sass version of the `rgba()` function.

### Syntax

```scss
/// @param {string} $key
token-get-raw($key) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

.my-selector {
  background-color: rgba(sentro.token-get-raw('brand-color-light'), 70%);
}

...
```

## `token-switch()` function

Queries a token; if it is a token it returns the token, if not it returns the value as is. Must be used as a property
value, css-function value, or key-fallback value.

This is especially useful when creating your styling API.

### Syntax
```scss
/// @param {*} $query
/// @param {*} $fallback
token-switch($query, $fallback: ()) {}
```
### Usage
```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$fill: #ff7700 !default;

.my-selector {
  background-color: sentro.token-switch($fill);
}

...
```

## `token-switch-raw()` function

Queries a token; if it is a token it returns the token in its raw value form, if not it returns the value as is. Must be
used as a property value, css-function value, or key-fallback value.

This is especially useful when creating your styling API.

### Syntax

```scss
/// @param {*} $query
/// @param {*} $fallback
token-switch-raw($query, $fallback: ()) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$fill: #ff7700 !default;

.my-selector {
  background-color: sentro.token-switch-raw($fill);
}

...
```