import axios from 'axios';
//import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error("No token provided API");
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric',
        }
    });
    return data;
//   //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//   const url = new URL('https://api.openweathermap.org/data/2.5/weather');
//     url.searchParams.append('q', city);
//     url.searchParams.append('appid', token);
//     url.searchParams.append('land', 'ua');
//     url.searchParams.append('units', 'metric');
//   https.get(url, (response) => {
//         let res = '';
//         response.on('data', (chunk) => {
//             res += chunk;
//         });
//         response.on('end', () => {
//             console.log(res);
//         });
//         response.on('error', (error) => {
//             console.log(error);
//         })
//   })
}