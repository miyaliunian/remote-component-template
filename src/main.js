/*
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-12 13:10:39
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-17 10:54:37
 * @FilePath: /remote-component-template/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";

window.Vue = Vue;

function AutoResponse(width = 375) {
  const target = document.documentElement;
  if (target.clientWidth >= 600) {
    target.style.fontSize = "80px";
  } else {
    target.style.fontSize = (target.clientWidth / width) * 100 + "px";
  }
  document.body.style.fontSize = "16px";
}
AutoResponse();
window.addEventListener("resize", () => AutoResponse());

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
  },

  render: (h) => h(App),
}).$mount("#app");
