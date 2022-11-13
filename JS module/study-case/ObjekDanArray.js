/** 1 :
 * Buatlah sebuah Array bernama mahasiswa yang berisi dua buah object
 * yang memiliki property nama <string>, stambuk <number>, dan instansi <string>.
 */
// TODO 1: Ketikkan kode Anda di bawah ini!
const mahasiswa = [
    {
        nama: 'Amalia Putri Sipinte',
        stambuk: 2021,
        instansi: 'Politeknik Negeri Lhokseumawe',
    },

    {
        nama: 'Rachel Ardana P',
        stambuk: 2022,
        instansi:'Politeknik Negeri Lhokseumawe',
    },
];


/** 2 : Tampilkan array mahasiswa */
// TODO 2: Ketikkan kode Anda di bawah ini!
console.log("output 1");
console.log(mahasiswa);

/** 3 :
 * Setelah membuat Array mahasiswa, tambahkan satu buah object dengan property yang sama seperti object sebelumnya
 * dengan menggunakan Array methods.
 */
// TODO 3: Ketikkan kode Anda di bawah ini!
 mahasiswa.push = {
    nama: 'mahasiswa baru',
    stambuk: 2022,
    instansi:'Politeknik Negeri Lhokseumawe',
}
// console.log(mahasiswa);

/** 4 : Hapus index 1 pada Array mahasiswa dengan menggunakan Array methods */
// TODO 4: Ketikkan kode Anda di bawah ini!
// delete mahasiswa[1];
mahasiswa.splice(1,1);
// shiftelemen=mahasiswa.shift();

// console.log(mahasiswa);
/** 5 : Tampilkan array mahasiswa dengan menggunkan for loop atau yang sejenisnya */
// TODO 5: Ketikkan kode Anda di bawah ini!
console.log("output 2");
for( let i=0; i<mahasiswa.length; i++){
    console.log(mahasiswa[i]);
}
/** 6 : Tampilkan nama pada Object didalam Array mahasiswa dengan menggunakan for loop atau yang sejenisnya*/
// TODO 6: Ketikkan kode Anda di bawah ini!
console.log("output 3");
for( let i=0; i<mahasiswa.length;i++){
    console.log(mahasiswa[i].nama);
}
// console.log(mahasiswa);
/** 7 : Ubahlah nama dari object index 0 Array mahasiswa menjadi Royhan*/
// TODO 7: Ketikkan kode Anda di bawah ini!
mahasiswa[0].nama = 'royhan';
console.log("output 4");
console.log(mahasiswa[0]);
