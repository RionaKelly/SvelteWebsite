<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("TOS & Privacy Page Loaded");
    })
</script>

<h1>Welcome to our Website</h1>
<p>This is a temporary tos page.</p>
   
<div class="page-bg"></div>

<style>

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  opacity: 60%;
  background-image: url("/bg-william-morris.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

</style>