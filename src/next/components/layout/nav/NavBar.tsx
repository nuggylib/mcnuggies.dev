import { Navbar } from "react-bootstrap"
// import { useDispatch } from "react-redux"
// import { toggleShowSidebar } from "../../../redux/sidebarSlice"
// import CustomIcon from "../../shared/CustomIcon"
import styles from './NavBar.module.scss'
import CustomIcon from "../../shared/CustomIcon"
import GlobalSearch from "../GlobalSearch"

const SiteNavigation = () => {
    // const dispatch = useDispatch()

    return (
      <Navbar variant="dark" sticky="top" className={styles.navBar}>
        {/* <Navbar.Brand id='sidebar-menu-button' className={styles.menuIcon} onClick={() => dispatch(toggleShowSidebar())}>
          <CustomIcon
                    fileName="bootstrap-list"
                    height={32}
                    width={32}
                />
        </Navbar.Brand> */}
        <Navbar.Brand className={styles.appIcon} href='/'>
          <CustomIcon
                  fileName='mcnuggies_logo_full'
                  height={30}
                  width={180}
                  // onClick={() => window.open(githubUrl!, `_blank`)}
                />

        </Navbar.Brand>
        <div className={styles.searchWrapper}>
          <GlobalSearch />
        </div>
        <div className={styles.spacer}></div>
      </Navbar>
    )
}

export default SiteNavigation