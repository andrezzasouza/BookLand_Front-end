import axios from 'axios';

const API_URL = 'http://localhost:4000';

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);
const signIn = (body) => axios.post(`${API_URL}/sign-in`, body);
const home = () => axios.get(`${API_URL}/home`);

// const createHeaders = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

export { signUp, signIn, home };
