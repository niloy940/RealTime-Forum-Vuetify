import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

class Questions {
    static all(context, mutation) {
        return axios.get('/questions')
            .then(response=> {
                let payload = response.data.data;
                console.log(payload);
                context.commit(mutation, payload);
            })
            .catch(error => console.log(error))
    }
}

export default Questions;
