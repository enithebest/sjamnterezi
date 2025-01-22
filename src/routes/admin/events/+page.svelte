<script>
    import { enhance } from '$app/forms';
    import { slide } from 'svelte/transition';

    let { data } = $props();
</script>

<h1>Admin Dashboard</h1>
<a href="/admin/events/new" class="create-btn">Create a New Event</a>

{#each data.events as event (event.id)}
    <div class="box" transition:slide>
        <p><strong>{event.title}</strong> <span class="location">({event.locationName})</span></p>
        <form action="?/deleteEvent" method="POST" use:enhance>
            <input type="hidden" name="id" value={event.id} />
            <button type="submit" class="delete-btn">Delete</button>
        </form>
    </div>
{/each}

<style>
    /* General Styles */
   * {
        font-family: 'Arial', sans-serif;
        background-color: #f9fafc;
        color: #333;
        margin: 0;
        padding: 0;
        line-height: 1.6;
    }

    h1 {
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    a.create-btn {
        display: block;
        max-width: 200px;
        margin: 10px auto 20px auto;
        text-align: center;
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    a.create-btn:hover {
        background-color: #2980b9;
    }

    /* Event Box */
    .box {
        background-color: white;
        border: 1px solid #e1e4e8;
        border-radius: 5px;
        padding: 15px;
        margin: 10px auto;
        max-width: 600px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .box:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    .box p {
        margin: 0 0 10px;
        font-size: 1rem;
        color: #2c3e50;
    }

    .box .location {
        color: #7f8c8d;
        font-style: italic;
    }

    /* Delete Button */
    .delete-btn {
        display: inline-block;
        padding: 8px 15px;
        background-color: #e74c3c;
        color: white;
        font-size: 0.9rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .delete-btn:hover {
        background-color: #c0392b;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .box {
            padding: 10px;
        }

        a.create-btn {
            max-width: 100%;
            padding: 10px;
        }
    }
</style>
