import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Translations Datas
import enTranslation from './i18n/en/translation.json';
import deTranslation from './i18n/de/translation.json';

const i18n = createI18n({
    locale: 'en', // Standardmäßig die englische Sprache verwenden
    allowComposition: true,
    fallbackLocale: 'en',
    messages: {
        en: enTranslation,
        de: deTranslation,
    }
});

const app = createApp(App)
app.use(i18n)
app.mount('#app')
