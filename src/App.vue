<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="Aside"></router-view>
      <router-view name="main"></router-view>

    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import postList from './components/postList'

  export default {
    name: 'App',
    components: {
      Header,
      postList
    }
  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  *::after {
    box-sizing: border-box;
  }

  *::before {
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    font: inherit;
  }
  body{
    background: #e1e1e1;

  }
  .main{
    max-width: 1344px;
    margin: 0 auto;

  }

</style>
