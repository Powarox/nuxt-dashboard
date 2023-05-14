<template>
    <div id="sidebar">
        <div class="logo">
            <h1>Wallet</h1>
        </div>

        <nav class="nav_menu">
            <NuxtLink to="/">
                <v-icon icon="mdi-vuetify"></v-icon> Home
            </NuxtLink>
            <NuxtLink to="/dashboard">
                <v-icon icon="mdi-view-dashboard"></v-icon> Dashboard
            </NuxtLink>
            <NuxtLink to="/wallet">
                <v-icon icon="mdi-wallet"></v-icon> Wallet
            </NuxtLink>
            <NuxtLink to="/history">
                <v-icon icon="mdi-history"></v-icon> History
            </NuxtLink>
            <NuxtLink to="/transaction">
                <v-icon icon="mdi-swap-horizontal"></v-icon> Transaction
            </NuxtLink>
            <NuxtLink to="/admin">
                <v-icon icon="mdi-cog"></v-icon> Settings
            </NuxtLink>
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
        width: 25%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #f0f3fa;
        border-radius: 20px;
    }

    /* HEADER */
    .logo {
        margin: 0 auto;
    }

    /* NAV MENU */
    .nav_menu {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .nav_menu a {
        padding: 10px;
        text-decoration: none;
        color: #0f123f;
    }

    /* BOTTOM */
    .action_btn {
        margin: 0 auto;
    }
    .action_btn button {
        padding: 5px 20px;
        color: #efecfb;
        background: #ff6a6a;
        /* text-transform: uppercase; */
        border-radius: 10px;
    }
</style>
