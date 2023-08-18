
<script setup>
import { reactive } from "vue";

const activities = reactive({
  activity: [
    {
      id: 0,
      type: "New Order",
      message: "Hamo Added a new Order",
      date: new Date(),
      icon: "mdi-wallet-plus-outline",
      color: "blue",
    },
    {
      id: 1,
      type: "New Order",
      message: "Hamo Added a new Order",
      date: new Date(),
      icon: "mdi-wallet-plus-outline",
      color: "blue",
    },
    {
      id: 2,
      type: "New Order",
      message: "Hamo Added a new Order",
      date: new Date(),
      icon: "mdi-wallet-plus-outline",
      color: "blue",
    },
    {
      id: 3,
      type: "New Order",
      message: "Hamo Added a new Order",
      date: new Date(),
      icon: "mdi-wallet-plus-outline",
      color: "blue",
    },
    {
      id: 4,
      type: "New Order",
      message: "Hamo Added a new Order",
      date: new Date(),
      icon: "mdi-wallet-plus-outline",
      color: "blue",
    },
  ],
});
</script>

<template>
  <v-container fluid class="p-1">
    <v-sheet class="mb-5" >Recient Activity</v-sheet>
    <v-timeline truncate-line="start" side="end">
      <v-timeline-item
        v-for="item in activities.activity"
        :key="item.id"
        fill-dot
        :dot-color="item.color"
        :density="compact"
        :max-height="100"
        class="bg-danger"
      >
      <template v-slot:icon>
        <v-icon :icon="item.icon" color="white" size="20"></v-icon>
      </template>
        <template v-slot:opposite>
          <p class="text-black-50 time">5min ago</p>
        </template>

          <div>
            <strong>{{item.type}}</strong>
          </div>
          <div class="text-caption">{{item.message}}</div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style scoped>
.time{
    font-size: small;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
}
</style>