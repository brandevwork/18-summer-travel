import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	email:"",
	name:"",
	login: (obj) => {},
	logout: () => {},
	signup: (obj) => {}
});
export default AuthContext;

export const AuthContextProvider = (props) => {

	const [authDataState, setauthDataState] = useState({email:"", name:""});
	
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
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
	    },
	    logout: () => {
	      setauthDataState({email:"", name:""});
	      localStorage.removeItem("email");
	      localStorage.removeItem("name");
	    },
	    signup: (obj) => {
	      setauthDataState(obj);
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