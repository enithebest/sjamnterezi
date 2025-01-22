<h1>Create New Event</h1>

<script>
    let { data } = $props();
</script>

<form method="POST" action="?/createEvent">
    <!-- Title -->
    <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Enter the event title" required />

    <!-- Description -->
    <label for="description">Description</label>
    <textarea id="description" name="description" placeholder="Enter the event description" rows="4" required></textarea>

    <!-- URL -->
    <label for="url">URL</label>
    <input type="url" id="url" name="url" placeholder="Enter the event URL" />

    <!-- Dates -->
    <label for="startDate">Start Date</label>
    <input type="date" id="startDate" name="startDate" required />

    <label for="endDate">End Date</label>
    <input type="date" id="endDate" name="endDate" />

    <!-- Times -->
    <label for="startTime">Start Time</label>
    <input type="time" id="startTime" name="startTime" />

    <!-- Location -->
    <label for="location">Location</label>
    <select id="location" name="locationId" required>
        {#each data.locations as location (location.id)}
            <option value={location.id}>{location.name}</option>
        {/each}
    </select>

    <!-- Category -->
    <label for="category">Category</label>
    <select id="category" name="categoryId" required>
        {#each data.categories as category (category.id)}
            <option value={category.id}>{category.title}</option>
        {/each}
    </select>

    <!-- Submit Button -->
    <button type="submit" class="submit-btn">Create Event</button>
</form>

<style>
    /* General Styles */
    * {
        font-family: 'Arial', sans-serif;
        background-color: #f9fafc;
        color: #333;
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 2rem;
        color: #2c3e50;
    }

    /* Form Styles */
    form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    label {
        margin-top: 15px;
        font-weight: bold;
        color: #2c3e50;
    }

    input, textarea, select {
        margin-top: 5px;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        width: 100%;
    }

    input:focus, textarea:focus, select:focus {
        border-color: #3498db;
        box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    }

    textarea {
        resize: none;
    }

    .submit-btn {
        margin-top: 20px;
        padding: 10px 15px;
        background-color: #3498db;
        color: white;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .submit-btn:hover {
        background-color: #2980b9;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        form {
            padding: 15px;
        }
    }
</style>
