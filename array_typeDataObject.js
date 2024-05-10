// type data object (sama seperti type data array, hanya saja indexnya dapat dirubah (bisa jd string))

const person = {};
person["nama"] = "ayun";
person["nim"] = "1515051104";
person["alamat"] = "karang";
person["umur"] = "27";
person["jenkel"] = "Laki";

// tampilkan outputnya
console.table(person);

// menghapus array melalui index
console.log(`\njenkel sudah dihapus`);
delete person["jenkel"];

// tampilkan outputnya
console.table(person);

// data array yang lagsung dimasukkan melalui variablenya langsung
console.log("\n\nberikut adalah data array yang langsung dimasukkan melalui variablenya langsung");

const orang = {
    nama: "agus",
    nim: "1515051104",
    alamat: "karang",
    umur: "27",
    jenkel: "laki"
};

// menampilakn outputnya
console.table(orang);
console.log(`panjang array nya adalah: ${orang.length}`); // outputnya undefine karena indexnya bukan type data number

// menamilkan object dg mengambil variable
console.log(`\n`);
console.log(`nama : ${orang.nama}`);
console.log(`nim : ${orang.nim}`);
console.log(`alamat : ${orang.alamat}`);
console.log(`jenkel : ${orang.jenkel}`);
