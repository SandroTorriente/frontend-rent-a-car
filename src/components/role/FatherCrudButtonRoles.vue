<template>
    <a
      class="btn btn-block btn-round btn-info"
      @click="abrirModal('Añadir')"
      data-toggle="modal"
      data-target="#verticalCenter"
      >Añadir</a
    >
    <a
      href="javascript:void(0);"
      class="btn btn-block btn-round btn-info"
      @click="abrirModal('Editar')"
      data-toggle="modal"
      data-target="#verticalCenter"
      :class="{ disabled: filaActiva === null }"
      >Editar</a
    >
    <a
      href="javascript:void(0);"
      class="btn btn-block btn-round btn-info"
      @click="abrirModal('Eliminar')"
      data-toggle="modal"
      data-target="#verticalCenter"
      :class="{ disabled: filaActiva === null }"
      >Eliminar</a
    >
    <AddForm
      v-if="mostrarModal && accion === 'Añadir'"
      @cerrar="mostrarModal = false"
    />
    <AddForm
      v-if="mostrarModal && accion === 'Editar'"
      @cerrar="mostrarModal = false"
      :accion="accion"
    />
    <DeleteForm
      v-if="mostrarModal && accion === 'Eliminar'"
      @cerrar="mostrarModal = false"
    />
  </template>
  
  <script lang="js" setup>
  
  import { ref ,defineProps} from "vue";
  import AddForm from "./AddForm.vue";
  
  import DeleteForm from "./DeleteForm.vue";
  
  
  let mostrarModal = ref(false);
  let accion = ref('');
  const abrirModal = (tipoAccion) => {
    accion.value = tipoAccion;
    mostrarModal.value = true;
  
  };
  
  const props = defineProps({
    filaActiva: Number
  });
  </script>
  <!-- Cundo toque editar tiene que estar una casilla marcada y qeu lo cojan los campos  -->
  <style scope></style>