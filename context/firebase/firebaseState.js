import React, { useReducer } from 'react';
import _ from 'lodash';
import firebase from '../../firebase';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import { OBTENER_PRODUCTOS_EXITO } from '../../types';

const FirebaseState = props => {

    const initialState = {
        menu: []
    };

    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    const obtenerProducto = () => {

        firebase.db.settings({experimentalForceLongPolling: true});
        firebase.db
            .collection('productos')
            .where('existencia','==', true)
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot){
            let platillos = snapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            platillos = _.sortBy(platillos, 'categoria');

            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    };

    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProducto
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;