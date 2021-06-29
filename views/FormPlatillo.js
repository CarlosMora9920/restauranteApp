import React, { useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import {
    Container,
    Content,
    Form,
    Icon,
    Input,
    Grid,
    Col,
    Button,
    Text,
    Footer,
    FooterTab
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';

const FormularioPlatillo = () => {

    const [cantidad, almacenarCantidad] = useState(1);
    const [total, almacenarTotal] = useState(0);

    const{platillo, almacenarPedido} = useContext(PedidoContext);
    const {Precio} = platillo;

    const navigation = useNavigation();

    useEffect(() =>{
        calcularTotal();
    }, [cantidad]);

    const calcularTotal = () => {
        const pagoTotal = Precio * cantidad;
        almacenarTotal(pagoTotal);
    };

    const disminuirUno = () => {
        if (cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) -1;
            almacenarCantidad(nuevaCantidad);
        }
    };

    const AumentarUno = () => {
        const nuevaCantidad = parseInt(cantidad) +1 ;
        almacenarCantidad(nuevaCantidad);
    };

    const confirmarOrden = () => {
        Alert.alert(
            '¿Deseas confirmar tu pedido',
            'Un pedido confirmado ya no se podrá modificar',
            [
                {
                    text: 'confirmar',
                    onPress: () => {
                        const pedido = {
                            ...platillo,
                            cantidad,
                            total
                        };
                        almacenarPedido(pedido);
                        navigation.navigate('ResumenPedido');
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    };

    return(
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Cantidad</Text>
                    <Grid>
                        <Col>
                            <Button
                                props
                                dark
                                style={{height: 80, justifyContent: 'center', width: '100%'}}
                                onPress={() => disminuirUno()}
                            >
                                <Icon style={{fontSize: 40}} name="remove"/>
                            </Button>
                        </Col>
                        <Col>
                            <Input
                                style={{textAlign: 'center', fontSize: 20}}
                                value={cantidad.toString()}
                                keyboardType="numeric"
                                onChangeText={(cantidad) => {
                                    if (cantidad == ''){
                                        almacenarCantidad(parseInt(0,10));
                                    }else{
                                        almacenarCantidad(parseInt(cantidad,10));
                                    }
                                }}
                            />    
                        </Col>
                        <Col>
                                <Button
                                    props
                                    dark
                                    style={{height: 80, justifyContent: 'center', width: '100%'}}
                                    onPress={()=> AumentarUno()}
                                >
                                    <Icon style={{fontSize: 40}} name="add"/>
                                </Button>
                        </Col>
                    </Grid>
                    <Text style={globalStyles.cantidad}>Subtotal: ${total}</Text>
                </Form>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        style={globalStyles.boton} 
                        onPress={() => confirmarOrden()}
                    >
                        <Text style={globalStyles.botonTexto}>Agregar al Pedido</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

export default FormularioPlatillo;