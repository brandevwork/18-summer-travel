import React, { useState } from 'react';

const HomeContext = React.createContext({
	survey:{},
	family:{},
	notification:"",
	getAllFamilyMembers: (obj) => {},
	getSurveyByMember: (obj) => {},
	saveSurvey: (obj) => {},
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
	    },
	    saveSurvey: (obj) => {
	    	let sur = familyDataState.survey
	    	let objIndex = sur.findIndex((objArr => objArr.id == obj.question_id));
	    	sur[objIndex].choices.map(function(sur_ch,i){
	    		if(obj.choice_ids.includes(sur_ch.id.toString())) {
	    			sur_ch.answer = true
	    		}
	    		return sur_ch
	    	})
	    	
	    	setFamilyDataState(prevState => {
	      	return {...prevState, survey: sur}
	      });
	    }
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}