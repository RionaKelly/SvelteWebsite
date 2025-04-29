<script>
    import { base } from '$app/paths';
</script>


<nav>
    <ul>
        <li><a href="{base}/faq">FAQ</a></li>
        <li><a href="{base}/tos">ToS</a></li>
        <li><a href="{base}/contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    nav ul li {
        margin: 0 15px;
        transition: 0.15s ease-in-out;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        opacity: 1;
        transition: 0.15s ease-in-out;
    }

    nav ul li a:hover {
        opacity: 0.9;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    }
    nav ul li:hover {
        transform: translateY(1px);
    }
</style>