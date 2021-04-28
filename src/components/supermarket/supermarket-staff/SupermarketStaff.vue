<template>
  <div class="supermarket-staff">
    <va-card class="card">
      <div class="supermarket-staff--header">
        <h1>Staff</h1>
        <va-button color="secondary">Add new</va-button>
      </div>
      <va-data-table
        :fields="fields"
        :data="users"
        no-pagination
      >
        <template slot="actions">
          <va-button flat small color="gray" class="ma-0">
            {{ $t('tables.edit') }}
          </va-button>

          <va-button flat small color="danger" class="ma-0">
            {{ $t('tables.delete') }}
          </va-button>
        </template>
      </va-data-table>
    </va-card>
  </div>
</template>

<script>
import './SupermarketStaff.scss'

export default {
  name: 'SupermarketStaff',
  data: () => ({
    fields: [
      {
        name: 'firstName',
        title: 'First Name'
      },
      {
        name: 'lastName',
        title: 'Last Name'
      },
      {
        name: 'email',
        title: 'Email'
      },
      {
        name: '__slot:actions',
        dataClass: 'text-right'
      }
    ],
    users: [
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      },
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      },
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      },
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      },
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      },
      {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      }, {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      }, {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      }, {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      }, {
        firstName: 'Ashley',
        lastName: 'Mcdaniel',
        fullName: 'Ashley Mcdaniel',
        email: 'ashleymcdaniel@nebulean.com'
      }

    ]
  })
}
</script>

<style scoped>

</style>
