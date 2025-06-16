<template>
  <q-page class="flex flex-center bg-dark text-white">
    <q-card class="q-pa-lg shadow-4 login-card">
      <q-card-section class="text-center">
        <q-icon name="lock" size="48px" color="gold" />
        <div class="text-h5 q-mt-sm text-gold">Bem-vindo de volta</div>
        <div class="text-subtitle2">Faça login para continuar</div>
      </q-card-section>

      <q-form @submit.prevent="handleLogin" class="q-gutter-md q-mt-md">
        <q-input
          v-model="email"
          label="Email"
          filled
          type="email"
          color="gold"
          bg-color="dark"
          dense
          :input-style="{ color: 'white' }"
        />
        <q-input
          v-model="password"
          label="Senha"
          filled
          type="password"
          color="gold"
          bg-color="dark"
          dense
          :input-style="{ color: 'white' }"
        />

        <q-btn
          type="submit"
          label="Entrar"
          color="gold"
          text-color="black"
          glossy
          unelevated
          icon="login"
          class="full-width q-mt-md"
          :loading="loading"
        >
          <template v-slot:loading>
            <q-spinner-dots color="black" size="sm" />
            <span class="q-ml-sm">Entrando...</span>
          </template>
        </q-btn>

        <q-btn
          flat
          label="Registrar"
          @click="$router.push('/register')"
          class="q-mt-sm full-width text-gold"
          icon="person_add"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from 'stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500)) // simula delay
  userStore.login({ email })
  loading.value = false
  router.push('/home')
}
</script>

<style scoped>
.bg-dark {
  background-color: #121212;
}

.text-gold {
  color: #FFD700;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  background: linear-gradient(145deg, #1a1a1a, #000000);
  border: 1px solid #ffd70044;
}
</style>
