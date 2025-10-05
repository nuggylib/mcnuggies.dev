import { Navbar } from "react-bootstrap"
import styles from './NavBar.module.scss'
import CustomIcon from "../../shared/CustomIcon"
import GlobalSearch from "../GlobalSearch"
import { useSearchIndex } from "../../../hooks/useSearchIndex"
import { SearchIndexItem } from "../../../types/search"

const SiteNavigation = () => {
    const searchIndex = useSearchIndex()

    // Flatten the search index for the GlobalSearch component
    const flattenedIndex: SearchIndexItem[] = searchIndex
      ? [...searchIndex.articles, ...searchIndex.projects, ...searchIndex.creators]
      : []

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
          <GlobalSearch searchIndex={flattenedIndex} />
        </div>
        <div className={styles.spacer}></div>
      </Navbar>
    )
}

export default SiteNavigation