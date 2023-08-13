import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './giris.style';

function Giris({navigation}) {
  function navigatetopage() {
    navigation.navigate('form');
  }
  return (
    <View style={{flex:1, backgroundColor: '#087EB0'}}>
      <View style={styles.foto_container}>
        <Image style={styles.foto} source={require("../../assets/formfoto.png")}></Image>
      </View>
     
      <View style={{flex:1 }}>
        <Text style={styles.metin}>
          Kullanıcı Kayıt Yapmak İçin Butona Tıklayınız.
        </Text>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Button
            title="Kullanıcı Kayıt Sayfasına git"
            onPress={navigatetopage}></Button>
        </View>
      </View>
    </View>
  );
}
export default Giris;
