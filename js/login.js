document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mobile = document.getElementById("mobileNumber").value.trim();

    if (mobile.length < 10) {
      alert("Please enter a valid mobile number!");
      return;
    }

    // Optional: store user info
    localStorage.setItem("userNumber", mobile);

    // Redirect to main page
    window.location.href = "index.html";
  });
});
  
   
//  document.getElementById("submitBtn").addEventListener("click", function () {
//       const mobile = document.getElementById("mobile").value.trim();
//       if (mobile.length >= 10) {
//         window.location.href = "index.html"; // ✅ redirect
//       } else {
//         alert("Please enter a valid mobile number!");
//       }
//     });

