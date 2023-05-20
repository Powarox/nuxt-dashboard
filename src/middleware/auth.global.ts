export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (!user.value && to.path !== '/') {
        return navigateTo('/')
    }
    else if (user.value && to.path === '') {
        return navigateTo('/dashboard')
    }

    // if (user.value) {
    //     return navigateTo(to.fullPath)
    // }

    // if (to.path === '/') {
    //     return
    // }

    // return navigateTo('/')
})