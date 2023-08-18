
<script setup>

import SideBar2 from '../components/SideBar2.vue';
import Footer from '../components/Footer.vue';


</script>

<template>
    <v-app>
      <side-bar2></side-bar2>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col style="background-color: #F7F8FA;">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <!-- <Footer></Footer> -->
</v-app>

</template>

<style scoped>

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>