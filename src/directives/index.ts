import type { App } from "vue";
import onClickRemoveClass from "./onClickRemoveClass";
// 引入同文件夹下所有ts文件，index文件除外
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("./**/*.ts");
console.log("modules", modules);
// 动态注册所有指令

const directives = {
  install: function (app: App<Element>) {
    Object.keys(modules).forEach(async key => {
      if (key !== "./index.ts") {
        // 对key进行截取，只需要.ts之前 /之后
        const reg = /\/+(.*)\.ts/;
        const match = key.match(reg);
        const name = match?.[1];
        const direct = await modules[key]();
        console.log("name", name);
        // 注册所有自定义指令
        name && app.directive(name, (direct as any)?.default);
      }
    });
  }
};

export default directives;
// const directivesList: any = {
//   // Custom directives
//   onClickRemoveClass
// };
// const directives = {
//   install: function (app: App<Element>) {
//     Object.keys(directivesList).forEach(key => {
//       console.log("key", key);
//       console.log("directivesList[key]", directivesList[key]);
//       // 注册所有自定义指令
//       app.directive(key, directivesList[key]);
//     });
//   }
// };
//
// export default directives;
