import { GET_USERS, GET_PROFILE } from '../types';

// recibe el estado actual y el acion que lo modifica
export default (state, action) => {
    // el payload son los datos que me estan pasando y el tipo es GET_PROFILE, por ejemplo
    const { payload, type } = action

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }

        case GET_PROFILE: 
            return {
                ...state,
                selectedUser: payload
            }
            
        default:
            return state;
    }


}