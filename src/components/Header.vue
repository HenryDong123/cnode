<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>


  .header {
    background: #444444;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  img {
    max-width: 112px;
    margin-left: 50px;

  }

  ul {

    margin: 4px;
  }

  li {
    display: inline-block;
    font-size: 13px;
    padding: 10px 15px;
  }

  a {
    color: #ccc;

    line-height: 20px;

  }


</style>
