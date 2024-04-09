---
title: Throw Module API
slug: /api/throw
---

# Throw API

## `throw-error()` function and mixin

Throws an error. Must be used within a valid SCSS conditional statement or a valid selector.

### Syntax

```scss
/// @param {string} $message
/// @param {string} $source
/// @param {boolean} $output-string
/// @return {error|string} The error.
@function throw-error($message, $source: (), $output-string: false) {}
@mixin throw-error($message, $source: (), $output-string: false) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

.sdc-card {
  @if sentro.key-check('card-bg') {
    background: sentro.key-create('card-bg', sentro.token-switch('surface-light'));
  } @else {
    @include sentro.throw-error('The key "card-bg" does not exist.', 'main.scss');
  }
}
...
```

## `throw-warn()` function and mixin

Throws a warning. Must be used within a valid SCSS conditional statement or a valid selector.

### Syntax

```scss
/// @param {string} $message
/// @param {string} $source
/// @param {boolean} $output-string
/// @return {warn|string} The warning.
@function throw-warn($message, $source: (), $output-string: false) {}
@mixin throw-warn($message, $source: (), $output-string: false) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

.sdc-card {
  @if sentro.key-check('card-bg') {
    background: sentro.key-create('card-bg', sentro.token-switch('surface-light'));
  } @else {
    @include sentro.throw-warn('The key "card-bg" does not exist.', 'main.scss');
  }
}

...
```