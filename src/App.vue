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
import MapRef from './common/MapRef';

export default {
  name: 'App',
  components: {
    RemoteComponentsLayout,
  },
  provide: {
    commonMapRef: new MapRef(),
  },
  mounted() {
    // getCampaignInfo().then(res => {
    //   console.log(res);
    // })

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiIl0sInVzZXJfbmFtZSI6IndlYl9tYW5hZ2V8a2hzai1seSIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE3MDU1ODMzOTYsInVzZXJJZCI6ImQyOTlhZDMyOTc3MTQzN2I5YTY3NTU5MDQ5ZTI4NjdlIiwianRpIjoiMGRmYmY0NjQtNmE3YS00MjQwLTg4NWUtYTA1NWQzMmE4YjU5IiwiY2xpZW50X2lkIjoid2ViX21hbmFnZSJ9.nB0YC7idCW1fjmLqAsTk4iKtYTF6DSGWYQ3WCIFHKLxT51leKF-rICUo3t8N7PSTYZ2XPvmiqjaBdMnkzTIpqzOo5yysQBJuK_NaQXWhve41LqjaUsnnzIreu-hVGWTbfSUwlFLTJlFf98Ti7wgJ1e_F7-Jn-LwuEOPMn3WIYQwvzEKt9hhwkdZ2VfaGLUs50T8aVdyOSuglQG9KzJsPibfkJ5wSgaqYiP1vDf6Bm2HGmPCdFa3efoOTsWIV5Iv_vbhld6a6m8Mj5xO4eQX3WfyOR2IPL-CjfnS3uH25vr6BwiBl4_NirZZ1SckhkDJuPvl9LMIgBPJmwl9sYKGiZQ"  
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
