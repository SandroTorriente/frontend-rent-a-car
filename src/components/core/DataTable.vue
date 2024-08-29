<template>
  <!-- begin app-container -->
  <div class="app-container">
    <!-- begin app-main -->
    <div
      class="app-main"
      id="main"
      :style="{ 'padding-left': isTab ? '0' : '240px' }"
    >
      <!-- begin container-fluid -->
      <div
        class="container-fluid"
        :style="{ padding: isTab ? '0 30px 60px 30px' : '95px 30px 60px 30px' }"
      >
        <!-- begin row -->
        <div class="row">
          <div class="col-md-12 m-b-30">
            <!-- begin page title -->
            <div class="d-block d-sm-flex flex-nowrap align-items-center">
              <div class="page-title mb-2 mb-sm-0">
                <h1>{{ ruta }}</h1>
              </div>
              <div class="ml-auto d-flex align-items-center">
                <nav>
                  <ol class="breadcrumb p-0 m-b-0">
                    <li class="breadcrumb-item">
                      <a href="index.html"><i class="ti ti-home"></i></a>
                    </li>
                    <li class="breadcrumb-item">Tables</li>
                    <li
                      class="breadcrumb-item active text-primary"
                      aria-current="page"
                    >
                      {{ ruta }}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- end page title -->
          </div>
        </div>
        <!-- end row -->
        <!-- begin row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-statistics">
              <div class="card-body">
                <div class="datatable-wrapper table-responsive">
                  <table
                    id="datatable"
                    class="display compact table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th v-for="header in headers" :key="header.id">
                          {{ header }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in data"
                        :key="index"
                        @click="() => selectRow(index, item)"
                        :class="{ 'fila-seleccionada': filaActiva === index }"
                      >
                        <td v-for="(value, i) in item" :key="i">
                          {{ value }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th v-for="header in headers" :key="header.id">
                          {{ header }}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="container-button-father">
          <FatherCrudButtonRoles
            :filaActiva="filaActiva"
            v-if="ruta === 'Roles'"
          />
        </div>
      </div>
      <!-- end container-fluid -->
    </div>
    <!-- end app-main -->
  </div>
  <!-- end app-container -->
</template>

<script setup>
import FatherCrudButtonRoles from "../role/FatherCrudButtonRoles.vue";


import { useSelected } from "./../../store/use_selected";
import { ref, defineProps } from "vue";

const props = defineProps({
  data: Array,
  headers: Array,
  ruta: String,
  isTab: {
    tpe: Boolean,
    default: false,
  },
});

const selectedStore = useSelected();
let filaActiva = ref(null);
const selectRow = (index, item) => {
  filaActiva.value = index;
  selectedStore.selected = item;
};

import { onMounted } from "vue";

onMounted(() => {
  console.log("El valor inicial de ruta es: " + props.ruta);
});
</script>
