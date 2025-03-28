<head>
    <meta name="author" content="Carla Epifanio Vivero">
</head>

<script>
    import { onMount } from 'svelte';

    // Log In Details
    let isLoggedIn = false;
    let logInEmail = '';
    let logInPassword = '';

    let user = {
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
    };
    
    // Sign Up Details
    let isSignedUp = false;

    // Check if user is already signed in
    onMount(() => {
        const saved = localStorage.getItem("lilacUser");
        console.log("Account Page Loaded");
        if (saved) {
            user.name, user.email, user.phoneNumber, user.address = saved;
            isLoggedIn = true;
            user = JSON.parse(saved);
        }
    });

    function handleSignUp() {
        console.log( 'Sign up - User:', user);
        console.log( 'Log In - Log In Password:', logInPassword);

        if (isSignedUp) {
            if (!user.name) {
                alert('Please enter your name!');
                return;
            }
        }

         // Validation
        let isValid = false;
        function validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = regex.test(user.email);

            if (!logInEmail) {
                alert('Please enter an email!');
                return;
            }

            if (!logInPassword) {
                alert('Please enter a password!');
                return;
            }
        }

        // Update user email for sign up
        user.email = logInEmail;

        // Store User Details
        localStorage.setItem('lilacUser', JSON.stringify(user));
        localStorage.setItem('lilacUserPassword', logInPassword);
        isLoggedIn = true;
    }

    function handleLogIn() {
        console.log( 'Log In - Email:', logInEmail);
        console.log( 'Log In - Password:', logInPassword);

        const storedUser = localStorage.getItem('lilacUser');
        const storedPassword = localStorage.getItem('lilacUserPassword');

        if (!logInEmail) {
            alert('Please enter an email!');
            return;
        }

        if (!logInPassword) {
            alert('Please enter a password!');
            return;
        }

        if (storedUser && storedPassword) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.email === logInEmail && storedPassword === logInPassword) {
                user = parsedUser;
                isLoggedIn = true;
            } else {
                alert('Invalid email or password!');
            }
        } else {
            alert('No account found. Please sign up first. :)');
        }
    }

</script>

<div class="page-bg"></div>

<!--
<h1>Hello, User!</h1>
<p>Welcome to your Lilac profile. (placeholder)</p> -->

<main class="info-block">
    {#if !isLoggedIn}
        <div class="authentication-container">
            <div class="authentication-box">

            </div>
        </div>
    {/if}
</main>

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

</style>