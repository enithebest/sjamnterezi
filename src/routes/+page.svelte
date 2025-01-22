<script>
    import { flip } from 'svelte/animate';

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

<style>
    /* Global Styles */
    * {
        font-family: 'Arial', sans-serif;
        background: #f8f9fa;
        margin: 0;
        padding: 0;
        color: #212529;
    }

    a {
        color: #007bff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        padding: 10px 15px;
        font-size: 1rem;
        background: #007bff;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: background 0.3s;
    }

    button:hover {
        background: #0056b3;
    }

    /* Header */
    h1 {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
        color: #212529;
    }

    p {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #495057;
    }

    /* Container */
    .container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    /* Dropdown */
    select {
        display: block;
        width: 100%;
        padding: 8px;
        margin: 1rem 0;
        border: 1px solid #ced4da;
        border-radius: 3px;
        font-size: 1rem;
        background: #fff;
        color: #495057;
    }

    select:focus {
        border-color: #007bff;
        outline: none;
    }

    /* Event Items */
    .event {
        margin: 0.5rem 0;
        padding: 0.8rem;
        border: 1px solid #e9ecef;
        border-radius: 3px;
        background: #f8f9fa;
        transition: transform 0.2s;
    }

    .event:hover {
        transform: translateY(-3px);
    }

    .event p {
        margin: 0;
        font-size: 0.9rem;
        color: #343a40;
    }
</style>

<div>
    {#if data.user}
        <p>Welcome back, {data.user.username}!</p>
        <form action="/logout?/logout" method="post">
            <button type="submit">Logout</button>
        </form>
        <form action="/logout?/deleteUser" method="post">
            <button type="submit">Delete Acount</button>
        </form>
    {:else}
        <p>You are not logged in.</p>
        <p>
            <a href="/login">Login</a> or <a href="/register">Register</a>
        </p>
    {/if}
</div>

<div class="container">
    <h1>My Event App</h1>
    <p>View and filter the events below:</p>

    <select bind:value={selectedCategory} onchange={filterEvents}>
        <option value="all">All</option>
        {#each data.categories as category}
            <option value="{category}">{category.title}</option>
        {/each}
    </select>

    {#each filteredEvents as event (event.id)}
        <div class="event" animate:flip>
            <p>
                <strong>{event.title}</strong> 
                <br />
                {new Date(event.start_date).toDateString()}
            </p>
        </div>
    {/each}
</div>
