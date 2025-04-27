<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("TOS & Privacy Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="tos-container">
    <div class="tos">
        <h1>Terms of Service</h1>
        <p class="updated">Last Updated: April 10, 2025</p>
    
        <div class="section">
            <h2>1. Introduction</h2>
            <p>Welcome to Lilac Tea. We're delighted to have you as a customer. These Terms of Service govern your use of our website and purchases. By accessing our services, you agree to these terms.</p>
        </div>
    
        <div class="section">
            <h2>2. Account Registration</h2>
            <p>To enhance your shopping experience, you may create an account with us. We ask that you provide accurate information and keep your login credentials secure. You are responsible for all activities that occur under your account.</p>
        </div>
    
        <div class="section">
            <h2>3. Products & Orders</h2>
            <p>We take pride in our premium tea selection and strive to provide accurate descriptions and images. While we make every effort to display our products accurately, slight variations may occur. All prices are listed in the applicable currency and are subject to change. </p>
        </div>
    
        <div class="section">
            <h2>4. Shipping</h2>
            <p>We offer several shipping options to serve you better. Delivery timeframes are estimates and may vary based on location. For international orders, please be aware that customs duties and taxes may apply and are the responsibility of the recipient.</p>
        </div>
    
        <div class="section">
            <h2>5. Returns & Refunds</h2>
            <p>Your satisfaction is important to us. If you're not completely satisfied with your purchase, you may return unopened products within 30 days. Please contact our customer service team for assistance with returns or if you receive damaged products.</p>
        </div>
    
        <div class="section">
            <h2>6. Privacy Policy</h2>
            <p>We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy to understand how we collect and use your data.</p>
        </div>
    
        <div class="section">
            <h2>7. Contact Us</h2>
            <p>We are here to help! For detailed information, please visit our Contact page. Any order support queries can be directed to support@lilactea.com</p>
        </div>
    </div>
</div>

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

.tos-container {
    max-width: auto;
    margin: 0 auto;
    padding: 30px 20px;
    background-color: #fff;
    color: #333;
}

.tos {
    background-color: #f9f4fd;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(156, 39, 176, 0.1);
}

.updated {
    color: #666;
    margin-bottom: 30px;
    font-style: italic;
    text-align: center;
    font-size: 14px;
}

.section {
    margin-bottom: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

h1 {
    color: #9c27b0;
    text-align: center;
    margin-bottom: 5px;
    font-size: 40px;
}
</style>