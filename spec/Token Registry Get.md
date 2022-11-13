# Token Registry Get
> **STATUS**: ❌ Temporarily Deprecated

A function that retrieves the entire token registry, or tokens from targets.

#### Input
1. Get all tokens.
```scss
$_ds-tokens: sentro.token-registry-get();
```

2. Get all tokens in the `$targets` parameter.
```scss
$_ds-tokens: sentro.token-registry-get((
  'padding',
  'color'
));
```

#### Output
1. Get all tokens
```scss
$_ds-tokens: (
  // Registered tokens...
);
```

2. Get all tokens in the `$targets` parameter.
```scss
$_ds-tokens: (
  // Registered tokens that fit the targets...
);
```