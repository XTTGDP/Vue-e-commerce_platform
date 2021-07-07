<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计: {{ totalPrice }}</div>

    <div class="calculate">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        //部分不选中或者全部不选中
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;

  height: 40px;
  line-height: 40px;
  font-size: 14px;

  background-color: #eee;
}
.check-content {
  flex: 1;
  /* align-items: center; */
  margin-left: 10px;
  width: 60px;
}
.check-button {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  flex: 1;
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>