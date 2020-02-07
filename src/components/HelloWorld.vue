<template>
  <div class="hello" @click.stop="click">
    <img src="~IMAGES/logo.png" alt="">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    click(){
      this.$router.push({
        name:'hellowWorld'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  span{
    font-size: 12px;
  }
}
</style>
