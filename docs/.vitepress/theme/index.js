import DefaultTheme from "vitepress/theme";
import MonComposant from "../components/MonComposant.vue";
import "../styles/custom.scss";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("MonComposant", MonComposant);
  },
};
