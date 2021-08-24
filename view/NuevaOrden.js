import React from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import { Container, Button, Text, H1} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';


const NuevaOrden = () => {

    const navigation = useNavigation();
    
    const image = {uri: "https://i.pinimg.com/originals/a0/bd/96/a0bd96889b1c5e10d8a237ecd5a20c45.jpg" };
    //const image = {uri: "https://capettos.com/wp-content/uploads/2019/10/fondo-fast-food.png" };
    return(

   
    
        <Container style={globalStyles.contenedor}>
     
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
        
        <View style={[globalStyles.contenido, styles.contenido]}>
        
            <Button
                style={globalStyles.boton}
                rounded
                block
                onPress={ () => navigation.navigate('Menu')  }
                
                
            >
                <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
            </Button>

            <Button
                style={globalStyles.boton}
                rounded
                block
                onPress={ () => navigation.navigate('Reservas')  }
                
            >
                <Text style={globalStyles.botonTexto}>Reservas</Text>
            </Button>


        </View>

        </ImageBackground>

        </Container>
      
   
        
    );
}
const styles = StyleSheet.create({
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

    image: {
        flex: 1,
        justifyContent: "center"
      },
})
 
export default NuevaOrden;