

// if (1===1) {alert("okay");}

$(document).ready(function(){

	var ournumber = Math.floor(Math.random()*101+19) //select random number to be shown from 19 to 120

	$('#randomnumber').text(ournumber);

	var crystal1 =Math.floor(Math.random()*11+1)
	var crystal2 =Math.floor(Math.random()*11+1)
	var crystal3 =Math.floor(Math.random()*11+1)
	var crystal4 =Math.floor(Math.random()*11+1)

	var usertotal =0;
	var wins =0;
	var losses = 0;

	$('numberwins').text(wins);
	$('numberlosses').text(losses);

	//reset

	function reset(){

		random =Math.floor(Math.random()*101+19);

		$('#randomnumber').text(ournumber);

		crystal1 =Math.floor(Math.random()*11+1);
		crystal2 =Math.floor(Math.random()*11+1);
		crystal3 =Math.floor(Math.random()*11+1);
		crystal4 =Math.floor(Math.random()*11+1);
	
		usertotal=0;

		$("#totalscore").text(usertotal);
	}

	function winner(){
		alert("Congrats!");
		wins++;
		$("#numberwins").text(wins);
		reset();
		}

	function loser(){
		alert("Sorry :(");
		losses++;
		$("#numberlosses").text(losses);
		reset()
		}

	//.onclick

	$("#one").on("click",function(){
			usertotal=usertotal +crystal1;
			$("#totalscore").text(usertotal);
				if(usertotal==ournumber){winner();}

				else if(usertotal>ournumber){loser();
			}
	})

	$("#two").on("click",function(){
			usertotal=usertotal +crystal2;
			$("#totalscore").text(usertotal);
				if(usertotal==ournumber){winner();}

				else if(usertotal>ournumber){loser();
			}
	})
	

	$("#three").on("click",function(){
			usertotal=usertotal +crystal3;
			$("#totalscore").text(usertotal);
				if(usertotal==ournumber){winner();}

				else if(usertotal>ournumber){loser();
			}
	})

	$("#four").on("click",function(){
			usertotal=usertotal +crystal4;
			$("#totalscore").text(usertotal);
				if(usertotal==ournumber){winner();}

				else if(usertotal>ournumber){loser();
			}
	});



});