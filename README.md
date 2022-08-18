# Repository for my personal page

## This project was made with: Astro + Vue

### What is Astro?

Astro is a frontend framework that follows the [Islands Architecture](https://www.patterns.dev/posts/islands-architecture/). This architecture aims for small, focused chunks of interactivity within server-rendered web pages, this is achieved by reducing to zero the amount of JavaScript loaded in the client.

We can see this as a work-around between CSR (Client Side Rendering) and SSR (Server Side Rendering), as pages needs a mix of the the best posible TTI (Time to Interactive) and FP (First Paint).

Most of the pages are a mix of static and dynamic content, static content does not require rehydratation after rendering, dynamic content needs to be wired to its events. The DOM has to be regenerated in the client-side, bundled to the client, the page is composed by components, which has its hydratation script in the Islands Architecture that executes asynchronously, independent of any other script on the page; a performance issue in one of the components should not affect the others.

So we could define each component as a small app.

```bash
npm init astro --template framework-vue
```

### The project was initialized following this template from the Astro team

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/framework-vue)

### Color scheme

```text
-- Light theme

 RGBA: rgba(213, 244, 230, 1)

 HEX: #80ced6
 RGBA: rgba(128, 206, 214, 1)

 RGBA: rgba(254, 251, 216, 1)

 RGBA: rgba(97, 134, 133, 1)

 -- Dark theme

 HEX: #2C3333
 RGBA: rgba(44, 51, 51, 1)

 HEX: #395B64
 RGBA: rgba(57, 91, 100, 1)

 HEX: #A5C9CA
 RGBA: rgba(165, 201, 202, 1)

 HEX: #E7F6F2
 RGBA: rgba(231, 246, 242, 1)
```

## Icons

<a target="_blank" href="https://icons8.com/icon/124328/death-star">Death Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/2GeVerrtsdj0/boba">Boba</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://www.flaticon.com/free-icons/star-wars" title="star wars icons">Star wars icons created by Freepik - Flaticon</a>
<a target="_blank" href="https://icons8.com/icon/4OkVVhM1gDQn/baby-yoda">Baby Yoda</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

## Bibliography

It's widely known that developers aren't able to work without forums like [Stack Overflow](https://stackoverflow.com/). That's the reason why I decided to include a list of all the resources which I used for this project.

[Prevent page scrolling when scrolling a element](https://stackoverflow.com/questions/7600454/how-to-prevent-page-scrolling-when-scrolling-a-div-element)
