import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	id:"",
	email:"",
	name:"",
	notification:"",
	jti:"",
	token:"",
	login: (obj) => {},
	logout: () => {},
	signup: (obj) => {}
});
export default AuthContext;

export const AuthContextProvider = (props) => {
	const [authDataState, setauthDataState] = useState({id:"", email:"", name:"", jti:"",token:"", notification:""});
	
	useEffect(() => {
    const localEmail = localStorage.getItem("email");
    const localId = localStorage.getItem("id");
    const localJti = localStorage.getItem("jti");
    const localToken = localStorage.getItem("token");
    if (localEmail) {
      setauthDataState(prevState => {
      	return {...prevState, "email": localEmail, "id": localId, "jti": localJti, "token": localToken}
      });
    }
  }, []);

	const authData = {
	    email: authDataState.email,
	    name: authDataState.name,
	    id: authDataState.id,
	    jti: authDataState.jti,
	    token: authDataState.token,
	    notification: authDataState.notification,
	    login: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
				localStorage.setItem("jti", obj.jti);
				localStorage.setItem("token", obj.token);
	    },
	    logout: async(notify="Logged Out") => {
	      setauthDataState({email:"", name:"", jti:"",token: "", id:"", notification: notify});
	      localStorage.removeItem("email");
	      localStorage.removeItem("name");
	      localStorage.removeItem("jti");
	      localStorage.removeItem("token");
	      localStorage.removeItem("id");
	    },
	    signup: (obj) => {
	      setauthDataState(obj);
	      localStorage.setItem("id", obj.id);
	      localStorage.setItem("email", obj.email);
				localStorage.setItem("name", obj.name);
				localStorage.setItem("jti", obj.jti);
				localStorage.setItem("token", obj.token);

	    }
	}

	return(
		<AuthContext.Provider value={authData}>
			{props.children}
		</AuthContext.Provider>
	)
}