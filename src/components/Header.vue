<template>
    <div id="header">
        <div class="search_bar"></div>

        <div class="avatar"></div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
    #header {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search_bar {
        width: 300px;
        height: 40px;
        background: #f0f3fa;
        border-radius: 25px;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #f29200;
    }
</style>
