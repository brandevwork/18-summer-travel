import React, { useCallback, useState, useContext } from 'react';
import AuthContext from "../store/authContext";
const delay = ms => new Promise(res => setTimeout(res, ms));
function useData()	{
  const ctxUser = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const fetchDataHandler = useCallback(async (url, config="", applyData) => {
    setLoading(true);
    try {
      let response="";
      response = config !== "" ? await fetch(url,config) : await fetch(url);
      await delay(1000);
      const text = await response.text();
      setLoading(false);
      try{
        let data = JSON.parse(text)
        applyData(data,response.headers);
      }catch(err){
        ctxUser.logout(text)
        applyData({"error":text});
      }
    } catch (error) {
      setLoading(false);
      applyData({"error":error.message});
    }
  },[])
  return { fetchDataHandler, loading };
}

export default useData;