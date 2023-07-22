<script setup>

</script>

<template>

  <div class="d-flex justify-content-center flex-column" id="profile">
    <div class="d-flex justify-content-center">
      <div class="col-12 col-sm-10 mx-auto d-flex justify-content-center align-self-center my-4 py-4">
        <img class="w-50 rounded-circle bg-warning" src="../assets/img/tony-profile.png" alt="profile image">
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-center align-self-center pb-4"><label class="text-warning fs-5">Tony
        Schiller</label></div>
    </div>
    <div>
      <div class="d-flex justify-content-center align-self-center pb-4"><label
          class="text-warning text-uppercase text-decoration-underline fs-5">Fullstack Developer</label></div>
    </div>
    <div class="d-flex flex-row justify-content-evenly my-2">
      <div>
        <a href="https://www.linkedin.com/in/tony-schiller-0995aa202" target="_blank">
          <img style="height: 34px;" src="../assets/img/Linkedin.svg" alt="LinkedIn Image">
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/" target="_blank">
          <img style="height: 34px;" src="../assets/img/Youtube.svg" alt="Youtube Image">
        </a>
      </div>
      <div>
        <a href="https://github.com/tonyS912" target="_blank">
          <img style="height: 34px;" src="../assets/img/Github.svg" alt="Github Image">
        </a>
      </div>
    </div>

    <div class="mx-4 my-5 bg-danger" style="height: 3px"></div>
  </div>

  <div class="mx-5" id="about">

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto" id="Age">
      <div class="text-warning">Age:</div>
      <div class="text-warning">32</div>
    </div>

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto" id="country">
      <div class="text-warning">Country:</div>
      <div class="text-warning">Deutschland</div>
    </div>

    <div class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto" id="location">
      <div class="text-warning">Location:</div>
      <div class="text-warning">Ilmenau</div>
    </div>

  </div>

  <!-- ! Horizontal Line  Language Teil-->
  <div class="mx-4 my-5 bg-danger" style="height: 3px"></div>

  <div class="mx-5" id="language">

    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">
      <div class="text-warning text-decoration-underline fs-5">Language</div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>German</span><span>native speaker</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Animated striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 98%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>English</span><span>Level: B2</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 62%; margin: 2px;"></div>
      </div>

    </div>

  </div>

  <!-- ! Horizontal Line  Skills Teil-->
  <div class="mx-4 my-5 bg-danger" style="height: 3px"></div>

  <div class="mx-5" id="skills">
    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">

      <div class="text-warning text-decoration-underline fs-5">Skills</div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>HTML</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 33%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>JavaScript</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 33%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>Vue</span><span>Junior level</span>
      </div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 33%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12">
        <span>Python</span><span>Junior level</span></div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 33%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12"><span>Diskussions Level</span><span>Master level</span>
      </div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 100%; margin: 2px;"></div>
      </div>

      <div class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-warning col-12"><span>Joghurt im Rucksack</span><span>Master level</span>
      </div>
      <div class="progress border border-warning-subtle bg-secondary" role="progressbar"
           aria-label="Warning striped example" aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill"
             style="width: 100%; margin: 2px;"></div>
      </div>

    </div>
  </div>

  <!-- ! Horizontal Line  Extra Skills Teil-->
  <div class="mx-4 my-5 bg-danger" style="height: 3px"></div>

  <div class="mt-5 mx-5" id="extraSkills">
    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">

      <div class="text-warning text-decoration-underline fs-5 mb-4">Extra Skills</div>

      <div class="my-2">
        <i class="bi bi-code-square text-warning fs-4"> <span class="fw-lighter ms-3">Bootstrap, Materialize</span></i>
      </div>

      <div class="my-2">
        <i class="bi bi-code-square text-warning fs-4"> <span class="fw-lighter ms-3">CSS, SCSS</span></i>
      </div>

      <div class="my-2">
        <i class="bi bi-code-square text-warning fs-4"> <span class="fw-lighter ms-3">GIT Knowledge</span></i>
      </div>

    </div>
  </div>

  <!-- ! Horizontal Line  Projekte Teil-->
  <div class="mx-4 my-5 bg-danger" style="height: 3px"></div>

  <div class="mt-5 mx-4 d-flex flex-column" id="Projects">
    <div class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto">

      <div class="text-warning text-decoration-underline ms-4 fs-5">Projects</div>

      <!-- ? Erstes Projekt -->
      <div class="d-flex justify-content-center flex-column border border-3 border-danger rounded-4 shadow-lg my-5">
        <img class="col-12 col-md-8 d-flex mx-auto" src="src/assets/img/join.png" alt="Laptop with Join Screen">

        <div class="justify-content-center d-flex">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3rem">Join</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">Vue, Javascript, Html, css/scss, django</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-white justify-content-center flex-wrap fw-light text-center mx-3">Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.</span>
        </div>

        <!-- ? Buttons -->
        <div class="col-12 col-md-8 mx-auto mx-5 d-flex justify-content-between flex-row-reverse">
          <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
               style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
            <a href="#" class="d-flex justify-content-center align-self-center ms-1">
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
            <a href="#" class="d-flex justify-content-center align-self-center">
              <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
            </a>
          </div>
        </div>

      </div>

      <!-- ? Zweites Projekt-->
      <div class="d-flex justify-content-center flex-column border border-3 border-danger rounded-4 shadow-lg my-5">
        <img class="col-12 col-md-8 d-flex mx-auto" src="src/assets/img/join.png" alt="Laptop with Join Screen">

        <div class="justify-content-center d-flex">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3rem">NIcht Join</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">Vue, Javascript, Html, css/scss, django</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-white justify-content-center flex-wrap fw-light text-center mx-3">Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.</span>
        </div>

        <!-- ? Buttons -->
        <div class="col-12 col-md-8 mx-auto mx-5 d-flex justify-content-between flex-row-reverse">
          <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
               style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
            <a href="#" class="d-flex justify-content-center align-self-center ms-1">
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
            <a href="#" class="d-flex justify-content-center align-self-center">
              <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
            </a>
          </div>
        </div>

      </div>

      <!-- ? Drittes Projekt-->
      <div class="d-flex justify-content-center flex-column border border-3 border-danger rounded-4 shadow-lg my-5">
        <img class="col-12 col-md-8 d-flex mx-auto" src="src/assets/img/join.png" alt="Laptop with Join Screen">

        <div class="justify-content-center d-flex">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3rem">Immer noch nicht Join</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">Vue, Javascript, Html, css/scss, django</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-white justify-content-center flex-wrap fw-light text-center mx-3">Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.</span>
        </div>

        <!-- ? Buttons -->
        <div class="col-12 col-md-8 mx-auto mx-5 d-flex justify-content-between flex-row-reverse">
          <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
               style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
            <a href="#" class="d-flex justify-content-center align-self-center ms-1">
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
            <a href="#" class="d-flex justify-content-center align-self-center">
              <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
            </a>
          </div>
        </div>

      </div>

      <!-- ? Viertes Projekt-->
      <div class="d-flex justify-content-center flex-column border border-3 border-danger rounded-4 shadow-lg my-5">
        <img class="col-12 col-md-8 d-flex mx-auto" src="src/assets/img/join.png" alt="Laptop with Join Screen">

        <div class="justify-content-center d-flex">
        <span class="justify-content-center d-flex fs-1 text-decoration-underline fw-bold text-warning"
              style="margin: -3rem">auch kein Join</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-success justify-content-center flex-wrap fw-bold fs-5 text-center mx-3">Vue, Javascript, Html, css/scss, django</span>
        </div>

        <div class="justify-content-center d-flex my-2">
          <span class="text-uppercase text-white justify-content-center flex-wrap fw-light text-center mx-3">Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.</span>
        </div>

        <!-- ? Buttons -->
        <div class="col-12 col-md-8 mx-auto mx-5 d-flex justify-content-between flex-row-reverse">
          <div class="btn btn-success col-3 rounded-circle d-flex justify-content-center align-items-center "
               style="width: 5.5rem; height: 5.5rem; position: relative; top: 2.75rem">
            <a href="#" class="d-flex justify-content-center align-self-center ms-1">
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
            <a href="#" class="d-flex justify-content-center align-self-center">
              <img class="w-75 me-1 opacity-75" src="../assets/img/github-btn.png" alt="Github-btn icon">
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>


</template>

<style scoped>

</style>