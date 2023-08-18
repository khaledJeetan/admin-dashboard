<script setup>
import { loggedUser } from '@/api/user';
        console.log("current user imgUrl: "+loggedUser.user.url);
</script>


<template>
    <div class="container-fluid my-2">
      <div class="col p-2 border shadow topbar">
        <div class="row">
          <div class="col p-3 text-start">
            <i class="fa fa-users" />
            <span class="mx-3">NEXT STEP</span>
          </div>
          <div class="col p-3">
            <div class="input-group border border-2 border-raduis rounded">
              <input
                class="form-control border-0"
                type="text"
                placeholder="Search here..."
                id="search"
              />
              <i class="input-group-text bg-body border-0 px-3 fa fa-search" />
            </div>
          </div>
          <div class="col">
            <div class="dropdown text-center">
              <button
                class="btn row-fluid"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="row">
                  <div class="col">
                    <img
                      v-if="loggedUser.user.url !== null"
                      style="width: 60px"
                      :src = "loggedUser.user.url"
                      v-bind="{ alt: loggedUser.user.firstName }"
                    />
                    <i class="fa fa-user fs-2" v-else />
                  </div>
                  <div class="col text-start">
                    <h6 class="dropdown-toggle">{{ loggedUser.user.firstName }}</h6>
                    <span class="fs-6">{{ loggedUser.user.role }}</span>
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu dropdown-menu-xl">
                <li class="dropdown-item"> <router-link class="dropdown-item" :to="`/userinformation/${loggedUser.user.id}`"
                  >Profile</router-link
                ></li>
                <li class="dropdown-item"> <router-link class="dropdown-item" to="/"
                  >Log out</router-link
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  