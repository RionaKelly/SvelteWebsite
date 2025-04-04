<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("FAQ Page Loaded");
    })
</script>
<div class="page-bg"></div>

<h1>Frequently Asked Questions (FAQ)</h1>
<p>Have any questions about our company? Here you will find the answer to the most common questions that we get asked. If your question has not been answered here, feel free to contact us here or at the footer below.</p>
<br>
<b>- What does Lilac sell?</b>
<p>- Herbal Tea in affordable and stylish cans, primarily designed to be a healthy and cheap alternative to other similar products.</p>
<br>
<b>- Where are you located?</b>
<p>- We are located in Tea City, Tea Land.</p>
<br>
<b>- How long does shipping take?</b>
<p>- Shipping times will depend on your location, shipping to Ireland should be completed in 7 business days.</p>
<br>
<b>- What is your return policy?</b>
<p>- We do not offer refunds.</p>
<br>
<b>- How long did this website take to make?</b>
<p>- Quite a while :(</p>
     
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
b {
  color: #6a1e73;
  padding: 13px;
  font-size: 18px;
}

@media (max-width: 7px) {
    footer {
        padding: 0.75rem;
        position: relative;
        font-size: 0.9rem;
    }
}
</style>