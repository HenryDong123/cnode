<template>
  <div class="article">
    <Loading v-if="isLoading"></Loading>

    <div class="x" v-else>
      <header class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>
            •发布于：{{post.create_at | formatDate}}
          </li>
          <li>
            •作者：{{post.author.loginname}}
          </li>
          <li>
            •{{post.visit_count}}次浏览
          </li>
          <li>
            •来自{{post | tabFormatter}}
          </li>
        </ul>

        <div v-html="post.content" class="topic_content"></div>

      </header>
      <!--回复-->
      <div id="reply">
        <div class="topbar">回复</div>
        <div v-for="(reply,index)  in post.replies" class="replySec">
          <div class="replyUp">
            <router-link :to="{
              name:'user_info',
              params:{
              name:reply.author.loginname
              }
          }">
              <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <router-link :to="{
              name:'user_info',
              params:{
              name:reply.author.loginname
              }
          }">
              <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>
          {{index+1}}楼
        </span>
            <span v-if="reply.ups.length>0">
               赞 {{reply.ups.length}}
        </span>
            <span v-else>
        </span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from './Loading'

  export default {
    name: "Article",
    data() {
      return {
        isLoading: false,
        post: {} //所有属性
      }
    },
    components: {
      Loading
    },
    methods: {
      getArticle() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res) => {

            if (res.data.success === true) {
              this.isLoading = false
              this.post = res.data.data
            }
          }, (err) => {
            console.log(err)
          })
      }

    },
    beforeMount() {
      this.isLoading = true
      this.getArticle()
    },
    watch:{
      '$route'(to,from){
        this.getArticle()
      }
    }
  }
</script>

<style>
  @import url('../assets/markdown-github.css');

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 42px;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;

  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }

  .replySec {
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }
  .markdown-text p{
    font-size: 15px;
    margin: 5px;
  }


</style>
