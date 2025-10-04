import { NextPage } from 'next'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import CreatorsGrid from '../components/pages/about/CreatorsGrid'
import sanityClient from '../sanity/client'
import { Creator } from '../types/sanity'

export type CreatorProps = Creator & {
  imageUrl: string
  imageBase64: string
  currentEmployerName: string
}
interface AboutPageProps {
  creators: CreatorProps[]
}

const About: NextPage<AboutPageProps> = (props) => {
  const { creators } = props
  console.log(`CREATORS: `, creators)
    return (
      <PageLayout
                pageTitle='About'
                metaDescription={`Learn more about the ${process.env.HOST} team`}
            >
        <div className='heading'>
          <h1>Tinkerers unite!</h1>
          <p>{process.env.HOST} is built and maintained by people who love to build and tinker. It&apos;s our own personal playground, project, portfolio and blog all wrapped into one!</p>
        </div>
        <div className='creators-section'>
          <h2>Who we are</h2>
          <span>Meet the {process.env.HOST} team!</span>
          <CreatorsGrid creators={creators} />
        </div>
      </PageLayout>
    )
}

export async function getStaticProps() {
    const creators = await sanityClient.fetch(`
      *[_type == "creator"]{
          _id,
          name,
          "currentEmployerName": currentEmployer->name,
          "currentEmployerImage": currentEmployer->image.asset->url,
          "imageUrl": image.asset->url,
          "imageBase64": image.asset->metadata.lqip,
          githubUrl,
          linkedInUrl,
          bio,
          careerStartDate,
          openToWork,
          profession,
          githubUsername,
      }
    `)

    return {
      props: {
        creators
      }
    }
}

export default About
