<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Cart Page Loaded");
    })
</script>

<div class="page-bg"></div>

<button class="checkout-button">CHECKOUT</button>

<div class="rectangle right"><h2>SHIPPING DETAILS</h2></div>

<div class="page">
  <div class="product-row">
    <div class="product-img">
      <img src="cherry-vanilla.png" alt="Cherry Vanilla">
    </div>
    <div class="product-details">
      Product details:<br>amount, cost etc.
    </div>
  </div>

  <div class="product-row">
    <div class="product-img">
      <img src="doctor.png" alt="Doctor Goodwin">
    </div>
    <div class="product-details">
      Product details:<br>amount, cost etc.
    </div>
  </div>

  <div class="total-box">TOTAL :</div>
</div>

    
<style>

    h2{
        text-align: center;
    }

    h3{
        text-align: center;
        color: white;
    }
    
.right {
  position: absolute;
  top: 55%;
  margin-left: 70%;
  transform: translateY(-50%);
  width: 400px; 
  height: 400px;  
  background-color: #f8f1fa;
  border: 1px solid #9c3ca7;
  border-radius: 4px;
}

.page {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}

.product-row {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.product-img {
  background-color: #faecfc;
  padding: 10px;
  border: 1px solid #9c3ab9;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-img img {
  max-width: 100%;
  height: auto;
}

.product-details {
  background-color: #f4e1fd;
  padding: 20px;
  border: 1px solid #d38de8;
  width: 250px;
  font-size: 20px;
}

.total-box {
  background-color: #f4c8f9;
  padding: 10px 20px;
  border: 1px solid #d38de8;
  width: fit-content;
  top: 60%;
  margin-left: 40%;
  font-weight: bold;
  color: purple;
}


.checkout-button {
  position: absolute;
  bottom: 100px;
  right: 300px;
  background-color: #d58fe8; 
  color: white;
  border: 2px solid purple;
  padding: 12px 30px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background 0.3s ease;
}

.checkout-button:hover {
  background-color: #ad35ce;
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


</style>
