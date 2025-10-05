import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import styles from './SidebarOption.module.scss'
import CustomIcon from '../../shared/CustomIcon'
import cs from 'clsx'

interface OptionConfig {
    label: string
    /**
     * The file name of the icon to display on this SidebarOption
     */
    iconFileName: string
    to?: string
    href?: string
}

export interface SidebarOptionConfig {
    option: OptionConfig
    children?: {
        [child: number]: OptionConfig
    }
}

const SidebarOption: FunctionComponent<SidebarOptionConfig> = ({
    option
}) => {
  const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)

    return (
      <div className={styles.container} id="sidebar-option">
        <Link className={styles.link} href={option.to!} passHref>
          <div className={styles.rowContent}>
            <div className={styles.iconContainer}>
              <CustomIcon
                className={styles.icon}
                fileName={option.iconFileName}
                height={24}
                width={24}
              />
            </div>
            <span className={cs(!isSidebarOpen && styles.closed)}>
              {option.label}
            </span>
          </div>
        </Link>
      </div>
    )
}

export default SidebarOption
