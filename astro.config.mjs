import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
  redirects: {
    '/': '/home',
  },
  integrations: [
    storyblok({
      // Access token must be updated between spaces
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
      apiOptions: {
        region: 'us',
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
