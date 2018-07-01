<template>
  <div class="hello">
    <div class="helloElem">
      <h3>{{headerMsg.header1.msg}}</h3>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <div class="helloElem">
      <h3>{{headerMsg.header2.msg}}</h3>
      <div class="inputType">
        <div class="basicInput">
          <h4>{{headerMsg.header2.inputType.header1.msg}}</h4>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="basicInput">
          <h4>{{headerMsg.header2.inputType.header2.msg}}</h4>
          <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      headerMsg: {
        header1: {
          msg: 'InputNumber 计数器',
          fontSize: 16,
        },
        header2: {
          msg: 'Input 输入框',
          fontSize: 14,
          inputType: {
            header1: {
              msg: '基础用法',
              fontSize: 12,
            },
            header2: {
              msg: '禁用状态',
              fontSize: 12,
            },
            header3: {
              msg: '可清空',
              fontSize: 12,
            },
            header4: {
              msg: '带icon的输入框',
              fontSize: 12,
            },
          }
        }
      },
      num1: 1,
    }
  },
  methods: {
    handleChange(value){
      console.log(value)
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
.helloElem {
  margin: 10px;
}
.inputType {
  margin: 20px;
}
.basicInput {
  border: 1px solid #ebebeb;
  padding: 20px;
  margin: 10px;
}
.basicInput .el-input {
  width: 180px;

}
</style>
