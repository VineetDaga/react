import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate"

const Search = ({onSearchChnage}) =>{

    const [ search, setSearch] = useState(null)
    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChnage(searchData);

    }

    return (
        <AsyncPaginate 
            placeholder = "Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    )
}
export default Search