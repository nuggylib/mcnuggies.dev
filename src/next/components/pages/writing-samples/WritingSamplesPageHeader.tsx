import React, { FunctionComponent } from "react"
import Link from "next/link"
import { Creator } from "../../../types/sanity"
import styles from './WritingSamplesPageHeader.module.scss'

export interface WritingSamplesPageHeaderProps {
  creator: Creator
}

export const WritingSamplesPageHeader: FunctionComponent<WritingSamplesPageHeaderProps> = ({
  creator
}) => {
  return (
    <div className={styles.pageHeader}>
      <h1>Writing Samples</h1>
      <p>
        A curated list of professional writing samples by{` `}
        <Link href={`/about/${creator.slug?.current}`}>
          {creator.name}
        </Link>
      </p>
    </div>
  )
}
