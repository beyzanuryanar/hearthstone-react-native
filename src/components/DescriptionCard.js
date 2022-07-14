import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/DescriptionCard.style";

const DescriptionCard =({ title,description})=>(
  <View style={styles.container}>
    <Text style={styles.title}>{title} :</Text>
    <Text style={styles.description}> {description}</Text>
  </View>
)

export default DescriptionCard;
