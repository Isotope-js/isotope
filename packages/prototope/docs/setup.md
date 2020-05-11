# Setup

> INFO: Prototope is part of the Isotope ecosystem and so it relies upon the core [Isotope UI library](https://areknawo.com/isotope) to work. Thus, this guide assumes you're familiar with this library.

## Wrapper

Prototope library exposes the `Prototope` Isotope directive, which is meant to be used as a starting point for any Prototope-based app.

### Prototope(config)

`Prototope()` is an Isotope directive that sets up Prototope.

```javascript
import { Prototope } from "@isotope/prototope";
import { createDOMView } from "@isotope/core";

const view = createDOMView(element, config);
const { node, getCSS } = view.$(Prototope());

node.span("Text");
```

**Arguments**:

- `config?: object` - Optional Prototope configuration object. See [configuration section](./configuration.md) for more details.

**Returns**:

- Newly-created Prototope wrapper object with the following properties:
  - `node: IsotopeNode` - an Isotope node, representing a `<div>` element that's meant to be the top-level node for your Prototope app.
  - `getCSS: () => string` - a function that returns all CSS rules generated by Prototope.

## Usage

After initializing Prototope wrapper, you can start using all of its utility functions.

All of Prototope's utils are, in fact, Isotope directives, which gives them a lot of flexibility.

```javascript
import { Prototope, bgColor, block, h, w } from "@isotope/prototope";
// ...

node.div([bgColor("primary"), block, h(8), w(8)]);
```

The example above illustrates the most common usage scenario for Prototope utils. Here, we use `bgColor`, `block`, `h`, and `w` utils to set element's `backgroundColor`, `display`, `height`, and `width` style properties accordingly. Notice how utils can optionally accept arguments, and even retrieve data from the initial Prototope's config (like `bgColor` does).

Remember that because utils are simply Isotope directives, they can be passed directly when creating new child nodes, or with the `$()` method (either in an array or individually).