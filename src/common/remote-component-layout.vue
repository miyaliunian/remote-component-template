<!--
 * @Description  : 
 * @Version      : V1.0.0
 * @Author       : Maws
 * @Date         : 2024-01-17 19:12:51
 * @LastEditors  : Maws
 * @LastEditTime : 2024-01-17 19:12:52
 * @FilePath     : remote-component-layout.vue
 * Copyright 2024 Maws, All Rights Reserved. 
 * 2024-01-17 19:12:51
-->
<template>
  <div>
    <div :key="index" v-for="(component, index) in components">
      <div>{{ component.config.name }}</div>
      <!-- <template v-if="component.config.name === 'common-remote-image.0.0.1'">
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
    </template> -->
      <div
        v-if="component.config.name === 'common-remote-map'"
        :id="mapId"
        class="map-div"
      >
        <div
          :is="component.name"
          :mapId="mapId"
          :key="component + index"
          :config="component.config || {}"
          chooseMapMemoryKey="monitorWarnChooseMap"
          @initMapSuccess="initMapSuccess"
          @onMapTypeChange="onMapTypeChange"
          @beforeMapTypeChange="beforeMapTypeChange"
        />
      </div>
      <div
        v-else-if="component.config.name === 'common-remote-tree'"
        :id="mapId"
      >
        <div
          :is="component.name"
          title="摄像机列表"
          :mapObj="mapObj"
          :mapId="mapId"
          :currentSelectFunction="currentSelectFunction"
          :key="component + index"
          :config="component.config || {}"
        />
      </div>
      <div v-else-if="component.config.name === 'common-remote-footer'">
        <div
          :is="component.name"
          :key="component + index"
          :config="component.config || {}"
          @toCloseArea="toCloseArea"
          @toOpenArae="toOpenArae"
          @selectFunction="selectFunction"
        />
      </div>
    </div>
  </div>
</template>
<script>
window.__remote_config__ = {
  components: [
    // {
    //   "name": "RemoteComponentsLoader",
    //   "config": {
    //     "name": "common-remote-image.0.0.1",
    //     "description": "远程image组件",
    //     "js": "https://miyaliunian.github.io/common-comp/common-remote-image/common-remote-image.0.0.1.umd.js",
    //     "css": "https://miyaliunian.github.io/common-comp/common-remote-image/common-remote-image.0.0.1.css",
    //   },
    //   props: {
    //     desc: "远程image组件"
    //   }
    // },
    // {
    //   "name": "RemoteComponentsLoader",
    //   "config": {
    //     "name": "common-remote-switch.0.0.1",
    //     "description": "远程switch组件",
    //     "js": "https://miyaliunian.github.io/common-comp/common-remote-switch/common-remote-switch.0.0.1.umd.js",
    //     "css": "https://miyaliunian.github.io/common-comp/common-remote-switch/common-remote-switch.0.0.1.css",
    //   },
    //   props: {
    //     desc: "远程switch组件"
    //   }
    // },
    // {
    //   "name": "RemoteComponentsLoader",
    //   "config": {
    //     "name": "common-remote-input.0.0.1",
    //     "description": "远程input组件",
    //     "js": "https://miyaliunian.github.io/common-comp/common-remote-input/common-remote-input.0.0.1.umd.js",
    //     "css": "https://miyaliunian.github.io/common-comp/common-remote-input/common-remote-input.0.0.1.css",
    //   },
    //   props: {
    //     desc: "远程input组件"
    //   }
    // },
    {
      name: "RemoteComponentsLoader",
      config: {
        name: "common-remote-map",
        description: "远程地图组件",
        js: "http://10.43.34.5:18001/npm/common-remote-map/index.js",
        css: "http://10.43.34.5:18001/npm/common-remote-map/index.css",
      },
      props: {
        desc: "远程input组件",
      },
    },
    {
      name: "RemoteComponentsLoader",
      config: {
        name: "common-remote-tree",
        description: "远程摄像机树组件",
        js: "http://10.43.34.5:18001/npm/common-remote-tree/index.js",
        css: "http://10.43.34.5:18001/npm/common-remote-tree/index.css",
      },
      props: {
        desc: "远程tree组件",
      },
    },
    {
      name: "RemoteComponentsLoader",
      config: {
        name: "common-remote-footer",
        description: "远程摄像机树组件",
        js: "http://10.43.34.5:18001/npm/common-remote-footer/index.js",
        css: "http://10.43.34.5:18001/npm/common-remote-footer/index.css",
      },
      props: {
        desc: "远程footer组件",
      },
      mapObj: {},
    },
  ],
};

import RemoteComponentsLoader from "./remote-component-loader";

export default {
  name: "remote-component-layout",
  data() {
    return {
      loaded: false,
      components: [],
      remoteComponents: [],
      currentSelectFunction: [],
      value: "",
      mapId: "monitorWarn-map",
      map: null,
      mapInstance: null,
    };
  },
  created() {
    this.loaded = true;
  },
  mounted() {
    // setTimeout(() => {
    this.components = window.__remote_config__.components;
    // }, 2000);
  },
  methods: {
    /**
     * footer组件抛出方法
     */
    toCloseArea(close, currentSelectFunction) {
      console.log("⭐⭐⭐toCloseArea", close, currentSelectFunction);
      this.isAllOpen = close;
      this.currentSelectFunction = currentSelectFunction;
    },
    toOpenArae(open) {
      console.log("⭐⭐⭐toOpenArae", open);
      this.isAllOpen = open;
    },
    selectFunction(selectArray) {
      console.log("⭐⭐⭐selectFunction", selectArray);
      this.currentSelectFunction = selectArray;
    },
    initMapSuccess(params) {
      const { map, CTMapType, mapInstance } = params;
      this.mapLoadingSuccess(map, CTMapType, mapInstance);
    },
    onMapTypeChange(params) {
      const { map, CTMapType, mapInstance } = params;
      this.mapLoadingSuccess(map, CTMapType, mapInstance);
    },
    beforeMapTypeChange() {
      this.mapReady = false;
    },
    /**
     * 地图加载成功执行
     */
    mapLoadingSuccess(map, CTMapType, mapInstance) {
      this.mapObj = {
        map: map,
        mapInstance: mapInstance,
        mapId: this.mapId,
      };
    },
  },
  components: {
    RemoteComponentsLoader,
  },
  watch: {
    value(nVal) {
      console.log("输入框输入的值", nVal);
    },
  },
};
</script>
<style>
.map-div {
  width: 100vw;
  height: 100vw;
}
</style>

