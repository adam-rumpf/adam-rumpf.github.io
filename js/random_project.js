// Pool of math topics
var topic_list = ["a very powerful computer", "agent-based models", "algebra", "ant colony optimization", "boolean algebra", "calculus", "cellular automata", "chaos theory", "combinatorial design", "combinatorial game theory", "compartmental models", "complex systems", "convex optimization", "deep learning", "discrete dynamical systems", "exponential random graph models", "fractals", "fuzzy programming", "game theory", "graph theory", "group theory", "information theory", "knot theory", "linear programming", "literature review", "machine learning", "Markov chains", "mechanism design", "metaheuristics", "multicommodity network flows", "multilevel programming", "multiobjective programming", "network flows", "neural networks", "ODEs", "optimal control", "ordinal numbers", "PDEs", "percolation theory", "pursuit-evasion problems", "queueing theory", "regression", "robust programming", "scheduling problems", "semidefinite programming", "Sperner's lemma", "stochastic programming", "surreal numbers", "the hairy ball theorem", "the ham sandwich theorem" "the pigeonhole principle", "topology", "zero-knowledge proofs"];

// Pool of math applications
var app_list = ["bioethics", "bioterrorism", "chess", "civil infrastructure engineering", "climate change", "crowd dynamics", "crowd panics", "cryptography", "disaster prevention and relief", "disease cofactors", "disease treatment and prevention strategies", "drone delivery routes", "electoral systems", "emergent social behavior", "envy-free division", "epidemiology", "evacuation planning", "evolutionary biology", "factory layouts", "fluid dynamics", "forest fires", "fungal networks", "geology", "insects", "military strategy", "mineralogy", "modified knapsack problems", "monstrous moonshine", "optimal board game strategies", "population ecology", "primary and secondary succession", "retail layout", "road network engineering", "the Collatz conjecture", "the Homicidal Chauffeur Problem", "the Navier-Stokes equations", "the number 42", "the prevailing issues of the day", "the Riemann hypothesis", "the stock market", "the twin prime conjecture", "the weather", "transgenic mosquitos", "urban planning", "what it means to be human", "whether P = NP", "zombie apocalypse scenarios"];

/**
Randomly generates a project by selecting a random topic and a random application, then outputs the string to a given container ID.
*/
function random_project(handle)
{
	var topic = topic_list[Math.floor(Math.random()*topic_list.length)];
	var app = app_list[Math.floor(Math.random()*app_list.length)];
	document.getElementById(handle).innerHTML = "Try using " + topic + " to study " + app + ".";
}
