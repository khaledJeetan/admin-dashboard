
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import UserInformation from '@/components/UserInformation.vue'
import UserList from '@/components/UserList.vue'
import Chats from '@/components/Chats.vue'
import SignIn from '@/views/SignIn.vue'
// import { loggedUser } from '@/api/user'
import { useSessionStore } from '@/stores/SessionStore'

const routes = [

    {path:'/', name:'SignIn', component: SignIn, alias: '/signin'},
    {
        path:'/admin',
        name: 'Template',
        component: ()=> import('@/views/AdminTemplate.vue'),
        meta: {requiresAuth: true, },
        children: [
            {path:'/dashboard', name:'Dashboard', component: Dashboard},
            {path:'/userinformation/:id', name:'UserInformation', component: UserInformation},
            {path:'/userlist', name:'UserList', component: UserList},
            {path:'/chat', name:'Chats', component: Chats},
        ]
    },

    {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from)=>{
    const session = useSessionStore();
    session.getSessionInfo;
    if(to.path !== "/"){
        console.log("gaurd scanning");
        if( (to.meta.requiresAuth && !session.isSessionValid) || !session.isSessionValid ){
        console.log("guard Message is :  "+ session.state.user!=null);
        return {name: 'SignIn', query:{redirect: to.fullPath} };
    }}else{
        session.closeSession();
    }
})
export default router