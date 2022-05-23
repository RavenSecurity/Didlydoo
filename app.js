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
            
            
        }

        document.querySelector(".title").innerHTML = data[0].name
        document.querySelector(".description").innerHTML = data[0].description
        document.querySelectorAll("th")[1].innerHTML = data[0].dates[0].date
        document.querySelectorAll("th")[2].innerHTML = data[0].dates[1].date
        document.querySelectorAll("td")[0].innerHTML = data[0].dates[0].attendees[0].name
        }


    generateTables(data)
}

getAttendees()