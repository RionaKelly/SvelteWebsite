<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    })
</script>


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

<img src="background.jpg" class="background-image" alt="Background Image">
      
<style>

img.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* makes sure the image covers the full screen */
    z-index: -1; /* Puts the image behind any other content */
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
  background-color: #a83cc4;
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
  background-color: #dd98ee;
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