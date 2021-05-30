export const getPieChartData = (themes) => ({
  labels: ['Food', 'Drinks', 'Other'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [themes.success, themes.warning, themes.danger],
    data: [2478, 5267, 734]
  }]
})
