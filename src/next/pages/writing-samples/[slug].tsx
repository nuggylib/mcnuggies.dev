import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import { Creator, WritingSample } from "../../types/sanity"
import styles from './writingSamples.module.scss'
import Link from "next/link"

type WritingSampleWithEmployer = WritingSample & {
  employerName?: string
  employerImageUrl?: string
}

interface EmployerGroup {
  employerName: string
  employerImageUrl?: string
  samples: WritingSampleWithEmployer[]
}

interface WritingSamplesPageProps {
  creator: Creator
  writingSamples: WritingSampleWithEmployer[]
}

const groupSamplesByEmployer = (samples: WritingSampleWithEmployer[]): EmployerGroup[] => {
  const groupMap = new Map<string, EmployerGroup>()

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

const WritingSamplesPage: FunctionComponent<WritingSamplesPageProps> = ({
  creator,
  writingSamples
}) => {

  if (!creator) {
    return null
  }

  const groupedSamples = groupSamplesByEmployer(writingSamples)

  return (
    <PageLayout
      pageTitle={`Writing Samples - ${creator.name}`}
      useTitleOverlay={false}
      metaDescription={`Writing samples by ${creator.name}`}
    >
      <div className={styles.pageHeader}>
        <h1>Writing Samples</h1>
        <p>By <Link href={`/about/${creator.slug?.current}`}>{creator.name}</Link></p>
      </div>
      <div className={styles.samplesContainer}>
        {writingSamples.length > 0 ? (
          <div className={styles.employerGroups}>
            {groupedSamples.map((group, groupIndex) => (
              <div key={`employer-${groupIndex}`} className={styles.employerGroup}>
                <div className={styles.employerHeader}>
                  {group.employerImageUrl && (
                    <div className={styles.employerImage}>
                      <img src={group.employerImageUrl} alt={`${group.employerName} logo`} />
                    </div>
                  )}
                  <h2 className={styles.employerName}>{group.employerName}</h2>
                </div>
                <ul className={styles.samplesList}>
                  {group.samples.map((sample, sampleIndex) => (
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
              </div>
            ))}
          </div>
        ) : (
          <p>No writing samples available.</p>
        )}
      </div>
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "creator" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = `` } = context.params

  const creator: Creator = await sanityClient.fetch(`
    *[_type == "creator" && slug.current == $slug][0]{
      name,
      slug,
      _id
    }
  `, { slug: slug.toLowerCase() })

  if (!creator) {
    return {
      props: {
        creator: null,
        writingSamples: []
      }
    }
  }

  const writingSamples: WritingSampleWithEmployer[] = await sanityClient.fetch(`
    *[_type == "writingSample" && creator._ref == $creatorId] | order(_createdAt desc) {
      title,
      url,
      "employerName": employer->name,
      "employerImageUrl": employer->image.asset->url
    }
  `, { creatorId: creator._id })

  return {
    props: {
      creator,
      writingSamples
    }
  }
}

export default WritingSamplesPage
