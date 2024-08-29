<script setup>
import { useOpenStore } from "@/store/use_open";

const openStore = useOpenStore();
</script>

<template>
  <aside :class="`app-navbar ${openStore.open ? '' : 'app-container-hidden'}`">
    <!-- begin sidebar-nav -->
    <div class="sidebar-nav scrollbar scroll_light">
      <ul class="metismenu" id="sidebarNav">
        <li>
          <a class="has-arrow" href="javascript:void(0)" aria-expanded="false"
            ><i class="nav-icon ti ti-layout-column3-alt"></i
            ><span class="nav-title">Gestión</span></a
          >
          <ul aria-expanded="false">
            <li><router-link to="/clientes">Carros</router-link></li>
            <li>
              <router-link to="/gruposTuristicos"
                >Categorias</router-link
              >
            </li>
            <li><router-link to="/solicitudes">Conductores</router-link></li>
            <li><router-link to="/marcas">Marcas de carro</router-link></li>
            <li><router-link to="/autobuses">Metodos de pago</router-link></li>
            <li><router-link to="/servicios">Modelos de carro</router-link></li>
            <li>
              <router-link to="/serviciosRealizados"
                >Paises</router-link
              >
            </li>
            <li><router-link to="/hojasRuta">Turistas</router-link></li>
            <li><router-link to="/hojasRuta">Usuarios</router-link></li>
            <li><router-link to="/roles">Roles</router-link></li>
          </ul>
        </li>

        <li>
          <a class="has-arrow" href="javascript:void(0)" aria-expanded="false"
            ><i class="nav-icon ti ti-layout-column3-alt"></i
            ><span class="nav-title">Reportes</span></a
          >
          <ul aria-expanded="false">
            <li>
              <router-link to="/actividadesRealizadas"
                >Actividades Realizadas</router-link
              >
            </li>
            <li>
              <router-link to="/infomreDiscrepancias">
                Discrepancias
              </router-link>
            </li>
            <li>
              <router-link to="listadoCarros">Listado de Carros </router-link>
            </li>
            <li>
              <router-link to="/listadoChoferes"
                >Listado de Choferes
              </router-link>
            </li>
            <li>
              <router-link to="/listadoAlquiler"
                >Listado de Alquiler</router-link
              >
            </li>
            <li>
              <router-link to="/conductoresReportes"
                >Localizar Choferes</router-link
              >
            </li>
            <li><router-link to="/paises">Paies</router-link></li>
            <li>
              <router-link to="/informeIngresos"
                >Informe de Ingresos</router-link
              >
            </li>
            <li><router-link to="/hojaRuta">Hojas de Ruta</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- end sidebar-nav -->
  </aside>
</template>
<script setup lang="ts"></script>
