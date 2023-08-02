<script setup>
import ProjectsOverview from "@/components/projectsOverview.vue";

</script>

<template>
  <div class="d-flex flex-column" id="home">
    <div class="d-flex align-items-center my-4 flex-column border border-2 border-danger shadow rounded"
         style="height: fit-content;">
      <div class="col-lg-11 d-flex justify-content-between my-5" id="profileImage">
        <div class="d-flex flex-column">
          <h1 class="d-flex flex-column text-start justify-content-center text-warning">I am Tony Schiller
            <span class="font-monospace text-success text-uppercase">Fullstack</span> Developer</h1>
          <a class="btn btn-lg btn-success d-flex align-self-start align-items-center mt-5 fs-5"
             href="mailto:info@tony-schiller.com">Contact me <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right ps-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></a>
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
      <div class="text-warning fs-2 col-lg-11 mx-auto" id="projects">Projects</div>
      <ProjectsOverview></ProjectsOverview>
    </div>
  </div>

</template>

<style scoped>

</style>