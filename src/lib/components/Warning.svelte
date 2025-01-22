<script>
    const {message} = $props();
</script>

<div class="message-container">
    <p class="message-text">{message}</p>
</div>

<style>
    .message-container {
        background-color: aqua;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: fit-content;
        max-width: 100%;
    }

    .message-text {
        font-size: 18px;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 0;
    }
</style>
