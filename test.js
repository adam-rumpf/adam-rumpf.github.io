// Set of spacer object IDs to be shown/hidden at the same time
list = ["cobwebbing", "complex-operations"];

// Show/hide all elements in the above list
function toggle()
{
	for (var i = 0; i < list.length; i++)
	{
		x = document.getElementById(list[i]);
		if (x.style.display === "none")
			x.style.display = "block";
		else
			x.style.display = "none";
	}
}
