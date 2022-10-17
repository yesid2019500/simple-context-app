import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext'


const UserList = () => {
 // le pasamos a que contexto queremos que acceda, en esta caso a la funsion
// vamos a aceder al UserContext. ese contexto tiene acesso a todo el estado

const { getUser, users, getProfile } = useContext(UserContext)


useEffect(()=> {

  console.log(users);
getUser();


},[])

  return (
    <div className="list-group h-100">
        { 
          users.map(user=> (
              <a 
                 className="list-group-item list-group-item-action d-flex flex-row justify-content-start "
                href="#!"
                 key={user.id}
                 onClick={ ()=> getProfile(user.id) }
               > 
               <img className="img-fluid mr-4 rounded-circle" width="80" src={user.avatar} alt={user.first_name} />
               <p>{ `${user.first_name} ${user.last_name}` } </p>
               </a>
          ))
        }
    </div>
  )
}

export default UserList