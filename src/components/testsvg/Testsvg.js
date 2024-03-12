import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Ilustrasion from '../../assets/images/banner-active.svg';

const Testsvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texttitle}>
                Materi menggunakan file svg
            </Text>
            <Ilustrasion width={224} height={125}/>
        </View>
    );
}


export default Testsvg;

const styles = StyleSheet.create({
    container:{padding:20},
    texttitle: {
        textAlign:'center'
    }
})
