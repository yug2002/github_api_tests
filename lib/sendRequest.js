const request = require('request-promise-native');

function sendRequestWithHeader(opts) {
  let options = {
    uri: opts.uri,
    method: opts.method,
    headers: opts.headers,
    json: true,
    resolveWithFullResponse: true
  };

  return request(options).then(response => response);
}

module.exports = sendRequestWithHeader;