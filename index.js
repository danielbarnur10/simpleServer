import axios from 'axios';
const url = "https://zenquotes.io/api/today";

export const getQuotes = async () => {
    return await axios.get(url);
}