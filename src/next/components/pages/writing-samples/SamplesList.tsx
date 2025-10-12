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
        <li key={`sample-${groupIndex}-${sampleIndex}`}>
          <button
            className={styles.sampleLink}
            onClick={() => window.open(sample.url!, `_blank`)}
          >
            <div className={styles.sampleContent}>
              <div className={styles.sampleLabelRow}>
                <span>{sample.title}</span>
                <div className={styles.writingSampleTag}>Some Tag</div>
              </div>
              <div className={styles.sampleContentBody}>
                <p>Some description</p>
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
