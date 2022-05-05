const setClient = (name)=>{
    document.getElementById("client").innerText = name 
}


let name = "Oliver Tzunun";
window.onload = setClient(name);
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'analog',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  lineColors: ['#D34141','#BD3C7D'],
  labels: ['Value']
});

new Morris.Donut({
  // ID of the element in which to draw the chart.
  element: 'circle',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
      { label: 'Oliver', year: '2008', value: 20, color: "red"},
      { label: 'Daniel',year: '2009', value: 10, color: "yellow"},
      { label: 'Carlos',year: '2010', value: 5, color: "#227FCC"},
      { label: 'Vanesa',year: '2011', value: 5, color: "#C2D152"},
      { label: 'Monica',year: '2012', value: 20,color: "#5D45D4"}
  ],
  colors: ["white"],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

