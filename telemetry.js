// Alt ✅ Option 1: Use a Public IP API
async function getUserIP() {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  console.log("User IP:", data.ip);
  return data.ip;
}

getUserIP();
// Alt 2 ✅ Option 2: Use IP + Location API
async function getUserLocation() {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  console.log("IP:", data.ip);
  console.log("City:", data.city);
  console.log("Latitude:", data.latitude);
  console.log("Longitude:", data.longitude);
  return data;
}

getUserLocation();
