const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api