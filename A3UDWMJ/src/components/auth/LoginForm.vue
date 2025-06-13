<template>
  <q-form @submit.prevent="handleLogin" class="q-gutter-md">
    <q-input v-model="email" label="Email" filled type="email" />
    <q-input v-model="password" label="Senha" filled type="password" />
    <q-btn type="submit" label="Entrar" color="primary" class="full-width" />
    <q-btn flat label="Registrar" @click="$router.push('/register')" class="q-mt-sm full-width" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from 'stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const email = ref('')
const password = ref('')

function handleLogin() {
  userStore.login({ email })
  router.push('/home')
}
</script>