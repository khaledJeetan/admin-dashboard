
<script setup>
import { reactive } from 'vue'
import {Bar} from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = reactive({
    labels:['January','February','March','April','May','June','July','August','Septemper','October','November','December'],
    datasets: [{
    label: 'Testing Date',
    backgroundColor: '#f87979',    
    data: [40, 20, 12]
}],


})

const chartOptions = reactive({
    responsive: true,

});

</script>

<template>
    <Bar :data="data" :options="chartOptions" />
    <!-- <h1>hello World</h1> -->
</template>
