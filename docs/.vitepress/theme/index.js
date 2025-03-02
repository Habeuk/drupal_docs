import DefaultTheme from "vitepress/theme";
// import { useSidebar } from "vitepress/theme";
import MonComposant from "../components/MonComposant.vue";
import "../styles/custom.scss";
console.log("DefaultTheme : ", DefaultTheme);

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("MonComposant", MonComposant);
  },
};
