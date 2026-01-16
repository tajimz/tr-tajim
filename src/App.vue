<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import { RouterView } from 'vue-router'; // Import the placeholder
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header class="sticky-top bg-white" ></Header>
    
    <div class="d-flex flex-grow-1 align-items-stretch">
      <Sidebar />
      
      <main class="flex-grow-1 p-2">
        <div class="container-fluid mb-4">
          <RouterView/>
          
        </div>
        <Footer ></Footer>
      </main>
      
    </div>
  </div>
</template>