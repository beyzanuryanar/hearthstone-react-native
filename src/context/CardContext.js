import React, {createContext, useState} from 'react';
import axios from "axios";

const CardContext = createContext();
export {CardContext};

const CardContextProvider = ({children}) => {
  const [cards, setCards] = useState([]);

  const getAllCards = () => {
    const options = {
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
      headers: {
        "X-RapidAPI-Key": "c1bb3354a3msh9fcb4e71812ebe0p1986d0jsnc2fdc78675fb",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };

    axios.request(options).then(function(response) {
      const data = response.data;
      const filterData = Object.values(data).filter(item => {
        return item.length > 0;
      });
      setCards(filterData);
    }).catch(function(error) {
      console.error(error);
    });
  }

  const value = {
    cards,
    getAllCards,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
