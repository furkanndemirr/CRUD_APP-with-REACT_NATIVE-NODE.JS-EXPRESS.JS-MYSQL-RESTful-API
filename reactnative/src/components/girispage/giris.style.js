import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  foto: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
  },
  foto_container: {
    flex: 1,
  },
  metin: {
    fontSize: 35,
    color: 'black',
    fontWeight:"bold",
    textAlign: 'center',
    marginTop: 30,
  },
});
