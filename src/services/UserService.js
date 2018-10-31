class UserService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}users`
        this.axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`
    }

    getAll(){
        let self = this
        return self.axios.get(`${self.baseUrl}`)
    }
}

export default UserService