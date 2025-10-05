/**
 * Search result item representing a searchable piece of content
 */
export interface SearchIndexItem {
  /** Unique identifier for the search result */
  id: string
  /** Type of content (article, project, creator, etc.) */
  type: `article` | `project` | `creator`
  /** Title of the content */
  title: string
  /** Brief description or summary */
  description: string
  /** URL slug for navigation */
  slug: string
  /** Optional categories associated with the content */
  categories?: string[]
  /** Optional publish date for articles */
  publishDate?: string
}

/**
 * Full search index containing all searchable content
 */
export interface SearchIndex {
  articles: SearchIndexItem[]
  projects: SearchIndexItem[]
  creators: SearchIndexItem[]
}
