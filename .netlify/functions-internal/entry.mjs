import * as adapter from '@astrojs/netlify/netlify-functions.js'
import { renderers } from './renderers.mjs'
import 'mime'
import 'cookie'
import 'kleur/colors'
import { g as deserializeManifest } from './chunks/astro.9b73cc18.mjs'
import '@astrojs/internal-helpers/path'
import 'html-escaper'
import 'path-to-regexp'
import 'string-width'

const _page0 = () => import('./chunks/404@_@astro.02a61646.mjs')
const _page1 = () => import('./chunks/_...23e9bcf0.mjs')
const pageMap = new Map([
  ['src/pages/404.astro', _page0],
  ['src/pages/[...slug].astro', _page1],
])
const _manifest = Object.assign(
  deserializeManifest({
    adapterName: '@astrojs/netlify/functions',
    routes: [
      {
        file: '',
        links: [],
        scripts: [{ type: 'external', value: '/_astro/page.9f2ff80f.js' }],
        styles: [],
        routeData: {
          route: '/404',
          type: 'page',
          pattern: '^\\/404\\/?$',
          segments: [[{ content: '404', dynamic: false, spread: false }]],
          params: [],
          component: 'src/pages/404.astro',
          pathname: '/404',
          prerender: false,
          _meta: { trailingSlash: 'ignore' },
        },
      },
      {
        file: '',
        links: [],
        scripts: [{ type: 'external', value: '/_astro/page.9f2ff80f.js' }],
        styles: [],
        routeData: {
          route: '/[...slug]',
          type: 'page',
          pattern: '^(?:\\/(.*?))?\\/?$',
          segments: [[{ content: '...slug', dynamic: true, spread: true }]],
          params: ['...slug'],
          component: 'src/pages/[...slug].astro',
          prerender: false,
          _meta: { trailingSlash: 'ignore' },
        },
      },
    ],
    base: '/',
    compressHTML: false,
    markdown: {
      drafts: false,
      syntaxHighlight: 'shiki',
      shikiConfig: { langs: [], theme: 'github-dark', wrap: false },
      remarkPlugins: [],
      rehypePlugins: [],
      remarkRehype: {},
      gfm: true,
      smartypants: true,
    },
    componentMetadata: [
      [
        'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/404.astro',
        { propagation: 'none', containsHead: true },
      ],
      [
        'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/[...slug].astro',
        { propagation: 'none', containsHead: true },
      ],
    ],
    renderers: [],
    clientDirectives: [
      [
        'idle',
        '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
      ],
      [
        'load',
        '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
      ],
      [
        'media',
        '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
      ],
      [
        'only',
        '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
      ],
      [
        'visible',
        '(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
      ],
    ],
    entryModules: {
      '\u0000@astrojs-ssr-virtual-entry': '_@astrojs-ssr-virtual-entry.mjs',
      '\u0000@astro-renderers': 'renderers.mjs',
      '\u0000empty-middleware': '_empty-middleware.mjs',
      '/src/pages/[...slug].astro': 'chunks/pages/_...slug_.astro.75c65865.mjs',
      '\u0000@astro-page:src/pages/404@_@astro':
        'chunks/404@_@astro.02a61646.mjs',
      '\u0000@astro-page:src/pages/[...slug]@_@astro':
        'chunks/_...23e9bcf0.mjs',
      'astro:scripts/page.js': '_astro/page.9f2ff80f.js',
      'astro:scripts/before-hydration.js': '',
    },
    assets: [
      '/favicon.svg',
      '/_astro/page.9f2ff80f.js',
      '/_astro/page.9f2ff80f.js',
    ],
  }),
  {
    pageMap,
    renderers,
  },
)
const _args = {}

const _exports = adapter.createExports(_manifest, _args)
const handler = _exports['handler']

const _start = 'start'
if (_start in adapter) {
  adapter[_start](_manifest, _args)
}

export { handler, pageMap }
