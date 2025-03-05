document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const room = document.getElementById("room").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!room || !date || !time) {
        alert("Please complete all fields before booking.");
        return;
    }

    alert(`Your booking for ${room} on ${date} at ${time} has been submitted!`);
});
