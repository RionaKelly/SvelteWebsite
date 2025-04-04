<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    })
</script>

<body> 
<div class="page-bg"></div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<div class="rectangle top"><h1>CONTACT US</h1></div>

<div class="rectangle right"><h2>SEND US A MESSAGE</h2><br>
    <h4> FULL NAME </h4>
    <h4> EMAIL ADDRESS </h4>
    <h4> TYPE YOUR MESSAGE...</h4>
    <br>
</div>

<div class="rectangle left"><br>
    <b> Address: </b>
    <p> address info</p>
    <b> Phone: </b>
    <p> phone number info</p>
    <b> Email: </b>
    <p> email address info</p>
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
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

}


.left {
  position: absolute;
  top: 50%;
  margin-left: 5%;
  transform: translateY(-50%);
  width: 300px; 
  height: 250px;  
  background-color: #c458df;
  border: 1px solid #6a1e73;
  border-radius: 4px;
}

.top {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px; 
  height: 65px;  
  background-color: #812399;
}

.right {
  position: absolute;
  top: 50%;
  margin-left: 80%;
  transform: translateY(-50%);
  width: 300px; 
  height: 300px;  
  background-color: #f0c9fa;
  border: 1px solid #6a1e73;
  border-radius: 4px;
}

h1 {
  font-size: 45px;
  color: rgb(255, 239, 255);
}

h2 {
  margin-left: 10%;
}

h4 {
  margin-left: 5%;
}

p {
  margin-left: 25%;
}

b {
  margin-left: 20%;
}

</style>