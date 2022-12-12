import React, { useState } from 'react';

const HomeContext = React.createContext({
	family_members:{},
	notification:"",
	getAllFamilyMembers: (obj) => {}
});
export default HomeContext;

export const HomeContextProvider = (props) => {

	const [familyDataState, setFamilyDataState] = useState({family_members:{},notification:""});
	
	const home = {
		 	family_members:familyDataState.family_members,

	    getAllFamilyMembers: (obj,notification) => {
	      setFamilyDataState(prevState => {
	      	return {...prevState, family_members: obj, "notification": notification}
	      });
	    },
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}