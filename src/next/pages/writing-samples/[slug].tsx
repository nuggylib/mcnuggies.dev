import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import { Creator, WritingSample } from "../../types/sanity"
import { WritingSamplesContent } from "../../components/pages/writing-samples"

type WritingSampleWithEmployer = WritingSample & {
  employerName?: string
  employerImageUrl?: string
}

interface WritingSamplesPageProps {
  creator: Creator
  writingSamples: WritingSampleWithEmployer[]
}

const WritingSamplesPage: FunctionComponent<WritingSamplesPageProps> = ({
  creator,
  writingSamples
}) => {

  if (!creator) {
    return null
  }

  return (
    <PageLayout
      pageTitle={`Writing Samples - ${creator.name}`}
      useTitleOverlay={false}
      metaDescription={`Writing samples by ${creator.name}`}
    >
      <WritingSamplesContent
        creator={creator}
        writingSamples={writingSamples}
      />
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
