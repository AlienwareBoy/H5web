const list=[{
  path:'/',
  name:'',
  component:resolve => require(['VIEW/Home'], resolve),
  meta:{
    title:'首页',
    keepAlive:false
  }
},{
  path:'/hellowWorld',
  name:'hellowWorld',
  component:resolve => require(['VIEW/About'], resolve),
  meta:{
    title:'首页',
    keepAlive:true
  }
}]

export default list