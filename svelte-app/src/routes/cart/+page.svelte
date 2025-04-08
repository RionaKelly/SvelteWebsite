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

.bottom {
  position: absolute;
  margin-top: 35%;
  margin-left: 80%;
  transform: translateY(-50%);
  width: 150px; 
  height: 50px;  
  background-color: #d476ee;
  border: 1px solid #771d81;
  border-radius: 4px;
}
.checkout-button {
  position: fixed;
  bottom: 100px;
  right: 280px;
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
