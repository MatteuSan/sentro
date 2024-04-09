---
title: Breakpoint Module API
slug: /api/breakpoints
---

# Breakpoint API

## `breakpoint-config()` mixin

Adds breakpoints to the design system.

There are two parameters to this mixin. The first one is to insert a pre-made breakpoint map. It could be from the design
team, or from the project's UX lead. Then the second one is for adding your own breakpoints.

Both parameters can be used simultaneously, or if you don't want that you can always use one or the other.

### Syntax

```scss
/// @param {map} $token-map
/// @param {args} $breakpoints...
breakpoint-config($map: (), $breakpoints...) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

:root {
  @include sentro.token-config(
    $small: 320px,
    $medium: 677px,
    $large: 890px,
    $xlarge: 1077px
  );
}

...
```

## `breakpoint-check()` function

Checks if a breakpoint is a valid breakpoint or not. Must be used within a valid SCSS conditional statement.

**NOTE: It does not throw and error when the value is asserted as false, you need to make the error yourself.**

### Syntax

```scss
/// @param {*} query
breakpoint-check($query) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@function tell-me-if-its-a-breakpoint($breakpoint) {
  @if sentro.breakpoint-check($breakpoint) {
    @return 'IT IS A BREAKPOINT!';
  } @else {
    @return 'Oh, that\'s disappointing...';
  }
}

...
```

## `breakpoint-create()` mixin

Creates a breakpoint. Must be used within a valid CSS selector.

### Syntax

```scss
/// @param {string} $key
/// @param {*} $value
breakpoint-create($key, $value) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

dialog {
  // CSS Styles
  
  @include sentro.breakpoint-create('medium') {
    // CSS Styles
  }
}

...
```

## `breakpoint-get()` function

Queries and retrieves a breakpoint. Must be used as a property value, css-function value, or key-fallback value.

Allows you to query your own breakpoint and pass it off inside a property to be used.

### Syntax

```scss
/// @param {string} $key
token-get($key) {}
```

### Usage

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

dialog {
  // CSS Styles
  
  @media (min-width: sentro.breakpoint-get('medium')) {
    // CSS Styles
  }
}

...
```