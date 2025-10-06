import sanityClient from '../sanity/client'
import { SearchIndex, SearchIndexItem } from '../types/search'
import { SanityBlock, SanityKeyed } from 'sanity-codegen'

/**
 * Converts PortableText blocks to plain text string
 */
const portableTextToPlainText = (blocks: Array<SanityKeyed<SanityBlock>> = []): string => {
  return blocks
    .filter(block => block._type === `block`)
    .map(block => {
      if (`children` in block) {
        return (block.children as any[])
          .map(child => child.text)
          .join(``)
      }
      return ``
    })
    .join(` `)
}

/**
 * Fetches all searchable content from Sanity and builds a search index
 */
export const buildSearchIndex = async (): Promise<SearchIndex> => {
  // Fetch articles
  const articles = await sanityClient.fetch(`
    *[_type == "article"]{
      _id,
      title,
      slug,
      summary,
      publishDate,
      categories[]->{title}
    } | order(publishDate desc)
  `)

  // Fetch projects
  const projects = await sanityClient.fetch(`
    *[_type == "project"]{
      _id,
      title,
      slug,
      description
    } | order(title asc)
  `)

  // Fetch creators
  const creators = await sanityClient.fetch(`
    *[_type == "creator"]{
      _id,
      name,
      slug,
      bio,
      profession
    } | order(name asc)
  `)

  // Transform articles into search items
  const articleItems: SearchIndexItem[] = articles.map((article: any) => ({
    id: article._id,
    type: `article` as const,
    title: article.title || ``,
    description: portableTextToPlainText(article.summary),
    slug: article.slug?.current || ``,
    categories: article.categories?.map((cat: any) => cat.title) || [],
    publishDate: article.publishDate
  }))

  // Transform projects into search items
  const projectItems: SearchIndexItem[] = projects.map((project: any) => ({
    id: project._id,
    type: `project` as const,
    title: project.title || ``,
    description: portableTextToPlainText(project.description),
    slug: project.slug?.current || ``
  }))

  // Transform creators into search items
  const creatorItems: SearchIndexItem[] = creators.map((creator: any) => ({
    id: creator._id,
    type: `creator` as const,
    title: creator.name || ``,
    description: creator.profession || portableTextToPlainText(creator.bio),
    slug: creator.slug?.current || ``
  }))

  return {
    articles: articleItems,
    projects: projectItems,
    creators: creatorItems
  }
}
