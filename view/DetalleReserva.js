import { set } from "lodash";
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    View,
    Alert,
    ActivityIndicator,
    StyleSheet,
  } from "react-native"

import {Button, Text, H1,Center} from 'native-base';
import { TextInput } from "react-native-gesture-handler";
import globalStyles from '../styles/global';
import firebase from '../firebase';

const DetalleReserva = (props) => {

    const initialState ={
        id:'',
        Nombre: '',
        Numero: '',
        Email: '',
        Num_person: '',
    };

    const [reser,setReser] = useState(initialState);
    const [loading, setloading] = useState(true);

    const handleChangeText = (value, prop) => {
        setReser({...reser, [prop]: value});
    };

    const getReservaById = async (id) => {
        const dbid = firebase.db.collection("reserva").doc(id);
        const doc = await dbid.get();
        const reser = doc.data();
        setReser({...reser, id: doc.id});
        setloading(false);
    };

    const deleteReserva = async () => {
        setloading(true)
        const dbid = firebase.db.collection("reserva").doc(props.route.params.reservaId);
        await dbid.delete();
        setloading(false)
        props.navigation.navigate("Reserva")
    };

    const ConfirmationAlert = () => {
        Alert.alert(
            "remover la reserva",
            "esta seguro ? ",
            [
                {text: "Si", onPress: () => deleteReserva()},
                {text: "No", onPress: () => console.log("cancelado")},
            ],
            {
                cancelable: true,
            }
        );
    };

    const updateReserva = async () => {
        const reserRef = firebase.db.collection("reserva").doc(reserva.id);
        await reserRef.set({
            Nombre: state.Nombre,
            Numero: state.Numero,
            Email: state.Email,
            Num_person: state.Num_person,
        });
        setReser(initialState);
        props.navigation("Reserva")
    };

    useEffect(() => {
        getReservaById(props.route.params.reserId);
    },[]);

    if (loading) {
        return(
            <View >
                <ActivityIndicator size="large" color = "#9E9E9E"/>
            </View>
        );
    }

    return (
       
        <ScrollView styles={globalStyles.contenido}>
            <View styles={styles.container}>
                <TextInput
                     placeholder="Nombre"
                     autoCompleteType="username"
                     style={styles.inputGroup}
                     value={reser.Nombre}
                     onChangeText={(value) => handleTextChange(value, "Nombre")}
                />
            </View>
            <View>
                 <TextInput
                    placeholder="Numero"
                    autoCompleteType="tel"
                    style={styles.inputGroup}
                    value={reser.Numero}
                    onChangeText={(value) => handleTextChange(value, "phone")}
                 />
            </View>

            <View>
                <TextInput
                autoCompleteType="Email"
                placeholder="Email"
               style={styles.inputGroup}
                value={reser.Email}
                onChangeText={(value) => handleTextChange(value, "Email")}
                />
            </View>

            <View>
                <TextInput
                     placeholder="Nombre"
                     autoCompleteType="Num_person"
                     style={styles.inputGroup}
                     value={reser.Num_person}
                     onChangeText={(value) => handleTextChange(value, "Num_person")}
                />
            </View>
            <View>
            <Button
                style={globalStyles.boton}
                rounded
                block
                onPress={() => reservaR()}
                
            >
                <Text style={globalStyles.botonTexto}>Eliminar Reserva</Text>
            </Button>

            </View>

            <View>
            <Button
                style={globalStyles.boton}
                rounded
                block
                onPress={() => reservaR()}
                
            >
                <Text style={globalStyles.botonTexto}>Actualizar Reserva</Text>
            </Button>
            </View>
          
        </ScrollView>
       
    );
};

//estilos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 8,
    },
    cant: {
      flex: 1,
      marginTop: 8,
      backgroundColor: "aliceblue",
    },  
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    btn: {
      marginBottom: 7,
    },
  });

//

export default DetalleReserva;