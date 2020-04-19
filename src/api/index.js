import axios from 'axios';

export const fetchTheData = async () => {
  try{
    const endPoint = 'https://covid19.mathdro.id/api';
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get( endPoint );
    return { confirmed, recovered, deaths, lastUpdate };
  } catch {
    return 'something is wrong here';
  }
}