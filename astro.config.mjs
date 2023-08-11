import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  // server: preview
  // static: public
  output: import.meta.env.VITE_ENVIRONMENT === 'preview' ? 'server' : 'static',
  adapter:
    import.meta.env.VITE_ENVIRONMENT === 'preview' ? netlify() : undefined,
  integrations: [
    storyblok({
      accessToken:
        import.meta.env.VITE_ENVIRONMENT === 'preview'
          ? 'ZO2jzFhw61xOkJr2ntHu9gtt'
          : 'UW5wnKDsTNXKlxqXkrP4twtt',
      bridge: import.meta.env.VITE_ENVIRONMENT === 'preview' ? true : false,
      apiOptions: {
        region: 'us',
      },
      components: {
        menu: 'storyblok/Menu',
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
