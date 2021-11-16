import axios from 'axios';

const API_URL = 'http://localhost:4000';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);
const signIn = (body) => axios.post(`${API_URL}/sign-in`, body);
const home = () => axios.get(`${API_URL}/home`);
const product = (id) => axios.get(`${API_URL}/product/${id}`);
const header = (token) => axios.delete(`${API_URL}/header`, createHeaders(token));

export {
  signUp,
  signIn,
  home,
  product,
  header,
};
