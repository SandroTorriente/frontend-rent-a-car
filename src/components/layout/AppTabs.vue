<template>
  <div class="card card-statistics">
    <div class="card-header"></div>
    <div class="card-body">
      <div class="tab">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active show"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              >Conductores Permanentes</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              >Conductores de Reserva</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div
            class="tab-pane fade active show py-3"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <DataTable
              :data="table1.data"
              :headers="table1.headers"
              :ruta="table1.ruta"
              :isTab="true"
            />
          </div>
          <div
            class="tab-pane fade py-3"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <DataTable
              :data="table2.data"
              :headers="table2.headers"
              :ruta="table2.ruta"
              :isTab="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import DataTable from "/src/components/core/DataTable.vue";

const props = defineProps({
  table1: Object,
  table2: Object,
});
</script>
<style scoped>
  .tab {
    height: 43px;
    position: absolute;
    right: 0;
    width: 82%;
  }
</style>
