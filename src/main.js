import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import UIComponents from "@/components/UI";
import router from "./router";
import store from "@/store";

const app = createApp(App);

UIComponents.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
