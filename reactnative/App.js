// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/components/formcard/form';
import Giris from './src/components/girispage/giris';
import Bilgi from "./src/components/kullanicibilgi/bilgi"
import Guncelle from './src/components/kayitguncelle/guncelle';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="giris" component={Giris} options={{title:"Kullanıcı Kayıt Uygulaması",headerStyle:{backgroundColor:"#f5f5f5"},headerTitleStyle:{color:"black",fontSize:30},headerTitleAlign:"center"}}>

        </Stack.Screen>
        <Stack.Screen name='form' component={Form} options={{title:"Kayıt Sayfası",headerStyle:{backgroundColor:"#f5f5f5"},headerTitleStyle:{color:"black",fontSize:30},headerTitleAlign:"center"}}>
          
        </Stack.Screen>
        <Stack.Screen name='bilgi' component={Bilgi} options={{title:"Kayıt Listesi",headerStyle:{backgroundColor:"#f5f5f5"},headerTitleStyle:{color:"black",fontSize:30},headerTitleAlign:"center"}}>
          
        </Stack.Screen>
        <Stack.Screen name='guncelle' component={Guncelle} options={{title:"Güncelleme Sayfası",headerStyle:{backgroundColor:"#f5f5f5"},headerTitleStyle:{color:"black",fontSize:30},headerTitleAlign:"center"}}>
          
        </Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;