<template>
  <!-- begin app -->
  <div class="app">
    <!-- begin app-wrap -->
    <div class="app-wrap">
      <!-- begin pre-loader -->
      <div class="loader">
        <div class="h-100 d-flex justify-content-center">
          <div class="align-self-center">
            <img src="/static/assets/img/loader/loader.svg" alt="loader" />
          </div>
        </div>
      </div>
      <!-- end pre-loader -->
      <!-- begin app-header -->
      <header class="app-header top-bar">
        <!-- begin navbar -->
        <AppNavBar />
        <!-- end navbar -->
      </header>
      <!-- end app-header -->
      <!-- begin app-container -->
      <div class="app-container">
        <!-- begin app-nabar -->
        <AsideMenu />
        <!-- end app-navbar -->
        <!-- begin app-main -->
        <div class="app-main" id="main">
          <!-- end container-fluid -->
        </div>
        <!-- end app-main -->
        <router-view></router-view>
      </div>
      <!-- end app-container -->
      <!-- begin footer -->
      <AppFooter />
      <!-- end footer -->
    </div>
    <!-- end app-wrap -->
  </div>
  <!-- end app -->
</template>

<script>
import AsideMenu from "/src/components/layout/AsideMenu.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppNavBar from "@/components/layout/AppNavBar.vue";

export default {
  components: {
    AsideMenu,
    AppFooter,
    AppNavBar,
  },
};
</script>
