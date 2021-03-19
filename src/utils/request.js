export const handleResponse = (response) =>
    response.text().then((text) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            return Promise.reject(data);
        }

        return data;
    });

export const getData = (url) => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(url, requestOptions).then(handleResponse);
};

export const postData = (url, body) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };

    return fetch(url, requestOptions).then(handleResponse);
};

export const patchData = (url, body) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };

    return fetch(url, requestOptions).then(handleResponse);
};

export const putData = (url, body) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };

    return fetch(url, requestOptions).then(handleResponse);
};

export const deleteData = (url) => {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(url, requestOptions).then(handleResponse);
};
