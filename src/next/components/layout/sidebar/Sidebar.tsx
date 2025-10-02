import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import kebabCase from '../../../util/kebabCase'
import { toggleShowSidebar } from "../../../redux/sidebarSlice"
import styles from './Sidebar.module.scss'
import SidebarOption, { SidebarOptionConfig } from './SidebarOption'

interface SidebarProps {
    options: SidebarOptionConfig[]
}

const SIDEBAR_OPTIONS = [
    {
        option: {
            label: `Home`,
            to: `/`
        }
    },
    {
        option: {
            label: `Blog`,
            to: `/blog-feed`
        }
    },
    {
        option: {
            label: `Projects`,
            to: `/projects`
        }
    },
    {
        option: {
            label: `About`,
            to: `/about`
        }
    }
] as SidebarOptionConfig[]

const Sidebar: FunctionComponent<SidebarProps> = () => {

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)



    useEffect(() => {
        /**
         * Handler to close the sidebar when the user clicks outside of it
         * 
         */
        function outerClickHandler(e) {
            const sidebarElement = document.getElementById(`sidebar`)
            const sidebarButton = document.getElementById(`sidebar-menu-button`)
            if (sidebarElement && sidebarButton) {
                if (!sidebarElement.contains(e.target as Node) && !sidebarButton.contains(e.target as Node)) {
                    dispatch(toggleShowSidebar())
                }
            }
        }

        if (isSidebarOpen) {
            window.addEventListener(`click`, outerClickHandler)
        }
        // Must remove the event listener on cleanup
        return () => {
            window.removeEventListener(`click`, outerClickHandler)
        }
    }, [isSidebarOpen, dispatch])



    return (
      <div id='sidebar' className={`${styles.sidebarContainer} ${isSidebarOpen ? undefined : styles.closed}`}>
        {SIDEBAR_OPTIONS.map(option => {
                const key = kebabCase(option.option.label)
                return (
                  <SidebarOption
                        key={`option-${key}`}
                        option={option.option}
                    />
                )
            })}
        <button
          id="sidebar-toggle-button"
          className={styles.toggleButton}
          onClick={() => dispatch(toggleShowSidebar())}
          aria-label={isSidebarOpen ? `Close sidebar` : `Open sidebar`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
}

export default Sidebar
