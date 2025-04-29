<script>
    import { base } from '$app/paths';
    let isOpen = false; // Menu state (open/closed)
</script>

<!-- Navigation Container -->
<nav class="nav">
    <!-- Burguer Menu Button (Visible on Small Screens) -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation"> ☰ </button>

    <!-- Navigation Links -->
    <ul class:open={isOpen}>
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/products">Products</a></li>
        <li><a href="{base}/about">About</a></li>
        <li><a href="{base}/cart">Cart</a></li>
        <li><a href="{base}/account">Account</a></li>
    </ul>
</nav>

<style>
    /* Base Navigation Styling */
    .nav {
        padding: 1rem;
        text-align: center;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        transition: 0.15s ease-in-out;
    }

    .nav ul li {
        display: inline-block;
        transition: 0.15s ease-in-out;
    }

    .nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        opacity: 1;
        transition: 0.15s ease-in-out;
    }
    .nav ul li a:hover {
        opacity: 0.9;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    }
    .nav ul li:hover {
        transform: translateY(1px);
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #6a1e73;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style>