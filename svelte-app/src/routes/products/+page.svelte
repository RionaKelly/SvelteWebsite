<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
        console.log("Products Page Loaded");
    })

</script>

<h1>Products</h1>
<p>Search</p>


<style>

div.gallery {
  margin: 20px;
  border: 1px solid #df99f5;
  background-color: #f2daf9;
  float: left;
  width: 450px;
  padding: 5px;
}

div.gallery:hover {
  border: 1px solid #6a1e73;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  text-align: center;
}

div.title {
  text-align: center;
  padding: 1px;
  text-decoration: none;
  color: #6a1e73;
  font-weight: bold;
}

@media (max-width: 768px) {
  div.gallery {
    flex-direction: column; /* Stacks items vertically */
    text-align: center;
    width: 230px;
  }
}
</style>
<body>

    <div class="gallery">
        <a href="/">
        <img src="Blueberry Lavender Iced Tea.jpg" alt="Blueberry Lavender Tea Cans" width="600" height="700">
        </a>
    <div class="title"><h3>Blueberry Lavender</h3></div>
    <div class="desc"><p>Set of 20 cans</p></div>
    </div>

    <div class="gallery">
        <a href="/">
        <img src="logo.png" alt="Elderflower" width="600" height="700">
        </a>
    <div class="desc">Set of 20 cans</div>
    </div>

    <div class="gallery">
        <a href="/">
        <img src="logo.png" alt="Cherry Blossom" width="600" height="700">
        </a>
    <div class="title"><h3>Cherry Blossom</h3></div>
    <div class="desc">Set of 20 cans</div>
    </div>
</body>
