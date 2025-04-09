  <script setup lang="ts">
  import { DxChart, DxSeries } from 'devextreme-vue/chart'
  
  const sales = [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 3000 },
    { month: 'Mar', amount: 7000 }
  ]
  </script>
  
<template>
    <DxChart :data-source="sales">
      <DxSeries argumentField="month" valueField="amount" type="bar" />
    </DxChart>
  </template>
  
 
 <style scoped></style>