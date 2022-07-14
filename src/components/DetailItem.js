import React from "react";
import { Image, Text, View } from "react-native";
import FlipCard from "react-native-flip-card";
import DescriptionCard from "./DescriptionCard";
import styles from "../styles/DetailItem.style";

const DetailItem = ({ title }) => (
  <View style={styles.container}>
    <FlipCard
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      style={styles.flipCard}
    >
      <View>
        <Image source={title.img?{uri:title.img}:require("../assets/noImageCard.png")} style={styles.image}/>
      </View>
      <View>
        <View style={styles.backSide}>
          <DescriptionCard
            title={'Card Name'}
            description={title.name}
          />
          <DescriptionCard
            title={'Player Class'}
            description={title.playerClass}
          />
          <DescriptionCard
            title={'Card Set'}
            description={title.cardSet}
          />
          <DescriptionCard
            title={'Card Type'}
            description={title.type}
          />
        </View>
      </View>
    </FlipCard>
    <Text style={styles.title}>{title.name}</Text>
  </View>
);

export default DetailItem;
