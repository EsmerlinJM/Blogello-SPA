import Axios from 'axios'
import UserServices from '../services/UserService'
import AuthServices from '../services/AuthService'
import BoardService from '../services/BoardService'
import ListService from '../services/ListService'

let apiUrl = 'http://localhost:8000/api/v1/'


// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    UserService : new UserServices(Axios, apiUrl),
    AuthService : new AuthServices(Axios, apiUrl),
    BoardService : new BoardService(Axios, apiUrl),
    ListService : new ListService(Axios, apiUrl)
}