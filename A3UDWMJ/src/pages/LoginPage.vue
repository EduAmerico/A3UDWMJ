<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="width: 350px">
      <div class="text-h6 text-center q-mb-md">Login</div>
      <LoginForm />
    </q-card>
  </q-page>
</template>

<script setup>
import LoginForm from 'components/auth/LoginForm.vue'
</script>