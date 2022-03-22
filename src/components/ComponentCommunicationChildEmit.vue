<template>
  <div style='border: 1px solid red; margin-left: 50px; width: 500px'>
    本页面是child，会以emit的形式向 parent页面传递变量 <br/>

    value_in_child: <input type="text" v-model="value_in_child"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value_in_child: ""
    }
  },

  watch: {
    value_in_child(new_value){
      // Step2 注意这里的emit的第一个参数，是在parent中定义的
      // 第二个参数就是传递给parent的值
      this.$emit("child_page_value_changed", new_value)
      console.info("changed and emitted, value: ", new_value)
    }
  }
}
</script>
