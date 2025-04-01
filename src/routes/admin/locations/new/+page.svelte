<h1 class="text-center text-3xl font-bold text-gray-900 my-6">Create New</h1>

<form method="POST" action="?/createLocation" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
	<div class="flex flex-col">
		<label for="title" class="text-gray-700 font-semibold">Title</label>
		<input type="text" name="title" placeholder="Title" 
			class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
	</div>

	<div class="flex flex-col">
		<label for="description" class="text-gray-700 font-semibold">Description</label>
		<textarea name="description" placeholder="Description" 
			class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
	</div>

	<button type="submit" 
		class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md transition hover:bg-blue-700">
		Create Event
	</button>
</form>
