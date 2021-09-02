const wa = require('@open-wa/wa-automate');
const { color } = require('./util')
const options = require('./util/options')
const  request = require('request')

wa.create().then(client => start(client));
function start(client) {
  client.onMessage(async message => {

    const { type, id, from, t, sender, isGroupMsg, chat, caption, mentionedJidList } = message
        let { body } = message
        
if (!isGroupMsg) {
const gg = message.body
var options1 = { method: 'POST',
  url: 'http://147.139.175.196:6969/directline/conversations'};

request(options1, function (error, response, body) {
    const data = JSON.parse(body);
  if (error) throw new Error(error);
  console.log(data.conversationId);

  var options2 = { method: 'POST',
  url: 'http://147.139.175.196:6969/directline/conversations/'+data.conversationId+'/activities',
  headers: 
   {'Content-Type': 'application/json' },
  body: { text: gg },
  json: true };

request(options2, function (error, response, body) {
  if (error) throw new Error(error);
  //const data = JSON.parse(body);
  console.log(gg);
});

var options3 = { method: 'GET',
  url: 'http://147.139.175.196:6969/directline/conversations/'+data.conversationId+'/activities'};
request(options3, function (error, response, body) {
  if (error) throw new Error(error);
  const balas = JSON.parse(body);
  console.log(balas.activities[1].text);
  client.sendText(message.from, balas.activities[1].text)
});

});
}
  });
};

