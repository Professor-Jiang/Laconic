<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AsideView  from './views/AsideView.vue'
import HeaderView  from './views/HeaderView.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside  id="aside-menu-id" style="width:20%;" :isCol="isCollapse">
        <!-- 侧边栏  -->
        <AsideView/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0;"><HeaderView/></el-header>
        <el-main style="background-color:whitesmoke;">
          <!-- 路由视图,匹配到的组件会渲染到这里 -->
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
export default {
  name: "AsideView",
  computed:{
    isCollapse(){
      var isCol = this.$store.state.tab.isCollapse
      var o = document.querySelector("#aside-menu-id");
      if(o!=null){
        if(isCol){
          o.style = "width:auto";
        }else{
          o.style = "width:20%";
        }
      }


    }
  }
}
</script>


<style lang="less">

html,body{
  margin: 0;
  padding:0;
}
</style>
