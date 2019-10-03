<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title>Adam Rumpf: Research</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Adam Rumpf">
	<meta name="description" content="Adam Rumpf: Research">
	<link rel="stylesheet" href="styles.css">
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<base href="https://adam-rumpf.github.io/">
	<script src="/js/random_project.js"></script> <!-- Random project generation script. -->
</head>

<body>
	<header>
		Adam Rumpf: Math Person
	</header>
	
	<div class="navbar">
		<!--<a href="https://adam-rumpf.github.io/">Home</a>--><a href="beta.html">Home</a>
		<a href="cv.html">CV</a>
		<a href="teaching.html">Teaching</a>
		<a href="research.html" id="current">Research</a>
		<div class="dropdown">
			<button class="dropbtn">
				Programs...
			</button>
			<div class="dropdown-content">
				<p><a href="programs/mathematica.html">Mathematica Class Demonstrations</a></p>
				<p><a href="programs/cellular_automata.html">Cellular Automata</a></p>
				<p><a href="programs/logic_circuits.html">Logic Circuits</a></p>
			</div>
		</div>
		<a href="papercraft.html">Papercraft</a>
		<a href="links.html">Links</a>
	</div>
	
	<br/>
	
	<!--<p><a href="documents/adam_rumpf_research.pdf" download="adam_rumpf_research.pdf">Research Statement (PDF)</a></p>-->
	
	<p>This page contains links to my research papers and related material, including computer code, most of which is available through my <a href="https://github.com/adam-rumpf" target="_blank">GitHub account</a>. I have also included some guides and other resources written for my own personal reference while working on projects. You may find them useful as a brief introduction to a topic.</p>
	
	<p>Coming up with interesting ideas for research projects can be difficult, so here is a handy idea button: <button type="button" style="background-color: #d0d0d0" onclick="random_project('research_idea')">Idea</button></p>
	
	<!-- Empty space for random project idea (automatically filled on page load). -->
	<p class="tab" id="research_idea"> </p>
	
	<h1>Contents</h1>
	<ul>
		<li><a href="research.html#interests">Research Interests</a></li>
		<li><a href="research.html#papers">Papers</a></li>
		<li><a href="research.html#resources">Resources</a></li>
	</ul>
	
	<!-- Interests -->
	
	<h1 id="interests">Research Interests</h1>
	
	<ul>
		<li><b>Operations Research:</b> civil infrastructure planning, public transit planning, disaster preplanning and recovery</li>
		<li><b>Optimization:</b> linear programming, semidefinite programming, multilevel programming, stochastic programming</li>
		<li><b>Graph Theory:</b> network flows, interdependent networks, graph decomposition, spectral graph theory, network optimization</li>
		<li><b>Mathematical Biology:</b> dynamical systems models, population ecology, epidemiology, complex systems
	</ul>
	
	<!-- Papers -->
	
	<h1 id="papers">Papers</h1>
	
	<div class="spacer">
		<div class="dark">
			<p>H. Kaul and A. Rumpf. Network interdiction game with binary and linear interdependencies. Work in progress, 2019.</p>
			
			<!--<p>Links: PDF, Computational Trial Generation, Solution Algorithms</p>-->
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>H. Kaul and A. Rumpf. Public transit optimization with social access objectives: A case study of primary health care access for underserved communities of Chicago. Work in progress, 2019.</p>
			
			<p>Links: <!--PDF,--> <a href="https://github.com/adam-rumpf/social-transit-preprocessor" target="_blank">Data Preprocessor</a>, <a href="https://github.com/adam-rumpf/social-transit-solver-single" target="_blank">Initialization Code</a><!--, Solution Algorithm Code--></p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>H. Kaul and A. Rumpf. Linear input dependence model for interdependent civil infrastructure systems with network simplex based solution algorithm. Preparing for publication, 2019.</p>
			
			<p>Links: <!--PDF,--> <a href="https://github.com/adam-rumpf/mcnfli-trials" target="_blank">Computational Trial Generation</a></p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>J. Ames, A. Feiler, G. Mendoza, A. Rumpf, and S. Wirkus. Determination of Tucson, Arizona as an Ecological Trap for Cooper's Hawks (Accipiter cooperii). Unpublished manuscript, 2011, <a href="https://mtbi.asu.edu/2011-2" target="_blank">https://mtbi.asu.edu/2011-2</a>.</p>
			
			<p>Links: <a href="https://mtbi.asu.edu/sites/default/files/determination_of_tucson_arizona_as_an_ecological_trap_for_coopers_hawks_accipiter_cooperii_.pdf" download="coopers_hawks_epidemiology.pdf" target="_blank">PDF</a>, <a href="https://github.com/adam-rumpf/mtbi-hawk-epidemiology" target="_blank">MATLAB Code</a></p>
		</div>
	</div>
	
	<!-- Resources -->
	
	<h1 id="resources">Resources</h1>
	
	<p>The unpublished reports below are mostly taken from my personal notes, but hopefully someone may find them useful. Most of them are either basic overviews or specific technique explanations for concepts from operations research.</p>
	
	<div class="spacer">
		<div class="dark">
			<p>LaTeX Math Preamble (2019)</p>
			
			<p>Links: <a href="https://github.com/adam-rumpf/latex-math-preamble" target="_blank">TeX Files</a></p>
			
			<p>This is a TeX file that I typically include in the preamble to all of my mathematical documents. It imports most of the packages that I regularly use and defines a large number of custom macros for mathematical notation that is not part of most standard LaTeX packages. The entire file is likely to be overkill for most simple applications, but feel free to just copy and paste individual portions that you find useful.</p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>Introduction to Simulated Annealing and Tabu Search (2019)</p>
			
			<p>Links: <a href="documents/sa_ts_intro.pdf" download="sa_ts_intro.pdf" target="_blank">PDF</a></p>
			
			<p>This is a brief introduction to the <a href="https://en.wikipedia.org/wiki/Simulated_annealing" target="_blank">simulated annealing</a> and <a href="https://en.wikipedia.org/wiki/Tabu_search" target="_blank">tabu search</a> metaheuristics. I wrote these notes in preparation for my second major research project, which involved solving a difficult combinatorial optimization problem with a hybrid simulated annealing/tabu search algorithm.</p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>Introduction to the Karush-Kuhn-Tucker (KKT) Conditions (2018)</p>
			
			<p>Links: <a href="documents/kkt_intro.pdf" download="kkt_intro.pdf" target="_blank">PDF</a>, <a href="programs/mathematica.html#kkt-conditions">Mathematica Notebook</a>, <a href="http://demonstrations.wolfram.com/KarushKuhnTuckerKKTConditionsForNonlinearProgrammingWithIneq/" target="_blank">Wolfram Demonstration</a></p>
			
			<p>I wrote these notes for myself while studying the <a href="https://en.wikipedia.org/wiki/Bilevel_optimization" target="_blank">bilevel programs</a> that came out of several of my Ph.D. research projects, since the <a href="https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions" target="_blank">KKT conditions</a> can be used to rewrite the lower-level program as a set of algebraic constraints in the upper-level program. They are an important concept in nonlinear optimization, and hopefully these notes will provide a brief introduction. The linked Mathematica files were written in conjunction with these notes, and provide some useful pictures to go along with them.</p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>Logical Constraint IP Formulation Techniques (2017)</p>
			
			<p>Links: <a href="documents/logical_ip_formulation.pdf" download="logical_ip_formulation.pdf" target="_blank">PDF</a></p>
			
			<p>These are some techniques that I've written up for expressing logical constraints (of forms like "if constraint 1 is true, then constraint 2 must be true") as integer program constraints. I have used these types of techniques extensively in the process of using mixed integer-linear program models of decision problems.</p>
		</div>
	</div>
	
	<div class="spacer">
		<div class="dark">
			<p>Getting Started with CPLEX in C++ (2016)</p>
			
			<p>Links: <a href="documents/cplex_in_cpp.pdf" download="cplex_in_cpp.pdf" target="_blank">PDF</a></p>
			
			<p>I wrote this guide for myself while first getting <a href="https://www.ibm.com/analytics/cplex-optimizer" target="_blank">CPLEX</a> set up on my computer for use in my linear optimization projects. It is a complicated enough process that I had to spend many hours searching through forums and blogs to figure it out. Hopefully this can save someone some time.</p>
		</div>
	</div>
	
	<!-- Run script once on page load to generate an initial idea. -->
	<script>random_project("research_idea")</script>

	<footer>
		<hr>
		© 2019 <a href="mailto:arumpf@hawk.iit.edu">Adam Rumpf</a>
	</footer>
</body>
</html>