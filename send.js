var cd = 300;
    function sendMessage(string, username) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1345575008117723176/x6k2yej-fidHXsI72zJsw2ZRzOZSr_uQ7RsyokJeyARoeYkgJ_NgumUTiZ_o73DPtl0k");
      var user = username;
      if (user == "") { user = "this was not made by me btw" };
      request.setRequestHeader('Content-type', 'application/json');
      var params = {
	      username: "molkify.dev/send",
	      avatar_url: "https://molkify.dev/img/molkify.webp",
 		 "embeds": [{
 		   "title": `From ${user}:`,
		    "description": string
		  }]
		
      }
	if (cd > 0) {
		window.alert(`cool down buddy you got like ${cd}0 miliseconds left....`);
	} else if (string != "") {
      request.send(JSON.stringify(params));
	cd = 300;
	} else {
		window.alert("Empty message!");
	};
      document.getElementById("message").value = "";
      document.getElementById("username").value = "";
    }
    setInterval(function() {
    var size = new Blob([document.getElementById("message").value]).size;
	document.getElementById("currentlength").innerHTML = size;
    if (size > 1500) {
    document.getElementById("currentlength").style.color = "#FF0000";
    while (size >= 1500) {
    document.getElementById("message").value = document.getElementById("message").value.slice(0, -2);
    size = new Blob([document.getElementById("message").value]).size;
}
} else {
    document.getElementById("currentlength").style.color = "#00FF00";
};

	
	cd--;
	if (cd > 0) {
		document.getElementById("cooldown").innerHTML = `${cd}0 miliseconds left until you can post another message!`;
	} else {
		document.getElementById("cooldown").innerHTML = "";
	};
    }, 10);