import Chart from 'chart.js';


export default {

   template: `
   <div>
   <canvas width="600" height="400" v-el:canvas></canvas>
   <div class="legend">{{{ legend }}}</div>
   </div>
   `,

   props: {
      labels: {},
      values: {},
      color: {
         default: '#333'
      }
   },

   data() {
      return { legend: 'Legend'};
   },

   ready() {

      var data = {
          labels: this.labels,

          datasets: [
              {
                 label: "Monthly Points",
                 fill: true,
                  lineTension: 0.1,
                  fillColor: this.color,
                  backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 strokeColor: "#000", 
                  borderColor: "rgba(0,0,0,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                data: this.values
              },
              {
                 label: "Backwards Monthly Points",
                 fill: false,
                  lineTension: 0.1,
                  backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 fillColor: '#fff',
                  borderColor: "rgba(0,0,0,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(0,0,0,1)",
                  pointBackgroundColor: "#000",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [130, 152, 245, 303, 401]
              }
           ]
      };


   const chart =    new Chart(
         this.$els.canvas.getContext('2d')
      ).Bar(data);

      this.legend = chart.generateLegend();
   }
}
