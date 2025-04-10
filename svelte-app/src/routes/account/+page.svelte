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
                alert('Invalid or no email has been entered. If you dont have an account, please press on Sign Up! :)');
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
                <input type="password" placeholder="Password" bind:value={logInPassword} required/> 
              
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
            <div class="user-info">
                <h1>Account Details</h1>
                <div class="background">
                    <div class="details-text">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        {#if user.phoneNumber}
                            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                        {/if}
                        {#if user.address}
                            <p><strong>Address:</strong> {user.address}</p>
                        {/if}
                    </div>
                    <button class="edit">Edit →</button>
                </div>
                <div class="order-history">
                    <h1>Order History</h1>
                    <div class="background">
                        <div class="details-text">
                            <p>You haven't placed any orders yet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile">
                <div class="profile-icon">
                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                </div>
                <h1>Hello, <strong>{user.name}</strong>!</h1>
                <div class="welcome">
                    <p>Welcome to your Lilac profile.</p>
                    <button on:click={handleLogOut}>Sign Out</button>
                </div>
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

.info-block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.authentication-container, .account-details {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: auto;
    padding: 30px;
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 7rem;
    margin-left: 3rem;
    margin-right: 3rem;
}

.authentication-box input {
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

}

.authentication-box button {
    width: 100%;
    padding: 10px;
    background-color: #6a1e73;
    color: white;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.profile button {
    width: 150px;
    align-items: center;
    padding: 7px 16px;
    font-size: 20px;
    color: #ffffff;
    background-color: #df99f5;
    border-color: #6a1e73;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.edit {
    font-size: 15px;
    width: 70px;
    padding: 5px;
    justify-content: right;
    align-items: right;
    color: #ffffff;
    background-color: #df99f5;
    border-color: #6a1e73;
    border-radius: 15px;
    cursor: pointer;
}

.authentication-box button:hover {
    background-color: #d27cec;
    cursor: pointer;
}

.account-details button:hover {
    background-color: #6a1e73;
    cursor: pointer;
}

.authentication-box p span {
    color: #6a1e73;
    cursor: pointer;
    font-weight: bold;
}

.profile {
    border-radius: 8px;
    font-size: 20px;
    width: 100%;
    max-width: auto;
    padding: 30px;
    text-align: center;
    align-items: right;
    justify-content: right;
}

.profile-icon {
    background-color: #6a1e73;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    justify-content: right;
    align-items: center;
    margin: 0 auto 20px;
}


.welcome {
    color: #6a1e73;
}

.account-details {
    align-items: center;
    justify-content: left;
    padding-left: 30px;
    max-width: 900px;
    column-count: 2;
    text-align: left;
    padding-top: 40px;
}

.order-history {
    padding-top: 30px;
    align-items: right;
    justify-content: center;
    text-align: left;
    padding-top: 40px;
}

.background {
    background-color: #f5dafd;
    color: #6a1e73;
    padding: 10px;
    padding-top: 15px;
}
</style>