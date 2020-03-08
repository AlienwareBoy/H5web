<template>
  <div class="home">
    <HelloWorld msg="开启移动端测试模式" />
    <mt-button type="primary" class="mar-t20" @click.native="handleClick">开启项目</mt-button>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  export default {
    name: "home",
    components: {
      HelloWorld
    },
    data() {
      return {
        active: '0'
      }
    },
    methods: {
      handleClick() {
        this.$router.push({
          path: '/index'
        })
      }
    }
  };

</script>
