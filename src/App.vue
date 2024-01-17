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

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiIl0sInVzZXJfbmFtZSI6IndlYl9tYW5hZ2V8a2hzai1seSIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE3MDU1MDA2OTQsInVzZXJJZCI6ImQyOTlhZDMyOTc3MTQzN2I5YTY3NTU5MDQ5ZTI4NjdlIiwianRpIjoiOWNkNTcyZDYtZjhkZC00ODY5LWE1MTAtYTExNjMyZTgzNDk3IiwiY2xpZW50X2lkIjoid2ViX21hbmFnZSJ9.fM_Wn6yGZJyLOZFaB9CuwULFIuzRVOO8vQJh3KsG8byGq_tpwF6jNfT1rAEvq-a8Busrb2747rh9CMNCcLoKV5PUUVDmYPGdgOb2qsUHyQ5_wYKmoOZeLHJTdrnN1GBlK6FJsitxvXzlvITc098rKJLMKolHLz_tA1h2dXLTbJaspLKF5sfYgJPUs77KSb0MdbVD_h-DCLVlbIz6qt5eIorW2krfuDF4oVt61HHRrkHksqAA9sdmNAvNDdFbjZSh6ezyEJkJpWA8po34-QD1lSgmwQzKwSQuGAvBl9Axya48a-abU5GxuqEUopv1QiqYZvxvuR8Gwrr-Z_6q7mMk4w"  
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
