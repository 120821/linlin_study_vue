<template>
  <div>
<my-logo :title="title">
    </my-logo>
  </div>
  <div >
    <input type='button' @click='change_title' value='点击修改标题'/><br/>
    <table>
      <tr v-for="blog in blogs">
        <td>
          <router-link :to="{name: 'Blog', query: {id: blog.id}}">
            {{blog.id}}
          </router-link>
        </td>
        <td @click='show_blog(blog.id)'>{{blog.title }}</td>
      </tr>
    </table>
    <router-link :to="{name:'Blog',params: {id:3} }">User</router-link>
  </div>
</template>

<script>
import MyLogo from '@/components/Logo'
const axios = require('axios');

export default {
  data: function() {
    return {
      title: '博客列表页',
      blogs: [
      ]
    }
  },

  methods: {
    show_blog: function(blog_id) {
      console.info("blog_id:" + blog_id)
      this.$router.push({name: 'Blog', query: {id: blog_id}})
    },
    change_title: function(){
      this.title = '好多文章啊(标题被代码修改过了)'
    }
  },

  mounted() {
    axios.get('/api/interface/blogs/all').then((response) => {
       console.info(response)
       this.blogs = response.data.blogs
    }, (response) => {
       console.error(response)
    });
  },

  components: {
   MyLogo
  }
}

</script>

<style >
td {
  border-bottom: 1px solid grey;
}

</style>
