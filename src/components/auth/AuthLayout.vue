<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3 flex-center">
      <router-link class="py-5 flex-center" to="/">
        <va-icon-vuestic />
      </router-link>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <div class="pa-3">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaIconVuestic from '../../iconset/VaIconVuestic'

const tabs = [
  'login',
  'signup'
]

export default {
  name: 'AuthLayout',
  components: { VaIconVuestic },
  data () {
    return {
      selectedTabIndex: 0,
      tabTitles: ['login', 'createNewAccount']
    }
  },
  computed: {
    tabIndex: {
      set (tabIndex) {
        this.$router.push({ name: tabs[tabIndex] })
      },
      get () {
        return tabs.indexOf(this.$route.name)
      }
    }
  }
}
</script>

<style lang="scss">
.auth-layout {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-image: url("../../assets/images/background_pattern.png");
  background-repeat: repeat;

  .supermarket-creation-container,
  .supermarket-login-container {
    &__card {
      min-width: 500px;
      max-width: 600px;
    }
  }

  &__card {
    width: 100%;
    max-width: 600px;
  }

  &__options {
    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }
  }
}
</style>
