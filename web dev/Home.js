document.getElementById("bookingForm").addEventListener("submit", function(e) {

    let room = document.getElementById("roomType").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (!room) {
        alert("Please select a room type");
        e.preventDefault();
        return;
    }

    if (!checkin || !checkout) {
        alert("Please select both dates");
        e.preventDefault();
        return;
    }

    let checkinDate = new Date(checkin);
    let checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
        alert("Check-out must be after check-in");
        e.preventDefault();
        return;
    }

    alert("Searching available rooms...");
});
