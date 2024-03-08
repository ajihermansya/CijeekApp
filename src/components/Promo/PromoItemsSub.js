import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');

const PromoItemsSub = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={props.image} style={styles.promoimage} />
      <View style={styles.textpromo}>
        <Text style={{
          marginVertical: 10,
          fontWeight: 'bold',
        }}>{props.text}</Text>
      </View>

      {
        props.diskon ? <View style={styles.textdiskon}><Text>{props.diskon}</Text></View> :
          <View></View>
      }

      <View>
        <Icon name="calendar-outline" size={20} color="#575757" />
      </View>

    </View>
  );
};

export default PromoItemsSub;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 8,
    width: width / 2 - 27,
    marginTop: 30,
    marginRight: 18,
    marginBottom: 18,
  },
  promoimage: {
    height: width / 2 - 27,
    width: width / 2 - 27,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textpromo: {
    marginLeft: 10,
    fontSize: 16,
  },
  textdiskon: {
    position: 'absolute', //jadi melayang
    top: 10,
    backgroundColor: 'white',
    padding: 4,
    color: 'black',
    borderRadius: 4,
    left: 4
  }
});
