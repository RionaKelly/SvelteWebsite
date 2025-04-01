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
    let isValid = false;

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

    function handleLogOut() {
        isLoggedIn = false;
        user = {
            name: '',
            email: '',
            phoneNumber: '',
            address: ''
        };
        logInEmail = '';
        logInPassword = '';
        localStorage.removeItem('lilacUser');
        localStorage.removeItem('lilacUserPassword');
    }

</script>

<div class="page-bg"></div>

<!-- Sign In/Log In Block -->
<main class="info-block">
    {#if !isLoggedIn}
        <div class="authentication-container">
            <div class="authentication-box">
                <h2>{isSignedUp ? 'Sign Up' : 'Log In'}</h2>

                {#if isSignedUp}
                    <input type="text" placeholder="Full Name" bind:value={user.name}/>
                    <input type="tel" placeholder="Phone Number" bind:value={user.phoneNumber}/>
                    <input type="text" placeholder="Address" bind:value={user.address}/>
                {/if}

                <!-- User must enter the details below to log in -->
                <input type="email" placeholder="Email" bind:value={user.email} required/>
                <input type="text" placeholder="Password" bind:value={logInPassword} required/> 
              
                {#if isSignedUp}
                    <button on:click={handleSignUp}>Create Account</button>
                    <p>Already have an account? <span on:click={() => isSignedUp = false}>Log In</span></p>
                {:else}
                    <button on:click={handleLogIn}>Log In</button>
                    <p>Don't have an account? <span on:click={() => isSignedUp = true}>Sign Up</span></p>
                {/if}              
            </div>
        </div>
    {:else}
        <div class="account-details">
            <div class="profile-icon">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
            </div>
            <h1>Account Details</h1>
            <h2>Hello, {user.name}!</h2>
            <p>Welcome to your Lilac profile.</p>
            <div class="user-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
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