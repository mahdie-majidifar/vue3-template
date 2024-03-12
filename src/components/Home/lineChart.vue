<template>
  <div id="chart">
    <VueApexCharts type="line" height="200" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";

import {ref} from "vue";

const series=ref( [{
  name: "Desktops",
  data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}])

const chartOptions= ref({
  chart: {
    height: 200,
        type: 'line',
        zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    },
  },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#fff'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [100]
        },
      },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    show:false
  },

  xaxis: {
    show: false
  },

},

)
</script>