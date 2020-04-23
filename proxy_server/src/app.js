
var express = require("express");
var Request = require("request");
const app = express();
const axios = require('axios')
app.set('port', process.env.PORT || 3002);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json());

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})

const serverUrl = "https://sandbox.2600hz.com:8443/v2/";
const credentials =
  "NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=";
const accountId = "4642e64040cdb8b89c310a21a07c7f62";
var vmBoxId=""
const listVoicemail = `accounts/${accountId}/vmboxes/`;
const messages = `/messages/`;
const headers = {
  Authorization: `Basic ${credentials}`,
};

app.get("/test/:id", async (req,res) => {
  vmBoxId=req.params.id;
	const voicemails = await axios.get(`${serverUrl}${listVoicemail}${vmBoxId}${messages}`,{headers})
	res.send(voicemails["data"].data);
});

app.get("/message/:message_id/:status", async (req,res) => {
  const url = `${serverUrl}${listVoicemail}${vmBoxId}${messages}${req.params.message_id}`
  const promise = await axios.post(url,{data:{folder:req.params.status}},{headers})
  res.send(promise.data);
});

app.get("/selectVoiceMail", async (req,res) => {
  const url = `${serverUrl}${listVoicemail}`
  const promise = await axios.get(url,{headers});
  res.send(promise.data)
})



module.exports = app;