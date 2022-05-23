const getAttendees = async () => {
    const req = await fetch('http://localhost:3000/api/events/', {
        method: 'GET',
    })

    const data = await req.json()
    console.log(data)
    

    

    // Generate tables dynamically 
    function generateTables(data) {
        for (let i = 0; i < data.length; i++) {
            todo = document.getElementById("todo")

            // Creating the basis of the event (table + name of event + description)
            let div = document.createElement('div')
            let table = document.createElement('table')
            let h1 = document.createElement("h1")
            h1.innerHTML = data[i].name
            let p = document.createElement("p")
            p.innerHTML = data[i].description
            todo.appendChild(div)
            div.appendChild(h1)
            div.appendChild(p)
            div.appendChild(table)
            
            let whiteSpace = document.createElement("tr")
            let whiteHead = document.createElement("th")
            table.appendChild(whiteSpace)
            whiteSpace.appendChild(whiteHead)
            
            // Creating columns for each dates
            for (let j = 0; j < data[i].dates.length; j++) {
                let th = document.createElement("th")
                th.innerHTML = data[i].dates[j].date
                whiteSpace.appendChild(th)

                for (let g = 0; g < data[i].dates[0].date.length; g++) {
                    let td = document.createElement("td")
                    td.innerHTML = data[i].dates[0].attendees[g].available
                    if (data[i].dates[0].attendees[g].available == true) {
                        td.innerHTML = "true"
                    } else td.innerHTML = "false"
                    console.log(data[i].dates[0].attendees[g].available);
                }
            }

            for (let k = 0; k < data[i].dates[0].attendees.length; k++) {
                let tr = document.createElement("tr")
                let td = document.createElement("td")
                td.innerHTML = data[i].dates[0].attendees[k].name
                table.appendChild(tr)
                tr.appendChild(td)
            }
            
        }

        // document.querySelector(".title").innerHTML = data[0].name
        // document.querySelector(".description").innerHTML = data[0].description
        // document.querySelectorAll("th")[1].innerHTML = data[0].dates[0].date
        // document.querySelectorAll("th")[2].innerHTML = data[0].dates[1].date
        // document.querySelectorAll("td")[0].innerHTML = data[0].dates[0].attendees[0].name
        }


    generateTables(data)
}

getAttendees()