<script>
    import { enhance } from "$app/forms";
    import Warning from "$lib/components/Warning.svelte";
    export let form;
</script>

<div class="container">
    <form action="?/login" method="POST" use:enhance class="login-form">
        <h1 class="form-title">Login</h1>

        <div class="form-group">
            <label for="email" class="form-label">E-Mail</label>
            <input
                type="email"
                name="email"
                id="email"
                class="form-input"
                required
                placeholder="Enter your email"
            />
        </div>

        <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                class="form-input"
                required
                placeholder="Enter your password"
            />
        </div>

        <button type="submit" class="btn">Login</button>

        {#if form}
            <Warning message={form.message} />
        {/if}
    </form>
</div>

<style>
    /* Container styles */
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f8f9fa; /* Light gray background */
    }

    /* Form styles */
    .login-form {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .form-title {
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .form-label {
        font-size: 14px;
        color: #555;
    }

    .form-input {
        height: 40px;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: border-color 0.3s ease;
    }

    .form-input:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
    }

    .btn {
        height: 40px;
        background-color: #007bff;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #0056b3;
    }
</style>
