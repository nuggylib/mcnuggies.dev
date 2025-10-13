import React, { FunctionComponent } from "react"
import { PortableText } from '@portabletext/react'
import { WritingSample } from "../../../types/sanity"
import styles from './SamplesList.module.scss'

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
        <li key={`sample-${groupIndex}-${sampleIndex}`}>
          <button
            className={styles.sampleLink}
            onClick={() => window.open(sample.url!, `_blank`)}
          >
            <div className={styles.sampleContent}>
              <div className={styles.sampleLabelRow}>
                <span>{sample.title}</span>
                <div className={styles.writingSampleTag}>{sample.tag}</div>
              </div>
              <div className={styles.sampleContentBody}>
                {sample.description && <PortableText value={sample.description} />}
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
