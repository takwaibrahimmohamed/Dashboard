// grop--
let avater = document.querySelector('.avater')
let notification = document.querySelector('.natification')
display(avater)
display(notification)
function display (selector){
    selector.addEventListener('click',function(){
       let dropp = selector.querySelector('.drobedMenu')
       dropp.classList.contains('active')?dropp.classList.remove('active'):
       dropp.classList.add('active')
    })
}
// addactive--

let bars = document.querySelector('.bars')
let left = document.querySelector('.side_left')

bars.addEventListener('click',function(){
    left.classList.contains('active')? left.classList.remove('active'): left.classList.add('active')
})



// chars--
let visitor = [800,320,190,250,400,600]
let hired = [502,300,150,600,530,440]
let years = [1999,2020,2010,2011,2023,2025]

var options = {
    chart: {
      type: 'area',
      height:'100%',
      width:'100%',
    },
    series: [{
        type: 'area',
        name:'visitor',
        data: [...visitor]
      }, {
        type: 'area',
        name:'hired',
        data: [...hired]
      }],
    xaxis: {
      categories:years
    },
    colors:['#6ab04c', '#f44336', '#ff0707']
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
///////////////////////////////////////////////////////////////////////////////

let mood = document.querySelector('.right .mood')
mood.addEventListener('click',function(){
    let dark = document.querySelector("body")
    if( dark.classList.contains('dark')){
        dark.classList.remove('dark')
        mood.classList.replace("fa-sun","fa-moon")
    }
    else{
        dark.classList.add('dark')
        // console.log()
        mood.classList.replace("fa-moon","fa-sun")
        
    }
 
})
