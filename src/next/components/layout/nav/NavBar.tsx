import { Navbar } from "react-bootstrap"
import styles from './NavBar.module.scss'
import CustomIcon from "../../shared/CustomIcon"
import GlobalSearch from "../GlobalSearch"

const SiteNavigation = () => {
    return (
      <Navbar variant="dark" sticky="top" className={styles.navBar}>
        <div className={styles.appIcon}>
          <Navbar.Brand href='/'>
            <CustomIcon
                  fileName='mcnuggies_logo_full'
                  height={30}
                  width={180}
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