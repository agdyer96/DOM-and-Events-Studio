document.addEventListener("DOMContentLoaded", function() {
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackround = document.getElementById("shuttleBackround");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            flightStatus.style.color = 'red';
            shuttleBackround.style.backgroundColor = 'blue';
            
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackround.style.backgroundColor = 'green';
    });

    abortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackround.style.backgroundColor = 'red';
        }
    });


});