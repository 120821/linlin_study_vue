<template>
  <div>
    <input type='button' @click="say_hi('Jim')" value='Show'/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    say_hi: function(name){
      alert('hi, ' + name)
    },
  }
}
</script>
