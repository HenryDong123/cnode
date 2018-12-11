<template>

  <div class="loading" v-if="isLoading">

  </div>

  <div>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "postList",
    data(){
      return{
        isLoading:false
      }
    }
  }
</script>

<style scoped>

</style>
