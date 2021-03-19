import axios from 'axios';
import { isProduction } from '../../../utils/isProduction';

export default async (req, res) => {
    let url;
    if (isProduction()) {
        url = '';
    } else {
        url = 'http://localhost:8080/go-solo/v1';
    }
    const data = await axios
        .get(url)
        .then((response) => response.data)
        .catch((error) => {
            console.warn(error);
        });
    res.send(data);
};
