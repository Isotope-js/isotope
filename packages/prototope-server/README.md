# Prototope Server-Side Rendering

[![npm (scoped)](https://img.shields.io/npm/v/@isotope/prototope-server)](https://www.npmjs.com/package/@isotope/prototope-server) [![npm](https://img.shields.io/npm/dm/@isotope/prototope-server)](https://www.npmjs.com/package/@isotope/prototope-server) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@isotope/prototope-server)](https://bundlephobia.com/result?p=@isotope/prototope-server) [![Discord](https://img.shields.io/discord/707157754766426134)](https://discord.gg/FaFbaSk)

This package contain code for Prototope's SSR renderer implementation ([`@isotope/prototope-server`](https://www.npmjs.com/package/@isotope/prototope-server)). For more details about its usage, check out [the docs](https://areknawo.com/prototope#docs>ssr).

## Installation

```bash
npm install @isotope/prototope-server
```

## Usage

```javascript
import { bgColor, h, m, w } from "@isotope/prototope";
import { PrototopeServer } from "@isotope/prototope-server";
import { createStringView } from "@isotope/server";

const view = createStringView("body");
const { node, getCSS } = view.$(PrototopeServer());

node.div([bgColor("primary"), h(8), m(2), w(8)]);

const css = getCSS(); //
const str = `${view}`; // <body><div><div class=""></div></div></body>
```
