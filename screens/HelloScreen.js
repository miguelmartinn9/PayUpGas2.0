import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

let precioGasolina = 1.235;
let pricePerFucker;

function pricePerPass(pass,km,liters) {
    let litrosAGastar = (km*liters)/100;
    let precioTotal = litrosAGastar*precioGasolina;
    pricePerFucker = precioTotal/4;
}

class HelloScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state={passengers: '', kilometers:'', litersPKM:''};
    }

    render (){
        return(
            <View>
                <View style={stylesss.inputWrapper}>
                    <TextInput
                        placeholder={'Number of passengers'}
                        onChangeText={(passengers) => this.setState({passengers})}
                        value={this.state.passengers}
                        style={stylesss.inputText}
                    />
                    <TextInput
                        placeholder={'Number of km'}
                        onChangeText={(kilometers) => this.setState({kilometers})}
                        value={this.state.kilometers}
                        style={stylesss.inputText}
                    />
                    <TextInput
                        placeholder={'Liters per KM'}
                        onChangeText={(litersPKM) => this.setState({litersPKM})}
                        value={this.state.litersPKM}
                        style={stylesss.inputText}
                    />
                </View>
                <View >
                    <TouchableOpacity onPress={pricePerPass(this.state.passengers,this.state.kilometers,this.state.litersPKM)}>
                    </TouchableOpacity>
                </View>

                <View style={stylesss.resultado}>
                    <Text style={{fontSize:20, textAlign: 'center'}}>Precio por pasajero: {pricePerFucker}</Text>
                </View>
            </View>
        );
    }
}



const stylesss = StyleSheet.create({
    resultado: {
        textAlign:'center',
        backgroundColor: 'lightblue',
        height: 50,
        marginTop:50,
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputWrapper:{
        marginTop:50,
    },
    inputText: {
        height: 45,
        padding: 10,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 5,
    },
});

export default HelloScreen;