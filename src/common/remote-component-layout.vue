<template>
  <div >
    <div
      :key="index"
      v-for="(component, index) in components"
    >
    <div>{{ component.config.name }}</div>
    <template v-if="component.config.name === 'common-remote-button.0.0.1'">
      <div
      :is="component.name"
      :key="component + index"
      :config="component.config || {}"
      desc="按钮"
      />
    </template>
    <!-- <template v-if="component.config.name === 'common-remote-image.0.0.1'">
       <div
        :is="component.name"
        :key="component + index"
        :config="component.config || {}"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
    </template> -->
    <!-- <template v-if="component.config.name === 'common-remote-input.0.0.1'">
        <div
        :is="component.name"
        :key="component + index"
        :config="component.config || {}"
        label="文本" 
        v-model="value"  
        placeholder="请输入用户名" 
        :border="true"   
        />
    </template>     -->
    <!-- <template v-else>
      <div
      :is="component.name"
      :key="component + index"
      :config="component.config || {}"
      />
    </template> -->
    </div>
  </div>
</template>
<script>
window.__remote_config__ = {
  components: [
    {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-button.0.0.1",
        "description": "远程button组件",
        "js": "https://miyaliunian.github.io/common-comp/common-remote-button/common-remote-button.0.0.1.umd.js",
        "css": "https://miyaliunian.github.io/common-comp/common-remote-button/common-remote-button.0.0.1.css",
      },
      props: {
        desc: "远程image组件"
      }
    },    
     {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-icon.0.0.1",
        "description": "远程iconFont组件",
        "js": "https://miyaliunian.github.io/common-comp/common-remote-icon/common-remote-icon.0.0.1.umd.js",
        "css": "https://miyaliunian.github.io/common-comp/common-remote-icon/common-remote-icon.0.0.1.css",
      },
      props: {
        desc: "远程image组件"
      }
    },
    {
      "name": "RemoteComponentsLoader",
      "config": {
        "name": "common-remote-image.0.0.1",
        "description": "远程image组件",
        "env":"",
        "url":"",
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
    // {
    //   "name": "RemoteComponentsLoader",
    //   "config": {
    //     "name": "common-remote-map",
    //     "description": "远程地图组件",
    //     "js": "http://10.43.34.5:18001/npm/common-remote-map/index.js",
    //     "css": "http://10.43.34.5:18001/npm/common-remote-map/index.css",
    //   },
    //   props: {
    //     desc: "远程input组件"
    //   }
    // },     
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
      value:"",
      mapId: "mapId"
    };
  },
  created() {
    this.loaded = true;
  },
  mounted(){
      this.components = window.__remote_config__.components
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
<style>
.map-div{
  width: 100vw;
  height: 100vw;
}
</style>

