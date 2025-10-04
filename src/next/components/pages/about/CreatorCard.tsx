import React from 'react'
import Image from 'next/image'
import CreatorSocials from './CreatorSocials'
import styles from './CreatorCard.module.scss'
import { CreatorProps } from '../../../pages/about'

const CreatorCard: React.FC<CreatorProps> = ({
    name,
    imageUrl,
    imageBase64,
    currentEmployerName,
    currentEmployerJobTitle,
    currentEmployerImage,
    currentEmployerImageBase64,
    githubUrl,
    linkedInUrl
}) => {
  console.log(currentEmployerName)
  console.log(currentEmployerJobTitle)
  console.log(currentEmployerImage)
  console.log(currentEmployerImageBase64)
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
                src={imageUrl}
                layout='fill'
                alt={`${name} profile image`}
                placeholder='blur'
                blurDataURL={imageBase64}
              />
        </div>
        <div className={styles.creatorDetails}>
          <span className={styles.name}>{name}</span>
          {currentEmployerName && currentEmployerImage && (
            <div className={styles.currentJob}>
              <span>{currentEmployerJobTitle} @</span>
              <Image
                src={currentEmployerImage}
                height={24}
                width={24}
                alt={`${currentEmployerName} logo`}
                placeholder='blur'
                blurDataURL={currentEmployerImageBase64}
              />
              <span>{currentEmployerName}</span>
            </div>
          )}
        </div>
        <div className={styles.creatorSocials}>
          <CreatorSocials githubUrl={githubUrl} linkedInUrl={linkedInUrl} />
        </div>
      </div>
    )
}

export default CreatorCard
