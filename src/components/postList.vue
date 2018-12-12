<template>
  <div class="postList">
    <Loading v-if="isLoading"></Loading>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar">

            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>

          </div>
        </li>

        <li v-for="post in posts">
          <!--头像-->
          <img class="photo" :src="post.author.avatar_url" alt="">
          <!--回复/浏览-->
          <span class="allcount">
            <span class="reply_count">{{post.reply_count}}</span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits">{{post.visit_count}}</span>
          </span>
          <!--分类-->
          <span
            :class="[{put_good:(post.good === true),put_top:(post.top === true),'topiclist-tab':(post.good !==true && post.top !== true)}]">
            <span>
              {{post | tabFormatter}}
            </span>
          </span>
          <!--标题-->
          <router-link :to="{
            name:'pcontent',
            params:{
              id:post.id,
              name:post.author.loginname
            }

          }">

            <span>
            {{post.title}}
            </span>
          </router-link>

          <!--最新回复-->
          <span class="last_reply">
            {{post.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <!--分页-->
          <pagiNation @handleList="renderList"></pagiNation>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import Loading from './Loading'
  import pagiNation from './pageNation'

  export default {
    name: "postList",
    data() {
      return {
        isLoading: false,
        posts: [],
        postpage:1
      }
    },
    components: {
      Loading,
      pagiNation
    },
    methods: {
      getData() {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          params:{
            page: this.postpage,
            limit: 40
          }

        }).then((res) => {
          console.log(res)
          this.isLoading = false
          this.posts = res.data.data
        }, (err) => {
          alert(err)
        })
      },
      renderList(value){
        this.postpage = value;
        this.getData();
      }

    },
    beforeMount() {
      this.isLoading = true
      this.getData()


    }
  }
</script>

<style scoped>


  .postList {
    background-color: #e1e1e1;
  }

  .posts {
    margin-top: 10px;
  }

  .photo {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .count_of_visits {
    font-size: 10px;
    color: #b4b4b4
  }

  .count_seperator {
    margin: 0 -3px;
    font-size: 10px
  }

  .allcount {
    width: 60px;
    display: inline-block;
    text-align: center;
    font-size: 10px;

  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;

  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #08c;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }


</style>
