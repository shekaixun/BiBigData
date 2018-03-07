<template>
  <div>
    <el-button @click="visible = true" type="success">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>
<script>
  export default{
    mounted(){
      console.log(1111111111)
    },
    data(){
      return{
        visible:false
      }
    }
  }
</script>
<style lang="less">

</style>

