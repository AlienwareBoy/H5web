<template>
  <div id="app">
    <div id="nav">
      <van-nav-bar
        :title="title"
        left-text=""
        :left-arrow="showLeft"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <keep-alive :include="include">
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
      <van-number-keyboard safe-area-inset-bottom />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      include: []
    };
  },
  watch: {
    $route: {
      handler: function(to, from) {
        if (to.meta.keepAlive) {
          !this.include.includes(to.name) && this.include.push(to.name);
        }
        console.log(to, "newval");
      }
    }
  },
  computed: {
    showLeft() {
      return this.$route.meta.showLeft;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {}
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
