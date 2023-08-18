<script setup>
import { ref } from 'vue';
const props = defineProps({
    password: String,
})

const confirmedPassword = ref("");
const emit = defineEmits(['delete'])
const confirmModal = ref(null);

// emit with argument

function confirm(){
    console.log("Confirming Paswword ...");
    if(props.password === confirmedPassword.value){
        console.log("password Correct");
        emit('delete', 1);
    }
    else{
        console.log("password Wrong");
        emit('delete', 0);
    }
    confirmedPassword.value = ""
    confirmModal.value.click()
}

function close(){
    confirmedPassword.value = "";
}


</script>

<template>

<!-- Modal -->
<div class="modal fade" id="confirmPassword" tabindex="-1" aria-labelledby="confirmPasswordLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="exampleModalLabel">Confirm Password</h5>
        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      <div class="modal-body pt-0">
        <p class="text-start">For your Security, Please Confirm Your Password to continue.</p>
        <input type="password" class="form-control w-75" v-model="confirmedPassword"  placeholder="Password" id="recipient-name">
      </div>
      <div class="modal-footer bg-light">
        <button type="button" @click="close" ref="confirmModal" class="btn bg-white border" data-bs-dismiss="modal">NEVERMIND</button>
        <button type="button" @click="confirm" class="btn btn-dark">CONFIRM</button>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>