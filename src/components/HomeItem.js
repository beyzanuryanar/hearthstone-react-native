import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeItem.style";

const HomeItem = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title[0].cardSet}</Text>
  </TouchableOpacity>
);

export default HomeItem;
