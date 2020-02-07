<template>
  <div class="home">
    <HelloWorld msg="开启移动端测试模式" />
    <van-button type="primary" size="normal" :to="{path:'/index'}">开启项目</van-button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return {
      active:'0'
    }
  }
};
</script>
