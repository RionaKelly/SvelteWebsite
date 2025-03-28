<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("404 Page Loaded");
    })
</script>

<body>

<div class="page-bg"></div>

<h1>404</h1>
<p>PAGE NOT FOUND</p>

<div class="image-container">
    <img src="cat.png" alt="cat">
    <img src="cat.png" alt="cat">
    <img src="cat.png" alt="cat">
</div>

</body>

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

.image-container {
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  max-height: 600px; 
}

.image-container img {
  opacity: 0.6; /* Reduces transparency to 60% */
}

.image-container img:last-child {
  margin-right: 0; 
}

</style>