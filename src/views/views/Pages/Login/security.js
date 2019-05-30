var https = require('https');
var crypto = require('crypto');
algorithm = 'aes-128-cbc';

var SECRET;
var PORT = process.argv[5].toString();
var IP = process.argv[4].toString();
var KEY = process.argv[3].toString()


const fs = require('fs');

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
};

https.createServer(options, function (req, res) {		
    if (req.method == 'POST' || req.method == 'PUT')
    {
	req.on('data',
	       function(message)
	       {
		   var obj = JSON.parse(message);
		   var iv = randomValueHex(16);
		   nonce = Buffer.from(iv, "hex");
		   ts = Math.round(Date.now() / 100);  
		   macd = biuld_mac(req.method,req.url,ts);
		   encmacd = crypto.createHmac('sha256', process.argv[2].toString()).update(macd).digest('base64');
		   
		   if (req.url == '/api/v1/channel/sessions')
		   {
		       var secdata = encrypt(obj.security_data,process.argv[2].toString(),iv);
		       obj.security_data = secdata;
		       sjObject = JSON.stringify(obj);
		       
		       header_options = {
			   'Content-Type': 'application/json',
			   'Content-Length' : Buffer.byteLength(sjObject, 'utf8'),
			   'authorization': 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd),
			   'x-nonce' : Buffer.from(Buffer.from(iv, "hex")).toString('base64') 
		       };
		   }
		   else if (req.url == '/api/v1/channel/transactions/cash_out/csp_redeem?method=AUTH_CONFIRM')
		   {
		       var secdata = encrypt_pin(obj.cash_out_pin,process.argv[2].toString(),iv);
		       obj.cash_out_pin = secdata;
		       sjObject = JSON.stringify(obj);
		       at = JSON.stringify(req.headers['access_token']),
		       header_options = {
			   'Content-Type': 'application/json',
			   'Content-Length' : Buffer.byteLength(sjObject, 'utf8'),
			   'authorization': 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd) + ',access_token=' + at,
			   'x-nonce' : Buffer.from(nonce).toString('base64') 
		       };
		   }
		   else if (req.url == '/api/v1/channel/transactions/purchase/otp/verified')
		   {
		       var secdata = encrypt_pin(obj.otp,process.argv[2].toString(),iv);
		       obj.otp = secdata;
		       sjObject = JSON.stringify(obj);
		       at = JSON.stringify(req.headers['access_token']),
		       header_options = {
			   'Content-Type': 'application/json',
			   'Content-Length' : Buffer.byteLength(sjObject, 'utf8'),
			   'authorization': 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd) + ',access_token=' + at,
			   'x-nonce' : Buffer.from(nonce).toString('base64') 
		       };
		   }
		   else if (req.url == '/api/v1/channel/transactions/purchase/otp/authorised')
		   {
		       var secdata = encrypt_pin(obj.otp,process.argv[2].toString(),iv);
		       obj.otp = secdata;
		       sjObject = JSON.stringify(obj);
		       at = JSON.stringify(req.headers['access_token']),
		       header_options = {
			   'Content-Type': 'application/json',
			   'Content-Length' : Buffer.byteLength(sjObject, 'utf8'),
			   'authorization': 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd) + ',access_token=' + at,
			   'x-nonce' : Buffer.from(nonce).toString('base64') 
		       };
		   }
		   else
		   {
		       sjObject = JSON.stringify(obj);
		       at = JSON.stringify(req.headers['access_token']),
		       header_options = {
			   'Content-Type': 'application/json',
			   'Content-Length' : Buffer.byteLength(sjObject, 'utf8'),
			   'authorization': 'MAC kid =\"' + KEY + '\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd) + ',access_token=' + at
		       };
		   }
		   
		  
		   var https_options = {
		       method: req.method,
		       host: IP,
		       port: PORT,
		       path: req.url,
		       rejectUnauthorized: false,
		       headers: header_options
		   };
		   
		 // https_options.agent = new https.Agent(https_options);
		   
		   var post_req = https.request(https_options, function(serverresponse) {
		       serverresponse.setEncoding('utf8');
		       serverresponse.on('data', function (chunk) {
			   console.log('Response: ' + chunk);
			   res.writeHead( serverresponse.statusCode, serverresponse.headers);
			   res.write(chunk);
			   res.end();
		       });
		       serverresponse.on('end', function() {
			   console.log("HTTP 200");
			   res.writeHead( serverresponse.statusCode, serverresponse.headers);
			   res.end();
		       });
		   });
		   
		   post_req.write(sjObject);
		   post_req.end();
		   
	       });
    }
    else if (req.method == 'DELETE' || req.method == 'GET'){
	var iv = randomValueHex(16);
	nonce = Buffer.from(iv, "hex");
	ts = Math.round(Date.now() / 100);  
	macd = biuld_mac(req.method,req.url,ts);
	encmacd = crypto.createHmac('sha256', process.argv[2].toString()).update(macd).digest('base64');
	at = JSON.stringify(req.headers['access_token']),
	header_options = {
	    'Content-Type': 'application/json',
	    'authorization': 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) +', mac=' + JSON.stringify(encmacd) + ',access_token=' + at
	};
	
	var http_options = {
	    method: req.method,
	    host: IP,
	    port: PORT,
	    path: req.url,
	    rejectUnauthorized: false,
	    headers: header_options
	};
	
	//https_options.agent = new https.Agent(https_options);

        var resbody = '';
        var post_req = https.request(http_options, function(serverresponse) {
            serverresponse.setEncoding('utf8');
            res.writeHead( serverresponse.statusCode, serverresponse.headers);
            serverresponse.on('data', function (chunk) {
                console.log("chunk: " + chunk);
                resbody += chunk;
            });
            serverresponse.on('end', function() { console.log("end"); res.write(resbody,function() { res.end(); }); });
        });
        post_req.end();        	
    }
    else
    {
	console.log('TODO: Implement method ');
	res.writeHead(200, {'Content-Type': 'application/json'});
	//res.write('{ok:ok}');
	res.end();
    }
    
}).listen(8080);


function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len))
};

function encrypt(message,key,iv){
    //let newKey = Buffer.from(key, "hex");
    var b64string = "Iqr16C928vfLEsMlUUoXxA==";
    var buf = new Buffer(b64string, 'base64'); // Ta-da
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    //var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var ciph = cipher.update(message, 'utf8', 'base64');
    ciph += cipher.final('base64');
    console.log("key and vev " + buf.toString() + ' ' +  iv);
    return ciph;
};

function encrypt_pin(message,key,iv){
    let newKey = Buffer.from(key, "hex");	
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var ciph = cipher.update(message, 'utf8', 'base64');
    ciph += cipher.final('base64');
    console.log("key and vev " + newKey.toString() + ' ' +  iv);
    return ciph;
};

function biuld_mac(method,url,ts) {
    mac = method;
    mac	+= ' ';
    mac	+= url;
    mac	+=' ';
    mac	+="HTTP/1.1\n";
	mac	+= ts;
	mac += h;
    return mac
};

console.log('Server listening on port 8080');