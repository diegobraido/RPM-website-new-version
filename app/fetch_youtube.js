const https = require('https');

https.get('https://www.rpmachinery.com/products/prodog.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/youtube\.com\/embed\/[a-zA-Z0-9_-]+/g);
    console.log(matches);
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
