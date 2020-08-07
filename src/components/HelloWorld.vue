<template>
<!-- 这里router-link to="newcontact"会把路由导航到http://localhost:8080/#/newcontact   -->
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
