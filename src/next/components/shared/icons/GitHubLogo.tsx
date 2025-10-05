import React, { FunctionComponent } from 'react'
import CustomIcon from "../CustomIcon"

export interface GitHubLogoProps {
    size: number
}

export const GitHubLogo: FunctionComponent<GitHubLogoProps> = ({
    size
}) => {
    return (
      <CustomIcon
            fileName='logo-github'
            height={size}
            width={size}
            className='github-logo'
        />
    )
}
