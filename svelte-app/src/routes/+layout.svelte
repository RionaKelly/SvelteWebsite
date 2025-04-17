<script>
    // Import components
    import { Header, Footer } from "$lib";
</script>

<div id="layout-container">
    <!-- Header -->
    <Header />

    <!-- Content -->
    <mains>
        <slot />
    </mains>

    <!-- Footer -->
    <Footer />
</div>

<style>
    #layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    mains {
        flex: 1;
    }
    
</style>