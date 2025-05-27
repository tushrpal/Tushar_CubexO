const http = require('http');
const fs = require('fs');
const url=require('url');


const myServer = http.createServer((req, res) => {
const myurl=url.parse(req.url,true);

    const log = `${Date.now()} : ${req.url} server requested\n`;
    fs.appendFile("./log.txt", log, (err, fileRes) => {
        if (err) {
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch(myurl.pathname){
            case '/':
        res.end("Hello from home page server");
    break;
            case '/about':
                const username=myurl.query.myname;
                res.end(`Hello ${username} from about page server`);
                break;
                case '/search':
                const search=myurl.query.sq;
                res.end(`here are your search query result for ${search} `);
                break;
            default:
                res.end("not found");
    }
    });
});

myServer.listen(8000, () => {
    console.log("Server Started");
});
