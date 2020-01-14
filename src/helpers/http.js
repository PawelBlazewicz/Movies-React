const http = {
    get: (url) => {
        return fetch(url).then(resp => resp.json())
    }
};

export default http;