<script>
    // import NavigationFooter.svelte from lib folder
    import { NavigationFooter } from "$lib"
</script>

<footer>
    <p>&copy; 2025 My Svelte App. All rights reserved.</p>
    <!-- Navigation -->
    <NavigationFooter />
</footer>


<style>
    footer {
        background-image: linear-gradient(rgb(203, 123, 225), rgb(213, 143, 235), rgb(223, 153, 245), rgb(213, 143, 235), rgb(203, 123, 225));
        color: white;
        text-align: center;
        padding: 1rem;
        position: relative;
        bottom: 0;
        width: 100%;
    }

    /*Mobile: Reduce padding for a more compact look */
    @media (max-width: 768px) {
        footer {
            padding: 0.75rem;
            position: relative;
            bottom: 0;
            font-size: 0.9rem;
        }
    }
</style>