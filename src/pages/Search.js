import React, { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { SearchContext } from "../context/SearchContext";
import DetailItem from "../components/DetailItem";
import Loading from "../components/Loading";
import UselessTextInput from "../components/UselessTextInput";
import styles from "../styles/Search.style"

const Search = () => {
  const [value, onChangeText] = React.useState('');
  const { search, setSearch, loading, getSearchResult }=useContext(SearchContext)

  const renderItem = ({ item }) => {
    return(
      <DetailItem
        title={item}
      />
    );
  }

  useEffect(()=>{
    if(value!==""){
      getSearchResult(value)
    }
  },[value])

  useEffect(()=>{
    setSearch([])
    onChangeText('')
  },[])

  return (
    <>
      <View style={styles.container}>
        <UselessTextInput
          multiline
          numberOfLines={4}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.input}
        />
      </View>
      {
        loading===true
          ?
          <Loading/>
          :
          <FlatList
            data={search}
            renderItem={renderItem}
            keyExtractor={(item) => item.cardId}
          />
      }
    </>
  );
};

export default Search;
