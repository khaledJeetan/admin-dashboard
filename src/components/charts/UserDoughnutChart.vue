
<script setup>
import { Doughnut} from 'vue-chartjs'
import { Chart as ChartJS}from 'chart.js/auto'
import { reactive } from 'vue';

const data = reactive({
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs

});

const chartOptions = reactive({
    responsive: true,
    cutout:70,
    layout:{
        padding:0
    }
});

const labels = reactive ([
        'Red',
        'Yellow',
        'Blue'
    ]);
</script>

<template>
    <v-container>
            <v-row>
                <v-col>
                    <v-sheet class="fw-bold fs-6 ">Account Details</v-sheet>
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <Doughnut
                        :data="data"
                        :update-mode="'active'"
                        :options="chartOptions"
                        style="margin:auto; height:200px;"
                    />
                </v-col>
            </v-row >
            <v-row>
                <v-col  v-for="data in labels" :key="data">
                 <div class="fw-bold fs-4">50<sup>%</sup> </div>
                 <div>
                    <v-icon icon="mdi-circle-medium" color="red"/>
                    <span class="fw-light text-muted">Clients</span>
                 </div>
                </v-col>
            </v-row>
    </v-container>
   
</template>