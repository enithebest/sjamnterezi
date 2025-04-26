<script>
    import { enhance } from "$app/forms";
    import Warning from "$lib/components/Warning.svelte";
    export let form;
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form action="?/login" method="POST" use:enhance 
        class="w-full max-w-md p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
        
        <h1 class="text-xl font-bold text-center text-gray-700">Login</h1>

        <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-semibold text-gray-700">E Mail</label>
            <input type="email" name="email" id="email" required 
                placeholder="Enter your email"
                class="p-2 text-sm border border-gray-300 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none" />
        </div>

        <div class="flex flex-col gap-2">
            <label for="password" class="text-sm font-semibold text-gray-700">Password</label>
            <input type="password" name="password" id="password" required 
                placeholder="Enter your password"
                class="p-2 text-sm border border-gray-300 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none" />
        </div>

        <button type="submit" class="py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 font-bold">Login</button>

        {#if form}
            <Warning message={form.message} />
        {/if}
    </form>
</div>
