import { useState,useEffect } from 'react'
import axios from 'axios'
import { createContext } from "react";

export  const ContextDataCreate = createContext(null)

function ContextState (props) {
    
    const [data, setData] = useState({ data: [], isLoading: true });
    const[searchValue,setSearchValue] = useState('')
    
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/products/getProducts`);
      setData({ data: result.data.result, isLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
    const contextValue = {
        productDetails: data,
        setData:setData,
        setSearchValue:setSearchValue    
    };

    return (
        <ContextDataCreate.Provider value={contextValue}>
            {props.children}
        </ContextDataCreate.Provider>
    )
}
export default ContextState

