$(document).ready(function(){

    // hook up an event handler for the load button click
    // wait to initialize until the button is clicked

    // $("#initializeButton").click(function(){
      $(document).ready(function () {

        //disable the buttion after it has been clicked
        // $("initializeButton").prop('disabled', true);

        tableau.extensions.initializeAsync().then(function(){


//  //  After initialization, ask Tableau what sheets are available
    const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

    // Find a specific worksheet
    var worksheet = worksheets.find(function (sheet) {
      return sheet.name === "Name of Worksheet I want";
    });

    // Or iterate through the array of worksheets
    worksheets.forEach(function (worksheet) {
      //  process each worksheet...
      // get the summary data for the sheet
 worksheet.getSummaryDataAsync().then(function (sumdata) {

  const worksheetData = sumdata;
  // The getSummaryDataAsync() method returns a DataTable
  // Map the DataTable (worksheetData) into a format for display, etc.
console.log(worksheetData._data[0][0]._value, Math.round(worksheetData._data[0][1]._value));
console.log('test: ' +sumdata + 'test2: '+ Math.round(worksheetData._data[0][1]._value))
// google.charts.load('current', {'packages':['gauge']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//      [worksheetData._data[1][0]._value, Math.round(worksheetData._data[1][1]._value/1000000)],
//      [worksheetData._data[0][0]._value, Math.round(worksheetData._data[0][1]._value/1000000)],
//     [worksheetData._data[2][0]._value, Math.round(worksheetData._data[2][1]._value/1000000)]
//    ]);
    console.log("test3: " + worksheetData._data[2][1]._value)
    console.log("test4: " + worksheetData._data[2][0]._value)
  
    var gauge1 = loadLiquidFillGauge("fillgauge1", Math.round(worksheetData._data[0][1]._value), worksheetData._data[0][0]._value,config1);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "330401";//"#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    var gauge2= loadLiquidFillGauge("fillgauge2", Math.round(worksheetData._data[1][1]._value), worksheetData._data[1][0]._value,config1);
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#D4AB6A";
    config2.textColor = "#553300";
    config2.waveTextColor = "#805615";
    config2.waveColor = "#AA7D39";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.05;
    config2.waveCount = 1;
    config2.maxValue = 2000;
    var gauge3 = loadLiquidFillGauge("fillgauge3", Math.round(worksheetData._data[2][1]._value),worksheetData._data[2][0]._value, config2);
    // var config3 = liquidFillGaugeDefaultSettings();
    // config3.textVertPosition = 0.8;
    // config3.waveAnimateTime = 5000;
    // config3.waveHeight = 0.15;
    // config3.waveAnimate = false;
    // config3.waveOffset = 0.25;
    // config3.valueCountUp = false;
    // config3.displayPercent = false;
    // config3.maxValue=100;
    // var gauge4 = loadLiquidFillGauge("fillgauge4", 270, 'Test',config4);
    
    // var config4 = liquidFillGaugeDefaultSettings();
    // config4.circleThickness = 0.15;
    // config4.circleColor = "#808015";
    // config4.textColor = "#555500";
    // config4.waveTextColor = "#FFFFAA";
    // config4.waveColor = "#AAAA39";
    // config4.textVertPosition = 0.8;
    // config4.waveAnimateTime = 1000;
    // config4.waveHeight = 0.05;
    // config4.waveAnimate = true;
    // config4.waveRise = false;
    // config4.waveHeightScaling = false;
    // config4.waveOffset = 0.25;
    // config4.textSize = 0.75;
    // config4.maxValue = 300;
    // config4.waveCount = 3;
    // var gauge5 = loadLiquidFillGauge("fillgauge5", 270, 'Test',config4);
    // var config5 = liquidFillGaugeDefaultSettings();
    // config5.circleThickness = 0.4;
    // config5.circleColor = "#6DA398";
    // config5.textColor = "#0E5144";
    // config5.waveTextColor = "#6DA398";
    // config5.waveColor = "#246D5F";
    // config5.textVertPosition = 0.52;
    // config5.waveAnimateTime = 5000;
    // config5.waveHeight = 0;
    // config5.waveAnimate = false;
    // config5.waveCount = 2;
    // config5.waveOffset = 0.25;
    // config5.textSize = 1.2;
    // config5.minValue = 30;
    // config5.maxValue = 240
    // config5.displayPercent = false;
    // var gauge6 = loadLiquidFillGauge("fillgauge6", 120, 'Test',config5);

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }

 
}

    )});
    });
     
        }, function(err){
            //something went wrong in initialization
            $("#resultBox").html("Error while Initializing: " + err.toString());
        });

        

        
    });

    
