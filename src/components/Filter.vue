<script setup>
import searchCritiria from '@/api/search.js'
import { onUpdated, ref} from 'vue'
const searchBy = ref('email');
const searchedText = ref('');
const enteries = ref(10);
const emit = defineEmits(['filter'])

onUpdated(()=>{
  console.log("emit event Filter")
  emit('filter',searchBy,searchedText,enteries)
})

</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-auto order-4">
        <div class="row p-1">
          <label class="form-label text-end col"> Search By: </label>
          <select class="form-select form-select-sm col" v-model="searchBy">
            <option selected disabled>Select Search Option</option>
            <option
              v-for="r in searchCritiria"
              :key="r"
              :value="r"
            >
              {{ r }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-auto order-5">
        <div class="row p-1">
          <label class="form-label text-end col"> Search: </label>
          <input
            type="text"
            class="form-control col"
            v-model="searchedText"
          />
        </div>
      </div>
      <div class="col-auto me-auto text-start">
        <div class="row p-1">
          <label class="col-2 form-label"> Show</label>
          <input type="number" v-model="enteries" class="form-control col" />
          <label class="col form-label">Enteries</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 0px;
}
.right {
  float: right;
}
.left {
  float: left;
}
</style>
