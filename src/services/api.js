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
const getCartProducts = (token) => axios.get(`${API_URL}/cart-products`, createHeaders(token));
const deleteCartProduct = (body, token) => axios.post(`${API_URL}/cart-products`, body, createHeaders(token));
const postDeliveryInfo = (body, token) => axios.post(`${API_URL}/delivery`, body, createHeaders(token));
const postPaymentInfo = (body, token) => axios.post(`${API_URL}/payment`, body, createHeaders(token));
const requestUpdateQuantity = (body, token) => axios.post(`${API_URL}/cart-quantity`, body, createHeaders(token));
const clearCart = (token) => axios.delete(`${API_URL}/cart-quantity`, createHeaders(token));
const getSavedAddress = (token) => axios.get(`${API_URL}/delivery`, createHeaders(token));
const getSavedPayment = (token) => axios.get(`${API_URL}/payment`, createHeaders(token));
const header = (token) => axios.delete(`${API_URL}/header`, createHeaders(token));

export {
  signUp,
  signIn,
  getCartProducts,
  home,
  deleteCartProduct,
  postDeliveryInfo,
  postPaymentInfo,
  requestUpdateQuantity,
  clearCart,
  getSavedAddress,
  getSavedPayment,
  header,
};
