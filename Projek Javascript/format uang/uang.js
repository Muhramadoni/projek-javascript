// Membuat Sebuah Program Untuk Memformat Uang Mennggunakan JavaScript
// ===================================================================
function formatuang(angka) {
  var bilangan = angka.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return "RP" + bilangan;
}
var harga = 1234567;
var harga_rupiah = formatuang(harga);
console.log(harga_rupiah);
