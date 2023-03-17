import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com';

export const getHeroData = async () => {
  try {
    const { data } = await axios.get('/api/character');
    return data;
  } catch (error) {
    throw error;
  }
};
export const getHeroDetails = async id => {
  try {
    const { data } = await axios.get(`/api/character/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
