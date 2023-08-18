
import { reactive } from "vue"
import { useSessionStore } from "@/stores/SessionStore"

export const links = reactive({
    list:[
  {
          icon: "mdi-view-dashboard",
          title: 'DashBoard',
          value: '/dashboard',
          },
          {
          icon: "mdi-account-plus",
          title: 'Add User',
          value: '/userinformation/0',
          },
          {
          icon: "mdi-card-account-details",
          title: 'User List',
          value: '/userlist',
          },
          {
          icon : "mdi-folder",
          title: 'Admin',
          value: 'buzz',
          },
          {
          icon : "mdi-logout",
          title: 'Log Out',
          value: '/',
          click: ()=>{ useSessionStore().closeSession() }
          },
    ]
  })