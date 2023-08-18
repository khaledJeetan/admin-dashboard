
<script setup>
import { getClients, getVendors, getSuppliers } from "@/api/user.js";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import UserChart from './charts/UserChart.vue'
import  UserDoughnutChart from './charts/UserDoughnutChart.vue';
import RecientActivity from "./RecientActivity.vue";
import OrderStatus from "./OrderStatus.vue";

const route = useRoute();
const router = useRouter();

const messages = reactive(["sdflksdf","sdfsdfsf","sdflksdf","sdfsdfsf","sdflksdf","sdfsdfsf","sdflksdf","sdfsdfsf","sdflksdf","sdfsdfsf","sdflksdf","sdfsdfsf"])
      const dashBox = reactive([
        {
          number: getClients,
          name: "Clients",
          icon: "mdi-account-group",
          color: "pink",
        },
        {
          number: getVendors,
          name: "Vendors",
          icon: "mdi-account-group",
          color: "lila",
        },
        {
          number: getSuppliers,
          name: "Suppliers",
          icon: "mdi-account-group",
          color: "blue",
        },
        {
          number: 0,
          name: "Messages",
          icon: "mdi-inbox",
          color: "gold",
        },
      ])
</script>


<template>

<v-container fluid>

  <!-- first line  -->
  <v-row justify-lg="space-between">
    <v-col class="pa-2 ma-2 col-section" :lg="8" :md="12">
      <v-row no-gutters>
        <v-col>
          <v-sheet class="p-3 pb-0 fw-bold fs-6">Dashboard</v-sheet>
          <v-sheet class="p-3 pt-0 fw-lighter text-black-50">Overview Of Admin Metrics</v-sheet>
        </v-col>
        <v-col cols="8"> 
          <user-chart style="width: auto;" />
        </v-col>
      </v-row>
    </v-col>

    <v-col  class="pa-2 ma-2 col-section" >
     <user-doughnut-chart/>
    </v-col>
  </v-row>

  <!-- Second Section // Cards -->
<v-row class="my-5">
    <v-col  v-for="card in dashBox" :key="card.name">
      <v-card :color="card.color" :class="card.color">
        <v-card-item :title="card.name" :subtitle="card.name"/>
        <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h3"
          cols="8"
        >
          {{card.number}}
        </v-col>

        <v-col class="text-right">
          <v-icon
          obacity="0.5"
            :icon="card.icon"
            size="50"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- third Section -->
  <v-row  justify="space-between" >
    <v-col :lg="4" md="12" class="col-section pa-2 ma-2"> 
    <recient-activity />
  </v-col>
  
  <v-col class="col-section pa-2 ma-2">
    <order-status />
  </v-col>
  </v-row>
</v-container>

</template>

<style scoped>
.col-section{
  background-color: #fff; 
  border-radius: 20px;
}
</style>

<style scoped>
.blue{
  color: #fff;
  background: rgb(73,194,241);
background: linear-gradient(90deg, rgba(73,194,241,1) 35%, rgba(113,143,205,1) 100%);
}
.pink{
  color: #fff;
  background: rgb(231,73,134);
background: linear-gradient(90deg, rgba(231,73,134,1) 35%, rgba(186,83,164,1) 100%);
}

.lila{
  color: #fff;
  background: rgb(135,95,192);
background: linear-gradient(90deg, rgba(135,95,192,1) 35%, rgba(84,71,185,1) 100%);
}

.gold{
  color: #fff;
  background: rgb(248,185,46);
background: linear-gradient(90deg, rgba(248,185,46,1) 35%, rgba(241,131,82,1) 100%);
}
</style>