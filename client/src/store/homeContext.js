import React, { useState } from 'react';

const HomeContext = React.createContext({
	family:{},
	notification:"",
	getAllFamilyMembers: (obj) => {}
});
export default HomeContext;

export const HomeContextProvider = (props) => {

	const [familyDataState, setFamilyDataState] = useState({family:{},notification:""});
	
	const home = {
		 	family:familyDataState.family,

	    getAllFamilyMembers: (obj,notification) => {
	      // setFamilyDataState(prevState => {
	      // 	return {...prevState, "notification": notification}
	      // });
	      setFamilyDataState({family:obj, notification})
	    },
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}