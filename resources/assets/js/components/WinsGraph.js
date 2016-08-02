import Chart from 'chart.js';

export default {

   template: `
   <div>
   <canvas width="800" height="600" v-el:canvasNox></canvas>
   {{{ legend }}}
   </div>
   `,

   props: ['player', 'opponent'],

      data() {
         return { legend: 'Legend'};
      },

   ready() {

      var data = {
         labels: ['Wins'],

         datasets: [
                {
                    label: this.player.name,
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [this.player.wins]
                },

                {
                    label: this.opponent.name,
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: [this.opponent.wins]
                }
            ]
      };

   const chart = new Chart(
      this.$els.canvas.getContext('2d')
   ).Bar(data);

   this.legend = chart.generateLegend();
   }

}
