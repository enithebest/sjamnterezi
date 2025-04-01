<script>
    import { enhance } from '$app/forms';
    import { slide } from 'svelte/transition';
    import { put } from "@vercel/blob";
    import {BLOB_READ_WRITE_TOKEN} from '$env/static/private';

    let { data } = $props();
</script>

<h1 class="text-center text-4xl font-bold text-gray-900 my-6">Admin Dashboard</h1>

<a href="/admin/events/new" class="block mx-auto w-fit px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg">
    Create a New Event
</a>

<div class="space-y-6 mt-6">
    {#each data.events as event (event.id)}
        <div class="max-w-xl mx-auto p-5 bg-white border border-gray-300 rounded-lg shadow-sm transition hover:shadow-md" transition:slide>
            <p class="text-lg font-semibold text-gray-800">
                {event.title} <span class="text-gray-500 italic">({event.locationName})</span>
            </p>

            <form action="?/deleteEvent" method="POST" use:enhance class="mt-4">
                <input type="hidden" name="id" value={event.id} />
                <button type="submit" class="px-4 py-2 bg-red-600 text-white font-semibold rounded-md transition hover:bg-red-700">
                    Delete
                </button>
            </form>
        </div>
    {/each}
</div>
