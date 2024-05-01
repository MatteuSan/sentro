---
title: Throw
slug: /throw
---

# Throw
The throw module allows you to generate custom error messages in your design system. This is useful for debugging and for providing helpful error messages to users of your design system.

## Basic Usage
### Throwing an error
Throwing an error is as simple as calling the `sentro.throw-error()` mixin with a message, and the file as a parameter.

```scss
// main.scss
@use 'pkg:@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@debug sentro.throw-error('This is an error message.', 'main.scss');
```

This will output the following error message in the console:

```shell
"ERROR [main.scss]: This is an error message."
```

### Throwing a warning
Throwing a warning is as simple as calling the `sentro.throw-warn()` mixin with a message, and the file as a parameter.

```scss
// main.scss
@use 'pkg:@matteusan/sentro' with ($prefix: 'sdc', $context: 'theme');

@debug sentro.throw-warn('This is a warning message.', 'main.scss');
```

This will output the following warning message in the console:

```shell
"WARN [main.scss]: This is a warning message."
```