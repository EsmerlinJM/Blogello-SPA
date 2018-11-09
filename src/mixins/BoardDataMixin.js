export default {
    methods: {
        getBoards() {
            let self = this
            self.$store.state.services.BoardService
            .getAll()
            .then(result => {
                self.boards = result.data.boards;
                Event.$emit('BoardLoaded', result.data.boards);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}