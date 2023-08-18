
<script setup>
import { reactive, ref } from 'vue';
import { VDataTableServer } from 'vuetify/lib/labs/components.mjs';
const itemsPerPage = ref(5);
const totalItems = ref(1);
const loading = ref(false);
const search = ref("");
const items = reactive([
    {
        id: 1,
        customer: 'khaled',
        from: 'nablus',
        price: 123,
        status: 'pending'
    }
])
const headers = reactive([
    {
        title:'ID',
        align: 'start',
        sortable: false,
        key: 'id'
    },
    {
        title:'Customer',
        align: 'end',
        key: 'customer'
    },
    {
        title:'From',
        align: 'end',
        key: 'from'
    },
    {
        title:'Price',
        align: 'end',
        key: 'price'
    },
    {
        title:'Status',
        align: 'end',
        key: 'status'
    }

])

function loadItems(){
    loading.value=false;
    
    
}
</script>

<template>
    <v-container>
        <v-row>
            <h3>Order Status</h3>
            <p class="text-black-50"></p>
        </v-row>
        <v-row>
            <v-col>
                <v-btn-group :density="'compact'" >
                    <v-btn prepend-icon="mdi-plus-circle" color="red" class="mx-1 text-center rounded"> Add</v-btn>
                    <v-btn icon="mdi-archive" icon-color="#F5F6FA" color="#EDEDED" class="mx-1 p-1 rounded text-black-50" />
                    <v-btn icon="mdi-delete" color="#EDEDED" class="mx-1 p-1 rounded text-black-50 " /> 
                    <v-btn icon="mdi-plus-circle" color="#EDEDED" class="mx-1 p-1 rounded text-black-50" />
                </v-btn-group>
            </v-col>
            <v-spacer />
            <v-col>
                <v-text-field :type="text" append-inner-icon="mdi-magnify" placeholder="search" v-model="search" single-line="0"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
            </v-col>
        </v-row>
        <v-row>
            <v-data-table-server 
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="items"
            :loading="loading"
            hover="#6398DB"
            :search="search"
            :select-strategy="'all'"
            item-value="customer"
            show-select="true"

            class="elevation-5"
            @update:options="loadItems"
            ></v-data-table-server>
            {{ search }}
        </v-row>
    </v-container>
</template>
