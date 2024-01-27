<script setup>

</script>

<template>
  <div
      class="col-12 col-sm-10 col-lg-12 d-flex flex-column justify-content-between align-self-start my-4 my-lg-0 mx-auto">


    <!-- ? Erstes Projekt ( Pokedex )-->
    <div class="d-flex justify-content-center flex-column border border-1 border-warning rounded-4 shadow-lg my-5">
      <video class="col-12 col-md-8 d-flex mx-auto my-lg-5" height="270" preload autoplay loop muted>
        <source src="../assets/video/Pokedex-video.mp4" type="video/mp4">
      </video>

      <div class="justify-content-center d-flex mt-lg-3">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3.5rem">{{ $t('ProjectsTitle-1') }}</span>
      </div>

      <div class="justify-content-center d-flex my-2">
        <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">{{ $t('ProjectsLanguages-1') }}</span>
      </div>

      <div class="d-flex my-2 mx-auto" style="max-width: 500px">
        <span class=" text-light justify-content-center flex-wrap fs-6 fw-light text-center mx-3">{{ $t('ProjectsDescription-1') }}</span>
      </div>

      <!-- ? Buttons -->
      <div class="col-12 mx-auto mx-5 d-flex justify-content-around flex-row-reverse" style="max-width: 552px;">
        <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://pokedex.tony-schiller.com" class="d-flex justify-content-center align-self-center ms-1" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                 class="bi bi-play-fill text-dark"
                 viewBox="0 0 16 16">
              <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          </a>
        </div>

        <div class="btn btn-warning col-3 rounded-circle d-flex justify-content-center align-items-center"
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://github.com/tonyS912/Pokedex" class="d-flex justify-content-center align-self-center" target="_blank">
            <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
          </a>
        </div>
      </div>

    </div>

    <!-- ? Zweites Projekt ( Join )-->
    <div class="d-flex justify-content-center flex-column border border-1 border-warning rounded-4 shadow-lg my-5">
      <video class="col-12 col-md-6 d-flex mx-auto my-lg-5" height="320" preload autoplay loop muted>
        <source src="../assets/video/join.mp4" type="video/mp4">
      </video>

      <div class="justify-content-center d-flex mt-lg-3">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3.5rem">{{ $t('ProjectsTitle-2') }}</span>
      </div>

      <div class="justify-content-center d-flex my-2">
        <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">{{ $t('ProjectsLanguages-2') }}</span>
      </div>

      <div class="mx-auto d-flex my-2" style="max-width: 500px">
        <span class="text-light justify-content-center flex-wrap fs-6 fw-light text-center mx-3">{{ $t('ProjectsDescription-2') }}</span>
      </div>

      <!-- ? Buttons -->
      <div class="col-12 mx-auto mx-5 d-flex justify-content-around flex-row-reverse" style="max-width: 552px;">
        <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://join.tony-schiller.com" class="d-flex justify-content-center align-self-center ms-1" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                 class="bi bi-play-fill text-dark"
                 viewBox="0 0 16 16">
              <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          </a>
        </div>

        <div class="btn btn-warning col-3 rounded-circle d-flex justify-content-center align-items-center"
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://github.com/tonyS912/join" class="d-flex justify-content-center align-self-center" target="_blank">
            <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
          </a>
        </div>
      </div>

    </div>

    <!-- ? Drittes Projekt ( Sharkie )
    <div class="d-flex justify-content-center flex-column border border-1 border-warning rounded-4 shadow-lg my-5">
      <img class="col-12 col-md-8 d-flex mx-auto" src="../assets/img/join.png" alt="Laptop with Join Screen">

      <div class="justify-content-center d-flex">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3.5rem">{{ $t('ProjectsTitle-3') }}</span>
      </div>

      <div class="justify-content-center d-flex my-2">
        <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">{{ $t('ProjectsLanguages-3') }}</span>
      </div>

      <div class="mx-auto d-flex my-2" style="max-width: 500px">
        <span class="text-uppercase text-light justify-content-center flex-wrap fw-light text-center mx-3">{{ $t('ProjectsDescription-3') }}</span>
      </div>

      ? Buttons
      <div class="col-12 mx-auto mx-5 d-flex justify-content-around flex-row-reverse" style="max-width: 552px;">
        <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://sharky.tony-schiller.com" class="d-flex justify-content-center align-self-center ms-1" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                 class="bi bi-play-fill text-dark"
                 viewBox="0 0 16 16">
              <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          </a>
        </div>

        <div class="btn btn-warning col-3 rounded-circle d-flex justify-content-center align-items-center"
             style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
          <a href="https://github.com/tonyS912/sharky" class="d-flex justify-content-center align-self-center" target="_blank">
            <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
          </a>
        </div>
      </div>

    </div>-->

  </div>
</template>

<style scoped>

</style>