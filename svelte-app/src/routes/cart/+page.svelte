<head>
  <meta name="author" content="Montana Nicholas">
</head>

<script>
  import { base } from '$app/paths';

  import { onMount } from 'svelte';

  onMount(() => {
      console.log("Cart Page Loaded");
  })
</script>

<div class="page-bg"></div>

<button class="checkout-button">CHECKOUT</button>

<div class="rectangle right"><h2>ORDER SUMMARY</h2> 
<br> <h3>Cherry Vanilla - set of 20 cans</h3>
<h3> $19.99 </h3>
<br> 
<br>
<h3>Elderflower - set of 20 cans</h3>
<h3> $19.99 </h3>
</div>

<div class="page">
<div class="product-row">
  <div class="product-img">
    <img src="{base}/cherry-vanilla.png" alt="Cherry Vanilla">
  </div>
  <div class="product-details">
    Product details:<br>Cherry Vanilla - Set of 20 cans. <br> $19.99
  </div>
</div>

<div class="product-row">
  <div class="product-img">
    <img src="{base}/doctor.png" alt="Doctor Goodwin">
  </div>
  <div class="product-details">
    Product details:<br>ElderFlower - Set of 20 cans. <br> $19.99
  </div>
</div>
</div>

<div class="total-box">TOTAL : $39.98 </div>
  
<style>

  h2{
      text-align: center;
      font-size: 28px;
  }
  
  h3{
    font-size: 23px;
    text-align: left;
    font-family: serif;
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
gap: 50px;
position: relative;
}

.product-row {
display: flex;
gap: 20px;
align-items: flex-start;
}

.product-img {
background-color: #fefbff;
padding: 10px;
border: 1px solid #9c3ab9;
width: 190px;
height: auto;
margin-left: 5%;
display: flex;
justify-content: center;
align-items: center;
}

.product-img img {
max-width: 100%;
height: auto;
}

.product-details {
background-color: #fdfaff;
padding: 20px;
border: 1px solid #9c3ab9;
width: 250px;
top: 40%;
font-size: 20px;
}

.total-box {
position: absolute;
top: 73%;
margin-left: 83%;
transform: translateY(-50%);
width: 125px;
background-color: #efb4ff;
border-radius: 4px;
}


.checkout-button {
  
  position: absolute;
  top: 80%;
  margin-left: 70%;
  transform: translateY(-50%);
  padding: 7px 16px;
  font-size: 20px;
  color: #ffffff;
  background-color: #df99f5;
  border-color: #6a1e73;
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.checkout-button:hover {
  transform: translateY(-1px);
  background-color: #dc83f7;
  box-shadow: 0 6px 15px #cd72db;
  cursor: pointer;
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
