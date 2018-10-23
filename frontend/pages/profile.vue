<template>
  <div>
    <h1>Profile</h1>
    {{ username }} has {{ point }} points!
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapState({
    point: state => state.point.point,
    username: state => state.auth.username
  }),
  async fetch ({ store }) {
    await store.dispatch('point/load')
  }
}
</script>
