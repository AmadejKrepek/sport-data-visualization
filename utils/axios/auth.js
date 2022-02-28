import axios from 'axios';
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://studentdocker.informatika.uni-mb.si:50000',
  });

export default instance;