class BoardService {
    axios
    baseUrl 

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}boards`
    }

    getAll(){
        let self = this
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.get(`${self.baseUrl}`)
    }
}

export default BoardService