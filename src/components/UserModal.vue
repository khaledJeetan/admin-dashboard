<script setup>

const props = defineProps({
  user: Object
})

</script>

<template>
                  <!-- modal testing -->

                  <div class="modal fade" :id="'aboutMe' + user.id">
                <div
                  class="
                    modal-dialog
                    modal-xl
                    modal-dialog-center
                    modal-dialog-scrollable
                  "
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">{{ user.firstName }} Details</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div class="modal-body">
                      <div class="Container-fluid">
                        <div class="row">
                          <div class="col">
                            <img
                              class="img-thumbnail"
                              v-bind="{
                                alt: user.firstName,
                                src: user.url,
                              }"
                            />
                          </div>
                           <div class="col text-start">
                            <p>Id: {{ user.id }}</p>
                            <p>First Name: {{ user.firstName }}</p>
                            <p>Last Name: {{ user.lastName }}</p>
                            <p>Email: {{ user.email }}</p>
                            <p>Phone: {{ user.phone }}</p>
                            <p>Location: {{ user.location }}</p>
                            <p>Role: {{ user.role }}</p>
                            <p>Created Date: {{ user.dateCreated }}</p>
                            <p>Updated Date: {{ user.lastModified }}</p>
                           </div> 
                          <div class="col text-secondary">
                            <a href="#"> <li class="fa fa-print" /> </a>
                            <a href="#"> <li class="fa fa-download" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer"></div>
                  </div>
                </div>
              </div>

              <!-- End Modal Testing -->
</template>

<style scoped>

</style>