<template>
  <div class="root">
    <el-form label-width="120px">
      <el-form-item label="User name">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" placeholder="type `hogehoge` to login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: mapState(['auth/redirectTo']),
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async handleLogin () {
      try {
        await this.login(this.form)
        this.$cookies.set('username', this.form.username)
        const redirectTo = this.$cookies.get('redirectTo') || '/'
        this.$cookies.remove('redirectTo')
        this.$router.push(redirectTo)
      } catch (e) {
        const { response: { data: { error } } } = e
        this.$message({
          message: error,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
.root {
  width: 80%;
  margin: 3em auto 0;
}
</style>
