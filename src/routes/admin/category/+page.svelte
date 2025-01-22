<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
	console.log(data);
</script>

<h1>Admin Dashboard</h1>
<a href="/admin/category/new" class="create-event-btn">+ Create New Event</a>
{#if form && !form.success}
<Warning message={form.message}/>
{/if}
{#each data.category as category (category.id)}
	<div class="box" transition:slide>
		<div class="content">
			<p class="category-title">{category.title}</p>
			<p class="category-id">Event ID: {category.id}</p>
		</div>

		<form action="?/deleteEvent" method="POST" use:enhance class="delete-form">
			<input type="hidden" name="id" value={category.id} />
			<button type="submit" class="delete-btn">Delete</button>
		</form>
	</div>
{/each}

<style>
	/* General Layout and Typography */
* {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background-color: #f4f4f9;
		color: #333;
		margin: 0;
		padding: 0;
	}

	h1 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 30px;
		color: #1a1a1a;
	}

	/* Create New Event Button */
	.create-event-btn {
		display: block;
		width: fit-content;
		margin: 0 auto 30px;
		padding: 12px 20px;
		background-color: #007BFF;
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 5px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s ease, box-shadow 0.3s ease;
	}

	.create-event-btn:hover {
		background-color: #0056b3;
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}

	/* Event Box Styling */
	.box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		margin: 15px auto;
		width: 80%;
		background-color: white;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.box:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
	}

	/* Content Inside Each Box */
	.content {
		display: flex;
		flex-direction: column;
	}

	.category-title {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 0;
		color: #333;
	}

	.category-id {
		font-size: 0.9rem;
		color: #666;
		margin-top: 5px;
	}

	/* Delete Button */
	.delete-btn {
		background-color: #dc3545;
		color: white;
		border: none;
		padding: 10px 15px;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.delete-btn:hover {
		background-color: #c82333;
	}

	/* Form Styling for Consistency */
	.delete-form {
		margin: 0;
	}
</style>
