<template>
  <div id="cart">
    <!-- 导航栏 -->
    <cart-nav-bar class="cart-nav-bar" />
    <!-- 商品列表 -->
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartNavBar from "./ChildComps/CartNavBar";
import CartList from "./ChildComps/CartList";
import CartBottomBar from "./ChildComps/CartBottomBar";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  activated() {
    console.log("1");
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
</style>