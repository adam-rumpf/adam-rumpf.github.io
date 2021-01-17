// Define lists of methods and applications
var method = ["linear programming", "stochastic programming", "multiobjective programming", "multilevel programming", "optimal control", "ODEs", "compartmental models", "percolation theory", "queueing theory", "network flows", "multicommodity network flows", "cellular automata", "discrete dynamical systems", "agent-based modeling", "complex systems", "combinatorial game theory", "game theory", "a literature review", "information theory", "chaos theory", "graph theory", "knot theory", "a neural network", "convex optimization", "exponential random graph models", "zero-knowledge proofs", "PDEs", "machine learning", "regression", "robust programming", "fuzzy programming", "Markov chains", "fractals", "group theory", "pursuit-evasion games", "a modified knapsack problem", "scheduling problems", "Sperner's Lemma", "the Hairy Ball Theorem", "the Ham Sandwich Theorem", "surreal numbers", "ordinal numbers", "semidefinite programming", "topology", "calculus", "algebra", "a very powerful computer"];
var application = ["epidemiology", "civil infrastructure engineering", "road network engineering", "evacuation planning", "crowd dynamics", "population ecology", "optimal board game strategies", "primary and secondary succession", "disease treatment and prevention strategies", "geology", "cryptography", "electoral systems", "the NP-completeness of puzzles and games", "disease cofactors", "envy-free cake division", "emergent social behavior", "evolutionary biology", "zombie apocalypse scenarios", "bioterrorism", "transgenic mosquitos", "forest fires", "drone delivery routes", "fungal networks", "disaster prevention and relief", "factory layout", "retail layout", "crowd panics", "the Homicidal Chauffeur Problem", "climate change", "urban planning", "the Riemann Hypothesis", "monstrous moonshine", "the Navier-Stokes equations", "the number 42", "the Twin Prime Conjecture", "the Collatz Conjecture", "insects", "bioethics"];

// Generate and display a random combination
function randomize()
{
	// Choose random method and application indices
	var i = Math.floor(Math.random() * method.length);
	var j = Math.floor(Math.random() * application.length);
	
	// Edit output box text
	document.getElementById("idea").innerHTML = "Project idea: Try using " + method[i] + " to study " + application[j] + ".";
}
