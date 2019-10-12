import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const Button = ({label, action}) => (

    <TouchableOpacity style={stylesss.boton} onPress={action}>
        <View>
            <Text>{label}</Text>
        </View>
    </TouchableOpacity>
);

const stylesss = StyleSheet.create({
    boton:{
        height: 100,
        width:100,
        backgroundColor:'lightblue',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',

    }
});

export default Button;