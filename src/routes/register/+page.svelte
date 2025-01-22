<script>
    import { enhance } from '$app/forms';
    import Warning from '$lib/components/Warning.svelte';
    export let form;
</script>

<div>
    <form action="?/register" method="POST" use:enhance>
        <h1>Register</h1>

        <label for="email">E-Mail</label>
        <input type="text" name="email" id="email" required />

        <label for="username">Username</label>
        <input type="text" name="username" id="username" required />

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />

        <button type="submit">Register</button>

        {#if form}
            <Warning message={form.message} />
        {/if}
    </form>
</div>

<style>
    * {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9;
        color: #333;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #4facfe, #00f2fe);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        max-width: 400px;
        background: #fff;
        padding: 30px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 24px;
        text-align: center;
        color: #4facfe;
        margin-bottom: 20px;
    }

    label {
        font-size: 14px;
        font-weight: 600;
        color: #555;
    }

    input {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: #4facfe;
        box-shadow: 0 0 3px rgba(79, 172, 254, 0.5);
    }

    button {
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #4facfe;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #00bcd4;
    }

    button:active {
        transform: scale(0.98);
    }


</style>
