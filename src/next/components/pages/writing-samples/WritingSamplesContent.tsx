import React, { FunctionComponent } from "react"
import { Creator, WritingSample } from "../../../types/sanity"
import { WritingSamplesPageHeader } from "./WritingSamplesPageHeader"
import { EmployerGroup } from "./EmployerGroup"
import styles from './writingSamples.module.scss'

type WritingSampleWithEmployer = WritingSample & {
  employerName?: string
  employerImageUrl?: string
}

interface EmployerGroupData {
  employerName: string
  employerImageUrl?: string
  samples: WritingSampleWithEmployer[]
}

export interface WritingSamplesContentProps {
  creator: Creator
  writingSamples: WritingSampleWithEmployer[]
}

const groupSamplesByEmployer = (samples: WritingSampleWithEmployer[]): EmployerGroupData[] => {
  const groupMap = new Map<string, EmployerGroupData>()

  samples.forEach((sample) => {
    const employerName = sample.employerName || `Unknown Employer`

    if (!groupMap.has(employerName)) {
      groupMap.set(employerName, {
        employerName,
        employerImageUrl: sample.employerImageUrl,
        samples: []
      })
    }

    groupMap.get(employerName)!.samples.push(sample)
  })

  return Array.from(groupMap.values())
}

export const WritingSamplesContent: FunctionComponent<WritingSamplesContentProps> = ({
  creator,
  writingSamples
}) => {
  const groupedSamples = groupSamplesByEmployer(writingSamples)

  return (
    <>
      <WritingSamplesPageHeader creator={creator} />
      <div className={styles.samplesContainer}>
        {writingSamples.length > 0 ? (
          <div className={styles.employerGroups}>
            {groupedSamples.map((group, groupIndex) => (
              <EmployerGroup
                key={`employer-${groupIndex}`}
                employerName={group.employerName}
                employerImageUrl={group.employerImageUrl}
                samples={group.samples}
                groupIndex={groupIndex}
              />
            ))}
          </div>
        ) : (
          <p>No writing samples available.</p>
        )}
      </div>
    </>
  )
}
