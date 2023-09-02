<template>
  <div class="aside-menu">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        transition="10ms"
        @open="handleOpen"
        @close="handleClose"
    >
      <h3>{{ !isCollapse ? 'Laconic' : 'L'}}</h3>
      <el-sub-menu v-for="item in funcSpace" :key="item.name" :index="item.name">
        <template #title>
          <el-icon><component :is="item.icon"/></el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
          <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">
            <el-icon><component :is="subItem.icon"/></el-icon>
            {{ subItem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item @click="clickMenu(item)" v-for="(item,index) in noChildren" :key="item.name" :index="item.name">
        <el-icon><component :is="item.icon"/></el-icon>
        <template #title>
          {{ item.label }}
        </template>
      </el-menu-item>
      <el-sub-menu v-for="item in hasChildren" :key="item.name" :index="item.name">
        <template #title>
          <el-icon><component :is="item.icon"/></el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
          <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">
            {{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>


    </el-menu>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Watermelon,
  Suitcase,
  Compass,
  User,
  Histogram,
  DataAnalysis,
  IceDrink,
  Cherry,
} from '@element-plus/icons-vue'


export default {
  name: "AsideView",
  data(){
    return{
      funcSpace:[{
        name: '功能空间',
        path: '/func',
        label: '功能空间',
        icon: 'DataAnalysis',
        children:[{
          name:'聊天室',
          path:'/func/chat',
          label:'聊天室',
          icon:'IceDrink',
          url:'/func/chat'
        },{
          name:'琐事记录',
          path:'/func/note',
          label:'琐事记录',
          icon:'Cherry',
          url:'/func/note'
        }]
      }],
      menuData:[{
        name:'首 页',
        path:'/',
        label:'首 页',
        icon:'Watermelon',
        url:'Home/home'
      },{
        name:'购买订阅',
        path:'/purchase',
        label:'购买订阅',
        icon:'Suitcase',
        url:'Purchase/purchase'
      },{
        name:'节点状态',
        path:'/state',
        label:'节点状态',
        icon:'Compass',
        url:'State/state'
      }, {
        name:'我的订单',
        path:'/order',
        label:'我的订单',
        icon:'User',
        url:'Order/order'
      },{
        name:'流量明细',
        path:'/traffic',
        label:'流量明细',
        icon:'Histogram',
        url:'Traffic/traffic'
      },{
          name:'个人中心',
          path:'/user',
          label:'用户中心',
          icon:'User',
          url:'User/user'
      },{
        name:'关于',
        path:'/about',
        label:'关于',
        icon:'Setting',
        url:'About/about'
      }, {
        name:'设置',
        label:'设置',
        icon:'Setting',
        children:[{
          name:'用户设置',
          path:'/user',
          label:'用户设置',
          icon:'setting',
          url:'User/user'
        },{
          name:'角色设置',
          path:'/user',
          label:'角色设置',
          icon:'setting',
          url:'User/user'
        }]
      }],
    }
  },
  methods:{
    handleOpen(key, keyPath){
      console.log(key, keyPath)
    },
    handleClose(key, keyPath){
      console.log(key, keyPath)
    },
    //根据数据中的path（记录了路由文件中地址，跳转
    clickMenu(item){
      // 这里的this指的是vue实例
      this.$router.push(item.path)
    },

  },
  computed:{
    // 数据分为两种
    noChildren(){
      return this.menuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.menuData.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>

.expand-bar{
  margin-bottom: 10px;
}
.el-menu{
  height:100vh;
  h3{
    margin: 0;
    color:#fff;
    text-align: center;
    line-height:48px;
    font-size: 22px;
  }
}
.aside-menu{
  ul{
    border:0;
  }
}
</style>
