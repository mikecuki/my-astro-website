import { storyblokInit, apiPlugin } from '@storyblok/js'
import {
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  b as addAttribute,
  d as renderHead,
  e as renderComponent,
  f as renderSlot,
} from '../astro.9b73cc18.mjs'
import 'html-escaper'
import '../404.1571fe42.6dd58ac8.mjs'

const { storyblokApi } = storyblokInit({
  accessToken: 'ZO2jzFhw61xOkJr2ntHu9gtt',
  use: [apiPlugin],
  apiOptions: { region: 'us' },
})
const storyblokApiInstance = storyblokApi

globalThis.storyblokApiInstance = storyblokApiInstance

const $$Astro$3 = createAstro()
const $$Header = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
    Astro2.self = $$Header
    return renderTemplate`${maybeRenderHead()}<header>
  <!-- Header -->
  <a href="/" aria-label="Home Page">
    <svg class="svg-icon" viewBox="0 0 20 20" style="max-width: 100px">
      <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
    </svg>
  </a>
  <nav>
    <ul>
      <li>
        <a href="/about/" aria-label="About Page">About</a>
      </li>
      <li>
        <a href="/projects/" aria-label="Projects Page">Projects</a>
      </li>
    </ul>
  </nav>
</header>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/components/Header.astro',
  void 0,
)

const $$Astro$2 = createAstro()
const $$Footer = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
    Astro2.self = $$Footer
    return renderTemplate`${maybeRenderHead()}<footer>
  <!-- Footer -->
</footer>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/components/Footer.astro',
  void 0,
)

const $$Astro$1 = createAstro()
const $$BaseLayout = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
    Astro2.self = $$BaseLayout
    const { pageTitle } = Astro2.props
    return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, 'content')}>
    <title>${pageTitle}</title>
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, 'Header', $$Header, {})}
    ${renderSlot($$result, $$slots['default'])}
    ${renderComponent($$result, 'Footer', $$Footer, {})}
  </body></html>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/layouts/BaseLayout.astro',
  void 0,
)

const $$Astro = createAstro()
const $$404 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$404
    const pageTitle = 'Michael Cukingnan - 404'
    return renderTemplate`${renderComponent(
      $$result,
      'BaseLayout',
      $$BaseLayout,
      { pageTitle: pageTitle },
      {
        default: $$result2 => renderTemplate`
  ${maybeRenderHead()}<p>404</p>
`,
      },
    )}`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/404.astro',
  void 0,
)

const $$file =
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/404.astro'
const $$url = '/404'

const _404 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$404,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
)

export { $$BaseLayout as $, _404 as _ }
