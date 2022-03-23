<template>
	<div>
		asdfjkl;
		<input type="button" @click='get_child_value' value="今天的天气是"/>
		value_in_parent:  {{value_in_parent}}
		<Taday ref="child">
		</Taday>
	</div>
</template>
<script>
import Today from '@/components/Today'
export default{
  data(){
    return{
value_in_parent:'',
    }
  },
    mouted(){
    },
components:{
             Today
           },
methods:{
          get_child_value(){
            this.value_in_parent   = this.$refs.child.value_in_child
          }
        }
}
</script>
