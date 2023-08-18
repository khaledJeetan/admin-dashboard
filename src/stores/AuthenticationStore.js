
import { defineStore } from "pinia";
import {ref} from 'vue'
import {server, request} from "@/api/config"

export const useAuthenticationStore = defineStore('AuthenticationStore',()=>{
    const isUserAuthenticated = ref(false);
    const isUserAutherized = ref(false);
    const errorMessage = ref("");

    async function login(email, password) {
        try {
          const data = {
            password: password,
            email: email
          };
          console.log("before login in store")
      
          const response = await fetch(`${server}users/login`, request('POST', data));
          if(response.ok){
          const user = await response.json();
          return user;
          }
          else{
            errorMessage.value = "Cannot Log In, Wrong Password Or Email";
            return null;

          }
        } catch (error) {
          console.error('Error:', error);
        //   errorMessage.value += '\n'+error;   
        }
      }
      return{ login, isUserAuthenticated, isUserAutherized, errorMessage }
})