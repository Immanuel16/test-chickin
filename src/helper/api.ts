import Axios from "axios";

const apiHelper = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export default apiHelper;