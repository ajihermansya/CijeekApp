import React from 'react';
import { StyleSheet, View } from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';

// menggunakan fungsi karena simple sehingga tidak menggunakan class

const FiturUtama = () => {
  return (
    <View style={styles.wrapperHome}>
    <FiturUtamaSub image={require('../../assets/icon/food.jpg')} title="Food"/>
    <FiturUtamaSub image={require('../../assets/icon/bike.jpg')} title="Bike"/>
    <FiturUtamaSub image={require('../../assets/icon/car.jpg')} title="Car"/>
    <FiturUtamaSub image={require('../../assets/icon/send.jpg')} title="Delivery"/>
  
  {/* tambahan menu item */}

    <FiturUtamaSub image={require('../../assets/icon/subscribe.jpg')} title="Subscription"/>
    <FiturUtamaSub image={require('../../assets/icon/doctor.jpg')} title="Doctor"/>
    <FiturUtamaSub image={require('../../assets/icon/pulsa.jpg')} title="Pulsa/Token"/>
    <FiturUtamaSub image={require('../../assets/icon/more.jpg')} title="More"/>
  
    </View>
  );
};

export default FiturUtama;

const styles = StyleSheet.create({
  wrapperHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    //kalau >4 ini akan turun ke bawah secara otomatis
    flexWrap:'wrap',
    width:"100%"
  },
});
