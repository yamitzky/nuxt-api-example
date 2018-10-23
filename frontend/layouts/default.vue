<template>
  <el-container>
    <el-header>
      <div class="header">
        <el-dropdown v-if="username" @command="handleCommand" :show-timeout="0">
          <el-button @click="handleClickProfile">
            User: {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="handleLogout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button v-else @click="handleLogin">Login</el-button>
      </div>
    </el-header>
    <el-main><nuxt/></el-main>
  </el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    username: state => state.auth.username
  }),
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    async handleLogout () {
      await this.logout()

      this.$cookies.remove('username')
      this.$router.push('/')
    },
    handleCommand (command) {
      this[command]()
    },
    handleLogin () {
      this.$router.push('/login')
    },
    handleClickProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>

<style>
body {
  padding-top: 1em;
}
</style>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
</style>

