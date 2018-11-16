class CardService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}boards`
    }

    add(model, boardId, listId){
        let self = this
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.post(`${self.baseUrl}/${boardId}/list/${listId}/card`, model);
    }
    
    update(model, cardId){
        let self = this 
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.put(`${self.baseUrl}/card/${cardId}`, model);
    }

    remove(cardId){
        let self = this 
        self.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return self.axios.delete(`${self.baseUrl}/card/${cardId}`);
    }
}

export default CardService