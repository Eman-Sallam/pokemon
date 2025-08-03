import axios from 'axios';
import { POKEMON_API_BASE } from '../constants';

const api = axios.create({
  baseURL: POKEMON_API_BASE,
});

export default api;
