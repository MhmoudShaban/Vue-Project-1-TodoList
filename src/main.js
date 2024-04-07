import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//ُEdit Emitt
import mitt from "mitt";
const emitter = mitt();
createApp(App).use(store).provide("emitter", emitter).use(router).mount("#app");
