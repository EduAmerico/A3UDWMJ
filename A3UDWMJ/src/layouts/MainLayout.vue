<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated class="bg-black text-gold">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-gold"
        />
        <q-toolbar-title class="text-gold text-bold">
          Painel de Análise
        </q-toolbar-title>
        <div class="text-subtitle2 text-gold">v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- DRAWER -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark text-gold"
    >
      <q-list>
        <q-item clickable v-ripple @click="$router.push('/home')">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push('/login')">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Sair</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- CONTEÚDO -->
    <q-page-container class="bg-gradient">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.bg-dark {
  background-color: #6d6d6d;
}

.text-gold {
  color: #FFD700;
}

.bg-black {
  background-color: #000;
}

.bg-gradient {
  background: linear-gradient(to bottom right, #000000, #c79a06);
  min-height: 100vh;
}
</style>
