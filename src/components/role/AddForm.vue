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
            {{ accion === "Editar" ? "Editar" : "Añadir" }} Nueva Marca de
            Autobús
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
              <form class="modal__form" @submit.prevent="submitForm">
                <div class="modal__form-group">
                  <label for="name">Nombre:*</label>
                  <input
                    type="text"
                    id="rolle_name"
                    rolle_name="rolle_name"
                    v-model="rolle_name"
                    placeholder="Inserte el Nombre "
                    @keypress="onlyLetters($event)"
                  />
                </div>
                <p class="error-message">{{ rolle_nameError }}</p>


                <div class="boton">
                  <input
                    type="submit"
                    value="Aceptar"
                    class="btn btn-success"
                  />
                  <input
                    type="button"
                    value="Cancelar"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, defineProps } from "vue";
import { validateEmptyFields, onlyLetters } from "../utils/validationUtils.js";
import { useSelected } from "./../../store/use_selected.js";
const props = defineProps({
  accion: String,
});
let rolle_name;


if (props.accion === "Editar") {
  const selectedStore = useSelected();

  rolle_name = computed(() => selectedStore.selected.rolle_name ?? "");

} else {
    rolle_name = ref("");

}

const rolle_nameError = ref("");


const resetForm = () => {
    rolle_name.value = "";

    rolle_name.value = "";

};

const submitForm = () => {
  const errors = validateEmptyFields({
    rolle_name: rolle_name.value

  });
  rolle_nameError.value = errors.rolle_nameError || "";
  
  if (
    !rolle_nameError.value
  ) {
    console.log(
      `Nombre: ${rolle_name.value} `
    );
  }
};
onMounted(() => {
  // eslint-disable-next-line no-undef
  $("#verticalCenter").on("show.bs.modal", function (e) {
    resetForm();
  });
});

// // Aquí es donde "envías" el formulario
// const response = await fetch("https://tu-servidor.com/api/clientes", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: name.value,
//     lastName: lastName.value,
//     ci: ci.value,
//     country: country.value,
//   }),
// });

// if (!response.ok) {
//   console.error("Hubo un error al enviar el formulario");
// } else {
//   console.log("Formulario enviado con éxito");
//   resetForm();
// }
</script>

<style scoped>
</style>