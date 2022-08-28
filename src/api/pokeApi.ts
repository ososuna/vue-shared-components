import axios from 'axios';

const pokeApi = axios.create({
  baseURL: `${ import.meta.env.VITE_API_URI }`
});
 
export default pokeApi;
