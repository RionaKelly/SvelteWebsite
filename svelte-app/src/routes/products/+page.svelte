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
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
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
  padding: 10px;
  text-decoration: none;
  color: #6a1e73;
  font-weight: bold;
}
</style>
<body>

    <div class="gallery">
        <a href="/">
        <img src="background.jpg" alt="Lavender" width="600" height="800">
        </a>
    <div class="desc">Set of 20 cans</div>
    </div>

    <div class="gallery">
        <a href="/">
        <img src="background.jpg" alt="Elderflower" width="600" height="800">
        </a>
    <div class="desc">Set of 20 cans</div>
    </div>

    <div class="gallery">
        <a href="/">
        <img src="background.jpg" alt="Cherry Blossom" width="600" height="800">
        </a>
    <div class="title"><h3>Cherry Blossom</h3></div>
    <div class="desc">Set of 20 cans</div>
    </div>

</body>
