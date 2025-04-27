var cd = 0x12c;
function sendMessage(_0x4cae5b, _0x23ef47) {
  var _0xba2fa6 = new XMLHttpRequest();
  // encrypted, stop sending weird stuff on it pls :(, also thanks 87471 for this code
  _0xba2fa6.open("POST", "https://l.webhook.party/hook/ohWZkbwIKcGP3r85eFQf%2FRTuOemcmtvuJI%2FOXSsSVLrrFbLNZi4a1QlFEls3zjfe%2BRc0I5Tdz4ts6lISuByZe7FX4QoVyDdOkUUB7MuQRlfVMwOOGwm28NwOswtibIsQGhwSfbZDFK5ZBixarvwNd831Uja6FMVMbMM0ozLRpEYJ4g5VSYnjz8n99iN2UteMZs5kw4xSdzu4DgfaS9EvVaHhh2Pt32MsjatMavAX7ljs%2Fgl7wUlBb12p8bx4O4VZ5rDBthbvGVJaIsYmPBqSZpPKeakHPIoGGnxRfJzW8jQiy5ixgzJszzwhsFCcZNKLDD2aIoCeGpSTIWFZoPQBs6huyHBAcQXtIB4WlMT2kpFWvqYJsnuNfc3efuoyhwhn7B3g2CtRI8E%3D/reF%2FGFWPZ8eHmPpg");
  var _0x2a43b3 = _0x23ef47;
  if (_0x2a43b3 == '') {
    _0x2a43b3 = "errmmmm I FORGOR...";
  }
  ;
  _0xba2fa6.setRequestHeader("Content-type", "application/json");
  var _0x30684d = {
    'username': "a new message",
    'avatar_url': "https://molkify.dev/img/molkify.png",
    'embeds': [{
      'title': "From " + _0x2a43b3 + ':',
      'description': _0x4cae5b
    }]
  };
  if (cd > 0x0) {
    window.alert("cool down bro you got like " + cd + "0 miliseconds left");
  } else if (_0x4cae5b != '') {
    _0xba2fa6.send(JSON.stringify(_0x30684d));
    cd = 0x12c;
  } else {
    window.alert("Empty message!");
  }
  ;
  document.getElementById("message").value = '';
  document.getElementById("username").value = '';
}
setInterval(function () {
  var _0x4e5709 = new Blob([document.getElementById('message').value]).size;
  document.getElementById("currentlength").innerHTML = _0x4e5709;
  if (_0x4e5709 > 0x5dc) {
    document.getElementById("currentlength").style.color = '#FF0000';
    while (_0x4e5709 >= 0x5dc) {
      document.getElementById('message').value = document.getElementById('message').value.slice(0x0, -0x2);
      _0x4e5709 = new Blob([document.getElementById("message").value]).size;
    }
  } else {
    document.getElementById("currentlength").style.color = "#00FF00";
  }
  ;
  cd--;
  if (cd > 0x0) {
    document.getElementById("cooldown").innerHTML = cd + "0 miliseconds left until you can post another message!";
  } else {
    document.getElementById("cooldown").innerHTML = '';
  }
  ;
}, 0xa);
