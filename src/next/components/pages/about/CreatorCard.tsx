import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import CreatorSocials from './CreatorSocials'
import styles from './CreatorCard.module.scss'

interface CreatorCardProps {
    name: string
    imageUrl: string
    imageBase64: string
    profession?: string
    bio?: any[]
    githubUrl?: string
    linkedInUrl?: string
}

const CreatorCard: React.FC<CreatorCardProps> = ({
    name,
    imageUrl,
    imageBase64,
    profession,
    bio,
    githubUrl,
    linkedInUrl
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
        <h3 className={styles.name}>{name}</h3>
        {profession && <p className={styles.profession}>{profession}</p>}
        {bio && (
          <div className={styles.bio}>
            <PortableText value={bio} />
          </div>
            )}
        <CreatorSocials githubUrl={githubUrl} linkedInUrl={linkedInUrl} />
      </div>
    )
}

export default CreatorCard
