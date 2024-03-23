import { useState } from 'react'
import axios from 'axios'

import { createContext } from "react";

export  const ContextDataCreate = createContext(null)

function ContextState (props) {
    const [data, setData] = useState({search:[],serachValue:''})
    const handleSearchProduct = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/products/searchProduct?key=${data.serachValue}`)
            setData({serach:result.data.result})            
        } catch (err) {
            console.log(err)
        }
    }
    const contextValue = {
        searchData: data,
        setData:setData,
        handleSearchProduct: handleSearchProduct
    };

    return (
        <ContextDataCreate.Provider value={contextValue}>
            {props.children}
        </ContextDataCreate.Provider>
    )
}
export default ContextState

