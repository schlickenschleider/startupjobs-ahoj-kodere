const scrape = require('website-scraper');

let options = {
    urls: ['https://www.startupjobs.cz/ahoj-kodere'],
    directory: './ahoj-kodere',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});