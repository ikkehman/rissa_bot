const wa = require('@open-wa/wa-automate');
const { color } = require('./util')
const options = require('./util/options')

wa.create().then(client => start(client));
function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
    }
  });
}

create(options(true, start))
    .then((client) => start(client))
    .catch((err) => new Error(err))
