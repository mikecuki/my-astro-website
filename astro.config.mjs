import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    storyblok({
      // Access token must be updated when changing spaces in storyblok
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
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
