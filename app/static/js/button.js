// requirements
var requirement2classes = {};
requirement2classes['AC'] = JSON.parse(readTextFile("../requirement2classes/ac.txt"));
requirement2classes['AH'] = JSON.parse(readTextFile("../requirement2classes/ah.txt"));
requirement2classes['AI'] = JSON.parse(readTextFile("../requirement2classes/ai.txt"));
requirement2classes['AL'] = JSON.parse(readTextFile("../requirement2classes/al.txt"));
requirement2classes['BS'] = JSON.parse(readTextFile("../requirement2classes/bs.txt"));
requirement2classes['ELW'] = JSON.parse(readTextFile("../requirement2classes/elw.txt"));
requirement2classes['HS'] = JSON.parse(readTextFile("../requirement2classes/hs.txt"));
requirement2classes['IS'] = JSON.parse(readTextFile("../requirement2classes/is.txt"));
requirement2classes['PS'] = JSON.parse(readTextFile("../requirement2classes/ps.txt"));
requirement2classes['PV'] = JSON.parse(readTextFile("../requirement2classes/pv.txt"));
requirement2classes['R1A'] = JSON.parse(readTextFile("../requirement2classes/r1a.txt"));
requirement2classes['R1B'] = JSON.parse(readTextFile("../requirement2classes/r1b.txt"));
requirement2classes['SBS'] = JSON.parse(readTextFile("../requirement2classes/sbs.txt"));

var html = readTextFile("../html_block.txt");

function readTextFile(file) {
	var rawFile1 = new XMLHttpRequest();
	rawFile1.open("GET", file, false);
	rawFile1.onreadystatechange = function() {
		if(rawFile1.readyState === 4) {
			if(rawFile1.status === 200 || rawFile1.status == 0) {
				return rawFile1.responseText;
			}
		}
	}
	rawFile1.send(null);
	return rawFile1.responseText;
}


function loadClasses() {
	document.getElementById('courses').innerHTML = html;
}

// animates tile once requirement is toggles
function anim(req){
	var x;
	if (!document.getElementById(req).on) {
		document.getElementById(req).on=true;
		x=1;
	} else {
		document.getElementById(req).on=false;
		x=-1;
	}

	req = req.toUpperCase();
	//console.log(requirement2classes[req][req]);
	for (var clas of requirement2classes[req][req]) {
		// animate each element
		//console.log(clas);
		if(!document.getElementById(clas).count) {
			document.getElementById(clas).count=0;
		}
		document.getElementById(clas).count+=x;
		if(document.getElementById(clas).count>0) {
			$(document.getElementById(clas)).animate({opacity:1}); // <<<--------------LOL FIX
		} else {
			$(document.getElementById(clas)).animate({opacity:0});
		}
	}
}

function popup(id) {
	console.log("popping "+id);
	document.getElementById("h" + id).style.display = "block";
}

open = false;
function overlay() {
	if (open) {
    	document.getElementById("require").style.width = 0;
    	open = false;
    } else {
    	document.getElementById("require").style.width = "350px";
    	open = true;
    }
}