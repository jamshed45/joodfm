// src/lib/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchSettings = async () => {
  const response = await axios.get(`${API_BASE_URL}/settings`);
  return response.data;
};


export async function fetchTranslationKeys(lang = 'en') {
  const response = await axios.get(`http://localhost/joodfm_admin/public/api/translations?lang=${lang}`);
  return response.data;
}

export async function fetchClientLogos() {
  const response = await axios.get(`${API_BASE_URL}/client-logos`);
  return response.data.logos;
}
