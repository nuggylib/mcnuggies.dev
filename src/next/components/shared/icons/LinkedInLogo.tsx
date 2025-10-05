import React, { FunctionComponent } from 'react'
import CustomIcon from "../CustomIcon"

export interface LinkedInLogoProps {
    linkedInUrl: string
    size: number
}

export const LinkedInLogo: FunctionComponent<LinkedInLogoProps> = ({
    linkedInUrl,
    size
}) => {
    return (
      <CustomIcon
            fileName='logo-linkedin'
            height={size}
            width={size}
            className='linkedin-logo'
            onClick={() => window.open(linkedInUrl!, `_blank`)}
        />
    )
}
