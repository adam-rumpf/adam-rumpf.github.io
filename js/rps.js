function rps_choice()
{
	var things = ['Rock', 'Paper', 'Scissor'];
	var thing = things[Math.floor(Math.random()*things.length)];
	document.getElementById("p1").innerHTML = "The computer chose: " + thing;
}

rps_choice();
