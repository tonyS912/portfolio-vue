<script setup>
import ProjectsOverview from "@/components/projectsOverview.vue";
</script>

<template>
    <div class="d-flex flex-column">
        <div
            class="d-flex align-items-center my-4 flex-column border border-1 border-warning shadow rounded"
            style="height: fit-content"
        >
            <div
                class="col-lg-11 d-flex justify-content-between my-5"
                id="profileImage"
            >
                <div class="d-flex flex-column">
                    <h1
                        class="d-flex flex-column text-start justify-content-center text-light"
                    >
                        Tony Schiller
                        <span class="font-monospace text-success text-uppercase"
                            >Fullstack</span
                        >
                        Developer
                    </h1>
                    <a
                        class="btn btn-lg btn-success d-flex align-self-start align-items-center mt-5 text-white fs-5"
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
                <img
                    class="col-lg-5 border border-warning rounded-circle"
                    src="../assets/img/tony-profile.webp"
                    alt="profile image"
                />
            </div>
        </div>
        <div
            class="col-lg-11 d-flex flex-column align-self-center text-warning my-5"
            id="aboutMe"
        >
            <h2 class="fs-1">{{ $t("AboutMe") }}</h2>
            <p class="lh-lg fs-5 text-light">{{ $t("AboutMeText") }}</p>
        </div>

        <div>
            <div
                class="text-warning fs-2 col-lg-11 mx-auto"
                id="responsiveDesktop"
            >
                <h2 class="fs-1">{{ $t("Projects") }}</h2>
            </div>
            <ProjectsOverview></ProjectsOverview>
        </div>
    </div>
</template>

<style scoped></style>
