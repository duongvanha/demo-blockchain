const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.join(__dirname, 'contracts', 'Inbox.sol');

const contentInbox = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(contentInbox, 1).contracts[':Inbox'];
