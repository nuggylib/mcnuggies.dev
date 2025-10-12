import React, { FunctionComponent } from "react"
import { WritingSample } from "../../../types/sanity"
import { SamplesList } from "./SamplesList"
import styles from './writingSamples.module.scss'
import Image from 'next/image'

export interface EmployerGroupProps {
  employerName: string
  employerImageUrl?: string
  samples: WritingSample[]
  groupIndex: number
}

export const EmployerGroup: FunctionComponent<EmployerGroupProps> = ({
  employerName,
  employerImageUrl,
  samples,
  groupIndex
}) => {
  return (
    <div className={styles.employerGroup}>
      <div className={styles.employerHeader}>
        {employerImageUrl && (
          <div className={styles.employerImage}>
            <Image
                src={employerImageUrl}
                height={48}
                width={48}
                alt={`${employerName} logo`}
                placeholder='blur'
                blurDataURL={employerImageUrl}
            />
          </div>
        )}
        <h2 className={styles.employerName}>{employerName}</h2>
      </div>
      <SamplesList samples={samples} groupIndex={groupIndex} />
    </div>
  )
}
