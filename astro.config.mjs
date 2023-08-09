import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

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
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
