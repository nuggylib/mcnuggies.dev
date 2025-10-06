import { useEffect, useState } from 'react'
import { SearchIndex } from '../types/search'

/**
 * Hook to load the search index from the static JSON file.
 * The search index is generated at build time and served as a static asset.
 */
export const useSearchIndex = (): SearchIndex | null => {
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null)

  useEffect(() => {
    fetch(`/search-index.json`)
      .then(response => response.json())
      .then(data => setSearchIndex(data))
      .catch(error => {
        console.error(`Failed to load search index:`, error)
      })
  }, [])

  return searchIndex
}
