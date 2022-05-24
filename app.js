const getAttendees = async () => {
    const req = await fetch('http://localhost:3000/api/events/', {
        method: 'GET',
    })

    const data = await req.json()
    console.log(data)

    // Generate tables dynamically 
    function generateTables(data) {
        for (let i = 0; i < data.length; i++) {

            //console.log(data[i])
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


            for(let date=0;date<data[i].dates.length;date++){
                console.log(`data[${i}].dates[${date}]`)
                console.log(data[i].dates[date])
                for(let attendee=0; attendee < data[i].dates[date].attendees.length;attendee++ ){
                    console.log(`data[${i}].dates[${date}].attendee[${attendee}]`)
                    console.log(data[i].dates[date].attendees[attendee])
                }
            }
            
            // DYNAMICALLY ADD THE DATA IN THE HTML
            for (let k = 0; k < data[i].dates[0].attendees.length; k++) {
                let tr = document.createElement("tr")
                let td = document.createElement("td")
                td.innerHTML = data[i].dates[0].attendees[k].name
                table.appendChild(tr)
                tr.appendChild(td)

                //console.log(data[i].dates[i].attendees[0].available);

                for (let x = 0; x < data[i].dates.length; x++) {
                    //console.log('bonjour')
                    //console.log(i, k, x, data[i].dates[0].attendees[k].available.toString())
                    let presence = document.createElement("td")
                    presence.innerHTML = data[i].dates[0].attendees[k].available.toString()
                    tr.appendChild(presence)
                    //console.log(presence)
                }
            }

            for (let j = 0; j < data[i].dates.length; j++) {
                let th = document.createElement("th")
                th.innerHTML = data[i].dates[j].date
                whiteSpace.appendChild(th)
                    
                    // table.appendChild(td)

                    // console.log(data[i].dates[0].attendees[g].available.toString());
                
            }


            // CONFIRM PRESENCE TO THE EVENT
            let confirmation = ["Yes", "No"]
            let addPersonaRow = document.createElement("tr")
            table.appendChild(addPersonaRow)
            let addName = document.createElement("input")
            addPersonaRow.appendChild(addName)

            for (let j = 0; j < data[i].dates.length; j++) {
                let addPresenceD = document.createElement("td")
                addPersonaRow.appendChild(addPresenceD)
                let addPresenceSelect = document.createElement("select")
                addPresenceSelect.innerHTML = "test"
                addPresenceD.appendChild(addPresenceSelect)
                
                //Create and append the options
                for (let z = 0; z < confirmation.length; z++) {
                let option = document.createElement("option");
                option.value = confirmation[z];
                option.text = confirmation[z];
                addPresenceSelect.appendChild(option)
            }
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


// Event Creation
// Add a date button
let dateButton = document.querySelector(".moreDate")

dateButton.addEventListener("click", addDate)
function addDate() {
    let div = document.querySelector("header")
    let newDate = document.createElement('input')
    newDate.classList = "date"
    newDate.setAttribute("type", "date");
    div.appendChild(newDate)

    console.log("Bonjour");
}

const createEvent = async () => {
    const reqx = await fetch('http://localhost:3000/api/events/', {
        method: 'POST',
        headers: {"Content-Type": "Application/JSON"},
        body: JSON.stringify({
            name: "Mon anniversaire",
            description: "Venez svp",
            author: "Wayane",
            dates: ["2022-11-01", "2022-11-02"]
        })
    })

    const data = await reqx.json()

    console.log(data)
}

let eventButton = document.querySelector(".moreEvent")
eventButton.addEventListener("click", createEvent)
