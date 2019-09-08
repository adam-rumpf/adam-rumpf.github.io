function rps_choice(handle)
{
	var things = ['Rock', 'Paper', 'Scissor'];
	var thing = things[Math.floor(Math.random()*things.length)];
	document.getElementById(handle).innerHTML = "The computer chose: " + thing;
}
