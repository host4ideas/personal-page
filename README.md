# Repository for my personal page
## This project was made with: Astro + Vue

What is Astro?

Astro is a frontend framework that follows the [Islands Architecture](#). This architecture aims for small, focused chunks of interactivity within server-rendered web pages, this is achieved by reducing to zero the amount of JavaScript loaded in the client.

We can see this as a work-around between CSR (Client Side Rendering) and SSR (Server Side Rendering), as pages needs a mix of the the best posible TTI (Time to Interactive) and FP (First Paint).

Most of the pages are a mix of static and dynamic content, static content does not require rehydratation after rendering, dynamic content needs to be wired to its events. The DOM has to be regenerated in the client-side, bundled to the client. A component has its hydratation script in the Islands Architecture that executes asynchronously, independent of any other script on the page. A performance issue in one chould not affect the other.

So we could define each component as a small app.

```
npm init astro -- --template framework-vue
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/framework-vue)

This example showcases Astro working with [Vue](https://v3.vuejs.org/).

