import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({result}) => {
  return (
  <View style= {styles.container}>
    <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
    <Text style={styles.nameStyle}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} review</Text>
  </View>
  );
};

const styles= StyleSheet.create({
  container:{
    marginLeft:15
  },
  imageStyle:{
    height : 120,
    width:250,
    borderRadius:5,
    marginBottom:5
  },
  nameStyle:{
    fontWeight:'bold',
    width:250
  }
});

export default ResultDetail;
