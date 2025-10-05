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
          <GitHubLogo
            githubUrl={githubUrl}
            size={22}
          />
              )}
        {!!linkedInUrl && (
          <LinkedInLogo
            linkedInUrl={linkedInUrl}
            size={22}
          />
              )}
      </div>
    )
}

export default CreatorSocials
