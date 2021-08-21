import React from 'react'
 import SearchIcon from '@material-ui/icons/Search';
 import Style from './search.module.css'

const SearchBox =()=>{
    return(
        <div className={Style.location_search}>
           <SearchIcon />
           <input type="text" className={Style.search_bar}/>
        </div>
    )
}

export default SearchBox