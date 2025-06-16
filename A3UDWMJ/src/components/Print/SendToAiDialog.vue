<template>
  <q-dialog v-model="internalModel">
    <q-card class="dialog-card">
      <q-card-section class="bg-black text-amber">
        <div class="text-h6">🧠 Resultado da IA</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-white">
        <q-img :src="image" ratio="16/9" class="q-mb-md rounded-img" />
        <div class="text-body1">
          {{ response || 'Nenhuma resposta disponível no momento.' }}
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-dark">
        <q-btn flat label="Fechar" icon="close" color="amber" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  image: String,
  response: String
})

const emit = defineEmits(['update:modelValue'])
const internalModel = ref(props.modelValue)

watch(() => props.modelValue, val => {
  internalModel.value = val
})
watch(internalModel, val => {
  emit('update:modelValue', val)
})
</script>

<style scoped>
.dialog-card {
  background-color: #1e1e1e;
  border: 1px solid #FFD70033;
  border-radius: 12px;
  min-width: 350px;
  max-width: 500px;
}

.bg-black {
  background-color: #000;
}

.bg-dark {
  background-color: #121212;
}

.text-amber {
  color: #FFD700;
}

.rounded-img {
  border-radius: 8px;
}
</style>
