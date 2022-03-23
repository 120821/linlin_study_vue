<template>
  <div class="hello">
    <p>本页面是parent页面, 会引用    Today</p>
    <input type='button' @click='get_child_value' value="获取child中变量的值"/> :
    value_in_parent:    {{value_in_parent}}
    <br/>
    <Today ref="child"></Today>
  </div>
</template>

<script>
import Today from '@/components/Today'
export default {
  data () {
    return {
      value_in_parent: '',
    }
  },
  mounted(){
  },
  components: {
    Today
  },
  methods: {
    get_child_value(){
      this.value_in_parent = this.$refs.child.value_in_child
    }
  }
}
</script>
