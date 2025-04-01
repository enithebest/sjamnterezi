<script>
	let { children } = $props();
</script>

<nav class="flex justify-center gap-5 bg-gray-800 p-4 rounded-md">
	<a href="/admin/events" class="text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gray-600">
		Events
	</a>
	<a href="/admin/locations" class="text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gray-600">
		Locations
	</a>
	<a href="/admin/category" class="text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gray-600">
		Category
	</a>
</nav>

{@render children()}
