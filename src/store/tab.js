export default {
    state:{
        isCollapse:false //控制菜单的展开还是收起
    },
    mutations:{
        //定义修改isCollapse的方法
        changeCollapse(state){
            state.isCollapse = !state.isCollapse
        }
    }
}
