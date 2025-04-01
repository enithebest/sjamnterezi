<script>
    let { data } = $props();
</script>

<h1 class="text-center text-4xl font-bold text-gray-900 my-6">Create New Event</h1>

<form method="POST" action="?/createEvent" class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
    <!-- Title -->
    <div>
        <label for="title" class="block font-semibold text-gray-700">Title</label>
        <input type="text" id="title" name="title" placeholder="Enter the event title" required 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>

    <!-- Description -->
    <div>
        <label for="description" class="block font-semibold text-gray-700">Description</label>
        <textarea id="description" name="description" placeholder="Enter the event description" rows="4" required 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
    </div>

    <!-- URL -->
    <div>
        <label for="url" class="block font-semibold text-gray-700">URL</label>
        <input type="url" id="url" name="url" placeholder="Enter the event URL" 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>

    <!-- Dates -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="startDate" class="block font-semibold text-gray-700">Start Date</label>
            <input type="date" id="startDate" name="startDate" required 
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div>
            <label for="endDate" class="block font-semibold text-gray-700">End Date</label>
            <input type="date" id="endDate" name="endDate" 
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
    </div>

    <!-- Time -->
    <div>
        <label for="startTime" class="block font-semibold text-gray-700">Start Time</label>
        <input type="time" id="startTime" name="startTime" 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>

    <!-- Location -->
    <div>
        <label for="location" class="block font-semibold text-gray-700">Location</label>
        <select id="location" name="locationId" required 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
            {#each data.locations as location (location.id)}
                <option value={location.id}>{location.name}</option>
            {/each}
        </select>
    </div>

    <!-- Category -->
    <div>
        <label for="category" class="block font-semibold text-gray-700">Category</label>
        <select id="category" name="categoryId" required 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
            {#each data.categories as category (category.id)}
                <option value={category.id}>{category.title}</option>
            {/each}
        </select>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md transition hover:bg-blue-700 hover:shadow-lg">
        Create Event
    </button>
</form>
