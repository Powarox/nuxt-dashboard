export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return navigateTo(to.fullPath);
    }

    console.log('Failed Auth');
    return navigateTo('/login');
})