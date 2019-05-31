export function getMaps() {
    return new Promise((res, rej) => {
        axios.get('/api/maps')
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Maps loading error")
            })
    });
}

export function getMap(id) {
    return new Promise((res, rej) => {
        axios.get('/api/maps/' + id)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Map loading error")
            });
    });
}

export function storeMap(data) {
    return new Promise((res, rej) => {
        axios.post('/api/maps', data)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Map creating error")
            });
    })
}

export function destroyMap(id) {
    return new Promise((res, rej) => {
        axios.delete('/api/maps/' + id)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Destroy map error");
            })
    });
}

export function storeLayer(data) {
    return new Promise((res, rej) => {
        axios.post('/api/maps/layers', data)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Store layer error");
            });
    });
}

export function storeMarker(data) {
    return new Promise((res, rej) => {
        axios.post('/api/maps/layers/markers', data)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Store marker error");
            })
    });
}

export function destroyMarker(id) {
    return new Promise((res, rej) => {
        axios.delete('/api/maps/layers/markers/' + id)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Destroy marker error");
            })
    });
}
