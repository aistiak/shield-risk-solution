"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportRouter = (0, express_1.Router)();
const puppeteer = require('puppeteer');
const fs = require('fs');
const pdf = require('html-pdf');
const axios = require('axios');
const base = '/report';
ReportRouter.post(`${base}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield puppeteer.launch();
        // Create a new page
        const page = yield browser.newPage();
        // Website URL to export as pdf
        const website_url = req.body.req_page;
        yield page.goto(website_url, { waitUntil: 'networkidle0', timeout: 0 });
        yield page.emulateMediaType('screen');
        const pdf = yield page.pdf({
            headerTemplate: '<span style="font-size: 30px; width: 200px; height: 200px; background-color: black; color: white; margin: 20px;">Header</span>',
            fofooterTemplate: "<div><div class='pageNumber'></div> <div>/</div><div class='totalPages'></div></div>",
            displayHeaderFooter: true,
            path: 'result.pdf',
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        // Close the browser instance
        yield browser.close();
        var file = fs.createReadStream('./result.pdf');
        var stat = fs.statSync('./result.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=cost-calculator.pdf');
        file.pipe(res);
        res.on('finish', function () {
            // The response has been sent completely
            // You can now safely delete the file
            fs.unlink('./result.pdf', (err) => {
                if (err) {
                    console.error('Error deleting the file:', err);
                }
                else {
                    console.log('File deleted successfully');
                }
            });
        });
    }
    catch (e) {
        next(e);
    }
}));
const { exec } = require('child_process');
ReportRouter.post(`${base}-v2`, (req, res, next) => {
    try {
        const url = req.body.url;
        axios.get(url)
            .then(response => {
            console.log(response.data);
            const html = response.data; //  '<h1>Hello, world!</h1>';
            pdf.create(html).toStream((err, stream) => {
                if (err)
                    return console.log(err);
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
            console.log(` --- exception occurred ---`);
            console.log(error);
            next(error);
        });
    }
    catch (e) {
        next(e);
    }
});
exports.default = ReportRouter;
//# sourceMappingURL=report.routes.js.map