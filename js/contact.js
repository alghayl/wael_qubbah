
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    // نجيب القيم
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
// نتحقق إذا في أي حقل فاضي
    if (name === "" || email === "" || subject === "" || message === "") {
      e.preventDefault(); // يوقف الفورم من الإرسال
      alert("⚠ Please fill in all fields before submitting!");
    }
  });
});