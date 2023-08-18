<script setup>

import {deleteUser, getUsers,users} from '@/api/user.js';
import router from '@/router';
import { loggedUser } from '@/api/user.js';
import { reactive } from 'vue';
import Filter from './Filter.vue'
import UserModal from './UserModal.vue';
import PermissionAlert from './PermissionAlert.vue';
import Alert from './Alert.vue';

const alert = reactive({
  display: 0,
  message : "",
  type: "Warning"
})

function onUpdate(user){
  router.push(`/userinformation/${user.id}`)
}

async function onDelete(isConfirmed,user){
  console.log("value of confirmation is : "+isConfirmed)
  if(isConfirmed){
  console.log("deleteing User with id" + user.id);
  const message = await deleteUser(user.id);
  alert.display=1;
  alert.message= message;
alert.type= message == "User Deleted successfully." ?  "Success" : "Danger";  
  }
  else{
  alert.display=1;
  alert.type= "Danger";
  alert.message="Confirmation Security is Not Approved"
  } 
}

const filtered = reactive({
  userList: users
});

function filterUserList(searchBy,searchedText,enteries){
  console.log(searchedText.value)
  if(searchedText.value){
    console.log(!searchedText.value)
    console.log(filtered.userList)
     filtered.userList = users.filter((user) => String(user[searchBy.value]).match(new RegExp(searchedText.value, 'gi'))).slice(0,enteries.value);
    }
  else{
    console.log("no filter ")
    filtered.userList = users.slice(0,enteries.value);
    console.log(filtered.userList)
  }
}

function onClose(){
  alert.display = 0;
  console.log(alert.display);
}

getUsers();
// return filteredList;
</script>
<template>
  <Alert  v-if="alert.display" @close="onClose" :msg="alert.message" :type="alert.type" />
  <div class="container-sm text-center overflow-hidden">
    <h1>User List</h1>
    <Filter @filter="(searchBy,searchedText,enteries)=>filterUserList(searchBy,searchedText,enteries)" />
    <div class="table border my-3 overflow-scroll">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Email</th>
            <th>phone</th>
            <th>role</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filtered.userList" :key="user.id">
            <td><img :src="user.url" style="width: 40px; height: 40px;" :alt="user.firstName"/> </td>
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.location }}</td>
            <td>
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                :data-bs-target="'#aboutMe' + user.id"
              >
                <li class="fa fa-eye text-secondary" />
              </button>
              <UserModal class="modal fade" :id="'aboutMe' + user.id" :user="user" />
              <button type="button" class="btn" @click="onUpdate(user)">
                <li class="fa fa-edit text-success" />
              </button>
              <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#confirmPassword'+user.id">
                <li class="fa fa-trash text-danger" />
              </button>
              <PermissionAlert 
              class="modal fade" :id="'confirmPassword'+user.id"  
              tabindex="-1" 
              @delete="(isConfirmend) => onDelete(isConfirmend,user)" 
              :password="loggedUser.user.password" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>