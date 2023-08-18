

<script setup>
import { reactive } from 'vue';

const icons = reactive(  [
    {
        icon: 'mdi-facebook',
        link: '#',
    },
    { 
        icon:'mdi-twitter',
        link: '#',
    },
    {
        icon: 'mdi-linkedin',
        link: '#',
    },
    {
        icon: 'mdi-instagram',
        link: '#',
    },
])

</script>

<template>
    <v-footer color="primary" app>
        <v-container>
          <v-row>
            <v-col class="text-center">
            <strong>Get connected with us on social networks!</strong>
          </v-col>
          <v-spacer></v-spacer>
            <v-col class="text-center">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon.icon"
              variant="plain"
              size="small"
              :href="icon.link"
            ></v-btn>  
          </v-col>
          </v-row>
          <v-row no-gutters class="text-center">
            <v-col >
              <strong>
                &COPY;
                {{ new Date().getFullYear() }} — Vuetify
              </strong>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
</template>