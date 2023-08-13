import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, FlatList,Alert} from 'react-native';
import styles from './form.style';
import axios from 'axios';
const Form = ({navigation}) => {

  const [ad, setad] = useState('');
  const [soyad, setsoyad] = useState('');
  const [yas, setyas] = useState('');
  
  async function postData() {
    const apiData = {
      adi: ad,
      soyadi: soyad,
      yasi: yas,
    };

    setad('');
    setsoyad('');
    setyas('');
    const response = await axios.post('http://192.168.1.191:3000', apiData);
    if(response.data.message==="Okey"){
      Alert.alert("Kullanıcı Başarılı Bir Şekilde Eklenmiştir.");
    }
  }

  function bilgiyegit() {
    navigation.navigate('bilgi');
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text style={styles.baslik}>Kayıt Ekleme Formu</Text>
      </View>

      <View style={styles.baslik_goruntu}>
        <TextInput
          name="adi"
          value={ad}
          style={styles.input}
          placeholder="adını giriniz.."
          onChangeText={text => setad(text)}
        />
        <TextInput
          name="soyadi"
          value={soyad}
          style={styles.input}
          placeholder="soyadınızı giriniz.."
          onChangeText={text => setsoyad(text)}
        />
        <TextInput
          name="yasi"
          value={yas}
          style={styles.input}
          placeholder="yaşınızı giriniz.."
          onChangeText={text => setyas(text)}
        />
        <View style={{marginTop: 20}}>
          <Button title="Veri Ekle" onPress={postData}></Button>
        </View>
        <View style={{marginTop: 20}}>
          <Button title="verileri görüntüle" onPress={bilgiyegit}></Button>
        </View>
      </View>
    </View>
  );
};
export default Form;
