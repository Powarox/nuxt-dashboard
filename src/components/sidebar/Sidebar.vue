<template>
    <div id="sidebar">
        <div class="logo">
            <h1>Wallet</h1>
        </div>

        <nav class="nav_menu">
            <NuxtLink to="/">Dashboard</NuxtLink>
            <NuxtLink to="/wallet">Wallet</NuxtLink>
            <NuxtLink to="/history">History</NuxtLink>
            <NuxtLink to="/transaction">Transaction</NuxtLink>
            <NuxtLink to="/admin">Settings</NuxtLink>
        </nav>

        <div class="action_btn">
            <button>Logout</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
    #sidebar {
        height: 100%;
        width: 20%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #f0f3fa;
        border-radius: 20px;
    }

    /* HEADER */
    

    /* NAV MENU */
    .nav_menu {
        display: flex;
        flex-direction: column;
    }
    .nav_menu a {
        text-decoration: none;
    }

    /* BOTTOM */
    .action_btn {
        margin: 0 auto;
    }
    .action_btn button {
        text-transform: uppercase;
    }
</style>
