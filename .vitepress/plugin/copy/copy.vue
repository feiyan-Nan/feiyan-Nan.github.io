<template>
  <span>
    <span ref="btn" class="v-copy-code-btn" @click="copyClick">{{text}}</span>
  </span>
</template>

<script>
import clipboard from "./clipboard";
export default {
  props: {
    copyText: {
      type: String,
      default: "复制"
    },
    code: String
  },
  data: _ => ({
    text: '复制',
    btn: null
  }),
  mounted () {
    this.btn = document.createElement("div");
    this.btn.style.display = "none";
    document.body.appendChild(this.btn);
  },
  methods: {
    copyClick() {
      clipboard(this.code, this.btn).then(res => {
        this.text = '复制成功'
        _hmt.push(['_trackEvent', '复制代码', 'click'])
        setTimeout(() => {
          this.text = '复制'
        }, 1000)
      });
      // 执行复制具体实现省略
    }
  }
};
</script>

<style>
.v-copy-code-btn {
  position: absolute;
  bottom: 0.8em;
  right: 1em;
  font-size: 12px;
  transition: opacity .2s;
  opacity: 0;
  color: rgba(255,255,255,0.4);
}
.v-copy:hover .v-copy-code-btn {
  cursor: pointer;
  opacity: 1;
}
</style>
