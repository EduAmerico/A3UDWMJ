<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="width: 350px">
      <div class="text-h6 text-center q-mb-md">Cadastro</div>
      <RegisterForm />
    </q-card>
  </q-page>
</template>

<script setup>
import RegisterForm from 'components/auth/RegisterForm.vue'
</script>