// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus")
    const shuttleBackground = document.getElementById("shuttleBackground")
    const height = document.getElementById("spaceShuttleHeight")
    
    const land = document.getElementById("landing")
    const abortMission = document.getElementById("missionAbort")
    const up = document.getElementById("up")
    const down = document.getElementById("down")
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const ship = document.getElementById("rocket")

    ship.style.marginTop = "250px"
    ship.style.marginRight = "0px"
    takeOff.addEventListener("click", function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            height.innerHTML = "10,000";
        }
    })

    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
        height.innerHTML = "0"
    })

    abortMission.addEventListener("click", function(){
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green"
            height.innerHTML = "0"
        }
    })

    up.addEventListener("click", function(){
        rocket.style.position = "absolute";
        let currentPosition = parseInt(rocket.style.marginTop)-10
        rocket.style.marginTop = `${currentPosition}px`
        let altitude = parseInt(height.innerHTML) + 10000
        height.innerHTML = `${altitude}`
    
    })

    down.addEventListener("click", function(){
        rocket.style.position = "absolute";
        let currentPosition = parseInt(rocket.style.marginTop)+10
        rocket.style.marginTop = `${currentPosition}px`
        let altitude = parseInt(height.innerHTML) - 10000
        height.innerHTML = `${altitude}`
    })

    left.addEventListener("click", function(){
        rocket.style.position = "absolute"
        let currentPosition = parseInt(rocket.style.marginRight)+10
        rocket.style.marginRight = `${currentPosition}px`
    })
})