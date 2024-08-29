<template>
    <div
      class="modal fade"
      id="verticalCenter"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verticalCenterTitle">
              Desea eliminar el cliente
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="afuera">
              <div class="modal__">
                <div class="boton">
                  <input type="submit" value="Sí" class="btn btn-success" />
                  <input
                    type="button"
                    value="No"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-success">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped></style>
  