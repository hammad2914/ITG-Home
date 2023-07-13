
// const accessKey = 'd58325704a33a57af26180c8cb4128ff';

// // Function to retrieve visitor information
// function getVisitorInformation() {
//   // Make an HTTP GET request to the IPStack API endpoint
//   fetch(`http://api.ipstack.com/check?access_key=${accessKey}`)
//     .then(response => response.json())
//     .then(data => {
//       // Access the visitor information from the response data
//       const ip = data.ip;
//       const country = data.country_name;
//       const region = data.region_name;
//       const city = data.city;
//       const zip = data.zip;
//       const latitude = data.latitude;
//       const longitude = data.longitude;
//       const info = data;

//     //   Display the visitor information
//       console.log('IP:', ip);
//       console.log('Country:', country);
//       console.log('Region:', region);
//       console.log('City:', city);
//       console.log('ZIP Code:', zip);
//       console.log('Latitude:', latitude);
//       console.log('Longitude:', longitude);
//     // console.log(info);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // Call the function to retrieve visitor information
// getVisitorInformation();
