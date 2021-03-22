import url from 'url';

export default async (req, res) => {
    const path = req.query.url.join('/');
    const parsedUrl = url.parse(req.url);
    const query = parsedUrl.search ? parsedUrl.search : '';
    const fullUrl = `http://localhost:8100/go-solo/v1/${path}${query}`;
    const options = {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (Object.keys(req.body).length > 0) {
        options.body = JSON.stringify(req.body);
    }

    const response = await fetch(fullUrl, options);
    res.status(response.status);

    let responseData;

    try {
        responseData = await response.json();
    } catch (e) {
        responseData = {
            errorCode: response.status,
            errorMessage: response.statusText,
        };
    }

    const data = {
        status: response.status,
        message: response.statusText,
        data: responseData,
        name: fullUrl,
    };

    res.send(data);
};
