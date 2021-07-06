<template>
  <div>
    <el-button @click="logoutClick">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logoutClick() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
</style>