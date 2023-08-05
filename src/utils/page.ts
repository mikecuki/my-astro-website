import { useStoryblokApi } from '@storyblok/astro'

export async function getPageInfo(page: string) {
  try {
    const storyblokApi = useStoryblokApi()
    const { data } = await storyblokApi.get(`cdn/stories/${page}`, {
      version: import.meta.env.DEV ? 'draft' : 'published',
    })
    if (data.story) {
      const { content } = data.story
      return content
    }
    Response.redirect('/404/')
  } catch (error) {
    console.log('error')
    Response.redirect('/404/')
  }
}