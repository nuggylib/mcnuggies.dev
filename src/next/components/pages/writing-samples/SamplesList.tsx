import React, { FunctionComponent } from "react"
import { WritingSample } from "../../../types/sanity"
import styles from './writingSamples.module.scss'

export interface SamplesListProps {
  samples: WritingSample[]
  groupIndex: number
}

export const SamplesList: FunctionComponent<SamplesListProps> = ({
  samples,
  groupIndex
}) => {
  return (
    <ul className={styles.samplesList}>
      {samples.map((sample, sampleIndex) => (
        <li key={`sample-${groupIndex}-${sampleIndex}`} className={styles.sampleItem}>
          <a
            href={sample.url!}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sampleLink}
          >
            {sample.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
