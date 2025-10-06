import React from 'react'
import CreatorCard from './CreatorCard'
import styles from './CreatorsGrid.module.scss'
import { CreatorProps } from '../../../pages/about'

interface CreatorsGridProps {
    creators: CreatorProps[]
}

const CreatorsGrid: React.FC<CreatorsGridProps> = ({ creators }) => {
    return (
      <div className={styles.grid}>
        {creators.map(creator => (
          <CreatorCard
                key={creator._id}
                name={creator.name}
                currentEmployerHomePage={creator.currentEmployerHomePage}
                email={creator.email}
                imageUrl={creator.imageUrl}
                imageBase64={creator.imageBase64}
                currentEmployerName={creator.currentEmployerName}
                currentEmployerJobTitle={creator.currentEmployerJobTitle}
                currentEmployerImage={creator.currentEmployerImage}
                currentEmployerImageBase64={creator.currentEmployerImageBase64}
                githubUrl={creator.githubUrl}
                linkedInUrl={creator.linkedInUrl}
                slug={creator.slug}
              />
            ))}
      </div>
    )
}

export default CreatorsGrid
