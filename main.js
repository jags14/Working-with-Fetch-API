getTextData();
async function getTextData(){
            const response = await fetch("./TempData.txt");
            //console.log(response);
            const data = await response.text();
            //console.log(data);
            const table = data.split("\n").slice(2);
            //console.log(rows);
            table.forEach(row =>{
                const cols = row.split(" ");
                const years = cols[0];
                const avgTemps = cols[3];
                console.log(years, avgTemps);
            });

        }
