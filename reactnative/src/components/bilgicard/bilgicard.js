import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, Alert} from 'react-native';
import axios from 'axios';
import styles from "./bilgicard.style";

function Bilgicard({product, navigation}) {

  async function deleteuser() {

    try {
      const apiData = {
        id: product.id,
      };
      Alert.alert(product.id + ' id numaralı kayıt silinmiştir.');
      const response = await axios.post('http://192.168.1.191:3000/delete',apiData);
      navigation.navigate("bilgi",{customData: product}); 

    } catch (err) {
      console.log(err);
    }
  }
  function guncelle() {
    navigation.navigate('guncelle', {customData1: product});
  }
  return (
    <View style={styles.container}>
      <View style={styles.boddy_container}>
        <Text>Kullanıcı ID: {product.id}</Text>
        <Text>Kullanıcı Adi: {product.adi}</Text>
        <Text>Kullanıcı Soyadi: {product.soyadi}</Text>
        <Text>Kullanıcı Yaşı:{product.yasi}</Text>
      </View>

      <View style={{padding: 10}}>
        <Button title="Delete" onPress={deleteuser}></Button>
      </View>
      <View style={{padding: 10}}>
        <Button title="Kullanıcı Kaydını Güncelle" onPress={guncelle}></Button>
      </View>
    </View>
  );
}
export default Bilgicard;
