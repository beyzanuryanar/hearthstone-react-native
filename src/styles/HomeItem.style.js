import {StyleSheet} from 'react-native';
import { color } from "../config/color";

const styles = StyleSheet.create({
  container: {
    padding:10,
    borderBottomWidth:0.5,
    margin:10,
    borderColor:color.primary
  },
  title:{
    color:color.primary,
    fontWeight:'500',
    fontSize:20
  }
});

export default styles;
