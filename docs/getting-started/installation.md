---
title: Installation
slug: getting-started/installation
---
# Installation
## Installing
Run this command in your terminal:
```bash
npm install @matteusan/sentro --save
```

## Instantiation
In your main SCSS stylesheet, use the `@use` at-rule to use the library.
```scss
@use 'node_modules/@matteusan/sentro';
```

Then configure the **prefix** to be used and the **context** in your design system using the `with ()` sass feature.
- **Prefixes** are a way to identify your tokens and classes from other design system tokens and classes.
- **Context** provides an additional unique prefix for your tokens (e.g. `'token'`, `'theme'`, etc.)
```scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');
```

### When using it in partials
If you have partials that require the sentro library, just instantiate the directory in the file. The library only requires you to configure the `$prefix` and `$context` once in your main SCSS file.
```scss
// main.scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

// _partial.scss
@use 'node_modules/@matteusan/sentro';
```
The case is different for SCSS files that are not partials and will not get used/imported in the main SCSS file. You have to configure it again since the Sass compiler recognizes it as a separate entity and will not have the influence of the main SCSS file.

```scss
// main.scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'token');

// my-component.scss
@use 'node_modules/@matteusan/sentro' with ($prefix: 'sdc', $context: 'my-component');
```

As seen above, we recommend that the `$context` value is the same as the component name.