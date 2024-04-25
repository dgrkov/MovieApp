import axios from "axios";

const instnce = axios.create({
    baseURL : 'http://localhost:9090/api',
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instnce;