import React from 'react'
import { FormControl } from "react-bootstrap"
import styles from './GlobalSearch.module.scss'
import { useDispatch, useSelector } from "react-redux"
import CustomIcon from "../shared/CustomIcon"
import { openSearchModal, setSearchQuery } from "../../redux/searchSlice"

/**
 * The Global Search bar.
 *
 * This is intended to only be used on the NavBar and is intended to be a "one-stop-shop" search
 * utility for the user to search for all things across the site.
 */
const GlobalSearch = () => {
    const dispatch = useDispatch()
    const searchText = useSelector((state: any) => state.search.query)

    const handleInputClick = () => {
      dispatch(openSearchModal())
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchQuery(e.target.value))
    }

    const handleClear = () => {
      dispatch(setSearchQuery(``))
    }

    return (
      <div className={styles.searchWrapper}>
        <FormControl
                className={styles.container}
                placeholder="Search"
                value={searchText}
                onChange={handleChange}
                onClick={handleInputClick}
            />
        {searchText && (
          <button
            className={styles.xButton}
            onClick={handleClear}
          >
            <CustomIcon
                  fileName='bootstrap-x-large'
                    height={12}
                    width={12}
              />
          </button>
        )}
      </div>
    )
}

export default GlobalSearch
