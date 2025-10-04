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
                name={creator.name || ``}
                imageUrl={creator.imageUrl}
                imageBase64={creator.imageBase64}
                profession={creator.profession}
                githubUrl={creator.githubUrl}
                linkedInUrl={creator.linkedInUrl}
              />
            ))}
      </div>
    )
}

export default CreatorsGrid
