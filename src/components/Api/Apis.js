import api from "./ApiConst"


export const getCustomerDetails=async()=>{
    return await api.get('/customer/getCustomerDetail')
}