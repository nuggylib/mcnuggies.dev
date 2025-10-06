import React from 'react'
import Head from "next/head"
import SiteNavigation from './nav/NavBar'
import Sidebar from './sidebar/Sidebar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import HeroImage from './hero-image/HeroImage'
import { SearchModal } from './SearchModal'
import { useSearchIndex } from '../../hooks/useSearchIndex'
import { SearchIndexItem } from '../../types/search'
import styles from './PageLayout.module.scss'

interface PageLayoutProps {
    pageTitle?: string
    useTitleOverlay?: boolean
    metaDescription: string | undefined
    children: any
    imgSrc?: string
}

export const PageLayout = ({
    pageTitle,
    useTitleOverlay = false,
    metaDescription,
    children,
    imgSrc
}: PageLayoutProps) => {
    const searchIndex = useSearchIndex()

    // Flatten the search index for the SearchModal component
    const flattenedIndex: SearchIndexItem[] = searchIndex
      ? [...searchIndex.articles, ...searchIndex.projects, ...searchIndex.creators]
      : []

    return (
      <>
        <Head>
          <title>{`mcnuggies | ${pageTitle}`}</title>
          <meta name='description' content={metaDescription} />
          <link rel="icon" href="/mcnuggies.ico" />
        </Head>
        <Script defer data-domain="mcnuggies.dev" src="https://plausible.io/js/script.js" />
        {/* TODO: Remove this since it's Vercel stuff - we're gutting all Vercel-specific logic */}
        <SpeedInsights />
        <SiteNavigation />
        <Sidebar
              options={[]}
          />
        {!!imgSrc && (
          <HeroImage
            pageTitle={pageTitle}
            useTitleOverlay={useTitleOverlay}
            imgSrc={imgSrc}
          />
        )}
        <main className={styles.content}>
          {children}
          <SearchModal searchIndex={flattenedIndex} />
        </main>
      </>
    )
}
