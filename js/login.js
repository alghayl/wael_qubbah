function validateLoginForm(event) {
  event.preventDefault(); // منع الإرسال الافتراضي للنموذج

  // الحصول على القيم من الحقول
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // التحقق من الحقول
  if (username == "") {
    alert("Please enter user name.");
    return false;
  }

  if (email == "") {
    alert("Please enter email.");
    return false;
  }

  // التحقق من صيغة البريد الإلكتروني
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  if (password == "") {
    alert("الرجاء إدخال كلمة المرور");
    return false;
  }

  if (password.length < 6) {
    alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
    return false;
  }

  // إذا كل شيء صحيح
  alert("تم تسجيل الدخول بنجاح ✅");
  event.target.submit(); // إرسال النموذج يدويًا
  return true;
}