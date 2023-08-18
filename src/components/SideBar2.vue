
<script setup>

import { useSessionStore } from '@/stores/SessionStore';
import { reactive, ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { links } from '@/api/adminAppSetting.js';
import logo from '/logo.png'
const drawer = ref(true);

const session = useSessionStore();

console.log("is User Logged?? "+session.state.isUserLogged);
const user = session.state.user;

const msgMenu = ref(false);
const notiMenu = ref(false);

const toggleOrder = ref(0);

const { mobile } =  useDisplay();

const newMessage = ref(0);
const newNotification = ref(0);

const latestMessages = reactive(['sdfs','sdflsfk','sdfkjlsfksl']);

</script>

<template>
     <v-app-bar :order="toggleOrder">
        <v-app-bar-nav-icon @click="drawer = !drawer" v-if="mobile" ></v-app-bar-nav-icon>
        <v-avatar color="info" size="80" :image="logo" class="ms-4" />
        <v-app-bar-title> Next Step </v-app-bar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon="mdi-account"><v-img :src="loggedUser.user.url" :width="40" :height="40"></v-img></v-btn> -->
            <v-btn icon="mdi-message" to="/chat"> <v-badge :content="`${newNotification}`" color="red">
            <v-icon></v-icon>
            </v-badge>
            <v-menu activator="parent" v-model="msgMenu" :close-on-content-click="false" location="bottom center">
                <v-list>
          <v-list-item
            v-for="(item, index) in latestMessages"
            :key="index"
            :value="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
            </v-menu>
            </v-btn> 
        

        <v-menu v-model="notiMenu" :close-on-content-click="false" location="end">
            <v-btn  icon="mdi-bell" rounded> <v-badge :content="`${newNotification}`" color="red">
            <v-icon></v-icon>
            </v-badge></v-btn> 
        </v-menu>
                <v-switch 
            label="Toggle Order"
            hide-details
            v-model:model-value="toggleOrder" 
            :true-value="1" 
            :false-value="0"
        >
        </v-switch>
      </v-app-bar>

      <v-navigation-drawer :model-value="drawer">
        <v-list>
        <v-list-item :title="user.firstName+' '+ user.lastName" :subtitle="user.email" :prepend-avatar="user.url"></v-list-item>
      </v-list>
      <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="link in links.list" 
            :key="link.value"
            :title="link.title"
            :to="link.value"
            :prepend-icon="link.icon"      
            @click="link.click"      
            >
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>