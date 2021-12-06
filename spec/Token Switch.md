# Token Switch
> This page is under construction!

A function that intelligently analyzes a query if it's a valid token or not.

```scss
@function token-switch($reference, $query) { }
```

## Function
Check if the query is a token or not. If the query is a token, output a token. If not, output as is.

#### Input
```scss
$class-bg: 'my-token' !default;
$class-radius: 0.3rem !default;

.class {
    // Input: token.
    background-color: sentro.token-switch('color', $class-bg);
    
    // Input: regular css value.
    border-radius: sentro.token-switch('number', $class-radius);
}
```

#### Output
```scss
.class {
    // Output: token.
    background-color: var(--sdc-theme-my-token);
    
    // Output: as-is.
    border-radius: 0.3rem;
}
```