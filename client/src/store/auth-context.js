import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	id:"",
	email:"",
	name:"",
	notification:"",
	login: (obj) => {},
	logout: () => {},
	signup: (obj) => {}
});
export default AuthContext;

export const AuthContextProvider = (props) => {

	const [authDataState, setauthDataState] = useState({id:"", email:"", name:"", jti:"",notification:""});
	
	useEffect(() => {
    const localEmail = localStorage.getItem("email");
    const localId = localStorage.getItem("id");
    const localJti = localStorage.getItem("jti");
    if (localEmail) {
      setauthDataState(prevState => {
      	return {...prevState, "email": localEmail, "id": localId, "jti": localJti}
      });
    }
  }, []);

	const authData = {
	    email: authDataState.email,
	    name: authDataState.name,
	    id: authDataState.id,
	    jti: authDataState.jti,
	    login: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
				localStorage.setItem("jti", obj.jti);
	    },
	    logout: () => {
	      setauthDataState({email:"", name:"",notification:"Logged Out"});
	      localStorage.removeItem("email");
	      localStorage.removeItem("name");
	      localStorage.removeItem("jti");
	      localStorage.removeItem("id");
	    },
	    signup: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
				localStorage.setItem("jti", obj.jti);

	    }
	}

	return(
		<AuthContext.Provider value={authData}>
			{props.children}
		</AuthContext.Provider>
	)
}