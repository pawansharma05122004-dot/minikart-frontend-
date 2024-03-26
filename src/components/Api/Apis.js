import api from "./ApiConst"


export const getCustomerDetails=async()=>{
    return await api.get('/customer/getCustomerDetail')
}

export const postCustomerDetails=async(data)=>{
    return await api.post('/customer/createCustomerDetail',data)
}