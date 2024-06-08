// Membuat Program Untuk Mengurutkan Harga Barang Dari Yang Termurah Ke Termahal
// =============================================================================
function urutkanharga(harga) {
  harga.sort(function (a, b) {
    return a - b;
  });

  return harga;
}
var harga_barang = [90000, 80000, 70000, 60000, 50000];
var harga_murah_mahal = urutkanharga(harga_barang);
console.log(harga_murah_mahal);
