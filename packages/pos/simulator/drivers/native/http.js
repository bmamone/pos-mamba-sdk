import Signal from '../../signal.js';

const SIGNALS = ['requestFinished'];

export default function(Http) {
  Signal.register(Http, SIGNALS);

  let _errorData = null;
  let _data = null;

  Http.getError = () => _errorData;
  Http.getData = () => _data;

  Http.doSend = function send({ method = 'GET', url = '', data, headers }) {
    const xhttp = new window.XMLHttpRequest();

    xhttp.onprogress = function onprogress() {
      console.log('Requesting...');
    };

    xhttp.onerror = function onerror() {
      _errorData = new Error({
        status: this.status,
        msg: this.responseText,
      });
      Http.requestFinished();
    };

    xhttp.onreadystatechange = function onreadystatechange() {
      /** On success state code 4 */
      if (this.readyState === 4) {
        _data = this.responseText;
        Http.requestFinished();
      }
    };

    xhttp.open(method, url, false);

    if (headers) {
      Object.keys(headers).forEach(key => {
        xhttp.setRequestHeader(key, headers[key]);
      });
    }

    xhttp.send(data);
  };
}
