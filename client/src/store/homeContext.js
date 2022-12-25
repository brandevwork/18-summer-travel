import React, { useState } from 'react';

const HomeContext = React.createContext({
	survey:{},
	family:{},
	notification:[],
	getAllFamilyMembers: (obj) => {},
	getSurveyByMember: (obj) => {},
	saveSurvey: (obj) => {},
	finishSurvey: (obj) => {},
	updateMemberStatus: (family_id) => {},
	setNotifications: (notifications) => {},
});
export default HomeContext;

export const HomeContextProvider = (props) => {

	const [familyDataState, setFamilyDataState] = useState({family:{}, survey:{}, notification:[]});
	
	const home = {
		 	family:familyDataState.family,
		 	survey:familyDataState.survey,
		 	notification:familyDataState.notification,

	    getAllFamilyMembers: (obj,notification) => {
	      setFamilyDataState(prevState => {
	      	return {...prevState, family: obj, notification:[]}
	      });
	      // setFamilyDataState({family:obj, notification})
	    },
	    getSurveyByMember: (obj) => {
	 			// obj[0].choices.push({"id": 786,
        // "choice_text": "span 1",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{"id": 900,
        // "choice_text": "spa 2",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{"id": 9400,
        // "choice_text": "spa 3",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{
        // 	"id": 232,
        // "choice_text": "span 4",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"
        // })
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, survey: obj, notification:[]}
	      });
	    },
	    saveSurvey: (obj) => {
	    	let sur = familyDataState.survey
	    	let objIndex = sur.findIndex((objArr => objArr.id == obj.question_id));
	    	sur[objIndex].choices.map(function(sur_ch,i){
	    		// if(obj.choice_ids.includes(sur_ch.id.toString())) {
	    		// 	sur_ch.answer = true
	    		// }
	    		for (const key in obj.choice_ids) {
					  if (obj.choice_ids.hasOwnProperty(key)) {
					    if(sur_ch.id.toString() == obj.choice_ids[key])
	    					sur_ch.answer = true  
					  }
					}
	    		return sur_ch
	    	})
	    	
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, survey: sur, notification: []}
	      });
	    },

	    finishSurvey: (obj) => {	    	
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, survey: {},notification: []}
	      });
	    },

	    updateMemberStatus: (family_id) => {  
	    	let fam = familyDataState.family
	    	let objIndex = fam.findIndex((objArr => objArr.id == family_id));
	    	fam[objIndex].is_active = !(fam[objIndex].is_active)
	    	setFamilyDataState(prevState => {
	      	return {survey:{...prevState.survey}, family: fam, notification:[]}
	      });
	    },
	    setNotifications: (notifications) => {
	    	setFamilyDataState(prevState => {
	      	return {survey:{...prevState.survey}, family:{...prevState.family}, notification: notifications}
	      });
	    }
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}