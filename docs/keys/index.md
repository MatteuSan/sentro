---
title: Keys
slug: /keys/
---
# Keys
Keys allow your styles to be themeable. By using the CSS custom properties' fallback values, you can easily instantiate, bind, and override values of a style/component. Sentro allows this process to be streamlined, automated, and funner than manually coding everything in.

## Basic Usage
### Assigning themeable properties and keys
Get your CSS styles.
```scss
.sdc-button {
   width: 100%;
   max-width: max-content;
   display: inline-flex;
   flex-flow: row nowrap;
   padding: 0.4rem 0.6rem;
   user-select: none;
   background-color: #ff6a00;
   color: #100500;
}
```
Determine what properties you want to be themeable. Usually these are color-related properties, typography properties, shape properties (like `border-radius`), etc.
```scss
.sdc-button {
   width: 100%;
   max-width: max-content;
   display: inline-flex;
   flex-flow: row nowrap;
   padding: 0.4rem 0.6rem; // This is themeable.
   user-select: none;
   background-color: #ff6a00; // This too!
   color: #100500; // This one as well!
}
```
Attach the `sentro.key-create()` function to the themeable properties.
```scss
.sdc-button {
   width: 100%;
   max-width: max-content;
   display: inline-flex;
   flex-flow: row nowrap;
   padding: sentro.key-create(..., ...); // This is themeable.
   user-select: none;
   background-color: sentro.key-create(..., ...); // This too!
   color: sentro.key-create(..., ...); // This one as well!
}
```
Name the key in the first parameter. 
> We suggest putting the component name (minus the prefix) before the property name you want to assign to it. (i.e. `button-fill`, `button-ink`, `card-padding`, `header-brand-size`).
```scss
.sdc-button {
   width: 100%;
   max-width: max-content;
   display: inline-flex;
   flex-flow: row nowrap;
   padding: sentro.key-create('button-padding', ...);
   user-select: none;
   background-color: sentro.key-create('button-fill', ...);
   color: sentro.key-create('button-ink', ...);
}
```
Assign a value in the second parameter.
```scss
.sdc-button {
   width: 100%;
   max-width: max-content;
   display: inline-flex;
   flex-flow: row nowrap;
   padding: sentro.key-create('button-padding', 0.4rem 0.6rem);
   user-select: none;
   background-color: sentro.key-create('button-fill', #ff6a00);
   color: sentro.key-create('button-ink', #100500);
}
```

### Using the keys to make other themes, and variations
Create a class to theme the base style.
```scss
.my-new-button-theme {
   // Code here...
}
```
Assign new values by using the `sentro.key-bind()` mixin.
```scss
.my-new-button-theme {
   @include sentro.key-bind('button-fill', lightgreen);
   @include sentro.key-bind('button-ink', darkblue);
   @include sentro.key-bind('button-padding', 0.6rem 0.8rem);
}
```
Assign the class to the HTML element.
```html
<button class="sdc-button my-button-theme">
   <!-- Other stuff here... -->
</button>
```