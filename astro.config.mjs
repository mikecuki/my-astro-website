import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
  redirects: {
    '/': '/home',
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        details: 'storyblok/Details',
        page: 'storyblok/Page',
        title: 'storyblok/Title',
      },
      apiOptions: {
        region: 'us',
      },
    }),
  ],
})
