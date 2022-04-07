import React,{useContext} from 'react'
import Cookie from 'js-Cookie'
const UserCredential={
 username=Cookie.get('username'),
 password=Cookie.get('password')
}
export default React.createContext(UserCredential)