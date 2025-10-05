import React, { FunctionComponent } from 'react'
import CustomIcon from "../CustomIcon"

export interface GitHubLogoProps {
    githubUrl: string
    size: number
}

export const GitHubLogo: FunctionComponent<GitHubLogoProps> = ({
    githubUrl,
    size
}) => {
    return (
      <CustomIcon
            fileName='logo-github'
            height={size}
            width={size}
            className='github-logo'
            onClick={() => window.open(githubUrl, `_blank`)}
        />
    )
}
