<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 23:25:45
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-02-09 10:24:41
 * @FilePath: /remote-component-template/src/common/remote-component-loader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <component
      v-if="component"
      :is="component"
      v-bind="$attrs"
      v-on="$listeners"
  />
</template>

<script>
import Vue from 'vue';
import {scriptLoad} from './scriptLoad'
export default {
  name: 'remote-component-loader',
  props: {
    config: {},
  },
  data() {
    return {
      component: '',
    }
  },
   async created() {
    const {
      name,
    } = this.config;
    const component = window[name];
    if (!component) {
        await scriptLoad(this.config)
        // console.log(window[name].Component)
        // Vue.use(window[name].Component)
        this.component = window[name].Component;
        // this.component = Vue.extend(window[name].default);
        // this.component = Vue.extend(window[name].Component);
    } else  {
      this.$nextTick(() => {
        // this.component = Vue.extend(window[name].Component);
        // this.component = Vue.extend(window[name].default);
      });
    }
  },
  watch: {
    'config.name'() {
        this.component = Vue.extend(window[name].Component);
      // this.component = Vue.extend(window[this.config.name].default);
    }
  }
}
</script>
