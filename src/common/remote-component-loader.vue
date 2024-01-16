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
  created() {
    const {
      name,
      js,
      css,
    } = this.config;
    const component = window[name];
    if (!component) {
      const script = document.createElement('script');
      const link = document.createElement('link');
      script.src = js;
      link.href = css;
      link.rel= 'stylesheet';
      document.head.appendChild(link);
      document.body.appendChild(script);
      script.onload = () => {
        this.component = Vue.extend(window[name].Component);
      }
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
