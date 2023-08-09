import { $ as $$BaseLayout } from './404.astro.98443c26.mjs'
import {
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  s as spreadAttributes,
  y as ye,
  e as renderComponent,
  $ as $e,
} from '../astro.9b73cc18.mjs'
import 'html-escaper'
import camelcase from 'camelcase'
import '@storyblok/js'
import '../404.1571fe42.6dd58ac8.mjs'
import 'cookie'
import 'kleur/colors'
import '@astrojs/internal-helpers/path'
import 'path-to-regexp'
import 'mime'
import 'string-width'

const $$Astro$5 = createAstro()
const $$Page = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots)
    Astro2.self = $$Page
    const { blok } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(
      ye(blok),
    )}>
  ${blok.body?.map(blok2 => {
    return renderTemplate`${renderComponent(
      $$result,
      'StoryblokComponent',
      $$StoryblokComponent,
      { blok: blok2 },
    )}`
  })}
</main>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/storyblok/Page.astro',
  void 0,
)

const $$Astro$4 = createAstro()
const $$Feature = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots)
    Astro2.self = $$Feature
    const { blok } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<h3${spreadAttributes(
      ye(blok),
    )}>${blok.name}</h3>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/storyblok/Feature.astro',
  void 0,
)

const $$Astro$3 = createAstro()
const $$Grid = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
    Astro2.self = $$Grid
    const { blok } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ye(blok))}>
  ${blok.columns?.map(blok2 => {
    return renderTemplate`${renderComponent(
      $$result,
      'StoryblokComponent',
      $$StoryblokComponent,
      { blok: blok2 },
    )}`
  })}
</div>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/storyblok/Grid.astro',
  void 0,
)

const $$Astro$2 = createAstro()
const $$Teaser = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
    Astro2.self = $$Teaser
    const { blok } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<h3${spreadAttributes(
      ye(blok),
    )}>${blok.headline}</h3>`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/storyblok/Teaser.astro',
  void 0,
)

const components = {
  page: $$Page,
  feature: $$Feature,
  grid: $$Grid,
  teaser: $$Teaser,
}

const $$Astro$1 = createAstro()
const $$StoryblokComponent = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
    Astro2.self = $$StoryblokComponent
    const { blok, ...props } = Astro2.props
    if (!blok) {
      throw new Error(
        "Cannot render StoryblokComponent. 'blok' prop is undefined.",
      )
    }
    let key = camelcase(blok.component)
    const componentFound = key in components
    let Component
    if (!componentFound) {
      throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`,
      )
    } else {
      Component = components[key]
    }
    return renderTemplate`${renderComponent($$result, 'Component', Component, {
      blok: blok,
      ...props,
    })}`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/node_modules/@storyblok/astro/StoryblokComponent.astro',
  void 0,
)

const $$Astro = createAstro()
async function getStaticPaths() {
  const storyblokApi = $e()
  const { data } = await storyblokApi.get('cdn/links', {
    version: 'published',
  })
  let links = data.links
  links = Object.values(links)
  return links.map(link => {
    return {
      params: {
        slug: link.slug === 'home' ? void 0 : link.slug,
      },
    }
  })
}
const $$ = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$
    const pageTitle = 'Michael Cukingnan'
    const { slug } = Astro2.params
    const storyblokApi = $e()
    const { data } = await storyblokApi.get(
      `cdn/stories/${slug === void 0 ? 'home' : slug}`,
      {
        version: 'published',
      },
    )
    const story = data.story
    return renderTemplate`${renderComponent(
      $$result,
      'BaseLayout',
      $$BaseLayout,
      { pageTitle: pageTitle },
      {
        default: $$result2 => renderTemplate`
  ${renderComponent($$result2, 'StoryblokComponent', $$StoryblokComponent, {
    blok: story.content,
  })}
`,
      },
    )}`
  },
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/[...slug].astro',
  void 0,
)

const $$file =
  'F:/Users/Michael/Desktop/Github/apps/my-astro-website/src/pages/[...slug].astro'
const $$url = '/[...slug]'

export { $$ as default, $$file as file, getStaticPaths, $$url as url }
