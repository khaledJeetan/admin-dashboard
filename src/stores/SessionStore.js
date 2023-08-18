
import { defineStore } from "pinia";
import { computed, reactive } from "vue";
export const useSessionStore = defineStore('SessionStore', ()=>{

    const state = reactive({
        // delete this and make it computed
     isUserLogged: false,
     sessionTimeOut: 24,
     sessionEndTime: null,
     isSessionStarted: false,
     sessionStartTime: null,
     user:null,
     sessionStorage: window.sessionStorage,
})
    const isSessionValid = computed(()=>{
        if(!state.user || !state.sessionEndTime  || (new Date(state.sessionEndTime) < (new Date()))){
            return false;
        }
        return true;
    })

    const getSessionInfo = computed(()=>{
        console.log("getting Session Info...")
        if(state.sessionStorage.length>0){
        state.user = JSON.parse(state.sessionStorage.getItem('user')) || null;
        state.sessionEndTime = state.sessionStorage.getItem("sessionEndTime");
        state.isSessionStarted = state.sessionStorage.getItem("isSessionValid");
        state.sessionTimeOut = state.sessionStorage.getItem("sessionTimeOut");
        state.sessionStartTime = state.sessionStorage.getItem("sessionStartTime");
        state.isUserLogged = true;
        return state.user;
        }
    })

    function startSession(){
        if(state.user){
           const date = new Date();
           state.sessionStartTime = date.toString();
           state.isUserLogged = true;
           state.isSessionStarted = true;
           date.setHours(date.getHours()+state.sessionTimeOut);
           state.sessionEndTime = date.toString(); 
            // store in Browser Session Storage
            console.log(state.isSessionStarted);
            state.sessionStorage.setItem("user",JSON.stringify(state.user));
            state.sessionStorage.setItem("sessionEndTime",state.sessionEndTime);
            state.sessionStorage.setItem("isSessionValid",state.isSessionStarted);
            state.sessionStorage.setItem("sessionTimeOut", state.sessionTimeOut);
            state.sessionStorage.setItem("sessionStartTime", state.sessionStartTime);
        }
    }

    function closeSession(){
        state.isSessionStarted = false;
        state.sessionStartTime = null;
        state.sessionEndTime = null;
        state.user = null;
        state.sessionStorage.clear();
    }

    function setSessionTimeOut(hours){
        state.sessionTimeOut = hours;
    }

    function setLoggedUser(user){
        state.user = user;
    }
    return {state, getSessionInfo, isSessionValid, startSession, closeSession, setSessionTimeOut, setLoggedUser}

})