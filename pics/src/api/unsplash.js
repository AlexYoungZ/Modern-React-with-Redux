import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID On4aLAHre9rZcopW_uCh7fjAv8gix4C3Ckidp1Io7qg'
  }
});