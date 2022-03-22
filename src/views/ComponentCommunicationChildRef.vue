<template>
  <div style='border: 1px solid red; margin-left: 50px; width: 600px'>
    本页面是child: <br/>
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
}
</script>
