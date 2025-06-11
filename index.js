import axios from 'axios';
const url = "https://zenquotes.io/api/random";

export const getQuotes = async () => {
    
    const json = await axios.get(url);
    
    return json.data[0].q;
}