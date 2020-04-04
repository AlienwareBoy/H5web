<template>
  <div class="about">
    <div id="container" style="height:300px"></div>
    <h1>当前地理位置为{{province}}{{city}}</h1>
    <p id="demo" ref="demo">点击这个按钮，获得您的坐标1</p>
    <!-- <button @click.stop="getLocation()">试一下</button> -->
    <mt-button @click.native='getCurLocation'>开始查询当前位置</mt-button>
    <!-- <mt-button @click.navive="showWatchPosition">开始查询当前位置</mt-button> -->
  </div>
</template>
<script>
  import {
    Toast
  } from 'mint-ui';
  const geolocation = new qq.maps.Geolocation("I4FBZ-ENTW4-T6SUM-DLPF3-RXOK2-KLBDA", "myapp");
  export default {
    name: "about",
    data() {
      return {
        province: '',
        city: '',
        address: ''
      };
    },
    mounted() {
      this.init();
      this.showWatchPosition();
    },
    created() {
      // this.init()
    },
    methods: {
      getCurLocation() {
        geolocation.getLocation(this.nowPostion, this.showErr, this.options);
      },
      showWatchPosition() {
        geolocation.watchPosition(this.showPosition);
      },
      nowPostion(options) {
        console.log(options)
      },
      showErr(err) {
        console.log(err)
      },
      showPosition(postion) {
        try {
          const {
            province,
            city
          } = position;
          this.province = province
          this.city = city
        } catch (e) {
          Toast('获取位置失败请重试')
        }

      },
      init() {
        //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        //设置地图中心点
        var myLatlng = new qq.maps.LatLng(39.916527, 116.397128);
        //定义工厂模式函数
        var myOptions = {
          zoom: 15, //设置地图缩放级别
          center: myLatlng, //设置中心点样式
          mapTypeId: qq.maps.MapTypeId.ROADMAP //设置地图样式详情参见MapType
        }
        //获取dom元素添加地图信息
        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
      },
      // getTXLocation: function () {
      //   var _this = this;

      //   var options = {
      //     timeout: 8000
      //   };
      //   var latitude, longitude;
      //   geolocation.getLocation(showPosition, showErr, options);

      //   function showPosition(position) {
      //     const {
      //       province,
      //       city
      //     } = position;
      //     latitude = position.lat;
      //     longitude = position.lng;
      //     _this.province = province
      //     _this.city = city
      //     _this.getShopmsg(latitude, longitude); //获取到经纬度后的操作
      //   }

      //   function showErr() {
      //     console.log(position);
      //   }
      // },
    }
  };

</script>
