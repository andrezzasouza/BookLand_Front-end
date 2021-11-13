import axios from 'axios';

const API_URL = 'http://localhost:4000';

const home = () => axios.get(`${API_URL}/home`);

export default home;
