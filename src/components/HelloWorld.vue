<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <span>张三王五李四</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  span{
    font-size: 30px;
  }
}
</style>
