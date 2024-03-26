import axios from 'axios'
import Cookies from 'js-cookie'; 

const cookiesToken = Cookies.get('token') || ''
console.log(cookiesToken)
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    
    if (cookiesToken) {
        config.headers.Authorization = `Bearer ${cookiesToken}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    }
)

export default api