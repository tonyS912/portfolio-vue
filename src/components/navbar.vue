<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const navbarTrigger = ref("");

const toggleMobile = () => {
    if (window.innerWidth < 992) {
        navbarTrigger.value = "#responsiveMobile";
    } else {
        navbarTrigger.value = "#responsiveDesktop";
    }
};

// Funktion aufrufen, wenn die Komponente gemountet wird
onMounted(() => {
    toggleMobile();
    window.addEventListener("resize", toggleMobile);
});

// Event-Listener entfernen, wenn die Komponente unmounted wird
onBeforeUnmount(() => {
    window.removeEventListener("resize", toggleMobile);
});

const currentLocale = ref("en"); // Standardmäßig die englische Sprache verwenden
const { locale } = useI18n();

function toggleLanguage() {
    // Die aktuelle Sprache wechseln
    currentLocale.value = currentLocale.value === "en" ? "de" : "en";
    // Die Sprache für die App und i18n ändern
    locale.value = currentLocale.value;
}
</script>

<template>
    <nav
        class="navbar navbar-expand-lg background-dark mx-3 mx-lg-auto"
        style="max-width: 1440px"
    >
        <div class="container-fluid d-flex">
            <a class="navbar-brand text-success fs-3 ps-2" href="#"
                ><img
                    src="../assets/img/logo_tony.png"
                    height="78"
                    width="78"
                    alt="portfolio logo"
            /></a>
            <button
                @click="toggleLanguage"
                class="d-lg-none d-flex me-3 me-lg-4 p-0 border-warning rounded rounded-circle"
            >
                <img
                    v-if="currentLocale === 'en'"
                    src="@/assets/img/germany.png"
                    alt="English"
                    style="height: 56px; width: 56px"
                />
                <img
                    v-else
                    src="@/assets/img/united_kingdom.png"
                    alt="Deutsch"
                    style="height: 56px; width: 56px"
                />
            </button>
            <button
                class="navbar-toggler text-success fs-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span
                    class="navbar-toggler-icon d-flex justify-content-center align-items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </span>
            </button>
            <div
                class="collapse navbar-collapse d-lg-flex justify-content-lg-end pe-lg-3"
                id="navbarNav"
            >
                <button
                    @click="toggleLanguage"
                    class="d-none d-lg-flex me-3 me-lg-4 p-0 border-warning rounded rounded-circle"
                >
                    <img
                        v-if="currentLocale === 'en'"
                        src="@/assets/img/germany.png"
                        alt="English"
                        style="height: 56px; width: 56px"
                    />
                    <img
                        v-else
                        src="@/assets/img/united_kingdom.png"
                        alt="Deutsch"
                        style="height: 56px; width: 56px"
                    />
                </button>
                <ul class="navbar-nav d-flex justify-content-end col-lg-6">
                    <li class="nav-item mx-3 my-3 my-lg-0">
                        <a
                            class="text-success fs-3 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            aria-current="page"
                            href="#home"
                            role="button"
                            >{{ $t("Home") }}</a
                        >
                    </li>
                    <li class="nav-item mx-3 my-3 my-lg-0">
                        <a
                            class="text-success fs-3 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            href="#aboutMe"
                            role="button"
                            >{{ $t("AboutMe") }}</a
                        >
                    </li>
                    <li class="nav-item mx-3 my-3 my-lg-0">
                        <a
                            class="text-success fs-3 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            v-bind:href="navbarTrigger"
                            role="button"
                            >{{ $t("Projects") }}</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
