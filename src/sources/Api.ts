import axios from 'axios';

const baseUrl = 'https://superheroapi.com/api.php/10223717305259940';

export const searchCharactersFromApi = (term: String): Promise<any> => {
  return axios.get(`${baseUrl}/search/${term}`);
}

export const getCharacterDetailsFromApi = (id: String): Promise<any> => {
  return axios.get(`${baseUrl}/${id}`);
}

