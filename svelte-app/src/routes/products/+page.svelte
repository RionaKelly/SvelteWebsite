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
<p>Search Placeholder</p>

<div class="catalog">
  <div class="catalog-item">
    <a href="/">
    <img src="grape.png" alt="Blueberry Lavender Tea Cans" width="600" height="400">
    </a>
    <div class="catalog-title"><h2>Blueberry Lavender</h2></div>
    <div class="catalog-desc"><p>Set of 20 cans</p></div>
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <button class="cart">Add to Cart</button>
  </div>
  
  <div class="catalog-item">
    <a href="/">
    <img src="doctor.png" alt="Elderflower" width="600" height="400">
    </a>
    <div class="catalog-title"><h2>Elderflower</h2></div>
    <div class="catalog-desc">Set of 20 cans</div>
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <button class="cart">Add to Cart</button>
  </div>
  
  <div class="catalog-item">
    <a href="/">
    <img src="cherry-vanilla.png" alt="Cherry Blossom" width="600" height="400">
    </a>
    <div class="catalog-title"><h2>Cherry Blossom</h2></div>
    <div class="catalog-desc">Set of 20 cans</div>
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <button class="cart">Add to Cart</button>
  </div>
</div>


<style>
.catalog {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  justify-items: center;
}

.catalog img:hover {
  border: 1px solid #6a1e73;
}

.catalog img {
  grid-area: image;
  width: auto;
  height: 500px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #f0d5f8;
}

.catalog-title {
  grid-area: title;
  color: #6a1e73;
  font-weight: bold;
  text-align: center;
}

.catalog-desc {
  text-align: center;
  grid-area: text;
}

.catalog-price {
  text-align: center;
  grid-area: text;
  color: #df99f5;
}

.cart {
  align-items: center;
}

@media (max-width: 768px) {
  .catalog {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
