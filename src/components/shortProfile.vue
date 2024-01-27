<script setup>
import ProjectsOverview from "@/components/projectsOverview.vue";

const date = new Date();
const birth = new Date(1991, 2, 2);
const age = date.getFullYear() - birth.getFullYear();
</script>

<template>
    <div class="d-flex justify-content-center flex-column" id="home">
        <div class="d-flex justify-content-center">
            <div
                class="col-12 col-sm-10 mx-auto d-flex justify-content-center align-self-center my-4 py-4"
            >
                <img
                    class="w-50 rounded-circle bg-warning"
                    src="../assets/img/tony-profile.webp"
                    alt="profile image"
                />
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-center align-self-center pb-4">
                <label class="text-light fs-3">Tony Schiller</label>
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-center align-self-center pb-4">
                <label class="text-light text-uppercase fs-5"
                    ><span class="font-monospace text-success">Fullstack</span>
                    Developer</label
                >
            </div>
        </div>
        <div class="d-flex flex-row justify-content-evenly my-2">
            <div>
                <a
                    href="https://www.linkedin.com/in/tony-schiller-0995aa202"
                    target="_blank"
                >
                    <img
                        style="height: 42px"
                        src="../assets/img/Linkedin.svg"
                        alt="LinkedIn Image"
                    />
                </a>
            </div>
            <!-- <div>
        <a href="https://www.youtube.com/" target="_blank">
          <img style="height: 42px;" src="../assets/img/Youtube.svg" alt="Youtube Image">
        </a>
      </div> -->
            <div>
                <a href="https://github.com/tonyS912" target="_blank">
                    <img
                        style="height: 42px"
                        src="../assets/img/Github.svg"
                        alt="Github Image"
                    />
                </a>
            </div>
        </div>
        <div class="d-flex justify-content-center col-10 d-lg-none mx-auto">
            <a
                class="btn btn-lg btn-success d-flex align-self-start align-items-center mt-5 fs-5"
                href="mailto:info@tony-schiller.com"
                >{{ $t("Contact") }}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-arrow-right ps-2"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                </svg>
            </a>
        </div>

        <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 2px"></div>
    </div>

    <div class="mx-4 mx-lg-0" id="aboutMe">
        <div
            class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center mb-4 mx-auto"
            id="Age"
        >
            <div class="text-light">{{ $t("Age") }}</div>
            <div class="text-light">{{ age }}</div>
        </div>

        <div
            class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto"
            id="country"
        >
            <div class="text-light">{{ $t("Country") }}</div>
            <div class="text-light">{{ $t("CountryInfo") }}</div>
        </div>

        <div
            class="col-12 col-sm-10 d-flex flex-row justify-content-between align-self-center my-4 mx-auto"
            id="location"
        >
            <div class="text-light">{{ $t("City") }}</div>
            <div class="text-light">{{ $t("CityInfo") }}</div>
        </div>
    </div>

    <!-- ! Horizontal Line  Language Teil -->
    <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 2px"></div>

    <div class="mx-4 mx-lg-0" id="language">
        <div
            class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto"
        >
            <div class="text-warning text-decoration-underline fs-5">
                {{ $t("Languages") }}
            </div>

            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>{{ $t("German") }}</span
                ><span>{{ $t("GermanLevel") }}</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 98%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>

            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>{{ $t("English") }}</span
                ><span>{{ $t("EnglishLevel") }}</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 62%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>
        </div>
    </div>

    <!-- ! Horizontal Line  Skills Teil -->
    <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 2px"></div>

    <div class="mx-4 mx-lg-0">
        <div
            class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto"
        >
            <div class="text-warning text-decoration-underline fs-5">
                {{ $t("Skills") }}
            </div>

            <!-- ? HTML Skill Tree -->
            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>HTML / CSS / SCSS</span><span>Mid level</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 80%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>

            <!-- ? JavaScript Skill Tree -->
            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>JavaScript</span><span>Junior level</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 50%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>

            <!-- ? Vue Skill Tree -->
            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>Vue</span><span>Junior level</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 33%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>

            <!-- ? Python Skill Tree -->
            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>Python</span><span>Junior level</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 33%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>

            <!-- ? PHP Skill Tree -->
            <div
                class="d-flex flex-row justify-content-between align-self-start my-4 mb-2 text-light col-12"
            >
                <span>PHP</span><span>Junior level</span>
            </div>
            <div
                class="progress border border-warning bg-secondary"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded-pill"
                    style="width: 33%; margin: 2px; transform: rotateY(180deg)"
                ></div>
            </div>
        </div>
    </div>

    <!-- ! Horizontal Line  Extra Skills Teil -->
    <div class="mx-4 mx-lg-3 my-5 bg-warning" style="height: 2px"></div>

    <div class="mt-4 mx-4 mx-lg-0" id="extraSkills">
        <div
            class="col-12 col-sm-10 d-flex flex-column justify-content-between align-self-start my-4 mx-auto"
        >
            <div class="text-warning text-decoration-underline fs-5 mb-4">
                {{ $t("ExtraSkills") }}
            </div>

            <div class="my-2 d-flex">
                <i class="bi bi-code-square text-success fs-4"></i
                ><span class="text-light fs-5 fw-lighter ms-3"
                    >Bootstrap, Materialize</span
                >
            </div>

            <div class="my-2 d-flex">
                <i class="bi bi-code-square text-success fs-4"></i
                ><span class="text-light fs-5 fw-lighter ms-3"
                    >GIT, Github, Gitlab</span
                >
            </div>
        </div>
    </div>

    <!-- ! Horizontal Line  Projekte Teil -->
    <div
        class="mx-4 mx-lg-3 my-5 bg-warning d-lg-none"
        style="height: 2px"
    ></div>

    <div class="mt-5 mx-4 d-flex flex-column d-lg-none">
        <div
            class="text-warning text-decoration-underline col-12 col-sm-10 mx-auto fs-5"
            id="responsiveMobile"
        >
            {{ $t("Projects") }}
        </div>
        <ProjectsOverview></ProjectsOverview>
    </div>
</template>

<style scoped></style>
