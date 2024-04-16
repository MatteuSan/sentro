---
title: Breakpoints
slug: /breakpoints
---
# Breakpoints
Breakpoints allow you to create areas in which the viewport width is used to change styles to components and other things.

## Basic Usage
### Configuring breakpoints
Configure your breakpoints using the `sentro.breakpoint-config()` mixin.

- It can be a map with a default value and variants, or a separate variable argument.
- For maps, the `default` key is the set non-variant key for the parent key (please see the examples below).

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@include sentro.breakpoint-config(
  $small: 320px,
  $medium: 677px,
  $large: 890px,
  $xlarge: 1077px
);
```

The `breakpoint-config()` mixin also supports map-based token sets using the `$map` parameter.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-breakpoint-map: (
  small: 320px,
  medium: 677px,
  large: 890px,
  xlarge: 1077px
);

@include sentro.breakpoint-config(
  $map: $_my-breakpoint-map
);

...
```

### Nested breakpoints
You can also nest breakpoints within each other.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-breakpoint-map: (
  mobile: (
    small: 320px,
    medium: 677px
  ),
  desktop: (
    large: 890px,
    xlarge: 1077px
  )
);

@include sentro.breakpoint-config(
  $map: $_my-breakpoint-map
);
```

You can use these breakpoints by doing this:
```scss
@include sentro.breakpoint-create('mobile-medium') {
  // Styles here...
}
```

### Two-way breakpoint configuration
It also supports both at the same time.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-breakpoint-map: (
  large: 890px,
  xlarge: 1077px
);


@include sentro.breakpoint-config(
  $map: $_my-breakpoint-map,
  $small: 320px,
  $medium: 677px,
);
```

### Using breakpoints
When using the breakpoints in your CSS, you are going to use the `breakpoint-create()` mixin. It takes in a valid breakpoint token you've configured in the `breakpoint-config()` mixin.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-breakpoint-map: (
  small: 320px,
  medium: 677px,
  large: 890px,
  xlarge: 1077px
);

@include sentro.breakpoint-config(
  $map: $_my-breakpoint-map
);

@include sentro.breakpoint-create('medium') {
  // Styles here...
}
```

### Using breakpoints with a specific context and property.
When you want a specific type of breakpoint in your CSS, you can use the same mixin but pass in the optional `$context` and `$property` parameters.

- `$context` refers to what to watch for in the breakpoint. The usual values for this parameter are `'min'` and `'max'` with the default being `min`.
- `$property` refers to what property to watch for. The usual values for this property are `'width'` and `'height'` with the default being `'height'`.

```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

$_my-breakpoint-map: (
  small: 320px,
  medium: 677px,
  large: 890px,
  xlarge: 1077px
);

@include sentro.breakpoint-config(
  $map: $_my-breakpoint-map
);

@include sentro.breakpoint-create('medium', 'max', 'height') {
  // Styles here...
}
```

### Using breakpoints with a custom separator
When you want to use custom separators for your breakpoints, the global separator can be changed using the `$separator` parameter. Please refer to [this guide](../api/settings.md#separator) for more information.