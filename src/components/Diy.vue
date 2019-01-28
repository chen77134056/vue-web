<template>
  <div class="hello" style="border: 1px solid red">
    自定义内容
    <button @click="get_param">获取参数</button>
    <p>{{$route.params.color}}</p>
    <ul v-for="(value,key) in json">
           <li>{{key}}</li>
    </ul>
  </div>
</template>

<script>
import Mock from 'mockjs'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      str:'',
      json:[]
    }
  },
  mounted:function(){
    this.str='sssss'


    // console.log(!!this.$cookies.get("token1"))
    // if( !!!this.$cookies.get("token1") ){
    //   this.$cookies.set("token1","GH1.1.1689020474.1484362313","1MIN");
    // }

     //this.$session.flash.set('jwt','bbbb')
    // console.log(this.$session.get('jwt'));


    var data = Mock.mock('/home',{
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
      }]
    });

   // console.log(data)

    this.$http.get('/home').then((res)=>{
      this.json=res.body.list;
    //  console.log(res)
    })


  },
  methods:{
        get_param : function () {
          console.log(this.$route.params);
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
