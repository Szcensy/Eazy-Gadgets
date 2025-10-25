function message() {
  const phone = "2347081574418"; // 👈 Replace with your WhatsApp number (no + or 0)
  const text = "Hi Eaz, I'd like to make a purchase.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const userMsg = document.getElementById("message").value.trim();
  
  // ✅ Replace with your actual WhatsApp number (no +, spaces, or dashes)
  const phone = "2347081574418"; 
  
  // ✅ This text will appear directly in your WhatsApp DM message box
  const text = `Hi Eaz 👋,\nMy name is ${name}.\n${userMsg}`;
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  
  // ✅ Open directly in WhatsApp chat
  window.open(url, "_blank");
}
