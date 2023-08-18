
<script setup>
import { computed, reactive, ref, watchEffect } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useAuthenticationStore } from "@/stores/AuthenticationStore.js"
import { useSessionStore } from "@/stores/SessionStore.js";
import logo from "/logo.png"
import Footer from "@/components/Footer.vue";

const loggedUser = reactive({email:"", password:""})
const route = useRoute();
const router = useRouter();
const auth = useAuthenticationStore();
const session = useSessionStore();
const valid = ref(false);
const loading = ref(false);
const showError = ref(false);
const errorMessage = ref("");

async function signin(){
  loading.value = true;
  const loginUser= await auth.login(loggedUser.email,loggedUser.password);
  showError.value = loginUser == null;
  errorMessage.value = auth.errorMessage;
  if(loginUser){
    const redirectPath = route.query.redirect || '/admin';
    session.setLoggedUser(loginUser);
    session.startSession();
    router.push(redirectPath);
  }
  else{
    loading.value = false;
  }
}

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validMail = ref(false);
  const validPass = ref(false);
  const emailRules = [
    (value)=>{ return value? true : "please enter Email to logIn" },
    (value)=>{  if(emailPattern.test(value)){ validMail.value=true; return true} validMail.value=false; return "invalid Email Address"}
  ]
  const passwordRules = [
    (value) =>{if(value) {validPass.value=true; return true } validPass.value=false; return "please enter the Password To Log in"}
  ] 

  const btnDisable = computed(()=>{
    return !(validMail.value && validPass.value);
  })
</script>

<template>
  <v-app>
    <v-alert type="error"  
     v-model="showError"
      border="start"
      variant="tonal"
      closable
      close-label="Close Alert" max-height="80" class="my-3" max-width="50%" location="top">{{ errorMessage }}</v-alert>
      <v-sheet elevation="20" class=" w-50 mx-auto mt-5 p-5 pt-0">
    <v-container fluid>
      <v-row justify="center"  title=" Sign In Form" class="mt-4">
        <v-img :src="logo" height="300" alt="NEXT STEP LOGO"/>
    </v-row>
    <h4 class="text-center my-5">Welcome To NEXT STEP</h4>
    <v-row justify="center">
      <v-form @submit.prevent>
        <v-container>
          <v-row>
            <v-text-field
            rounded
            size="20"
            label="email"
            v-model="loggedUser.email"
            append-inner-icon="mdi-email"  
            :rules="emailRules"
            type="email"
            />
          </v-row>
          <v-row>
            <v-text-field 
            rounded
            :rules="passwordRules"
            append-inner-icon="mdi-lock"
            label="Password"
            v-model="loggedUser.password"
            type="password"

             />
          </v-row>
          <v-row justify="center">
            <v-btn
            type="submit"
            :loading="loading"
            :elevation="5"
            rounded
            block
            :disabled="btnDisable"
            text="Log In"
            @click="signin"
            />
          </v-row>
        </v-container>
      </v-form>
    </v-row>
    </v-container>
  </v-sheet>
</v-app>
</template>