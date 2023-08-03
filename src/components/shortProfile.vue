<script setup>
import ProjectsOverview from "@/components/projectsOverview.vue";

</script>

<template>

  <div class="d-flex justify-content-center flex-column" id="home">
    <div class="d-flex justify-content-center">
      <div class="col-12 col-sm-10 mx-auto d-flex justify-content-center align-self-center my-4 py-4">
        <img class="w-50 rounded-circle bg-warning" src="../assets/img/tony-profile.png" alt="profile image">
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-center align-self-center pb-4"><label class="text-light fs-3">Tony
        Schiller</label></div>
    </div>
    <div>
      <div class="d-flex justify-content-center align-self-center pb-4"><label
          class="text-light text-uppercase fs-5"><span class="font-monospace text-success">Fullstack</span> Developer</label></div>
    </div>
    <div class="d-flex flex-row justify-content-evenly my-2">
      <div>
        <a href="https://www.linkedin.com/in/tony-schiller-0995aa202" target="_blank">
          <img style="height: 42px;" src="../assets/img/Linkedin.svg" alt="LinkedIn Image">
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/" target="_blank">
          <img style="height: 42px;" src="../assets/img/Youtube.svg" alt="Youtube Image">
        </a>
      </div>
      <div>
        <a href="https://github.com/tonyS912" target="_blank">
          <img style="height: 42px;" src="../assets/img/Github.svg" alt="Github Image">
        </a>
      </div>
    </div>

    <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 1px"></div>
  </div>

  <div class="mx-4 mx-lg-0" id="aboutMe">

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center mb-4 mx-auto" id="Age">
      <div class="text-light">Age:</div>
      <div class="text-light">32</div>
    </div>

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto" id="country">
      <div class="text-light">Country:</div>
      <div class="text-light">Deutschland</div>
    </div>

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto" id="location">
      <div class="text-light">Location:</div>
      <div class="text-light">Ilmenau</div>
    </div>

  </div>

  <!-- ! Horizontal Line  Language Teil -->
  <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 1px"></div>

  <div class="mx-4 mx-lg-0" id="language">

    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">
      <div class="text-warning text-decoration-underline fs-5">Language</div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>German</span><span>native speaker</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Animated striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 98%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>English</span><span>Level: B2</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 62%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

    </div>

  </div>

  <!-- ! Horizontal Line  Skills Teil -->
  <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 1px"></div>

  <div class="mx-4 mx-lg-0">
    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">

      <div class="text-warning text-decoration-underline fs-5">Skills</div>

      <!-- ? HTML Skill Tree -->
      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>HTML</span><span>Mid level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 75%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

      <!-- ? JavaScript Skill Tree -->
      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>JavaScript</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 50%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

      <!-- ? Vue Skill Tree -->
      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>Vue</span><span>Junior level</span>
      </div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 33%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

      <!-- ? Python Skill Tree -->
      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>Python</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 33%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

      <!-- ? PHP Skill Tree -->
      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12">
        <span>PHP</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
             style="width: 33%; margin: 2px; transform: rotateY(180deg);"></div>
      </div>

    </div>
  </div>

  <!-- ! Horizontal Line  Extra Skills Teil -->
  <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 1px"></div>

  <div class="mt-4 mx-4 mx-lg-0" id="extraSkills">
    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">

      <div class="text-warning text-decoration-underline fs-5 mb-4">Extra Skills</div>

      <div class="my-2 d-flex">
        <i class="bi bi-code-square text-success fs-4"></i><span class="text-light fs-5 fw-lighter ms-3">Bootstrap, Materialize</span>
      </div>

      <div class="my-2 d-flex">
        <i class="bi bi-code-square text-success fs-4"></i><span class="text-light fs-5 fw-lighter ms-3">CSS, SCSS</span>
      </div>

      <div class="my-2 d-flex">
        <i class="bi bi-code-square text-success fs-4"></i><span class="text-light fs-5 fw-lighter ms-3">GIT, Github, Gitlab</span>
      </div>

    </div>
  </div>

  <!-- ! Horizontal Line  Projekte Teil -->
  <div class="mx-4 mx-lg-3 my-5 bg-danger d-lg-none" style="height: 3px"></div>

  <div class="mt-5 mx-4 d-flex flex-column d-lg-none" >
    <div class="text-warning text-decoration-underline col-12 col-sm-10 mx-auto fs-5" id="responsiveMobile">Projects</div>
    <ProjectsOverview></ProjectsOverview>
  </div>


</template>

<style scoped>

</style>