// Membuat Sebuah Program Generate Random Password (Password Acak) Menggunakan JavaScript
// ======================================================================================
function random_password(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * charset.length);
    password += charset.charAt(random);
  }
  return password;
}
const randompass = random_password(8);
console.log(randompass);
