import { Router } from 'express';


const ReportRouter = Router();
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const pdf = require('html-pdf');
const axios = require('axios');

const base = '/report';


ReportRouter.get(`${base}`, async (req, res, next) => {
    try {
        let fileName = req.query?.file_name ? req.query.file_name : 'file.pdf';
        const website_url = decodeURIComponent(req.query.req_page);
        console.log({website_url})
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser',
            args: ['--no-sandbox']
        });
      
        // Create a new page
        const page = await browser.newPage();

        // Website URL to export as pdf
      
        await page.goto(website_url, { waitUntil: 'networkidle0', timeout: 0 });
        await page.emulateMediaType('screen');
        const pdf = await page.pdf({
            //headerTemplate: '<span style="font-size: 30px; width: 200px; height: 200px; background-color: black; color: white; margin: 20px;">Header</span>',
            //fofooterTemplate: "<div><div class='pageNumber'></div> <div>/</div><div class='totalPages'></div></div>",

            //displayHeaderFooter: true,

            path: 'result.pdf',
            margin: { top: '10px', right: '10px', bottom: '10px', left: '10px' },
            printBackground: true,
            format: 'A4',
        });


        // Close the browser instance
        await browser.close();

        var file = fs.createReadStream('./result.pdf');
        var stat = fs.statSync('./result.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        file.pipe(res);

        res.on('finish', function () {
            // The response has been sent completely
            // You can now safely delete the file
            fs.unlink('./result.pdf', (err) => {
                if (err) {
                    console.error('Error deleting the file:', err);
                } else {
                    console.log('File deleted successfully');
                }
            });
        });

    } catch (e) {
        console.dir(e)
        next(e)
    }
})


const { exec } = require('child_process');
ReportRouter.post(`${base}-v2`, (req, res, next) => {
    try {

        const url = req.body.url;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                const html = response.data //  '<h1>Hello, world!</h1>';

                pdf.create(html).toStream((err, stream) => {
                    if (err) return console.log(err);
                    res.setHeader('Content-Type', 'application/pdf');
                    stream.pipe(res);
                    // if (fs.existsSync('/var/task/result.pdf')) {
                    //     console.log('The file exists');
                    //     exists = true 
                    // } else {
                    //     console.log('The file does not exist');
                    // }

                    // return res.status(200).json({data , exists});

                    // exec('pwd', (err, stdout, stderr) => {
                    //     if (err) {
                    //       console.error(err);
                    //       return res.status(500).send('An error occurred');
                    //     }
                    //     res.send(stdout);
                    //   });

                    // var file = fs.createReadStream('/var/task/result.pdf');
                    // var stat = fs.statSync('/var/task/result.pdf');
                    // res.setHeader('Content-Length', stat.size);
                    // res.setHeader('Content-Type', 'application/pdf');
                    // res.setHeader('Content-Disposition', 'attachment; filename=cost-calculator.pdf');
                    // file.pipe(res);

                    // res.on('finish', function () {
                    //     // The response has been sent completely
                    //     // You can now safely delete the file
                    //     fs.unlink('/var/task/result.pdf', (err) => {
                    //         if (err) {
                    //             console.error('Error deleting the file:', err);
                    //         } else {
                    //             console.log('File deleted successfully');
                    //         }
                    //     });
                    // });
                });
            })
            .catch(error => {
                console.log(` --- exception occurred ---`)
                console.log(error);
                next(error)
            });

    } catch (e) {
        next(e)
    }
})

export default ReportRouter;
