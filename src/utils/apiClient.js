import qs from 'qs';
import { MOVIE_API, API_KEY } from './constants';

export const Client = async (endpoint, { body, method, headers, ...customConfig } = {}) => {
    const url_endpoint = qs.stringify({ ...qs.parse(endpoint), apiKey: API_KEY });

    const config = {
        method,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }
    if (body) {
        config.body = JSON.stringify(body)
    }
    return window
        .fetch(`${MOVIE_API}?${url_endpoint}`, config)
        .then(async response => {
            const json = await response.json();
            if (json.Response === 'False') {
                throw new Error(json.Error);
            } else if(json.Response === 'True') {
                return json;
            }
        })
};
