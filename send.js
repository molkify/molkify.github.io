var cd = 300;
    function sendMessage(string, username) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1345575008117723176/x6k2yej-fidHXsI72zJsw2ZRzOZSr_uQ7RsyokJeyARoeYkgJ_NgumUTiZ_o73DPtl0k");
      var user = username;
      if (user == "") { user = "user" };
      request.setRequestHeader('Content-type', 'application/json');
      var params = {
	      username: "molkify.dev/send",
	      avatar_url: "https://i.redd.it/k519vt5twxgb1.jpg",
 		 "embeds": [{
 		   "title": `From ${user}:`,
		    "description": string
		  }]
		
      }
	if (cd > 0) {
		window.alert(`cool down buddy you got like ${cd}0 miliseconds left....`);
	} else if (string != "") {
      request.send(JSON.stringify(params));
	} else {
		window.alert("Empty message!");
	};
      document.getElementById("message").value = "";
	cd = 300;
    }
    setInterval(function() {
	document.getElementById("currentlength").innerHTML = document.getElementById("message").value.length;
	cd--;
    }, 10);