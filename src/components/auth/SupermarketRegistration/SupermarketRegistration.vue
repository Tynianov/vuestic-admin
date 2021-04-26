<template>
  <div class="supermarket-creation-container">
    <div class="supermarket-creation-container--panel">
      <div class="flex xs12 pa-3">
        <div class="d-flex justify--center">
          <va-card class="supermarket-creation-container__card">
            <div v-if="!requestSend">
              <h1 class="text--center">Became a partner</h1>
              <va-separator/>
              <div class="pa-3">
                <va-input placeholder="Supermarket Name"/>
                <va-input placeholder="Email"/>
                <va-input placeholder="Phone number"/>
                <va-input placeholder="First Name"/>
                <va-input placeholder="Last Name"/>
                <div class="d-flex justify--center">
                  <va-button large @click="requestSend = true">Join</va-button>
                </div>
              </div>
            </div>
            <div v-else class="success-registration-container">
              <img :src="require('../../../assets/images/success_img.svg')" alt="">
              <h3>We sent you an email with login credentials</h3>
              <p>Check your inbox and <router-link to="supermarket-login">login</router-link> </p>
            </div>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SupermarketRegistration',
  data: () => ({
    requestSend: false
  })
}
</script>

<style scoped lang="scss">
  .success-registration-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
</style>
