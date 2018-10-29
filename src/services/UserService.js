class UserService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}users`
    }
}

export default UserService