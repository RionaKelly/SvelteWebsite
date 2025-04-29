<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
// @ts-nocheck
    import { base } from '$app/paths';

    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    })
    
</script>

<div class="page-bg"></div>

<div class="row">
<div class="left"><h1>About Us</h1>
<p>Hi! We are Lilac, a small women-owned tea business based in Tea City.</p>
<p>We were dissapointed by the current choices in healthy drinks that could be found on the market right now, and felt like we could do better. And we were right!</p>
<p>Since then we have expanded our business across three more continents, all thanks to the incredible support from our consumers. </p>
<p>Please call us at 08500000 or email us at LilacTea@gmail.com!</p>

</div>

<div class="right" align="right"><img src="{base}/threeWomen.jpg" alt="Three Women" width="600" height="400"></div>
</div>
 

<style>

.left {
 float: left;
 width: 50%;
}
.right {
 float: right;
 width: 50%;
 padding: 42px;
}


.row:after {
 content: "";
 display: table;
 clear: both;
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

h1 {
  grid-area: title;
  padding: 13px;
  color: #6a1e73;
  font-weight: bold;
  font-size: 72px;
  text-align: left;
}

p {
  padding: 13px;
  font-size: 18px;
}
</style>