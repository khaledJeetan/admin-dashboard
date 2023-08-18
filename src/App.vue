<script setup>

//  import {loggedUser, login} from '@/api/user.js'
// import { reactive, computed, ref } from 'vue';
// import SideBar from '@/components/SideBar.vue';
// import TopBar from "@/components/TopBar.vue";
// import {useRoute} from 'vue-router'
// import SignIn from '@/views/SignIn.vue'

import { reactive, ref } from "vue";
import SideBar2 from "./components/SideBar2.vue";
import Footer from "./components/Footer.vue";


// const route=useRoute();
const loggedUser = reactive({
  user: null
})

const nums = reactive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])

// const isLogged = ref(false);
// const path = computed(() =>route.path)

// console.log(loggedUser.user)


</script>
  

<template>
   <router-view v-slot="{Component}">
     <transition name="slide" mode="out-in">
       <component :is="Component"></component>
     </transition>
  </router-view>
  </template>

<style>

  /* .main-con{
    height: 100vh;
    width: 100vm;
  }

  .content {
    border-radius: 20px 20px 5px 5px;
    overflow: auto;
  }
  hr {
    height: 4px;
  }
  .sidebar {
    background-color: rgb(4, 30, 63);
    color: white;
  }
@media screen {
  *{
    margin:0px;
    padding: 0px;
  }
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    display: block;

  }
  .overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
} */
#app{
  grid-template-columns: auto auto auto;
  max-width: 100%;
  height: 100vh;
  padding: 0;
  display: inline;
  flex: 1;
}

html{
  overflow: auto !important;
}

.slide-enter-active, .slide-leave-active{
  transition: opacity 1s,transform 1s ;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}



</style>