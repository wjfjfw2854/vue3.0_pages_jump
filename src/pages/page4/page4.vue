<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div style="width:400px;height:600px;background-color:#444499;"> -->
  <!-- <div style="width:400px;height:600px;background-color:rgba(44,255,255,.4);"> -->
  <div style="width:400px;background-color:rgba(44,255,255,.4);">
    <label>自动生成多页面框架page4---->>></label>
    
    <div style="width:400px;position:relative;">
      <div style="margin-top:15px;width:200px;height:30px;background-color:#dddddd;display:flex;flex-direction:flex-row;align-items:center;">
        <div style="width:100px;display:flex;flex-direction:flex-row;justify-content:center;">名称</div>
        <div style="width:100px;display:flex;flex-direction:flex-row;justify-content:center;">最新</div>
      </div>
      <div v-for="(item,index) in getList" :key="index">
        <div style="display:flex;
                    flex-direction:flex-row;
                    width:200px;"
                    @click="clickItem(index)"
                    >
              <div style="display:flex;
                          flex-direction:flex-row;
                          align-items: center;
                          width:200px;
                          background-color:rgba(170,170,170,.5)"
                          >
                <div style="width:100px;height:50px;display:flex;flex-direction:flex-column;justify-content:center;align-items:center;">
                  <div>
                    <div style="color:#ff4444;font-weight:bold;">{{item.name}}</div>
                    <div>{{item.code}}</div>
                  </div>
                </div>
                <div style="width:100px;display:flex;flex-direction:flex-column;justify-content:center;align-items:center;">
                  {{item.price}}
                </div>
              </div>
        </div>
        <div style="width:200px;height:1px;background-color:rgba(190,190,190,.9)"></div>
      </div>

      <div style="overflow-x: scroll;
                  width:200px;
                  background-color:rgba(44,210,44,.4);
                  position:absolute;
                  top:0px;
                  left:200px;
                  ">
          <div style="display:flex;flex-direction:flex-row;">
            <div v-for="(item,index) in getFieldNames" :key="index">
              <div style="width:100px;height:30px;background-color:#dddddd;display:flex;flex-direction:flex-row;justify-content:center;align-items:center;">
                {{item}}
              </div>
            </div>
          </div>
          <div v-for="(item,index) in getList" :key="index">
            <div style="display:flex;
                      flex-direction:flex-row;
                      height:51px;"
                      @click="clickItem(index)">
              <div style="position:relative;height:51px;" v-for="(t,idx) in item.fields" :key="idx">
                <div style="width:100px;height:50px;display:flex;flex-direction:flex-row;justify-content:center;align-items: center;">{{t.field}}</div>
                <div style="position:absolute;bottom:0px;left:0px;width:100px;height:1px;background-color:rgba(190,190,190,.9)"></div>
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'App',
  name: 'page4',
  components: {
    // HelloWorld
  },
  data() {
    return {
      list:[],
      fieldNameR:[],
    }
  },
  computed:{
    getList(){
      return this.list;
    },
    getFieldNames(){
      return this.fieldNameR;
    },
  },
  created() {
    this.createList();
  },
  methods: {
    createList(){
      const listMid = [];
      for(let i = 0;i < 40;i ++){
        const zf = '8.8%';
        const jme = '8.67亿_'+i;
        const cgzb = '9.34%';
        const zj = '1.28%';
        const hb = '2.66%'; 
        const obj = {
          name:'洪都航空_'+i,//名称
          code:600316,      //代码
          price:36.6,       //最新
          fields:[{field:zf},//涨幅
                    {field:jme},//净买额
                    {field:cgzb},//持股占比
                    {field:zj},//增减
                    {field:hb}//环比
                  ]
        };
        listMid.push(obj);
      }
      this.fieldNameR.push('涨幅');
      this.fieldNameR.push('净买额');
      this.fieldNameR.push('持股占比');
      this.fieldNameR.push('增减');
      this.fieldNameR.push('环比');
      this.list = listMid;
    },
    clickItem(index){
      const stock = this.list[index];
      console.log("em>>>>clickItem index:",index,"--stock:",stock);
      // alert(`点击了第${index+1}行...`);
      window.location.href = '/stockpage.html';
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
