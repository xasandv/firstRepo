// Example using Promise.resolve()
// function fetchData(status) {
//     return new Promise((resolve, reject) => {
//         if (status === 'success') {
//             setTimeout(() => {
//                 const data = { message: 'Data fetched successfully!' };
//                 resolve(data); 
//             }, 2000);
//         } else {
//             setTimeout(() => {
//                 reject(new Error('Failed to fetch data'));
//             }, 2000); 
//         }
//     });
// }
// fetchData('successs')
//     .then(data => {
//         console.log('Data:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });





