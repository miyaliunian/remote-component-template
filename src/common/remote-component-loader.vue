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
        this.component = Vue.extend(window[name].Component);
    } else  {
      this.$nextTick(() => {
        this.component = Vue.extend(window[name].Component);
      });
    }
  },
  watch: {
    'config.name'() {
      this.component = Vue.extend(window[this.config.name].Component);
    }
  }
}
</script>
