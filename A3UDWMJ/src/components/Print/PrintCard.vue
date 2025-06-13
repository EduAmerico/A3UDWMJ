<template>
  <q-card class="q-pa-sm">
    <q-img :src="image" ratio="16/9" />
    <q-card-actions align="right">
      <q-btn color="primary" label="Enviar para IA" @click="$emit('analyze')" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['image'])
</script>