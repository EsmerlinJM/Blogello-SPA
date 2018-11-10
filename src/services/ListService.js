class ListService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}boards`
    }

    add(model, boardId){
        let self = this
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.post(`${self.baseUrl}/${boardId}/list`, model);
    }
    
    update(model, boardId, listId){
        let self = this 
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.put(`${self.baseUrl}/${boardId}/list/${listId}`, model);
    }

    remove(boardId, listId){
        let self = this 
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.delete(`${self.baseUrl}/${boardId}/list/${listId}`);
    }
}

export default ListService