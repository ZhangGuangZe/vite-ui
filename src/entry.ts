import { App } from "vue";
import ViteButton from "./button/button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { ViteButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(ViteButton.name, ViteButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
