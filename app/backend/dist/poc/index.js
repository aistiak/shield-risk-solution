const pdf = require('html-pdf');
const fs = require('fs');
const axios = require('axios');
axios.get('http://www.example.com')
    .then(response => {
    console.log(response.data);
    const html = response.data; //  '<h1>Hello, world!</h1>';
    pdf.create(html).toFile('./example.pdf', (err, res) => {
        if (err)
            return console.log(err);
        console.log(res);
    });
})
    .catch(error => {
    console.log(error);
});
//# sourceMappingURL=index.js.map