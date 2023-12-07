
const apiUrl = 'http://localhost:3306/api/customers/';

fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
console.log("djddhh")