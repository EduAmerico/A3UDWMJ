<template>
  <q-form @submit.prevent="handleRegister" class="q-gutter-md">
    <q-input v-model="name" label="Nome" filled />
    <q-input v-model="email" label="Email" filled type="email" />
    <q-input v-model="password" label="Senha" filled type="password" />
    <q-btn type="submit" label="Registrar" color="secondary" class="full-width" />
    <q-btn flat label="Voltar ao Login" @click="$router.push('/login')" class="q-mt-sm full-width" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  router.push('/login')
}
</script>