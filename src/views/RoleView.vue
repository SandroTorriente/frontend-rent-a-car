<template>
    <DataTable :data="list" :headers="headers" :ruta="ruta" />
  </template>
  
  <script lang="ts" setup>
    import DataTable from "@/components/core/DataTable.vue";
    import { onMounted, ref } from "vue";
    import { getRolesList } from "@/services/roles";
    import { RoleDTO } from "../types/role";
    import  rolesJson  from "@/mocks/roles.json";
  
    const headers = ['Nombre']
    const ruta = "Roles"
    const list = ref<RoleDTO[]>(rolesJson)
  
  
    // onMounted(async () => {
    //  list.value = await getBusBrandsList()
    // })
  </script>