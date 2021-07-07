<template>
  <div>
    <nav-bar>
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./CartList.vue";

import { mapGetters } from "vuex";
export default {
  name: "CartNavBar",
  components: {
    CartList,
    NavBar,
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    // mapGetters 两种语法
    ...mapGetters(["cartLength"]),

    // ...mapGetters({
    //   length: "cartLength",
    // }),
  },
};
</script>

<style scoped>
</style>