<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 22:45:46
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-16 10:15:36
 * @FilePath: /remote-template/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <RemoteComponentsLayout></RemoteComponentsLayout>
  </div>
</template>

<script>
import RemoteComponentsLayout from './common/remote-component-layout';

export default {
  name: 'App',
  components: {
    RemoteComponentsLayout,
  },
  mounted() {
    // getCampaignInfo().then(res => {
    //   console.log(res);
    // })
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
img {
  vertical-align: top;
}
</style>
