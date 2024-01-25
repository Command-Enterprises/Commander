//TODO (in order of priority):
//_______________________
//use subdomains instead of proxy url (google.com.commanderswebsite.com/index.html, not commmanderswebsite.com/proxy/google.com/index.html
//work with https
var http = require("http")
var fs = require("fs");3
const { rejects } = require("assert");
const { hostname } = require("os");
const timeout = 15000
const deploymentURL = "05100e4e-27a7-477f-8977-5c6163bb021c-00-35p4q7f2xsyxz.picard.replit.dev"
var dumb_shit
const removeSlash = /[^\/]*/g;
const isolateDomainRe = /([A-Za-z0-9_\-~]+\.[A-Za-z0-9_\-~]+(\.[A-Za-z0-9_\-~]+)*)/gm;
function isolateDomain(url){
  let thingy = [...url.matchAll(isolateDomainRe)];
  console.log(thingy+"har har har har")
  let otherthingy = [...url.matchAll(isolateProtocol)];
  return url.substring(otherthingy.join('').length,thingy.join('').length)
}
const isolateProtocol = /http:\/\/|https:\/\//gm;
const isolatePathProtocol = /(http|https):\/\/([A-Za-z0-9_\-~]+\.[A-Za-z0-9_\-~]+(\.[A-Za-z0-9_\-~]+)*)/gm;
const parseTldFromFile = /(?<=\n)[\w-]+(?=\n)/gm;
const urlParse = /(?<=")((http|https|ftp):\/\/)([\w\-~]+\.[\w\-~]+)(\.?[\w\-~]+((?!\.\/)\.?))*(\/[A-Za-z0-9_.?=\-~]*\/?)+(?=")/mg;
const urlParseNoString = /((http|https|ftp):\/\/)([\w\-~]+\.[\w\-~]+)(\.?[\w\-~]+((?!\.\/)\.?))*(\/[A-Za-z0-9_.?=\-~]*\/?)+/mg;
function isolatePath(url){
  let thingy = [...url.matchAll(isolatePathProtocol)]
  return url.substring(thingy.join('').length)
}
function get_wrap(url,headers) {
  console.log(url)
  let stuff = new Object();
  let options = {
    hostname: isolateDomain(url),
    port: 80,
    path: isolatePath(url),
    Headers:{
      headers
    },
  };
  console.log(options[hostname]+"aaaaaaa")
  return new Promise((resolve, reject) => {
  const req = http.get(options, function(res) {
    let code = res.statusCode
    let data = ""
    req.on("timeout",function(){
      throw new Error("timeout");
      //silly identation go brrrrrr
                               })
    res.setEncoding("utf-8");
    res.on("data", function(chunk) {data=data+chunk});
    res.on("end", function(){
      stuff[1] = res.statusCode
      stuff[2] = res.headers
      stuff[3] = data
      resolve(stuff);
    })
    res.on("error", function(erm){
      throw new Error(erm)})
  })
  })
}
function post_wrap(data,url,datatype){
  let receivingData = "";
  let stuff = new Object();
  let options = {
    hostname: url.match(isolateDomain),
    port: 80,
    method: "POST",
    path: isolatePath(url),
    Headers: {
      "Content-length": Buffer.byteLength(data),
      "Content-type": datatype,
      //user agent is firefox because firefox is based
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
    },
  };
  console.log(options[hostname]+"aaaaaa")
  return new Promise((resolve,reject)=>{let request = http.request(options,(res)=>{
    res.on(data, (chunk) => {
      receivingData = receivingData + chunk
    });
    res.on("end", () => {
      stuff[1] = res.statusCode
      stuff[2] = res.headers["content-type"]
      stuff[3] = receivingData
      resolve(stuff);
  });
  daRequest.on("error", (err) => {stuff[1] = NaN
                                  //identatiion getting silly
                                    resolve(stuff)
                                 })
                  });request.write(data);request.end();})
}

async function get(url) {
  console.log("get called")
  try{dumb_shit = await await get_wrap(url)}catch(err){throw new Error(err)}
  return dumb_shit
}
async function post(data,url,datatype){
  dumb_shit = await await post_wrap(data,url,datatype)
  return dumb_shit
}
//function isUnicodeString(text) {
  //try{
    //  btoa()
     //}
//}
var result;
http.createServer(async function(request,response){
  console.log(request.method)
  if(request.url.substring(0,6)=="/proxy"){
      //no fancypants encoding, just straight up pass the url
    let que = "http://"+request.url.substring(7);
    console.log(urlParseNoString.test(que))
    if(!urlParseNoString.test(que)){
      console.log("valid url")
      if(request.method=="GET"){
    try{
        result = await get(que,request.headers);

      response.writeHead(result[1],result[2]);
      response.end(result[3]);
    }catch(err){
      if(err.message=="timeout"){
        response.writeHead(504)
        response.end("the requested website took too long to respond")
      }else{
      response.writeHead(502)
      response.end("there was an error in reaching the website. error code: "+err.message)
      }
    }
      }else if(request.method=="POST"){
          //receive the post request
        let data = "";
        request.on("data",function(chunk){data=data+chunk})
        request.on("end",async function(){
          let result = await post(data,que,request.headers["Content-type"])
          response.writeHead(result[1],result[2])
          response.end(result[3])
        })
        request.on("error",function(error){//if theres an error, its the clients fault. handle it by logging it to prevent it from crashing server
          console.log("client did an oopsie"+error.message)})
      }else{
        response.writeHead(405)
        response.end("the HTTP method you requested is not allowed!")
      } 
    //the regex below replaces all the urls in the js/html pointing to a resource and proxies them
    result = result.matchAll(urlParse,function(match){
      if(match.matchAll(isolateProtocol)[0]=="http://"){
        
      }else if(match.matchAll(isolateProtocol)[0]=="https://"){
        
      }else{
        
      }
    }).join('')
    }else{
      response.writeHead(400)
      response.end(que+" is not a valid url")

    } 
  }else{
    response.writeHead(404,{"Content-Type":"text/html"});
    response.end("requested resource not found");

  }
  //response.write("Hello")
  //response.end()
}).listen(80);