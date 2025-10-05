import React, { FunctionComponent } from 'react'
import CustomIcon from "../CustomIcon"

export interface LinkedInLogoProps {
    size: number
}

export const LinkedInLogo: FunctionComponent<LinkedInLogoProps> = ({
    size
}) => {
    return (
      <CustomIcon
            fileName='logo-linkedin'
            height={size}
            width={size}
            className='linkedin-logo'
        />
    )
}
