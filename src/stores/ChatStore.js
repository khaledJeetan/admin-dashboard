import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useSessionStore } from "./SessionStore";
import { server, request, getImgUrl } from "@/api/config";

export const useChatStore = defineStore("ChatStore", () => {
  const state = reactive({
    loadSelectedChat: 0,
    load: true,
    messageBox: null,
    virtualScroll: null,
    user: null,
    chats: {},
    selectedchat: null,
    selectedUser: null,
  });

  const loading = computed(() => {
    return state.user || false;
  });

  function selectchat(chat) {
    console.log("select User...");
    state.selectedchat = chat;
    state.selectedUser = chat.user2;
    state.loadSelectedChat = chat.id;
  }

  async function getLoggedUserChats() {
    state.user = useSessionStore().state.user;
    console.log("fetching user chats");
    const response = await fetch(
      `${server}users/${state.user.id}/chats`,
      request("GET", null)
    );
    const users = await response.json();
    state.chats = users;
    state.chats.forEach((element) => {
      getImgUrl(element.user1);
      getImgUrl(element.user2);
      element.messages.forEach((msg) => getImgUrl(msg.sender));
    });
    state.load = false;
  }
  const compareDates = (message1, message2) => {
    const date1 = new Date(message1.date);
    const date2 = new Date(message2.date);
    return date1 - date2;
  };
  function sortMessagesByDate(messages) {
    messages.sort(compareDates);

    return messages;
  }
  function extractDateFromLastChatMessage(chat) {
    //assuming the date is a string in this format:  "2023-06-24T03:07:27.225623"
    if (chat.messages.length !== 0) {
      const date = sortMessagesByDate(chat.messages)[0].dateCreated;
      return date.split("T")[0];
    } else {
      return "NO Messages";
    }
    //
  }

  function extractTime(date) {
    //assuming the date is a string in this format:  "2023-06-24T03:07:27.225623"
    return date.split("T")[1].substring(0, 5);
  }

  return {
    state,
    compareDates,
    extractDateFromLastChatMessage,
    extractTime,
    getLoggedUserChats,
    selectchat,
    sortMessagesByDate,
    loading,
  };
});
