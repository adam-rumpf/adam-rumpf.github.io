// Define dictionary of tag groups
var group = {};
group["all"] = ["bezier-curves", "bifurcation-analysis", "single-winner-voting-systems", "cobwebbing", "complex-newtons-method", "complex-operations", "continued-fraction-square-packing", "continuous-discrete-logistic-growth", "crowd-escape-panic-model", "dijkstras-algorithm-and-astar-search", "domino-and-tromino-tiling", "dragon-curve", "duvergers-law", "fractal-shoulder-angels-and-devils", "graph-untangler", "kkt-conditions", "linear-transformations", "monte-carlo-method", "pascals-triangle-fractals", "pythagoras-tree", "recamans-sequence", "remainder-graphs", "spirograph", "taylor-and-fourier-series-approximations", "triangle-centers", "vector-kinematics", "winner-take-all-distortion"];
group["analysis"] = ["complex-newtons-method", "taylor-and-fourier-series-approximations"];
group["boring"] = [];
group["calculus"] = ["bifurcation-analysis", "complex-newtons-method", "continuous-discrete-logistic-growth", "crowd-escape-panic-model", "kkt-conditions", "monte-carlo-method", "spirograph", "taylor-and-fourier-series-approximations", "vector-kinematics"];
group["computational"] = ["bezier-curves", "complex-newtons-method", "monte-carlo-method", "taylor-and-fourier-series-approximations"];
group["diffeq"] = ["bifurcation-analysis", "continuous-discrete-logistic-growth", "crowd-escape-panic-model", "vector-kinematics"];
group["discrete"] = ["cobwebbing", "continued-fraction-square-packing", "continuous-discrete-logistic-growth", "dijkstras-algorithm-and-astar-search", "domino-and-tromino-tiling", "pascals-triangle-fractals", "recamans-sequence", "remainder-graphs"];
group["dynamical"] = ["bifurcation-analysis", "cobwebbing", "continuous-discrete-logistic-growth", "crowd-escape-panic-model", "vector-kinematics"];
group["geometry"] = ["continued-fraction-square-packing", "linear-transformations", "triangle-centers"];
group["graph"] = ["dijkstras-algorithm-and-astar-search", "graph-untangler", "remainder-graphs"];
group["linalg"] = ["complex-operations", "linear-transformations", "vector-kinematics"];
group["modeling"] = ["single-winner-voting-systems", "cobwebbing", "continuous-discrete-logistic-growth", "crowd-escape-panic-model", "duvergers-law", "winner-take-all-distortion"];
group["numthry"] = ["continued-fraction-square-packing", "pascals-triangle-fractals", "recamans-sequence", "remainder-graphs"];
group["optimization"] = ["complex-newtons-method", "dijkstras-algorithm-and-astar-search", "kkt-conditions"];
group["voting"] = ["single-winner-voting-systems", "duvergers-law", "winner-take-all-distortion"];
group["chaos"] = ["cobwebbing", "complex-newtons-method", "continuous-discrete-logistic-growth"];
group["complex"] = ["bifurcation-analysis", "complex-newtons-method", "complex-operations"];
group["fractal"] = ["complex-newtons-method", "continuous-discrete-logistic-growth", "dragon-curve", "fractal-shoulder-angels-and-devils", "pascals-triangle-fractals", "pythagoras-tree"];
group["fun"] = ["bezier-curves", "domino-and-tromino-tiling", "dragon-curve", "fractal-shoulder-angels-and-devils", "pythagoras-tree", "spirograph"];
group["pretty"] = ["bezier-curves", "cobwebbing", "complex-newtons-method", "continuous-discrete-logistic-growth", "domino-and-tromino-tiling", "dragon-curve", "pythagoras-tree", "recamans-sequence", "spirograph"];

// Show only elements in specified tag list
function filter()
{
	// Get selected tag
	var t = document.getElementById("tags").value;
	
	// Hide everything (unless displaying all)
	if (t !== "all")
	{
		for (var i = 0; i < group["all"].length; i++)
			document.getElementById(group["all"][i]).style.display = "none";
	}
	
	// Show the elements from the selected list
	for (var i = 0; i < group[t].length; i++)
		document.getElementById(group[t][i]).style.display = "block";
	
	// Edit tally text
	document.getElementById("tally").innerHTML = "Displaying " + group[t].length + " demonstrations.";
}
