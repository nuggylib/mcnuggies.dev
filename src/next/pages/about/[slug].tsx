import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import { Creator, Employer, JobTitle } from "../../types/sanity"
import CreatorImage from "../../components/pages/about/CreatorImage"
import { PortableText } from "@portabletext/react"
import GitHubCalendar from "react-github-calendar"
import { EmployerDetails } from "../../components/pages/about/EmployerDetails"
import kebabCase from "../../util/kebabCase"
import styles from './AboutCreator.module.scss'
import { LinkedInLogo } from "../../components/shared/icons/LinkedInLogo"
import { GitHubLogo } from "../../components/shared/icons/GitHubLogo"
import CustomIcon from "../../components/shared/CustomIcon"
import Link from "next/link"

type EmployerProps = Employer & {
    imageUrl: string
    jobs: JobTitle[]
}

type CreatorProps = Creator & {
    imageUrl: string
    imageBase64: string
}

interface AboutCreatorPageProps {
    creators: CreatorProps[]
    employers: EmployerProps[]
    writingSamplesCount: number
    creatorSlug: string
}

const getYearsSinceDate = (startDate: Date) => {
    var ageDifMs = Date.now().valueOf() - startDate.valueOf()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const AboutCreatorPage: FunctionComponent<AboutCreatorPageProps> = ({
    creators,
    employers,
    writingSamplesCount,
    creatorSlug
}) => {
    // There will only be one creator in the response since they should be queried by a unique identifier
    const creator = creators?.[0]

    if (!creator) {
        return null
    }

    return (
      <PageLayout
            pageTitle={`About ${creator.name}`}
            useTitleOverlay={false}
            metaDescription={`Creator details for ${creator.name}`}
        >
        <div className={styles.creatorDetails}>
          <CreatorImage
            imageUrl={creator.imageUrl}
            base64Image={creator.imageBase64}
          />
          <div className={styles.creatorMetadata}>
            <h1 className='creator-name'>
              {creator.name!}
            </h1>
            <div className={styles.metadataFields}>
              <span>🧠 {getYearsSinceDate(new Date(creator.careerStartDate!))} years experience</span>
              <div className={styles.socialLink}>
                <CustomIcon
                  fileName='bootstrap-envelope-at'
                  height={22}
                  width={22}
                  />
                <a href={`mailto:${creator.email}`}>{creator.email}</a>
              </div>
              {creator.linkedInUrl && <button onClick={() => window.open(creator.linkedInUrl, `_blank`)} className={styles.socialLink}>
                <LinkedInLogo
                  size={22}
                  />
                <span>{creator.linkedInUsername}</span>
              </button>}
              {creator.githubUrl && <button onClick={() => window.open(creator.githubUrl, `_blank`)} className={styles.socialLink}>
                <GitHubLogo
                  size={22}
                  />
                <span>{creator.githubUsername}</span>
              </button>}
            </div>
          </div>
        </div>
        {writingSamplesCount > 0 && (
          <Link href={`/writing-samples/${creatorSlug}`}>
            <button className={styles.writingSamplesButton}>
              Writing Samples
            </button>
          </Link>
        )}
        <div className={styles.bio}>
          <PortableText
            value={creator.bio!}
            />
        </div>
        {creator.githubUsername && <div className={styles.githubActivity}>
          <h2>GitHub Activity</h2>
          <GitHubCalendar
            colorScheme="light"
            username={creator.githubUsername}
            blockSize={10}
            fontSize={12}
          />
        </div>}
        <div className='work-history'>
          <div className='section-title'>
            <h2>Work history</h2>
          </div>
          {employers.map(employer => {
              return (
                <EmployerDetails
                  key={`employer-${kebabCase(employer.name!.toLowerCase())}`}
                  name={employer.name!}
                  homePage={employer.homePage!}
                  startDate={employer.startDate!}
                  endDate={employer.endDate}
                  imageUrl={employer.imageUrl}
                  jobs={employer.jobs}
                />
              )
            })}
        </div>
      </PageLayout>)
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
    const creators = await sanityClient.fetch(`
    *[_type == "creator" && slug.current == $slug]{
        name,
        email,
        bio,
        careerStartDate,
        "imageUrl": image.asset->url,
        "imageBase64": image.asset->metadata.lqip,
        githubUrl,
        githubUsername,
        linkedInUsername,
        linkedInUrl,
        "employerIds": employers[]._ref,
        _id
    }
    `, { slug: slug.toLowerCase() })

    const employerIds = creators[0]?.employerIds || []
    const creatorId = creators[0]?._id

    const employers = await sanityClient.fetch(`
    *[_type == "employer" && _id in $employerIds]{
        name,
        homePage,
        startDate,
        endDate,
        "imageUrl": image.asset->url,
        "jobs": jobTitles[]->
    } | order(startDate desc)`, { employerIds })

    // Get count of writing samples for this creator
    const writingSamplesCount = creatorId
      ? await sanityClient.fetch(`count(*[_type == "writingSample" && creator._ref == $creatorId])`, { creatorId })
      : 0

    return {
      props: {
          creators,
          employers,
          writingSamplesCount,
          creatorSlug: slug.toLowerCase()
      }
  }
}

export default AboutCreatorPage
