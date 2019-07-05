import axios from 'axios';

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d142c1fcefc54373b80badf/denglu'

let api = {
    login(){
        return axios.get('/login')
    },
    login2(params){
        return axios.post('/login2',params)
    }
}

export default api;











