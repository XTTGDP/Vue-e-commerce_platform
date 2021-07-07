<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :class="{active:isActive}"><slot name='item-text'></slot></div> -->
      <div :style="activeStyle"><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path: String,
      activeColor:{
        type:String,
        default:'#ff5777'
      }
    },
    data(){
      return{
        // 要动态决定颜色
        // isActive:true
      }
    },
    computed:{
      isActive(){
        // home -> item1(/home) =true
        // home -> item1(/category) =false
        // home -> item1(/cart) =false
        // home -> item1(/profile) =false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
         this.$router.replace(this.path)
      }
    },
}
</script>

<style>
 .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
 }
 .tab-bar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   vertical-align: middle;
   margin-bottom: 2px;
 }
 /* .active{
   color:#ff5777;
 } */
</style>