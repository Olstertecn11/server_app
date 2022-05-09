const setClient = (name)=>{
    document.getElementById("client").innerText = name 
}


let name = "Oliver Tzunun";
window.onload = setClient(name);
new Morris.Line({
  element: 'analog',
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  xkey: 'year',
  ykeys: ['value'],
  lineColors: ['#D34141','#BD3C7D'],
  labels: ['Value'],
});


new Morris.Donut({
  element: 'circle',
  data: [
      { label: 'Oliver',year: '2008', value: 20, color: "red",    labelColor: 'red' },
      { label: 'Daniel',year: '2009', value: 10, color: "yellow", labelColor: 'white' },
      { label: 'Carlos',year: '2010', value: 5, color: "#227FCC", labelColor: 'white' },
      { label: 'Vanesa',year: '2011', value: 5, color: "#C2D152", labelColor: 'white' },
      { label: 'Monica',year: '2012', value: 20,color: "#5D45D4", labelColor: 'white' }
  ],
  formatter: function (x) { return x + "%"},
  xkey: 'year',
  ykeys: ['value'],
  labels: ['Value'],
  labelColor: 'white',
});

