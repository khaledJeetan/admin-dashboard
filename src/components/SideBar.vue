<template>
    <div class="container-fluid" style="height: 100dvh;">
      <div class="row row-cols-1">
        <div class="col mb-5 border-1">
          <div class="d-flex justify-content-center">
            <img src="@/assets/logo.png" style="width: 110px;height:110px; border-radius:50%" class="mt-5 mb-3" alt="School" />
          </div>
          <div class="d-flex justify-content-center fs-3 shadow-lg p-3 rounded">NEXT STEP</div>
        </div>
        <div class="col">
          <router-link
            class="btn text-white flex-fill text-center border-bottom w-100"
            to="/dashboard"
          >
            <span class="fa fa-home fs-3" />
            DashBoard
          </router-link>
        </div>
        <div class="col">
          <div class="dropdown">
            <a
              class="btn w-100 border-bottom text-white dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              Users
            </a>
            <ul class="dropdown-menu" area-labelledby="dropdownMenuLink2">
              <li>
                <router-link class="dropdown-item" to="/userlist"
                  >User List</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/userinformation/0">
                  Create User
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </template>
  <script setup>
  </script>
  