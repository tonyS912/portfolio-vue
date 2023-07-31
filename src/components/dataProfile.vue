<script setup>
import ProjectsOverview from "@/components/projectsOverview.vue";

</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center my-4 flex-column border border-2 border-danger shadow rounded"
         style="height: fit-content;">
      <div class="col-lg-11 d-flex justify-content-between my-5" id="profileImage">
        <div class="d-flex flex-column">
          <h1 class="d-flex flex-column text-start justify-content-center text-warning">I am Tony Schiller
            <span class="font-monospace text-success text-uppercase">Fullstack</span> Developer</h1>
          <a class="btn btn-success d-flex align-self-start align-items-center mt-5 fs-5"
             href="mailto:info@tony-schiller.com">Contact me <i class="bi bi-arrow-right-short ms-2 fs-2"></i></a>
        </div>
        <img class="col-lg-5 border border-warning rounded-circle" src="../assets/img/tony-profile.png"
             alt="profile image">
      </div>


    </div>
    <div class="col-lg-11 d-flex flex-column align-self-center text-warning my-5" id="aboutMe">
      <h2 class="fs-1">About Me</h2>
      <p class="lh-lg fs-5">since my first Raspberry Pi, I am interested in programming and what you
        can do with it.
        The sheer endless possibilities to create something new are just
        great.
        Whether it's a big project or a small temporary solution, everything is
        possible.
        The only limit is the one you build yourself.</p>
    </div>

    <div>
      <div class="text-warning fs-2 col-lg-11 mx-auto">Projects</div>
      <ProjectsOverview></ProjectsOverview>
    </div>
  </div>

</template>

<style scoped>

</style>