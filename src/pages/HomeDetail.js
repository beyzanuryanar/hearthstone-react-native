import React, { useEffect } from "react";
import { FlatList} from "react-native";
import DetailItem from "../components/DetailItem";

const HomeDetail = ({route, navigation}) => {
  const {item, title}=route.params;

  const renderItem = ({ item }) => {
    return(
      <DetailItem
        title={item}
      />
    );
  }

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [ navigation]);

  return (
    <>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={(item) => item.cardId}
      />
    </>
  );
};

export default HomeDetail;
