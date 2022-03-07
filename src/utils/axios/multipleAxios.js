import auth from './auth';

function AddMultipleRequests(data) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file', data);
    const requestTwo = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file/integralMetrics', data);

    arr.push(requestOne);
    arr.push(requestTwo);

    return arr;
}

function AddWeatherRequest(rawData, apiKey) {
    let arr = []
    rawData, apiKey
    //let requestOne = auth.post(`http://studentdocker.informatika.uni-mb.si:50000/weather/identification?vc_api_key=${apiKey}`, rawData);
    let requestOne = auth.get('https://vreme-podnebje.si/api/weatherResponse.json');

    arr.push(requestOne);

    return arr;
}

function AddTopographicRequest(jsonData) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:50000/topographicFeatures/', jsonData);

    arr.push(requestOne);

    return arr;
}

function AddRealTimeRequest() {
    let arr = [];

    const requestOne = auth.get('https://vreme-podnebje.si/weather');

    arr.push(requestOne);

    return arr;

}

export {
    AddMultipleRequests, 
    AddWeatherRequest,
    AddTopographicRequest,
    AddRealTimeRequest
}