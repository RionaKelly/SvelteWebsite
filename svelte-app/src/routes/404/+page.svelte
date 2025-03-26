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


<div class="image-container">
    <img src="cat.png" alt="cat">
    <img src="cat.png" alt="cat">
    <img src="cat.png" alt="cat">
</div>

<h1>404</h1>
<p>PAGE NOT FOUND</p>

</body>

<style>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

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
}

.image-container img {
  width: 650px; 
  height: 650px;
  margin-right: 10px; 
  opacity: 0.6; /* Reduces transparency to 60% */
}

.image-container img:last-child {
  margin-right: 0; 
}

</style>