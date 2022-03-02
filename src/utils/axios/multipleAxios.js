import auth from './auth';

function AddMultipleRequests(data) {
    let arr = []

    const requestOne = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file', data);
    const requestTwo = auth.post('http://studentdocker.informatika.uni-mb.si:50000/reader/file/integralMetrics', data);

    arr.push(requestOne);
    arr.push(requestTwo);

    return arr;
}

export {AddMultipleRequests}