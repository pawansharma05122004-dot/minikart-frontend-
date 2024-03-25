import axios from 'axios'
const token = JSON.parse(localStorage.getItem('token')) || '';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    const accessToken = token
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    }
)

export default api