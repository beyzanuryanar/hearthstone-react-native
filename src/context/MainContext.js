import React from 'react';
import CardContextProvider from "./CardContext";
import SearchContextProvider from "./SearchContext";

const MainContextProvider = ({children}) => (
  <CardContextProvider>
    <SearchContextProvider>
      {children}
    </SearchContextProvider>
  </CardContextProvider>
);
export default MainContextProvider;
