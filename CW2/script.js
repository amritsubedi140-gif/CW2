const prices = {
  "Super Room": 95,
  "Deluxe Room": 140,
  "Family Room": 180
};

const els = {
  mainView: document.getElementById('mainView'),
  success: document.getElementById('success'),
  summary: document.getElementById('summary'),
  submitBtn: document.getElementById('submitBtn'),
  backBtn: document.getElementById('backBtn'),
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  contact: document.getElementById('contact'),
  checkin: document.getElementById('checkin'),
  checkout: document.getElementById('checkout'),
  guests: document.getElementById('guests'),
  room: document.getElementById('room')
};

function validate(data){
  return data.name && data.email && data.contact && data.checkin && data.checkout && data.room;
}

function submitReservation(){
  const data = {
    name: els.name.value.trim(),
    email: els.email.value.trim(),
    contact: els.contact.value.trim(),
    checkin: els.checkin.value,
    checkout: els.checkout.value,
    guests: els.guests.value,
    room: els.room.value,
    price: prices[els.room.value] || 0
  };

  if(!validate(data)){
    alert("Please complete all fields.");
    return;
  }

  showSuccess(data);
}

function showSuccess(d){
  els.mainView.style.display = "none";
  els.success.style.display = "block";

  els.summary.innerHTML = `
    <div><b>Name:</b> ${d.name}</div>
    <div><b>Room:</b> ${d.room}</div>
    <div><b>Check-in:</b> ${d.checkin}</div>
    <div><b>Check-out:</b> ${d.checkout}</div>
    <div><b>Guests:</b> ${d.guests}</div>
    <div><b>Price:</b> £${d.price}</div>
  `;
}

function goHome(){
  els.success.style.display = "none";
  els.mainView.style.display = "flex";
  window.scrollTo(0,0);
}

els.submitBtn.addEventListener("click", submitReservation);
els.backBtn.addEventListener("click", goHome);
