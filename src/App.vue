<script setup>
import ShortProfile from "@/components/shortProfile.vue";
import DataProfile from "@/components/dataProfile.vue";
import Navbar from "@/components/navbar.vue";
import MyPersonalFooter from "@/components/myPersonalFooter.vue";

</script>

<template>
  <header class="background-dark text-end">
      <navbar></navbar>
  </header>
  <div class="col-lg-12 d-flex flex-row justify-content-center mx-auto" style="max-width: 1440px">
    <aside class="col-lg-3 m-3 m-lg-4 border border-2 border-danger shadow rounded" style="height: fit-content;">
      <short-profile></short-profile>
    </aside>

    <main class="d-none d-lg-flex justify-content-center col-lg-8 mx-auto">
      <data-profile></data-profile>
    </main>
  </div>
  <footer class="mt-5">
    <MyPersonalFooter></MyPersonalFooter>
  </footer>

</template>

<style scoped>


</style>
