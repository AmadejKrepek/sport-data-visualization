import auth from './auth';

function AddMultipleRequests(data) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:40000/reader/file', data);
    const requestTwo = auth.post('http://studentdocker.informatika.uni-mb.si:40000/reader/file/integralMetrics', data);

    arr.push(requestOne);
    arr.push(requestTwo);

    return arr;
}

function AddWeatherRequest(rawData, apiKey) {
    let arr = []
    rawData, apiKey
    /*
    var config = {
        method: 'post',
        url: 'http://studentdocker.informatika.uni-mb.si:50000/weather/identification/?vc_api_key=NHWQVNPY8ZX9TWPE4D3KU7TDB',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : rawData
      };
      */

    //let requestOne = axios(config);
    let requestOne = auth.get('https://vreme-podnebje.si/api/weatherResponse.json');

    arr.push(requestOne);

    return arr;
}

function AddTopographicRequest(jsonData) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:40000/hillIdentification/image', jsonData, { responseType: 'arraybuffer' });

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