import React, { useContext } from 'react';
import UserContext from '../context/User/UserContext'

const Profile = () => {

  const { selectedUser } = useContext(UserContext)

  return (
    <div> 
 {/* si el usuario fue seleccionado muestra el div  */}
    { 
      selectedUser ? 
      (<div className='card card-body text-center' > 
        <img className='card-img-top' src={ selectedUser.avatar } alt={ selectedUser.first_name } />
        <h1>{ `${ selectedUser.first_name } ${selectedUser.last_name} `}</h1>
        <h3> Email: { selectedUser.email } </h3>
      </div>) :(<h1>No hay usuario seleccionado</h1>)
      
    }

    </div>
  )
}

export default Profile