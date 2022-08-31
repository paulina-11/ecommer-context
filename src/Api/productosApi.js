import axios from 'axios'

const BaseURL = 'https://ecomerce-master.herokuapp.com'
const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const RegisterUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const LoginUser = (data) => axios.post(`${BASE_URL}/login`, data)
const ProductosApi = axios.create({ baseURL: BaseURL })

export { RegisterUser, LoginUser, ProductosApi }
