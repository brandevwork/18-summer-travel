import React, { useState } from 'react';

const HomeContext = React.createContext({ 
});
export default HomeContext;

export const HomeContextProvider = (props) => {
	
	
	const home = {
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}