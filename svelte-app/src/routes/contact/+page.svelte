<head>
  <meta name="author" content="Montana Nicholas">
</head>

<script>
import { base } from '$app/paths';

  import { onMount } from 'svelte';

  onMount(() => {
      console.log("Contact Page Loaded");
  })
</script>

<body> 
<div class="page-bg"></div>

<div class="title"><h1>Contact Us</h1></div>

<div class="rectangle right"><h2>SEND US A MESSAGE</h2> 
<form>
<input type="text" placeholder="FULL NAME" required>
<input type="email" placeholder="EMAIL ADDRESS" required>
<input type="text" placeholder="TYPE YOUR MESSAGE...." required>
</form>
</div>

<div class="rectangle left"><br>
  <div class="location"><img src="{base}/location.png" alt="location" width="40" height="40"></div>
  <b> ADDRESS: </b>
  <p> Tea City, Tea Land</p>
  <div class="call"><img src="{base}/call.png" alt="call" width="40" height="40"></div>
  <b> PHONE: </b>
  <p> 08500000</p>
  <div class="mail"><img src="{base}/mail.png" alt="mail" width="40" height="40"></div>
  <b> EMAIL: </b>
  <p> LilacTea@gmail.com</p>
  <br>
  </div>
  </body>

   
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

body {
font-family: Arial, sans-serif;
margin: 0;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;

}


.left {

position: fixed;
top: 60%;
margin-left: 15%;
transform: translateY(-50%);
width: 235px;   
background-color: #d17de6;
border: 1px solid #6a1e73;
padding: 20px;
border-radius: 5px;
 
}


.right {

position: fixed;
top: 60%;
margin-left: 70%;
transform: translateY(-50%);
width: 400px; 
background-color: #f7e4fc;
border: 1px solid #6a1e73;
border-radius: 4px;
padding: 40px;

}

.title {
  grid-area: title;
  padding: 13px;
  color: #6a1e73;
  font-weight: bold;
  font-size: 45px;
  text-align: center;
}

h2 {
margin-left: 10%;
}

p {
margin-left: 25%;
font-size: 15px;
color: white;
}

b {
font-size: 20px;
font-weight: 100px;
margin-left: 20%;
color: #6a1e73;
}

form input {
display: block;
width: 100%;
margin: 20px 0;
padding: 10px 5px;
background: transparent;
border: none;
border-bottom: 2px solid #5d3c70;
font-size: 12px;
color: #333;
outline: none;
}

form input::placeholder {
color: #5d3c70;
text-transform: uppercase;
font-size: 10px;
}

</style>