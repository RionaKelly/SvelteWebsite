<head>
    <meta name="author" content="Montana Nicholas">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    })
</script>

<h1>CONTACT US</h1>

<h2>SEND US A MESSAGE</h2>

<br>
<h4> FULL NAME </h4>
<h4> EMAIL ADDRESS </h4>
<h4> TYPE YOUR MESSAGE...</h4>
<br>

<br>
<b> Address: </b>
<p> address info</p>
<b> Phone: </b>
<p> phone number info</p>
<b> Email: </b>
<p> email address info</p>
<br>

<style>
    h1 {
        text-align: center;
        font-size: 65px; 
    }

    h2 { 
        text-align: right;
        text-decoration-line: overline underline;
    }

    h4 {
        text-align: right;
    }
</style>