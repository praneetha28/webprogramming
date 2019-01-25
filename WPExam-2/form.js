var comments = [];
var secretkey = "Hello";
var p = {};
function validateForm(form) {

		  var name = document.getElementById("name").value;
		  var comnt = document.getElementById("comment").value;
		  var k = document.getElementById("pwd").value;
		  if (name == "") {
		    alert("Name must be filled out");

		  } else if (comnt == "") {
		  	alert("Comment must be filled");

		  } else if(k!= secretkey) {
		  	alert("Key must be correct");
		  } else {
		  	// console.log(name);
		  	// console.log(comnt);
		  		p[name] = name;
		  		p[comment] = comnt;
		  		comments.push(p);
		  		var com = "";
		  		for (i = comments.length - 1; i>=0; i--) {
		  			com += comments[i][comment] + "\n";
		  			com += comments[i][name] + "\n";
		  		}
		  		// console.log(com);
		  		document.getElementById("Comment_list").innerHTML = com;
		  		// document.getElementById("fom").reset();
		  }
}
