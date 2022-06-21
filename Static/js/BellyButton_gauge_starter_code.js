// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);


    //Step 1-3 initialize variables that hold arrays for the sample 
    //that is selected from the dropdown menu on the webpage
    var metadata = data.metadata
    //Filter Data for the object with number sample
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(resultArray);

    var result = resultArray[0];
    console.log(result);

    //initialize variables and convert to float
    var wFreq = result.wFreq
    var wFreqFloat = parseFloat(wFreq).toFixed(2)
    console.log(wFreqFloat)
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      title: {text: "Scrubs per Week", font: {size: 18}},
      type: "indicator",
      mode: "gauge+number",
      value: wFreq,
      tickmode: 'linear',
      gauge: {
        axis: {range: [null,10], dtick: 2, tick0: 0 },
        bar: { color: "yellow"}
        bgcolor: "black",
        borderwidth: 2,
        bordercolor: "red",
        steps: [
          { range: [0, 2], color: "blue"},
          { range: [2, 4], color: "lavender"},
          { range: [4, 6], color: "mediumslateblue"},
          { range: [6, 8], color: "royalblue" },
          { range: [8, 10], color: "purple" },
        ]},

      }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: "Belly Button Washing Frequency",
      titlefont: {"size": 25}
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout)
  
    });
    }
