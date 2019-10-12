import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { FlatList, ActivityIndicator} from 'react-native';

var sumaGas = 0;
let precioGasolina = 1.235;
let pricePerFucker;
var gass;

function pricePerPass(pass,km,liters) {
    let litrosAGastar = (km*liters)/100;
    let precioTotal = litrosAGastar*Number((sumaGas).toFixed(4));
    pricePerFucker = precioTotal/4;
}

class HelloScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state={passengers: '', kilometers:'', litersPKM:'', isLoading: true};
    }
    componentDidMount(){
        return fetch('https://www.mapabase.es/arcgis/rest/services/Otros/Gasolineras/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
            .then((response) => response.json())
            .then((responseJson) => {

                const primeros20 = responseJson.features.
                slice(0,20).
                map(e=>e.attributes.precio_gasóleo_a);

                console.log(primeros20);
                gass = primeros20;
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.features,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render (){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View>
                <View style={styleHidden.hide}>
                    <Text style={styleHidden.hide}>{sumarGas()}</Text>
                </View>
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
                    <Text style={{fontSize:20, textAlign: 'center'}}>Precio por pasajero: {Number((pricePerFucker).toFixed(4))}</Text>
                </View>

            </View>
        );
    }
}

function sumarGas () {
    for (var i = 0; i<20;i++) {
        sumaGas += gass[i];
    }
    sumaGas = sumaGas/20;
    return Number((sumaGas).toFixed(4))
}
const styleHidden = StyleSheet.create({
    hide: {
        color: "white",
    },
});

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