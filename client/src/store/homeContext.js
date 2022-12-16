import React, { useState } from 'react';

const HomeContext = React.createContext({
	survey:{},
	family:{},
	notification:"",
	getAllFamilyMembers: (obj) => {},
	getSurveyByMember: (obj) => {},
});
export default HomeContext;

export const HomeContextProvider = (props) => {

	const [familyDataState, setFamilyDataState] = useState({family:{}, survey:{}, notification:""});
	
	const home = {
		 	family:familyDataState.family,
		 	survey:familyDataState.survey,

	    getAllFamilyMembers: (obj,notification) => {
	      setFamilyDataState(prevState => {
	      	return {...prevState, family: obj, "notification": notification}
	      });
	      // setFamilyDataState({family:obj, notification})
	    },
	    getSurveyByMember: (obj) => {
	    	setFamilyDataState(prevState => {
	      	return {...prevState, survey: obj}
	      });
	    }
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}