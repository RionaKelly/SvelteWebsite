<script>
    // Import components
    import { Header, Footer } from "$lib";
</script>

<!-- Header -->
<Header />

<!-- Content -->
<mains>
    <slot />
</mains>

<!-- Footer -->
<Footer />

<style>
    main {
        padding: 2rem;
        text-align: center;
    }
</style>