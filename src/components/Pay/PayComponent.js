import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// menggunakan fungsi karena simple sehingga tidak menggunakan class
// ini merupakan file row icon pay, topup dan reward

const PayComponent = () => {
  return (
    <View style={styles.wrapperPay}>

      <View>
        <Image style={styles.featurePay} source={require('../../assets/icon/pay.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5 }}>Pay</Text>
      </View>

      <View>
        <Image style={styles.featurePay} source={require('../../assets/icon/topup.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5 }}>TopUp</Text>
      </View>

      <View>
        <Image style={styles.featurePay} source={require('../../assets/icon/reward.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5 }}>Reward</Text>
      </View>


    </View>

  )
}

export default PayComponent;


const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  featurePay: {
    height: 46,
    width: 46,
    marginTop: 16,
    marginHorizontal: 20,
  }
});
