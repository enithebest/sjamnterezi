<script>
    import { flip } from 'svelte/animate';
    import "../app.css";
    let { data } = $props();
    let filteredEvents = $state(data.events);
    let selectedCategory = $state('all');

    function filterEvents() {
        if (selectedCategory === 'all') {
            filteredEvents = data.events;
        } else {
            filteredEvents = data.events.filter(event => event.category_id === selectedCategory.id);
        }
    }  
</script>

<div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    {#if data.user}
        <p class="text-center text-gray-700">Welcome back, {data.user.username}!</p>
        <div class="flex justify-center space-x-2 mt-2">
            <form action="/logout?/logout" method="post">
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Logout</button>
            </form>
            <form action="/logout?/deleteUser" method="post">
                <button type="submit" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete Account</button>
            </form>
        </div>
    {:else}
        <p class="text-center text-gray-700">You are not logged in.</p>
        <p class="text-center mt-2">
            <a href="/login" class="text-blue-500 hover:underline">Login</a> or 
            <a href="/register" class="text-blue-500 hover:underline">Register</a>
        </p>
    {/if}
</div>

<div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
    <h1 class="text-xl font-bold text-center text-gray-800">My Event App</h1>
    <p class="text-center text-gray-600 mb-4">View and filter the events below:</p>

    <select bind:value={selectedCategory} onchange={filterEvents} 
        class="w-full p-2 border border-gray-300 rounded bg-white text-gray-700">
        <option value="all">All</option>
        {#each data.categories as category}
            <option value="{category}">{category.title}</option>
        {/each}
    </select>

    <div class="mt-4">
        {#each filteredEvents as event (event.id)}
            <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 mt-2 transition-transform hover:translate-y-[-3px]" animate:flip>
                <p class="text-gray-800 font-semibold">{event.title}</p>
                <p class="text-gray-600 text-sm">{new Date(event.start_date).toDateString()}</p>
            </div>
        {/each}
    </div>
</div>
