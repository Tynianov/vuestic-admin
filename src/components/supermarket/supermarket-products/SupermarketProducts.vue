<template>
  <div class="supermarket-products">
    <va-card class="card">
      <div class="supermarket-products--header">
        <h1>Products</h1>
        <va-input placeholder="Search" class="search-field"/>
        <va-button color="secondary">Add new</va-button>
      </div>
      <va-data-table
        :fields="fields"
        :data="products"
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
import './SupermarketProducts.scss'

export default {
  name: 'SupermarketProducts',
  data: () => ({
    fields: [
      {
        name: 'name',
        title: 'Name'
      },
      {
        name: 'price',
        title: 'Price'
      },
      {
        name: 'category',
        title: 'category'
      },
      {
        name: 'brand',
        title: 'Brand'
      },
      {
        name: '__slot:actions',
        dataClass: 'text-right'
      }
    ],
    products: [
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      },
      {
        name: 'Product1',
        price: 10,
        category: 'category1',
        brand: 'brand1'
      }
    ]
  })
}
</script>

<style scoped>

</style>
