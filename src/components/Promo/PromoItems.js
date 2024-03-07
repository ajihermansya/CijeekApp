import React from 'react';
import { StyleSheet, View } from 'react-native';
import PromoItemsSub from './PromoItemsSub';



const PromoItems = () => {
  return <View style={styles.itempromo}>
    <PromoItemsSub
        image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdICnUXV8X-2fnxxoh3VUhcy4jDtq5Us7WxuVkvsj5nVkLBI_FodBg6q20Re4j1snzVU&usqp=CAU"}}
        text="Coffe"
        diskon="Diskon 70%"
    />

<PromoItemsSub
        image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdICnUXV8X-2fnxxoh3VUhcy4jDtq5Us7WxuVkvsj5nVkLBI_FodBg6q20Re4j1snzVU&usqp=CAU"}}
        text="Coffe"
        diskon="Diskon 70%"
    />

<PromoItemsSub
        image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdICnUXV8X-2fnxxoh3VUhcy4jDtq5Us7WxuVkvsj5nVkLBI_FodBg6q20Re4j1snzVU&usqp=CAU"}}
        text="Coffe"
        diskon="Diskon 70%"
    />
    <PromoItemsSub
        image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdICnUXV8X-2fnxxoh3VUhcy4jDtq5Us7WxuVkvsj5nVkLBI_FodBg6q20Re4j1snzVU&usqp=CAU"}}
        text="Coffe"
        diskon="Diskon 70%"
    />
  </View>;
};

export default PromoItems;

const styles = StyleSheet.create({
  itempromo: {
    marginHorizontal: 18,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
