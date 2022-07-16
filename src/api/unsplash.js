import axios from 'axios';

// One approach
//const searchImages = (term) => {
//};

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZF1ScyX_cqnpNAuYuqLYjHdIKyPFeI9wYbBMUp7PckM'
    }
});