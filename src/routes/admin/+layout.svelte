<script>
	let { children } = $props();
</script>

<style>
	nav {
		display: flex;
		justify-content: center; /* Center the navigation links */
		gap: 20px; /* Add space between links */
		background-color: #333; /* Dark background */
		padding: 10px 20px; /* Add some padding */
		border-radius: 5px; /* Optional rounded corners */
	}

	nav a {
		text-decoration: none; /* Remove underline */
		color: #fff; /* White text */
		font-weight: bold; /* Bold text */
		padding: 8px 12px; /* Padding inside the links */
		border-radius: 4px; /* Rounded link edges */
		transition: background-color 0.3s ease; /* Smooth hover effect */
	}

	nav a:hover {
		background-color: #555; /* Slightly lighter background on hover */
	}


</style>

<nav>
	<a href="/admin/events">Events</a>
	<a href="/admin/locations">Locations</a>
	<a href="/admin/category">Category</a>
</nav>
{@render children()}
