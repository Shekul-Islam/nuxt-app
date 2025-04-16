  
  <script setup lang="ts">
  import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
  
  const products = [
    { id: 1, name: 'iPhone', price: 999 },
    { id: 2, name: 'Samsung', price: 899 }
  ]

  </script>

<template>
    <div>
      <DxDataGrid :data-source="products">
        <DxColumn dataField="id" caption="ID" />
        <DxColumn dataField="name" caption="Product Name" />
        <DxColumn dataField="price" caption="Price" />
      </DxDataGrid>
    </div>
  </template>

<style scoped>
</style>
  