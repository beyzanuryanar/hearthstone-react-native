import React from "react";
import Router from "./src/navigation/Router";
import MainContextProvider from "./src/context/MainContext";

const App = () => {
  return (
    <>
      <MainContextProvider>
        <Router/>
      </MainContextProvider>
    </>
  );
};

export default App;
