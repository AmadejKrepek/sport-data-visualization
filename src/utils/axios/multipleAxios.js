import auth from './auth';

function AddMultipleRequests(data) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file', data);
    const requestTwo = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file/integralMetrics', data);

    arr.push(requestOne);
    arr.push(requestTwo);

    return arr;
}

function AddWeatherRequest(data, rawData, apiKey) {
    let arr = []

    const requestOne = auth.post(`http://studentdocker.informatika.uni-mb.si:50000/weather/identification/?vc_api_key=${apiKey}`, rawData);
    const requestTwo = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file/integralMetrics', data);

    arr.push(requestOne);
    arr.push(requestTwo);

    return arr;
}

function AddRawSportRequest(data) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file', data);

    arr.push(requestOne);

    return arr;
}

export {
    AddMultipleRequests, 
    AddWeatherRequest,
    AddRawSportRequest
}