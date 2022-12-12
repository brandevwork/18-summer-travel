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

	const [authDataState, setauthDataState] = useState({id:"", email:"", name:"",notification:""});
	
	useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (localEmail) {
      setauthDataState(prevState => {
      	return {...prevState, "email": localEmail}
      });
    }
  }, []);

	const authData = {
	    email: authDataState.email,
	    name: authDataState.name,
	    login: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
	    },
	    logout: () => {
	      setauthDataState({email:"", name:"",notification:"Logged Out"});
	      localStorage.removeItem("email");
	      localStorage.removeItem("name");
	    },
	    signup: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
	    }
	}

	return(
		<AuthContext.Provider value={authData}>
			{props.children}
		</AuthContext.Provider>
	)
}