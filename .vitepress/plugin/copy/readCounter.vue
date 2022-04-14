<template>
  <!-- id 将作为查询条件 -->
  <div :id='path' class="leancloud_visitors" :data-flag-title="title">
    <em class="post-meta-item-text">当前阅读量：</em>
    <i class="leancloud-visitors-count">0</i>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      path: '',
      title: ''
    }
  }
}
</script>
<style lang='stylus' scoped>
em, i{
  font-style: normal;
}
</style>
