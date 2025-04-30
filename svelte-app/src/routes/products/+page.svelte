<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { base } from '$app/paths';

    import { onMount } from 'svelte';
  
    onMount(() => {
      document.body.classList.add('products-page-body');
      console.log("Products Page Loaded");

      return () => {
        document.body.classList.remove('products-page-body');
      };
    });

    let addedBlueberry = false;
    let addedElderflower = false;
    let addedCherry = false;

    export let descriptionBlueberry = "Set of 20 cans. Sip, refresh and nourish your skin from the inside out. This hydrating, violet-hued herbal infusion contains a proprietary blend of botanicals that can help improve your skin complexion.";
    let expandedBlueberry = false;

    export let descriptionElderflower = "Set of 20 cans. Feel uplifted with the expertly blended Elderflower and berries tea. Nature's answer to keep the chills away, this reviving herbal tea creates a fruity blend with delicate floral and aromatic notes.";
    let expandedElderflower = false;

    export let descriptionCherry = "Set of 20 cans. A perfectly balanced, delicate blend of cherry blossom flowers, leaves, and black tea. This is one of our most beloved tea blends, guaranteed to satisfy and delight tea lovers everywhere.";
    let expandedCherry = false;

    let searchTerm = "";

    function handleSearch() {
      console.log("Searching for:", searchTerm);
    }
</script>

<div class="page-title">
<h1>Products</h1>
</div>

<div class="search-container">
  <input type="text" class="search-bar" bind:value={searchTerm} placeholder="Search . . ."/>
  <button on:click={handleSearch} class="search-button">Search</button>
</div>

<div class="page-bg"></div>

<div class="catalog">
  <div class="catalog-item">
    <div class="catalog-title">
    <a href="{base}/">
    <img src="{base}/grape.png" alt="Blueberry Lavender Tea Cans" width="600" height="400">
    </a>
    <h2>Blueberry Lavender</h2>
    </div>
    <!-- Description Button -->
    <div class="catalog-desc">
      <p>{expandedBlueberry ? descriptionBlueberry : descriptionBlueberry.substring(0, 15) + ". . ."}</p>
      <button class="read" on:click={() => expandedBlueberry = !expandedBlueberry}>
        {expandedBlueberry ? "Read Less" : "Read More"}
      </button>
    </div>
    <!-- Price -->
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <div class="catalog-desc">
    <button class="cart" on:click={() => addedBlueberry = !addedBlueberry}>
      {addedBlueberry ? "Successfully Added!" : "Add to Cart"}
    </button>
    </div>
  </div>
  
  <div class="catalog-item">
    <div class="catalog-title">
    <a href="{base}/">
    <img src="{base}/doctor.png" alt="Elderflower" width="600" height="400">
    </a>
    <h2>Elderflower</h2>
    </div>
    <!-- Description Button -->
    <div class="catalog-desc">
      <p>{expandedElderflower ? descriptionElderflower : descriptionElderflower.substring(0, 15) + ". . ."}</p>
      <button class="read" on:click={() => expandedElderflower = !expandedElderflower}>
        {expandedElderflower ? "Read Less" : "Read More"}
      </button>
    </div>
    <!-- Price -->
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <div class="catalog-desc">
    <button class="cart" on:click={() => addedElderflower = !addedElderflower}>
      {addedElderflower ? "Successfully Added!" : "Add to Cart"}
    </button>
    </div>
  </div>
  
  <div class="catalog-item">
    <div class="catalog-title">
    <a href="{base}/">
    <img src="{base}/cherry-vanilla.png" alt="Cherry Blossom" width="600" height="400">
    </a>
    <h2>Cherry Blossom</h2>
    </div>
    <!-- Description Button -->
    <div class="catalog-desc">
      <p>{expandedCherry ? descriptionCherry : descriptionCherry.substring(0, 15) + ". . ."}</p>
      <button class="read" on:click={() => expandedCherry = !expandedCherry}>
        {expandedCherry ? "Read Less" : "Read More"}
      </button>
    </div>
    <!-- Price -->
    <div class="catalog-price"><h2>19.99€</h2></div>
    <!-- Add to Cart Button -->
    <div class="catalog-desc">
    <button class="cart" on:click={() => addedCherry = !addedCherry}>
      {addedCherry ? "Successfully Added!" : "Add to Cart"}
    </button>
    </div>
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
  opacity: 60%;
  background-image: url("/bg-william-morris.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

.page-title {
  grid-area: title;
  padding: 13px;
  color: #6a1e73;
  font-weight: bold;
  font-size: 45px;
  text-align: center;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

.search-bar {
  padding: 10px;
  border: 1px solid #6a1e73;
  border-radius: 4px;
  margin-right: 10px;
}

.search-button {
  padding: 10px 15px;
  background-color: #df99f5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #6a1e73;
  cursor: pointer;
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
  align-items: center;
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
  align-items: center;
  grid-area: text;
}

.catalog-price {
  text-align: center;
  grid-area: text;
  color: #d489eb;
  font-size: 20px;
}

.cart {
  align-items: center;
  padding: 7px 16px;
  font-size: 20px;
  color: #ffffff;
  background-color: #df99f5;
  border-color: #6a1e73;
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 15px #e5beeb;
  cursor: pointer;
}

.read {
  align-items: center;
  padding: 5px 10px;
  font-size: 13px;
  color: #333333;
  background-color: rgb(108, 31, 117, 0.05);
  border-color: #edc7f8;
  border-radius: 15px;
  cursor: pointer;
}

@media (min-width: 1000px) {
  .search-bar {
  width: 700px;
  }
}

@media (max-width: 1000px) {
  .catalog {
    grid-template-columns: 1fr 1fr;
  }

  .search-bar {
  width: 500px;
  }
}

@media (max-width: 700px) {
  .catalog {
    grid-template-columns: 1fr;
  }

  .search-bar {
  width: 300px;
  }
}
</style>
