<template>
  <q-page padding>
    <q-toolbar class="bg-primary text-white q-mb-md">
      <q-toolbar-title>Fila de Análise de Imagens</q-toolbar-title>
      <q-btn flat icon="logout" @click="logout" />
    </q-toolbar>

    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="(print, index) in prints" :key="index">
        <PrintCard :image="print" @analyze="openDialog(print)" />
      </div>
    </div>

    <SendToAiDialog v-model="dialogVisible" :image="selectedImage" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PrintCard from 'components/Print/PrintCard.vue'
import SendToAiDialog from 'components/Print/SendToAiDialog.vue'
import { useUserStore } from 'stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const prints = ref([
  'https://via.placeholder.com/300x200.png?text=Print+1',
  'https://via.placeholder.com/300x200.png?text=Print+2',
  'https://via.placeholder.com/300x200.png?text=Print+3'
])

const dialogVisible = ref(false)
const selectedImage = ref(null)

function openDialog(image) {
  selectedImage.value = image
  dialogVisible.value = true
}

function logout() {
  userStore.logout()
  router.push('/login')
}
</script>