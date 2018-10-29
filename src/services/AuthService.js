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

    logout() {
        let self = this;
        return self.axios.post(`${self.baseUrl}/logout`);
    }
}

export default AuthService