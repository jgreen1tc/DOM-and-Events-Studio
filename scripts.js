// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementById("takeoff")
    const abortMission = document.getElementById("missionAbort")
    const landing = document.getElementById("landing")
    const status = document.getElementById("flightStatus")
    const shuttleBackground = document.getElementById("shuttleBackground")
    const height = document.getElementById("spaceShuttleHeight")
    const up = document.getElementById("up")
    const down = document.getElementById("down")
    const left = document.getElementById("left")
    const right = document.getAnimations("right")
    button.addEventListener("click", (event) => {
        let w = window.confirm("Confirmed. That shuttle is ready for take off.")
        if (w === true){
            status.innerHTML = "Shuttle in flight"
            shuttleBackground.style.background = 'blue'
            height.innerHTML = 10000
        }
    })
    landing.addEventListener("click", (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        status.innerHTML = "Shuttle has landed"
        shuttleBackground.style.background = "green"
        height.innerHTML = 0
    })
    abortMission.addEventListener("click", => {
        let response = window.confirm("Confirm that you want to abort the mission")
        if ( respomse === true) {
            status.innerHTML = "Mission aborted"
            shuttleBackground.style.background = "green"
            height.innerHTML = 0
        }
    })
    up.addEventListener("click", (event) => {
        
    })
});
