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
}

const getYearsSinceDate = (startDate: Date) => {
    var ageDifMs = Date.now().valueOf() - startDate.valueOf()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const AboutCreatorPage: FunctionComponent<AboutCreatorPageProps> = ({
    creators,
    employers
}) => {
    // There will only be one creator in the response since they should be queried by a unique identifier
    const creator = creators[0]

    return (creator &&
      <PageLayout
            // TODO: Use the creator's name
            pageTitle={`About ${creator.name}`}
            useTitleOverlay={false}
            // TODO: Use the creator's name
            metaDescription={`Creator details for ${creator.name}`}
        >
        <div className={styles.creatorDetails}>
          <CreatorImage
            imageUrl={creator.imageUrl}
            base64Image={creator.imageBase64}
          />
          <div>
            <h1 className='creator-name'>
              {creator.name!}
            </h1>
            <p>{getYearsSinceDate(new Date(creator.careerStartDate!))} years experience</p>
            <a href={`mailto:${creator.email}`}>{creator.email}</a>
          </div>
        </div>
        <div className='creator-bio'>
          <PortableText
            value={creator.bio!}
            />
        </div>
        {creator.githubUsername && <div className='github-activity'>
          <h2>GitHub Activity</h2>
          <GitHubCalendar colorScheme="light" username={creator.githubUsername} />
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

export async function getStaticProps() {
    // TODO: Modify this so that it queries the user by the slug name (if possible - we may need a workaround)
    const creators = await sanityClient.fetch(`
    *[_type == "creator" && name == "Armando Vasquez"]{
        name,
        email,
        bio,
        careerStartDate,
        "imageUrl": image.asset->url,
        "imageBase64": image.asset->metadata.lqip,
        githubUrl,
        githubUsername,
        linkedInUrl,
    } 
    `)

    const employers = await sanityClient.fetch(`
    *[_type == "employer"]{
        name,
        homePage,
        startDate,
        endDate,
        homePage,
        "imageUrl": image.asset->url,
        "jobs": jobTitles[]->
    } | order(startDate desc)`)

    return {
      props: {
          creators,
          employers
      }
  }
}

export default AboutCreatorPage
