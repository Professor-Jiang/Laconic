<template>
  <div class="header-container">
    <div class="l-content">
      <el-button class="fold-btn" @click="handleMenu">
        <el-icon size="20"><Fold /></el-icon>
      </el-button>
      <el-button class="fresh-btn">
        <el-icon size="20"><RefreshRight /></el-icon>
      </el-button>
      <span class="title-content">面包屑</span>
    </div>
    <div class="r-content">
      <el-button class="search-btn">
        <el-icon size="20"><Search /></el-icon>
      </el-button>
      <el-dropdown>
        <el-button class="el-dropdown-link user-btn">
          <el-avatar :size="32">
            <img src="../assets/avatar.jpeg">
          </el-avatar>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <el-divider  class="divider"/>
</template>

<script>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  ArrowDown,
} from '@element-plus/icons-vue'
import UserCenter from "@/views/UserCenter.vue";
export default {
  name: "HeaderView",
  data(){
    return{
      avatarUrl : "/avatar.jpeg",
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit('changeCollapse')   //触发store下的方法
    }
  },
  components: {UserCenter}
}
</script>

<style scoped>
.header-container{
  padding-left: 20px;
  padding-right: 20px;
  height:60px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.fold-btn{
  width:50px;
  height: 60px;
  border: none;
}
.fresh-btn, .search-btn, .user-btn{
  width:50px;
  height: 60px;
  border:none;
}

.el-button+.el-button {
  margin-left:0;
  border: none;
}
.title-content{
  margin-left: 14px;
  font-size: 14px;
}
.divider{
  margin:0;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

</style>
