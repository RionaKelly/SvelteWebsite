<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      document.body.classList.add('products-page-body');
      console.log("Products Page Loaded");

      return () => {
        document.body.classList.remove('products-page-body');
      };
    });

</script>

<h1>Products</h1>
<p>Search Placeholder</p>

<div class="page-bg"></div>

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
    <button class="cart"> Add to Cart </button>
  </div>
  
  <div class="catalog-item">
    <a href="/">
    <img src="cherry-vanilla.png" alt="Cherry Blossom" width="600" height="400">
    </a>
    <div class="catalog-title"><h2>Cherry Blossom</h2></div>
    <div class="catalog-desc">Set of 20 cans</div>
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <button class="cart"> Add to Cart </button>
  </div>
</div>


<style>

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

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
  border: 1.5px solid #edc7f8;
  background-color: rgb(108, 31, 117, 0.05);
  
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
  font-size: 20px;
}

.cart {
  align-items: center;
  padding: 8px 16px;
  font-size: 20px;
  color: #ffffff;
  background-color: #df99f5;
  border-color: #6a1e73;
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 15px #e5beeb;
}

@media (max-width: 1000px) {
  .catalog {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .catalog {
    grid-template-columns: 1fr;
  }
}
</style>
