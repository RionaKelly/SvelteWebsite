<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { base } from '$app/paths';
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
  <img src="{base}/cat.png" alt="cat">
  <img src="{base}/cat.png" alt="cat">
  <img src="{base}/cat.png" alt="cat">
</div>

</body>

<style>

h1{
  font-size: 150px;
  margin-left: 44%;
  margin-top: 10%;
  color: rgb(121, 19, 121);
  
}

p{
  font-size: 80px;
  margin-left: 35%;
  color: rgb(121, 19, 121);
  
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
  opacity: 0.6; 
}

.image-container img:last-child {
  margin-right: 0; 
}

</style>