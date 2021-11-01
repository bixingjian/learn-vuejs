import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

// 会在index.html中被引入, 将app, router....整合, 然后mount(相当于render))在id为app的div上
createApp(App).use(router).mount("#app");
