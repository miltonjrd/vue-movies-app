import http from 'axios';

//http.defaults.headers.common['Authorization'] = import.meta.env.VITE_API_JWT;
http.defaults.baseURL = import.meta.env.VUE_APP_API_ROOT || 'https://api.themoviedb.org/3';
http.defaults.params = { api_key: import.meta.env.VITE_API_KEY };

export default http;