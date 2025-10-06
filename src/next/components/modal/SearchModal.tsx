import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fuse from 'fuse.js'
import { Modal } from '../shared/modal/Modal'
import { SearchIndexItem } from '../../types/search'
import { closeSearchModal } from '../../redux/searchSlice'
import styles from './SearchModal.module.scss'
import Link from 'next/link'

interface SearchModalProps {
  searchIndex: SearchIndexItem[]
}

/**
 * SearchModal component for displaying search results across the site
 */
export const SearchModal: React.FC<SearchModalProps> = ({ searchIndex }) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: any) => state.search.isModalOpen)
  const query = useSelector((state: any) => state.search.query)

  const handleClose = () => {
    dispatch(closeSearchModal())
  }

  // Configure Fuse.js for fuzzy searching
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [`title`, `description`, `categories`],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2
    })
  }, [searchIndex])

  // Perform search
  const results = useMemo(() => {
    if (!query || query.length < 2) {
      return []
    }
    return fuse.search(query).map(result => result.item)
  }, [query, fuse])

  // Group results by type
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchIndexItem[]> = {
      article: [],
      project: [],
      creator: []
    }
    results.forEach(result => {
      groups[result.type].push(result)
    })
    return groups
  }, [results])

  const getResultLink = (result: SearchIndexItem): string => {
    switch (result.type) {
      case `article`:
        return `/blog/${result.slug}`
      case `project`:
        return `/projects/${result.slug}`
      case `creator`:
        return `/about/${result.slug}`
      default:
        return `/`
    }
  }

  const getTypeName = (type: string): string => {
    switch (type) {
      case `article`:
        return `Articles`
      case `project`:
        return `Projects`
      case `creator`:
        return `Creators`
      default:
        return type
    }
  }

  return (
    <Modal title="Search" isOpen={isOpen} onClose={handleClose}>
      <div className={styles.searchContainer}>
        {query.length > 0 && query.length < 2 && (
          <p className={styles.hint}>Type at least 2 characters to search</p>
        )}

        {query.length >= 2 && results.length === 0 && (
          <p className={styles.noResults}>No results found for &quot;{query}&quot;</p>
        )}

        {query.length >= 2 && results.length > 0 && (
          <div className={styles.resultsContainer}>
            {Object.entries(groupedResults).map(([type, items]) => {
              if (items.length === 0) return null

              return (
                <div key={type} className={styles.resultGroup}>
                  <h3 className={styles.groupTitle}>{getTypeName(type)}</h3>
                  <ul className={styles.resultsList}>
                    {items.map(item => (
                      <li key={item.id} className={styles.resultItem}>
                        <Link href={getResultLink(item)} onClick={handleClose}>
                          <div className={styles.resultTitle}>{item.title}</div>
                          <div className={styles.resultDescription}>
                            {item.description.substring(0, 150)}
                            {item.description.length > 150 ? `...` : ``}
                          </div>
                          {item.categories && item.categories.length > 0 && (
                            <div className={styles.resultCategories}>
                              {item.categories.map(cat => (
                                <span key={cat} className={styles.category}>
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Modal>
  )
}
