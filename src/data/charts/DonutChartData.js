let generatedData

export const getDonutChartData = (themes) => {
  if (generatedData) {
    generatedData.datasets[0].backgroundColor = [themes.danger, themes.info, themes.success]
  } else {
    generatedData = {
      labels: ['North America', 'South America', 'Australia'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: [themes.danger, themes.info, themes.success],
        data: [2478, 5267, 734]
      }]
    }
  }

  return generatedData
}
