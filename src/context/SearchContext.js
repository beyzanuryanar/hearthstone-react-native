import React, {createContext, useState} from 'react';
import axios from "axios";

const SearchContext = createContext();
export {SearchContext};

const SearchContextProvider = ({children}) => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearchResult = (name) => {
    setLoading(true)
    const options = {
      method: 'GET',
      url:`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
      headers: {
        'X-RapidAPI-Key': 'c1bb3354a3msh9fcb4e71812ebe0p1986d0jsnc2fdc78675fb',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setLoading(false)
      setSearch(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  const value = {
    search,
    setSearch,
    loading,
    setLoading,
    getSearchResult,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
