// 1- install node.js
// 2- navigate to this folder
// 3- install axios using npm: npm install axios
// 4- run the code using terminal : node index.js

// Import Axios
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // Handle successful response
        console.log('Response:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });

// another way using  async/await 


fetchData();


async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Response:', response.data);

    } catch (error) {
        console.error('Error:', error);
    }

}