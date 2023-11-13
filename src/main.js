import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router'
import store from './store/index.js';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.API_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
  };
  
const app = createApp(App);
const firebaseApp = initializeApp(firebaseConfig);
const pinia = createPinia()
app.use(router);
app.use(store);
app.use(pinia); 
app.use(firebaseApp);
app.component('base-spinner', BaseSpinner);
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);
app.component('base-badge',BaseBadge);
app.mount('#app');
