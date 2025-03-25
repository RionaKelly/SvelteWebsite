<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("Landing Page Loaded");
    })

     import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()
  }
</script>

<h1>Welcome to Lilac</h1>
<p>We produce affordable Herbal Tea as a fun and stylish alternative to other expensive health drinks</p>
<br>
<h1><a href="/products">Our Products</a></h1>
<Carousel
    bind:this={carousel}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
</Carousel>
<!-- <button on:click={handleNextClick}>Next</button> -->

<div class="page-bg"></div>

<style>

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: url("/bg-william-morris.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

:root {
    --primary-color: #303030;
    --background-color: #fdf5ff;
    --text-color: #303030;
    --link-hover-color: #6a1e73;
}
</style>