<template>
  <q-card class="q-pa-sm bg-dark text-amber shadow-2">
    <q-img :src="image" ratio="16/9" />
    
    <q-card-actions align="right">
      <q-btn
        color="amber"
        text-color="black"
        icon="smart_toy"
        label="Enviar para IA"
        unelevated
        @click="$emit('analyze')"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['image'])
</script>

<style scoped>
.bg-dark {
  background-color: #1e1e1e;
}
.text-amber {
  color: #FFD700;
}
</style>
