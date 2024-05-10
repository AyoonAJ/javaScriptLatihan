//masih belajar array pada episode kal ini 

let namaKosong = [];

// input session pertama
namaKosong.push("agus", "ayun", "ardi", "junaedi");
console.table(namaKosong);

// input session ke dua (didalam array ada [array lagi] / array 2 dimensi)
namaKosong.push(["wahyu", "ayana", "ari", "sadiran"], ["ayun", "ardi"]);
console.table(namaKosong);

// input session ke dua
namaKosong.push("saldi", "agung", "albert", "weda");
console.table(namaKosong);

console.log("\ntelah diubah index ke-11 dari weda menjadi dewa\n");
console.log("telah dihapus array pada index ke- 4\n");
delete namaKosong[4];
namaKosong[11] = "dewa";
console.table(namaKosong);
console.log(`panjang array nya adalah: ${namaKosong.length}`);