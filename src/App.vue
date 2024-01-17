<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 22:45:46
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-17 11:00:08
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

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiIl0sInVzZXJfbmFtZSI6IndlYl9tYW5hZ2V8dG93ZXIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNzA1NDgxOTAzLCJ1c2VySWQiOiI4MzkxMjRyZWh1aWZzZDA5MTIyandlaWRxMSIsImp0aSI6ImM2ZjY2ZDE5LTM3ZDQtNGUzMi04MTQ1LWIyZmM0ZjEwOTQ5OCIsImNsaWVudF9pZCI6IndlYl9tYW5hZ2UifQ.j4SAPEVGYn9-QtyFld7iwzIp5k756S39sS4R2093VVrvlSI03hzQEHwk40DzRALBuZiNos6PGtYe91IPnrcr-3bXD6SDIRcfmkz2hP4hDy_uHApZ0FSdgMpaQv154oFYGPQCWVNKZSH3XBtqPLZ4__LSYseOk-rQtMckBrefDcKMLd2-xxALnxMkWo3vY5aQs2uDaVCR6jcYF1XE4O3a1K_AtyVBgka4rm8JmIWPmwotJfY1mHNegAiIj9_a_q8i3VSxDta7njz8pdkf3Cg26LfpZEvW_GxsTqptNaM54AQO3igk17Wa252UOPii9acL6KXJRclnY8i6jcV-wCrueA"  
    sessionStorage.setItem('Admin-Token', token)
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
