<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card title="Supermarket Profile">
          <div class="row">
            <div class="flex md4 sm6 xs12">
              <va-input
                v-model="name"
                placeholder="Name"
              />
              <va-input
                v-model="country"
                placeholder="Country"
              />
              <va-input
                v-model="city"
                placeholder="City"
              />
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupermarketProfile',
  data: () => ({
    name: 'ya ustal',
    country: 'Ukraine',
    city: 'Kharkiv'
  })
}
</script>

<style scoped>

</style>
