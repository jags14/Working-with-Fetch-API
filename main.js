graph();
async function graph(){
    const data = await  getTextData();
    const canvas = document.getElementById("myCanvas");
 
 
 //console.log(canvas);
 const ctx = canvas.getContext("2d");
 
 var myChart = new Chart(ctx, {
    //type: 'bar',
    type: 'line',
    //fill: false,
    data: {
        labels: data.xLables,
        datasets: [{
            label: 'Average Temperature each year',
            data: data.yLables,
            backgroundColor: 'rgba(153, 102, 255, 1)',
                
            borderWidth: 2
        }]
    },
    
});

 }


async function getTextData(){
            const xLables = [];
            const yLables = [];
            const response = await fetch("./TempData.txt");
            //console.log(response);
            const data = await response.text();
            //console.log(data);
            const table = data.split("\n").slice(2);
            //console.log(rows);
            table.forEach(row =>{
                const cols = row.split(" ");
                const years = cols[0];
                xLables.push(years);
                const avgTemps = cols[3];
                yLables.push(parseFloat(avgTemps) + 14);
                console.log(years, avgTemps);
            });
            
            return { xLables, yLables};

        }
