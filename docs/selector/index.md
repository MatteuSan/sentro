---
title: Selector
slug: /selector
---

> This module is a work in progress and is not yet recommended for production use in the current release.

# Selector
The selector module is a powerful tool for selecting elements in the DOM. It allows you to create elements that fit the namespace of your specifications, scope selectors, create variants, and more.

## Basic Usage
### Creating a selector
Create a selector using the `sentro.selector-create()` mixin.

```scss
@use 'pkg:@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@include sentro.selector-create('.button') {
  // Your styles here
}
```
And it outputs:
```scss
.sdc-button {
  // Your styles here
}
```

### Nesting selectors
You can nest selectors using the `&` symbol.

```scss
@use 'pkg:@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@include sentro.selector-create('.button') {
  // Your base styles here
  
  @include sentro.selector-create('&.primary') {
    // Your variant styles here
  }
}
```
And it outputs:
```scss
.sdc-button {
  // Your base styles here
}

.sdc-button.sdc-button-primary {
  // Your variant styles here
}
```