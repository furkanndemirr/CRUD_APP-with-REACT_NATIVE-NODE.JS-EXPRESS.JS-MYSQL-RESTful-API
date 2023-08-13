import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, RefreshControl,ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';
import Bilgicard from '../bilgicard';
import { useRoute } from '@react-navigation/native';

function Bilgi({navigation}) {

  const [userlist, setuserlist] = useState([]);
  const [loading, setloading] = useState(true);
  
  const route = useRoute();
  const customData = route.params?.customData || 'No data available';
  const customDatag = route.params?.customDatag || 'No data available';
 
  if(userlist.includes(customDatag)){
    
    fetchData();
  }
  if(userlist.includes(customData)){
    fetchData();
  }
  
  async function fetchData() {
    
    const response = await axios.get('http://192.168.1.191:3000/heyo');
    setuserlist(response.data);
    setloading(false);
    
  }
  const renderuser = ({item}) => (
    <Bilgicard navigation={navigation} product={item} />
  );
  useEffect(() => {
    
    fetchData();
    
  }, []);
  
  return (
  
      <View>
      
        <View style={{alignItems:'center',margin:10}}>
          <Text style={{fontWeight:"bold",fontSize:30}}>Kullanıcı Bilgileri</Text>
        </View>
        
          {loading ? (
              <ActivityIndicator size="large"></ActivityIndicator>
          ) : (
            <FlatList data={userlist} renderItem={renderuser} ></FlatList>
          )}
      
      
      
      </View>
  );
}
export default Bilgi;
