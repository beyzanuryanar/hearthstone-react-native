import React, { useContext, useEffect } from "react";
import { CardContext } from "../context/CardContext";
import Loading from "../components/Loading";
import { FlatList} from "react-native";
import HomeItem from "../components/HomeItem";

const Home = ({navigation}) => {
  const {cards, getAllCards} =useContext(CardContext)

  const renderItem = ({ item }) => {
    return(
      <HomeItem
        title={item}
        onPress={()=>navigation.navigate('HomeDetail',{item:item,title:item[0].cardSet})}
      />
    );
  }

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <>
      {
        cards.length===0 ?
          <Loading/>
          :
          <>
            <FlatList
              data={cards}
              renderItem={renderItem}
              keyExtractor={(item) => item[0].cardSet}
            />
          </>
      }
    </>
  );
};

export default Home;
