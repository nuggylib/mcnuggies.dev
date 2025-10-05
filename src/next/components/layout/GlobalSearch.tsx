import { FormControl } from "react-bootstrap"
import styles from './GlobalSearch.module.scss'
import { useState } from "react"
import CustomIcon from "../shared/CustomIcon"
import { SearchModal } from "./SearchModal"
import { SearchIndexItem } from "../../types/search"

interface GlobalSearchProps {
  searchIndex: SearchIndexItem[]
}

/**
 * The Global Search bar.
 *
 * This is intended to only be used on the NavBar and is intended to be a "one-stop-shop" search
 * utility for the user to search for all things across the site.
 */
const GlobalSearch = ({ searchIndex }: GlobalSearchProps) => {
    const [searchText, setSearchText] = useState(``)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleInputClick = () => {
      setModalIsOpen(true)
    }

    const handleModalClose = () => {
      setModalIsOpen(false)
      setSearchText(``)
    }

    return (
      <>
        <div className={styles.searchWrapper}>
          <FormControl
                  className={styles.container}
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onClick={handleInputClick}
                  readOnly
              />
          {searchText && (
            <button
              className={styles.xButton}
              onClick={() => setSearchText(``)}
            >
              <CustomIcon
                    fileName='bootstrap-x-large'
                      height={12}
                      width={12}
                />
            </button>
          )}
        </div>
        <SearchModal
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          searchIndex={searchIndex}
          initialQuery={searchText}
        />
      </>
    )
}

export default GlobalSearch
