<template>
  <div>
    我来自一级页面
    <ProvideLevelTwo></ProvideLevelTwo>
  </div>
</template>

<script>
import ProvideLevelTwo from '@/components/ProvideLevelTwo'
export default {
  data () {
    return {
    }
  },
  components: {
    ProvideLevelTwo
  },
  // 注意这个 provide()，所有在下层组件用到的prop，都可以在这里定义
  provide() {
    return {
      readme_from_level_one: "我是在第一层页面被定义的, 在第三层应该被使用",
    }
  }
}
</script>
