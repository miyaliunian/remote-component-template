<template>
  <div >
    <div
      :key="index"
      v-for="(component, index) in components"
    >
    <div>{{ component.config.name }}</div>
    <template v-if="component.config.name === 'common-remote-image.0.0.1'">
       <div
        :is="component.name"
        :key="component + index"
        :config="component.config || {}"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
    </template>
    <template v-if="component.config.name === 'common-remote-input.0.0.1'">
        <div
        :is="component.name"
        :key="component + index"
        :config="component.config || {}"
        label="文本" 
        v-model="value"  
        placeholder="请输入用户名" 
        :border="true"   
        />
    </template>    
    <template v-else>
      <div
      :is="component.name"
      :key="component + index"
      :config="component.config || {}"
      />
    </template>
    </div>
  </div>
</template>
<script>
window.__remote_config__ = {
  components: [
    {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-image.0.0.1",
        "description": "远程image组件",
        "js": "https://miyaliunian.github.io/common-comp/common-remote-image/common-remote-image.0.0.1.umd.js",
        "css": "https://miyaliunian.github.io/common-comp/common-remote-image/common-remote-image.0.0.1.css",
      },
      props: {
        desc: "远程image组件"
      }
    },
    {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-switch.0.0.1",
        "description": "远程switch组件",
        "js": "https://miyaliunian.github.io/common-comp/common-remote-switch/common-remote-switch.0.0.1.umd.js",
        "css": "https://miyaliunian.github.io/common-comp/common-remote-switch/common-remote-switch.0.0.1.css",
      },
      props: {
        desc: "远程switch组件"
      }
    },        
    {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-input.0.0.1",
        "description": "远程input组件",
        "js": "https://miyaliunian.github.io/common-comp/common-remote-input/common-remote-input.0.0.1.umd.js",
        "css": "https://miyaliunian.github.io/common-comp/common-remote-input/common-remote-input.0.0.1.css",
      },
      props: {
        desc: "远程input组件"
      }
    },    
  ],
}

import RemoteComponentsLoader from './remote-component-loader';

export default {
  name: 'remote-component-layout',
  data() {
    return {
      loaded: false,
      components:[],
      remoteComponents: [],
      value:""
    };
  },
  created() {
    this.loaded = true;
  },
  mounted(){
    // setTimeout(() => {
      this.components = window.__remote_config__.components
    // }, 2000);
  },
  methods: {
  },
  components: {
    RemoteComponentsLoader,
  },
  watch:{
    value(nVal){
      console.log("输入框输入的值",nVal)
    }
  }
  
};
</script>

