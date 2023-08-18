<script setup>
import { addUser,getUsers, updateUser ,users} from '@/api/user.js'
import {role} from '@/api/enum.js'
import { reactive, ref, onMounted } from 'vue';
import {useRoute} from 'vue-router'
import router from '@/router/index.js'
import Alert from './Alert.vue';

const roles = reactive(role);

const route= useRoute();

const isDataEmpty = ref(0);

onMounted(() => {
     var id = route.params.id;
      getUsers();
    })

const alert = reactive({
  display: 0,
  message : "",
  type: "Warning"
})

function onClose(){
  alert.display = 0;
  console.log(alert.display);
}

  var user = reactive(users.filter((u)=>u.id == route.params.id).length !=0 ? users.filter((u)=>u.id== route.params.id)[0] : {
  firstName : "",
  lastName :"",
  email : "",
  phone : "",
  role : "",
  location : "",
  url: ""
})

function onCancel(){
  router.push('/dashboard')
}
function onSave(){
  if (user.email && user.firstName && user.lastName && user.password && user.role ){
    if(route.params.id == 0){
    addUser(user);
  }
  else{
    updateUser(user);
  }
  router.push('/userlist');
  }
  else{
    alert.message = "Please Fill Informaiton."
    alert.display = 1;
    console.log(alert.display);
  }
}


</script>

<template>
  <!-- Alert Error Message -->
  <Alert  v-if="alert.display" @close="onClose" :msg="alert.message" :type="alert.type" />

  <div class="container-fluid">
    <h5>
      {{
        
        parseInt($route.params.id) !== 0
          ? "Update User Info"
          : "Create new User"
      }}
    </h5>
    <hr />

    <form class="row p-3 gap-4">
      <div class="row">
        <h5 class="fw-bolder">User Information</h5>
      </div>

      <!-- First Row -->
      <div class="row">
        <div class="col">
          <label class="form-label">First Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="EX: khaled "
            v-model="user.firstName"
          />
        </div>
        <div class="col">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control" v-model="user.lastName" />
        </div>
        <div class="col">
          <label class="form-label">Email</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div class="col">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <div class="col">
          <label class="form-label">Role</label>
          <select class="form-select form-select-sm" v-model="user.role">
            <option selected disabled>Please Select Role</option>
            <option
              v-for="r in roles"
              :key="r"
              :bind="{ value: r }"
            >
              {{ r }}
            </option>
          </select>
        </div>
      </div>
      <!-- END First Row -->

      <!-- Second Row -->
      <div class="row">
        <div class="col">
          <label> Phone </label>
          <input class="form-control" type="tel" size="10" v-model="user.phone" />
        </div>
        <div class="col">
          <label class="form-label"> Location : </label>
          <input class="form-control" type="text" v-model="user.location" />
        </div>
        <div class="col-5 my-4">
          <img :src="user.url" style="width:40px;height:40px;" alt="No Photo Please Choose One" />
          <label for="imgfile" class="form-label"
            >Upload user Photo <b>(150px X 150px) </b>
          </label>
          <input class="form-control" type="file" id="imgFile" />
        </div>
      </div>
      <!-- End Second Row -->

     
      <!-- END Third Row -->

      <div class="row gap-3">
        <button
          class="col-1 btn btn-md btn-primary"
          type="button"
          @click="onSave"
        >
          {{ parseInt($route.params.id) === 0 ? "create" : "update" }}
        </button>
        <button
          class="col-1 btn btn-md btn-danger"
          type="button"
          @click="onCancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>