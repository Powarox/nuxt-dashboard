<template>
    <div id="home">
        <h1>Home Page</h1>

        <form @submit.prevent="() => (isSignUp ? signUp() : login())">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">
                <span>Log in</span>
            </button>
        </form>
        <button @click="isSignUp = !isSignUp">
            <span v-if="isSignUp">Have an account? Log in instead</span>
            <span v-else>Create a new account</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()

const signUp = async () => {
    const { error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('error', error)
}

const login = async () => {
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    console.log('error', error)
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})
</script>

<style scoped lang="css">
    #home {
        height: 100%;
        padding: 20px;
    }
</style>
