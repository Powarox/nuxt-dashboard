<template>
    <div id="layout">
        <Sidebar />
        <div class="container">
            <Header />
            <slot />
        </div>
    </div>
</template>

<style scoped>
    #layout {
        width: 100%;
        height: 100vh;
        padding: 30px;
        display: flex;
        overflow: hidden;
        /* background: #f8f9fe; */
    }

    .container {
        display: flex;
        flex-direction: column;
    }
</style>