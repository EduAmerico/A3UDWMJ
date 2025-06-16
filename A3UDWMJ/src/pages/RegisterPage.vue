<template>
  <q-page class="bg-gradient flex flex-center">
    <q-card class="register-card">
      <q-card-section class="text-center">
        <q-icon name="person_add" size="48px" color="amber" />
        <div class="text-h6 text-amber q-mt-sm">Crie sua conta</div>
        <div class="text-subtitle2 text-white">Preencha os dados abaixo</div>
      </q-card-section>

      <q-form @submit.prevent="handleRegister" class="q-pa-md q-gutter-md">
        <q-input
          v-model="name"
          label="Nome"
          filled
          color="amber"
          bg-color="grey-9"
          input-class="text-white"
        />
        <q-input
          v-model="email"
          label="Email"
          filled
          type="email"
          color="amber"
          bg-color="grey-9"
          input-class="text-white"
        />
        <q-input
          v-model="password"
          label="Senha"
          filled
          type="password"
          color="amber"
          bg-color="grey-9"
          input-class="text-white"
        />

        <q-btn
          type="submit"
          label="Registrar"
          color="amber"
          text-color="black"
          icon="how_to_reg"
          class="full-width"
        />

        <q-btn
          flat
          label="Voltar ao Login"
          icon="arrow_back"
          class="full-width text-amber"
          @click="$router.push('/login')"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  // Simula o cadastro e redireciona
  router.push('/login')
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(to bottom right, #000, #1a1a1a);
  min-height: 100vh;
}
.register-card {
  width: 100%;
  max-width: 400px;
  background-color: #1e1e1e;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}
.text-amber {
  color: #FFD700;
}
</style>
