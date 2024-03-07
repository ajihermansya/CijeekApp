import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import imgBanner from '../../assets/images/awan.jpg';
import FiturUtama from '../Fitur Utama/FiturUtama';
import PayComponent from '../Pay/PayComponent';
import PromoItems from '../Promo/PromoItems';

// INI ADALAH FILE UTAMA
const {height, width} = Dimensions.get('window');

class CardPay extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style={styles.statusBar} />
        <Image style={styles.imageBanner} source={imgBanner} />
        <Text style={styles.greetText}>Selamat Datang</Text>

        {/* pembuatan card bagrund putih ini di catat */}
        <View style={styles.wrapperCard}>
          <Text style={styles.textThem}>
            Semua Kebutuhan Anda Kami Lengkapi
          </Text>

          <View style={styles.garisCard}></View>

          <View style={styles.textBank}>
            <Text>Bank Keciput</Text>
            <Text>Rp. 2.000.000</Text>
          </View>

          <View style={styles.garisCard}></View>
          {/* Pembuatan icon row pay*/}
          <PayComponent />
        </View>
        {/* Include pembuatan icon utama */}
        <View style={{marginHorizontal: 18}}>
          <FiturUtama />
        </View>
        {/* Ini adalah pemisah */}
        <View style={styles.divider}>
          <PromoItems/>
        </View>
      </ScrollView>
    );
  }
}

export default CardPay;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  statusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  imageBanner: {
    height: 140,
    width: width,
  },
  greetText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    color: '#383838',
  },
  wrapperCard: {
    marginHorizontal: 18,
    height: 170,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
  },
  textThem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  textBank: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 16,
    color: '#383838',
    justifyContent: 'space-between',
  },
  garisCard: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
    marginHorizontal: 10,
  },
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featurePay: {
    height: 46,
    width: 46,
    marginTop: 16,
    marginHorizontal: 20,
  },
  divider: {
    width : width,
    height: 15,
    backgroundColor: "#ededed",
    marginVertical:15
  }
});
