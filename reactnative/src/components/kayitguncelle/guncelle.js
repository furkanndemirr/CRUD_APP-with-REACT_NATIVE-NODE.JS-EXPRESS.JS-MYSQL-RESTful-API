import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, FlatList,Alert} from 'react-native';
import styles from "./guncelle.style";
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const Guncelle = ({navigation}) => {
    const route = useRoute();
  const customData1 = route.params?.customData1 || 'No data available';
  
  const [ad, setad] = useState(customData1.adi);
  const [soyad, setsoyad] = useState(customData1.soyadi);
  const [yas, setyas] = useState(customData1.yasi);

  const apiData = {
    id:customData1.id,
    adi: ad,
    soyadi: soyad,
    yasi: yas
  };
    
  async function postData() {
    
    console.log(apiData);
    setad('');
    setsoyad('');
    setyas('');
    const response = await axios.post('http://192.168.1.191:3000/update', apiData);
    if(response.data.message==="Okey"){
      Alert.alert("Kullanıcı Bilgileri Başarılı Bir Şekilde Güncellenmiştir.");
    }
  }
  function bilgiyegit() {
    navigation.navigate("bilgi",{customDatag: customData1});
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text style={styles.baslik}>Güncelleme Formu</Text>
      </View>

      <View style={styles.baslik_goruntu}>
        <TextInput
          name="adi"
          value={ad}
          style={styles.input}
          onChangeText={text => setad(text)}
        />
        <TextInput
          name="soyadi"
            value={soyad}
          style={styles.input}
          onChangeText={text => setsoyad(text)}
        />
        <TextInput
          name="yasi"
          value={yas.toString()}
          style={styles.input}
          onChangeText={text => setyas(text)}
        />
        <View style={{marginTop: 20}}>
          <Button title="Veri Guncelle" onPress={postData}></Button>
        </View>
        <View style={{marginTop: 20}}>
          <Button title="verileri görüntüle" onPress={bilgiyegit}></Button>
        </View>
      </View>
    </View>
  );
};
export default Guncelle;
