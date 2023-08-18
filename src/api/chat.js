import { reactive } from 'vue';
import { loggedUser, getImgUrl } from './user';
import { server, request } from './config.js'


const userChat = reactive({
    chats: []
});

export { userChat}