<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("FAQ Page Loaded");
    })
</script>

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
<p>- Shipping times will depend on your location, shipping to Ireland should be completed in 3-4 business days.</p>
<br>
<b>- What is your return policy?</b>
<p>- We do not offer refunds.</p>
<br>

<div class="page-bg"></div>
     
<style>

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: url("/bg-william-morris.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

@media (max-width: 7px) {
    footer {
        padding: 0.75rem;
        position: relative;
        font-size: 0.9rem;
    }
}
</style>