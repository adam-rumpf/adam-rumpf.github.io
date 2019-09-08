/*
The following lists correspond to all of the available categories from the Mathematica demonstration page.
Each list contains the IDs of the projects associated with that category.
'all_list' should always contain everything, and is the list iterated over for the filter function's main loop.
*/
var all_list = ["bezier-curves", "complex-newtons-method", "complex-operations", "crowd-escape-panic-model", "dijkstras-algorithm-and-astar-search", "domino-and-tromino-tiling", "dragon-curve", "fractal-shoulder-angels-and-devils", "graph-untangler", "monte-carlo-method", "pascals-triangle-fractals", "pythagoras-tree", "recamans-sequence", "remainder-graphs", "spirograph", "taylor-and-fourier-series-approximations", "vector-kinematics"];
var analysis = ["complex-newtons-method", "taylor-and-fourier-series-approximations"];
var calculus = ["complex-newtons-method", "crowd-escape-panic-model", "monte-carlo-method", "spirograph", "taylor-and-fourier-series-approximations", "vector-kinematics"];
var complex = ["complex-newtons-method", "complex-operations"];
var computational = ["bezier-curves", "complex-newtons-method", "monte-carlo-method", "taylor-and-fourier-series-approximations"];
var diffeq = ["crowd-escape-panic-model", "vector-kinematics"];
var discrete = ["dijkstras-algorithm-and-astar-search", "domino-and-tromino-tiling", "pascals-triangle-fractals", "recamans-sequence", "remainder-graphs"];
var dynamical = ["crowd-escape-panic-model", "vector-kinematics"];
var fractal = ["complex-newtons-method", "dragon-curve", "fractal-shoulder-angels-and-devils", "pascals-triangle-fractals", "pythagoras-tree"];
var fun = ["bezier-curves", "domino-and-tromino-tiling", "dragon-curve", "fractal-shoulder-angels-and-devils", "pythagoras-tree", "spirograph"];
var graph = ["dijkstras-algorithm-and-astar-search", "graph-untangler", "remainder-graphs"];
var model = ["crowd-escape-panic-model"];
var number = ["pascals-triangle-fractals", "recamans-sequence", "remainder-graphs"];
var pretty = ["bezier-curves", "complex-newtons-method", "domino-and-tromino-tiling", "dragon-curve", "pythagoras-tree", "recamans-sequence", "spirograph"];
var voting = [];

/**
Called whenever the dropdown menu is clicked.
Gets the dropdown menu selection and finds the corresponding list from the above choices.
Processes each project ID to find the ones present in the chosen list.
Those present in the list are displayed, while those not present are hidden.
The length of the chosen list is used to display a count of the number of displayed demonstrations.
*/
function filter()
{
	var dropdown = document.getElementById("category");
	var choice = dropdown.options[dropdown.selectedIndex].value;
	var total = all_list.length;
	var tally;
	
	// Loop over all demonstrations
	for (var i = 0; i < all_list.length; i++)
	{
		var item = document.getElementById(all_list[i]); // current demonstration
		
		/*
		Switch block depending on the dropdown menu selection.
		All cases set tally to the number of elements corresponding to the selection,
		and then display the item if present in the selected list and hide it if not.
		*/
		if (choice === "analysis")
		{
			tally = analysis.length;
			if (analysis.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "calculus")
		{
			tally = calculus.length;
			if (calculus.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "complex")
		{
			tally = complex.length;
			if (complex.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "computational")
		{
			tally = computational.length;
			if (computational.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "diffeq")
		{
			tally = diffeq.length;
			if (diffeq.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "discrete")
		{
			tally = discrete.length;
			if (discrete.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "dynamical")
		{
			tally = dynamical.length;
			if (dynamical.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "fractal")
		{
			tally = fractal.length;
			if (fractal.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "fun")
		{
			tally = fun.length;
			if (fun.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "graph")
		{
			tally = graph.length;
			if (graph.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "model")
		{
			tally = model.length;
			if (model.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "number")
		{
			tally = number.length;
			if (number.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "pretty")
		{
			tally = pretty.length;
			if (pretty.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else if (choice === "voting")
		{
			tally = voting.length;
			if (voting.includes(all_list[i]))
				item.style.display = "block";
			else
				item.style.display = "none";
		}
		else
		{
			tally = total;
			item.style.display = "block";
		}
	}
	
	// Set tally display
	document.getElementById("tally").innerHTML = "Showing " + tally.toString() + " of " + total.toString() + " demonstrations.";
}
