<template>
  <q-dialog v-model="internalModel">
    <q-card style="min-width: 300px">
      <q-card-section class="row items-center q-pa-sm bg-primary text-white">
        <div class="text-h6">Análise da IA</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-img :src="image" class="q-mb-md" ratio="16/9" />
        <div class="text-subtitle1">Atualmente não consigo me comunicar com a API da IA.</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Fechar" color="primary" @click="internalModel = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  image: String
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