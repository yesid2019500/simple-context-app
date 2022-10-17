import React, {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';
import { GET_USERS, GET_PROFILE } from '../types';



const UserState = (props) => {
// aqui crearemos el estado que podran consumir
// y las funciones que alteraran el estado
    const initialState = {
        users: [],
        selectedUser:null
    }

    const [state, dispatch] = useReducer( UserReducer , initialState )
    
    // esta funsion llenara el estado
    const getUser = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res.data.data);
        // el dispatch ejecutara la accion a hacer
        dispatch({
            type: GET_USERS,
            payload: res.data.data
        })
    }
    
    // le pasamos el id
    const getProfile = async (id) => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(res.data.data);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
        
    }

    // los componentes de aqui podran acceder al estado 
    // props children son los componentes hijos que estaran dentro
    // en el value pondremos a lo que prodran acceder los componentes hijos
    // creamos un objecto dentro del value y le pasamos
    //te pasare el array que viene de state.users y tambien el selelecUser
    // tambien le pasaremos las funciones para alterar el estado
    
    return (
        <UserContext.Provider value={ {
            users: state.users,
            selectedUser: state.selectedUser,
            getUser,
            getProfile
        } }>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserState