import React from 'react'
import Image from 'next/image'
import CreatorSocials from './CreatorSocials'
import styles from './CreatorCard.module.scss'
import { CreatorProps } from '../../../pages/about'

const CreatorCard: React.FC<CreatorProps> = ({
    name,
    email,
    imageUrl,
    imageBase64,
    currentEmployerName,
    currentEmployerHomePage,
    currentEmployerJobTitle,
    currentEmployerImage,
    currentEmployerImageBase64,
    githubUrl,
    linkedInUrl,
    slug,
}) => {
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
          <a href={`/about/${slug!.current.toLowerCase()}`} className={styles.name}>{name}</a>
          {currentEmployerName && currentEmployerImage && (
            <div className={styles.currentJob}>
              <span className={styles.jobTitle}>{currentEmployerJobTitle}</span>
              <button className={styles.employer} onClick={() => window.open(currentEmployerHomePage, `_blank`)}>
                <Image
                  src={currentEmployerImage}
                  height={24}
                  width={24}
                  alt={`${currentEmployerName} logo`}
                  placeholder='blur'
                  blurDataURL={currentEmployerImageBase64}
                />
                <span className={styles.companyName}>{currentEmployerName}</span>
              </button>
            </div>
          )}
        </div>
        <div className={styles.creatorSocials}>
          <span><a href={`mailto:${email}`}>{email}</a></span>
          <CreatorSocials githubUrl={githubUrl} linkedInUrl={linkedInUrl} />
        </div>
      </div>
    )
}

export default CreatorCard
