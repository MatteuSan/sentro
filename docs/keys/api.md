---
title: Keys Module API
slug: /keys/api
---

# Keys API

## `key-bind()` mixin

Binds a new value to an existing key. Must be used within a valid CSS selector.

### Syntax

```scss
/// @param {string} $key
/// @param {*} $value
key-bind($key, $value) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

.sdc-card {
  @include sentro.key-bind('card-bg', sentro.token-switch('surface-light'));
}

...
```

## `key-create()` function

Creates a key with a fallback value for a CSS property. Must be used as a property value, css-function value, or
key-fallback value.

### Syntax

```scss
/// @param {string} $key
/// @param {*} $value
key-create($key, $value) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

.sdc-card {
  background: sentro.key-create('card-bg', sentro.token-switch('surface-light'));
}

...
```

## `key-check()` function

Checks if a token is a valid key or not. Must be used within a valid SCSS conditional statement.

**NOTE: It does not throw and error when the value is asserted as false, you need to make the error yourself.**

### Syntax

```scss
/// @param {*} $query
key-check($query) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

@function tell-me-if-its-a-key($key) {
  @if sentro.key-check($key) {
    @return 'IT IS A KEY!';
  } @else {
    @return 'Oh, that\'s disappointing...';
  }
}

...
```

## `key-get()` function

Queries and retrieves a key in its CSS custom property form. Must be used as a property value, css-function value, or
key-fallback value.

### Syntax

```scss
/// @param {string} $key
key-get($key) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

.sdc-card {
  background: sentro.key-get('card-bg');
}

...
```

## `key-get-raw()` function

Queries and retrieves a key in its raw value form. Must be used as a property value, css-function value, or key-fallback
value.

### Syntax

```scss
/// @param {string} $key
key-get-raw($key) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

.sdc-card {
  background: sentro.key-get-raw('card-bg');
}

...
```