<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/logo.png" alt="Website Logo">
        <h1>Lilac</h1>
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex; /* Enables Flexbox */
        align-items: center; /* Vertically centers the items */
        justify-content: space-between; /* Pushes logo to left, nav to right */
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
        width: 50px;
        margin-right: 10px;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column; /* Stacks items vertically */
            text-align: center;
        }

        .logo {
            justify-content: left;
        }
    }

</style>