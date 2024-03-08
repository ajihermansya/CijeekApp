import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


// menggunakan fungsi karena simple sehingga tidak menggunakan class

// const FiturUtamaSub = props => {
//   return (
//     <View style={{width:"25%", alignItems:"center"}}>
//       <Image style={styles.imagefiturHome} source={props.image} />
//       <Text style={styles.textfiturHome}>{props.title}</Text>
//     </View>
//   );
// };

// Cara Menggunakan Komponen Pada react untuk pemanggilan menu, menggunakan this 
// untuk mengetahui varibael penggunaan props
class FiturUtamaSub extends React.Component{
    render() {
        return (
            <View style={{width:"25%", alignItems:"center"}}>
            <Image style={styles.imagefiturHome} source={this.props.image} />
            <Text style={styles.textfiturHome}>{this.props.title}</Text>
            
          </View>
        )
    }
}

export default FiturUtamaSub;

const styles = StyleSheet.create({
  imagefiturHome: {
    height: 55,
    width: 55,
    marginTop: 10,
  },
  textfiturHome: {
    textAlign: 'center',
    marginTop: 4,
    color : "black"
  },
});
