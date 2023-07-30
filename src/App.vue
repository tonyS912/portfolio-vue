<script setup>
import ShortProfile from "@/components/shortProfile.vue";
import DataProfile from "@/components/dataProfile.vue";
import Navbar from "@/components/navbar.vue";

</script>

<template>
  <header class="background-dark text-end">
    <a class="btn bi-menu-button d-lg-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#fff689" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </a>
    <nav class="d-none d-lg-flex col-12 justify-content-end mx-auto" style="max-width: 1440px;">
      <navbar></navbar>
    </nav>
  </header>
  <div class="col-lg-12 d-flex flex-row justify-content-center mx-auto" style="max-width: 1440px">
    <aside class="col-lg-3 m-lg-2 border border-2 border-danger shadow rounded" style="height: fit-content;">
      <short-profile></short-profile>
    </aside>

    <main class="d-none d-lg-flex justify-content-center col-lg-8 mx-auto" style="height: 2000px;">
      <data-profile></data-profile>
    </main>
  </div>
</template>

<style scoped>


</style>
