<script setup>
import { useOpenStore } from "@/store/use_open";

const openStore = useOpenStore();
</script>

<template>
  <div
    :class="`navbar-header d-flex align-items-center ${
      openStore.open ? '' : 'app-container-hidden'
    }`"
  >
    <a href="javascript:void:(0)" class="mobile-toggle"
      ><i class="ti ti-align-right"></i
    ></a>
    <a class="navbar-brand" href="index.html">
      <img
        src="/static/assets/img/transbus.png"
        class="img-fluid logo-desktop"
        alt="logo"
      />
      <img
        src="/assets/img/logo-icon.png"
        class="img-fluid logo-mobile"
        alt="logo"
      />
    </a>
  </div>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i class="ti ti-align-left"></i>
  </button>
</template>

<style scoped>
.navbar-header {
  transition: all 0.3s ease-out;
}
</style>
