const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        console.log('req content-type:',req.headers['content-type'])
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',()=>{
            console.log('postData:',postData)
            res.end('hello word')
        })
    }
})
server.listen(8000)
console.log('OK')