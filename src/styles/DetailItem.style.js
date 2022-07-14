import {StyleSheet} from 'react-native';
import { color } from "../config/color";

const styles = StyleSheet.create({
  container: {
    borderColor:color.primary,
    borderBottomWidth:0.5,
    margin:10
  },
  flipCard:{
    padding:10
  },
  image:{
    height:500,
    width:'100%'
  },
  backSide:{
    height:500,
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    padding:20
  },
  title:{
    color:color.primary,
    fontWeight:'500',
    fontSize:20,
    textAlign:'center',
    paddingBottom:20
  }
});

export default styles;
