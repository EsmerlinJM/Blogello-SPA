class AuthService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}users`
    }

    register(model){
        let self = this;
        return self.axios.post(`${self.baseUrl}/register`, model);
    }

    login(model){
        let self = this;
        return self.axios.post(`${self.baseUrl}/login`, model);
    }

    logout(token) {
        let self = this;
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(token)}`
        // self.axios.post(`${self.baseUrl}/logout`)
        localStorage.removeItem(token)
        return true;
    }

    getAuth(){
        let self = this;
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.get(`${self.baseUrl}/auth`) 
    }
}

export default AuthService