<template>
  <div>
    <h1>SPA (Nuxt) x API example!</h1>
    <ul>
      <li>Frontend: Nuxt</li>
      <li>API: Python(sanic)</li>
    </ul>
    <p v-if="username">You are {{ username }}. <nuxt-link to="/profile">Check profile</nuxt-link>.</p>
    <p v-else>You are not logged in yet. <nuxt-link to="/login">Try to login</nuxt-link>.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    username: state => state.auth.username
  }),
}
</script>