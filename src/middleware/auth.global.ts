export default defineNuxtRouteMiddleware((to, from) => {    
    const isLoggedIn = false;
    
    if (isLoggedIn) {
        return navigateTo(to.fullPath);
    }

    if (to.path === '/login') {
        return;
    }

    console.log('Failed Auth');
    return navigateTo('/login');
})