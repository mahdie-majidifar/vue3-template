<template>
  <div id="chart">
    <VueApexCharts type="radialBar" class="my-auto" height="200" :options="options" :series="series"></VueApexCharts>
  </div>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";
import {ref} from 'vue'
const series= [44, 55, 67, 83]
const options ={
  chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  colors: ['#f3eeeb', '#e8dcf4', '#e2c4de', '#e7f4fc'],
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}


</script>