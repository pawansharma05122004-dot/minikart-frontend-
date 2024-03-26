import api from "./ApiConst"

export const login=async(data)=>{
    return await api.post('/users/login',data)
}


export const getCustomerDetails=async()=>{
    return await api.get('/customer/getCustomerDetail')
}

export const postCustomerDetails=async(data)=>{
    return await api.post('/customer/createCustomerDetail',data)
}

export const postProduct=async(data)=>{
    return await api.post('products/postProduct',data)
}