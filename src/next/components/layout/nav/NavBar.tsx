import { Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowSidebar } from "../../../redux/sidebarSlice"
import styles from './NavBar.module.scss'
import CustomIcon from "../../shared/CustomIcon"
import GlobalSearch from "../GlobalSearch"
import { useState, useEffect } from "react"

const SiteNavigation = () => {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener(`resize`, checkMobile)

        return () => window.removeEventListener(`resize`, checkMobile)
    }, [])

    return (
      <Navbar variant="dark" sticky="top" className={styles.navBar}>
        {isMobile && (
          <button
            id="sidebar-menu-button"
            className={styles.mobileMenuButton}
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
        )}
        <div className={styles.appIcon}>
          <Navbar.Brand href='/'>
            <CustomIcon
                  fileName={isMobile ? `mcnuggies_logo` : `mcnuggies_logo_full`}
                  height={30}
                  width={isMobile ? 30 : 180}
                />
          </Navbar.Brand>
        </div>
        <div className={styles.searchWrapper}>
          <GlobalSearch />
        </div>
        <div className={styles.spacer}></div>
      </Navbar>
    )
}

export default SiteNavigation