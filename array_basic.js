// BELAJAR ARRAY .JS

const nama = []; // deklarasi array untuk panjang array yg tidak ditentukan cukup ahnya membuat "[]"

// gaunakn push untuk menambahkan velue array
nama.push("agus", "riana", "jihan", "junaedi");

// menampilkan semua nilai dalam vab. array dlm bentuk tabel
console.log(`array ditampilkan dalam bentuk tabel`);
console.table(nama);

// untuk mengetahu panjang array gunakan length
console.log(`\nPanjang array adalah: ${nama.length}`);

// menampilkan array pada index tertentu (index ke 1)
console.log(`array index ke 1 adalah: ${nama[1]}`);

// mengubah nilai array pada index tertentu
nama[0] = "ayun";

// menampilkan semua nilai dalam vab. array dlm bentuk tabel
console.log("\nsetelah array pd index ke 0 diubah");
console.table(nama);

// untuk menghapus salah nilai array melalui index
delete nama[3];
console.log("\nsetelah array pd index ke 3 dihapus");
console.table(nama);
