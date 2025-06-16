<template>

  <!-- Spinner de carregamento -->
  <q-spinner v-if="loadingIndex !== null" size="xl" color="amber" class="fixed-center" />

  <q-page class="bg-gradient text-white">
    <!-- Barra superior -->
    <q-toolbar class="bg-black text-amber">
      <q-toolbar-title class="text-amber text-bold">
        Fila de Análise de Imagens
      </q-toolbar-title>
      <q-btn flat icon="logout" @click="logout" class="text-amber" />
    </q-toolbar>

    <!-- Uploader visível -->
    <div class="q-pa-md">
      <div class="column items-center q-gutter-md">
        <q-btn label="Selecionar imagem" icon="upload" color="amber" text-color="black" unelevated
          @click="uploaderRef?.pickFiles()" />

        <q-btn label="Adicionar à fila" icon="add_circle" color="amber" text-color="black" unelevated
          @click="submitUpload" />
      </div>

      <!-- Invisible uploader para capturar arquivos -->
      <q-uploader ref="uploaderRef" class="hidden" accept="image/*" :auto-upload="false" @added="handleUpload" />
    </div>

    <!-- Botão externo -->
    <div class="q-pa-sm row justify-end">
      <q-btn label="Adicionar à fila" icon="add_circle" color="amber" text-color="black" unelevated class="q-mt-sm"
        :disable="!uploaderRef?.files?.length" @click="submitUpload" />
    </div>

    <!-- Lista de imagens -->
    <div class="q-pa-md row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="(print, index) in prints" :key="index">
        <PrintCard :image="print" @analyze="simulateAi(print, index)" />
      </div>
    </div>

    <!-- Diálogo -->
    <SendToAiDialog v-model="dialogVisible" :image="selectedImage" :response="aiResponse" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PrintCard from 'components/Print/PrintCard.vue'
import SendToAiDialog from 'components/Print/SendToAiDialog.vue'
import { useUserStore } from 'stores/userStore'
import { analyzeImageWithOpenAI } from 'src/services/openaiService'

const router = useRouter()
const userStore = useUserStore()

const prints = ref([])
const dialogVisible = ref(false)
const selectedImage = ref(null)
const loadingIndex = ref(null)
const aiResponse = ref(null)
const uploaderRef = ref(null)

function logout() {
  userStore.logout()
  router.push('/login')
}

function handleUpload(files) {
  const reader = new FileReader()
  reader.onload = (e) => {
    prints.value.unshift(e.target.result)
  }
  reader.readAsDataURL(files[0])
}

function submitUpload() {
  const files = uploaderRef.value?.files || []
  if (files.length > 0) {
    handleUpload(files)
    uploaderRef.value.reset()
  }
}


const simulateAi = async (img, index) => {
  loadingIndex.value = index
  const result = await analyzeImageWithOpenAI(img)
  loadingIndex.value = null
  selectedImage.value = img
  aiResponse.value = result
  dialogVisible.value = true
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(to bottom right, #000, #1a1a1a);
  min-height: 100vh;
}

.bg-dark {
  background-color: #1e1e1e;
}

.text-amber {
  color: #FFD700;
}

.uploader-box {
  border-radius: 12px;
  border: 1px solid #FFD70044;
}
</style>
