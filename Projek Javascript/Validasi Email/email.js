// Membuat Sebuah Program Untuk Validasi Email Menggunakan JavaScript
// ==================================================================
function valid_email(email) {
  const email_validasi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email_validasi.test(email);
}

const email = "muhammadramadoni@gmail.com";
if (valid_email(email)) {
  console.log("Email valid");
} else {
  console.log("Email tidak valid");
}
