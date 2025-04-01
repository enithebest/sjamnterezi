<script>
    import { enhance } from '$app/forms';
    import Warning from '$lib/components/Warning.svelte';
    export let form;
</script>

<div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-cyan-400">
    <form action="?/register" method="POST" use:enhance 
        class="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        
        <h1 class="text-xl font-bold text-center text-blue-500">Register</h1>

        <label for="email" class="text-sm font-semibold text-gray-700">E-Mail</label>
        <input type="text" name="email" id="email" required 
            class="p-2 text-sm border border-gray-300 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none" />

        <label for="username" class="text-sm font-semibold text-gray-700">Username</label>
        <input type="text" name="username" id="username" required 
            class="p-2 text-sm border border-gray-300 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none" />

        <label for="password" class="text-sm font-semibold text-gray-700">Password</label>
        <input type="password" name="password" id="password" required 
            class="p-2 text-sm border border-gray-300 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none" />

        <button type="submit" class="py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-cyan-500 transition duration-300 font-bold">Register</button>

        {#if form}
            <Warning message={form.message} />
        {/if}
    </form>
</div>
