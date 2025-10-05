import React from 'react'
import styles from './CreatorSocials.module.scss'
import { GitHubLogo } from '../../shared/icons/GitHubLogo'
import { LinkedInLogo } from '../../shared/icons/LinkedInLogo'

interface CreatorSocialsProps {
    githubUrl?: string
    linkedInUrl?: string
}

const CreatorSocials: React.FC<CreatorSocialsProps> = ({
    githubUrl,
    linkedInUrl
}) => {
    return (
      <div className={styles.container}>
        {!!githubUrl && (
          <button onClick={() => window.open(githubUrl, `_blank`)} className={styles.btn}>
            <GitHubLogo
              size={22}
            />
          </button>
              )}
        {!!linkedInUrl && (
          <button onClick={() => window.open(linkedInUrl, `_blank`)} className={styles.btn}>
            <LinkedInLogo
              size={22}
            />
          </button>
              )}
      </div>
    )
}

export default CreatorSocials
