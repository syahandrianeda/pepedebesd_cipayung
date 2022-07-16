//dB Asli
const terminal = "https://script.google.com/macros/s/AKfycbx-AabThUSB1cVPIKmbfJqjzJQTIihdkTkN7bQ8ouhmXpGijbfUF-NjNxAaeeD76j34cQ/exec";

//dB Trial
//const terminal = "https://script.google.com/macros/s/AKfycbxx57CiGHDz4WHC_qDARRsHmthfgBQjwRradXiM01FNGW4S0P70nNDkZWfWJUEz74tEBg/exec"
//const terminal = "https://script.google.com/macros/s/AKfycbxx57CiGHDz4WHC_qDARRsHmthfgBQjwRradXiM01FNGW4S0P70nNDkZWfWJUEz74tEBg/exec"

//Db tRIAL edasyahandrian@gmail.comn
// const terminal = "https://script.google.com/macros/s/AKfycbwV_60Sv_YikS2EWCQqEAz9ZoZWSGfR-0YQJd9vx94aDSPVkaWLGM02FKICTxMgqWn_/exec";

let datasekolahkecamatan = [];
    fetch(terminal + "?action=settingPerSekolah")
        .then(m => m.json())
        .then(r => {
            //console.log(r)                
            datasekolahkecamatan = r.setting;
        }).catch(er => console.log(er)) 
const barcari = document.querySelector(".barcari");
const div_overlaycari = document.querySelector(".overlaycari");
const div_sidebarcari = document.querySelector(".sidebarcari");
const nav_sidebar = document.querySelector("nav");
const div_resultmenu = document.querySelector(".resultmenu");
const div_namasekolah = document.querySelectorAll(".namasekolah");
const div_view = document.querySelector(".viewscroll");

const jlo = JSON.parse(window.localStorage.getItem("datasetting"));
const id_sekolah = parseInt(jlo.id_sekolah);
const val_namasekolah = jlo.nama_sekolah;//"SDN RATUJAYA 1";
div_namasekolah.forEach(m => m.innerHTML = val_namasekolah);
const setting_kecamatan = "CIPAYUNG";

const idss = jlo.ss_settingppdb;//"1s24WrNwz6qsMGM7V-pLobef166UkjK7uQf-3kIrCLXA"; // // SS SETTING DB
const idsss = jlo.ss_pendaftar ;//"1P4LG4JzeT2_PhDYSz8Xfisv_2hQ7QFouHB86XGdbpPA";//ss PENDAFTAR
const idsssampel = jlo.ss_simulasi;//"1kXfKJKKDUaPwu0ZfGEchLAUxcINcNQHDhrmquwBqVM8";//

//urllogin (lama) = urlsetting (baru)
const urllogin = jlo.url_settingppdb;//"https://script.google.com/macros/s/AKfycbyU7U42HWFPCD4d1aB1yXovmfqYi2UkB0h-TWLvA50Wo6JR7UbasHkwmL75lzA2cRhs/exec";
//const urlppdbpendaftar = "https://script.google.com/macros/s/AKfycbw2GgXXO7cITQPEokNsZ6rLhD5YF7wHNBkaT0BCGcuQqAXCs-JEZ-zpjtXdUwNJ2eQMYA/exec";
//URL ADMIN VERIF
// urlppdb (lama) == urlpendaftaran
const urlppdb = jlo.url_pendaftar ;//"https://script.google.com/macros/s/AKfycbzAvwGaQEHZoMnoB6-jfFPzyYedpmw_UlILch3AdNGqIvpdg9f4T8tqdGCg7M-s3eEE/exec";


let idimg = document.getElementById("idlogoseskolah");
idimg.setAttribute("src",jlo.logosekolah);

const arraybulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
let db_pendaftar = [];
let objek_settingpagu = {};
let objek_settingseleksi = {};

// const selainklikini = (e) => console.log(e);
// document.addEventListener("click", (e) => selainklikini(e));
barcari.addEventListener("click", () => {
    // div_overlaycari.style.display = "block";
    // div_sidebarcari.style.display = "block";
    menu_cari();
});
div_overlaycari.addEventListener("click", () => {
    // div_overlaycari.style.display = "none";
    // div_sidebarcari.style.display = "none";
    w3_close();
});
const w3_close = () => {
    div_overlaycari.style.display = "none";
    div_sidebarcari.style.display = "none";
    nav_sidebar.style.display = "none";
};
const w3_open = () => {
    div_overlaycari.style.display = "block";
    div_sidebarcari.style.display = "none";

    nav_sidebar.style.display = "block";

};
const menu_cari = () => {
    div_overlaycari.style.display = "block";
    div_sidebarcari.style.display = "block";
};
const menu_beranda = () => {

    let html = `<h3>Informasi Umum</h3>
    <div class="w3-card-4 w3-padding w3-round-large w3-justify">
        Berikut adalah sekilas informasi mengenai PPDB <span class="namasekolah">SDN Beta 1</span> di Kota Depok
        Tahun Pelajaran 2021 / 2022.<br />
        Bagi anda calon peserta, harap membaca Sajian Informasi pendaftaran dengan seksama sebelum melakukan
        proses pendaftaran. Demikian informasi ini dan terima kasih atas perhatian dan kerjasamanya.
    </div>
    <br />
    <div class="w3-card-4 w3-padding w3-round">
        <h3>
            Tahapan pendaftaran:
        </h3>
        <div class="w3-card-2 w3-padding">
            <h4>Calon Peserta Didik Baru Melakukan</h4>
            <ul class="w3-ul">
                <li>
                    &checkmark; Membaca dengan baik Informasi pendaftaran
                </li>
                <li>
                    &checkmark; Mempersiapkan dokumen persyaratan
                </li>
                <li>
                    &checkmark; Pendaftaran Online dan unggah berkas
                </li>
            </ul>
        </div>
        <br />
        <div class="w3-card-2 w3-padding">
            <h4>Panitia PPDB dan Tim Verifikasi</h4>
            <ul class="w3-ul">
                <li>
                    &checkmark; memverifikasi persyaratan dan data ajuan persyaratan
                </li>

            </ul>
        </div> <br />
        <div class="w3-card-2 w3-padding">
            <h4>Calon Peserta Didik Baru Memantau</h4>
            <ul class="w3-ul">
                <li>
                    &checkmark; Memantau hasil verifikasi persyaratan
                </li>
                <li>
                    &checkmark; Mengunggah ulang jika tim verifikasi memintanya
                </li>
                <li>
                    &checkmark; Memantau hasil seleksi
                </li>
            </ul>
        </div>


    </div>`;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const menu_alur = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
    <h3> Alur dan Seleksi</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-center w3-padding">
        <img class="w3-image pointerkan" src="/app/alur.png" onclick="klikpoto(this)"/>
    </div>

    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const klikpoto = (el) => {
    document.getElementById("zoompoto").src = el.src;
    document.getElementById("previewpoto").style.display = "block";
}
const menu_jadwal = () => {
    // alert('menu jadwal');
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
    <h3> Jadwal PPDB ${val_namasekolah}</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
        <table class="versi-table w3-tiny">
            <thead>
                <tr>
                    <th>Pelaksanaan</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                    <th>Lokasi</th>
                    <th>Keterangan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Pendaftaran
                    </td>
                    <td>
                        5 - 8 Juli 2021
                    </td>
                    <td>
                        Setiap Pukul 00.00 s.d 12.00 WIB
                    </td>
                    <td>
                        Online (di rumah) Offline (Sekolah);
                    </td>
                    <td>
                        Diluar jam tersebut, tidak bisa mendaftar. Calon pendaftar wajib memantau proses seleksi;
                    </td>
                </tr>
                <tr>
                    <td>
                        Pengumuman
                    </td>
                    <td>
                        12 Juli 2021
                    </td>
                    <td>
                        Mulai Pukul 09.00 WIB
                    </td>
                    <td>
                        Online (di rumah) Offline (Sekolah);
                    </td>
                    <td>
                        Keputusan pengumuman tidak dapat diganggu gugat
                    </td>
                </tr>
                <tr>
                    <td>
                        Daftar Ulang
                    </td>
                    <td>
                        14 - 15 Juli 2021
                    </td>
                    <td>
                        Mulai Pukul 08.00 s.d 12.00 WIB
                    </td>
                    <td>
                        Offline (Sekolah);
                    </td>
                    <td>
                        Dilakukan di sekolah dengan ketentuan jadwal yang akan ditentukan kemudian. Calon Peserta Didik Baru yang tidak melakukan daftar ulang pada waktu yang ditetapkan dianggap mengundurkan diri.
                    </td>
                </tr>
                <tr>
                    <td>
                        Awal Tahun Pelajaran
                    </td>
                    <td>
                        19 Juli 2021
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    
    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });

    w3_close();

};
const menu_statistika = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
    <h3 class="w3-center"> Statistik Pendaftaran</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
    <h4>Statistik</h4>
        <table class="versi-table w3-tiny">
            <thead>
                <tr>
                    <th>Kegiatan</th>
                    <th>Angka</th>
                    <th>Keterangan</th>
                </tr>
            <thead>
            <tbody>
                <tr>
                    <td>Pendaftar Keseluruhan</td>
                    <td>100</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Pendaftar Terverifikasi</td>
                    <td>95</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Pendaftar Tidak terverifikasi</td>
                    <td>5</td>
                    <td>Ganda, Tidak Lengkap, dan tidak sesuai</td>
                </tr>
            </tbody>
        </table>
    </div>


    `;

    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};

const menu_persyaratan = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
    <h3> Persyaratan PPDB ${val_namasekolah}</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large" >    
    <h4>Persyaratan Umum</h4>
    <ul class="w3-ul">
        <li>Umur minimal 6 Tahun pada 1 Juli 2021</li>
        <li>Sistem PPDB dilakukan berdasarkan Zonasi</li>
    </ul>
    </div>
    <br/>
    <div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
    <h4>Persyaratan Dokumen</h4>
    <table class="versi-table w3-tiny">
        <thead>
            <tr>
                <th>Persyaratan</th>
                <th>Opsional</th>
                <th>Keterangan</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Akta Kelahiran/Surat Kenal Lahir dari RS/Dokter</td>
                <td>Wajib</td>
                <td>Diunggah dalam bentuk Poto/Dokumen</td>
            </tr>
            <tr>
                <td>Kartu Keluarga</td>
                <td>Wajib</td>
                <td>Prioritas KK domisili Depok, Surat Keterangan Domisili untuk luar</td>
            </tr>
            <tr>
                <td>STSB / Ijazah PAUD</td>
                <td>Wajib/Opsional</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Kartu Perlindungan Sosial</td>
                <td>Opsional</td>
                <td>Diperuntukan bagi yang tidak mampu</td>
            </tr>
             <tr>
                <td>Surat Pernyataan Tanggung Jawab Mutlak (SPTJM)</td>
                <td>Wajib</td>
                <td>Contoh dokumen dapat diundung di link berikut:<br/>
                    <button onclick="window.open('/app/SURAT%20PERNYATAAN%20TANGGUNG%20JAWAB%20MUTLAK.pdf','','width=720,height=600')" class="w3-button w3-blue">Unduh/download</button>
                </td>
            </tr>
            <tr>
                <td>KTP Orang Tua/Wali</td>
                <td>opsional</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    Akte Kelahiran digunakan untuk mengisi identitas pada formulir pendaftaran.<br/>
    Kartu Keluarga digunakan untuk mengisi alamat pada formulir pendaftaran (Bukan Surat Keterangan Domisili)
    </div>

    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const menu_kuota = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
    <h3 class="w3-center"> Kuota (Daya Tampung) ${val_namasekolah}</h3>
    Daya tampung Calon Peserta Didik Baru di ${val_namasekolah} Tahun ini adalah:
        <div class="w3-w3-card-2 w3-green w3-round-large w3-center w3-jumbo">
        64 Siswa
        </div>
        <br/>

    </div>
    
    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const menu_tutorial = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
        <h3 class="w3-center"> Tutorial</h3>
    </div>
    <div class="w3-card-4  w3-round-large w3-padding w3-margin-bottom" >
    Pilih Video/Petunjuk Tutorial:
        <select class="w3-select w3-border w3-border-blue">
            <option value="petunjuk0" selected>Pilih</option>
            <option value="petunjuk1">Cara Mendaftar</option>
            <option value="petunjuk2">Persyaratan</option>
            <option value="petunjuk3">Cara Memantau</option>
            <option value="petunjuk4">Cara Memantau</option>
        </select>
    </div>
    <div class="w3-card-4  w3-round-large w3-padding" >
        <div class="containerbaru">
            <iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/D9rcAdw-CxE" title="YT"></iframe>
        </div>
    </div>
    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();

};
const menu_pesan = () => {
    let html = `
    <div class="w3-center">
    <h3>Pesan / Forum Anda</h3>
    <img src="/app/logosekolah.jpg" alt="potologin" style="width:100px" />
</div>
<div class="w3-clear"></div>

<div class="w3-container w3-card-4 w3-white w3-round "><br>
    <img src="/app/logosekolah.jpg" alt="Avatar"
        class="w3-left w3-border w3-border-blue w3-circle w3-margin-right" style="width:60px">
    <span class="w3-right w3-opacity">1 min</span>
    <u>John Doe</u><br />

    <sub>Nama Anak</sub>
    <hr class="w3-clear">
    <p class="w3-pale-red">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.</p>
    <hr class="w3-border w3-border-bottom" />
    <div class="w3-margin-right w3-container">
        <img src="/app/logosekolah.jpg" alt="Avatar"
            class="w3-left w3-border w3-border-blue w3-circle w3-margin-right" style="width:60px">
        <!-- <span class="w3-clear"></span> -->
        <u>Tim Verifikasi</u><br />
        <span class="w3-opacity">1 min</span>
        <hr class="w3-clear">
        <p class="w3-pale-green">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut
            labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut
            aliquip ex ea commodo consequat.</p>
    </div>

</div>
<br />
<div class="w3-container w3-card-4 w3-white w3-round "><br>
    <img src="/app/logosekolah.jpg" alt="Avatar"
        class="w3-left w3-border w3-border-blue w3-circle w3-margin-right" style="width:60px">
    <span class="w3-right w3-opacity">1 min</span>
    <u>John Doe</u><br />

    <sub>Nama Anak</sub>
    <hr class="w3-clear">
    <p class="w3-pale-red">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.</p>
    <hr class="w3-border w3-border-bottom" />
    <div class="w3-margin-right w3-container">
        <img src="/app/logosekolah.jpg" alt="Avatar"
            class="w3-left w3-border w3-border-blue w3-circle w3-margin-right" style="width:60px">
        <!-- <span class="w3-clear"></span> -->
        <u>Tim Verifikasi</u><br />
        <span class="w3-opacity">1 min</span>
        <hr class="w3-clear">
        <p class="w3-pale-green">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut
            labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut
            aliquip ex ea commodo consequat.</p>
    </div>

</div>
<br />
<div class="w3-card-4 w3-padding-top w3-margin-bottom w3-border forum_kirim_pesan">
    KIRIM PESAN:
</div>

    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const menu_seleksi = () => {
    let html = `
    <div class="w3-card-4 w3-padding w3-round-large">
        <h3 class="w3-center"> Proses Jurnal</h3>
    </div>
    <div class="w3-card-4  w3-round-large w3-padding"  style="overflow-x:auto">
        <div class=" w3-pale-red w3-opacity w3-container">
        Maaf, Seleksi belum bisa diakses!
        </div>
    </div>
    `;
    div_resultmenu.innerHTML = html;
    div_view.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    w3_close();
};
const animasi_loading = () => {
    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";
};
const adminlogin = () => {
    let load_login = document.querySelector("#logintim");
    load_login.style.display = "block";
};
const btn_logout = () => {
    window.location.replace("../admin/index.html")
    window.localStorage.clear();
};


// SETTING ADMIN
const html_setting = document.querySelector(".div_setting");
const view_setting = document.querySelector(".breadcumb_setting");
const view_verif = document.querySelector(".breadcumb");
const div_view_setting = document.querySelector(".div_collapse_setting");
const div_view_verif = document.querySelector(".div_collapse_verifikasi");

view_setting.addEventListener("click", () => {
    let flag = div_view_setting.className.indexOf("w3-hide");
    let tombol = document.querySelector(".colapse_pengaturan");
    let tombol2 = document.querySelector(".colapse_verifikasi");
    if (flag == -1) {
        div_view_setting.className += " w3-hide";
        tombol.innerHTML = `<i class="fa fa-angle-double-down"></i></span>`;
        tombol.title = `Buka Pengaturan`;
        tombol2.innerHTML = `<i class="fa fa-angle-double-up"></i></span>`;
        tombol2.title = `Buka Halaman`;
        div_view_verif.className = div_view_verif.className.replace("w3-hide", "");
    } else {
        div_view_setting.className = div_view_setting.className.replace("w3-hide", "");
        tombol.innerHTML = `<i class="fa fa-angle-double-up"></i></span>`;
        tombol.title = `Tutup Pengaturan`;
        tombol2.innerHTML = `<i class="fa fa-angle-double-down"></i></span>`;
        tombol2.title = `Tutup Halaman`;
        div_view_verif.className += " w3-hide";
    }
});
view_verif.addEventListener("click", () => {
    let flag = div_view_verif.className.indexOf("w3-hide");
    let tombol2 = document.querySelector(".colapse_pengaturan");
    let tombol = document.querySelector(".colapse_verifikasi");
    if (flag == -1) {
        div_view_verif.className += " w3-hide";
        tombol.innerHTML = `<i class="fa fa-angle-double-down"></i></span>`;
        tombol2.innerHTML = `<i class="fa fa-angle-double-up"></i></span>`;
        tombol.title = `Buka Halaman`;
        tombol2.title = `Tutup Pengaturan`;
        div_view_setting.className = div_view_setting.className.replace("w3-hide", "");
    } else {
        div_view_verif.className = div_view_verif.className.replace("w3-hide", "")
        tombol.innerHTML = `<i class="fa fa-angle-double-up"></i></span>`;
        tombol2.innerHTML = `<i class="fa fa-angle-double-down"></i></span>`;
        tombol.title = `Tutup Halmaan`;
        tombol2.title = `Tutup Pengaturan`;
        div_view_setting.className += " w3-hide";
    }
});

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
};

function deleteZero(i) {
    if (i.slice(0, 1) == "0") {
        i = i.slice(1, 2);
    };
    return i;
};

function tanggalfulllengkap(tgl) {
    var d = new Date(tgl);
    var tgl = d.getDate();
    var bln = d.getMonth();
    var thn = d.getFullYear();
    var jam = d.getHours();
    var menit = d.getMinutes();
    var detik = d.getSeconds()
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return tgl + " " + bulan[bln] + " " + thn + " Pukul " + addZero(jam) + ":" + addZero(menit) + ":" + addZero(detik);
};

function tanggalfull(tgl) {
    var d = new Date(tgl);
    var tgl = d.getDate();
    var bln = d.getMonth();
    var thn = d.getFullYear();
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return tgl + " " + bulan[bln] + " " + thn
};
const konversi_tanggal = (el, kelas) => {
    let d = new Date(el.value);
    let div = document.querySelector("." + kelas);
    let divumur = document.querySelector(".sub_skor_umur");
    div.innerHTML = `${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari (per 1 Juli 2022)`;
    divumur.innerHTML = skor_umur(umur(d).tahun, umur(d).bulan, umur(d).hari);
};
const konversi_tanggal2 = (el, kelas) => {
    let d = new Date(el.value);
    let div = document.querySelector("." + kelas);
    let divumur = document.querySelector("[data-revisiverifulang='cpdb_umur']");
    div.innerHTML = `${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari (per 1 Juli 2022)`;
    divumur.value = skor_umur(umur(d).tahun, umur(d).bulan, umur(d).hari);
};

function umur(tgllahir) {
    let patokan = new Date("2022-07-01");
    var curday = patokan.getDate();
    var curmon = patokan.getMonth();
    var curyear = patokan.getFullYear();

    var calday = new Date(tgllahir).getDate();
    var calmon = new Date(tgllahir).getMonth();
    var calyear = new Date(tgllahir).getFullYear();
    var curd = new Date(curyear, curmon, curday);
    var cald = new Date(calyear, calmon, calday);
    var dife = datediff(curd, cald);
    let objret = {};
    objret.tahun = dife[0];
    objret.bulan = dife[1];
    objret.hari = dife[2];
    return objret
};

function datediff(date1, date2) {
    var y1 = date1.getFullYear(),
        m1 = date1.getMonth(),
        d1 = date1.getDate(),
        y2 = date2.getFullYear(),
        m2 = date2.getMonth(),
        d2 = date2.getDate();

    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    };
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
};

function DaysInMonth(Y, M) {
    with(new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
};
const skor_umur = (th, bln, hri = 0) => {
    let t = parseInt(th),
        bl = parseInt(bln),
        hr = parseInt(hri);
    let d_bln = (bl / 100).toFixed(2);
    let d_hr = (hr / 10000); //.toFixed(4)
    let skor = parseFloat(t) + parseFloat(d_bln) + parseFloat(d_hr);
    return skor.toFixed(4);

};

//setting Jadwal
const set_jadwal = () => {
    let linkjadwal = urllogin + "?idss=" + idss + "&action=getjadwal";
    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";
    fetch(linkjadwal)
        .then(m => m.json())
        .then(r => {
            load_overlay.style.display = "none";
            let obj = r.result;
            html_editjadwal(obj);
            view_setting.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "end"
            });
        }).catch(er => {
            html_setting.innerHTML = "Maaf terjadi kesalahan! Silakan Anda ulangi lagi.";
            console.log(er);
            load_overlay.style.display = "none";
        })

    ;
    w3_close();

};
const html_editjadwal = async (obj) => {
    let html = `
    <div class="w3-card-4 w3-container w3-round">
    <h3>Pengaturan Jadwal</h3>
    </div>
    <br/>
    <div class="w3-card w3-container w3-justify w3-small w3-round">
    Jadwal di aplikasi web disesuaikan dengan juknis PPDB 2021. Namun, sekolah bebas menentukan tambahan keterangan mengenai jadwal PPDB di sini.
     Pengaturan Jadwal di sini akan otomatis muncul (terupdate) di laman Web Utama.
    </div>
    <br/>
    <div class="w3-card w3-container w3-justify w3-small w3-round" style="overflow-x:auto">
    <h4>Setting Jadwal</h4>
        <table class="versi-table s_t_jadwal w3-small">
            <tr>
                <th>Pelaksanaan</th>
                <th>Tanggal</th>
                <th>Waktu</th>
                <th>Lokasi</th>
                <th>Keterangan</th>
                <th>Aksi</th>
            </tr>`;
    for (let i = 0; i < obj.length; i++) {
        html += `
            <tr>
                <td contenteditable="true">${obj[i].pelaksanaan}</td>
                <td contenteditable="true">${obj[i].tanggal}</td>
                <td contenteditable="true">${obj[i].waktu}</td>
                <td contenteditable="true">${obj[i].lokasi}</td>
                <td contenteditable="true">${obj[i].keterangan}</td>
                <td><button class="w3-blue" title="Simpan" onclick="save_t_jadwal(${i})"><i class="fa fa-save"></i></button></td>
            </tr>`;
    }
    html += `
        </table>
        <button class="w3-tiny w3-green" onclick="addrow_t_jadwal()">Tambah Baris</button>
        <button class="w3-tiny w3-red" onclick="dellrow_t_jadwal()">Hapus Baris</button><br/><br/>
    </div><br>
    <div class="w3-card-4 w3-container w3-justify w3-small w3-round-large" style="overflow-x:auto">
    <h4>Setting Akses Pendaftaran</h4>
        Laman ini mengatur akses pendaftaran dimana pada waktu tertentu (sesuai waktu yang Anda tetapkan di informasi di atas) Calon Pendaftar <b>bisa mengakses/tidak bisa mengakses</b> pengisian pendaftaran.
        <br/>
        Hal ini berarti, ketika ada calon pendaftar yang akan mengakses isian formulir pendaftaran bisa mengakses isian formulir atau tidak.
        <br><br>
        Saat ini, settingan Akses Pendaftaran adalah:
        <div class="w3-border w3-container w3-pale-red w3-center w3-large info_akses_formpendaftaran">
        <img src="/app/barloading.gif" alt="proses loading">
        </div>
        Jika ingin mengubah akses silakan klik tombol berikut ini:
        <div class="w3-border w3-container w3-padding w3-pale-green w3-center w3-large tombol_info_akses_formpendaftaran">
        <img src="/app/barloading.gif" alt="proses loading">
        </div><br/></div><br/>`;


    html_setting.innerHTML = html;
    let bolakses;
 await fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            objek_settingpagu = r.records;
            bolakses = objek_settingpagu[0].setingan_formdaftar;
            let infoakses = document.querySelector(".info_akses_formpendaftaran");
            let infotombol = document.querySelector(".tombol_info_akses_formpendaftaran");

            if (bolakses === true) {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-blue">bisa</b> mengakses formulir pendaftaran.`;
                infotombol.innerHTML = `<button class="w3-red w3-button w3-round-large w3-small" onclick="ubahaksesform(false)"> Tutup Akses Pendaftaran</button>`;
            } else {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-red">tidak bisa</b> mengakses formulir pendaftaran.`;
                infotombol.innerHTML = `<button class="w3-green w3-button w3-round-large w3-small" onclick="ubahaksesform(true)"> Buka Akses Pendaftaran</button>`;
            }

        })
        .catch(er => {
            console.log(er);
        });

};
const ubahaksesform = (bol) => {

    let infoakses = document.querySelector(".info_akses_formpendaftaran");
    let infotombol = document.querySelector(".tombol_info_akses_formpendaftaran");
    infotombol.innerHTML = ` <img src="/app/barloading.gif" alt="proses loading">`;
    let arrbaris = [];
    let kosong = [bol];
    arrbaris.push(kosong);
    let tabels = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "pagu");
    data.append("tabel", tabels);
    data.append("kolom", 22);

    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            //console.log(r);
            objek_settingpagu = r.records;
            let bolakses = objek_settingpagu[0].setingan_formdaftar;

            if (bolakses===true) {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-blue">bisa</b> mengakses formulir pendaftaran.`;
                infotombol.innerHTML = `<button class="w3-red w3-button w3-round-large w3-small" onclick="ubahaksesform(false)"> Tutup Akses Pendaftaran</button>`;
            } else {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-red">tidak bisa</b> mengakses formulir pendaftaran.`;
                infotombol.innerHTML = `<button class="w3-green w3-button w3-round-large w3-small" onclick="ubahaksesform(true)"> Buka Akses Pendaftaran</button>`;
            }


        })
        .catch(er => {
            console.log(er);
            alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
        })
        let dataa = new FormData();
        dataa.append("action", "inputdataKolomSeBaris");
        //dataa.append("idss", "14P1-pKe0T_1XOHODe4IdH_95YQz9FDSIYpzOrgaDCnI");
        dataa.append("tab", "id_sekolah");
        dataa.append("idsekolah",id_sekolah);
        dataa.append("tabel", tabels);
        dataa.append("kolom", 20);
    fetch(terminal,{method:"post",body:dataa}).then(m => m.json()).then(r =>{
        //console.log(r);
    }).catch(er => {console.log(er)})
}
const save_t_jadwal = (brs) => {
    let tabel = document.querySelector(".s_t_jadwal");
    let a = parseInt(brs);
    let b = (a + 1); //baristabel
    let c = (a + 2); //baris db Excel

    let pelaksanaan = tabel.rows[b].cells[0].innerHTML;
    let tanggal = tabel.rows[b].cells[1].innerHTML;
    let waktu = tabel.rows[b].cells[2].innerHTML;
    let lokasi = tabel.rows[b].cells[3].innerHTML;
    let keterangan = tabel.rows[b].cells[4].innerHTML;

    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";

    let data = new FormData();
    data.append("action", "editjadwal");
    data.append("idss", idss);
    data.append("baris", c);
    data.append("pelaksanaan", pelaksanaan);
    data.append("tanggal", tanggal);
    data.append("waktu", waktu);
    data.append("lokasi", lokasi);
    data.append("keterangan", keterangan);
    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(s => {
            //console.log(s);
            let obj = s.records;
            html_editjadwal(obj);
            load_overlay.style.display = "none";
            alert(s.result);

        }).catch(er => {
            alert("Maaf, terjadi kesalahan. Silakan ulangi lagi sesi Anda.")
            load_overlay.style.display = "none";
            console.log(er)
        });


};
const addrow_t_jadwal = () => {
    let tabel = document.querySelector(".s_t_jadwal");
    let jumlahbaris = tabel.rows.length;
    // if (jumlahbaris === 5) {
    //     alert("Maaf, tidak bisa menambah baris lagi");
    // }
    let row = tabel.insertRow(-1);
    let sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);

    sel.innerHTML = `<button class="w3-blue" title="Simpan" onclick="save_t_jadwal(${jumlahbaris - 1})"><i class="fa fa-save"></i></button>`;


};
const dellrow_t_jadwal = () => {
    let tabel = document.querySelector(".s_t_jadwal");
    let jumlahbaris = tabel.rows.length;
    if (jumlahbaris === 5) {
        alert("Maaf, tidak bisa menghapus baris lagi");
        return;
    }
    // tabel.deleteRow(-1);
    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";

    let data = new FormData();
    data.append("action", "editjadwal");
    data.append("idss", idss);
    data.append("baris", jumlahbaris);
    data.append("pelaksanaan", "");
    data.append("tanggal", "");
    data.append("waktu", "");
    data.append("lokasi", "");
    data.append("keterangan", "");
    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(s => {
            console.log(s);
            let obj = s.records;
            html_editjadwal(obj);
            load_overlay.style.display = "none";
            alert(s.result);

        }).catch(er => {
            alert("Maaf, terjadi kesalahan. Silakan ulangi lagi sesi Anda.")
            load_overlay.style.display = "none";
            console.log(er)
        });

};
//setting Persyaratan
const set_persyaratan = () => {
    let linkjadwal = urllogin + "?idss=" + idss + "&action=getpersyaratan";
    html_setting.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    fetch(linkjadwal).then(m => m.json())
        .then(r => {

            html_editpersyaratan(r.result);


        }).catch(er => {
            html_setting.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda beberapa saat lagi.";
            console.log(er);
        });
    view_setting.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
};
const html_editpersyaratan = (r) => {
    let syaratumum = r.filter(k => k.umum !== "");
    let dokumen = r;
    let datalink = r.filter(l => l.link !== "");

    let html = `<div class="w3-card-4 w3-padding w3-round-large"> <h3> Pengaturan Persyaratan PPDB</h3> 
    </div><div class="w3-card-4 w3-container w3-justify w3-small w3-round-large w3-margin">
    Persyaratan di aplikasi web disesuaikan dengan juknis PPDB 2021. Namun, sekolah bebas menentukan tambahan keterangan mengenai persyaratan PPDB di sini.
     Pengaturan Jadwal di sini akan otomatis muncul (terupdate) di laman Web Utama.
     <br/>Atur Persyaratan PPDB untuk dipublikasikan di laman utama web PPDB agar calon pendaftar dapat memahaminya di sini.
    
    </div> <div class="w3-card-4 w3-padding w3-small w3-round-large"  style="overflow-x:auto"> <h3>Atur Persyaratan Umum</h3> <table class="w3-table-all garis  w3-small w3-stripped s_t_syarat w3-margin-bottom">  <tr class="w3-cyan"> <th>Keterangan Syarat Umum</th> <th>Aksi</th> </tr>`;
    for (let u = 0; u < syaratumum.length; u++) {
        html += `<tr>
                <td contenteditable="true">${syaratumum[u].umum}</td>
                <td><i class="fa fa-save pointerkan" title="simpan" onclick="save_t_syarat('${u}','s_t_syarat')"></i></td>
            </tr>`;
    }
    html += `</table>
                <button class="w3-tiny w3-green" onclick="addrow_t_syarat('s_t_syarat')">Tambah Baris</button>
                <button class="w3-tiny w3-red" onclick="dellrow_t_syarat('s_t_syarat')">Hapus Baris</button>
                <hr />
            </div>
            <br/>
            <div class="w3-card-4 w3-padding w3-small w3-round-large" style="overflow-x:auto">
            <h3>Atur Dokumen Persyaratan</h3>
                <table class="w3-table-all garis  w3-small w3-stripped s_t_dokumen w3-margin-bottom">
                <tr class="w3-cyan">
                        <th>Persyaratan</th>   
                        <th>Opsional</th>   
                        <th>Keterangan</th>   
                        <th>Aksi</th>   
                    </tr>`;
    for (let d = 0; d < dokumen.length; d++) {
        html += `              <tr>
        <td contenteditable="true">${dokumen[d].persyaratan}</td>   
        <td contenteditable="true">${dokumen[d].optional}</td>   
        <td contenteditable="true">${dokumen[d].keterangan}</td>   
        <td><i class="fa fa-save pointerkan" title="simpan" onclick="save_t_syarat('${d}','s_t_dokumen')"></i></td>   
        
    </tr>`;
    };
    html += `</table>
                <button class="w3-tiny w3-green" onclick="addrow_t_syarat('s_t_dokumen')">Tambah Baris</button>
                <button class="w3-tiny w3-red" onclick="dellrow_t_syarat('s_t_dokumen')">Hapus Baris</button>
               <hr/> 
            </div>
            <br/>
            <div class="w3-card-4 w3-padding w3-small w3-round-large" style="overflow-x:auto">
            <h3>Atur Contoh Data Unduhan</h3>
                <table class="w3-table-all garis  w3-small w3-stripped s_t_link w3-margin-bottom">
                    <tr class="w3-cyan">
                        <th>Link</th>   
                        <th>Kode</th>   
                        <th>Keterangan</th>   
                        <th>Aksi</th>   
                    </tr>
                    <tr>
                        <td>${window.location.host}/sptjm.pdf</td>
                        <td>SPTJM</td>
                        <td>Surat Pernyataan Tanggung Jawab Mutlak</td>
                        <td>-</td>
                    </tr>
                    `
    for (let a = 0; a < datalink.length; a++) {
        html += `
        <tr>
            <td contenteditable="true">${datalink[a].link}</td>
            <td contenteditable="true">${datalink[a].kodelink}</td>
            <td contenteditable="true">${datalink[a].ketlink}</td>
            <td><i class="fa fa-save pointerkan" title="simpan" onclick="save_t_syarat('${a + 1}','s_t_link')"></i></td>   
        </tr>
        `;
    }
    html += `
                </table>
                <button class="w3-tiny w3-green" onclick="addrow_t_syarat('s_t_link')">Tambah Baris</button>
                <button class="w3-tiny w3-red" onclick="dellrow_t_syarat('s_t_link')">Hapus Baris</button>
               <hr/> 
            </div><br/><br/><br/>`;




    html_setting.innerHTML = html;

};
const addrow_t_syarat = (classtabel) => {
    let tabel = document.querySelector("." + classtabel);
    let row, sel;
    let jumlahbaris = tabel.rows.length;
    // if (jumlahbaris === 5) {
    //     alert("Maaf, tidak bisa menambah baris lagi");
    // }
    if (classtabel === "s_t_syarat") {

        row = tabel.insertRow(-1);
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.innerHTML = `<i class="fa fa-save" title="Simpan" onclick="save_t_syarat('${jumlahbaris - 1}','${classtabel}')"></i>`;
    } else if (classtabel === "s_t_dokumen") {
        row = tabel.insertRow(-1);
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.innerHTML = `<i class="fa fa-save" title="Simpan" onclick="save_t_syarat('${jumlahbaris - 1}','${classtabel}')"></i>`;
    } else if (classtabel === "s_t_link") {
        row = tabel.insertRow(-1);
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
        sel.innerHTML = "";
        sel = row.insertCell(-1);
        sel.innerHTML = `<i class="fa fa-save" title="Simpan" onclick="save_t_syarat('${jumlahbaris - 1}','${classtabel}')"></i>`;
    } else {
        row = tabel.insertRow(-1);
        sel = row.insertCell(-1);
        sel.setAttribute("contenteditable", "true");
    }

};
const dellrow_t_syarat = (classtabel) => {
    let tabel = document.querySelector("." + classtabel);
    let jumlahbaris, b;

    // let a = parseInt(r);
    //let b = (a + 1);

    let data = new FormData();
    data.append("idss", idss);


    if (classtabel === "s_t_syarat") {

        jumlahbaris = tabel.rows.length;
        b = tabel.rows.length;
        data.append("baris", (b));
        if (jumlahbaris === 3) {
            alert("Maaf, tidak bisa menghapus baris lagi");
            return;
        }
        data.append("action", "editsyarat");
        data.append("isi", "");
    } else if (classtabel === "s_t_dokumen") {

        jumlahbaris = tabel.rows.length;
        b = tabel.rows.length;
        data.append("baris", (b));
        if (jumlahbaris === 7) {
            alert("Maaf, tidak bisa menghapus baris lagi");
            return;
        }
        data.append("action", "editdokumen");
        data.append("persyaratan", "");
        data.append("optional", "");
        data.append("keterangan", "");
    } else if (classtabel === "s_t_link") {

        jumlahbaris = tabel.rows.length;
        b = tabel.rows.length;
        if (jumlahbaris === 2) {
            alert("Maaf, tidak bisa menghapus baris lagi");
            return;
        }
        data.append("baris", (b - 1));
        data.append("action", "editlink");
        data.append("link", "");
        data.append("kodelink", "");
        data.append("ketlink", "");
    } else {


    }





    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";

    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(s => {

            let obj = s.records;
            html_editpersyaratan(obj);
            load_overlay.style.display = "none";
            alert(s.result);

        }).catch(er => {
            alert("Maaf, terjadi kesalahan. Silakan ulangi lagi sesi Anda.")
            load_overlay.style.display = "none";
            console.log(er)
        });

};
const save_t_syarat = (r, t) => {
    //console.log(t);
    let tabel = document.querySelector("." + t);
    let a = parseInt(r);
    let b = (a + 1);
    let c = (a + 2);
    let data = new FormData();
    data.append("idss", idss);



    if (t === "s_t_syarat") {
        data.append("baris", c);
        data.append("action", "editsyarat");
        data.append("isi", tabel.rows[b].cells[0].innerHTML);

    } else if (t === "s_t_dokumen") {
        data.append("baris", c);
        data.append("action", "editdokumen");
        data.append("persyaratan", tabel.rows[b].cells[0].innerHTML);
        data.append("optional", tabel.rows[b].cells[1].innerHTML);
        data.append("keterangan", tabel.rows[b].cells[2].innerHTML);

    } else if (t === "s_t_link") {
        data.append("baris", b);
        data.append("action", "editlink");

        data.append("link", tabel.rows[b].cells[0].innerHTML);
        data.append("kodelink", tabel.rows[b].cells[1].innerHTML);
        data.append("ketlink", tabel.rows[b].cells[2].innerHTML);

    }

    let load_overlay = document.querySelector("#overlayloading");
    load_overlay.style.display = "block";


    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(s => {

            let obj = s.records;
            html_editpersyaratan(obj);
            load_overlay.style.display = "none";
            alert(s.result);

        }).catch(er => {
            alert("Maaf, terjadi kesalahan. Silakan ulangi lagi sesi Anda.")
            load_overlay.style.display = "none";
            console.log(er)
        });

};
//setting pagu

const set_pagu = () => {
    html_setting.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    view_setting.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
    fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            html_setpagu(r.records);
            objek_settingpagu = r.records;
        })
        .catch(er => {
            console.log(er);
            html_setting.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda."
        });


};
const html_setpagu = (s) => {
    let r = s[0];
    let btnzonasi = (r.sistem_zonasi == "Aktif") ? `<button class="w3-button w3-green tb_btn_aktifkan_zonasi">Nonaktifkan</button>` : `<button class="w3-button w3-green tb_btn_aktifkan_zonasi">Aktifkan</button>`;
    let btnafirmasi = (r.sistem_afirmasi == "Aktif") ? `<button class="w3-button w3-green tb_btn_aktifkan_afirmasi">Nonaktifkan</button>` : `<button class="w3-button w3-green tb_btn_aktifkan_afirmasi">Aktifkan</button>`;
    let btnptk = (r.sistem_ptk == "Aktif") ? `<button class="w3-button w3-green tb_btn_aktifkan_perpindahanptk">Nonaktifkan</button>` : `<button class="w3-button w3-green tb_btn_aktifkan_perpindahanptk">Aktifkan</button>`;

    let s_zonasi = (r.sistem_zonasi == "Aktif") ? `<td class="tb_result_sistemzonasi w3-yellow">Aktif</td>` : `<td class="tb_result_sistemzonasi">Belum Aktif</td>`;
    let s_afirmasi = (r.sistem_afirmasi == "Aktif") ? `<td class="tb_result_sistemafirmasi w3-yellow">Aktif</td>` : `<td class="tb_result_sistemafirmasi">Belum Aktif</td>`;
    let s_ptk = (r.sistem_ptk == "Aktif") ? `<td class="tb_result_sistemperpindahanptk w3-yellow">Aktif</td>` : `<td class="tb_result_sistemperpindahanptk">Belum Aktif</td>`;
    let ts_total = (r.showutama_total == "Dipublikasikan") ? `<th>Tampilkan Jumlah Total Daya Tampung<br/><button class="w3-green w3-button bs_nonlain" onclick="showkuotawebutama(this,'divshow_kuotatotal')">Sembunyikan</button></th>` : `<th>Tampilkan Jumlah Total Daya Tampung<br/><button class="w3-green w3-button bs_nonlain" onclick="showkuotawebutama(this,'divshow_kuotatotal')">Publikasikan</button></th>`
    let ts_jalur = (r.showutama_perjalur == "Dipublikasikan") ? `<th>Tampilkan Jumlah masing-masing kuota sistem jalur<br/><button class="w3-green w3-button bs_nonlain" onclick="showkuotawebutama(this,'divshow_kuotajalur')">Sembunyikan</button></th>` : `<th>Tampilkan Jumlah masing-masing kuota sistem jalur<br/><button class="w3-green w3-button bs_nonlain" onclick="showkuotawebutama(this,'divshow_kuotajalur')">Publikasikan</button></th>`
    let ts_khusus = (r.showutama_khusus == "Disembunyikan") ? `<th>Tampilkan Keterangan khusus <br/>(jumlah total dan kuota sistem jalur tidak ditampilkan)<br/><button class="w3-green w3-button bs_khusus" onclick="showkuotawebutama(this,'divshow_pesankhusus')">Publikasikan</button></th>` : `<th>Tampilkan Keterangan khusus <br/>(jumlah total dan kuota sistem jalur tidak ditampilkan)<br/><button class="w3-green w3-button bs_khusus" onclick="showkuotawebutama(this,'divshow_pesankhusus')">Sembunyikan</button></th>`;

    let jv_total = (r.showutama_total == "Dipublikasikan") ? `<td class="divshow_kuotatotal w3-yellow v_nonlain">Dipublikasikan</th>` : `<td class="divshow_kuotatotal v_nonlain">Disembunyikan</th>`;
    let jv_jalur = (r.showutama_perjalur == "Dipublikasikan") ? `<td class="divshow_kuotajalur v_nonlain w3-yellow">Dipublikasikan</th>` : `<td class="divshow_kuotajalur v_nonlain">Disembunyikan</th>`;
    let jv_khusus = (r.showutama_khusus == "Disembunyikan") ? `<td class="divshow_pesankhusus v_khusus">Disembunyikan</th>` : `<td class="divshow_pesankhusus v_khusus w3-yellow">${r.showutama_khusus}</th>`;

    let pub_sel_zonasi = (r.publikasi_seleksi_zonasi == true) ? `<button class="w3-red w3-btn w3-round-large btn_set_pub_seleksi_zonasi" onclick="set_pub_seleksi('zonasi',false)"> Sembunyikan!</button>` : `<button class="w3-green w3-btn w3-round-large btn_set_pub_seleksi_zonasi" onclick="set_pub_seleksi('zonasi',true)"> Publikasikan!</button>`;
    let pub_sel_afirmasi = (r.publikasi_seleksi_afirmasi == true) ? `<button class="w3-red w3-btn w3-round-large btn_set_pub_seleksi_afirmasi" onclick="set_pub_seleksi('afirmasi',false)"> Sembunyikan!</button>` : `<button class="w3-green w3-btn w3-round-large btn_set_pub_seleksi_afirmasi" onclick="set_pub_seleksi('afirmasi',true)"> Publikasikan!</button>`;
    let pub_sel_ptk = (r.publikasi_seleksi_ptk == true) ? `<button class="w3-red w3-btn w3-round-large btn_set_pub_seleksi_ptk" onclick="set_pub_seleksi('ptk',false)"> Sembunyikan!</button>` : `<button class="w3-green w3-btn w3-round-large btn_set_pub_seleksi_ptk" onclick="set_pub_seleksi('ptk',true)"> Publikasikan!</button>`;

    let v_thp_sel_zonasi = (r.publikasi_seleksi_zonasi == true) ? `Proses Proses Jurnal Zonasi <b>DIPUBLIKASIKAN</b>` : `Proses Proses Jurnal Zonasi <b>DISEMBUNYIKAN</b>`;
    let v_thp_sel_afirmasi = (r.publikasi_seleksi_afirmasi == true) ? `Proses Proses Jurnal Afirmasi <b>DIPUBLIKASIKAN</b>` : `Proses Proses Jurnal Afirmasi <b>DISEMBUNYIKAN</b>`;
    let v_thp_sel_ptk = (r.publikasi_seleksi_ptk == true) ? `Proses Proses Jurnal Pindah Tugas (Anak PTK) <b>DIPUBLIKASIKAN</b>` : `Proses Proses Jurnal Pindah Tugas (Anak PTK) <b>DISEMBUNYIKAN</b>`;

    let html = `
    <div class="w3-card-4 w3-padding w3-round-large"> <h3> Pengaturan Daya Tampung (Pagu/Kuota)</h3> 
    </div><div class="w3-card-4 w3-container w3-justify w3-small w3-round-large w3-margin">
    Daya Tampung di aplikasi web disesuaikan dengan juknis PPDB 2021. Namun, sekolah bebas menentukan 
    jumlah pendaftar yang terseleksi berdasarkan daya tampung sekolah masing-masing.
     <br/>Atur Daya Tampung untuk dipublikasikan di laman utama web PPDB agar calon pendaftar dapat memahaminya di sini.
    
    </div> 
    <br/>
    <div class="w3-card-4 w3-padding w3-small w3-round-large"  style="overflow-x:auto"> 
    <h3>Atur Daya Tampung (Pagu/Kuota)</h3>

        <table class="w3-table-all garis w3-small tabel_setting_pagu w3-centered">
            <tr class="w3-pale-blue">
                <th colspan="3">Daya Tampung<br/>
                (Gunakan tombol edit untuk mengedit)
                </th>
            </tr>
            <tr class="w3-pale-blue">
                <th>Kelas 
                    <i class="fa fa-plus w3-right w3-button w3-green tb_btn_tambah_kelas" title="Tambah Kelas"></i>
                    <i class="fa fa-minus w3-left  w3-button w3-red tb_btn_kurangi_kelas" title="kurangi Kelas"></i>
                </th>
                <th>CPDB per Kelas
                <i class="fa fa-edit w3-button w3-blue w3-right tb_btn_edit_total" title="Edit Sel" onclick="sel_editable(this, 'tb_result_paguperkelas')"></i>
                </th>
                <th>Total
                <i class="fa fa-edit w3-button w3-blue w3-right tb_btn_edit_total" title="Edit Sel" onclick="sel_editable(this, 'tb_result_pagutotal')"></i>
                </th>
                
            </tr>
            <tr>
                <td class="tb_result_pagukelas">${r.kuota_kelas}</td>
                <td class="tb_result_paguperkelas">${r.kuota_perkelas}</td>
                <td class="tb_result_pagutotal">${r.total_cpdb}</td>
            </tr>
            <tr class="w3-pale-blue">
                <th colspan="3">Sistem Jalur<br/>(Klik tombol untuk mengaktifkan sistem)</th>
            </tr>
            <tr class="w3-pale-blue">
                <th>Zonasi 
                <br/>${btnzonasi}</th>
                <th>Afirmasi
                <br/>${btnafirmasi}</th>
                <th>Perpindahan Tugas<br/>${btnptk}</th>
            </tr>
            <tr>
                ${s_zonasi}
                ${s_afirmasi}
                ${s_ptk}
            </tr>
            <tr class="w3-pale-blue">
                <th colspan="3">Kuota Jalur</th>
            </tr>
            <tr class="w3-pale-blue">
                <th>
                    <i class="fa fa-edit w3-right w3-blue w3-button tb_btn_editkuota_zonasi" onclick="sel_editable(this,'tb_result_kuotazonasi')" title="Edit kuota zonasi"></i>
                    Zonasi
                </th>
                <th>
                    <i class="fa fa-edit w3-blue w3-right w3-button tb_btn_editkuota_afirmasi" onclick="sel_editable(this,'tb_result_kuotaafirmasi')" title="Edit kuota Afirmasi"></i>
                    Afirmasi
                </th>
                <th>
                    <i class="fa fa-edit w3-blue w3-right w3-button tb_btn_editkuota_perpindahanptk" onclick="sel_editable(this,'tb_result_kuotaperpindahanptk')"title="Edit kuota Perpindahan Tugas/PTK"></i>
                    Perpindahan Tugas
                </th>
            </tr>
            <tr>
                <td class="tb_result_kuotazonasi">${r.kuota_zonasi}</td>
                <td class="tb_result_kuotaafirmasi">${r.kuota_afirmasi}</td>
                <td class="tb_result_kuotaperpindahanptk">${r.kuota_ptk}</td>
            </tr>
            <tr>
                <td class="tb_result_totalkuota" colspan="3">${r.kuota_zonasi + r.kuota_afirmasi + r.kuota_ptk}</td>
            </tr>
            <tr class="w3-pale-green">
                <th colspan="3">Tampilkan Data Pagu di Web Utama</th>
            </tr>
            <tr class="w3-pale-green">`;
    html += `
            ${ts_total}
            ${ts_jalur}
            ${ts_khusus}
            `;
    html += `</tr><tr>`;
    html += `${jv_total}${jv_jalur}${jv_khusus}`
    html += `</tr>
        </table><hr/>
        <div class="res_simulasi_kuota"></div>
        <button class="w3-button w3-blue btn_save_tb_pagu" onclick="save_setpagu('tabel_setting_pagu')">Simpan Settingan Pagu</button>
        <button class="w3-button w3-green btn_lihat_tb_pagu" title="Lihat Settingan Pagu yang berlaku di laman Web Utama">Lihat Settingan Pagu</button>
        <hr/>
    </div><br/>
    <div class="w3-card-4 w3-padding w3-small w3-round-large">
    <table class="w3-table-all  w3-small w3-centered">
            <tr class="w3-pale-red">
                <td colspan="3"> Pengaturan di bawah ini Anda dapat mengontrol publikasi (dipublikasikan/disembunyikan) hasil dari <b>Proses Jurnal TIAP JALUR</b>. Sistem pada Proses Jurnal akan otomatis menjurnal sendiri namun Anda dapat mengatur apakah selama proses penjurnalan web utama (web yang ditunjukan pendaftar) menampilkan proses penseleksian atau tidak.</td>
            </tr>
            <tr class="w3-pale-green">
                <td class="w3-border-right">Proses Jurnal ZONASI<br>${pub_sel_zonasi}</td>
                <td class="w3-border-right">Proses Jurnal AFIRMASI<br>${pub_sel_afirmasi}</td>
                <td>Proses Jurnal PINDAH TUGAS (PTK}<br>${pub_sel_ptk}</td>
            </tr>
            <tr class="w3-pale-green">
                <td class="thp_sel_zonasi w3-border-right">${v_thp_sel_zonasi}</td>
                <td class="thp_sel_afirmasi  w3-border-right">${v_thp_sel_afirmasi}</td>
                <td class="thp_sel_ptk">${v_thp_sel_ptk}</td>
                </tr>
                <tr>
                <td colspan="3" class="prosespubpubpub"></td>
                </tr>
                <tr>
                <td colspan="3"><button class="w3-button w3-green w3-round-large" onclick="save_setpagu('pubpubpub')">Simpan Publikasi</button></td>
                </tr>
                </table>
    </div>
    <br/>
    <div class="w3-card-4 w3-padding w3-small w3-round-large"  style="overflow-x:auto"> 
    <h3>Persyaratan Khusus tiap Sistem Jalur </h3>
    Tabel ini untuk informasi mengenai persyaratan-persyaratan khusus tiap sistem Jalur. Anda dapat mengubah sesuai dengan kebutuhan sekolah Anda.
    <table class="w3-table-all w3-small garis tabel_persyaratankhusus_pagu">
        <thead>
            <tr class="w3-pale-blue">
                <th colspan="3">Jalur</th>
            </tr>
            <tr class="w3-pale-blue">
                <th>Zonasi</th>
                <th>Afirmasi</th>
                <th>Perpindahan Tugas/PTK</th>
            </tr>
        </thead>
        <tbody>`;
    for (let x = 0; x < s.length; x++) {
        html += `
            <tr>
                <td contenteditable="true">${s[x].syarat_zonasi}</td>
                <td contenteditable="true">${s[x].syarat_afirmasi}</td>
                <td contenteditable="true">${s[x].syarat_ptk}</td>
                
            </tr>`;
    }
    html += `</tbody>
        <tfoot>
            <tr>
                <td colspan="3" class="w3-pale-green w3-center"><button class="w3-button w3-green w3-round-large simpansyarat" onclick="save_setpagu('tabel_persyaratankhusus_pagu')">Simpan</button></td>
            </tr>
        </tfoot>
    </table><hr/>
        <button class="w3-button w3-green" onclick="addRow_t_setpagu()">Tambah Baris</button>
        <button class="w3-button w3-red" onclick="dellRow_t_setpagu()">Hapus Baris</button>
        <hr/>
    </div><br/>
    <div class="w3-card-4 w3-padding w3-small w3-round-large"  > 
    <h3>Dokumen Khusus tiap Sistem Jalur </h3>
    Tabel ini dokumen yang wajib diunggah selain :
    <ul class="w3-ul">
        <li>Akta Kelahiran/Surat Kenal Lahir</li>
        <li>Kartu Keluarga/Surat Keterangan Domisili</li>
        <li>Ijazah/STSB PAUD/TK/RA</li>
        <li>SPTJM Surat Pertanggung Jawaban Mutlak</li>
    </ul>
    <div style=style="overflow-x:auto">
    <table class="w3-table-all w3-small garis tabel_dokumenkhusus_pagu">
        <thead>
            <tr class="w3-pale-blue">
                <th colspan="3">Jalur</th>
            </tr>
            <tr class="w3-pale-blue">
                <th >Zonasi</th>
                <th >Afirmasi</th>
                <th >Perpindahan Tugas/PTK</th>
            </tr>
            <tr class="w3-pale-blue">
              
                <th>Keterangan Dokumen</th>
               
                <th>Keterangan Dokumen</th>
                
                <th>Keterangan Dokumen</th>
            </tr>
        </thead>
        <tbody>`;
    let datadokumen = s.filter(k => !(k.ket_doc_zonasi == "" && k.ket_doc_afirmasi == "" && k.ket_doc_ptk == ""));
    // console.log(datadokumen);
    for (l = 0; l < datadokumen.length; l++) {
        html += `<tr>
           
            <td contenteditable="true">${datadokumen[l].ket_doc_zonasi}</td>
           
            <td contenteditable="true">${datadokumen[l].ket_doc_afirmasi}</td>
           
            <td contenteditable="true">${datadokumen[l].ket_doc_ptk}</td>
            
        </tr>`;
    }
    html += `</tbody>
    <tfoot>
    <tr>
        <td colspan="6" class="w3-pale-green w3-center">
        <button class="w3-button w3-green w3-round-large simpansyarat" onclick="save_setpagu('tabel_dokumenkhusus_pagu')">Simpan</button>
        <div class="res_simulasi_dokumen"></div>
        </td>
    </tr>
</tfoot>
    </table>
    <hr/>
        <button class="w3-button w3-green" onclick="addRow_t_setpagudoc()">Tambah Baris</button>
        <button class="w3-button w3-red" onclick="dellRow_t_setpagudoc()">Hapus Baris</button>
        <hr/>
    </div><br/><br/><br/>`;

    html_setting.innerHTML = html;
    //aktifkan evenlistener klik untuk elemen tertentu
    const tmbl_tambahkelas = document.querySelector(".tb_btn_tambah_kelas");
    const tmbl_hapuskelas = document.querySelector(".tb_btn_kurangi_kelas");
    const res_tambahkelas = document.querySelector(".tb_result_pagukelas");

    tmbl_tambahkelas.addEventListener("click", () => {
        let angka_tambahkelas = parseInt(res_tambahkelas.innerHTML);
        if (angka_tambahkelas >= 12) {
            alert('Jumlah Kelas terlalu banyak. Maksimal 12')
            res_tambahkelas.innerHTML = 12;
        } else {
            res_tambahkelas.innerHTML = (angka_tambahkelas + 1);
        }
    });
    tmbl_hapuskelas.addEventListener("click", () => {
        let angka_tambahkelas = parseInt(res_tambahkelas.innerHTML);
        if (angka_tambahkelas == 1) {
            alert('Jumlah kelas minimal 1 kelas.')
            res_tambahkelas.innerHTML = 1;
        } else {
            res_tambahkelas.innerHTML = (angka_tambahkelas - 1);
        }
    });

    //aktifkan eventlistener klik untuk element button aktifkan sistem ppdb
    let btn_aktifzonasi = document.querySelector(".tb_btn_aktifkan_zonasi");
    let res_aktifzonasi = document.querySelector(".tb_result_sistemzonasi");
    let btn_aktifafirmasi = document.querySelector(".tb_btn_aktifkan_afirmasi");
    let res_aktifafirmasi = document.querySelector(".tb_result_sistemafirmasi");
    let btn_aktifperpindahanptk = document.querySelector(".tb_btn_aktifkan_perpindahanptk");
    let res_aktifperpindahanptk = document.querySelector(".tb_result_sistemperpindahanptk");

    // let res_kuotazonasi = document.querySelector(".tb_result_kuotazonasi");
    // let res_kuotaafirmasi = document.querySelector(".tb_result_kuotaafirmasi");
    // let res_kuotaperpindahanptk = document.querySelector(".tb_result_kuotaperpindahanptk");


    btn_aktifzonasi.addEventListener("click", () => {
        if (btn_aktifzonasi.innerHTML == "Aktifkan") {
            btn_aktifzonasi.innerHTML = "Nonaktifkan";
            res_aktifzonasi.innerHTML = "Aktif";
            res_aktifzonasi.className += " w3-yellow";
            fn_simulasikuota();
        } else {
            btn_aktifzonasi.innerHTML = "Aktifkan";
            res_aktifzonasi.innerHTML = "Belum Aktif";
            res_aktifzonasi.className = res_aktifzonasi.className.replace("w3-yellow", "");
            fn_simulasikuota();
        };

    });
    btn_aktifafirmasi.addEventListener("click", () => {
        if (btn_aktifafirmasi.innerHTML == "Aktifkan") {
            btn_aktifafirmasi.innerHTML = "Nonaktifkan";
            res_aktifafirmasi.innerHTML = "Aktif";
            res_aktifafirmasi.className += " w3-yellow";
            fn_simulasikuota();
        } else {
            btn_aktifafirmasi.innerHTML = "Aktifkan";
            res_aktifafirmasi.innerHTML = "Belum Aktif";
            res_aktifafirmasi.className = res_aktifafirmasi.className.replace("w3-yellow", "");
            fn_simulasikuota();
        };

    });
    btn_aktifperpindahanptk.addEventListener("click", () => {
        if (btn_aktifperpindahanptk.innerHTML == "Aktifkan") {
            btn_aktifperpindahanptk.innerHTML = "Nonaktifkan";
            res_aktifperpindahanptk.innerHTML = "Aktif";
            res_aktifperpindahanptk.className += " w3-yellow";
            fn_simulasikuota();
        } else {
            btn_aktifperpindahanptk.innerHTML = "Aktifkan";
            res_aktifperpindahanptk.innerHTML = "Belum Aktif";
            res_aktifperpindahanptk.className = res_aktifperpindahanptk.className.replace("w3-yellow", "");
            fn_simulasikuota();
        };

    });

    let btn_setpagu = document.querySelector(".btn_lihat_tb_pagu");
    let div = document.querySelector(".res_simulasi_kuota");
    btn_setpagu.addEventListener("click", () => {
        let teks;
        if (btn_setpagu.innerHTML == "Lihat Settingan Pagu") {

            teks = `Ini adalah data settingan Anda yang telah Aktif dan berlaku di laman web (Diketahui dan dipahami oleh calon pendaftar).
            <table class="versi-table w3-striped">
                <tr>
                <td>Daya Tampung Total</td>
                    <td>${r.total_cpdb}</td>
                    <td>${r.showutama_total} </td>
                    </tr>
                    <tr>
                    <td>Daya Tampung Jalur Zonasi</td>
                    <td>${r.kuota_zonasi}</td>
                    <td>${r.showutama_perjalur} dan ${r.sistem_zonasi} </td>
                    </tr>
                <tr>
                <td>Daya Tampung Jalur Afirmasi</td>
                <td>${r.kuota_afirmasi}</td>
                <td>${r.showutama_perjalur} dan ${r.sistem_afirmasi}</td>
                </tr>
                <tr>
                <td>Daya Tampung Jalur Pindahan Tugas</td>
                <td>${r.kuota_ptk}</td>
                <td>${r.showutama_perjalur} dan ${r.sistem_ptk}</td>
                </tr>
                <tr>
                <td colspan="2">Pesan Khusus</td>
                <td>${r.showutama_khusus}</td>
                </tr>
                </table><hr/>
                `;
            div.innerHTML = teks;
            btn_setpagu.innerHTML = "Tutup Settingan Pagu"; //Lihat Settingan Pagu
            btn_setpagu.title = "Tutup Settingan Pagu"; //Lihat Settingan Pagu
        } else {
            div.innerHTML = "";
            btn_setpagu.innerHTML = "Lihat Settingan Pagu";
            btn_setpagu.title = "Lihat Settingan Pagu yang berlaku di laman Web Utama"; //Lihat Settingan Pagu

        }
    });

    let res_kuotatotal = document.querySelector(".tb_result_totalkuota");
    let bol = fn_cekkuota(r.kuota_zonasi, r.kuota_afirmasi, r.kuota_ptk, r.total_cpdb);
    if (bol) {
        setTimeout(() => {
            alert("Maaf, pengaturan pembagian kuota dalam sistem jalur ppdb Anda tidak sama dengan jumlah total daya tampung yang Anda tentukan.")
            res_kuotatotal.className += " w3-red";
        }, 500);
    } else {

        res_kuotatotal.className = res_kuotatotal.className.replace("w3-red", "");
    }


};
const set_pub_seleksi = (zon, bol) => {
    //`<button class="w3-red w3-btn w3-round-large btn_set_pub_seleksi_zonasi" onclick="set_pub_seleksi('zonasi',false)"> Sembunyikan</button>` 
    // `<button class="w3-green w3-btn w3-round-large btn_set_pub_seleksi" onclick="set_pub_seleksi('zonasi',true)"> Publikasikan</button>`;
    //`Proses Proses Jurnal Zonasi <b>DIPUBLIKASIKAN</b>` 
    //: `Proses Proses Jurnal Zonasi <b>DISEMBUNYIKAN</b>`;
    let a = "btn_set_pub_seleksi_" + zon;
    let b = "thp_sel_" + zon;
    let c
    if (zon == "zonasi") {
        c = "Proses Proses Jurnal Zonasi";
    } else if (zon == "afirmasi") {
        c = "Proses Proses Jurnal Afirmasi";
    } else {
        c = "Proses Proses Jurnal Pindah Tugas (Anak PTK)";
    }
    let tombol = document.querySelector("." + a);
    let sel = document.querySelector("." + b);
    if (bol) {
        sel.innerHTML = c + " <b>DIPUBLIKASIKAN</b>";
        tombol.className = tombol.className.replace("w3-green", "w3-red");
        tombol.setAttribute("onclick", `set_pub_seleksi('${zon}',false)`);
        tombol.innerHTML = "Sembunyikan!";
    } else {
        sel.innerHTML = c + " <b>DISEMBUNYIKAN</b>"
        tombol.className = tombol.className.replace("w3-red", "w3-green");
        tombol.setAttribute("onclick", `set_pub_seleksi('${zon}',true)`);
        tombol.innerHTML = "Publikasikan!";

    }
}
const sel_editable = (el, divkelas) => {
    let warnaawal = el.className.indexOf("w3-blue");
    let div = document.querySelector("." + divkelas);

    if (warnaawal === -1) {
        el.className = el.className.replace("w3-red", "w3-blue");
        el.title = "Buka Edit";
        div.removeAttribute("contenteditable");
    } else {
        div.setAttribute("contenteditable", "true");
        el.className = el.className.replace("w3-blue", "w3-red");
        el.title = "Tutup Edit";
        fn_simulasikuota();
    }
};
const fn_cekkuota = (i, m, u, n) => {
    let a = parseInt(i); //zonasi
    let b = parseInt(m); //afirmasi
    let c = parseInt(u); //ptk
    let d = parseInt(n); //total
    let totalbagi = a + b + c;
    let bol;
    if (totalbagi !== d) {
        bol = true;
    } else {
        bol = false;
    }
    return bol

}
const fn_simulasikuota = () => {
    let res_paguperkelas = document.querySelector(".tb_result_paguperkelas");
    let res_pagutotal = document.querySelector(".tb_result_pagutotal");

    let res_aktifzonasi = document.querySelector(".tb_result_sistemzonasi").innerHTML;
    let res_aktifafirmasi = document.querySelector(".tb_result_sistemafirmasi").innerHTML;
    let res_aktifperpindahanptk = document.querySelector(".tb_result_sistemperpindahanptk").innerHTML;

    let res_kuotazonasi = document.querySelector(".tb_result_kuotazonasi");
    let res_kuotaafirmasi = document.querySelector(".tb_result_kuotaafirmasi");
    let res_kuotaperpindahanptk = document.querySelector(".tb_result_kuotaperpindahanptk");
    let res_kuotatotal = document.querySelector(".tb_result_totalkuota");

    let div = document.querySelector(".res_simulasi_kuota");
    //ketahui sistem jalur yang dibuka di sekolah tersebut
    let tekssistem = "";
    if (res_aktifzonasi == "Belum Aktif" && res_aktifafirmasi == "Belum Aktif" && res_aktifperpindahanptk == "Belum Aktif") {
        tekssistem = "Anda belum mengaktifkan Sistem Jalur yang digunakan di PPDB Sekolah Anda."
    } else if (res_aktifzonasi == "Aktif" && res_aktifafirmasi == "Aktif" && res_aktifperpindahanptk == "Aktif") {
        tekssistem = "Anda mengaktifkan semua Sistem Jalur yang digunakan di PPDB Sekolah Anda."
    } else if (res_aktifzonasi == "Aktif" && res_aktifafirmasi == "Belum Aktif" && res_aktifperpindahanptk == " Belum Aktif") {
        tekssistem = "Anda hanya mengaktifkan Sistem Jalur Zonasi saja."
    } else if (res_aktifzonasi == "Belum Aktif" && res_aktifafirmasi == "Aktif" && res_aktifperpindahanptk == " Belum Aktif") {
        tekssistem = "Anda hanya mengaktifkan Sistem Jalur Afirmasi saja."
    } else if (res_aktifzonasi == "Belum Aktif" && res_aktifafirmasi == "Belum Aktif" && res_aktifperpindahanptk == "Aktif") {
        tekssistem = "Anda hanya mengaktifkan Sistem Jalur Perpindahan Tugas/PTK saja."
    } else if (res_aktifzonasi == "Aktif" && res_aktifafirmasi == "Aktif" && res_aktifperpindahanptk == "Belum Aktif") {
        tekssistem = "Anda hanya mengaktifkan  Sistem Jalur Zonasi dan Afirmasi. Tidak membuka sistem Perpindahan Tugas/PTK."
    } else if (res_aktifzonasi == "Aktif" && res_aktifafirmasi == "Belum Aktif" && res_aktifperpindahanptk == "Aktif") {
        tekssistem = "Anda hanya mengaktifkan  Sistem Jalur Zonasi dan Perpindahan Tugas/PTK. Tidak membuka sistem Afirmasi."
    } else if (res_aktifzonasi == "Belum Aktif" && res_aktifafirmasi == "Aktif" && res_aktifperpindahanptk == "Aktif") {
        tekssistem = "Anda hanya mengaktifkan Sistem Jalur Afirmasi dan Perpindahan Tugas/PTK. Tidak membuka sistem Zonasi."
    } else {
        teksistem = "tidak terdeteksi kriteria"
    }

    div.innerHTML = tekssistem;

};
const showkuotawebutama = (el, divkelas) => {
    //alert(el.innerHTML + "\n" + divkelas);

    let tombol = document.querySelectorAll(".bs_nonlain");
    let vallain = document.querySelectorAll(".v_nonlain");
    let tombolkhusus = document.querySelector(".bs_khusus");
    let valkhusus = document.querySelector(".v_khusus");

    if (divkelas == "divshow_pesankhusus") {
        if (el.innerHTML == "Publikasikan") {
            el.innerHTML = "Sembunyikan";
            document.querySelector("." + divkelas).setAttribute("contenteditable", "true");
            document.querySelector("." + divkelas).innerHTML = "Silakan ketik di sini pesan khusus Anda";
            document.querySelector("." + divkelas).className += " w3-yellow";
            vallain.forEach(l => {
                l.innerHTML = "Disembunyikan";
                l.className = l.className.replace("w3-yellow", "");
            });
            tombol.forEach(t => {
                t.innerHTML = "Publikasikan";
            });

        } else {
            el.innerHTML = "Publikasikan";
            document.querySelector("." + divkelas).removeAttribute("contenteditable");
            document.querySelector("." + divkelas).innerHTML = "Disembunyikan";
            document.querySelector("." + divkelas).className = document.querySelector("." + divkelas).className.replace("w3-yellow", "");
            vallain.forEach(l => {
                l.innerHTML = "Disembunyikan";
                l.className = l.className.replace("w3-yellow", "");
            });
            tombol.forEach(t => {
                t.innerHTML = "Publikasikan";
            });

        }
    } else {
        // alert(el.innerHTML + "\n" + divkelas);
        if (el.innerHTML == "Publikasikan") {
            el.innerHTML = "Sembunyikan";
            document.querySelector("." + divkelas).innerHTML = "Dipublikasikan";
            document.querySelector("." + divkelas).className += " w3-yellow";
        } else {
            el.innerHTML = "Publikasikan";
            document.querySelector("." + divkelas).innerHTML = "Disembunyikan";
            document.querySelector("." + divkelas).className = document.querySelector("." + divkelas).className.replace("w3-yellow", "");
        };
        tombolkhusus.innerHTML = "Publikasikan";
        valkhusus.innerHTML = "Disembunyikan";
        valkhusus.className = valkhusus.className.replace(" w3-yellow", "");
    }
};
const save_setpagu = (kelastabel) => {
    // alert(kelastabel);
    // data = new FormData();
    if (kelastabel == "tabel_setting_pagu") {
        let sT = {};
        let sel = [];
        let isi = [];
        let kol1 = document.querySelector(".tb_result_pagukelas").innerHTML.replace(/\s+/g, "");
        let kol2 = document.querySelector(".tb_result_paguperkelas").innerHTML.replace(/\s+/g, "");
        let kol3 = document.querySelector(".tb_result_pagutotal").innerHTML.replace(/\s+/g, "");
        let kol4 = document.querySelector(".tb_result_sistemzonasi").innerHTML;
        let kol5 = document.querySelector(".tb_result_sistemafirmasi").innerHTML;
        let kol6 = document.querySelector(".tb_result_sistemperpindahanptk").innerHTML;
        let kol7 = document.querySelector(".tb_result_kuotazonasi").innerHTML.replace(/\s+/g, "");
        let kol8 = document.querySelector(".tb_result_kuotaafirmasi").innerHTML.replace(/\s+/g, "");
        let kol9 = document.querySelector(".tb_result_kuotaperpindahanptk").innerHTML.replace(/\s+/g, "");
        let kol10 = document.querySelector(".divshow_kuotatotal").innerHTML;
        let kol11 = document.querySelector(".divshow_kuotajalur").innerHTML;
        let kol12 = document.querySelector(".divshow_pesankhusus").innerHTML;

        // let a13 = document.querySelector(".thp_sel_zonasi").innerHTML;
        // let a14 = document.querySelector(".thp_sel_afirmasi").innerHTML;
        // let a15 = document.querySelector(".thp_sel_ptk").innerHTML;
        // let kol13 = (a13.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;
        // let kol14 = (a14.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;
        // let kol15 = (a15.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;


        let bol = fn_cekkuota(kol7, kol8, kol9, kol3);
        if (bol) {
            alert("Maaf, pembagian pagu untuk tiap sistem jalur berbeda tidak sama dengan jumlah total.");
            return;
        }
        document.querySelector(".res_simulasi_kuota").innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;;
        sel.push(kol1);
        sel.push(kol2);
        sel.push(kol3);
        sel.push(kol4);
        sel.push(kol5);
        sel.push(kol6);
        sel.push(kol7);
        sel.push(kol8);
        sel.push(kol9);
        sel.push(kol10);
        sel.push(kol11);
        sel.push(kol12);

        sT.kuota_kelas= kol1;
        sT.kuota_perkelas=kol2;
        sT.total_cpdb=kol3;
        sT.sistem_zonasi=kol4;
        sT.sistem_afirmasi=kol5;
        sT.sistem_ptk=kol6;
        sT.kuota_zonasi=kol7;
        sT.kuota_afirmasi=kol8;
        sT.kuota_ptk=kol9;
        sT.showutama_total=kol10;
        sT.showutama_perjalur=kol11;
        sT.showutama_khusus=kol12

        
        // sel.push(kol13);
        // sel.push(kol14);
        // sel.push(kol15);


        isi.push(sel);
        // console.log(isi);
        let seltabel = JSON.stringify(isi);
        let data = new FormData();
        data.append("action", "editsettingpagu");
        data.append("idss", idss);
        data.append("tabel", seltabel);
        fetch(urllogin, {
                method: "post",
                body: data
            }).then(m => m.json())
            .then(r => {
                //console.log(r)
                alert(r.result);
                html_setpagu(r.records);
                objek_settingpagu = r.records;
            })
            .catch(er => {
                console.log(er);
                document.querySelector(".res_simulasi_kuota").innerHTML = `Maaf, Terjadi kesalahan. Data tidak berhasil tersimpan di server.`
            });
        
        let paguterminal = new FormData();
        paguterminal.append("action","updatepaguterminal");
        paguterminal.append("row",id_sekolah);
        paguterminal.append("objek",JSON.stringify(sT))
        fetch(terminal, {method:"post",body:paguterminal})
        .then(r=>{
           // console.log(r);
        }).catch(er => console.log(er));
            
    } else if (kelastabel == "tabel_dokumenkhusus_pagu") {

        document.querySelector(".res_simulasi_dokumen").innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;;
        //alert(kelastabel);
        let source = document.querySelector('.' + kelastabel).getElementsByTagName("tbody")[0];
        let row = source.rows;

        let arrbaris = [];
        for (let b = 0; b < row.length; b++) {
            let ar_sel = [];
            let sel1 = row[b].cells[0].innerHTML;
            ar_sel.push(sel1);
            let sel2 = row[b].cells[1].innerHTML;
            ar_sel.push(sel2);
            let sel3 = row[b].cells[2].innerHTML;
            ar_sel.push(sel3);
            arrbaris.push(ar_sel);
        };
        //console.table(arrbaris);
        let tabel = JSON.stringify(arrbaris);
        let data = new FormData();
        data.append("action", "simpanTabel");
        data.append("idss", idss);
        data.append("tab", "pagu");
        data.append("tabel", tabel);
        data.append("kolom", 16);

        fetch(urllogin, {
                method: 'post',
                body: data
            }).then(m => m.json())
            .then(r => {
                //console.log(r);
                document.querySelector(".res_simulasi_dokumen").innerHTML = "";
            })
            .catch(er => {
                console.log(er);
                alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
            })

    } else if (kelastabel == "pubpubpub") {
        document.querySelector(".prosespubpubpub").innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        let isi = [];
        let sel = [];
        let a13 = document.querySelector(".thp_sel_zonasi").innerHTML;
        let a14 = document.querySelector(".thp_sel_afirmasi").innerHTML;
        let a15 = document.querySelector(".thp_sel_ptk").innerHTML;
        let kol13 = (a13.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;
        let kol14 = (a14.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;
        let kol15 = (a15.indexOf("DIPUBLIKASIKAN") > -1) ? true : false;
        sel.push(kol13);
        sel.push(kol14);
        sel.push(kol15);

        isi.push(sel);
        // console.log(isi);
        let tabel = JSON.stringify(isi);
        let data = new FormData();
        data.append("action", "simpanTabel");
        data.append("idss", idss);
        data.append("tab", "pagu");
        data.append("tabel", tabel);
        data.append("kolom", 19);

        fetch(urllogin, {
                method: 'post',
                body: data
            }).then(m => m.json())
            .then(r => {
                //console.log(r);
                //console.log(r);
                document.querySelector(".prosespubpubpub").innerHTML = "";
            })
            .catch(er => {
                console.log(er);
                document.querySelector(".prosespubpubpub").innerHTML = "Terjadi kesalahan. Silakan ulangi sesi Anda.";
                alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
            })

    } else {
        let tb = document.querySelector("." + kelastabel).getElementsByTagName("tbody")[0];
        let tf = document.querySelector("." + kelastabel).getElementsByTagName("tfoot")[0];
        tf.rows[0].cells[0].innerHTML = `<button class="w3-button w3-green w3-round-large simpansyarat" onclick="save_setpagu('tabel_persyaratankhusus_pagu')">Simpan</button><br/><img src="/app/barloading.gif" alt="proses loading">`;
        let lr = tb.rows;
        let all = []
        for (r = 0; r < lr.length; r++) {
            let perbaris = lr[r];
            let isi = []
            for (s = 0; s < perbaris.cells.length; s++) {
                let d = perbaris.cells[s].innerHTML;
                isi.push(d);
            }
            all.push(isi)
        }
        let tabelsyarat = JSON.stringify(all);
        let data = new FormData();
        data.append("action", "postsyaratjalur");
        data.append("idss", idss);
        data.append("tabel", tabelsyarat);
        fetch(urllogin, {
                method: "post",
                body: data
            })
            .then(m => m.json())
            .then(r => {
                alert(r.result);
                tf.rows[0].cells[0].innerHTML = `<button class="w3-button w3-green w3-round-large simpansyarat" onclick="save_setpagu('tabel_persyaratankhusus_pagu')">Simpan</button>`;
            })
            .catch(er => {
                console.log(er);
                tf.rows[0].cells[0].innerHTML = `Maaf, terjadi kesalahan. Ulangi Sesi Anda sesaat lagi.`;
            });


    }

};
const addRow_t_setpagu = () => {
    let tabel = document.querySelector(".tabel_persyaratankhusus_pagu").getElementsByTagName("tbody")[0];
    let maksrow = 6;
    let row = tabel.insertRow(-1);
    let sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");

};
const addRow_t_setpagudoc = () => {
    let tabel = document.querySelector(".tabel_dokumenkhusus_pagu").getElementsByTagName("tbody")[0];
    let maksrow = 6;
    let row = tabel.insertRow(-1);
    let sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");

};
const dellRow_t_setpagu = () => {
    let tabel = document.querySelector(".tabel_persyaratankhusus_pagu").getElementsByTagName("tbody")[0];
    let maksrow = tabel.rows.length;
    if (maksrow == 6) {
        alert("Maaf, Tidak bisa menghapus baris lagi.")
    } else {
        tabel.deleteRow(-1);
        save_setpagu('tabel_persyaratankhusus_pagu');
    }

};
const dellRow_t_setpagudoc = () => {
    let tabel = document.querySelector(".tabel_dokumenkhusus_pagu").getElementsByTagName("tbody")[0];
    let maksrow = tabel.rows.length;
    if (maksrow == 1) {
        alert("Maaf, Tidak bisa menghapus baris lagi.")
    } else {
        tabel.deleteRow(-1);
        save_setpagu('tabel_dokumenkhusus_pagu');
    }

};

//setting Seleksi

const set_seleksi = () => {
    html_setting.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    // // pake model Get
    let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
    fetch(link)
        .then(m => m.json())
        .then(r => {

            objek_settingseleksi = r.records;
            html_setseleksi(r.records);
        })
    // // pake method post
    // let data = new FormData();
    // data.append("action", "postgetumum");
    // data.append("idss", idss);
    // data.append("tab", "seleksi");
    // fetch(urllogin, { method: "post", body: data })
    //     .then(m => m.json())
    //     .then(r => console.log(r))


    view_setting.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end"
    });
};
const html_setseleksi = (s) => {
    let r = s[0];

    let html = `
    <div class="w3-card-4 w3-padding w3-round-large"> <h3> Pengaturan Sistem Seleksi</h3> 
    </div><div class="w3-card-4 w3-container w3-justify w3-small w3-round-large w3-margin">
    Sistem seleksi di aplikasi ini dengan menggunakan sistem prioritas. Anda dapat mengatur sistem prioritas berdasarkan kriteria rentang umur dan zonasi. Anda dapat mengisi nilai pada sel zonasi berdasarkan nama/nomor alamat zonasi yang terdekat dengan sekolah Anda. 
    <br/><br/>
    Di Aplikasi ini sudah terdapat database simulasi pendaftar dengan segala macam kondisinya. Anda dapat memastikan sistem seleksi dengan tepat di sini untuk dapat dipastikan sesuai dengan petunjuk dan peraturan yang berlaku.
    </div> 
    <div class="w3-card-4 w3-container  w3-small w3-round-large"  style="overflow-x:auto"> 
    <h3>Atur Alamat Sekolah</h3>
        <table class="w3-table-all w3-small">
            <tr>
                <th>Alamat</th>
                <th>Aksi</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>RT</td>
                <td><input type="number" class="alamat w3-border" value ="${r.alamat_rt}" min="1" onchange="oc_alamat(this, 'alamat_rt')"/></td>
                <td class="alamat_rt">${r.alamat_rt}</td>
            </tr>
            <tr>
                <td>RW</td>
                <td><input type="number" class="alamat w3-border" value ="${r.alamat_rw}" min="1" onchange="oc_alamat(this, 'alamat_rw')"/></td>
                <td class="alamat_rw">${r.alamat_rw}</td>
            </tr>
            <tr>
                <td>Kelurahan</td>
                <td>
                <select class="alamat w3-border select_alamat_kel"  onchange="oc_alamat(this, 'alamat_kelurahan')">
                    <option value="" >Pilih Kelurahan</option>
                    <option value="CIPAYUNG" >Cipayung</option>
                    <option value="RATUJAYA" >Ratujaya</option>
                    <option value="BOJONG PONDOK TERONG" >Bojong Pondok Terong</option>
                    <option value="PONDOK JAYA" >Pondok Jaya</option>
                    <option value="CIPAYUNG JAYA">Cipayung Jaya</option>
                </select>
                </td>
                <td class="alamat_kelurahan">${r.alamat_kelurahan}</td>
            </tr>
            <tr>
                <td>Kecamatan</td>
                <td>
                <select class="w3-border select_alamat_kec" onchange="oc_alamat(this, 'alamat_kecamatan')">
                            <option value="" selected>Pilih Kecamatan</option>
                            <option value="CIPAYUNG" >Cipayung</option>
                            <option value="CILODONG" >Cilodong</option>
                            <option value="BOJONG SARI" >Bojong Sari</option>
                            <option value="SAWANGAN" >Sawangan</option>
                            <option value="BEJI">Beji</option>
                            <option value="CIMANGGIS">Cimanggis</option>
                            <option value="LIMO">Limo</option>
                            <option value="CINERE">Cinere</option>
                            <option value="PANCORAN MAS">Pancoran Mas</option>
                            <option value="SUKMAJAYA">Sukmajaya</option>
                            <option value="TAPOS">Tapos</option>
                        </select>
                    </td>
                    <td class="alamat_kecamatan">${r.alamat_kecamatan}</td>
            </tr>
            <tr>
                <td>Kota</td>
                <td>KOTA DEPOK</td>
                <td>KOTA DEPOK</td>
            </tr>
        </table><hr/>
        <button class="w3-green w3-button " onclick="save_alamat_sekolah(this)">Simpan</button>
        <hr class="w3-clear"/>
    </div>
    <br/>
    <div class="w3-card-4 w3-padding w3-small w3-round-large"  style="overflow-x:auto"> 
    <h3>Atur Sistem Seleksi (Sistem Prioritas)</h3>
    <table class="w3-table-all w3-striped garis w3-centered tb_prioritas w3-small">
        <thead>
        <tr>
            <th rowspan="2">Prioritas</th>
            <th colspan="3">Rentang Skor Umur</th>
            <th colspan="5">Alamat Pendaftar</th>
        </tr>
        <tr>
        <th>&ge;</th>
        <th>s/d</th>
        <th>&le;</th>
            <th>RT</th>
            <th>RW</th>
            <th class="w3-green">Kota</th>
            <th class="w3-green">Kecamatan</th>
            <th class="w3-green">Kelurahan</th>
        </tr>
        <thead><tbody>`;
    for (let a = 0; a < s.length; a++) {
        html += `<tr>
            <td>Prioritas ${a + 1}</td>
            <td><input type="text" class="w3-border k_umur_min${a}" style="width:50px"/></td>
            <td></td>
            <td><input type="text" class="w3-border k_umur_max${a}" style="width:50px"/></td>
            <td><input type="number" class="w3-border k_rt${a}" min="0" style="width:50px"/></td>
            <td><input type="number" class="w3-border k_rw${a}"  min="0" style="width:50px"/></td>
             <td class="td_set_kot${a}">
                    <select class="w3-border k_kot${a}" style="width:90px" onchange="alt_pilih('kota',this)">
                        <option value="" selected>Pilih Kota</option>
                        <option value="KOTA DEPOK" >Kota Depok</option>
                        <option value="KOTA JAKARTA" >Kota Jakarta</option>
                        <option value="KOTA BOGOR" >Kota BOGOR</option>
                        <option value="KAB BOGOR" >Kab BOGOR</option>
                        <option value="Selainnya" >Selainnya</option>
                    </select>
                    <input type="text" class="w3-border in_br${a}" name="v_k_kot${a}" style="width:120px" disabled oninput="ketik_kapital(this)">
                </td>
            <td class="td_set_kec${a}">
            <select class="w3-border k_kec${a}" style="width:90px" onchange="alt_pilih('kec',this)">>
                    <option value="" selected>Pilih Kecamatan</option>
                    <option value="CIPAYUNG" >Cipayung</option>
                    <option value="CILODONG" >Cilodong</option>
                    <option value="BOJONG SARI" >Bojong Sari</option>
                    <option value="SAWANGAN" >Sawangan</option>
                    <option value="BEJI">Beji</option>
                    <option value="CIMANGGIS">Cimanggis</option>
                    <option value="LIMO">Limo</option>
                    <option value="CINERE">Cinere</option>
                    <option value="PANCORAN MAS">Pancoran Mas</option>
                    <option value="SUKMAJAYA">Sukmajaya</option>
                    <option value="TAPOS">Tapos</option>
                    <option value="Selainnya">Selainnya</option>
                </select>
                <input type="text" class="w3-border in_br${a}" name="v_k_kec${a}" style="width:120px" disabled oninput="ketik_kapital(this)">
            </td>
            <td class="td_set_kel${a}">
                <select class="w3-border k_kel${a}" style="width:90px" onchange="alt_pilih('kel',this)">>
                    <option value="" selected>Pilih Kelurahan</option>
                    <option value="CIPAYUNG" >Cipayung</option>
                    <option value="RATUJAYA" >Ratujaya</option>
                    <option value="BOJONG PONDOK TERONG" >Bojong Pondok Terong</option>
                    <option value="PONDOK JAYA" >Pondok Jaya</option>
                    <option value="CIPAYUNG JAYA">Cipayung Jaya</option>
                    <option value="Selainnya">Selainnya</option>
                </select>
                <input type="text" class="w3-border in_br${a}" name="v_k_kel${a}" style="width:120px" disabled oninput="ketik_kapital(this)">
            </td>
           
        </tr>`;
    }
    html += `</tbody></table>
    <hr/>
    <button class="w3-green w3-round" onclick="tambahbaris_prioritas()">Tambah Prioritas</button>
    <button class="w3-red w3-round" onclick="kurangibaris_prioritas(this)">Hapus Prioritas Terakhir</button>
    <button class="w3-blue w3-round" onclick="simpan_prioritas(this)">Simpan Kriteria Prioritas</button>
    <hr/>Catatan: 
    <ul><li>
    Gunakan 0 untuk memilih alamat yang selain di atasnya;</li>
    <li>Gunakan titik untuk koma pada desimal</li>
    <li>Skor umur ditentukan dengan formulasi = tahun + (bulan &div; 100) + (hari &div; 10000)<br/>
    contoh: Umur 6 Tahun 11 Bulan 30 hari<br/>
    = 6 + (11 &div; 100) + ( 30 &div; 10000)<br/>
    = 6 + 0.11 + 0.0030<br/>
    = 6.1130, atau<br/>
    = 6.113
    </li>
    </ul>
    </div>
    <br/>
    <div class="w3-card-4 w3-container w3-small w3-round-large"  style="overflow-x:auto"> 
    <h3>Simulasi Sistem</h3>
        Di Aplikasi ini sudah ada database calon pendaftar. Database ini diperuntukan untuk uji coba dari pengaturan sistem prioritas yang sudah Anda atur sebelumnya.
        <div class="tab">
            <button class="tablinks" onclick="cekdbsimulasi()">Pendaftar</button>
            <button class="tablinks" onclick="cek_simulasiprioritas()">Seleksi</button>
        </div>
        <div class="w3-card-4 tabcontent" id="id_dbpendaftar">
            Database PEndaftar
        </div>
        <div class="w3-card-4 tabcontent w3-padding" id="id_ceksimulasi">
            <div class="btn_tahap_seleksi">
            </div>
            <div class="result_tahapseleksi" style="overflow-x:auto">
            </div>

        </div>
        <hr/>
    </div><br/><br/><br/><br/>
    `;
    html_setting.innerHTML = html;
    let el_select = document.querySelector(".select_alamat_kel");
    el_select.value = r.alamat_kelurahan;
    let el_select_kec = document.querySelector(".select_alamat_kec");
    el_select_kec.value = r.alamat_kecamatan;
    for (let b = 0; b < s.length; b++) {
        document.querySelector(".k_umur_min" + b).value = s[b].umur_min;
        document.querySelector(".k_umur_max" + b).value = s[b].umur_mak;

        document.querySelector(".k_rt" + b).value = s[b].set_rt;
        document.querySelector(".k_rw" + b).value = s[b].set_rw;

        let select_kota_id = ".k_kot" + b;
        let select_kec_id = ".k_kec" + b;
        let select_kel_id = ".k_kel" + b;

        let input_kota_id = "input[name=v_k_kot" + b + "]";
        let input_kec_id = "input[name=v_k_kec" + b + "]";
        let input_kel_id = "input[name=v_k_kel" + b + "]";
        document.querySelector(input_kota_id).value = s[b].set_kota;
        document.querySelector(input_kec_id).value = s[b].set_kec;
        document.querySelector(input_kel_id).value = s[b].set_kel;



        //document.querySelector(select_kota_id).value = s[b].set_kota;

        //document.querySelector(select_kota_id).onchange();


        //document.querySelector(select_kec_id).value = s[b].set_kec;

        //document.querySelector(select_kel_id).value = s[b].set_kel;




    };
    //let tablinks = document.getElementsByClassName("tablinks");
    // tablinks[0].click();
};
const alt_pilih = (d, el) => {
    let namainput = el.className.replace("w3-border ", "v_");
    let namaselect = el.className.replace("w3-border k_kot", ".k_kec");

    let elinput = document.querySelector(`input[name=${namainput}]`);
    elinput.value = el.value;

    if (el.value == "0" || el.value == "Selainnya") {
        elinput.removeAttribute("disabled");
    } else {
        elinput.setAttribute("disabled", "true")
    };
    //console.log(namainput);

};
const ketik_kapital = (el) => el.value = el.value.toUpperCase();

let db_simulasi = {};
const cekdbsimulasi = () => {
    simulasi_prioritas(this, 'id_dbpendaftar');
    let div = document.getElementById('id_dbpendaftar');
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let data = new FormData();
    data.append("action", "postgetumum");
    data.append("idss", idsssampel);
    data.append("tab", "respon");

    fetch(urllogin, {
            method: 'post',
            body: data
        })
        .then(m => m.json())
        .then(r => {
            //console.log(r);
            let rec = r.records;
            db_simulasi = r.records;
            let html = `<h3  class="w3-container">Data seluruh pendaftar</h3>
            <div styla="overflow-x:auto">
            <table class="w3-table-all garis w3-small">
                <tr class="w3-centered">
                    <th rowspan="2">ID Pendaftar</th>
                    <th rowspan="2">Nama Calon PDB</th>
                    <th rowspan="2">Umur</th>
                    <th colspan="5">Alamat</th>
                    <th rowspan="2">Detail</th>
                </tr>
                <tr class="w3-centered">
                    <th>RT</th>
                    <th>RW</th>
                    <th>Kelurahan</th>
                    <th>Kecamatan</th>
                    <th>Kota/Kab</th>
                    
                </tr>`
            for (i = 0; i < rec.length; i++) {
                html += `
                <tr>
                    <td>${rec[i].id_daftar}</td>
                    <td>${rec[i].nama_cpdb}</td>
                    <td>${rec[i].umur}</td>
                    <td>${rec[i].set_rt}</td>
                    <td>${rec[i].set_rw}</td>
                    <td>${rec[i].set_kel}</td>
                    <td>${rec[i].set_kec}</td>
                    <td>${rec[i].set_kota}</td>
                    <td><button onclick="alert(${i})">indek ${i}</button></td>
                    </tr>`;
            }
            html += `
            </table></div>
            `;
            div.innerHTML = html;
        })
};
const tes_simulasiprioritas = () => {
    if (db_simulasi.length === undefined || objek_settingseleksi.length === undefined) {
        alert("Maaf, simulasi belum siap. Pastikan Anda telah membuka pengaturan Pagu dan membuka Data Pendaftar simulasi.");
        return;
    }
    simulasi_prioritas(this, 'id_ceksimulasi');
    let div = document.querySelector(".result_tahapseleksi");
    div.innerHTML = `<i class="fa fa-spin fa-spinner"></i>`;
    ///////////////// start loop /////////////////////

    // let umurmin = document.querySelector(".k_umur_min0").value;
    // let umurmax = document.querySelector(".k_umur_max0").value;
    // let rt = document.querySelector(".k_rt0").value;
    // let rw = document.querySelector(".k_rw0").value;
    // let kelurahan = document.querySelector(".k_kel0").options[document.querySelector(".k_kel0").selectedIndex].value;
    // let kecamatan = document.querySelector(".k_kec0").options[document.querySelector(".k_kec0").selectedIndex].value;
    // let kota = document.querySelector(".k_kot0").options[document.querySelector(".k_kot0").selectedIndex].value;
    let z = 0;
    let objekfilter = Object.fromEntries(Object.entries(objek_settingseleksi[z]).filter(([k, v]) => !(v == 0 || v == "Selainnya" || v == "SELAINNYA" || k.indexOf("set") == -1)));
    // let datas = db_simulasi.filter(k => k.umur >= umurmin && k.umur <= umurmax).sort((a, b) => a.umur < b.umur ? 1 : -1);

    let data = fn_prioritas(db_simulasi, objekfilter);
    console.table(data);
    // let data = datas.filter(k => k.set_rt == rt && k.set_rw == rw && k.set_kel == kelurahan && k.set_kec == kecamatan && k.set_kota == kota);

    //console.log(data);
    // console.log(rt);
    // console.log(rw);
    // console.log(kelurahan);
    // console.log(kecamatan);
    // console.log(kota);
    let html = `<table class="w3-table-all garis w3-tiny"><tr>
    <th>Prioritas</th>
    <th>Nama CPDB</th>
    <th>Umur</th>
    <th>RT</th>
    <th>RW</th>
    <th>Kelurahan</th>
    <th>Kecamata</th>
    <th>Kota</th>
    <th>Aksi</th>
    </tr>`;
    for (i = 0; i < data.length; i++) {
        html += `<tr>
        <td>1</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].umur}</td>
                <td>${data[i].set_rt}</td>
                <td>${data[i].set_rw}</td>
                <td>${data[i].set_kel}</td>
                <td>${data[i].set_kec}</td>
                <td>${data[i].set_kota}</td>
                <td><button onclick="alert('indek-${i}')">${i}</button></td>
                </tr>
                `
    }
    ////////////////////////// loop

    html += `<table>
    Tabel yang tidak lolos kriteria:
    <table class="w3-table-all garis w3-tiny">
    <tr>
        <th>Nama</th>
        <th>Umur</th>
        <th>RT</th>
        <th>RW</th>
        <th>Kelurahan</th>
        <th>Kecamatan</th>
        <th>Kota</th>
    </tr>
    `;
    let dataselain = db_simulasi.filter(k => data.indexOf(k) == -1).sort((a, b) => a.umur < b.umur ? 1 : -1);
    // let dataselain = db_simulasi.filter(k => !data).sort((a, b) => a.umur < b.umur ? 1 : -1);
    // let teks = JSON.stringify(dataselain);
    for (c = 0; c < dataselain.length; c++) {
        html += `<tr>
            <td>${dataselain[c].nama_cpdb}</td>
            <td>${dataselain[c].umur}</td>
            <td>${dataselain[c].set_rt}</td>
            <td>${dataselain[c].set_rw}</td>
            <td>${dataselain[c].set_kel}</td>
            <td>${dataselain[c].set_kec}</td>
            <td>${dataselain[c].set_kota}</td>
        </tr>`;
    }

    html += `</table>`;

    div.innerHTML = html;


};
const cek_simulasiprioritas = () => {
    if (db_simulasi.length === undefined || objek_settingseleksi.length === undefined || objek_settingpagu.length === undefined) {
        alert("Maaf, simulasi belum siap. Pastikan Anda telah membuka pengaturan Pagu dan membuka Data Pendaftar simulasi.");
        return;
    }
    let kuota = objek_settingpagu[0].kuota_zonasi;
    simulasi_prioritas(this, 'id_ceksimulasi');
    let div = document.querySelector(".result_tahapseleksi");
    let html = `<h3  class="w3-container">Sampel Seleksi</h3>Sampel ini menggunakan Sistem jalur Zonasi dengan Daya Tampung / kuota Jalur tersebut sebanyak ${kuota} Calon PDB (Berdasarkan pengaturan Pagu sebelumnya.)
    <table class="w3-table-all garis w3-tiny"><tr class="w3-centered">
            <th rowspan="2">Prioritas</th>
            <th rowspan="2">No. Urut</th>
            <th rowspan="2">Nama CPDB</th>
            <th rowspan="2">Umur</th>
            <th colspan="5">Alamat</th>
            <th rowspan="2">Detail</th>
            </tr>
            <tr>
            <th>RT</th>
            <th>RW</th>
            <th>Kelurahan</th>
            <th>Kecamata</th>
            <th>Kota</th>
    </tr>`;
    // div.innerHTML = `<i class="fa fa-spin fa-spinner"></i>`;
    let prioritas = objek_settingseleksi;
    let db = db_simulasi;
    let count = 0;
    let urut = 1;
    for (let a = 0; a < prioritas.length; a++) {
        let objekfilter = Object.fromEntries(Object.entries(objek_settingseleksi[a]).filter(([k, v]) => !(v == 0 || v == "Selainnya" || v == "SELAINNYA" || k.indexOf("set") == -1)));
        let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
        let indekwarna = (Math.random() * 10).toFixed(0);
        let warna = arrayWarna[indekwarna];
        // let warna = Math.floor(Math.random() * 16777215).toString(16);
        //console.log(objekfilter);
        // db = db.filter(k => k.umur >= parseFloat(prioritas[a].umur_min) && k.umur <= parseFloat(prioritas[a].umur_mak));//.sort((a, b) => a.umur < b.umur ? 1 : -1);
        // db = db.filter(k => k.umur >= prioritas[a].umur_min && k.umur <= prioritas[a].umur_mak).sort((a, b) => a.umur < b.umur ? 1 : -1);
        let datas = fn_prioritas(db, objekfilter);
        let data = datas.filter(k => k.umur >= parseFloat(prioritas[a].umur_min) && k.umur <= parseFloat(prioritas[a].umur_mak)).sort((a, b) => a.umur <= b.umur ? 1 : -1);

        // if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            let nourut = (urut + i);
            if (nourut > kuota) {
                html += `<tr><td class="${warna}">${prioritas[a].nama_prioritas}</td>
                <td class="w3-deep-orange">${nourut}</td>
                <td class="w3-deep-orange">${data[i].nama_cpdb}</td>
                <td class="w3-deep-orange">${data[i].umur}</td>
                <td class="w3-deep-orange">${data[i].set_rt}</td>
                <td class="w3-deep-orange">${data[i].set_rw}</td>
                <td class="w3-deep-orange">${data[i].set_kel}</td>
                <td class="w3-deep-orange">${data[i].set_kec}</td>
                <td class="w3-deep-orange">${data[i].set_kota}</td>
                <td class="w3-deep-orange pointerkan w3-center w3-large" onclick="detail_pendaftar('${data[i].id_baris}')"><i class="fa fa-eye"></i></>
                        </tr>`;
            } else {
                html += `<tr><td class="${warna}">${prioritas[a].nama_prioritas}</td>
                <td>${nourut}</td>
                        <td>${data[i].nama_cpdb}</td>
                        <td>${data[i].umur}</td>
                        <td>${data[i].set_rt}</td>
                        <td>${data[i].set_rw}</td>
                        <td>${data[i].set_kel}</td>
                        <td>${data[i].set_kec}</td>
                        <td>${data[i].set_kota}</td>
                        <td class="pointerkan w3-center w3-large" onclick="detail_pendaftar('${data[i].id_baris}')"><i class="fa fa-eye"></i></td>
                        </tr>`;
            }
        }
        db = db.filter(k => data.indexOf(k) == -1); //.sort((a, b) => a.umur < b.umur ? 1 : -1);
        //console.log(db);


        count += data.length;
        urut += data.length;

        // let tesData = fn_prioritas(db, objekfilter);
        //console.table(tesData);
    }




    html += `</table>
    <h3 class="w3-card-4 w3-round">Tabel yang tidak lolos kriteria ada ${db.length} data:</h3>
        <table class="w3-table-all garis w3-tiny">
            <th rowspan="2">No. Urut</th>
            <th rowspan="2">Nama CPDB</th>
            <th rowspan="2">Umur</th>
            <th colspan="5">Alamat</th>
            <th rowspan="2">Detail</th>
        </tr>
        <tr>
            <th>RT</th>
            <th>RW</th>
            <th>Kelurahan</th>
            <th>Kecamata</th>
            <th>Kota</th>
        </tr>`
    for (x = 0; x < db.length; x++) {
        html += `<tr><td>${x + 1}</td>
                <td>${db[x].nama_cpdb}</td>
                <td>${db[x].umur}</td>
                <td>${db[x].set_rt}</td>
                <td>${db[x].set_rw}</td>
                <td>${db[x].set_kel}</td>
                <td>${db[x].set_kec}</td>
                <td>${db[x].set_kota}</td>
                <td class="pointerkan w3-center w3-large" onclick="detail_pendaftar('${db[x].id_baris}')"><i class="fa fa-eye"></i></td>
            </tr>`;
    }
    html += `    
        </table>
    `;
    // console.log(db);
    div.innerHTML = html;
    //console.log(count);
};
const fn_prioritas = (arrObj, objfilter) => {
    let data = arrObj.filter(function (item) {
        for (var key in objfilter) {
            if (item[key] === undefined || item[key] != objfilter[key])
                return false;
        }
        return true;
    });
    return data; //.sort((a, b) => a.umur < b.umur ? 1 : -1);
};
const simulasi_prioritas = (el, id) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    el.className += " active";

};
const simpan_prioritas = (el) => {
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Proses kirim`;
    let tabel = document.querySelector(".tb_prioritas").getElementsByTagName("tbody")[0];
    let s = tabel.rows.length;

    let arrbaris = [];
    for (let b = 0; b < s; b++) {
        let ar_sel = [];
        let nama = "Prioritas " + (b + 1);
        ar_sel.push(nama);
        ar_sel.push(document.querySelector(".k_umur_min" + b).value);
        ar_sel.push(document.querySelector(".k_umur_max" + b).value);
        ar_sel.push(document.querySelector(".k_rt" + b).value);
        ar_sel.push(document.querySelector(".k_rw" + b).value);
        //
        let input_kota_id = "input[name=v_k_kot" + b + "]";
        let input_kec_id = "input[name=v_k_kec" + b + "]";
        let input_kel_id = "input[name=v_k_kel" + b + "]";
        ar_sel.push(document.querySelector(input_kel_id).value); // = s[b].set_kel;
        ar_sel.push(document.querySelector(input_kec_id).value); // = s[b].set_kec;
        ar_sel.push(document.querySelector(input_kota_id).value); // = s[b].set_kota;

        // ar_sel.push(document.querySelector(".k_kel" + b).options[document.querySelector(".k_kel" + b).selectedIndex].value);
        // ar_sel.push(document.querySelector(".k_kec" + b).options[document.querySelector(".k_kec" + b).selectedIndex].value);
        // ar_sel.push(document.querySelector(".k_kot" + b).options[document.querySelector(".k_kot" + b).selectedIndex].value);


        arrbaris.push(ar_sel);
    };
    let tabelsyarat = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "kriteriaseleksi");
    data.append("idss", idss);
    data.append("tabel", tabelsyarat);
    fetch(urllogin, {
            method: "post",
            body: data
        })
        .then(m => m.json())
        .then(r => {
            alert(r.result);
            objek_settingseleksi = r.records;
            //tf.rows[0].cells[0].innerHTML = `<button class="w3-button w3-green w3-round-large simpansyarat" onclick="save_setpagu('tabel_persyaratankhusus_pagu')">Simpan</button>`;
            el.innerHTML = `Simpan Kriteria Prioritas`;
        })
        .catch(er => {
            console.log(er);
            alert("Maaf, terjadi kesalahan.")
            el.innerHTML = `Simpan Kriteria Prioritas`;
            //tf.rows[0].cells[0].innerHTML = `Maaf, terjadi kesalahan. Ulangi Sesi Anda sesaat lagi.`;
        });
}
const oc_alamat = (el, cls) => {
    let div = document.querySelector("." + cls);
    // let namakelas = el.className;
    div.innerHTML = el.value;
};
const tambahbaris_prioritas = () => {
    let tabel = document.querySelector(".tb_prioritas").getElementsByTagName("tbody")[0];
    let brs = tabel.rows.length;
    let indeks = brs + 1;
    let sufix = brs;

    let row = tabel.insertRow(-1);
    let sel = row.insertCell(-1);
    sel.innerHTML = "Prioritas " + indeks;
    sel = row.insertCell(-1);
    sel.innerHTML = `<input type="text" class="w3-border k_umur_min${sufix}" style="width:50px"/>`;
    sel = row.insertCell(-1);
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.innerHTML = `<input type="text" class="w3-border k_umur_max${sufix}" style="width:50px"/>`;
    sel = row.insertCell(-1);
    sel.innerHTML = `<input type="number" class="w3-border k_rt${sufix}" min="0" style="width:50px"/>`;
    sel = row.insertCell(-1);
    sel.innerHTML = `<input type="number" class="w3-border k_rw${sufix}" min="0" style="width:50px"/>`;
    sel = row.insertCell(-1);
    sel.innerHTML = `<select class="w3-border k_kot${sufix}" style="width:90px" onchange="alt_pilih('kota',this)"> <option value="" selected>Pilih Kota</option> <option value="KOTA DEPOK" >Kota Depok</option> <option value="KOTA JAKARTA" >Kota Jakarta</option> <option value="KOTA BOGOR" >Kota BOGOR</option> <option value="Selainnya" >Selainnya</option> </select>
    <input type="text" class="w3-border in_br${sufix}" name="v_k_kot${sufix}" style="width:120px" disabled oninput="ketik_kapital(this)">
    `
    sel = row.insertCell(-1);
    sel.innerHTML = `
    <select class="w3-border k_kec${sufix}" style="width:90px" onchange="alt_pilih('kota',this)">> 
    <option value="" selected>Pilih Kecamatan</option> <option value="CIPAYUNG" >Cipayung</option> <option value="CILODONG" >Cilodong</option> <option value="BOJONG SARI" >Bojong Sari</option> <option value="SAWANGAN" >Sawangan</option> <option value="BEJI">Beji</option> <option value="CIMANGGIS">Cimanggis</option> <option value="LIMO">Limo</option> <option value="CINERE">Cinere</option> <option value="PANCORAN MAS">Pancoran Mas</option> <option value="SUKMAJAYA">Sukmajaya</option> <option value="TAPOS">Tapos</option> <option value="Selainnya">Selainnya</option> 
    </select>
    <input type="text" class="w3-border in_br${sufix}" name="v_k_kec${sufix}" style="width:120px" disabled oninput="ketik_kapital(this)">
    `;
    sel = row.insertCell(-1);
    sel.innerHTML = `
    <select class="w3-border k_kel${sufix}" style="width:90px" onchange="alt_pilih('kota',this)">
        <option value="" selected>Pilih Kelurahan</option>
        <option value="CIPAYUNG" >Cipayung</option>
        <option value="RATUJAYA" >Ratujaya</option>
        <option value="BOJONG PONDOK TERONG" >Bojong Pondok Terong</option>
        <option value="PONDOK JAYA" >Pondok Jaya</option>
        <option value="CIPAYUNG JAYA">Cipayung Jaya</option>
        <option value="Selainnya">Selainnya</option>
    </select>
    <input type="text" class="w3-border in_br${sufix}" name="v_k_kel${sufix}" style="width:120px" disabled oninput="ketik_kapital(this)">
    
    `;
};
const kurangibaris_prioritas = (el) => {
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Proses Hapus`;
    let tabel = document.querySelector(".tb_prioritas").getElementsByTagName("tbody")[0];
    let brs = tabel.rows.length;
    if (brs == 4) {
        alert('Maaf, tidak bisa menghapus baris terakhir');
        return;
    }
    tabel.deleteRow(-1);
    tabel = document.querySelector(".tb_prioritas").getElementsByTagName("tbody")[0];
    let s = tabel.rows.length;
    let arrbaris = [];
    for (let b = 0; b < s; b++) {
        let ar_sel = [];
        let nama = "Prioritas " + (b + 1);
        ar_sel.push(nama);
        ar_sel.push(document.querySelector(".k_umur_min" + b).value);
        ar_sel.push(document.querySelector(".k_umur_max" + b).value);
        ar_sel.push(document.querySelector(".k_rt" + b).value);
        ar_sel.push(document.querySelector(".k_rw" + b).value);

        ar_sel.push(document.querySelector("input[name=v_k_kel" + b + "]").value);
        ar_sel.push(document.querySelector("input[name=v_k_kec" + b + "]").value);
        ar_sel.push(document.querySelector("input[name=v_k_kot" + b + "]").value);

        // ar_sel.push(document.querySelector(".v_k_kel" + b).options[document.querySelector(".k_kel" + b).selectedIndex].value);
        // ar_sel.push(document.querySelector(".v_k_kec" + b).options[document.querySelector(".k_kec" + b).selectedIndex].value);
        // ar_sel.push(document.querySelector(".v_k_kot" + b).options[document.querySelector(".k_kot" + b).selectedIndex].value);
        arrbaris.push(ar_sel);
    };
    let kosong = ["", "", "", "", "", "", "", ""];
    arrbaris.push(kosong);
    let tabelsyarat = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "kriteriaseleksi");
    data.append("idss", idss);
    data.append("tabel", tabelsyarat);
    fetch(urllogin, {
            method: "post",
            body: data
        })
        .then(m => m.json())
        .then(r => {
            alert(r.result);
            el.innerHTML = `Hapus Prioritas Terakhir`;
        })
        .catch(er => {
            console.log(er);
            alert("Maaf, terjadi kesalahan.");
            el.innerHTML = `Hapus Prioritas Terakhir`;
        });
};
const detail_pendaftar = (id) => {
    let data = db_simulasi.filter(k => k.id_baris == id)[0];
    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";
    let html = `<h3 class="w3-center">Data Pendaftar</h3><table class="w3-table-all w3-striped" style="margin:0 auto">`;
    Object.keys(data).forEach(el => {
        html += `<tr> <td>${el.replace("_", " ").toUpperCase()}</td> <td>${data[el]}</td> </tr>`;
    })
    html += `</table>`;
    dividinfo.innerHTML = html;
}
const set_yt = () => {
    html_setting.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let data = new FormData();
    data.append("action", "postgetumum")
    data.append("idss", idss);
    data.append("tab", "yt");
    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(r => {
            //alert(r.result);
            //console.log(r);
            html_yt(r.records);
        }).catch(er => {
            console.log(er);
            html_setting.innerHTML = "Oups, Maaf. Terjadi kesalahan! ";
            alert("Maaf, terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.");
        })
    // const saveTabelKeTab = (e) =>{
    //     let tabel = e.parameter.tabel;
    //     let isi = JSON.parse(tabel);
    //     let idss = e.parameter.idss;
    //     let fsCol = parseInt(e.parameter.kolom);
    //     let tab = e.parameter.tab;


};
const html_yt = (r) => {
    let html = `<div class="w3-card-4 w3-padding w3-round-large">
    <h3>Atur Konten Youtube</h3>
    </div>
    <div class="w3-card-4 w3-container w3-justify w3-small w3-round-large w3-margin">
    Di aplikasi ini Anda dapat menambahkan pilihan konten Youtube sebagai sarana informasi lainnya. Di Aplikasi telah disediakan video mengenai tutorial cara penggunaan aplikasi PPDB ini.<br/><br>
    Sekolah Anda dapat menambahkan atau menyembunyikan konten video yang telah disediakan oleh Aplikasi. 
    </div>
    <div class="w3-card-4 w3-container w3-justify w3-small w3-round-large w3-margin">
    <h4>Petunjuk Pengaturan Konten Youtube di laman Admin</h4>
    <div class="w3-card-4  w3-round-large w3-padding" >
        <div class="containerbaru">
            <iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/D9rcAdw-CxE" title="YT"></iframe>
        </div>
    </div><hr/>
    </div>
    <div class="w3-card-4 w3-container w3-justify w3-small w3-round">
    <h4>Tabel Konten Youtube yang dipublikasikan</h4>
    Agar data konten tersimpan di server, setelah benar-benar terisi silakan klik simpan.
    <div style="overflow-x:auto">
        <table class="w3-table-all garis w3-centered tabel_yt">
        <thead>
            <tr>
                <th>No.</th>
                <th>Video ID Youtube</th>
                <th>Keterangan Youtube</th>
                <th>Preview</th>
                <th>Status</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>`;
    for (let i = 0; i < r.length; i++) {

        html += `<tr>
            <td>${i + 1}</td>
            <td contenteditable="true">${r[i].id_yt}</td>
            <td contenteditable="true">${r[i].ket_yt}</td>
            <td onclick="preview_yt(${i},'${r[i].id_yt}')" class="pointerkan"><i class="fa fa-youtube-play w3-xxlarge"></i></td>
            <td>${r[i].status_yt}</td>
            <td><i class="fa fa-plus w3-button w3-green" onclick="publikasi_yt(${i},true)"> Publikasikan</i>
            <i class="fa fa-minus w3-button w3-red" onclick="publikasi_yt(${i},false)"> Sembunyikan</i>
            </td>
            </tr>`;
    }
    html += `</tbody></table>
        </div>
        <hr/>
        <button class="w3-green w3-round" onclick="tambahbaris_yt()"> Tambahkan Baris</button>
        <button class="w3-red w3-round" onclick="kurangibaris_yt(this)">Hapus Baris Terakhir</button>
        <button class="w3-blue w3-round" onclick="simpan_yt(this)">Simpan Konten Youtube</button>
        <button class="w3-dark-grey w3-round" onclick="default_yt(this)">Kembalikan konten default</button>
        <hr/>
    </div><hr>
    `;
    html_setting.innerHTML = html;

};
const preview_yt = (i, id) => {
    id_modal_info.style.display = 'block';
    let div = document.querySelector(".teks_info_modal");
    let tabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let teks = tabel.rows[i].cells[2].innerHTML;
    let html = `<h4 class="w3-center">Preview video</h4>
    <h5 class="w3-center">${teks}</h5>
    <div class="containerbaru">
            <iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/${id}" title="Preview YT"></iframe>
        </div><hr/>
    `
    div.innerHTML = html;
};
const publikasi_yt = (indek, bol) => {
    let tabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    if (bol) {
        let c_id = tabel.rows[indek].cells[1].innerHTML;
        if (c_id == "") {
            alert("Maaf, Video ID Youtube harus diisi.")
            return;
        }
        let fn = `preview_yt(${indek},'${c_id}')`;
        tabel.rows[indek].cells[4].innerHTML = "Dipublikasikan";
        tabel.rows[indek].cells[3].setAttribute("onclick", fn);
        tabel.rows[indek].cells[3].setAttribute("class", "pointerkan");
        tabel.rows[indek].cells[3].innerHTML = `<i class="fa fa-youtube-play w3-xxlarge"></i>`;
        //tabel.rows[indek].cells[4].innerHTML
        //onclick="preview_yt('D9rcAdw-CxE')" class="pointerkan"><i class="fa fa-youtube-play w3-large"></i>
    } else {
        tabel.rows[indek].cells[4].innerHTML = "Disembunyikan";
        // let c_id = tabel.rows[indek].cells[1].innerHTML;
        // let fn = `preview_yt('${c_id}')`;
        // tabel.rows[indek].cells[3].setAttribute("onclick", fn);
        // tabel.rows[indek].cells[3].setAttribute("class", "pointerkan");
        // tabel.rows[indek].cells[3].innerHTML = `<i class="fa fa-youtube-play w3-large"></i>`;

    }
};
const tambahbaris_yt = () => {
    let tabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let lr = tabel.rows.length;
    let row = tabel.insertRow(-1);
    let sel = row.insertCell(-1);
    sel.innerHTML = lr + 1;
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.setAttribute("contenteditable", "true");
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.innerHTML = "Klik Publikasi untuk review";
    sel = row.insertCell(-1);
    sel.innerHTML = "";
    sel = row.insertCell(-1);
    sel.innerHTML = `<i class="fa fa-plus w3-button w3-green" onclick="publikasi_yt(${lr},true)"> Publikasikan</i>
    <i class="fa fa-minus w3-button w3-red" onclick="publikasi_yt(${lr},false)"> Sembunyikan</i>
`;
};
const kurangibaris_yt = (el) => {
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Memproses`;
    let tabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let lr = tabel.rows.length;
    if (lr <= 1) {
        alert("Maaf, konten video minal berisi satu konten.");
        return;
    };
    tabel.deleteRow(-1);

    tabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let row = tabel.rows;
    let arrbaris = [];
    for (let b = 0; b < row.length; b++) {
        let ar_sel = [];
        let sel1 = row[b].cells[1].innerHTML;
        ar_sel.push(sel1);
        let sel2 = row[b].cells[2].innerHTML;
        ar_sel.push(sel2);
        let sel3 = row[b].cells[4].innerHTML;
        ar_sel.push(sel3);
        arrbaris.push(ar_sel);
    };
    //console.table(arrbaris);
    let kosong = ["", "", ""];
    arrbaris.push(kosong);
    let tabels = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "yt");
    data.append("tabel", tabels);
    data.append("kolom", 1);

    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            // console.log(r);

            el.innerHTML = `Hapus Baris Terakhir`;
        })
        .catch(er => {
            console.log(er);
            alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
        })
};
const simpan_yt = (el) => {
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Memproses`;
    let source = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let row = source.rows;

    let arrbaris = [];
    for (let b = 0; b < row.length; b++) {
        let ar_sel = [];
        let sel1 = row[b].cells[1].innerHTML;
        ar_sel.push(sel1);
        let sel2 = row[b].cells[2].innerHTML;
        ar_sel.push(sel2);
        let sel3 = row[b].cells[4].innerHTML;
        ar_sel.push(sel3);
        arrbaris.push(ar_sel);
    };
    //console.table(arrbaris);
    let tabel = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "yt");
    data.append("tabel", tabel);
    data.append("kolom", 1);

    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            //console.log(r);
            el.innerHTML = `Simpan Konten Youtube`;
        })
        .catch(er => {
            console.log(er);
            alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
        })

    // setTimeout(() => {
    // }, 500);
    //id_yt	ket_yt	status_yt
    // const saveTabelKeTab = (e) =>{
    //     let tabel = e.parameter.tabel;
    //     let isi = JSON.parse(tabel);
    //     let idss = e.parameter.idss;
    //     let fsCol = parseInt(e.parameter.kolom);
    //     let tab = e.parameter.tab;
};
const default_yt = (el) => {
    let pesan = confirm("Anda yakin ingin menampilkan konten Youtube? Konten-konten Anda sebelumnya mungkin saja akan dihapus.\n\n Klik OK untuk melanjutkan atau CANCEL untuk membatalkan");
    if (!pesan) return;

    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Memproses`;
    let bodytabel = document.querySelector('.tabel_yt').getElementsByTagName("tbody")[0];
    let data = new FormData();
    data.append("action", "yt_default")
    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(rr => {
            //console.log(rr);
            let r = rr.records;
            let html = "";
            for (i = 0; i < r.length; i++) {
                html += `<tr>
            <td>${i + 1}</td>
            <td contenteditable="true">${r[i].id_yt}</td>
            <td contenteditable="true">${r[i].ket_yt}</td>
            <td onclick="preview_yt(${i},'${r[i].id_yt}')" class="pointerkan"><i class="fa fa-youtube-play w3-xxlarge"></i></td>
            <td>${r[i].status_yt}</td>
            <td><i class="fa fa-plus w3-button w3-green" onclick="publikasi_yt(${i},true)"> Publikasikan</i>
            <i class="fa fa-minus w3-button w3-red" onclick="publikasi_yt(${i},false)"> Sembunyikan</i>
            </td>
            </tr>`;
            };
            bodytabel.innerHTML = "";
            bodytabel.innerHTML = html;
            el.innerHTML = `Kembalikan konten default`;

        }).catch(er => {
            console.log(er);
            alert("Maaf, terjadi kesalahan.");
            el.innerHTML = `Kembalikan konten default`;
        })

};
//// fungsi halaman admin bekerja;
//fungsi halaman verifikasi:
const divverif_judul = document.querySelector(".h2_judul_verif");
const divverif_teksplus = document.querySelector(".teks_tambahan_judul_verif");
const divverif_result = document.querySelector(".result_verifikasi");

const verif_menu = () => {
    divverif_judul.innerHTML = "Halaman Verifikasi Pendaftar";
    divverif_teksplus.innerHTML = "Di sini Admin/Tim Verifikasi/Panitia PPDB melakukan tugasnya dalam memverifikasi berkas pendaftaran yang masuk."
    divverif_result.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let html = `
    <div class="tab">
    <button class="w3-button tabverif active" onclick="pindahTab(this,'terminal')">dB Terminal</button>
    <button class="w3-button tabverif" onclick="pindahTab(this,'all')">Daftar Peserta</button>`
    html +=`
    <button class="w3-button tabverif w3-hide" onclick="pindahTab(this,'dobel')">Indikasi Pendaftar Ganda</button>
    <button class="w3-button tabverif w3-hide" onclick="pindahTab(this,'yet')">Pendaftar Belum Verifikasi</button>
    <button class="w3-button tabverif w3-hide" onclick="pindahTab(this,'gagal')">Tidak Lolos Verifikasi</button>`
    html +=`<button class="w3-button tabverif " onclick="pindahTab(this,'verifulang')">Verifikasi Ulang</button>`
    html +=`<button class="w3-button tabverif w3-hide" onclick="pindahTab(this,'ceklebihsatusekolah')">Mendaftar 2 Sekolah</button></div>
    <div class="verif_verivikator w3-border w3-container" style="overflow-x:auto">
   
    </div>

    `;

    divverif_result.innerHTML = html;
    document.querySelectorAll('.tabverif')[0].click();
};


const cekpendaftarmasuk = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);
            db_pendaftar = r.records;
            let data = r.records;
            let html = `
            Data Pendaftar (Diurutkan berdasarkan waktu pendaftaran terkini):<hr/>
            <button class="w3-button w3-green w3-round-large" onclick="exportTabel('tabel_pendaftarmasuk')"><i class="fa fa-download"></i> Export Ms. Excel</button><hr/> 
            <table class="w3-table-all garis w3-small tabel_pendaftarmasuk"><thead>
        <tr>
            <th>Sistem Jalur</th> 
            <th>ID Pendaftar</th>
            <th>Nama Pendaftar</th>
            <th>Status Pendaftaran</th>
            <th>Detail</th>
         
        </tr> </thead> <tbody>`;
            for (let i = data.length - 1; i >= 0; i--) {
                html += `<tr>
                <td>${data[i].jalur_cpdb}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].id_status}</td>
                <td><button onclick="detailpendaftar('${data[i].id_pendaftar}')"><i class="fa fa-eye w3-large"></i> Detail</button>
                </td>
               
        </tr>`;
            }
            html += ` </tbody> </table> `;
            div.innerHTML = html;
        }).catch(er => {
            console.log(er);
        })
};

const cekdataterminal = ()=>{
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<div class="w3-center w3-margin-top"><img src="/app/barloading.gif" alt="proses loading"> ... sedang memanggil data</div>`;
    let datakirim = new FormData();
    datakirim.append("action","databaseterminal");
    datakirim.append("idsekolah",id_sekolah);
    
    fetch(urlppdb,{method:"post",body:datakirim})
    .then(m => m.json()).then(r => {
        //console.log(r)
        db_pendaftar = r.records;
            let data = r.records;
            let html = `
            Data Pendaftar (Diurutkan berdasarkan waktu pendaftaran terkini):<hr/>
            <button class="w3-button w3-green w3-round-large" onclick="exportTabel('tabel_pendaftarmasuk')"><i class="fa fa-download"></i> Export Ms. Excel</button><hr/> 
            <table class="w3-table-all garis w3-small tabel_pendaftarmasuk"><thead>
        <tr>
            <th>Sistem Jalur</th> 
            <th>ID Pendaftar</th>
            <th>Nama Pendaftar</th>
            <th>Status Pendaftaran</th>
            <th>Detail</th>
         
        </tr> </thead> <tbody>`;
            for (let i = data.length - 1; i >= 0; i--) {
                html += `<tr>
                <td>${data[i].jalur_cpdb}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].id_status}</td>
                <td><button onclick="detailpendaftarTerminal('${data[i].baris_terminal}')"><i class="fa fa-edit w3-large"></i> Verifikasikan</button>
                </td>
            
        </tr>`;
            }
            html += ` </tbody> </table> `;
            div.innerHTML = html;
    }).catch(er=>{
        div.innerHTML = er;
    })
}
const detailpendaftarTerminal = async (row) =>{
    let divid = document.getElementById("id_modal_info");
    divid.style.display = "block"
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<div class="w3-center w3-margin-top"><img src="/app/barloading.gif" alt="proses loading"></div>`;
    //ga perlu pagu dulu nih, langsung deteksi dB terminal untuk memindahkan dB CPDB ke dB Pendaftar sekolah;
    let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
    await fetch(linkpagu).then(m => m.json()).then(r => {
        //console.log("getpagu", r)
        objek_settingpagu = r.records;
    }).catch(er => console.log(er));

    fetch(urlppdb+"?action=panggilDataCPDBTunggal&baris="+row)
    .then(m => m.json()).then(r =>{
        //console.log(r)
   
    db_pendaftar = r.records;
            let data = r.records;
            let d = data[0];//.filter(k => k.id_pendaftar == id)[0];
            let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
            Form ini untuk mencocokkan data utama dalam proses penseleksian (sistem jurnal prioritas). Adapun apabila ada ketidakcocokan data-data selain dalam form ini, dapat dilakukan dalam proses daftar ulang
            <div class="w3-card w3-container w3-center w3-margin-top">
            ID PENDAFTAR : ${d.id_pendaftar}<hr/>`
            html +=`<table class="w3-table-all w3-striped w3-tiny"><thead>`;
                html +=`<tr><th colspan="4" class="w3-center">Riwayat Pendaftaran CPDB ini</th></tr>`
                html +=`<tr>`;
                    html+=`<th class="w3-border w3-center">No.</th>`;
                    
                    html+=`<th class="w3-border w3-center">Sekolah Tujuan</th>`;
                    html+=`<th class="w3-border w3-center">Status Pendaftaran</th>`;
                    html+=`<th class="w3-border w3-center">Keterangan</th>`;
                html +=`</tr></thead><tbody>`;
            let riwayat = JSON.parse(d.riwayat_pendaftaran);
            for(let i = 0 ; i < riwayat.length ; i++){
                let ids = riwayat[i].tujuan_mendaftar;
                let namasekolah = datasekolahkecamatan.filter(s => s.id_sekolah == ids)[0]
                html +=`<tr>`;
                    html +=`<td class="w3-border">${i+1}</td>`;
                    
                    html +=`<td class="w3-border">${namasekolah.nama_sekolah.toUpperCase()}</td>`;
                    html +=`<td class="w3-border">${riwayat[i].id_status}</td>`;
                    html +=`<td class="w3-border">${riwayat[i].ket_status}</td>`;
                html +=`</tr>`;
            }
            html +=`</tbody></table><br>`
            html +=`WAKTU MENDAFTAR : <br/><br/>${tanggalfulllengkap(d.waktu_daftar)}<hr/>
            Status Pendaftaran : <br/><br/><span class="w3-red w3-padding">${d.id_status}</span><hr/>
            Keterangan Status : <br/><br/><span class="w3-pale-green w3-padding">${d.ket_status}</span><hr/>`;

            if (d.editable === true && d.id_status == "Dikembalikan") {
              //  html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-green w3-padding">DIIJINKAN</span><hr/>`;
            } else {

              //  html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-red w3-padding"> TIDAK DIIJINKAN</span><hr/>`;
            }


            html += `</div><h4 class="w3-green">Dokumen Akta Kelahiran/Surat Kenal Lahir</h4>
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_akta == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_akta}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Sesuai/ Tidak Sesuai</td>
                </tr>
                <tr><td>Nama CPDB</td>
                    <td>${d.nama_cpdb}</td>
                    <td>
                        <label for="y_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_nama" name="cocok_nama">Sesuai</label><br/>
                        <label for="t_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_nama" name="cocok_nama">Tidak</label>
                    </td>
                </tr>
                <tr><td>Tempat Lahir</td>
                    <td>${d.cpdb_tempat_lahir}</td>
                    <td>
                        <label for="y_cocok_tempatlahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tempatlahir" name="cocok_tml">Sesuai</label><br/>
                        <label for="t_cocok_tempat">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tempatlahir" name="cocok_tml">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Tanggal Lahir</td>
                    <td>${tanggalfull(d.cpdb_tanggal_lahir)}</td>
                    <td>
                        <label for="y_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tgllahir" name="cocok_ttl">Sesuai</label><br/>
                        <label for="t_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tgllahir" name="cocok_ttl">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Skor Umur</td>
                    <td>${d.cpdb_umur}</td>
                    <td>
                    <label for="y_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_umur" name="cocok_umur">Sesuai</label><br/>
                    <label for="t_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_umur" name="cocok_umur">Tidak</label>
                
                    </td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>${(d.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>
                        <label for="y_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_jk" name="cocok_jk">Sesuai</label><br/>
                        <label for="t_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_jk" name="cocok_jk">Tidak</label>
                    </td>
                </tr>
            </table><hr/><div class="w3-card-4 w3-container">
            Simulasi Umur <br/><input type="date" onchange="konversi_tanggal(this,'sub_arti_tanggal')"><hr/>
            Detail umur: <span class="sub_arti_tanggal"></span><br/>
            Skor Umur: <span class="sub_skor_umur"></span></div>
            <hr/>
            <h4 class="w3-green">Dokumen Tempat Tinggal</h4>
            Berikut ini dokumen Kartu Keluarga (KK) yang menjadi rujukan pengisian alamat Calon Peserta Didik Baru.
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_kk == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_kk}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Sesuai/Tidak Sesuai</td>
                </tr>
                <tr>
                    <td>Kota/Kab</td>
                    <td>${d.cpdb_kota}</td>
                    <td>
                        <label for="y_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kota" name="cocok_kota">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kota" name="cocok_kota">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>${d.cpdb_kec}</td>
                    <td>
                        <label for="y_cocok_kec">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kec" name="cocok_kec">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kec" name="cocok_kec">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>Kelurahan</td>
                    <td>${d.cpdb_kel}</td>
                    <td>
                        <label for="y_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kel" name="cocok_kel">Sesuai</label><br/>
                        <label for="t_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kel" name="cocok_kel">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RW</td>
                    <td>${d.cpdb_rw}</td>
                    <td>
                        <label for="y_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rw" name="cocok_rw">Sesuai</label><br/>
                        <label for="t_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rw" name="cocok_rw">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RT</td>
                    <td>${d.cpdb_rt}</td>
                    <td>
                        <label for="y_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rt" name="cocok_rt">Sesuai</label><br/>
                        <label for="t_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rt" name="cocok_rt">Tidak</label>
                    </td>
                </tr>
            </table>
            <h4 class="w3-green">Dokumen Pendukung Sistem Zalur ${d.jalur_cpdb}</h4>
            <div class="w3-card-4 w3-light-gray w3-container w3-small w3-round-xlarge">
            `;
            let key = "ket_doc_" + (d.jalur_cpdb).toLowerCase();
            //console.log(key);
            let docsyarat = objek_settingpagu.filter(k => k[key] !== "");
            //console.log(docsyarat)
            for (let j = 0; j < docsyarat.length; j++) {
                let kz = "cpdb_id_file_filependukung_" + j;
                let show = "";
                if (d[kz] !== "") {
                    show = ` <div class="containerbaru">
                    <iframe class="responsive-iframebaru" 
                 src="https://drive.google.com/file/d/${d[kz]}/preview"
                  title="akte"></iframe>
             </div>`
                } else {
                    show = "Tidak Diunggah"
                }

                html += `<table class="w3-table-all garis w3-centered"><tbody>
                <tr class="w3-aqua">
                    <td>${docsyarat[j][key]}</td>
                    </tr><tr>
                    <td>${show}</td>
                    </tr><tr>
                    <td>
                        <label for="y_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_dok${j}" name="cocok_dok${j}">Sesuai</label>
                        <label for="t_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_dok${j}" name="cocok_dok${j}">Tidak</label>
                    </td>
                </tr></tbody></table><hr/>
                `;
            };
            html += `</div>
            <hr/>
            <div class="w3-card-4 w3-pale-green kesimpulan_verifikasi w3-padding w3-center">
            Kesimpulan:
            </div>
            <div class="w3-card-4 w3-pale-red  w3-padding w3-center">
            <button class="w3-button w3-green w3-round-xlarge" onclick="masukkankeTahapSeleksiDariTerminal('${d.baris_terminal}')" title="Masukkan ke Proses Jurnal">Proses Jurnal</button>
            <button class="w3-button w3-yellow w3-round-xlarge" onclick="kembalikankependaftar('${d.baris_terminal}')" title=" Kembalikan ke pendaftar (Minta pendaftar mengisi Ulang)">Kembalikan ?????</button>
            
            </div><hr/>
            `;
            // <button class="w3-button w3-red w3-round-xlarge" onclick="EditOlehAdmin('${d.id_pendaftar}')">Edit by Tim</button>
            dividinfo.innerHTML = html; 
    }).catch(er =>{
        console.log(er);
        dividinfo.innerHTML = er;
    });
}
const detailpendaftarTerminal2 = async (row) =>{
    let divid = document.getElementById("id_modal_info");
    divid.style.display = "block"
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<div class="w3-center w3-margin-top"><img src="/app/barloading.gif" alt="proses loading"></div>`;
    //ga perlu pagu dulu nih, langsung deteksi dB terminal untuk memindahkan dB CPDB ke dB Pendaftar sekolah;
    let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
    await fetch(linkpagu).then(m => m.json()).then(r => {
        //console.log("getpagu", r)
        objek_settingpagu = r.records;
    }).catch(er => console.log(er));

    fetch(urlppdb+"?action=panggilDataCPDBTunggal&baris="+row)
    .then(m => m.json()).then(r =>{
        //console.log(r)
   
    db_pendaftar = r.records;
            let data = r.records;
            let d = data[0];//.filter(k => k.id_pendaftar == id)[0];
            let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
            Form ini untuk mencocokkan data utama dalam proses penseleksian (sistem jurnal prioritas). Adapun apabila ada ketidakcocokan data-data selain dalam form ini, dapat dilakukan dalam proses daftar ulang
            <div class="w3-card w3-container w3-center w3-margin-top">
            ID PENDAFTAR : ${d.id_pendaftar}<hr/>`
            html +=`<table class="w3-table-all w3-striped w3-tiny"><thead>`;
                html +=`<tr><th colspan="4" class="w3-center">Riwayat Pendaftaran CPDB ini</th></tr>`
                html +=`<tr>`;
                    html+=`<th class="w3-border w3-center">No.</th>`;
                    
                    html+=`<th class="w3-border w3-center">Sekolah Tujuan</th>`;
                    html+=`<th class="w3-border w3-center">Status Pendaftaran</th>`;
                    html+=`<th class="w3-border w3-center">Keterangan</th>`;
                html +=`</tr></thead><tbody>`;
            let riwayat = JSON.parse(d.riwayat_pendaftaran);
            for(let i = 0 ; i < riwayat.length ; i++){
                let ids = riwayat[i].tujuan_mendaftar;
                let namasekolah = datasekolahkecamatan.filter(s => s.id_sekolah == ids)[0]
                html +=`<tr>`;
                    html +=`<td class="w3-border">${i+1}</td>`;
                    
                    html +=`<td class="w3-border">${namasekolah.nama_sekolah.toUpperCase()}</td>`;
                    html +=`<td class="w3-border">${riwayat[i].id_status}</td>`;
                    html +=`<td class="w3-border">${riwayat[i].ket_status}</td>`;
                html +=`</tr>`;
            }
            html +=`</tbody></table><br>`
            html +=`WAKTU MENDAFTAR : <br/><br/>${tanggalfulllengkap(d.waktu_daftar)}<hr/>
            Status Pendaftaran : <br/><br/><span class="w3-red w3-padding">${d.id_status}</span><hr/>
            Keterangan Status : <br/><br/><span class="w3-pale-green w3-padding">${d.ket_status}</span><hr/>`;

            if (d.editable === true && d.id_status == "Dikembalikan") {
               // html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-green w3-padding">DIIJINKAN</span><hr/>`;
            } else {

                //html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-red w3-padding"> TIDAK DIIJINKAN</span><hr/>`;
            }


            html += `</div><h4 class="w3-green">Dokumen Akta Kelahiran/Surat Kenal Lahir</h4>
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_akta == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_akta}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Kolom Edit Admin</th>
                    <th>Sesuai/ Tidak Sesuai</td>   
                </tr>
                <tr><td>Nama CPDB</td>
                    <td>${d.nama_cpdb}</td>
                    <td><textarea data-revisiverifulang="nama_cpdb" type="text" oninput="ketik_kapital(this)" class="w3-input w3-pale-red">${d.nama_cpdb}</textarea></td>
                    <td>
                        <label for="y_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_nama" name="cocok_nama">Sesuai</label><br/>
                        <label for="t_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_nama" name="cocok_nama">Tidak</label>
                    </td>
                </tr>
                <tr><td>Tempat Lahir</td>
                    <td>${d.cpdb_tempat_lahir}</td>
                    <td><input type="text" data-revisiverifulang="cpdb_tempat_lahir" class="w3-input w3-pale-red" oninput="ketik_kapital(this)"  value="${d.cpdb_tempat_lahir}"></td>
                    <td>
                        <label for="y_cocok_tempatlahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tempatlahir" name="cocok_tml">Sesuai</label><br/>
                        <label for="t_cocok_tempat">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tempatlahir" name="cocok_tml">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Tanggal Lahir</td>
                    <td>${tanggalfull(d.cpdb_tanggal_lahir)}</td>`
                    let dodol = formattanggalinput(new Date(d.cpdb_tanggal_lahir))
                    html+=`
                    <td><input type="date" data-revisiverifulang="cpdb_tanggal_lahir" class="w3-input w3-pale-red"  onchange="konversi_tanggal2(this,'sub_arti_yy')" value="${dodol}" ><span class="sub_arti_yy"></span></td>
                    <td>
                        <label for="y_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tgllahir" name="cocok_ttl">Sesuai</label><br/>
                        <label for="t_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tgllahir" name="cocok_ttl">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Skor Umur</td>
                    <td>${d.cpdb_umur}</td>
                    <td><input type="text" value="${d.cpdb_umur}" data-revisiverifulang="cpdb_umur" class="w3-input w3-pale-red" disabled></td>
                    <td>
                    <label for="y_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_umur" name="cocok_umur">Sesuai</label><br/>
                    <label for="t_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_umur" name="cocok_umur">Tidak</label>
                
                    </td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>${(d.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td><input type="text" data-revisiverifulang="cpdb_jk" value="${d.cpdb_jk}" oninput="ketik_kapital(this)" class="w3-input w3-pale-red" ><br>
                    Ketik: L atau P
                    </td>
                    <td>
                        <label for="y_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_jk" name="cocok_jk">Sesuai</label><br/>
                        <label for="t_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_jk" name="cocok_jk">Tidak</label>
                    </td>
                </tr>
            </table><hr/><div class="w3-card-4 w3-container">
            Simulasi Umur <br/><input type="date" onchange="konversi_tanggal(this,'sub_arti_tanggal')"><hr/>
            Detail umur: <span class="sub_arti_tanggal"></span><br/>
            Skor Umur: <span class="sub_skor_umur"></span></div>
            <hr/>
            <h4 class="w3-green">Dokumen Tempat Tinggal</h4>
            Berikut ini dokumen Kartu Keluarga (KK) yang menjadi rujukan pengisian alamat Calon Peserta Didik Baru.
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_kk == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_kk}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Kolom Edit Admin</th>
                    <th>Sesuai/Tidak Sesuai</td>
                </tr>
                <tr>
                    <td>Kota/Kab</td>
                    <td>${d.cpdb_kota}</td>
                    <td><input type="text" data-revisiverifulang="cpdb_kota" type="text" oninput="ketik_kapital(this)"  value="${d.cpdb_kota}" class="w3-input w3-pale-red">Ketik:KOTA DEPOK untuk depok,</td>
                    <td>
                        <label for="y_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kota" name="cocok_kota">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kota" name="cocok_kota">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>${d.cpdb_kec}</td>
                    <td><input type="text" data-revisiverifulang="cpdb_kec" type="text" oninput="ketik_kapital(this)"  class="w3-input w3-pale-red" value="${d.cpdb_kec}" placeholder="CIPAYUNG"></td>
                    <td>
                        <label for="y_cocok_kec">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kec" name="cocok_kec">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kec" name="cocok_kec">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>Kelurahan</td>
                    <td>${d.cpdb_kel}</td>
                    <td><input type="text" data-revisiverifulang="cpdb_kel" type="text" oninput="ketik_kapital(this)"  class="w3-input w3-pale-red" value="${d.cpdb_kel}"></td>
                    <td>
                        <label for="y_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kel" name="cocok_kel">Sesuai</label><br/>
                        <label for="t_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kel" name="cocok_kel">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RW</td>
                    <td>${d.cpdb_rw}</td>
                    <td><input type="number" data-revisiverifulang="cpdb_rw" type="text"  class="w3-input w3-pale-red" value="${d.cpdb_rw}"></td>
                    <td>
                        <label for="y_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rw" name="cocok_rw">Sesuai</label><br/>
                        <label for="t_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rw" name="cocok_rw">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RT</td>
                    <td>${d.cpdb_rt}</td>
                    <td><input type="number" data-revisiverifulang="cpdb_rt" type="text"  class="w3-input w3-pale-red" value="${d.cpdb_rt}"></td>
                    <td>
                        <label for="y_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rt" name="cocok_rt">Sesuai</label><br/>
                        <label for="t_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rt" name="cocok_rt">Tidak</label>
                    </td>
                </tr>
            </table>
            <div class="w3-card-4 w3-center w3-margin-top w3-margin-bottom">Ubah Jalur
            <br>
            <input type="text" data-revisiverifulang="jalur_cpdb" value="${d.jalur_cpdb}" oninput="ketik_kapital(this)" class="w3-input w3-pale-red w3-center w3-border">
            ketik: ZONASI, AFIRMASI, PTK
            </div><hrr>
            <h4 class="w3-green">Dokumen Pendukung Sistem Zalur ${d.jalur_cpdb}</h4>
            <div class="w3-card-4 w3-light-gray w3-container w3-small w3-round-xlarge">
            `;
            let key = "ket_doc_" + (d.jalur_cpdb).toLowerCase();
            //console.log(key);
            let docsyarat = objek_settingpagu.filter(k => k[key] !== "");
            //console.log(docsyarat)
            for (let j = 0; j < docsyarat.length; j++) {
                let kz = "cpdb_id_file_filependukung_" + j;
                let show = "";
                if (d[kz] !== "") {
                    show = ` <div class="containerbaru">
                    <iframe class="responsive-iframebaru" 
                 src="https://drive.google.com/file/d/${d[kz]}/preview"
                  title="akte"></iframe>
             </div>`
                } else {
                    show = "Tidak Diunggah"
                }

                html += `<table class="w3-table-all garis w3-centered"><tbody>
                <tr class="w3-aqua">
                    <td>${docsyarat[j][key]}</td>
                    </tr><tr>
                    <td>${show}</td>
                    </tr><tr>
                    <td>
                        <label for="y_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_dok${j}" name="cocok_dok${j}">Sesuai</label>
                        <label for="t_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_dok${j}" name="cocok_dok${j}">Tidak</label>
                    </td>
                </tr></tbody></table><hr/>
                `;
            };
            html += `</div>
            <hr/>
            <div class="w3-card-4 w3-pale-green kesimpulan_verifikasi w3-padding w3-center">
            Kesimpulan:
            </div>
            <div class="w3-card-4 w3-pale-red  w3-padding w3-center">
            <button class="w3-button w3-green w3-round-xlarge" onclick="kirim_verifikasiulangkeTerminal('${d.baris_terminal}')" title="Masukkan ke Proses Jurnal">Proses Jurnal</button>
            <button class="w3-button w3-yellow w3-round-xlarge" onclick="kembalikankependaftar('${d.baris_terminal}')" title=" Kembalikan ke pendaftar (Minta pendaftar mengisi Ulang)">Kembalikan ?????</button>
            
            </div><hr/>
            `;
            // <button class="w3-button w3-red w3-round-xlarge" onclick="EditOlehAdmin('${d.id_pendaftar}')">Edit by Tim</button>
            dividinfo.innerHTML = html; 
    }).catch(er =>{
        console.log(er);
        dividinfo.innerHTML = er;
    });
}
const kirim_verifikasiulangkeTerminal = (brsterm) =>{
    let id = parseInt(brsterm);
    //data yagn diupdate admin
    let dataUpdateByAdmi = {};
    let inputEl = document.querySelectorAll("[data-revisiverifulang");
    for(let i = 0 ; i < inputEl.length ; i++){
        let nn = inputEl[i];
        let key = nn.getAttribute("data-revisiverifulang");
        
        let val = nn.value;
        dataUpdateByAdmi[key] = val
    }
    console.log(dataUpdateByAdmi);
    dataUpdateByAdmi.id_status ="Proses Jurnal";
    dataUpdateByAdmi.ket_status ="Proses Jurnal";
    
    //kita panggil dulu databaseterminalnya:
    let dividinfo = document.querySelector(".teks_info_modal");
    
    dividinfo.innerHTML =`<div class="w3-center w3-card-4"><img src="/img/barloading.gif"> Memanggil database Terminal </div>`
    fetch(urlppdb+"?action=panggilDataCPDBTunggal&baris="+id)
    .then(m => m.json()).then(r =>{
        let dataanak = r.records[0];
        // console.log(dataanak);
        dividinfo.innerHTML =`<div class="w3-center w3-card-4"><img src="/img/barloading.gif"> Berhasil memanggil database Terminal dan mulai update data pendaftar </div>`
                let riwayat = JSON.parse(dataanak.riwayat_pendaftaran);
                let updateRiwayat = riwayat.filter(s => s.tujuan_mendaftar == id_sekolah)[0];
                    //
                    updateRiwayat.id_status = "Proses Jurnal";
                    updateRiwayat.ket_status = "Proses Jurnal";
                    
                let newState = riwayat.map(obj => obj.tujuan_mendaftar == id_sekolah ?  Object.assign({},obj, updateRiwayat): obj);
            ////
        dataUpdateByAdmi.riwayat_pendaftaran = JSON.stringify(newState);
        let objekkirimserver = Object.assign(dataanak, dataUpdateByAdmi);
        //console.log(objekkirimserver);
        // console.log(objekkirimserver.baris_terminal)
        let dBverif = new FormData();
        // console.log(urlppdb)
        dBverif.append("action","verifikasiUlangkeTerminal");
        let ky = Object.keys(objekkirimserver)
        for(let i = 0 ; i < ky.length ; i++){
            console.log(ky[i], objekkirimserver[ky[i]])
            dBverif.append(ky[i], objekkirimserver[ky[i]])
        }
        fetch(urlppdb,{method:"post",body:dBverif}).then(m=>m.json())
        .then(r => {
            dividinfo.innerHTML = r.result;
            //console.log(r);
        }).catch(er => {
            console.log(er);
            dividinfo.innerHTML = er;
        })

    }).catch(er => console.log)
}

const masukkankeTahapSeleksiDariTerminal = (id) =>{
    
    let lr = id;//parseInt(id.split("_")[0]);
    let lr_status = "Proses Jurnal";
    let lr_ket = "Proses Jurnal.";
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<div class="w3-center w3-margin-top w3-margin-bottom"><img src="/img/barloading.gif"> ...</div>`;
    
    fetch(urlppdb+"?action=panggilDataCPDBTunggal&baris="+id)
    .then(m => m.json()).then(r =>{
       // console.log(r)
   
    db_pendaftar = r.records;
            let data = r.records;
            let d = data[0];

    let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
    <div class="w3-card-4 w3-round-xlarge w3-container w3-center lr_kirim_status">
        Anda yakin pendaftar ini pendaftar berikut ini telah lolos seleksi dokumen pendaftaran?<br/><br/>
        Data singkat pendaftar:
        <div class="w3-border w3-container">
            <ul class="w3-ul">
                <li>Jalur:<br> ${d.jalur_cpdb}</li>
                <li>Nama:<br> ${d.nama_cpdb}</li>
                <li>ID Pendaftar:<br> ${d.id_pendaftar}</li>
                <li>Status Yang akan dikirim:<br> Proses Jurnal</li>
            </ul>
        </div>
    </div>
    <hr/>
    <div class="w3-center lr_tombol_kirim">
        <button onclick="req_verifikasiDariTerminal('${lr}','${lr_status}','${lr_ket}',this)"><i class="fa fa-paper-plane-o"></i> Kirim</button>
        <button onclick="id_modal_info.style.display='none'"><i class="fa fa-times-circle-o"></i> Batal</button>
    </div>
    <hr/>
    `;

    dividinfo.innerHTML = html;;
    }).catch(er =>{
        console.log(er);
        dividinfo.innerHTML = er
    })
}

const req_verifikasiDariTerminal2 = (baristerminal, idstatus, ketstatus,el) =>{
    //console.log(baristerminal, idstatus, ketstatus,el)
    el.setAttribute("onclick","alert('Sedang proses kirim')");
    let data = db_pendaftar.filter(s => s.baris_terminal == baristerminal);
    let dt = data[0]
    
    let riwayat = JSON.parse(dt.riwayat_pendaftaran);
    //console.log(riwayat)
    //id_status	ket_status	riwayat_pendaftaran
    let dataverif = {};
    dataverif.id_status = idstatus;
    dataverif.ket_status = ketstatus;


    // ////console.log(riwayat);
    // let updateRiwayat ={}
    let updateRiwayat = riwayat.filter(s => s.tujuan_mendaftar == id_sekolah)[0];
    ////
    updateRiwayat.id_status = idstatus;
    updateRiwayat.ket_status = ketstatus;
    
    let newState = riwayat.map(obj => obj.tujuan_mendaftar == id_sekolah ?  Object.assign({},obj, updateRiwayat): obj);
    ////
    //dt.riwayat_pendaftaran = JSON.stringify(newState)
    //console.log(dt);
    dataverif.riwayat_pendaftaran = JSON.stringify(newState)


    let datakirimTerminal = new FormData();
    datakirimTerminal.append("action","verifikasiKeTerminal");
    datakirimTerminal.append("baris",baristerminal);
    datakirimTerminal.append('dataverif',JSON.stringify(dataverif));
    
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<div class="w3-center w3-margin-top w3-margin-bottom"><img src="/img/barloading.gif"> ...</div>`;
    
    fetch(urlppdb,{method:"post",body:datakirimTerminal})
    .then(m => m.json()).then(r =>{
        console.log(r)
        alert(r.result)
        let tabaktif = document.querySelector(".active")
        tabaktif.click();
        dividinfo.innerHTML = r.result;
        setTimeout(()=>{
            document.getElementById("id_modal_info").style.display='none'

        },2000)

    }).catch(er =>{
        console.log(er)
    })
    //verifikasiKeTerminal,baris, dataverif

    //untuk dbTerminal nantinya ini yang akan dipanggil

    //untukdB Respon dan Jurnal

}

const req_verifikasiDariTerminal = (baristerminal, idstatus, ketstatus,el) =>{
    //console.log(baristerminal, idstatus, ketstatus,el)
    el.setAttribute("onclick","alert('Sedang proses kirim')");
    let data = db_pendaftar.filter(s => s.baris_terminal == baristerminal);
    let dt = data[0]
    //console.log(data);
    let riwayat = JSON.parse(dt.riwayat_pendaftaran);
    //console.log(riwayat)
    //id_status	ket_status	riwayat_pendaftaran
    let dataverif = {};
    dataverif.id_status = idstatus;
    dataverif.ket_status = ketstatus;


    // ////console.log(riwayat);
    // let updateRiwayat ={}
    let updateRiwayat = riwayat.filter(s => s.tujuan_mendaftar == id_sekolah)[0];
    //
    updateRiwayat.id_status = idstatus;
    updateRiwayat.ket_status = ketstatus;
    
    let newState = riwayat.map(obj => obj.tujuan_mendaftar == id_sekolah ?  Object.assign({},obj, updateRiwayat): obj);
    //
    //dt.riwayat_pendaftaran = JSON.stringify(newState)
    //console.log(dt);
    dataverif.riwayat_pendaftaran = JSON.stringify(newState)


    let datakirimTerminal = new FormData();
    datakirimTerminal.append("action","verifikasiKeTerminal");
    datakirimTerminal.append("baris",baristerminal);
    datakirimTerminal.append('dataverif',JSON.stringify(dataverif));
    
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<div class="w3-center w3-margin-top w3-margin-bottom"><img src="/img/barloading.gif"> ...</div>`;
    
    fetch(urlppdb,{method:"post",body:datakirimTerminal})
    .then(m => m.json()).then(r =>{
        //console.log(r)
        alert(r.result)
        cekdataterminal();
        dividinfo.innerHTML =r.result;
        setTimeout(()=>{
            id_modal_info.style.display='none'

        },2000)

    }).catch(er =>{

    })
    //verifikasiKeTerminal,baris, dataverif

    //untuk dbTerminal nantinya ini yang akan dipanggil

    //untukdB Respon dan Jurnal

}

const cekpendaftarmasukbelumverif = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);
            db_pendaftar = r.records;
            let data = r.records.filter(k => k.id_status == "Perlu Verifikasi");
            let html = `Data Pendaftar (Diurutkan berdasarkan waktu pendaftaran terkini):<table class="w3-table-all garis w3-small"><thead>
        <tr>
            <th>Sistem Jalur</th> 
            <th>ID Pendaftar</th>
            <th>Nama Pendaftar</th>
            <th>Status Pendaftaran</th>
            <th>Aksi</th>
        </tr> </thead> <tbody>`;
            for (let i = data.length - 1; i >= 0; i--) {
                html += `<tr>
                <td>${data[i].jalur_cpdb}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].id_status}</td>
                <td>
                <button onclick="verifikasikan_berkasini('${data[i].id_pendaftar}')"><i class="fa fa-edit w3-large"></i> Verifikasi</button>
                <button onclick="detailpendaftar('${data[i].id_pendaftar}')"><i class="fa fa-eye w3-large"></i> Detail</button>
                </td>
        </tr>`;
            }
            html += ` </tbody> </table> `;
            div.innerHTML = html;
        }).catch(er => {
            console.log(er);
        })
};


const cekditolakverif = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);
            db_pendaftar = r.records;
            let data = r.records.filter(k => !(k.id_status == "Perlu Verifikasi" || k.id_status == "Proses Jurnal"|| k.id_status == "Diterima"));
            let html = `Data Pendaftar yang tidak lolos seleksi dokumen (tidak masuk ke dalam Proses Jurnal dengan status DITOLAK, DIKEMBALIKAN, dan/atau GANDA PENDAFTARAN) (Diurutkan berdasarkan waktu pendaftaran terkini):
            <hr/>
            <button onclick="newPrint('nTB_tidaklolosseleksi')" class="w3-btn w3-blue"> <i class="fa fa-print"></i> Print</button>
            <button onclick="newExcel('nTB_tidaklolosseleksi')" class="w3-btn w3-green"> <i class="fa fa-file-excel-o"></i> Export XLs</button>
            <hr/>
            <table class="w3-table-all garis w3-small nTB_tidaklolosseleksi"><thead>
        <tr>
            <th>Sistem Jalur</th> 
            <th>ID Pendaftar</th>
            <th>Nama Pendaftar</th>
            <th>Status Pendaftaran</th>
            <th>Keterangan Status</th>
            <th>Aksi</th>
        </tr> </thead> <tbody>`;
            for (let i = data.length - 1; i >= 0; i--) {
                html += `<tr>
                <td>${data[i].jalur_cpdb}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].id_status}</td>
                <td>${data[i].ket_status}</td>
                <td>
                <button onclick="verifikasikan_berkasini('${data[i].id_pendaftar}')"><i class="fa fa-edit w3-large"></i> Verifikasi </button>
                <button onclick="detailpendaftar('${data[i].id_pendaftar}')"><i class="fa fa-eye w3-large"></i> Detail</button>
                </td>
        </tr>`;
            }
            html += ` </tbody> </table> `;
            div.innerHTML = html;
        }).catch(er => {
            console.log(er);
        })
};
const newPrint = (kelas) => {
    //alert(kelas);
    let isibody = document.querySelector("." + kelas).innerHTML;
    let judul;
    if (kelas =="nTB_tidaklolosseleksi"){
        judul ="DATA PENDAFTAR TIDAK LOLOS SELEKSI<br/>(DIKEMBALIKAN, DITOLAK, dan MENDAFTAR GANDA)";
    }else{
        judul ="DATA PENDAFTAR YANG MENDAFTAR LEBIH DARI SATU SEKOLAH";
    };


    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>TABEL PENDAFTAR GANDA</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 landscape;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;



    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">${judul.toUpperCase()}</h4>`;
    body.innerHTML += `<table class="w3-table-all garis ntnt_new">${isibody}</table>`;
    



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
};

const newExcel = (kelas) => {
    //alert(kelas)
    let div = document.getElementById("frameexcel");
    let db, judul, namafile
    if (kelas =="nTB_tidaklolosseleksi"){
        judul ="DATA PENDAFTAR TIDAK LOLOS SELEKSI (DIKEMBALIKAN, DITOLAK, dan MENDAFTAR GANDA)";
        namafile = "TIDAK LOLOS VERIFIKASI";
    }else{
        judul ="DATA PENDAFTAR TIDAK LOLOS SELEKSI (DIKEMBALIKAN, DITOLAK, dan MENDAFTAR GANDA)";
        namafile = " PENDAFTAR LEBIH SATU SEKOLAH";
    };
    db =document.querySelector("." + kelas).rows;
    let html =`<table class="versi-table">
    <tr>
        <td colspan="6">
            ${judul}
        </td>
    </tr>
    <tr>
    <td colspan="6">
            PER ${tanggalfulllengkap(new Date())}
        </td>
    </tr>
    `;
    html += document.querySelector("." + kelas).innerHTML;

    html += `</table>`
    
    div.innerHTML = html;
    let lr = db.length;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: "DATA  " + namafile + " " + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 1,
        barisatas: 2,
        tabelmana: lr

    });
    div.innerHTML = "";
};


const detailpendaftar = async (id) => {
    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";
    dividinfo.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
    await fetch(linkpagu).then(m => m.json()).then(r => {
        objek_settingpagu = r.records;
    }).catch(er => console.log(er))


    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            //console.log(r.records);

            let data = r.records.filter(s => s.id_pendaftar == id)[0];
            let html = `<h3 class="w3-center">Data Pendaftar</h3><div style="overflow-x:auto">
            <div class="w3-blue w3-center w3-padding w3-round-large w3-margin">
            Keterangan Pendaftaran
            </div>
            <table class="w3-table-all w3-striped" style="margin:0 auto">
            <tr>
                <td>Waktu Pendaftaran</td>
                <td>:</td>
                <td>Pukul ${tanggalfulllengkap(data.waktu_daftar)}</td>
            </tr>
            <tr>
                <td>ID Pendaftaran</td>
                <td>:</td>
                <td>${data.id_pendaftar}</td>
            </tr>
            <tr class="w3-yellow">
                <td>STATUS PENDAFTARAN</td>
                <td>:</td>
                <td>${data.id_status}<br>${data.ket_status}</td>
            </tr>
            <tr class="w3-green">
                <td>JALUR CPDB</td>
                <td>:</td>
                <td>${data.jalur_cpdb}</td>
            </tr>
            </table>
            <br>
            
            <div class="w3-blue w3-center w3-padding w3-round-large w3-margin">
            IDENTITAS CALON PESERTA DIDIK BARU
            </div>
            <table class="w3-table-all w3-striped" style="margin:0 auto">
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td>${data.nama_cpdb}</td>
            </tr>
            <tr>
                <td>Tempat Lahir</td>
                <td>:</td>
                <td>${data.cpdb_tempat_lahir}</td>
            </tr>
            <tr>
                <td>Tanggal Lahir</td>
                <td>:</td>
                <td>${tanggalfull(data.cpdb_tanggal_lahir)}</td>
            </tr>
            <tr>
                <td>Skor Umur</td>
                <td>:</td>
                <td>${data.cpdb_umur}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>${(data.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
            </tr>
            <tr>
                <td>Agama</td>
                <td>:</td>
                <td>${data.cpdb_agama}</td>
            </tr>
             <tr>
                <td>Anak ke-</td>
                <td>:</td>
                <td>${data.cpdb_anakke}</td>
            </tr>
            <tr>
                <td>Kewarganegaraan</td>
                <td>:</td>
                <td>${data.cpdb_kewarganegaraan}</td>
            </tr>
            <tr>
                <td>Berkebutuhan Khusus?</td>
                <td>:</td>
                <td>${data.cpdb_abk}</td>
            </tr>
            <tr class="w3-green">
                <td colspan="3">Dokumen Akte Kelahiran</td>
            </tr>
            <tr>
            <td colspan="3"><div class="containerbaru">
            <iframe class="responsive-iframebaru" 
            src="https://drive.google.com/file/d/${(data.cpdb_id_file_akta == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : data.cpdb_id_file_akta}/preview"
             title="akte"></iframe></div>
            </td>
            </tr>
            </table>
            <br>
            <div class="w3-blue w3-center w3-padding w3-round-large w3-margin">
            ALAMAT DAN PENDIDIKAN CALON PESERTA DIDIK BARU
            </div>
            <br>
            <table class="w3-table-all w3-striped" style="margin:0 auto">
            <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>
                ${data.cpdb_alamat_jalan}<br>
                RT ${data.cpdb_rt}/ RW ${data.cpdb_rw}<br>
                ${data.cpdb_kel}<br>
                ${data.cpdb_kec}-
                ${data.cpdb_kota} 
                ${data.cpdb_kota_lainnya}
                </td>
            </tr>
            <tr>
                <td>No. KK</td>
                <td>:</td>
                <td>${data.cpdb_no_kk}</td>
            </tr>
            <tr>
                <td>NIK CPDB</td>
                <td>:</td>
                <td>${data.cpdb_nik}</td>
            </tr>
            <tr>
                <td>Asal Sekolah</td>
                <td>:</td>
                <td>${data.cpdb_sekolahasal}</td>
            </tr>
            <tr>
                <td>NISN</td>
                <td>:</td>
                <td>${data.cpdb_npsn}</td>
            </tr>
            <tr class="w3-green">
                <td colspan="3">Dokumen Kartu/Keluarga</td>
            </tr>
            <tr>
            <td colspan="3"><div class="containerbaru">
            <iframe class="responsive-iframebaru" 
            src="https://drive.google.com/file/d/${(data.cpdb_id_file_kk == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : data.cpdb_id_file_kk}/preview"
             title="akte"></iframe></div>
            </td>
            </tr><tr class="w3-green">
                <td colspan="3">Dokumen Surat Keterangan Domisili (luar zonasi Depok)</td>
            </tr>
            <tr>
            <td colspan="3"><div class="containerbaru">
            <iframe class="responsive-iframebaru" 
            src="https://drive.google.com/file/d/${(data.cpdb_id_file_domisili == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : data.cpdb_id_file_domisili}/preview"
             title="akte"></iframe></div>
            </td>
            </tr>
             <tr class="w3-green">
                <td colspan="3">Dokumen Ijazah</td>
            </tr>
            <tr>
            <td colspan="3"><div class="containerbaru">
            <iframe class="responsive-iframebaru" 
            src="https://drive.google.com/file/d/${(data.cpdb_id_file_ijazah == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : data.cpdb_id_file_ijazah}/preview"
             title="akte"></iframe></div>
            </td>
            </tr>
            </table>
            <br>
            <div class="w3-blue w3-center w3-padding w3-round-large w3-margin">
            IDENTITAS ORANG TUA
            </div>
            <table class="w3-table-all w3-striped" style="margin:0 auto">
            <tr class="w3-yellow">
            <td class="w3-center" colspan="3">Data Ayah</td>
            </tr>
            <tr>
                <td>Nama Ayah</td>
                <td>:</td>
                <td>${data.ortu_nama_ayah}</td>
            </tr>
            <tr>
                <td>Pekerjaan Ayah</td>
                <td>:</td>
                <td>${data.ortu_pekerjaan_ayah}</td>
            </tr>
            <tr>
                <td>Pendidikan Ayah</td>
                <td>:</td>
                <td>${data.ortu_pendidikan_ayah}</td>
            </tr>
            <tr>
                <td>Penghasilan Ayah</td>
                <td>:</td>
                <td>${data.ortu_penghasilan_ayah}</td>
            </tr>
            <tr>
                <td>No HP Ayah</td>
                <td>:</td>
                <td>${data.ortu_hp_ayah}</td>
            </tr>
            <tr class="w3-yellow">
            <td class="w3-center" colspan="3">Data Ibu</td>
            </tr>
            <tr>
                <td>Nama Ibu</td>
                <td>:</td>
                <td>${data.ortu_nama_ibu}</td>
            </tr>
            <tr>
                <td>Pekerjaan Ayah</td>
                <td>:</td>
                <td>${data.ortu_pekerjaan_ibu}</td>
            </tr>

            <tr>
                <td>Pendidikan Ayah</td>
                <td>:</td>
                <td>${data.ortu_pendidikan_ibu}</td>
            </tr>
            
            <tr>
                <td>Penghasilan Ibu</td>
                <td>:</td>
                <td>${data.ortu_penghasilan_ibu}</td>
            </tr>
            <tr>
                <td>No HP Ayah</td>
                <td>:</td>
                <td>${data.ortu_hp_ibu}</td>
            </tr>
            </table>
            <br>
            <div class="w3-blue w3-center w3-padding w3-round-large w3-margin">
            DOKUMEN PENDUKUNG LAINNYA
            </div>
            <table class="w3-table-all w3-striped w3-centered" style="margin:0 auto">
            `;

            let key = "ket_doc_" + (data.jalur_cpdb).toLowerCase();
            //console.log(key);
            let docsyarat = objek_settingpagu.filter(k => k[key] !== "");
            //console.log(docsyarat)
            for (let j = 0; j < docsyarat.length; j++) {
                let kz = "cpdb_id_file_filependukung_" + j;
                let show = "";
                if (data[kz] !== "") {
                    show = ` <div class="containerbaru">
                    <iframe class="responsive-iframebaru" 
                 src="https://drive.google.com/file/d/${data[kz]}/preview"
                  title="akte"></iframe>
             </div>`
                } else {
                    show = "Tidak Diunggah"
                }
                html += `<tr class="w3-aqua ">
                <td>${docsyarat[j][key]}</td>
                </tr>
                <tr>
                <td>${show}</td>
                </tr>`
            }



            html += `</table><br><br></div> `;

            dividinfo.innerHTML = html;
        }).catch(el => {
            console.log(el);
            dividinfo.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi."
        });
}

const pindahTab = (el, a) => {
    if (a == "terminal"){
        cekdataterminal()
    }else if (a == "all") {
        cekpendaftarmasuk();
    }else if (a == "yet") {
        cekpendaftarmasukbelumverif();
    } else if (a == "dobel") {
        cekpendaftarganda();
    } else if (a == "gagal") {
        cekditolakverif();
    } else if (a == "verifulang") {
        //cekditolakverif();
        cekverifulang()
    } else if (a == "ceklebihsatusekolah") {
        //cekditolakverif();
        cekpendaftarmultisekolah();
    } else {

    }
    let tabv = document.querySelectorAll('.tabverif')
    tabv.forEach(elem => {
        elem.className = elem.className.replace("active", "");
    });
    el.className += " active";

};


const cekpendaftarganda = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);
            let realdata = r.records;
            let data = r.records.filter((v, i, a) => !(a.findIndex(t => (t.nama_cpdb === v.nama_cpdb)) === i));
            let html = "Data pendaftar terindikasi melakukan pendaftaran ganda.";
            let resultganda = [];
            let namaacuan = [];
            let tes = [];
            for (let i = 0; i < data.length; i++) {
                let indek = namaacuan.indexOf(data[i].nama_cpdb);
                if (indek === -1) {
                    tes = realdata.filter(s => s.nama_cpdb == data[i].nama_cpdb);
                    resultganda.push(tes)
                    namaacuan.push(data[i].nama_cpdb);
                };
            }
            for (j = 0; j < resultganda.length; j++) {
                html += `<p class="w3-aqua">${namaacuan[j]}</p>
                <table class="w3-table-all garis w3-small">
                <tr>`
                let kolom = resultganda[j];
                for (k = 0; k < kolom.length; k++) {
                    html += `<td><ul class="w3-ul">
                    <li>Waktu Mendaftar:<br> ${tanggalfulllengkap(kolom[k].waktu_daftar)}</li>
                    <li>Nama CPDB:<br> ${kolom[k].nama_cpdb}</li>
                    <li>TTL:<br> ${kolom[k].cpdb_tempat_lahir}, ${tanggalfull(kolom[k].cpdb_tanggal_lahir)}</li>
                    <li>Skor Umur:<br> ${kolom[k].cpdb_umur}</li>
                    <li>Nama Ayah:<br> ${kolom[k].ortu_nama_ayah}</li>
                    <li>Alamat:<br> ${kolom[k].cpdb_alamat_jalan}, <br>
                    RT ${kolom[k].cpdb_rt} RW ${kolom[k].cpdb_rw}<br>
                    Kel. ${kolom[k].cpdb_kel} <br>Kec. ${kolom[k].cpdb_kec}<br>
                    ${kolom[k].cpdb_kota}
                    </li>
                    <li>ID Pendaftar:<br> ${kolom[k].id_pendaftar}</li>
                    <li class="w3-pale-red">Status:<br> ${kolom[k].id_status}</li>
                    <li>Keterangan:<br> ${kolom[k].ket_status}</li>
                    <li>
                    
                    <button onclick="verifikasikan_berkasini('${kolom[k].id_pendaftar}')"><i class="fa fa-edit w3-large"></i> Verifikasi</button>
                    </li>
                <ul>
                </td>`
                }
                html += `</tr></table>`;
            }
            //<button onclick="alert('aksi untuk id ini = ${kolom[k].id_pendaftar}')">AKSI</button>
            // console.log(namaacuan);
            // console.log(resultganda);

            html += `<hr/>`;
            div.innerHTML = html;
        })
        .catch(er => {
            console.log(er);
            div.innerHTML = "Loading selesai, tapi gagal"
        })
}
const cekpendaftargandagagal = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            //  console.log(r);
            let realdata = r.records;
            // let data = r.records.filter((item, pos, self) => self.indexOf(item) == pos);
            // rumus unique array objek (data yang duplikat, otomatis dihapus);
            // let data = r.records.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i);
            // rumus unique array objek (data yang duplikat otomatis dicari);
            //let data = r.records.filter((v, i, a) => !(a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i));
            // rumus unique array objek (data yang duplikat dicari berdasarkan beberapa key tertentu. data duplikat otomatis dicari);
            // let data = r.records.filter((v, i, a) => !(a.findIndex(t => (t.nama_cpdb === v.nama_cpdb && t.ortu_nama_ayah === v.ortu_nama_ayah && t.ortu_nama_ibu === v.ortu_nama_ibu)) === i));
            let data = r.records.filter((v, i, a) => !(a.findIndex(t => (t.nama_cpdb === v.nama_cpdb)) === i));
            let html = "Data pendaftar terindikasi melakukan pendaftaran ganda.";
            // // html += ``
            // let namaacuan = [];
            // for (let i = 0; i < data.length; i++) {
            //     let dataganda = data.filter(s => s.nama_cpdb == data[i].nama_cpdb && namaacuan.indexOf(data[i].nama_cpdb) === -1);//.map(m => m.id_pendaftar || m.nama_cpdb);
            //     console.log(dataganda.length);
            //     // if (dataganda.length !== 0) {
            //     //dataganda.forEach(el => html += `<li>${el}</li>`);
            //     if (dataganda.length !== 0) {

            //     } else {
            //         for (let j = 0; j < dataganda.length; j++) {
            //             html += `<li>${dataganda[j].nama_cpdb} <br> ${dataganda[j].id_pendaftar} <br></li>`;
            //         }

            //     }
            //     //dataganda.length;
            //     namaacuan.push(data[i].nama_cpdb);
            // };

            // html += `<table class="w3-table-all garis w3-tiny"><thead>
            // <tr>
            //         <th>ID Pendaftar</th>
            //         <th>Waktu Mendaftar</th>
            //         <th>Nama CPDB</th>
            //         <th>Nama Ayah</th>
            //         <th>Nama Ibu</th>
            //         <th>Duplikat dengan ID Pendaftar</th>
            //         <th>Aksi</th>
            //         </tr>
            //         </thead><tbody>`;
            for (let i = 0; i < data.length; i++) {
                // let tes = realdata.filter(s => s.nama_cpdb == data[i].nama_cpdb && s.ortu_nama_ayah == data[i].ortu_nama_ayah && s.ortu_nama_ibu == data[i].ortu_nama_ibu && s.id_pendaftar !== data[i].id_pendaftar).map(m => m.id_pendaftar);
                // let tes = realdata.filter(s => s.nama_cpdb == data[i].nama_cpdb && s.id_pendaftar !== data[i].id_pendaftar).map(m => m.id_pendaftar);
                let tes = realdata.filter(s => s.nama_cpdb == data[i].nama_cpdb).map(m => m.id_pendaftar);
                let dom = "";
                tes.forEach(el => dom += `<button onclick="alert('${el}')">${el}</button><br/>`);
                html += `<table class="w3-table-all garis w3-tiny"><thead>
                    <tr>
                    <th>ID Pendaftar</th>
                    <th>Waktu Mendaftar</th>
                    <th>Nama CPDB</th>
                    <th>Nama Ayah</th>
                    <th>Nama Ibu</th>
                    <th>Duplikat dengan ID Pendaftar</th>
                    <th>Aksi</th>
                    </tr>
                    </thead><tbody>`;

                html += `<tr>
                <td>${data[i].id_pendaftar}</td>
                    <td>${tanggalfulllengkap(data[i].waktu_daftar)}</td>
                    <td>${data[i].nama_cpdb}</td>
                    <td>${data[i].ortu_nama_ayah}</td>
                    <td>${data[i].ortu_nama_ibu}</td>

                    <td>${dom}</td>
                    <td>AKSI</td>
                </tr></tbody></table>`;
            }
            html += `<hr/> ganti`
            html += `<hr/>`;
            div.innerHTML = html;
            // console.log(data)
        })
        .catch(er => {
            console.log(er);
            div.innerHTML = "Loading selesai, tapi gagal"
        })
};

const verifikasikan_berkasini = async (id) => {
    let divid = document.getElementById("id_modal_info");
    divid.style.display = "block"
    let dividinfo = document.querySelector(".teks_info_modal");
    dividinfo.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let link = urllogin + "?action=getpagu&idss=" + idss;
    if (objek_settingpagu.length === undefined) {

        await fetch(link)
            .then(m => m.json())
            .then(r => {
                objek_settingpagu = r.records;
            })
    };

    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            //console.log(r.records);
            db_pendaftar = r.records;
            let data = r.records;
            let d = data.filter(k => k.id_pendaftar == id)[0];
            let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
            Form ini untuk mencocokkan data utama dalam proses penseleksian (sistem jurnal prioritas). Adapun apabila ada ketidakcocokan data-data selain dalam form ini, dapat dilakukan dalam proses daftar ulang
            <div class="w3-card w3-container w3-center">
            ID PENDAFTAR : ${d.id_pendaftar}<hr/>
            WAKTU MENDAFTAR : <br/><br/>${tanggalfulllengkap(d.waktu_daftar)}<hr/>
            Status Pendaftaran : <br/><br/><span class="w3-red w3-padding">${d.id_status}</span><hr/>
            Keterangan Status : <br/><br/><span class="w3-pale-green w3-padding">${d.ket_status}</span><hr/>`;

            if (d.editable === true && d.id_status == "Dikembalikan") {
            //    html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-green w3-padding">DIIJINKAN</span><hr/>`;
            } else {

           //     html += `Pendaftarkan diijinkan memperbaiki pendaftaran data ini: <br/><br/><span class="w3-red w3-padding"> TIDAK DIIJINKAN</span><hr/>`;
            }

            html += `</div><h4 class="w3-green">Dokumen Akta Kelahiran/Surat Kenal Lahir</h4>
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_akta == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_akta}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Sesuai/ Tidak Sesuai</td>
                </tr>
                <tr><td>Nama CPDB</td>
                    <td>${d.nama_cpdb}</td>
                    <td>
                        <label for="y_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_nama" name="cocok_nama">Sesuai</label><br/>
                        <label for="t_cocok_nama">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_nama" name="cocok_nama">Tidak</label>
                    </td>
                </tr>
                <tr><td>Tempat Lahir</td>
                    <td>${d.cpdb_tempat_lahir}</td>
                    <td>
                        <label for="y_cocok_tempatlahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tempatlahir" name="cocok_tml">Sesuai</label><br/>
                        <label for="t_cocok_tempat">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tempatlahir" name="cocok_tml">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Tanggal Lahir</td>
                    <td>${tanggalfull(d.cpdb_tanggal_lahir)}</td>
                    <td>
                        <label for="y_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_tgllahir" name="cocok_ttl">Sesuai</label><br/>
                        <label for="t_cocok_tgllahir">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_tgllahir" name="cocok_ttl">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Skor Umur</td>
                    <td>${d.cpdb_umur}</td>
                    <td>
                    <label for="y_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_umur" name="cocok_umur">Sesuai</label><br/>
                    <label for="t_cocok_umur">
                    <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_umur" name="cocok_umur">Tidak</label>
                
                    </td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>${(d.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>
                        <label for="y_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_jk" name="cocok_jk">Sesuai</label><br/>
                        <label for="t_cocok_jk">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_jk" name="cocok_jk">Tidak</label>
                    </td>
                </tr>
            </table><hr/><div class="w3-card-4 w3-container">
            Simulasi Umur <br/><input type="date" onchange="konversi_tanggal(this,'sub_arti_tanggal')"><hr/>
            Detail umur: <span class="sub_arti_tanggal"></span><br/>
            Skor Umur: <span class="sub_skor_umur"></span></div>
            <hr/>
            <h4 class="w3-green">Dokumen Tempat Tinggal</h4>
            Berikut ini dokumen Kartu Keluarga (KK) yang menjadi rujukan pengisian alamat Calon Peserta Didik Baru.
            <div class="containerbaru">
                <iframe class="responsive-iframebaru" 
                src="https://drive.google.com/file/d/${(d.cpdb_id_file_kk == "") ? "18Zvo5idM92xYEIzqKDDFnc0iqI6JvUnS" : d.cpdb_id_file_kk}/preview"
                 title="akte"></iframe>
            </div>
            <table class="w3-table-all garis w3-small">
                <tr class="w3-aqua">
                    <th>Keterangan</th>
                    <th>Isian Pendaftar</th>
                    <th>Sesuai/Tidak Sesuai</td>
                </tr>
                <tr>
                    <td>Kota/Kab</td>
                    <td>${d.cpdb_kota}</td>
                    <td>
                        <label for="y_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kota" name="cocok_kota">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kota" name="cocok_kota">Tidak</label>
                    </td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>${d.cpdb_kec}</td>
                    <td>
                        <label for="y_cocok_kec">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kec" name="cocok_kec">Sesuai</label><br/>
                        <label for="t_cocok_kota">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kec" name="cocok_kec">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>Kelurahan</td>
                    <td>${d.cpdb_kel}</td>
                    <td>
                        <label for="y_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_kel" name="cocok_kel">Sesuai</label><br/>
                        <label for="t_cocok_kel">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_kel" name="cocok_kel">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RW</td>
                    <td>${d.cpdb_rw}</td>
                    <td>
                        <label for="y_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rw" name="cocok_rw">Sesuai</label><br/>
                        <label for="t_cocok_rw">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rw" name="cocok_rw">Tidak</label>
                    </td>
                </tr>
                 <tr>
                    <td>RT</td>
                    <td>${d.cpdb_rt}</td>
                    <td>
                        <label for="y_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_rt" name="cocok_rt">Sesuai</label><br/>
                        <label for="t_cocok_rt">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_rt" name="cocok_rt">Tidak</label>
                    </td>
                </tr>
            </table>
            <h4 class="w3-green">Dokumen Pendukung Sistem Zalur ${d.jalur_cpdb}</h4>
            <div class="w3-card-4 w3-light-gray w3-container w3-small w3-round-xlarge">
            `;
            let key = "ket_doc_" + (d.jalur_cpdb).toLowerCase();
            //console.log(key);
            let docsyarat = objek_settingpagu.filter(k => k[key] !== "");
            //console.log(docsyarat)
            for (let j = 0; j < docsyarat.length; j++) {
                let kz = "cpdb_id_file_filependukung_" + j;
                let show = "";
                if (d[kz] !== "") {
                    show = ` <div class="containerbaru">
                    <iframe class="responsive-iframebaru" 
                 src="https://drive.google.com/file/d/${d[kz]}/preview"
                  title="akte"></iframe>
             </div>`
                } else {
                    show = "Tidak Diunggah"
                }

                html += `<table class="w3-table-all garis w3-centered"><tbody>
                <tr class="w3-aqua">
                    <td>${docsyarat[j][key]}</td>
                    </tr><tr>
                    <td>${show}</td>
                    </tr><tr>
                    <td>
                        <label for="y_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="Y" id="y_cocok_dok${j}" name="cocok_dok${j}">Sesuai</label>
                        <label for="t_cocok_dok${j}">
                        <input type="radio" class="w3-radio radio_cek"  onchange="cekradioverifikasi()"  value ="T" id="t_cocok_dok${j}" name="cocok_dok${j}">Tidak</label>
                    </td>
                </tr></tbody></table><hr/>
                `;
            };
            html += `</div>
            <hr/>
            <div class="w3-card-4 w3-pale-green kesimpulan_verifikasi w3-padding w3-center">
            Kesimpulan:
            </div>
            <div class="w3-card-4 w3-pale-red  w3-padding w3-center">
            <button class="w3-button w3-green w3-round-xlarge" onclick="masukkankeTahapSeleksi('${d.id_pendaftar}')" title="Masukkan ke Proses Jurnal">Proses Jurnal</button>
            <button class="w3-button w3-yellow w3-round-xlarge" onclick="kembalikankependaftar('${d.id_pendaftar}')" title=" Kembalikan ke pendaftar (Minta pendaftar mengisi Ulang)">Kembalikan</button>
            
            </div><hr/>
            `;
            // <button class="w3-button w3-red w3-round-xlarge" onclick="EditOlehAdmin('${d.id_pendaftar}')">Edit by Tim</button>
            dividinfo.innerHTML = html;
            //cekradioverifikasi()
            //<button class="w3-button w3-orange w3-round-xlarge" onclick="tandaipendaftarganda('${d.id_pendaftar}')">Pendaftar Ganda</button>
        })
        .catch(er => {
            console.log(er);
        })

};
const masukkankeTahapSeleksi = (id) => {
    // alert('masukin ke Proses Jurnal' + id);
    //let divid = document.getElementById("id_modal_info");
    // divid.style.display = "block";

    let data = db_pendaftar;
    let d = data.filter(k => k.id_pendaftar == id)[0];
    let dividinfo = document.querySelector(".teks_info_modal");
    let lr = parseInt(id.split("_")[0]);
    let lr_status = "Proses Jurnal";
    let lr_ket = "Silakan pantau pendaftaran Proses Jurnal."

    let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
    <div class="w3-card-4 w3-round-xlarge w3-container w3-center lr_kirim_status">
        Anda yakin pendaftar ini pendaftar berikut ini telah lolos seleksi dokumen pendaftaran?<br/><br/>
        Data singkat pendaftar:
        <div class="w3-border w3-container">
            <ul class="w3-ul">
                <li>Jalur:<br> ${d.jalur_cpdb}</li>
                <li>Nama:<br> ${d.nama_cpdb}</li>
                <li>ID Pendaftar:<br> ${d.id_pendaftar}</li>
                <li>Status Yang akan dikirim:<br> Proses Jurnal</li>
            </ul>
        </div>
    </div>
    <hr/>
    <div class="w3-center lr_tombol_kirim">
        <button onclick="req_verifikasi('${lr}','${lr_status}','${lr_ket}',false)"><i class="fa fa-paper-plane-o"></i> Kirim</button>
        <button onclick="verifikasikan_berkasini('${id}');divid.style.display='none'"><i class="fa fa-times-circle-o"></i> Kembali</button>
    </div>
    <hr/>
    `;

    dividinfo.innerHTML = html;;
};
const req_verifikasi = (lr, status, ket_status, editable) => {
    //alert(lr + "\n\n" + status + "\n\n" + ket_status);

    let dividinfo = document.querySelector(".lr_kirim_status");
    let divtombol = document.querySelector(".lr_tombol_kirim");
    let tutupmodal = document.querySelector(".tutupteksinfomodal");
    divtombol.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    dividinfo.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let data = new FormData();
    data.append("action", "verifikasipendaftar");
    data.append("baris", lr);
    data.append("status", status);
    data.append("ket", ket_status);
    data.append("cegah", editable);
    fetch(urlppdb, {
            method: 'post',
            body: data
        })
        .then(m => m.json())
        .then(r => {
            // console.log(r);
            dividinfo.innerHTML = r.result;
            divtombol.innerHTML = "Jika ingin memverifikasi ulang, silakan menggunakan menu Cari.";
            setTimeout(() => {
                tutupmodal.click()
                cekpendaftarmasukbelumverif();

            }, 5000);

        }).catch(er => {
            console.log(er);
            dividinfo.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.";
        })

}
const kembalikankependaftar = (id) => {
    // alert('kembalikan ke pendaftar' + id);
    let data = db_pendaftar;
    let d = data.filter(k => k.baris_terminal == id)[0];
    let dividinfo = document.querySelector(".teks_info_modal");
    let lr = parseInt(id);
    // let lr_status = "Proses Jurnal";
    // let lr_ket = "Silakan pantau pendaftaran Proses Jurnal."

    let html = `<h3 class="w3-center">Verifikasi Identitas CPDB</h3>
    <div class="w3-card-4 w3-round-xlarge w3-container lr_kirim_status">
        Data Singkat Pendaftar:
        <div class="w3-border w3-container w3-center ">
            <ul class="w3-ul">
                <li>Jalur:<br> ${d.jalur_cpdb}</li>
                <li>Nama:<br> ${d.nama_cpdb}</li>
                <li>ID Pendaftar:<br> ${d.id_pendaftar}</li>
                <li >Status Yang akan dikirim:<br><span class="res_kembalikan">DIKEMBALIKAN</span></li>
            </ul>
        </div>
        <div class="w3-justify lr_tombol_kirim">
        Verifikasi Kembalikan bertujuan untuk mengembalikan informasi pendaftaran kepada pendaftar. Tim verifikasi dan/atau Panitia PPDB silakan memberikan keterangan mengenai 
        informasi pendaftaran yang dikembalikan.
        <div class="w3-card-4 w3-pale-green w3-round-xlarge w3-padding w3-center">
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_tolak" value="Ditolak">
        <label for="p_tolak">Ditolak</label>
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_kembali" value="Dikembalikan">
        <label for="p_kembali">Dikembalikan</label>`;
        // `<input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_ganda" value="MENDAFTAR GANDA">
        // <label for="p_ganda">Mendaftar Ganda</label>`
        html +=`</div>
        <hr/>
        Alasan:<br/>
            <textarea class="w3-input w3-border w3-border-blue isian_alasan" placeholder="Silakan isikan alasan mengapa Anda mengembalikan pendaftaran ini"></textarea>
        <hr/>
        <div class="w3-card-4 w3-pale-green w3-round-xlarge w3-padding w3-center w3-hide">
       Apakah Pendaftar diberi ijin untuk merevisi dan mengirimkan ulang isian pendaftaran ini?: <br/>
                <input type="checkbox" name="cekboxceg" class="w3-check" id="cekboxceg" checked><label for="cekboxceg" class="label_cekbox"><br> Ijinkan</label>
            </div>
        <hr/>
        <button class="w3-blue w3-button tmbl_kirimbalikin_api"><i class="fa fa-paper-plane-o"></i> Kirim</button>
        <button class="w3-green w3-button " onclick="document.getElementById('id_modal_info').style.display='none'"><i class="fa fa-times-circle-o"></i> Kembali</button>
    <hr/></div>        <hr/></div><hr/>
    <div class="w3-card-4 w3-pale-blue w3-round w3-container">
        Petunjuk:
        <ul class="w3-ul">
            <li>
                Pilih <b>Ditolak</b> jika Anda menolak pendaftaran ini. Misalnya karena umur kurang dari 6 tahun. Anda bisa memilih untukmengijinkan pendaftar merevisi isian pendaftaran.
            </li>
            <li>
                Pilih <b>Dikembalikan</b> jika Anda mendapati kelengkapan data informasi pendaftaran dari pendaftar kurang lengkap atau ada isian yang salah (Jika sekolah berkomitmen isian data mutlak diisi oleh pendaftar, bukan oleh Panitia.). Berikan keterangan pendaftaran tersebut.
            </li>`;

            // `<li>
            //     Pilih <b>Mendaftar Ganda</b> jika Anda mendapati pendaftar ini telah melakukan pendaftaran lebih dari sekali di sekolah Anda. Berikan keterangan ID PENDAFTAR lain yang merupakan data sebenarnya dari pendaftar. Kolom ALASAN contoh diisi dengan kata "Ganda dengan ID PENDAFTAR 100_FFFFFF".
            // </li>`
            
            html +=`<li>Menu PENDAFTAR DIMINTA MEMPERBAIKI DAN MENGIRIMKAN ULANG PENDAFTARAN bertujuan pendaftar tidak bisa mengirimkan balik isian pendaftar ke Server (Sebaiknya diceklis untuk pilihan DITOLAK dan MENDAFTAR GANDA). Jika pendaftar diijinkan untuk mengirimkan balik, maka pendaftar dapat merevisi isian pendaftaran ini dan akan masuk ke Antrian MENUNGGU PERSETUJUAN.
            </li>
        </ul>

        </div>
    
    <hr/>
    `;
    // html +=`<div class="w3-card-4 w3-container w3-center">`;
    // html +=`<input type="tel" id="nowasiswa" value="${d.ortu_hp_ibu}" placeholder="Gunakan Format +62, contoh +628123456789" style="width:100%;height:30px" name="nowasiswa">`;
    // html +=`<textarea id="tekssiswa" style="width:100%:height:300px"></textarea>`;
    // html +=`<button class="w3-button w3-green w3-bottombar w3-border w3-border-black" onclick="btnkirimwasiswa()"><i class="fa fa-whatsapp"></i> Kirim Pesan</button>`
    // html +=`</div>`;

    dividinfo.innerHTML = html;;
    let tm = document.querySelector(".tmbl_kirimbalikin_api");
    let Rd = document.querySelectorAll(".radio_pilihan_verif");
    let alasan = document.querySelector(".isian_alasan");
    let cegah = document.querySelector("#cekboxceg");
    let labelcegah = document.querySelector(".label_cekbox");
    let elli = document.querySelector(".res_kembalikan");

    tm.addEventListener("click", () => {
        let ket_status = alasan.value;
        let edit = cegah.checked;
        let status = elli.innerHTML;
        if (lr == "" || status == "") {
            alert("Isian status dan/atau alasannya tidak boleh kosong.");
            // return;
        } else {
            Rd.forEach(el => {
                if (el.checked) {
                    let status = el.value;
                    req_verifikasiDariTerminal(lr, status, ket_status, tm);
                }
            })
        }
    });

    cegah.addEventListener("click", () => {
        let n = cegah.checked;
        if (n) {
            labelcegah.innerHTML = "<br/>YA (Pendaftar <b>Dapat<b> merevisi dan mengirimkan balik isian pendaftaran)"
        } else {
            labelcegah.innerHTML = "<br/>TIDAK (Pendaftar <b>Tidak Dapat</b> merevisi dan mengirimkan balik isian pendaftaran)"

        }
        // console.log(n);
    });
    Rd.forEach(el => {
        el.addEventListener("click", () => {
            if (el.checked) {
                elli.innerHTML = el.value;
                if (el.value == "Dikembalikan" || el.value == "Ditolak") {
                    cegah.checked = true;
                    cegah.disabled = true;
                } else {

                    cegah.checked = false;
                    cegah.disabled = false;
                }
            }
        })
    })
    
   
    
};
function getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' +
        number +
        '&text=' +
        encodeURIComponent(message)

    return url
}
function btnkirimwasiswa() {
    //pesanawalwa.innerHTML = "";
    var teksnya = "Assalamualaikum, Kami dari Panitia PPDB memberikan informasi bahwa: ";
    var nowaa = document.getElementById("nowasiswa").value;
    var nowa;
    if (nowaa.slice(0, 1) == "0") {
        nowa = "+62" + nowaa.slice(1, 12);
    } else if (nowaa.slice(0, 1) == "6") {
        nowa = "+" + nowaa;
    } else {
        nowa = nowaa
    }
    var urlnya = getLinkWhastapp(nowa, teksnya + "\n \n " + document.getElementById("tekssiswa").value);
    window.open(urlnya)
    
}
const EditOlehAdmin = (id) => {
    alert('idnya: ' + id)
};
const tandaipendaftarganda = (id) => {
    alert('gannda id ' + id)
};
const cekradioverifikasi = () => {
    let cl = document.querySelectorAll(".radio_cek");
    let div = document.querySelector(".kesimpulan_verifikasi");
    let html = "Kesimpulan: Terdapat ";
    let count = 0;
    cl.forEach(el => {
        if (el.checked && el.value == "T") {
            count++;
        }
    })
    html += count + " dari isian pokok yang tidak sesuai.";
    div.innerHTML = html;

};
///////////////////// Proses Jurnal

const verif_seleksi = async () => {
    divverif_judul.innerHTML = "Halaman Proses Jurnal (Penjurnalan)";
    divverif_teksplus.innerHTML = "Di sini Admin/Tim Verifikasi/Panitia PPDB melakukan tugasnya dalam mengatur publikasi Proses Jurnal. Tim Verifikator/Panitia PPDB dapat melihat dan mengatur sistem publikasi Proses Jurnal."
    divverif_result.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let html = `
    <div class="tab">
    <button class="w3-button tabverifs active" onclick="pindahTabSeleksi(this,'tahap_seleksi_zonasi')">Seleksi Zonasi</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'tahap_seleksi_afirmasi')">Seleksi Afirmasi</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'tahap_seleksi_ptk')">Pindah Tugas (PTK)</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'all_tahap_seleksi')">Rekapitulasi Seleksi</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'all_publikasi_seleksi')">Info Publikasi</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'tahap_laporan_rekap')">Rekap Laporan</button>
    <button class="w3-button tabverifs " onclick="pindahTabSeleksi(this,'tidakpakaiaplikasi')">Cek Sekolah Lan</button>

    </div>
    <div class="verif_resultseleksi w3-border w3-container" style="overflow-x:auto">
   
    </div>

    `;

    let param = "?action=getdatasheet&tab=respon";
    await fetch(urlppdb + param).then(m => m.json()).then(r => {
        db_pendaftar = r.records;
    }).catch(er => console.log(er));


    let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
    await fetch(link).then(m => m.json()).then(r => {
        objek_settingseleksi = r.records;
    }).catch(er => console.log(er))


    let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
    await fetch(linkpagu).then(m => m.json()).then(r => {
        objek_settingpagu = r.records;
    }).catch(er => console.log(er))

    divverif_result.innerHTML = html;
    document.querySelectorAll('.tabverifs')[0].click();
};

const pindahTabSeleksi = (el, a) => {
    if (a == "tahap_seleksi_zonasi") {
        cek_real_prioritas('kuota_zonasi')
    } else if (a == "tahap_seleksi_afirmasi") {
        //cekpendaftarmasukbelumverif();
        cek_real_prioritas('kuota_afirmasi');
    } else if (a == "tahap_seleksi_ptk") {
        cek_real_prioritas('kuota_ptk');
        // cekpendaftarganda();
    } else if (a == "all_tahap_seleksi") {
        // cekditolakverif();
        rekap_jalur();
    } else if( a=="tahap_laporan_rekap"){
        rekap_panggilsemuadata()
    }else if( a=="tidakpakaiaplikasi"){
        rekap_tidakpakeaplikasi()
    }else {
        html_publikasi_jurnal()
    }
    let tabv = document.querySelectorAll('.tabverifs')
    tabv.forEach(elem => {
        elem.className = elem.className.replace("active", "");
    });
    el.className += " active";

};
let rekapcpdblolos = [];
const rekap_jalur = () => {
    let div = document.querySelector(".verif_resultseleksi");
    let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    let dataptk = fungsi_html_jurnal("kuota_ptk");

    let loloszonasi = datazonasi["lolos_zonasi"];
    let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    let lolosptk = dataptk["lolos_ptk"];

    let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    let ga_ptk = dataptk["tidaklolos_ptk"];

    let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    let kr_ptk = dataptk["nonkriteria_ptk"]

    let ade = loloszonasi.concat(lolosafirmasi);
    let eda = ade.concat(lolosptk);
    rekapcpdblolos = eda;
    let tm = ga_zonasi.concat(ga_afirmasi);
    let ts = tm.concat(ga_ptk);

    let no = kr_zonasi.concat(kr_afirmasi);
    let nonkr = no.concat(kr_ptk);



    let html = `
    <h3 class="w3-center">DATA REKAPITULASI SELEKSI PPDB</h3>
    <p class="w3-small">Data-data berikut ini bisa Anda gunakan sebagai bahan pengumuman final atas pelaksanaan PPDB. Semua proses akan otomatis terkalkulasi di laman ini. Sekolah Anda dapat menjadikan informasi di laman ini sebagai informasi pengumuman atau sebagai administrasi pelaksanaan PPDB di sekolah Anda.
    </p>
    <hr class="w3-border-bottom"/>
    REKAPITULASI JUMLAH DATA SISTEM SELEKSI PPDB
    <div style="overflow-x:auto">
    <table class="w3-table garis w3-centered w3-tiny" style="margin:5px auto">
        <tr>
            <th>Jalur PPDB</th>
            <th>Daya Tampung</th>
            <th>Pendaftar</th>
            <th>Memenuhi Kuota</th>
            <th>Tidak Memenuhi kuota</th>
            <th>Nonkriteria Prioritas</th>
            <th>Verifikasi Ditolak</th>
        </tr>
        <tr>
            <td>ZONASI</td>
            <td>${objek_settingpagu[0].kuota_zonasi}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "ZONASI").length}</td>
            <td>${loloszonasi.length}</td>
            <td>${ga_zonasi.length}</td>
            <td>${kr_zonasi.length}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "ZONASI" && (k.id_status == "Dikembalikan" || k.id_status == "MENDAFTAR GANDA")).length}</td>
            </tr>
            <tr>
            <td>AFIRMASI</td>
            <td>${objek_settingpagu[0].kuota_afirmasi}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "AFIRMASI").length}</td>
            <td>${lolosafirmasi.length}</td>
            <td>${ga_afirmasi.length}</td>
            <td>${kr_afirmasi.length}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "AFIRMASI" && (k.id_status == "Dikembalikan" || k.id_status == "MENDAFTAR GANDA")).length}</td>
            </tr>
            <tr>
            <td>PINDAH TUGAS (ANAK PTK)</td>
            <td>${objek_settingpagu[0].kuota_ptk}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "PTK").length}</td>
            <td>${lolosptk.length}</td>
            <td>${ga_ptk.length}</td>
            <td>${kr_ptk.length}</td>
            <td>${db_pendaftar.filter(k => k.jalur_cpdb == "PTK" && (k.id_status == "Dikembalikan" || k.id_status == "MENDAFTAR GANDA")).length}</td>
        </tr>
        <tr>
            <td>Jumlah</td>
            <td>${objek_settingpagu[0].total_cpdb}</td>
            <td>${db_pendaftar.length}</td>
            <td>${rekapcpdblolos.length}</td>
            <td>${ts.length}</td>
            <td>${nonkr.length}</td>
            <td>${db_pendaftar.filter(k => k.id_status == "Dikembalikan" || k.id_status == "MENDAFTAR GANDA").length}</td>
        </tr>
     
    </table></div>
    
    <hr class="w3-border-bottom"/>
    <h4 class="w3-center">Rekapitulasi CPDB Diterima Sesuai dengan Kuota/Pagu</h4>
    <div class="w3-border w3-center w3-padding w3-margin-bottom ">
    <button onclick="xl_rekapSeleksi('tu_diterimakuota')" class="w3-button w3-green w3-round-large"><i class="fa fa-file-excel-o"></i> Excel</button>
    <button onclick="Pr_rekapSeleksi('tu_diterimakuota')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Print</button>
    </div>`;
    html += `<table class="w3-table-all garis w3-tiny tu_diterimakuota"><thead> 
    <tr class="w3-centered"> 
    <th rowspan="2">Jalur PPDB</th>
    <th rowspan="2">Prioritas</th> 
     <th rowspan="2">No. Urut</th> 
        <th rowspan="2">ID Pendaftar</th> 
        <th rowspan="2">Nama CPDB</th>
         <th rowspan="2">Umur</th> <th colspan="5">Alamat</th> <th rowspan="2">Detail</th> </tr> <tr> <th>RT</th> <th>RW</th> <th>Kelurahan</th> <th>Kecamata</th> <th>Kota</th> </tr></thead><tbody>`;
    html += datazonasi.terseleksikuota;
    html += dataafirmasi.terseleksikuota;
    html += dataptk.terseleksikuota;
    html += `</tbody></table><hr/>`
    html += `<h3 class="w3-center">Rekapitulasi CPDB tidak diterima karena kuota/pagu sudah terpenuhi</h3>
    <div class="w3-border w3-center w3-padding w3-margin-bottom ">
    <button onclick="xl_rekapSeleksi('tu_ditolakkuota')" class="w3-button w3-green w3-round-large"><i class="fa fa-file-excel-o"></i> Excel</button>
    <button onclick="Pr_rekapSeleksi('tu_ditolakkuota')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Print</button>
    </div>
    `;
    html += `<table class="w3-table-all garis w3-tiny tu_ditolakkuota"><thead><tr class="w3-centered"> 
    <th rowspan="2">Jalur PPDB</th> 
    <th rowspan="2">Prioritas</th> 
    <th rowspan="2">No.</th> <th rowspan="2">ID Pendaftar</th> <th rowspan="2">Nama CPDB</th> <th rowspan="2">Umur</th> <th colspan="5">Alamat</th> <th rowspan="2">Detail</th> </tr> <tr> <th>RT</th> <th>RW</th> <th>Kelurahan</th> <th>Kecamata</th> <th>Kota</th> </tr></thead><tbody>`;
    html += datazonasi.terseleksinonkuota;
    html += dataafirmasi.terseleksinonkuota;
    html += dataptk.terseleksinonkuota;
    html += `</tbody></table>`
    html += `<h3 class="w3-center">Rekapitulasi pendaftar CPDB yang tidak lolos sistem kriteria prioritas</h3>
    <div class="w3-border w3-center w3-padding w3-margin-bottom ">
    <button onclick="xl_rekapSeleksi('tu_ditolakkriteria')" class="w3-button w3-green w3-round-large"><i class="fa fa-file-excel-o"></i> Excel</button>
    <button onclick="Pr_rekapSeleksi('tu_ditolakkriteria')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Print</button>
    </div>`;
    html += `<table class="w3-table-all garis w3-tiny tu_ditolakkriteria">
    <thead>
        <th rowspan="2">No. Urut</th>
        <th rowspan="2">Status Pendaftaran</th>
        <th rowspan="2">ID Pendaftar</th>
        <th rowspan="2">Jalur yang dipilih</th>
        <th rowspan="2">Nama CPDB</th>
        <th rowspan="2">Umur</th>
        <th colspan="5">Alamat</th>
        <th rowspan="2">Detail</th>
    </tr>
    <tr>
        <th>RT</th>
        <th>RW</th>
        <th>Kelurahan</th>
        <th>Kecamata</th>
        <th>Kota</th>
    </tr></thead><tbody>`;
    html += datazonasi.gagalseleksi;
    html += dataafirmasi.gagalseleksi;
    html += dataptk.gagalseleksi;
    html += `</tbody></table><br/><br/><br/>`;
    div.innerHTML = html;
}

const fungsi_html_jurnal = (zonasi) => {

    let kuota = objek_settingpagu[0][zonasi];


    let keyOb = zonasi.split("_")[1];
    // let warna = Math.floor(Math.random() * 16777215).toString(16);
    let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
    let indekwarna = (Math.random() * 10).toFixed(0);
    let warna = arrayWarna[indekwarna];
    let html = ``;
    let htmlnonkuota = ``;
    let prioritas = objek_settingseleksi;
    let db = db_pendaftar.filter(k => k.jalur_cpdb == zonasi.replace("kuota_", "").toUpperCase() && (k.id_status == "Proses Jurnal" || k.id_status == "Diterima"));
    let count = 0;
    let urut = 1;

    let acc = [];
    let nonacc = []
    for (let a = 0; a < prioritas.length; a++) {
        let objekfilter = Object.fromEntries(Object.entries(objek_settingseleksi[a]).filter(([k, v]) => !(v == 0 || v == "Selainnya" || v == "SELAINNYA" || k.indexOf("set") == -1)));
        let ganti = Object.fromEntries(Object.entries(objekfilter).map(([key, val]) => [key.replace("set", "cpdb"), val]));
        let datas = fn_prioritas_real(db, ganti);
        let warna2 = arrayWarna[(Math.random() * 10).toFixed(0)];
        let data = datas.filter(k => k.cpdb_umur >= parseFloat(prioritas[a].umur_min) && k.cpdb_umur <= parseFloat(prioritas[a].umur_mak)).sort((a, b) => a.cpdb_umur <= b.cpdb_umur ? 1 : -1);

        for (let i = 0; i < data.length; i++) {
            let nourut = (urut + i);
            if (nourut > kuota) {
                nonacc.push(data[i])
                htmlnonkuota += `<tr>
                <td class="${warna}">${zonasi.replace("kuota_", "").toUpperCase()}</td>
                <td class="${warna2}">${prioritas[a].nama_prioritas}</td>
                
                <td>${nourut - kuota}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].cpdb_umur}</td>
                <td>${data[i].cpdb_rt}</td>
                <td>${data[i].cpdb_rw}</td>
                <td>${data[i].cpdb_kel}</td>
                <td>${data[i].cpdb_kec}</td>
                <td>${data[i].cpdb_kota}</td>
                <td class="pointerkan w3-center w3-large" onclick="detailpendaftar('${data[i].id_pendaftar}')"><i class="fa fa-eye"></i></td>
                        </tr>`;
            } else {
                acc.push(data[i]);
                html += `<tr><td class="${warna}">${zonasi.replace("kuota_", "").toUpperCase()}</td>
                <td class="${warna2}">${prioritas[a].nama_prioritas}</td>
                <td >${nourut}</td>
                        <td>${data[i].id_pendaftar}</td>
                        <td>${data[i].nama_cpdb}</td>
                        <td>${data[i].cpdb_umur}</td>
                        <td>${data[i].cpdb_rt}</td>
                        <td>${data[i].cpdb_rw}</td>
                        <td>${data[i].cpdb_kel}</td>
                        <td>${data[i].cpdb_kec}</td>
                        <td>${data[i].cpdb_kota}</td>
                        <td class="pointerkan w3-center w3-large" onclick="detailpendaftar('${data[i].id_pendaftar}')"><i class="fa fa-eye"></i></td>
                        </tr>`;
            }

        }

        db = db.filter(k => data.indexOf(k) == -1); //.sort((a, b) => a.umur < b.umur ? 1 : -1);
        //console.log(db);


        count += data.length;
        urut += data.length;


    }

    let htmllimit = ``;
    let kacc = [];
    for (x = 0; x < db.length; x++) {
        kacc.push(db[x])
        htmllimit += `<tr><td>${x + 1}</td>
                <td>${db[x].id_status}</td>
                <td>${db[x].id_pendaftar}</td>
                <td>${db[x].jalur_cpdb}</td>
                <td>${db[x].nama_cpdb}</td>
                <td>${db[x].cpdb_umur}</td>
                <td>${db[x].cpdb_rt}</td>
                <td>${db[x].cpdb_rw}</td>
                <td>${db[x].cpdb_kel}</td>
                <td>${db[x].cpdb_kec}</td>
                <td>${db[x].cpdb_kota}</td>
                
                <td class="pointerkan w3-center w3-large" onclick="detailpendaftar('${db[x].id_pendaftar}')"><i class="fa fa-eye"></i></td>
            </tr>`;
    }
    // htmllimit += `</table>`;
    let data = {};
    data.terseleksikuota = html;
    data.terseleksinonkuota = htmlnonkuota;
    data.gagalseleksi = htmllimit;
    data["lolos_" + keyOb] = acc;
    data["tidaklolos_" + keyOb] = nonacc;
    data["nonkriteria_" + keyOb] = kacc;

    // console.log(db);
    // div.innerHTML = html;
    return data
    //console.log(count);
};

const cek_real_prioritas = (zonasi) => {
    // if (db_pendaftar.length === undefined || objek_settingseleksi.length === undefined || objek_settingpagu.length === undefined) {
    //     alert("Maaf, simulasi belum siap. Pastikan Anda telah membuka pengaturan Pagu dan membuka Data Pendaftar simulasi.");
    //     return;
    // }
    let kuota = objek_settingpagu[0][zonasi];
    let aa = zonasi.replace("kuota_", "").toUpperCase();
    let div = document.querySelector(".verif_resultseleksi");
    let html =`<div class="w3-center w3-margin-top"><img src="/img/barloading.gif"></div>`;
    div.innerHTML = html;
    //console.log(zonasi,aa)
    
    // `<h3  class="w3-container">Proses Jurnal ${zonasi.replace("kuota_", "")} </h3>
    
    // Data Pendaftar yang memilih jalur ${zonasi.replace("kuota_", "")} dengan Daya Tampung / kuota Jalur tersebut sebanyak ${kuota} Calon PDB (Berdasarkan pengaturan Pagu sebelumnya.)
    // <div class="w3-border w3-center w3-margin w3-padding"><button class="w3-button w3-round-large w3-green" onclick="printSeleksi('tuS_${zonasi}','${aa}')" title="Print Tabel Ini"><i class="fa fa-print"></i> Print </button>
    // <button class="w3-button w3-round-large w3-blue" onclick="excelSeleksi('tuS_${zonasi}','${aa}')" title="Export Tabel Ini"><i class="fa fa-file-excel-o"></i> Excel </button>
    // </div>
    // <table class="w3-table-all garis w3-tiny tuS_${zonasi}"> 
    // <thead>
    //     <tr class="w3-centered">
    //      <th rowspan="2">Prioritas</th> <th rowspan="2">No. Urut</th> <th rowspan="2">ID Pendaftar</th> <th rowspan="2">Nama CPDB</th> <th rowspan="2">Umur</th> <th colspan="5">Alamat</th> <th rowspan="2">Detail</th> </tr> <tr> <th>RT</th> <th>RW</th> <th>Kelurahan</th> <th>Kecamata</th> <th>Kota</th> </tr></thead><tbody>`;
    // div.innerHTML = `<i class="fa fa-spin fa-spinner"></i>`;
    let prioritas = objek_settingseleksi;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json()).then(r => {
        db_pendaftar = r.records;
    //start
     html = `<h3  class="w3-container">Proses Jurnal ${zonasi.replace("kuota_", "")} </h3>
    
    Data Pendaftar yang memilih jalur ${zonasi.replace("kuota_", "")} dengan Daya Tampung / kuota Jalur tersebut sebanyak ${kuota} Calon PDB (Berdasarkan pengaturan Pagu sebelumnya.)
    <div class="w3-border w3-center w3-margin w3-padding"><button class="w3-button w3-round-large w3-green" onclick="printSeleksi('tuS_${zonasi}','${aa}')" title="Print Tabel Ini"><i class="fa fa-print"></i> Print </button>
    <button class="w3-button w3-round-large w3-blue" onclick="excelSeleksi('tuS_${zonasi}','${aa}')" title="Export Tabel Ini"><i class="fa fa-file-excel-o"></i> Excel </button>
    </div>
    <table class="w3-table-all garis w3-tiny tuS_${zonasi}"> 
    <thead>
        <tr class="w3-centered">
        <th rowspan="2">Prioritas</th>
        <th rowspan="2">No. Urut</th>
        <th rowspan="2">ID Pendaftar</th>
        <th rowspan="2">Nama CPDB</th>
        <th rowspan="2">Umur</th>
        <th colspan="5">Alamat</th>
        <th rowspan="2">Status<br>di<br>Pendaftar</th>
        <th rowspan="2">Status Publikasi</th>
        </tr>
    <tr>
    <th>RT</th> <th>RW</th> <th>Kelurahan</th> <th>Kecamata</th> <th>Kota</th> </tr></thead><tbody>`;
    
    //end
    let db = db_pendaftar.filter(k => k.jalur_cpdb == aa.replace("kuota_", "").toUpperCase() && (k.id_status == "Proses Jurnal"||k.id_status == "Diterima"));
    //console.log(db)
    let count = 0;
    let urut = 1;
    for (let a = 0; a < prioritas.length; a++) {
        let objekfilter = Object.fromEntries(Object.entries(objek_settingseleksi[a]).filter(([k, v]) => !(v == 0 || v == "Selainnya" || v == "SELAINNYA" || k.indexOf("set") == -1)));
        let ganti = Object.fromEntries(Object.entries(objekfilter).map(([key, val]) => [key.replace("set", "cpdb"), val]));
        //console.log(objekfilter);
        //.map(({ stroke, key1 }) => ({ stroke.replace("set","cpdb") , key1}));
        // console.log(objekfilter);
        // console.log(ganti);
        // let warna = Math.floor(Math.random() * 16777215).toString(16);
        let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
        let indekwarna = (Math.random() * 10).toFixed(0);
        // console.log(indekwarna)
        let warna = arrayWarna[indekwarna];
        //console.log(objekfilter);
        // db = db.filter(k => k.umur >= parseFloat(prioritas[a].umur_min) && k.umur <= parseFloat(prioritas[a].umur_mak));//.sort((a, b) => a.umur < b.umur ? 1 : -1);
        // db = db.filter(k => k.umur >= prioritas[a].umur_min && k.umur <= prioritas[a].umur_mak).sort((a, b) => a.umur < b.umur ? 1 : -1);
        let datas = fn_prioritas_real(db, ganti);
        // console.log(datas);
        let data = datas.filter(k => k.cpdb_umur >= parseFloat(prioritas[a].umur_min) && k.cpdb_umur <= parseFloat(prioritas[a].umur_mak)).sort((a, b) => a.cpdb_umur <= b.cpdb_umur ? 1 : -1);

        // if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            let nourut = (urut + i);
            if (nourut > kuota) {
                html += `<tr><td class="${warna}">${prioritas[a].nama_prioritas}</td>
                <td class="w3-deep-orange">${nourut}</td>
                <td class="w3-deep-orange">${data[i].id_pendaftar}</td>
                <td class="w3-deep-orange">${data[i].nama_cpdb}</td>
                <td class="w3-deep-orange">${data[i].cpdb_umur}</td>
                <td class="w3-deep-orange">${data[i].cpdb_rt}</td>
                <td class="w3-deep-orange">${data[i].cpdb_rw}</td>
                <td class="w3-deep-orange">${data[i].cpdb_kel}</td>
                <td class="w3-deep-orange">${data[i].cpdb_kec}</td>
                <td class="w3-deep-orange">${data[i].cpdb_kota}</td>
                <td class="w3-deep-orange pointerkan w3-center" onclick="detailpendaftar('${data[i].id_pendaftar}')" title="Klik untuk melihat Detail">${data[i].id_status}</td>
                <td class="w3-deep-orange pointerkan w3-center w3-large" onclick="detailpublikasicpdb('${data[i].baris_terminal}','${nourut}','${prioritas[a].nama_prioritas}')"><i class="fa fa-eye"></i></>
                        </tr>`;
            } else {
                html += `<tr><td class="${warna}">${prioritas[a].nama_prioritas}</td>
                <td>${nourut}</td>
                        <td>${data[i].id_pendaftar}</td>
                        <td>${data[i].nama_cpdb}</td>
                        <td>${data[i].cpdb_umur}</td>
                        <td>${data[i].cpdb_rt}</td>
                        <td>${data[i].cpdb_rw}</td>
                        <td>${data[i].cpdb_kel}</td>
                        <td>${data[i].cpdb_kec}</td>
                        <td>${data[i].cpdb_kota}</td>
                        <td class="pointerkan w3-center" onclick="detailpendaftar('${data[i].id_pendaftar}')" title="Klik untuk melihat Detail">${data[i].id_status}</td>
                        <td class="pointerkan w3-center w3-large" onclick="detailpublikasicpdb('${data[i].baris_terminal}','${nourut}','${prioritas[a].nama_prioritas}')"><i class="fa fa-eye"></i></>
                        </tr>`;
            }
        }
        db = db.filter(k => data.indexOf(k) == -1); //.sort((a, b) => a.umur < b.umur ? 1 : -1);
        //console.log(db);


        count += data.length;
        urut += data.length;

        // let tesData = fn_prioritas(db, objekfilter);
        //console.table(tesData);
    }
    html += `</tbody></table>
        <h3 class="w3-card-4 w3-container">Tabel yang tidak lolos kriteria ada ${db.length} data:</h3>
        <hr/>
    <button class="w3-button w3-round-large w3-blue" onclick="excelSeleksi('tuSb_${zonasi}','${aa}')" title="Export Tabel Ini"><i class="fa fa-file-excel-o"></i> Excel </button>
    <hr/>
        <table class="w3-table-all garis w3-tiny tuSb_${zonasi}">
            <thead><tr>
            <th rowspan="2">No. Urut</th>
            <th rowspan="2">ID Pendaftar</th>
            <th rowspan="2">Nama CPDB</th>
            <th rowspan="2">Umur</th>
            <th colspan="5">Alamat</th>
            <th rowspan="2">Status<br>di<br>Pendaftar</th>
            <th rowspan="2">Status Publikasi</th>
        </tr>
        <tr>
            <th>RT</th>
            <th>RW</th>
            <th>Kelurahan</th>
            <th>Kecamata</th>
            <th>Kota</th>
        </tr></thead><tbody>`
    for (x = 0; x < db.length; x++) {
        html += `<tr><td>${x + 1}</td>
                <td>${db[x].id_pendaftar}</td>
                <td>${db[x].nama_cpdb}</td>
                <td>${db[x].cpdb_umur}</td>
                <td>${db[x].cpdb_rt}</td>
                <td>${db[x].cpdb_rw}</td>
                <td>${db[x].cpdb_kel}</td>
                <td>${db[x].cpdb_kec}</td>
                <td>${db[x].cpdb_kota}</td>
                
                <td class="pointerkan w3-center" onclick="detailpendaftar('${db[x].id_pendaftar}')" title="Klik untuk melihat Detail">${db[x].id_status}</td>
                <td class="pointerkan w3-center w3-large" onclick="detailpublikasicpdb('${db[x].baris_terminal}','${(x+1)}','tidak lolos kriteria')"><i class="fa fa-eye"></i></td>
            </tr>`;
    }
    html += `    
        </tbody></table>
    `;
    // console.log(db);
    div.innerHTML = html;
    }).catch(er => console.log(er));
    
    //console.log(count);
};
const detailpublikasicpdb = (id,urutjurnal, prior) =>{
    let divid = document.getElementById("id_modal_info");
    divid.style.display = "block"
    let dividinfo = document.querySelector(".teks_info_modal");
    
    let html ="";
    html +=`<div class="w3-center w3-margin-top w3-margin-bottom"><img src="/img/barloading.gif"></div>`;
    dividinfo.innerHTML = html;
    fetch(urlppdb+"?action=panggilDataCPDBTunggal&baris="+id)
    .then(m => m.json()).then(r =>{
        //console.log(r)
   
    db_pendaftar = r.records;
            let data = r.records;
            let d = data[0];//.filter(k => k.id_pendaftar == id)[0];
    html = `<div class="w3-blue w3-center w3-padding w3-round-large w3-margin">Keterangan Pendaftaran</div>`;
    html +=`<div class="w3-tiny w3-small" w3-center">Berikut ini data yang ditampilkan di Web Utama yang dapat diketahui oleh Pendaftar</div>`;
    html +=`<div class="w3-container w3-card-4 w3-margin-bottom">`;
        html +=`<table class="w3-table-all w3-small  w3-margin-top w3-margin-bottom">`;
            html +=`<tr>`;
                html+= `<td>ID Pendaftaran</td><td>:</td><td>${d.id_pendaftar}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Nama CPDB</td><td>:</td><td>${d.nama_cpdb}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>NIK CPDB</td><td>:</td><td>${d.cpdb_nik}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Status</td><td>:</td><td>${d.id_status}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Status</td><td>:</td><td>${d.ket_status}</td>`;
            html +=`</tr>`;
        html +=`</table>`;
    html +=`</div>`;
    html +=`<div class="w3-tiny w3-small w3-center">Beri Keterangan Status Pendaftaran untuk Pendaftar yang Diterima</div>`;
    html +=`<div class="w3-tiny w3-small w3-margin-top w3-margin-bottom">`;
        html+=`<div class="w3-card-4 w3-pale-green w3-round-xlarge w3-padding w3-center">
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_diterima" value="Diterima">
        <label for="p_tolak">Diterima</label>
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_proses_jurnal" value="Proses Jurnal">
        <label for="p_kembali">Proses Jurnal</label>
        </div><p class="w3-tiny w3-small w3-center">Atau jika ini ditolak</p>
        <div class="w3-card-4 w3-pale-green w3-round-xlarge w3-padding w3-center">
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_tolak" value="Ditolak">
        <label for="p_tolak">Ditolak</label>
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_kembali" value="Dikembalikan">
        <label for="p_kembali">Dikembalikan</label>
        <input type="radio" class="w3-radio radio_pilihan_verif" name="p_kembali" id="p_keluar_jurnal" value="Keluar Jurnal">
        <label for="p_kembali">Keluar Jurnal</label>
        </div>`
    html +=`</div>`;
    html+=`<div class="w3-card-4 w3-container w3-center">KETERANGAN STATUS`;
        html+=`<textarea class="w3-input w3-border w3-border-blue isian_alasan w3-margin-bottom" placeholder="Silakan isikan alasan mengapa Anda mengembalikan pendaftaran ini"></textarea>`
    html +=`</div>`
    html +=`<p class="w3-tiny w3-small w3-center">Tampilan Akhir Pengumuman Saat Pendaftar Mencari Data</p>`
    html +=`<div class="w3-container w3-card-4 w3-margin-bottom">`;
        html +=`<table class="w3-table-all w3-small w3-margin-top w3-margin-bottom">`;
            html +=`<tr>`;
                html+= `<td>ID Pendaftaran</td><td>:</td><td>${d.id_pendaftar}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Nama CPDB</td><td>:</td><td>${d.nama_cpdb}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>NIK CPDB</td><td>:</td><td>${d.cpdb_nik}</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Status</td><td>:</td><td class="status_resultfinal">Silakan Pilih Status di Menu</td>`;
            html +=`</tr>`;
            html +=`<tr>`;
                html+= `<td>Status</td><td>:</td><td class="keterangan_resultfinal">Ketikkan Alasan di kolom Keterangan Status</td>`;
            html +=`</tr>`;
        html +=`</table>`;
    html +=`</div>`;
    html +=`<div class="w3-card-4 w3-round-large w3-small w3-center w3-padding">`;
        html +=`<button class="w3-button w3-round-xlarge w3-yellow w3-bottombar w3-border w3-border-black w3-tiny kirimDataStatusFinalPPDB">Publikasikan Perubahan</button>`
    html +=`</div>`;
    dividinfo.innerHTML = html;
    let rdd = document.querySelectorAll(".radio_pilihan_verif");
    // console.log(rdd)
    let td_status = document.querySelector(".status_resultfinal");
    let td_keterangan = document.querySelector(".keterangan_resultfinal");
    let isian_alasan = document.querySelector(".isian_alasan");
    let kirimDataStatusFinalPPDB = document.querySelector(".kirimDataStatusFinalPPDB");
    rdd.forEach(rd =>{
        rd.addEventListener('change',(e)=>{
            if(rd.checked){
                    let status = e.target.value
                    //console.log(status);
                    if(status == "Diterima"){
                        td_status.innerHTML = status;
                        isian_alasan.value = "Diterima dengan  "+ prior +" di urutan Jurnal ke-" + urutjurnal;
                        td_keterangan.innerHTML = isian_alasan.value;
                    }else{
                        td_status.innerHTML = status;
                        isian_alasan.value = ""
                        td_keterangan.innerHTML = isian_alasan.value;
                    }
            }
        })
    })
    isian_alasan.oninput = function(e){
        let isi = e.target.value;
        rdd.forEach(rd =>{
                if(rd.checked){
                        let status = rd.value
                        //console.log(status);
                        if(status == "Diterima"){
                            td_status.innerHTML = status;
                            //isian_alasan.value = isi;//"Diterima dengan  "+ prior +" di urutan Jurnal ke-" + urutjurnal;
                            td_keterangan.innerHTML = isi;//an_alasan.value;
                        }else{
                            td_status.innerHTML = status;
                            //isian_alasan.value = isi;
                            td_keterangan.innerHTML = isi;//an_alasan.value;
                        }
                }
        })
    };
    kirimDataStatusFinalPPDB.onclick = function(e){
        let elemen = e.target;
        elemen.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Proses Kirim ...`;
        let data_status = td_status.innerHTML;
        let data_keterangan=td_keterangan.innerHTML;
        req_verifikasiDariTerminal2(id, data_status, data_keterangan, elemen);
    }
    }).catch(er => {
        console.log(er);
        dividinfo.innerHTML = `Gagal memanggil data, kode: `+ er;
    })
}

const fn_prioritas_real = (arrObj, objfilter) => {
    let data = arrObj.filter(function (item) {
        for (var key in objfilter) {
            // let keyA = key.replace("set_", "cpdb_");
            // console.log(item[key]);
            if (item[key] === undefined || item[key] != objfilter[key])
                return false;
        }
        return true;
    });
    return data; //.sort((a, b) => a.umur < b.umur ? 1 : -1);
};
const html_publikasi_jurnal = () => {
    let div = document.querySelector(".verif_resultseleksi");
    let html = `<h3>KONTROL PUBLIKASI SISTEM JURNAL</h3>
    Admin (Kepala Sekolah, Ketua Panitia PPDB, atau OPS) yang ditunjuk sebagai kontrol pengaturan web Aplikasi PPDB ini telah mengatur sistem publikasi untuk setipa jurnal sebagai berikut:
    <hr/><table class="versi-table" style="margin:0 auto">
    <tr>
        <td>Proses Jurnal Zonasi</td>
        <td>:</td>
        <td>${(objek_settingpagu[0].publikasi_seleksi_zonasi) ? "Dipublikasikan" : "Disembunyikan"}</td>
    </tr>
    <tr>
        <td>Proses Jurnal Afirmasi</td>
        <td>:</td>
        <td>${(objek_settingpagu[0].publikasi_seleksi_afirmasi) ? "Dipublikasikan" : "Disembunyikan"}</td>
    </tr>
    <tr>
        <td>Proses Jurnal Pindah Tugas (Anak PTK)</td>
        <td>:</td>
        <td>${(objek_settingpagu[0].publikasi_seleksi_ptk) ? "Dipublikasikan" : "Disembunyikan"}</td>
    </tr>
    </table>
    <p class="w3-small">Ket: Tabel di atas menginformasikan bahwa setiap perubahan otomatis atas sistem penjurnalan di web aplikasi utama (Web yang ditunjukkan oleh pendaftar). Jika sistem penjurnalan salah satu/seluruh sistem jalur PPDB disembunyikan, maka pendaftar tidak dapat melihat proses penjurnalan otomatis tersebut.
    </p>`;
    div.innerHTML = html;
}

const caridatapendaftar = () => {
    let pilihan = document.querySelectorAll("input[name=pilihpencarian]");
    let v_input = document.querySelector("input[name=inputcari]").value;
    let mod = document.getElementById("resultcari");
    let mod_teks = document.querySelector(".teksresultcari");

    let kriteria1;
    let tekskriteria;
    pilihan.forEach(l => {
        if (l.checked) {
            // alert(l.value);
            kriteria1 = l.value;
            tekskriteria = l.value.replace("_", " ").toUpperCase();
        }
    });
    if (v_input == "" || kriteria1 === undefined) {
        alert("Maaf, kriteria pencarian Anda tidak diisi dengan lengkap");
        return;
    };
    mod.style.display = "block";
    mod_teks.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            //console.log(r);
            let datarest = r.records;
            cariUpdate = r.records;
            let html = `<table class="w3-table-all garis jsondatacari"><thead>
            <tr>
                <th>Nama</th>
                <th>Status Pendaftaran</th>
                <th>Detail</th>
            </tr>
            </thead><tbody>`
            let filter = datarest.filter(k => k[kriteria1].indexOf(v_input) > -1);
            if (filter.length == 0) {
                html += `<tr><td colspan="3" class="w3-centered">Data Yang Anda cari tidak ditemukan</td></tr>`
            } else {
                for (let i = 0; i < filter.length; i++) {
                    html += `<tr>
                    <td>${filter[i].nama_cpdb}</td>
                    <td>${filter[i].id_status}</td>
                    <td>
                        <button class="w3-button w3-teal" onclick="cekdataT('${filter[i].id_pendaftar}')">
                            <i class="fa fa-eye"></i>
                        </button>
                    </td>
                    </tr>`
                }
            }
            html += `</tbody></table><hr/>`
            mod_teks.innerHTML = `Pencarian kriteria ${tekskriteria} = ${v_input}:<hr/> ${html}`;


        }).catch(er => {
            console.log(er);
            mod_teks.innerHTML = "Terjadi kesalahan, silakan ulangi sesi Anda."
        });
};

const fn_close_cari = () => {
    let mod = document.getElementById("resultcari");
    let mod_teks = document.querySelector(".teksresultcari");
    mod.style.display = "none";
    mod_teks.innerHTML = "";
    w3_close();
};

const cekdataT = (id) => {
    //let mod = document.getElementById("resultcari");
    let mod_teks = document.querySelector(".teksresultcari");
    let cek = cariUpdate.filter(k => k.id_pendaftar == id)[0];
    //console.log(cek);
    let tg = new Date(cek.cpdb_tanggal_lahir);
    //console.log(tg)
    let umurnya = umur(cek.cpdb_tanggal_lahir);
    let html = `Detail Pendaftaran
    <table class="w3-table-all">
    <tr class="w3-aqua">
        <td colspan="2">Status Pendaftaran</td>
    <tr>
    <tr>
        <td>Jalur Pendaftaran</td>
        <td>${cek.jalur_cpdb}</td>
    </tr>
    <tr>
        <td>Waktu Pendaftaran</td>
        <td>${tanggalfulllengkap(cek.waktu_daftar)}</td>
    </tr>
    <tr>
        <td>ID Pendaftaran</td>
        <td>${cek.id_pendaftar}</td>
    </tr>
    <tr>
        <td>Status dan Keterangan Pendaftaran</td>
        <td>${cek.id_status}<hr/>${cek.ket_status}</td>
    </tr>
    <tr class="w3-aqua">
        <td colspan="2">Data Pendaftar</td>
    <tr>
    <tr>
        <td>Nama CPDB</td>
        <td>${cek.nama_cpdb}</td>
    </tr>
    <tr>
        <td>Jenis Kelamin CPDB</td>
        <td>${(cek.cpdb_jk == "L") ? "Laki-Laki" : "Perempuan"}</td>
    </tr>
    <tr>
        <td>Tempat, Tanggal Lahir</td>
        <td>${cek.cpdb_tempat_lahir}, ** *** ***</td>
    </tr>
    <tr><td>Umur</td><td>${umurnya.tahun} Tahun ${umurnya.bulan} Bulan ${umurnya.hari} Hari</td>
    </tr>
    <tr>
    <td>Alamat</td>
    <td>${cek.cpdb_alamat_jalan}, RT ${cek.cpdb_rt}/RW ${cek.cpdb_rw}, Kel. ${cek.cpdb_kel}, Kec. ${cek.cpdb_kec}, ${cek.cpdb_kota}
    </tr>
    <tr>
        <td>Nama Ibu</td>
        <td>${cek.ortu_nama_ibu}</td>
    </tr>
    </table>
    Catatan: Data ini menunjukkan data dalam Proses Jurnal berkas/dokumen. Keputusan diterima/ditolak ada pada tahap penjurnalan di menu SELEKSI.
    `;

    mod_teks.innerHTML = html;
};


const printSeleksi = (kelas, jalur) => {
    let kelasgagal = kelas.replace("tuS_", "tuSb_");
    let isibody = document.querySelector("." + kelas).outerHTML;
    let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>DATA Proses Jurnal</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 landscape;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;


    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">Proses Jurnal Jalur ${jalur} per ${tanggalfulllengkap(new Date())}</h4>`;
    body.innerHTML += `${isibody}<div style="break-after:page"></div>`;
    body.innerHTML += `<h4 class="w3-center">Pendaftar Jalur ${jalur} Tidak Lolos Kriteria Prioritas per ${tanggalfulllengkap(new Date())}</h4>`;
    body.innerHTML += `${tabel2}<br/>`;



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
};
const excelSeleksi = (kelas, teks) => {
    //alert(kelas + teks);
    try {
        let zonasi = teks;
        let ket = (kelas.indexOf("tuS_") > -1) ? " JURNAL PROSES Proses Jurnal " + teks.toUpperCase() : "JURNAL TIDAK LOLOS PRIORITAS " + teks.toUpperCase() + ""
        let db = db_pendaftar.filter(k => k.jalur_cpdb == zonasi.replace("kuota_", "").toUpperCase() && (k.id_status == "Proses Jurnal" || k.id_status == "Diterima"));
        let div = document.getElementById("frameexcel");
        //div.innerHTML = "";

        var tabelhasil = document.createElement("table");
        tabelhasil.setAttribute("class", "versi-table w3-tiny");
        tabelhasil.setAttribute("id", "myTableCopy");

        let tabel = document.querySelector('.' + kelas);
        let hed = tabel.getElementsByTagName("thead")[0];
        let bod = tabel.getElementsByTagName("tbody")[0];
        var cln = hed.cloneNode(true);
        var clb = bod.cloneNode(true);
        tabelhasil.appendChild(cln);
        tabelhasil.appendChild(clb);
        tabelhasil.getElementsByTagName("thead")[0].rows[0].deleteCell(-1);
        let sel = tabelhasil.getElementsByTagName("tbody")[0];
        for (let i = 0; i < sel.rows.length; i++) {
            sel.rows[i].deleteCell(-1);
            sel.rows[i].cells[4].innerHTML = sel.rows[i].cells[4].innerHTML.replace(".", ",")
            sel.rows[i].cells[3].innerHTML = sel.rows[i].cells[3].innerHTML.replace(".", ",")
        }
        div.appendChild(tabelhasil);
        let tabelfinal = document.getElementById("myTableCopy").getElementsByTagName('thead')[0];
        let tr = tabelfinal.insertRow(0);
        let td = tr.insertCell(-1);
        td.setAttribute('colspan', sel.rows[0].cells.length);
        td.innerHTML = ket;
        tr = tabelfinal.insertRow(1);
        td = tr.insertCell(-1);
        td.setAttribute('colspan', sel.rows[0].cells.length);
        td.innerHTML = tanggalfulllengkap(new Date());

        let lr = tabelhasil.rows.length;
        $("#frameexcel").table2excel({

            name: "Worksheet Name",
            filename: ket + " " + new Date().getTime(),
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true,
            preserveColors: true,
            jumlahheader: 2,
            barisatas: 2,
            tabelmana: lr

        });
        div.innerHTML = "";
        // let hh_tabel = tabel.getElementsByTagName("thead")[0].outerHTML;
        // let h_tabel = hh_tabel.replace(`<th rowspan="2">Detail</th>`, "");

        // let html = h_tabel;
        // let b_tabel = tabel.getElementsByTagName("tbody")[0];//.outerHTML;
        // for(let i = 0 ; i <tabel.rows.length ; i++){

        // }

        // div.innerHTML = "</tbody>" + html + "</table>";
    } catch (err) {
        alert(`Maaf, Tabel tidak bisa diekspor ke Ms. Excel dengan kode kegagalan Tabel kosomg. `);
        console.log(err);
        let div = document.getElementById("frameexcel");
        div.innerHTML = "";
    };


};

const xl_rekapSeleksi = (kelas) => {
    let nama_tabel = document.querySelector("." + kelas);

    let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    let dataptk = fungsi_html_jurnal("kuota_ptk");

    let loloszonasi = datazonasi["lolos_zonasi"];
    let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    let lolosptk = dataptk["lolos_ptk"];

    let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    let ga_ptk = dataptk["tidaklolos_ptk"];

    let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    let kr_ptk = dataptk["nonkriteria_ptk"]

    let ade = loloszonasi.concat(lolosafirmasi);
    let eda = ade.concat(lolosptk);
    rekapcpdblolos = eda;
    let tm = ga_zonasi.concat(ga_afirmasi);
    let ts = tm.concat(ga_ptk);

    let no = kr_zonasi.concat(kr_afirmasi);
    let nonkr = no.concat(kr_ptk);

    let db, judul
    let teks;
    if (kelas == "tu_diterimakuota") {
        teks = "Rekapitulasi CPDB Diterima Sesuai dengan Kuota/Pagu";
        judul = "Rekap Diterima sesuai pagu";
    } else if (kelas == "tu_ditolakkuota") {
        teks = "Rekapitulasi CPDB tidak diterima karena kuota/pagu sudah terpenuhi";
        judul = "Rekap Tidak Diterima karena pagu sudah terpenhui";
    } else {
        teks = "Rekapitulasi pendaftar CPDB yang tidak lolos sistem kriteria prioritas";
        judul = "Rekap pendaftar tidak lolos kriteria prioritas";
    }
    let div = document.getElementById("frameexcel");
    db = nama_tabel;
    let html = `<table><tr>
    <td colspan="${db.rows[2].cells.length}">${teks}</td></tr><tr>
    <td colspan="${db.rows[2].cells.length}">Per ${tanggalfulllengkap(new Date())}</td>
    </tr>
    ${nama_tabel.innerHTML.replace(/[.]/g,",")}
    </table>`;
    div.innerHTML = html;
    let lr = db.rows.length;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: "DATA  " + teks + " " + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 2,
        barisatas: 2,
        tabelmana: lr

    });
    div.innerHTML = "";


};

const Pr_rekapSeleksi = (kelas) => {
    let nama_tabel = document.querySelector("." + kelas);
    let teks;
    if (kelas == "tu_diterimakuota") {
        teks = "Rekapitulasi CPDB Diterima Sesuai dengan Kuota/Pagu";
    } else if (kelas == "tu_ditolakkuota") {
        teks = "Rekapitulasi CPDB tidak diterima karena kuota/pagu sudah terpenuhi";
    } else {
        teks = "Rekapitulasi pendaftar CPDB yang tidak lolos sistem kriteria prioritas";
    }
    let isibody = nama_tabel.outerHTML
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>REKAPITULASI SELEKSI PPDB</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 portrait;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;


    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">${teks}</h4>`;
    body.innerHTML += `${isibody}<div style="break-after:page"></div>`;




    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
};

const exportTabel = (kelas) => {
    let db
    let div = document.getElementById("frameexcel");
    let judul = "Data Seluruh Pendaftar"
    db = db_pendaftar;
    let lr = db.length;
    let lc = Object.keys(db[0]).length;
    console.log(lr)
    console.log(lc)
    let html = `<table class="versi-table"> <thead> 
    <tr><td colspan="61">Data Export ${judul}</td></tr> <tr> 
    <th>WAKTU_DAFTAR </th><th>ID_PENDAFTAR </th><th>ID_STATUS </th>
    <th>KET_STATUS </th><th>JALUR_CPDB </th><th>NAMA_CPDB </th>
    <th>CPDB_TANGGAL_LAHIR </th><th>CPDB_UMUR </th><th>CPDB_KOTA </th><th>CPDB_KEC </th>
    <th>CPDB_KEL </th><th>CPDB_RW </th><th>CPDB_RT </th><th>CPDB_TEMPAT_LAHIR </th><th>CPDB_JK </th>
    <th>CPDB_AGAMA </th><th>CPDB_ABK </th><th>CPDB_ANAKKE </th><th>CPDB_KEWARGANEGARAAN </th><th>CPDB_NO_REG_AKTE </th>
    <th>CPDB_ID_FILE_AKTA </th>
    <th>CPDB_NIK </th>
    <th>CPDB_NO_KK </th>
    <th>CPDB_ALAMAT_JALAN </th><th>CPDB_ID_FILE_KK </th>
    <th>CPDB_ID_FILE_DOMISILI </th><th>CPDB_NPSN </th><th>CPDB_SEKOLAHASAL </th><th>CPDB_ID_FILE_IJAZAH </th>
    <th>CPDB_NISN </th><th>ORTU_NAMA_AYAH </th><th>ORTU_NIK_AYAH </th><th>ORTU_TTL_AYAH </th>
    <th>ORTU_PENDIDIKAN_AYAH </th><th>ORTU_PEKERJAAN_AYAH </th><th>ORTU_PENGHASILAN_AYAH </th><th>ORTU_ABK_AYAH </th>
    <th>ORTU_NAMA_IBU </th><th>ORTU_NIK_IBU </th><th>ORTU_TTL_IBU </th>
    <th>ORTU_PENDIDIKAN_IBU </th><th>ORTU_PEKERJAAN_IBU </th><th>ORTU_PENGHASILAN_IBU </th><th>ORTU_ABK_IBU </th>
    <th>ORTU_NAMA_WALI </th><th>ORTU_NIK_WALI </th><th>ORTU_TTL_WALI </th>
    <th>ORTU_PENDIDIKAN_WALI </th><th>ORTU_PEKERJAAN_WALI </th><th>ORTU_PENGHASILAN_WALI </th>
    <th>ORTU_ABK_WALI </th><th>CPDB_ID_FILE_FILEPENDUKUNG_0 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_1 </th>
    <th>CPDB_ID_FILE_FILEPENDUKUNG_2 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_3 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_4 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_5 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_6 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_7 </th><th>ORTU_HP_IBU </th><th>ORTU_HP_AYAH </th><th>CPDB_KOTA_LAINNYA</th> </tr> </thead> <tbody>`;
    for (let i = 0; i < db.length; i++) {
        html += `<tr>
    <td>${tanggalfulllengkap(db[i].waktu_daftar)}
    </td><td>${db[i].id_pendaftar}
    </td><td> ${db[i].id_status}
    </td><td>${db[i].ket_status}
    </td><td>${db[i].jalur_cpdb}
    </td><td>${db[i].nama_cpdb}
    </td><td>${tanggalfull(db[i].cpdb_tanggal_lahir)}
    </td><td>'${db[i].cpdb_umur}
    </td><td>${db[i].cpdb_kota}
    </td><td>${db[i].cpdb_kec}
    </td><td>${db[i].cpdb_kel}
    </td><td>${db[i].cpdb_rw}
    </td><td>${db[i].cpdb_rt}
    </td><td>${db[i].cpdb_tempat_lahir}
    </td><td>${db[i].cpdb_jk}
    </td><td>${db[i].cpdb_agama}
    </td><td>${db[i].cpdb_abk}
    </td><td>${db[i].cpdb_anakke}
    </td><td>${db[i].cpdb_kewarganegaraan}
    </td><td>'${db[i].cpdb_no_reg_akte}
    </td><td>${(db[i].cpdb_id_file_akta == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_akta}
    </td><td>'${db[i].cpdb_nik}
    </td><td>'${db[i].cpdb_no_kk}
    </td><td>${db[i].cpdb_alamat_jalan}
    </td><td>${(db[i].cpdb_id_file_kk == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_kk}
    </td><td>${(db[i].cpdb_id_file_domisili == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_domisili}
    </td><td>${db[i].cpdb_npsn}
    </td><td>${db[i].cpdb_sekolahasal}
    </td><td>${(db[i].cpdb_id_file_ijazah == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_ijazah}
    </td><td>'${db[i].cpdb_nisn}
    </td><td>${db[i].ortu_nama_ayah}
    </td><td>'${db[i].ortu_nik_ayah}
    </td><td>${tanggalfull(db[i].ortu_ttl_ayah)}
    </td><td>${db[i].ortu_pendidikan_ayah}
    </td><td>${db[i].ortu_pekerjaan_ayah}
    </td><td>${db[i].ortu_penghasilan_ayah}
    </td><td>${db[i].ortu_abk_ayah}
    </td><td>${db[i].ortu_nama_ibu}
    </td><td>'${db[i].ortu_nik_ibu}
    </td><td>${tanggalfull(db[i].ortu_ttl_ibu)}
    </td><td>${db[i].ortu_pendidikan_ibu}
    </td><td>${db[i].ortu_pekerjaan_ibu}
    </td><td>${db[i].ortu_penghasilan_ibu}
    </td><td>${db[i].ortu_abk_ibu}
    </td><td>${db[i].ortu_nama_wali}
    </td><td>${db[i].ortu_nik_wali}
    </td><td>${tanggalfull(db[i].ortu_ttl_wali)}
    </td><td>${db[i].ortu_pendidikan_wali}
    </td><td>${db[i].ortu_pekerjaan_wali}
    </td><td>${db[i].ortu_penghasilan_wali}
    </td><td>${db[i].ortu_abk_wali}
    
    </td><td>${(db[i].cpdb_id_file_filependukung_0 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_0}
    </td><td>${(db[i].cpdb_id_file_filependukung_1 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_1}
    </td><td>${(db[i].cpdb_id_file_filependukung_2 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_2}
    </td><td>${(db[i].cpdb_id_file_filependukung_3 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_3}
    </td><td>${(db[i].cpdb_id_file_filependukung_4 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_4}
    </td><td>${(db[i].cpdb_id_file_filependukung_5 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_5}
    </td><td>${(db[i].cpdb_id_file_filependukung_6 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_6}
    </td><td>${(db[i].cpdb_id_file_filependukung_7 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_7}
    </td><td>'${db[i].ortu_hp_ibu}
    </td><td>'${db[i].ortu_hp_ayah}
    </td><td>${db[i].cpdb_kota_lainnya}
    </td></tr>`
    };

    html += `</tbody>
    </table>`
    div.innerHTML = html;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: judul + " " + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 1,
        barisatas: 1,
        tabelmana: lr

    });
    div.innerHTML = "";
};

const fn_finalppdb = async () => {
    divverif_judul.innerHTML = "Halaman Final Seleksi PPDB";
    divverif_teksplus.innerHTML = "Di sini berisi laman informasi mengenai data CPDB yang telah diterima berdasarkan penjurnalan di Proses Jurnal. "
    divverif_result.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let html = `
    <div class="tab">
    <button class="w3-button tabverifsa active" onclick="pindahTabFinal(this,'final_diterima')">CPDB Diterima</button>
    <button class="w3-button tabverifsa " onclick="pindahTabFinal(this,'final_daftarulang')">Daftar Ulang</button>
    <button class="w3-button tabverifsa " onclick="pindahTabFinal(this,'final_nomorinduk')">Penomoran Induk</button>
    <button class="w3-button tabverifsa " onclick="pindahTabFinal(this,'final_pembagiankelas')">Pembagian Kelas</button>
    <button class="w3-button tabverifsa " onclick="pindahTabFinal(this,'final_pembagiankelasstatistik')">Data Statistik PDB</button>
    </div>
    <div class="final_resultppdb w3-border w3-container" style="overflow-x:auto">
   
    </div>

    `;

    let param = "?action=getdatasheet&tab=respon";
    await fetch(urlppdb + param).then(m => m.json()).then(r => {
        db_pendaftar = r.records;
    }).catch(er => console.log(er));


    let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
    await fetch(link).then(m => m.json()).then(r => {
        objek_settingseleksi = r.records;
    }).catch(er => console.log(er))


    let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
    await fetch(linkpagu).then(m => m.json()).then(r => {
        objek_settingpagu = r.records;
    }).catch(er => console.log(er))

    divverif_result.innerHTML = html;
    document.querySelectorAll('.tabverifsa')[0].click();
};

const pindahTabFinal = (el, a) => {
    let isidiv = document.querySelector(".final_resultppdb");
    if (a == "final_diterima") {
        data_final_seleksi();
    } else if (a == "final_daftarulang") {
        data_daftarulang()

    } else if (a == "final_nomorinduk") {
        data_final_induk()

    } else if (a == "final_pembagiankelas") {
        data_final_indukpembagiankelas()

        // cekpendaftarganda();
    }  else if (a == "final_pembagiankelasstatistik") {
        final_pembagiankelasstatistik()

        // cekpendaftarganda();
    } else {
        isidiv.innerHTML = a;

    }
    let tabv = document.querySelectorAll('.tabverifsa')
    tabv.forEach(elem => {
        elem.className = elem.className.replace("active", "");
    });
    el.className += " active";
};
const data_final_seleksi = () => {
    let div = document.querySelector(".final_resultppdb");

    let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    let dataptk = fungsi_html_jurnal("kuota_ptk");

    let loloszonasi = datazonasi["lolos_zonasi"];
    let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    let lolosptk = dataptk["lolos_ptk"];

    let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    let ga_ptk = dataptk["tidaklolos_ptk"];

    let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    let kr_ptk = dataptk["nonkriteria_ptk"]

    let ade = loloszonasi.concat(lolosafirmasi);
    let eda = ade.concat(lolosptk);
    rekapcpdblolos = eda;

    let tm = ga_zonasi.concat(ga_afirmasi);
    let ts = tm.concat(ga_ptk);

    let no = kr_zonasi.concat(kr_afirmasi);
    let nonkr = no.concat(kr_ptk);

    let html = `<h3 class="w3-center tabel_final_seleksi0">Final Seleksi CPDB</h3>
    Laman ini berisi informasi data CPDB yang telah lolos seleksi penjurnalan berdasarkan sistem jalur CPDB yang telah dibuka di sekolah Anda. Data ini diurutkan berdasarkan abjad nama siswa.
    <div class="w3-border w3-center w3-round-large">
        <button class="w3-button w3-green w3-round-large w3-margin w3-small" onclick="final_print('tabel_final_seleksi')" title="Cetak laman ini."><i class="fa fa-print"></i> Print</button>
        <button class="w3-button w3-blue w3-round-large w3-margin w3-small"  onclick="final_excel('tabel_final_seleksi', 'rekapcpdblolos')" title="Cetak laman ini."><i class="fa fa-file-excel-o"></i> Export Xls</button>
    </div>
    <table class="w3-table-all garis w3-tiny tabel_final_seleksi"><thead>
    <tr class="w3-aqua">
        <th rowspan="2">No. Urut</th>
        <th rowspan="2">Nama CPDB</th>
        <th rowspan="2">Jenis Kelamin</th>
        <th rowspan="2">Tempat, Tanggal Lahir</th>
        <th rowspan="2">Umur</th>
        <th colspan="5">Alamat Lengkap</th>
        <th rowspan="2">Jalur CPBD</th>
    </tr>
    <tr>
        
       
        <th>RT</th>
        <th>RW</th>
        <th>Kelurahan</th>
        <th>Kecamatan</th>
        <th>Kota</th>

    </tr>
    </thead><tbody>`;
    let namaurut = rekapcpdblolos.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));
    for (let i = 0; i < namaurut.length; i++) {
        html += `<tr>
        <td>${i + 1}</td>
        
        <td>${namaurut[i].nama_cpdb}</td>
        <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
        <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
        <td>${namaurut[i].cpdb_umur}</td>
        <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
        </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
        </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
        </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
        </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
        
        </td>
        <td>${namaurut[i].jalur_cpdb}</td>
        </tr>`
    }
    html += "</tbody></table>";
    div.innerHTML = html;

};
let db_udahdaftarulang = [];
const data_daftarulang = () => {
    let div = document.querySelector(".final_resultppdb");
    // let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    // let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    // let dataptk = fungsi_html_jurnal("kuota_ptk");

    // let loloszonasi = datazonasi["lolos_zonasi"];
    // let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    // let lolosptk = dataptk["lolos_ptk"];

    // let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    // let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    // let ga_ptk = dataptk["tidaklolos_ptk"];

    // let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    // let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    // let kr_ptk = dataptk["nonkriteria_ptk"]

    // let ade = loloszonasi.concat(lolosafirmasi);
    // let eda = ade.concat(lolosptk);
    // rekapcpdblolos = eda;

    // let tm = ga_zonasi.concat(ga_afirmasi);
    // let db_tidaklolospagu = tm.concat(ga_ptk);

    // let no = kr_zonasi.concat(kr_afirmasi);
    // let nonkr = no.concat(kr_ptk);



    let html = `<h3 class="w3-center">Data konfirmasi Daftar Ulang</h3>
    <p class="w3-small">Selama maasa pandemi, sekolah mengatur proses registrasi ulang (daftar ulang) kepada calon peserta didik baru (CPDB). Pelaksanaan daftar ulang dapat dilakukan dengan mengundang CPDB ke sekolah dengan ketentuan protokol kesehatan yang ketat. Termasuk pengaturan jadwal ke sekolah demi menghindari kerumunan.
    Di laman fitur ini, Panitia PPDB dapat mengirimkan pesan Whatsapp kepada masing-masing CPDB mengenai jadwal tersebut. <br><br>
    </p><p class="w3-small">Informasi mengenai jadwal registrasi daftar ulang secara umum dapat diinformasikan di menu <b>Pesan/Forum</b> aplikasi ini.
    </p><div class="w3-border w3-center w3-round-large">
    <button class="w3-button w3-purple w3-round-large w3-margin w3-small" onclick="cek_daftarulang('belum')" title="Tampilkan Pendaftar yang belum Registrasi/Daftar Ulang"><i class="fa fa-child"></i> Belum Daftar Ulang</button>
    <button class="w3-button w3-teal w3-round-large w3-margin w3-small" onclick="cek_daftarulang('sudah')" title="Tampilkan Pendaftar yang Sudah Registrasi/Daftar Ulang"><i class="fa fa-child"></i> Sudah Daftar Ulang</button>
    <button class="w3-button w3-orange w3-round-large w3-margin w3-small" onclick="cek_daftarulang('ambillolospagu')" title="Tampilkan Pendaftar yang belum Registrasi/Daftar Ulang"><i class="fa fa-child"></i> Data Tidak Lolos Pagu</button>
    <button class="w3-button w3-green w3-round-large w3-margin w3-small" onclick="final_print('trdu')" title="Cetak laman ini."><i class="fa fa-print"></i> Print</button>
    <button class="w3-button w3-blue w3-round-large w3-margin w3-small btn_export_reduksi"  onclick="final_excel('trdu','db_du')" title="Cetak laman ini."><i class="fa fa-file-excel-o"></i> Export Xls</button>
</div>
<div class="w3-container w3-margin w3-small w3-card-4">
    Keterangan:<ul>
    <li>Menu <b>Belum Daftar Ulang</b> adalah data calon peserta didik yang berhak melakukan registrasi daftar ulang. Sumber data calon peserta didik berdasarkan hasil seleksi CPDB Diterima.
    </li><li>Menu <b>Sudah Daftar Ulang</b> adalah data calon peserta didik yang telah melaksanakan registrasi daftar ulang. Termasuk data CPDB yang telah mengundurkan diri/Tidak melaksanakan registrasi ulang.
    </li><li>Menu <b>Data Tidak Lolos Pagu</b> adalah data calon peserta didik yang berhak melaksanakan registrasi ulang, ketika ada pendaftar CPDB Diterima mengundurkan diri/tidak melaksanakan registrasi daftar ulang.
</li><ul>
</div>
<div class="html_daftarulang_cek w3-topbar" style="overflow-x:auto">
<img src="/app/barloading.gif" alt="proses loading">
</div>
<br><br>`;
    div.innerHTML = html;
    let divdaftarulang = document.querySelector(".html_daftarulang_cek");
    let data = new FormData();
    data.append("action", "postgetumum");
    data.append("idss", idsss);
    data.append("tab", "daftarulang");

    fetch(urllogin, {
    // fetch("https://script.google.com/macros/s/AKfycbxmDpTSnTneUmnBVT4um7-vvWR0PYvkKkXWoW2IUUENo51IIECbVE__lpCjuirk3AGFvA/exec", {
            method: 'post',
            body: data
        })
        .then(m => m.json())
        .then(r => {
            console.log(r);
            let db_du = r.records;
            db_udahdaftarulang = r.records;
            if (r.jumlahdata == 1) {
                divdaftarulang.innerHTML = `<h3 class="w3-center">Belum ada pendaftar yang telah melakukan registrasi/Daftar Ulang</h3>`;
            } else {
                divdaftarulang.innerHTML ="cek"
                // let html = `<h3 class="w3-center trdu0">Data CPDB yang telah Registrasi Daftar Ulang</h3>
                // <table class="w3-table garis w3-small trdu">
                // <thead>
                //     <th>No.</th>
                //     <th>ID Registrasi</th>
                //     <th>Status Registrasi</th>
                //     <th>Sumber Data</th>
                //     <th>Nama PDB</th>
                //     <th>Jenis Kelamin</th>
                //     <th>Tempat, Tanggal Lahir</th>
                //     <th>Nama Ayah</th>
                //     <th>Nama Ibu</th>
                //     <th>Detail</th>

                // </thead>
                // <tbody>`
                // for (let i = 0; i < db_du.length; i++) {
                //     html += `<tr>
                //         <td>${i + 1}</td>
                //         <td>${db_du[i].id_registrasi}</td>
                //         <td>${db_du[i].ket_registrasi}</td>
                //         <td>${db_du[i].datadata_jalur}</td>
                //         <td>${db_du[i].nama_cpdb}</td>
                //         <td>${(db_du[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                //         <td>${db_du[i].cpdb_tempat_lahir}, ${tanggalfull(db_du[i].cpdb_tanggal_lahir)}</td>
                //         <td>${db_du[i].ortu_nama_ayah}</td>
                //         <td>${db_du[i].ortu_nama_ibu}</td>
                //         <td class="pointerkan w3-center" onclick="detailregister('db_du','${db_du[i].id_registrasi}')"><i class="fa fa-eye"></i></td>
                //     </tr>`
                // }
                // html += `</tbody>
                // </table>
                // `;

                // divdaftarulang.innerHTML = html;
                // document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','db_du')");
            }
        })
        .catch(er =>{
             console.log(er)
             divdaftarulang.innerHTML = er
            })

};
const detailregister = (sumber, id) => {
    let data, html = ""
    if (sumber == "db_du") {
        data = db_udahdaftarulang.filter(k => k.id_registrasi == id)[0];
        let ibrste = data.id_pendaftar
        html = `<div class="w3-center">
        <button class="w3-button w3-yellow w3-bottombar w3-border w3-border-black w3-round-xlarge w3-tiny" onclick="format_dapodik('${id}')">FORMAT F-PD DAPODIK</button>
        </div>`
        // `<button class="w3-button w3-yellow w3-bottombar w3-border w3-border-black w3-round-xlarge w3-tiny" onclick="konfirmasiregister('${ibrste}')">BATAL DAFTAR ULANG</button>`
        html += `<h3 class="w3-center">DATA PENDAFTAR REGISTRASI</h3>
        <h4 class="w3-card-4 w3-container w3-aqua">Keterangan Registrasi</h4>
        <table class="w3-table-all  w3-small" style="margin:0 auto">
            <tr>
                <td>Waktu Registrasi</td>
                <td>${tanggalfulllengkap(data.waktu_registrasi)}</td>
            </tr><tr>
                <td>ID Registrasi</td>
                <td>${data.id_registrasi}</td>
            </tr>
            <tr>
                <td>Keterangan Registrasi</td>
                <td>${data.ket_registrasi}</td>
            </tr>
            <tr>
                <td>Sumber Data Seleksi</td>
                <td>${data.datadata_jalur}</td>
            </tr>
            <tr>
                <td>Diverifikasi oleh</td>
                <td>${data.editable}</td>
            </tr>
        </table><hr/>`

    } else {
        data = db_pendaftar.filter(k => k.id_pendaftar == id)[0];
        html = `<div class="w3-center">
        <button class="w3-button w3-yellow w3-bottombar w3-border w3-border-black w3-round-xlarge w3-tiny" onclick="format_dapodik2('${id}')">FORMAT F-PD DAPODIK</button>
        </div>`
    }
    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";
    //keterangan registrasi
    
    html += `<h4 class="w3-card-4 w3-container w3-aqua">Keterangan Pendaftaran</h4>
        <table class="w3-table-all  w3-small" style="margin:0 auto">
            <tr>
                <td>Waktu Mendaftar</td>
                <td>${(data.waktu_daftar == "") ? "" : tanggalfulllengkap(data.waktu_daftar)}</td>
            </tr><tr>
                <td>ID Pendaftaran</td>
                <td>${data.id_pendaftar}</td>
            </tr>
            <tr>
                <td>Jalur PPDB yang dipilih</td>
                <td>${data.jalur_cpdb}</td>
            </tr>
        </table><hr/>
        <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS PESERTA DIDIK</h4>
        <table class="w3-table-all  w3-small" style="margin:0 auto">
            <tr>
                <td>Nama Siswa</td>
                <td>${data.nama_cpdb}</td>
            </tr><tr>
                <td>Tempat, Tanggal Lahir</td>
                <td>${data.cpdb_tempat_lahir}, ${tanggalfull(data.cpdb_tanggal_lahir)}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>${(data.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
            </tr>
            <tr>
                <td>Agama</td>
                <td>${data.cpdb_agama}</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td> ${data.cpdb_alamat_jalan}, <br> RT ${data.cpdb_rt}, RW ${data.cpdb_rw}, <br> Kelurahan  ${data.cpdb_kel}, Kecamatan ${data.cpdb_kec}, ${data.cpdb_kota} 
                </td>
               
            </tr>
        </table><hr/>
        <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS ORANG TUA</h4>
        <table class="w3-table-all  w3-small" style="margin:0 auto">
            <tr>
                <td>Nama Ayah</td>
                <td>${data.ortu_nama_ayah}</td>
            </tr>
            <tr>
                <td>Nama Ibu</td>
                <td>${data.ortu_nama_ibu}</td>
            </tr>
        </table><hr/>

        Keterangan lainnya, dapat Anda Unduh dengan mengekspor tabel ini ke file Excel.
        <div class="w3-center">
        
        </div>
        <br>
        <br>
        <br>
        `;



    // Object.keys(data).forEach(el => {
    //     html += `<tr> <td>${el.replace("_", " ").toUpperCase()}</td> <td>${data[el]}</td> </tr>`;
    // })


    dividinfo.innerHTML = html;
};
const konfirmasiregister = async(id) => {
    let param = "?action=getdatasheet&tab=respon";
    await fetch(urlppdb + param).then(m => m.json()).then(r => {
        db_pendaftar = r.records;
    }).catch(er => console.log(er));
    let data = db_pendaftar.filter(k => k.id_pendaftar == id)[0];

    let html = "";

    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";
    //keterangan registrasi
    html += `<div class="d_formul_reg"><h4 class="w3-card-4 w3-container w3-aqua">Keterangan Pendaftaran</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Waktu Mendaftar</td>
            <td>${(data.waktu_daftar == "") ? "" : tanggalfulllengkap(data.waktu_daftar)}</td>
        </tr><tr>
            <td>ID Pendaftaran</td>
            <td>${data.id_pendaftar}</td>
        </tr>
        <tr>
            <td>Jalur PPDB yang dipilih</td>
            <td>${data.jalur_cpdb}</td>
        </tr>
    </table><hr/>
    <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS PESERTA DIDIK</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Nama Siswa</td>
            <td>${data.nama_cpdb}</td>
        </tr><tr>
            <td>Tempat, Tanggal Lahir</td>
            <td>${data.cpdb_tempat_lahir}, ${tanggalfull(data.cpdb_tanggal_lahir)}</td>
        </tr>
        <tr>
            <td>Jenis Kelamin</td>
            <td>${(data.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
        </tr>
        <tr>
            <td>Agama</td>
            <td>${data.cpdb_agama}</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td> ${data.cpdb_alamat_jalan}, <br> RT ${data.cpdb_rt}, RW ${data.cpdb_rw}, <br> Kelurahan  ${data.cpdb_kel}, Kecamatan ${data.cpdb_kec}, ${data.cpdb_kota} 
            </td>
           
        </tr>
    </table><hr/>
    <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS ORANG TUA</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Nama Ayah</td>
            <td>${data.ortu_nama_ayah}</td>
        </tr>
        <tr>
            <td>Nama Ibu</td>
            <td>${data.ortu_nama_ibu}</td>
        </tr>
    </table><hr/></div>
    
    
    <hr/>
    <hr/>
    TANDAI PENDAFTAR INI SEBAGAI PENDAFTAR YANG TELAH<hr/>
    <button class="w3-button w3-red w3-round-large kirimkonfirmasimundur">MENGUNDURKAN DIRI</button>
    <button class="w3-button w3-green w3-round-large kirimkonfirmasidaftarulang">MENDAFTAR ULANG</button>
    <br/>
    <br/>
    `;



    // Object.keys(data).forEach(el => {
    //     html += `<tr> <td>${el.replace("_", " ").toUpperCase()}</td> <td>${data[el]}</td> </tr>`;
    // })


    dividinfo.innerHTML = html;
    let useraktif = JSON.parse(localStorage.getItem("datalogin")).id_namaasli;
    let divmundur = document.querySelector(".kirimkonfirmasimundur");
    let divmaju = document.querySelector(".kirimkonfirmasidaftarulang");
    divmundur.addEventListener("click", () => {
        let key = Object.keys(data);
        // console.log(key);
        //alert("divmundur");
        let dataa = new FormData();
        for (let a = 0; a < key.length; a++) {
            let k = key[a];
            if (k !== "editable") {
                dataa.append(k, data[k]);
            }
        }


        dataa.append("editable", useraktif);
        //dataa.append("id_registrasi","=column()&'_'&now()");
        dataa.append("ket_registrasi", "MENGUNDURKAN DIRI");
        dataa.append("datadata_jalur", "LOLOS SELEKSI PAGU");
        dataa.append("action", "daftarulang");
        //    id_registrasi	ket_registrasi	datadata_jalur
        dividinfo.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        fetch(urlppdb, {
                method: "post",
                body: dataa
            }).then(m => m.json())
            .then(r => {
                //console.log(r);
                dividinfo.innerHTML = "Data terkirim";
                cek_daftarulang('belum');
            })
            .catch(er => console.log(er))

        //ket_registrasi	datadata_jalur


    });
    divmaju.addEventListener("click", () => {
        let key = Object.keys(data);
        //console.log(key);
        // alert("divmundur");
        let dataa = new FormData();
        for (let a = 0; a < key.length; a++) {
            let k = key[a];
            if (k !== "editable") {
                dataa.append(k, data[k]);
            }
        }


        dataa.append("editable", useraktif);
        // dataa.append("id_registrasi","=column()&'_'&now()");
        dataa.append("ket_registrasi", "MENDAFTAR ULANG");
        dataa.append("datadata_jalur", "LOLOS SELEKSI PAGU");
        dataa.append("action", "daftarulang");
        //    id_registrasi	ket_registrasi	datadata_jalur
        dividinfo.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        fetch(urlppdb, {
                method: "post",
                body: dataa
            }).then(m => m.json())
            .then(r => {
                //console.log(r);
                dividinfo.innerHTML = "Data terkirim";
                cek_daftarulang('belum');
            })
            .catch(er => console.log(er))

    })
};
const konfirmasiregisterdarigagal = (id) => {
    let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    let dataptk = fungsi_html_jurnal("kuota_ptk");

    let loloszonasi = datazonasi["lolos_zonasi"];
    let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    let lolosptk = dataptk["lolos_ptk"];

    let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    let ga_ptk = dataptk["tidaklolos_ptk"];

    let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    let kr_ptk = dataptk["nonkriteria_ptk"]

    let ade = loloszonasi.concat(lolosafirmasi);
    let eda = ade.concat(lolosptk);
    rekapcpdblolos = eda;

    let tm = ga_zonasi.concat(ga_afirmasi);
    let ts = tm.concat(ga_ptk);

    let no = kr_zonasi.concat(kr_afirmasi);
    let nonkr = no.concat(kr_ptk);


    let data = ts.filter(k => k.id_pendaftar == id)[0];

    let html = "";

    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";
    //keterangan registrasi
    html += `<div class="d_formul_reg"><h4 class="w3-card-4 w3-container w3-aqua">Keterangan Pendaftaran</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Waktu Mendaftar</td>
            <td>${(data.waktu_daftar == "") ? "" : tanggalfulllengkap(data.waktu_daftar)}</td>
        </tr><tr>
            <td>ID Pendaftaran</td>
            <td>${data.id_pendaftar}</td>
        </tr>
        <tr>
            <td>Jalur PPDB yang dipilih</td>
            <td>${data.jalur_cpdb}</td>
        </tr>
    </table><hr/>
    <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS PESERTA DIDIK</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Nama Siswa</td>
            <td>${data.nama_cpdb}</td>
        </tr><tr>
            <td>Tempat, Tanggal Lahir</td>
            <td>${data.cpdb_tempat_lahir}, ${tanggalfull(data.cpdb_tanggal_lahir)}</td>
        </tr>
        <tr>
            <td>Jenis Kelamin</td>
            <td>${(data.cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
        </tr>
        <tr>
            <td>Agama</td>
            <td>${data.cpdb_agama}</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td> ${data.cpdb_alamat_jalan}, <br> RT ${data.cpdb_rt}, RW ${data.cpdb_rw}, <br> Kelurahan  ${data.cpdb_kel}, Kecamatan ${data.cpdb_kec}, ${data.cpdb_kota} 
            </td>
           
        </tr>
    </table><hr/>
    <h4 class="w3-card-4 w3-container w3-aqua">IDENTITAS ORANG TUA</h4>
    <table class="w3-table-all  w3-small" style="margin:0 auto">
        <tr>
            <td>Nama Ayah</td>
            <td>${data.ortu_nama_ayah}</td>
        </tr>
        <tr>
            <td>Nama Ibu</td>
            <td>${data.ortu_nama_ibu}</td>
        </tr>
    </table><hr/></div>
    
    
    <hr/>
    TANDAI PENDAFTAR INI SEBAGAI PENDAFTAR YANG TELAH<hr/>
    
    <button class="w3-button w3-green w3-round-large kirimkonfirmasidaftarulang">MENDAFTAR ULANG</button>
    <br/>
    <br/>
    `;



    // Object.keys(data).forEach(el => {
    //     html += `<tr> <td>${el.replace("_", " ").toUpperCase()}</td> <td>${data[el]}</td> </tr>`;
    // })<button class="w3-button w3-red w3-round-large kirimkonfirmasimundur">MENGUNDURKAN DIRI</button>


    dividinfo.innerHTML = html;
    let useraktif = JSON.parse(localStorage.getItem("datalogin")).id_namaasli;
    // let divmundur = document.querySelector(".kirimkonfirmasimundur");
    let divmaju = document.querySelector(".kirimkonfirmasidaftarulang");

    divmaju.addEventListener("click", () => {
        let key = Object.keys(data);
        //console.log(key);
        // alert("divmundur");
        let dataa = new FormData();
        for (let a = 0; a < key.length; a++) {
            let k = key[a];
            if (k !== "editable") {
                dataa.append(k, data[k]);
            }
        }


        dataa.append("editable", useraktif);
        // dataa.append("id_registrasi","=column()&'_'&now()");
        dataa.append("ket_registrasi", "MENDAFTAR ULANG");
        dataa.append("datadata_jalur", "TIDAK LOLOS PAGU");
        dataa.append("action", "daftarulang");
        //    id_registrasi	ket_registrasi	datadata_jalur
        fetch(urlppdb, {
                method: "post",
                body: dataa
            }).then(m => m.json())
            .then(r => {
                //console.log(r);
                dividinfo.innerHTML = "Data terkirim";
                cek_daftarulang('belum');
            })
            .catch(er => console.log(er))

    })
}
const final_print = (kelas) => {
    let isibody = document.querySelector("." + kelas).outerHTML;
    let judul = document.querySelector("." + kelas + "0").innerHTML;

    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>TABEL DATA SELEKSI</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 landscape;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;



    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">${judul.toUpperCase()}</h4>`;
    body.innerHTML += `${isibody}`;



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}
const final_excel = (kelas, sumber) => {
    let db
    let div = document.getElementById("frameexcel");
    let judul = document.querySelector("." + kelas + "0").innerHTML;
    if (sumber == 'rekapcpdblolos') {
        db = rekapcpdblolos;
    } else if (sumber == "db_du") {
        db = db_udahdaftarulang;
    } else if (sumber == "combine") {
        let namaurut = rekapcpdblolos.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));
        let mapregister = db_udahdaftarulang.map(s => s.id_pendaftar)
        combine = namaurut.filter(k => !(mapregister.indexOf(k.id_pendaftar) > -1));

        db = combine;
    } else {
        alert("Export XL tidak support")
    }
    let lr = db.length;
    let lc = Object.keys(db[0]).length;
    // console.log(lr)
    // console.log(lc)
    let html = `<table class="versi-table"> <thead> 
    <tr><td>Data Export ${judul}</td></tr> <tr>`
    if (sumber == "db_du") {
        html += `
       <th>waktu_registrasi</th>
       <th>id_registrasi</th>
       <th>ket_registrasi</th>
       <th>datadata_jalur</th>
        `
    }


    html += `<th>WAKTU_DAFTAR </th><th>ID_PENDAFTAR </th><th>ID_STATUS </th>
    <th>KET_STATUS </th><th>JALUR_CPDB </th><th>NAMA_CPDB </th>
    <th>CPDB_TANGGAL_LAHIR </th><th>CPDB_UMUR </th><th>CPDB_KOTA </th><th>CPDB_KEC </th>
    <th>CPDB_KEL </th><th>CPDB_RW </th><th>CPDB_RT </th><th>CPDB_TEMPAT_LAHIR </th><th>CPDB_JK </th>
    <th>CPDB_AGAMA </th><th>CPDB_ABK </th><th>CPDB_ANAKKE </th><th>CPDB_KEWARGANEGARAAN </th><th>CPDB_NO_REG_AKTE </th>
    <th>CPDB_ID_FILE_AKTA </th>
    <th>CPDB_NIK </th>
    <th>CPDB_NO_KK </th>
    <th>CPDB_ALAMAT_JALAN </th><th>CPDB_ID_FILE_KK </th>
    <th>CPDB_ID_FILE_DOMISILI </th><th>CPDB_NPSN </th><th>CPDB_SEKOLAHASAL </th><th>CPDB_ID_FILE_IJAZAH </th>
    <th>CPDB_NISN </th><th>ORTU_NAMA_AYAH </th><th>ORTU_NIK_AYAH </th><th>ORTU_TTL_AYAH </th>
    <th>ORTU_PENDIDIKAN_AYAH </th><th>ORTU_PEKERJAAN_AYAH </th><th>ORTU_PENGHASILAN_AYAH </th><th>ORTU_ABK_AYAH </th>
    <th>ORTU_NAMA_IBU </th><th>ORTU_NIK_IBU </th><th>ORTU_TTL_IBU </th>
    <th>ORTU_PENDIDIKAN_IBU </th><th>ORTU_PEKERJAAN_IBU </th><th>ORTU_PENGHASILAN_IBU </th><th>ORTU_ABK_IBU </th>
    <th>ORTU_NAMA_WALI </th><th>ORTU_NIK_WALI </th><th>ORTU_TTL_WALI </th>
    <th>ORTU_PENDIDIKAN_WALI </th><th>ORTU_PEKERJAAN_WALI </th><th>ORTU_PENGHASILAN_WALI </th>
    <th>ORTU_ABK_WALI </th><th>CPDB_ID_FILE_FILEPENDUKUNG_0 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_1 </th>
    <th>CPDB_ID_FILE_FILEPENDUKUNG_2 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_3 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_4 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_5 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_6 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_7 </th><th>ORTU_HP_IBU </th><th>ORTU_HP_AYAH </th><th>CPDB_KOTA_LAINNYA</th> </tr> </thead> <tbody>`;
    for (let i = 0; i < db.length; i++) {
        html += `<tr>`;
        if (sumber == "db_du") {
            html += `<td>${tanggalfulllengkap(db[i].waktu_registrasi)}</td>
            <td>${db[i].id_registrasi}</td>
            <td>${db[i].ket_registrasi}</td>
            <td>${db[i].datadata_jalur}</td>`;
        }
        html += `<td>${tanggalfulllengkap(db[i].waktu_daftar)}
    </td><td>${db[i].id_pendaftar}
    </td><td> ${db[i].id_status}
    </td><td>${db[i].ket_status}
    </td><td>${db[i].jalur_cpdb}
    </td><td>${db[i].nama_cpdb}
    </td><td>${(db[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(db[i].cpdb_tanggal_lahir)}
    </td><td>'${db[i].cpdb_umur}
    </td><td>${db[i].cpdb_kota}
    </td><td>${db[i].cpdb_kec}
    </td><td>${db[i].cpdb_kel}
    </td><td>${db[i].cpdb_rw}
    </td><td>${db[i].cpdb_rt}
    </td><td>${db[i].cpdb_tempat_lahir}
    </td><td>${db[i].cpdb_jk}
    </td><td>${db[i].cpdb_agama}
    </td><td>${db[i].cpdb_abk}
    </td><td>${db[i].cpdb_anakke}
    </td><td>${db[i].cpdb_kewarganegaraan}
    </td><td>${db[i].cpdb_no_reg_akte}
    </td><td>${(db[i].cpdb_id_file_akta == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_akta}
    </td><td>'${db[i].cpdb_nik}
    </td><td>'${db[i].cpdb_no_kk}
    </td><td>${db[i].cpdb_alamat_jalan}
    </td><td>${(db[i].cpdb_id_file_kk == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_kk}
    </td><td>${(db[i].cpdb_id_file_domisili == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_domisili}
    </td><td>${db[i].cpdb_npsn}
    </td><td>${db[i].cpdb_sekolahasal}
    </td><td>${(db[i].cpdb_id_file_ijazah == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_ijazah}
    </td><td>${db[i].cpdb_nisn}
    </td><td>${db[i].ortu_nama_ayah}
    </td><td>'${db[i].ortu_nik_ayah}
    </td><td>${tanggalfull(db[i].ortu_ttl_ayah)}
    </td><td>${db[i].ortu_pendidikan_ayah}
    </td><td>${db[i].ortu_pekerjaan_ayah}
    </td><td>${db[i].ortu_penghasilan_ayah}
    </td><td>${db[i].ortu_abk_ayah}
    </td><td>${db[i].ortu_nama_ibu}
    </td><td>'${db[i].ortu_nik_ibu}
    </td><td>${tanggalfull(db[i].ortu_ttl_ibu)}
    </td><td>${db[i].ortu_pendidikan_ibu}
    </td><td>${db[i].ortu_pekerjaan_ibu}
    </td><td>${db[i].ortu_penghasilan_ibu}
    </td><td>${db[i].ortu_abk_ibu}
    </td><td>${db[i].ortu_nama_wali}
    </td><td>${db[i].ortu_nik_wali}
    </td><td>${db[i].ortu_ttl_wali}
    </td><td>${db[i].ortu_pendidikan_wali}
    </td><td>${db[i].ortu_pekerjaan_wali}
    </td><td>${db[i].ortu_penghasilan_wali}
    </td><td>${db[i].ortu_abk_wali}
    </td><td>${(db[i].cpdb_id_file_filependukung_0 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_0}
    </td><td>${(db[i].cpdb_id_file_filependukung_1 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_1}
    </td><td>${(db[i].cpdb_id_file_filependukung_2 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_2}
    </td><td>${(db[i].cpdb_id_file_filependukung_3 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_3}
    </td><td>${(db[i].cpdb_id_file_filependukung_4 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_4}
    </td><td>${(db[i].cpdb_id_file_filependukung_5 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_5}
    </td><td>${(db[i].cpdb_id_file_filependukung_6 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_6}
    </td><td>${(db[i].cpdb_id_file_filependukung_7 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_7}
    </td><td>'${db[i].ortu_hp_ibu}
    </td><td>'${db[i].ortu_hp_ayah}
    </td><td>${db[i].cpdb_kota_lainnya}
    </td></tr>`
    };

    html += `</tbody>
    </table>`
    div.innerHTML = html;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: judul + " " + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 1,
        barisatas: 1,
        tabelmana: lr

    });
    div.innerHTML = "";
}

const cek_daftarulang = async (kondisi) => {
    let div = document.querySelector(".html_daftarulang_cek");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let datazonasi = fungsi_html_jurnal("kuota_zonasi");
    let dataafirmasi = fungsi_html_jurnal("kuota_afirmasi");
    let dataptk = fungsi_html_jurnal("kuota_ptk");

    let loloszonasi = datazonasi["lolos_zonasi"];
    let lolosafirmasi = dataafirmasi["lolos_afirmasi"];
    let lolosptk = dataptk["lolos_ptk"];

    let ga_zonasi = datazonasi["tidaklolos_zonasi"];
    let ga_afirmasi = dataafirmasi["tidaklolos_afirmasi"];
    let ga_ptk = dataptk["tidaklolos_ptk"];

    let kr_zonasi = datazonasi["nonkriteria_zonasi"]
    let kr_afirmasi = dataafirmasi["nonkriteria_afirmasi"]
    let kr_ptk = dataptk["nonkriteria_ptk"]

    let ade = loloszonasi.concat(lolosafirmasi);
    let eda = ade.concat(lolosptk);
    rekapcpdblolos = eda;

    let tm = ga_zonasi.concat(ga_afirmasi);
    let db_tidaklolospagu = tm.concat(ga_ptk);
    // console.log(db_tidaklolospagu)

    let no = kr_zonasi.concat(kr_afirmasi);
    let nonkr = no.concat(kr_ptk);
    let namaurut = rekapcpdblolos.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));
    let data = new FormData();
    data.append("action", "postgetumum");
    data.append("idss", idsss);
    data.append("tab", "daftarulang");
    let combine, htmlbelum = "",
        html = "";
    let htmltidaklolopag = "";
    let cekundurdiri
    let mapregister
    await fetch(urllogin, {
            method: 'post',
            body: data
        })
        .then(m => m.json())
        .then(r => {
            //console.log(r);

            db_udahdaftarulang = r.records;
            cekundurdiri = r.records.filter(k => k.ket_registrasi == "MENGUNDURKAN DIRI").length;
            let db_du = r.records;
            mapregister = db_udahdaftarulang.map(s => s.id_pendaftar)
            combine = namaurut.filter(k => !(mapregister.indexOf(k.id_pendaftar) > -1));
            if (r.jumlahdata == 1) {
                div.innerHTML = `<h3 class="w3-center">Belum ada pendaftar yang telah melakukan registrasi/Daftar Ulang</h3>`;
            } else {
                html = `<h3 class="w3-center trdu0">Data CPDB yang telah Registrasi Daftar Ulang</h3>
                <table class="w3-table garis w3-small trdu">
                <thead>
                    <th>No.</th>
                    <th>ID Registrasi</th>
                    <th>Status Registrasi</th>
                    <th>Sumber Data</th>
                    <th>Nama PDB</th>
                    <th>Jenis Kelamin</th>
                    <th>Tempat, Tanggal Lahir</th>
                    <th>Nama Ayah</th>
                    <th>Nama Ibu</th>
                    <th>Detail</th>
    
                </thead>
                <tbody>`
                for (let i = 0; i < db_du.length; i++) {
                    html += `<tr>
                        <td>${i + 1}</td>
                        <td>${db_du[i].id_registrasi}</td>
                        <td>${db_du[i].ket_registrasi}</td>
                        <td>${db_du[i].datadata_jalur}</td>
                        <td>${db_du[i].nama_cpdb}</td>
                        <td>${(db_du[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                        <td>${db_du[i].cpdb_tempat_lahir}, ${tanggalfull(db_du[i].cpdb_tanggal_lahir)}</td>
                        <td>${db_du[i].ortu_nama_ayah}</td>
                        <td>${db_du[i].ortu_nama_ibu}</td>
                        <td class="pointerkan w3-center" onclick="detailregister('db_du','${db_du[i].id_registrasi}')"><i class="fa fa-eye"></i></td>
                    </tr>`
                }
                html += `</tbody>
                </table>
                `;
            }



        })
        .catch(er => console.log(er))
    if (kondisi == "belum") {
        htmlbelum = `<h3 class="w3-center trdu0">Data CPDB yang Belum Registrasi Daftar Ulang</h3>
            <table class="w3-table garis w3-small trdu">
            <thead>
                <th>No.</th>
                <th>ID Pendaftar</th>
                <th>Nama PDB</th>
                <th>Jenis Kelamin</th>
                <th>Umur</th>
                <th>Nama Ayah</th>
                <th>Nama Ibu</th>
                <th>Detail</th>
                <th>Aksi</th>

            </thead>
            <tbody>`
        for (let i = 0; i < combine.length; i++) {
            htmlbelum += `<tr>
                    <td>${i + 1}</td>
                    <td>${combine[i].id_pendaftar}</td>
                    
                    <td>${combine[i].nama_cpdb}</td>
                    <td>${(combine[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>${combine[i].cpdb_umur}</td>
                    <td>${combine[i].ortu_nama_ayah}</td>
                    <td>${combine[i].ortu_nama_ibu}</td>
                    <td class="pointerkan w3-center" onclick="detailregister('combine','${combine[i].id_pendaftar}')"><i class="fa fa-eye"></i></td>
                    <td class="pointerkan w3-center" onclick="konfirmasiregister('${combine[i].id_pendaftar}')"><i class="fa fa-edit"></i></td>
                </tr>`
        }
        htmlbelum += `</tbody>
            </table>
            `;
        div.innerHTML = htmlbelum;
        document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','combine')")

    } else if (kondisi == "sudah") {

        div.innerHTML = html;
        document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','db_du')")
    } else if (kondisi == "ambillolospagu") {
        htmltidaklolopag = `<h3 class="w3-center trdu0">Data CPDB yang BISA DIIJINKAN Registrasi Daftar Ulang</h3>
        Sumber data ini merupakan data peserta didik yang telah gagal lolos seleksi karena kuota pada masing-masing telah terpenuhi sebelumnya.
        Sumber data ini dapat dipakai untuk memanggil/menggantikan pendaftar yang telah mengundurkan diri.
        Kami melacak, hanya ada ${cekundurdiri} CPDB yang berhak menggantikan pendaftar yang mengundurkan diri(baris warna hijau). Mungkin saja Anda sudah memasukkan data tidak lolos pagu ini untuk melaksanakan registrasi (daftar ulang). Oleh karena itu, cek <b>CPDB yang telah melaksanakan Daftar Ulang</b> apabila ada pendaftar yang bersumber dari "TIDAK LOLOS PAGU", maka Anda sudah memilih satu dari pendaftar ini untuk mendaftar ulang. Tabel di bawah ini menampilkan data TIDAK LOLOS PAGU yang belum MENDAFTAR ULANG (Tidak menampilkan data yang sudah diloloskan untuk MENDAFTAR ULANG)<br><br> 
        <table class="w3-table garis w3-small trdu">
        <thead>
            <th>No.</th>
            <th>ID Pendaftar</th>
            <th>Nama PDB</th>
            <th>Jenis Kelamin</th>
            <th>Jalur</th>
            <th>Nama Ayah</th>
            <th>Nama Ibu</th>
            <th>Detail</th>
            <th>Aksi</th>

        </thead>
        <tbody>`;
        let db_tidaklolospag = db_tidaklolospagu.filter(s => !(mapregister.indexOf(s.id_pendaftar) > -1));

        for (let j = 0; j < db_tidaklolospag.length; j++) {
            if (cekundurdiri >= (j + 1)) {


                htmltidaklolopag += `<tr class="w3-green">
                    <td>${j + 1}</td>
                    <td>${db_tidaklolospag[j].id_pendaftar}</td>
                    
                    <td>${db_tidaklolospag[j].nama_cpdb}</td>
                    <td>${(db_tidaklolospag[j].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>${db_tidaklolospag[j].jalur_cpdb}</td>
                    <td>${db_tidaklolospag[j].ortu_nama_ayah}</td>
                    <td>${db_tidaklolospag[j].ortu_nama_ibu}</td>
                    <td class="pointerkan w3-center" onclick="detailregister('db_gagal','${db_tidaklolospag[j].id_pendaftar}')"><i class="fa fa-eye"></i></td>
                    <td class="pointerkan w3-center" onclick="konfirmasiregisterdarigagal('${db_tidaklolospag[j].id_pendaftar}')"><i class="fa fa-edit"></i></td>
                </tr>`;
            } else {
                htmltidaklolopag += `<tr class="w3-red">
                    <td>${j + 1}</td>
                    <td>${db_tidaklolospag[j].id_pendaftar}</td>
                    
                    <td>${db_tidaklolospag[j].nama_cpdb}</td>
                    <td>${(db_tidaklolospag[j].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>${db_tidaklolospag[j].jalur_cpdb}</td>
                    <td>${db_tidaklolospag[j].ortu_nama_ayah}</td>
                    <td>${db_tidaklolospag[j].ortu_nama_ibu}</td>
                    <td class="pointerkan w3-center" onclick="detailregister('db_gagal','${db_tidaklolospag[j].id_pendaftar}')"><i class="fa fa-eye"></i></td>
                    <td class="pointerkan w3-center" onclick="konfirmasiregisterdarigagal('${db_tidaklolospag[j].id_pendaftar}')"><i class="fa fa-edit"></i></td>
                </tr>`;
            }
        }
        if (cekundurdiri == 0) {
            alert("Maaf, Data Tidak Lolos Pagu hanya bisa diaktifkan saat pendaftar yang seharusnya daftar ulang ada yang mengundurkan diri.");
            div.innerHTML = ""; //htmltidaklolopag;
            document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','cpdblolos')");

        } else {
            alert("Terdeteksi ada pendaftar yang mengundurkan diri, silakan data berikut bisa Anda panggil untuk melaksanakan registrasi daftar ulang.");
            div.innerHTML = htmltidaklolopag;
            document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','cpdblolos')");

        }
    } else {
        //ambillolospagu
        div.innerHTML = "";
        document.querySelector(".btn_export_reduksi").setAttribute("onclick", "final_excel('trdu','cpdblolos')");
    }

};
let dbbaru = [];
const nomor3digit = (n) => n > 9 ? "0" + n : "00" + n;

const save_alamat_sekolah = (el) => {
    el.innerHTML = `on proses <img src="/app/barloading.gif" alt="proses loading">`;
    // console.log(isi);
    let bungkus = [];
    let ar = [];
    let kol1 = document.querySelector(".alamat_rt").innerHTML;
    let kol2 = document.querySelector(".alamat_rw").innerHTML;
    let kol3 = document.querySelector(".alamat_kelurahan").innerHTML;
    let kol4 = document.querySelector(".alamat_kecamatan").innerHTML;
    let dep = "KOTA DEPOK";
    ar.push(kol1);
    ar.push(kol2);

    ar.push(kol3);
    ar.push(kol4);
    ar.push(dep);
    bungkus.push(ar);


    let tabel = JSON.stringify(bungkus);
    let data = new FormData();
    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "seleksi");
    data.append("tabel", tabel);
    data.append("kolom", 1);
    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            //console.log(r);
            el.innerHTML = "SIMPAN";
        }).catch(er => console.log(er));
    
    //alamat_rt	alamat_rw	alamat_kelurahan	alamat_kecamatan	alamat_kota

    let ob = {};
    ob.alamat_rt = kol1;
    ob.alamat_rw = kol2;
    ob.alamat_kelurahan = kol3;
    ob.alamat_kecamatan = kol4;
    ob.alamat_kota = "KOTA DEPOK";
    let updatealamat = new FormData();
    updatealamat.append("action","updatesettingalamat");
    updatealamat.append("row",id_sekolah);
    updatealamat.append("objek",JSON.stringify(ob));
    fetch(terminal,{method:"post",body:updatealamat})
    .then(m => m.json()).then(r =>{
        //console.log(r);
    }).catch(er => console.log(er));

};


const cekpendaftarmultisekolah = async () => {
    try {


        let div = document.querySelector(".verif_verivikator");
        div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        let datacek;
        let db_sekolahlain = [];
        let param = "?action=getdatasheet&tab=respon";
        await fetch(urlppdb + param).then(m => m.json())
            .then(r => {

                db_pendaftar = r.records;
                console.log(db_pendaftar);
                datacek = r.records;
                // datacek = r.records.map(s=> [{"nama_cpdb":s.nama_cpdfb ,"sekolahppdb":val_namasekolah}][0]);
                // datacek = r.records.map(s=> {"nama_cpdb":s.nama_cpdb ,"sekolahppdb" : val_namasekolah});
            }).catch(er => console.log(er))


        let linktes = [{
                "url": "https://script.google.com/macros/s/AKfycbw_CxeurtA5idnQukkl7-xtnFWITXc-tgrqQ7F6OKiKUepV0gWUA5Jl4lR4sBDFC8j6/exec",
                "sekolahppdb": "SDN RATUJAYA 1"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbwBzMzpHXe4tt-t0ZkINwF65cPcPAfonUMAHb3FO7BfXZVSO0drotC_S2HzYnBpJfeGBw/exec",
                "sekolahppdb": "SDN RATUJAYA 2"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbwUy4hxy6xB3toKOJp1cvHtS99zJrQ8pfvg1foA9KFUtjdti08rGk-uuyZIX9Fdp87O/exec",
                "sekolahppdb": "SDN RATUJAYA 3"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycby1IAT32XXre0kd6_O9UWWanql-vkVGhnef9Q1D0m2QcyCBlg8DboA2CviNU1MSho7LOA/exec",
                "sekolahppdb": "SDN UTAN JAYA"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbzY3E6aNSCnrgFV4hbT03Xd_VOhSWfK83GZRc7fMLQlZB_199KZVxNIMCdjGFymyh0E1g/exec",
                "sekolahppdb": "SDN CIPAYUNG 1"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbzyN2wqEuyYfryuBqQg8s2HHNy4ES2aWkuqAtJPO2Gr1Pxn4154o-pNEmgRnQJHOU80/exec",
                "sekolahppdb": "SDN CIPAYUNG 2"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbxApSIpLIZf6bNWgpKwh9YOoq7RFS91F99ol_dclrbM1Dy2nnBmj24nm_0ccy4iFC60Gg/exec",
                "sekolahppdb": "SDN CIPAYUNG 3"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbwYIVjnZxB_Wc2cSRVh9ekKFley8f_ZzTei5vI5tOUXJMOdMFDgR6Vr4vIISISGtysmsA/exec",
                "sekolahppdb": "SDN CIPAYUNG 4"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbwSFZslGYKE9YybQ47ecw9NyHfO2Brg1Ij82aKpdssG9OSjOTzoeWapUeo6gGxvnHwtEg/exec",
                "sekolahppdb": "SDN CITAYAM 1"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbxNIrTDAsJVJ8qwrcrnBCDW1zyF3zMrhQe3-94Aj148lQseM5y-1c_q0AVvFHNwMler/exec",
                "sekolahppdb": "SDN CITAYAM 4"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbyfogeCk3qiRblZA0cnwujJqdHoNKwkHveEfw7WyeFdfDOFL6FuOe0Wf1P-oPVlsBoe/exec",
                "sekolahppdb": "SDN PONDOK TERONG 1"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbzYMPW4a9VJUVLC5OKjUwYiJYjyaq8HLaih1IWOxTqa04nOyVByLJQIdpLeukZx5py3/exec",
                "sekolahppdb": "SDN PONDOK TERONG 3"
            },
            {
                "url": "https://script.google.com/macros/s/AKfycbyLkRUvG9_gtuBh3UNhICNjifkhOnSj9ObX-EYYX51R3OW81PREN857jHyRTU5WDQm7/exec",
                "sekolahppdb": "SDN PONDOK TERONG 4"
            }
        ];
        let de = linktes; //.filter(k=> !(k.sekolahppdb == val_namasekolah));
        let dbsementara = [];
        for (let i = 0; i < de.length; i++) {
            div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading"> memanggil data ${de[i].sekolahppdb}`
            let ur = de[i].url;
            await fetch(ur + param).then(m => m.json())
                .then(r => {
                    let tes = r.records;
                    tes.forEach(s => {
                        s["sekolahppdb"] = de[i].sekolahppdb;
                        db_sekolahlain.push(s);

                    })
                })
        }
        //   console.log(de);
        //   console.log(db_sekolahlain);
        let data = db_sekolahlain.filter((v, i, a) => !(a.findIndex(t => (t.nama_cpdb === v.nama_cpdb)) === i));
        let html = "Data pendaftar terindikasi melakukan pendaftaran lebih dari satu sekolah. <br><br>";
        let resultganda = [];
        let resultgandaf = [];
        let namaacuan = [];
        let tes = [];
        for (let i = 0; i < data.length; i++) {
            let indek = namaacuan.indexOf(data[i].nama_cpdb);
            if (indek === -1) {
                tes = db_sekolahlain.filter(s => s.nama_cpdb == data[i].nama_cpdb);
                resultgandaf.push(tes)
                namaacuan.push(data[i].nama_cpdb);
            };
        };
        //   resultganda = resultgandaf.filter(u=> u.filter(s=> !(s.sekolahppdb == val_namasekolah)));
        resultganda = resultgandaf.filter(function (s) {
            let bendera = 0;
            for (let a = 0; a < s.length; a++) {
                if (s[a].sekolahppdb == val_namasekolah) {
                    bendera = 1;
                    break;
                }
            }
            if (bendera == 1) {
                return true
            } else {
                return false
            }
        });

        // console.log(resultganda);
        for (j = 0; j < resultganda.length; j++) {
            html += `<p class="w3-aqua w3-round-large">${resultganda[j][0].nama_cpdb}</p>
            <button onclick="newPrint('tbg2sekolah_${j}')" class="w3-btn w3-blue"> <i class="fa fa-print"></i> Print</button>
            <button onclick="newExcel('tbg2sekolah_${j}')" class="w3-btn w3-green"> <i class="fa fa-file-excel-o"></i> Export XLs</button>
    <table class="w3-table-all garis w3-small tbg2sekolah_${j}">
    <tr>`
            let koloms = resultganda[j];
            // console.log(koloms)
            let kolom = koloms; //.filter(s=> s.filter(u=> u.sekolahppdb == val_namasekolah));
            //console.log(kolom)

            for (k = 0; k < kolom.length; k++) {
                html += `<td><ul class="w3-ul">
            <li class="w3-aqua">Nama CPDB:<br> ${kolom[k].nama_cpdb}</li>
            <li>Waktu Mendaftar:<br> ${tanggalfulllengkap(kolom[k].waktu_daftar)}</li>
            <li class="w3-yellow">Mendaftar di Sekolah:<br> ${kolom[k].sekolahppdb}</li>
            <li class="w3-orange">Jalur PPDB:<br> ${kolom[k].jalur_cpdb}</li>
            <li class="w3-sand">Status Pendaftaran: ${kolom[k].id_status}
            </li>
            <li>ID Pendaftar:<br> ${kolom[k].id_pendaftar}</li>
            <li>TTL:<br> ${kolom[k].cpdb_tempat_lahir}, ${tanggalfull(kolom[k].cpdb_tanggal_lahir)}</li>
            <li>Skor Umur:<br> ${kolom[k].cpdb_umur}</li>
            <li>Nama Ayah:<br> ${kolom[k].ortu_nama_ayah}</li>
            <li>Alamat:<br> ${kolom[k].cpdb_alamat_jalan}, <br>
            RT ${kolom[k].cpdb_rt} RW ${kolom[k].cpdb_rw}<br>
            Kel. ${kolom[k].cpdb_kel} <br>Kec. ${kolom[k].cpdb_kec}<br>
            ${kolom[k].cpdb_kota}
            </li>

          
      <ul>
      </td>`
            }
            html += `</tr></table>`;
        }
        //<button onclick="alert('aksi untuk id ini = ${kolom[k].id_pendaftar}')">AKSI</button>
        // console.log(namaacuan);
        // console.log(resultganda);

        html += `<hr/>`;
        div.innerHTML = html;
        //   ,
        //       {"url": ""   ,"sekolahppdb" : "SDN PONDOK TERONG 3"},
        //       {"url": ""   ,"sekolahppdb" : "SDN PONDOK TERONG 4"},
        //       {"url": ""   ,"sekolahppdb" : "SDN CIPAYUNG 2"},
        //       {"url": ""   ,"sekolahppdb" : "SDN CIPAYUNG 3"},
        //       {"url": ""   ,"sekolahppdb" : "SDN CIPAYUNG 4"},
        //       {"url": ""   ,"sekolahppdb" : "SDN CITAYAM 1"},
        //       {"url": ""   ,"sekolahppdb" : "SDN CITAYAM 4"},
        //       {"url": ""   ,"sekolahppdb" : "SDN UTAN JAYA"}
    } catch (er) {
        let div = document.querySelector(".verif_verivikator");
        div.innerHTML = "Maaf, Tidak bisa ditampilkan. Mungkin saja sekolah lain belum ada data yang mendaftar."
    }
}

const cekverifulang = () => {
    let div = document.querySelector(".verif_verivikator");
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);
            db_pendaftar = r.records;
            let data = r.records;
            let html = `
            Berikut ini data keseluruhan yang Anda bisa VERIFIKASI ULANG (baik yang sebelumnya telah diverifikasi/verifikasi ditolak)
            <hr/>
           <table class="w3-table-all garis w3-small tabel_pendaftarmasuk"><thead>
        <tr>
            <th>Sistem Jalur</th> 
            <th>ID Pendaftar</th>
            <th>Nama Pendaftar</th>
            <th>Status Pendaftaran</th>
            <th>Detail</th>
         
        </tr> </thead> <tbody>`;
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                <td>${data[i].jalur_cpdb}</td>
                <td>${data[i].id_pendaftar}</td>
                <td>${data[i].nama_cpdb}</td>
                <td>${data[i].id_status}</td>
                <td>
                <button onclick="detailpendaftarTerminal2('${data[i].baris_terminal}')"><i class="fa fa-edit w3-large"></i> Verifikasi Ulang</button>
                </td>
               
        </tr>`;
            }
            html += ` </tbody> </table> `;
            div.innerHTML = html;
        }).catch(er => {
            console.log(er);
        })
};

const pilihrombellll = () => {
    let dsel = document.querySelector("#lls_pilihrombel");
    let div = document.querySelector(".lls_divrombel");
    let v_total = document.querySelector(".ll_jumlahtotal");
    let v_lk = document.querySelector(".ll_jumlahl");
    let v_pr = document.querySelector(".ll_jumlahp");
    let v_judul = document.querySelector(".judulrombel");
    let prin = document.querySelector(".prinrombel");
    let exel = document.querySelector(".excelrombel");
    // let div = document.querySelector(".final_resultppdb");
    //lls_divrombel
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let x = dsel.options;
    let y = dsel.selectedIndex;
    let v = x[y].value;
    if (v == "all") {
        let html2 = `
                <table class="w3-table-all garis w3-tiny"><thead>
                <tr class="w3-aqua">
                    <th rowspan="2">No. Urut</th>
                    <th rowspan="2">No Induk Sekolah</th>
                    <th rowspan="2">Rombel</th>
                    <th rowspan="2">Nama CPDB</th>
                    <th rowspan="2">Tempat, Tanggal Lahir</th>
                    <th rowspan="2">Jenis Kelamin</th>
                    <th colspan="6">Alamat Lengkap</th>
                    </tr>
                <tr>
                    
                    <th>Jalan</th>
                    <th>RT</th>
                    <th>RW</th>
                    <th>Kelurahan</th>
                    <th>Kecamatan</th>
                    <th>Kota</th>
            
                </tr>
                </thead><tbody>`;
        let namaurut = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;

        for (let i = 0; i < namaurut.length; i++) {
            html2 += `<tr>
                    <td>${i + 1}</td>
                    <td>222301${nomor3digit(i + 1)}</td>
                    <td>${namaurut[i].rombel}</td>
                    <td>${namaurut[i].nama_cpdb}</td>
                    <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
                    <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
                    <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
                    </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
                    </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
                    </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
                    </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
                    
                    </td>
                   
                    </tr>`
        }
        html2 += "</tbody></table>";
        div.innerHTML = html2;
        v_total.innerHTML = namaurut.length;
        v_lk.innerHTML = namaurut.filter(s => s.cpdb_jk == "L").length;
        v_pr.innerHTML = namaurut.filter(s => s.cpdb_jk == "P").length;
        v_judul.innerHTML = "Daftar Siswa Seluruh Kelas";
        prin.setAttribute("onclick", "prtrombel('all')");
        exel.setAttribute("onclick", "excelrombel('all')");
    } else {
        let html3 = `
            <table class="w3-table-all garis w3-tiny"><thead>
            <tr class="w3-aqua">
                <th rowspan="2">No. Urut</th>
                <th rowspan="2">No Induk Sekolah</th>
                <th rowspan="2">Rombel</th>
                <th rowspan="2">Nama CPDB</th>
                <th rowspan="2">Tempat, Tanggal Lahir</th>
                <th rowspan="2">Jenis Kelamin</th>
                <th colspan="6">Alamat Lengkap</th>
                </tr>
            <tr>
                
                <th>Jalan</th>
                <th>RT</th>
                <th>RW</th>
                <th>Kelurahan</th>
                <th>Kecamatan</th>
                <th>Kota</th>
        
            </tr>
            </thead><tbody>`;
        let tesnamaurut = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        namaurut = tesnamaurut.filter(s => s.rombel == v)
        for (let i = 0; i < namaurut.length; i++) {
            html3 += `<tr>
                <td>${i + 1}</td>
                <td>222301${nomor3digit(i + 1)}</td>
                <td>${namaurut[i].rombel}</td>
                <td>${namaurut[i].nama_cpdb}</td>
                <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
                <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
                <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
                </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
                </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
                </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
                </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
                
                </td>
              
                </tr>`
        }
        html3 += "</tbody></table>";
        div.innerHTML = html3;
        v_total.innerHTML = namaurut.length;
        v_lk.innerHTML = namaurut.filter(s => s.cpdb_jk == "L").length;
        v_pr.innerHTML = namaurut.filter(s => s.cpdb_jk == "P").length;
        v_judul.innerHTML = "Daftar Siswa Kelas " + v;
        prin.setAttribute("onclick", "prtrombel('" + v + "')");
        exel.setAttribute("onclick", "excelrombel('" + v + "')");
    }
}

const printinduk = (kelas) => {
    //alert(kelas)
    //tabelprintnomorinduk
    let isibody = document.querySelector("." + kelas).outerHTML;
    let judul = "DATA PENOMORAN BUKU INDUK"

    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>TABEL DATA PENOMORAN BUKU INDUK</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 landscape;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;



    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">${judul.toUpperCase()}</h4>`;
    body.innerHTML += `${isibody}`;



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}
const prtrombel = (kelas) => {
    //alert(kelas)
    //tabelprintnomorinduk
    let isibody = document.querySelector(".lls_divrombel").innerHTML;
    let judul
    if (kelas == "all") {
        judul = "Tabel Data Seluruh Kelas"
    } else {
        judul = "Tabel Data Kelas " + kelas;

    }

    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>TABEL DATA PENOMORAN BUKU INDUK</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{height:100%;width:100%;margin:0;padding:0}
        
         @page {
            size: A4 landscape;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;



    body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    body.innerHTML += `<h4 class="w3-center">${judul.toUpperCase()}</h4>`;
    body.innerHTML += `${isibody}`;



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
};

const set_info = () =>{
    html_setting.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let data = new FormData();
    data.append("action", "postgetumum")
    data.append("idss", idss);
    data.append("tab", "pagu");
    fetch(urllogin, {
            method: "post",
            body: data
        }).then(m => m.json())
        .then(r => {
            //alert(r.result);
            //console.log(r);
            let bol = r.records[0].setingan_formdaftar;
            let teksbol = "";
            let boltombol = bol;
            let tekboltombol = ""
            if(bol=== true){
                teksbol =`Pendaftar <b class="w3-text-blue">bisa</b> melihat tombol Daftar.`;
                //`Pendaftar <b class="w3-text-blue">bisa</b> mengakses formulir pendaftaran.
                boltombol = false;
                tekboltombol = `<button class="w3-red w3-button w3-round-large w3-small " onclick="hiddenshow_tomboldaftar(${boltombol})">Sembunyikan Tombol Daftar </button>`;
            }else{
                teksbol =`Pendaftar <b class="w3-text-red">Tidak bisa</b> melihat tombol Daftar`;
                boltombol = true;
                tekboltombol = `<button class="w3-green w3-button w3-round-large w3-small " onclick="hiddenshow_tomboldaftar(${boltombol})">Tampilkan Tombol Daftar </button>`;
                

            };
            let formkembali = r.records[0].form_dikembalikan;
            let teksfk, htltmbl;
            if(formkembali === true){
                teksfk = `Formulir status DIKEMBALIKAN <b class="w3-text-blue">bisa diakses</b>`;
                htltmbl = `<button onclick="formkembalifn(false)" class="w3-red w3-button w3-round-large">TOLAK AKSES</button>
                <br><sub>Tolak akses berarti pendaftar tidak bisa mengirimkan revisi isian formulir pendaftaran</sub><br>`;
            }else{
                teksfk = `Formulir status DIKEMBALIKAN <b class="w3-text-red">tidak bisa diakses</b>`;
                htltmbl = `<button onclick="formkembalifn(true)" class="w3-red w3-button w3-round-large">BUKA AKSES</button>
                <br><sub>Tolak akses berarti pendaftar bisa mengirimkan revisi isian formulir pendaftaran</sub><br>`;
                }
            //let bol = r.rerords[0].
            let teks  = `
            <div class="w3-card-4 w3-container w3-center">
           
                <h5 class="w3-center w3-pale-green">Tampilan tombol DAFTAR</h5>
                <h6 class="tekspublikasidaftar"">${teksbol}</h6>
                <div class="tmb_tekspublikasidaftar">${tekboltombol}</div>
                <hr>
            </div>
            <hr>
            <div class="w3-card-4 w3-container">
                <h5 class="w3-center w3-pale-green">Teks Informasi yang akan muncul di web pendaftar:</h5>
                <div contenteditable="true" class="w3-border w3-border-blue w3-padding w3-round-large teksinfoeditable">${r.records[0].teks_info}</div>
                <br>
                <div><button class="w3-button w3-blue w3-round-large" onclick="simpan_teksinfo(this)">Publikasikan Info</button></div>    
            <br></div>
            <hr/>
            <div class="w3-card-4 w3-container">
            <h5 class="w3-center w3-pale-green">Akses terhadap formulir yang dikembalikan:</h5>
            Ketika ada verifikasi pendaftar dengan status <b>DIKEMBALIKAN</b> maka pendaftar tersebut bisa merevisi isian formulirnya ke admin/panitia PPDB. Namun, Anda bisa di sini, bisa mengatur pengaturan terhadap pendaftar yang formulirnya DIKEMBALIKAN untuk diberik akses mengirimkan revisi formulir atau tidak. Berikut keterangannya:
            <div class="ketformulirdikembalikan w3-border w3-container w3-border-blue w3-round-large">${teksfk}</div><br>
            Silakan edit akses formulir yang dikembalikan dengan tombol berikut:
             <div class="w3-center tmbl_formulirdikembalikan">${htltmbl}</div>   
            </div>
            `;
            let nomorWa = r.records[0].no_wa;
            let urlgrupWa = r.records[0].urlgrup_wa;
            teks +=`<hr><div class="w3-card-4 w3-container">`;
                teks +=`<h5 class="w3-center w3-pale-green">No Whatsapp Sebagai Narahubung</h5>`;
                teks +=`Cantumkan nomor WhatsApp yang bisa dihubungi oleh Calon Peserta Didik atau Anda dapat mencamtukan Link Whatsapp Grup`;
                teks +=`<div class="w3-center w3-margin">`;
                    teks +=`<br>Nomor Whatsapp<br><input type="text" value="${nomorWa}" class="w3-input w3-border w3-pale-red new_wa w3-border w3-pale-red" style="width:350px;margin:0 auto" placeholder="Gunakan Format: +628xxxxxxx"><br>`;
                    teks +=`Atau masukkan url link grup Whatsapp`;
                    teks +=`<input type="text" value="${urlgrupWa}" class="w3-input w3-border w3-pale-red new_grupwa" >`;
                    teks += `<br><button class="w3-button w3-yellow w3-border w3-bottombar w3-border-black w3-round-xlarge w3-small" onclick="publikasikannomorwa(this)">Publikasikan</button>`;
                teks +=`</div>`;
            teks +=`</div>`;
            
            
            html_setting.innerHTML = teks;
        }).catch(er => {
            //console.log(er);
            html_setting.innerHTML = "Oups, Maaf. Terjadi kesalahan! ";
            alert("Maaf, terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.");
        })
};
const set_akunverif = () =>{
    html_setting.innerHTML = `<div class="w3-center w3-margi-top"><img src="/app/barloading.gif" alt="proses loading"></div>`;
    let dataakun = new FormData();
    dataakun.append("action","dataakun");
    dataakun.append("id",id_sekolah);
    fetch(terminal,{method:"post",body:dataakun})
    .then(m => m.json()).then(r => {
        //console.log(r);
        let dataakun = r.setting
        let html = `<div class="w3-card-4 w3-round-large w3-border w3-container" style="overflow-x:auto">`;
            html +=`<h5 class="w3-center">Data Akun Admin</h5>`;
            html +=`Anda sebagai Admin Super, berhak untuk menambahkan, mengedit, atau menghapus akun admin lainnya. Setiap yang diedit atau dihapus mungkin saja akan tetap mengakses selama tidak login ulang.`;
                html +=`<table class="w3-table-all w3-centered tabelakunadmin w3-tiny"><thead>`;
                html +=`<tr class="w3-pale-green">
                <th class="w3-border">No.</th>
                <th class="w3-border">Username</th>
                <th class="w3-border">Password</th>
                <th class="w3-border">Nama Profil</th>
                <th class="w3-border">Nama Asli</th>
                <th class="w3-border">ID Panitia</th>
                <th class="w3-border" style="width:30px">ID Akun</th>
                <th class="w3-border" style="width:30px">ID<br>Sekolah</th>
                <th class="w3-border">Nama Sekolah</th>
                <th class="w3-border">Aksi</th>
                </tr></thead><tbody>`;
                    for(let i = 0 ; i < dataakun.length ; i++){
                        //username	password	nama_profil	id_namaasli	id_panitia	id_akun	id_sekolah	namasekolah
                        html +=`<tr>`;
                            html +=`<td class="w3-border">${(i+1)}</td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="username" value="${dataakun[i].username}" style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="password"  value="${dataakun[i].password}" style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="nama_profil"  value="${dataakun[i].nama_profil}" style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="id_namaasli"  value="${dataakun[i].id_namaasli}" style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="id_panitia" value="${dataakun[i].id_panitia}" style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="id_akun" value="${dataakun[i].id_akun}" disabled style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="id_sekolah" value="${dataakun[i].id_sekolah}" disabled style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><input type="text" data-akunadmin="namasekolah"  value="${dataakun[i].namasekolah}" disabled style="width:100%;border: none transparent;outline: none;background:transparent"></td>`;
                            html +=`<td class="w3-border"><button onclick="kirimdataakunadmin(this, ${i},'edit')" title="Simpan Perubahan"><i class="fa fa-save"></i></button><button onclick="kirimdataakunadmin(this, ${i},'hapus')" title="Hapus Akun"><i class="fa fa-trash"></i></button></td>`;
                        html +=`</tr>`;
                    }
                html +=`</tbody>`
                html +=`</table><br>`
                html +=`<div class="w3-center"><button class="w3-button w3-yellow w3-round-xlarge w3-border w3-bottombar w3-border-black w3-tiny" onclick="html_tambahakun()">Tambah Admin</button></div>`
        html +=`</div>`;
        html_setting.innerHTML = html;
    })
}
const html_tambahakun = ()=>{
    let html =`<div class="w3-card-4 w3-round-large w3-border w3-container" style="overflow-x:auto">`;
        html +=`<h3 class="w3-center w3-pale-blue">Tambah Akun Admin</h3><hr>`;
            html +=`<h6 class="w3-center">Username</h6>`;
                html +=`<input type="text" data-akunadmin="username" style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">Password</h6>`;
            html +=`<input type="text" data-akunadmin="password"  style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">Nama Profil</h6>`;
            html +=`<input type="text" data-akunadmin="nama_profil" style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">Nama Asli</h6>`;
            html +=`<input type="text" data-akunadmin="id_namaasli" style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">ID Panitia (default sistem)</h6>`;
            html +=`<input type="text" data-akunadmin="id_panitia" value="tim verif" disabled style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">ID Akun (default sistem)</h6>`;
            html +=`<input type="text" data-akunadmin="id_akun" value="new" disabled style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">ID Sekolah (default sistem)</h6>`;
            html +=`<input type="text" data-akunadmin="id_sekolah" value="${id_sekolah}" disabled style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<h6 class="w3-center">Nama Sekolah (default sistem)</h6>`;
            html +=`<input type="text" data-akunadmin="namasekolah"  value="${val_namasekolah}" disabled style="width:100%;border: black transparent;outline: none;background:transparent;text-align:center;width:300px">`;
            html +=`<div class="w3-center"><button class="w3-button w3-yellow w3-round-xlarge w3-border w3-bottombar w3-border-black" onclick="tambahkanakunadmin(this)">Tambahkan Akun</button></div>`
        html +=`</div>`;
    html_setting.innerHTML = html;
}
const kirimdataakunadmin = (el, indek, kondisi) =>{
    el.innerHTML= `<i class="fa fa-spin fa-spinner"></i> ...`;
    let tabel = document.querySelector(".tabelakunadmin");
    let tbody = tabel.querySelector("tbody");
    console.log(tabel, tbody);
    
}
const tambahkanakunadmin = (el) =>{
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> ...`
}
const publikasikannomorwa = (el)=>{
    el.innerHTML = `<i class="fa fa-spin fa-spinner"></i> ... Memproses`;
    let nowa = document.querySelector(".new_wa");
    let grupwa = document.querySelector(".new_grupwa");
    let tab = [];
    let ob = {};
    let tabel = []
    tab.push(nowa.value);
    tab.push(grupwa.value);
    ob.no_wa = nowa.value;
    ob.urlgrup_wa = grupwa.value;
    
    tabel.push(tab)

    let tabels = JSON.stringify(tabel);
    
    let data = new FormData();

    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "pagu");
    data.append("tabel", tabels);
    data.append("kolom", 25);
    fetch(urllogin, {
        method: 'post',
        body: data
    }).then(m => m.json())
    .then(r => {
        //console.log(r);
        el.innerHTML = `Publikasikan`;
    })
    .catch(er => console.log (er));
    
    let dataa = new FormData();

    dataa.append("action", "simpannoWa");
    dataa.append("row", id_sekolah);
    dataa.append("nowa", nowa.value);
    dataa.append("nogrup", grupwa.value);
    
    fetch(terminal, {
        method: 'post',
        body: dataa
    }).then(m => m.json())
    .then(r => {
        //console.log(r);
        
    })
    .catch(er => console.log (er));

}
const simpan_teksinfo = (el) =>{
    el.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let div = document.querySelector(".teksinfoeditable");
    let tab = [];
    let tabel = []
    tab.push(div.innerHTML);
    tabel.push(tab)

    let tabels = JSON.stringify(tabel);
    
    let data = new FormData();

    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "pagu");
    data.append("tabel", tabels);
    data.append("kolom", 23);

    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            //console.log(r);
            el.innerHTML = `Publikasikan Info`;
        })
        .catch(er => console.log (er))
    
};
const hiddenshow_tomboldaftar = (bol)=>{
    let infoakses = document.querySelector(".tekspublikasidaftar");
    let infotombol = document.querySelector(".tmb_tekspublikasidaftar");
    infotombol.innerHTML = ` <img src="/app/barloading.gif" alt="proses loading">`;
    let arrbaris = [];
    let kosong = [bol];
    arrbaris.push(kosong);
    let tabels = JSON.stringify(arrbaris);
    let data = new FormData();
    data.append("action", "simpanTabel");
    data.append("idss", idss);
    data.append("tab", "pagu");
    data.append("tabel", tabels);
    data.append("kolom", 22);

    fetch(urllogin, {
            method: 'post',
            body: data
        }).then(m => m.json())
        .then(r => {
            //console.log(r);
            objek_settingpagu = r.records;
            let bolakses = objek_settingpagu[0].setingan_formdaftar;

            if (bolakses === true) {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-blue">bisa</b> melihat tombol Daftar`;
                infotombol.innerHTML = `<button class="w3-red w3-button w3-round-large w3-small " onclick="hiddenshow_tomboldaftar(false)"> Sembunuikan Tombol Daftar</button>`;
            } else {
                infoakses.innerHTML = `Pendaftar <b class="w3-text-red">tidak bisa</b> melihat tombol Daftar`;
                infotombol.innerHTML = `<button class="w3-green w3-button w3-round-large w3-small"  onclick="hiddenshow_tomboldaftar(true)"> Tampilkan Tombol Daftar</button>`;
            }


        })
        .catch(er => {
            console.log(er);
            alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
        })
    let obj = {};
    obj.boleanformulirpendaftaran = bol;
    let boleanformulirpendaftaran = new FormData();
    boleanformulirpendaftaran.append("action","tomboldaftar");
    boleanformulirpendaftaran.append("row", id_sekolah);
    boleanformulirpendaftaran.append("objek",JSON.stringify(obj));
    fetch(terminal, {method:"post",body:boleanformulirpendaftaran})
    .then(m => m.json()).then(r => {
        //console.log(r)
    }).catch(er => console.log(er));
};


const formkembalifn = (bol)=>{
let infoakses = document.querySelector(".ketformulirdikembalikan");
let infotombol = document.querySelector(".tmbl_formulirdikembalikan");
infoakses.innerHTML = ` <img src="/app/barloading.gif" alt="proses loading">`;
infotombol.innerHTML = ` <img src="/app/barloading.gif" alt="proses loading">`;
let arrbaris = [];
let kosong = [bol];
arrbaris.push(kosong);
let tabels = JSON.stringify(arrbaris);
let data = new FormData();
data.append("action", "simpanTabel");
data.append("idss", idss);
data.append("tab", "pagu");
data.append("tabel", tabels);
data.append("kolom", 24);

fetch(urllogin, {
        method: 'post',
        body: data
    }).then(m => m.json())
    .then(r => {
        //console.log(r);
        objek_settingpagu = r.records;
        let formkembali = r.records[0].form_dikembalikan;
        let teksfk, htltmbl;
        if(formkembali === true){
            teksfk = `Formulir status DIKEMBALIKAN <b class="w3-text-blue">bisa diakses</b>`;
            htltmbl = `<button onclick="formkembalifn(false)" class="w3-red w3-button w3-round-large">  TOLAK AKSES</button>
            <br><sub>Tolak akses berarti pendaftar tidak bisa mengirimkan revisi isian formulir pendaftaran</sub><br>`
        }else{
            teksfk = `Formulir status DIKEMBALIKAN <b class="w3-text-red">tidak bisa diakses</b>`;
            htltmbl = `<button onclick="formkembalifn(true)" class="w3-red w3-button w3-round-large">BUKA AKSES</button>
            <br><sub>Tolak akses berarti pendaftar bisa mengirimkan revisi isian formulir pendaftaran</sub><br>`
            }
        infoakses.innerHTML = teksfk;
        infotombol.innerHTML = htltmbl;


    })
    .catch(er => {
        console.log(er);
        alert("Maaf, Terjadi kesalahan. Silakan ulangi sesi Anda sesaat lagi.")
    })
};


let dbinduk = [];
const data_final_indukpembagiankelas = async () => {
    try {
        dbbaru = [];
        // alert('penomoran buku induk dilakukan setelah pendaftar melakukan registrasi ulang.');
        let div = document.querySelector(".final_resultppdb");
        div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        let db_daftarulang
        let param = "?action=getdatasheet&tab=daftarulang";
        await fetch(urlppdb + param).then(m => m.json()).then(r => {
            db_daftarulang = r.records;
        }).catch(er => console.log(er));


        let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
        await fetch(link).then(m => m.json()).then(r => {
            objek_settingseleksi = r.records;
        }).catch(er => console.log(er))


        let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
        await fetch(linkpagu).then(m => m.json()).then(r => {
            objek_settingpagu = r.records;
        }).catch(er => console.log(er))

        let jumlahtotal = objek_settingpagu[0].total_cpdb
        let jumlahdaftarulang = db_daftarulang.filter(s => s.ket_registrasi == "MENDAFTAR ULANG");
        // console.log("jumlahtotal pagu");
        // console.log(jumlahtotal);
        // console.log("jumlahtotal daftar ulang");
        // console.log(jumlahdaftarulang.length);
        let tekstambahan = ""
        if (jumlahtotal !== jumlahdaftarulang.length) {
            alert(`Jumlah yang telah mendaftar ulang (${jumlahdaftarulang.length})dengan jumlah daya tampung (${jumlahtotal})berbeda. Pastikan jumlah yang MENDAFTAR ULANG sama dengan jumlah TOTAL KUOTA PAGU`);
            tekstambahan = `<sub class="w3-text-red">Data Pendaftar yang telah melakukan daftar ulang (${jumlahdaftarulang.length}) tidak sama dengan jumlah daya tampung (${jumlahtotal})</sub>`
            // return
        }



        let ade = jumlahdaftarulang.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));
        //TAHAPAN PENOMORAN BUKU INDUK DAN PENGISIAN KELASL
        let kuotakelas = objek_settingpagu[0].kuota_kelas;
        let abjad = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        //let dbbaru = [];
        let flaginduk = 1;
        let lk = ade.filter(s => s.cpdb_jk == "L");
        for (b = 0; b < kuotakelas; b++) {
            let o = b;//(b % 2 == 0) ? 0 : 1;

            for (a = o; a < lk.length; a += kuotakelas) {
                let ob = {};
                ob = lk[a];
                ob["rombel"] = abjad[b];

                dbbaru.push(ob)
            }
        }
        // console.log(dbbaru)

        let pr = ade.filter(s => s.cpdb_jk == "P");
        for (b = 0; b < kuotakelas; b++) {
            let o = b;//(b % 2 == 0) ? 0 : 1;

            for (a = o; a < pr.length; a += kuotakelas) {
                let ob = {};
                ob = pr[a];
                ob["rombel"] = abjad[b];
                dbbaru.push(ob)
            }
        }
        // let 
        dbinduk = [];
        let dbbaruu = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        for (let y = 0; y < dbbaruu.length; y++) {
            let obj = {}
            obj = dbbaruu[y];
            obj["noinduksiswa"] = `222301${nomor3digit(y + 1)}`;
            dbinduk.push(obj);
        };
        //console.log(dbinduk)
        let namaurut = dbinduk;//dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        let html = `<h3 class="w3-center">Pembagian kelas</h3>
    Berikut ini pembagian Rombongan Belajar (kelas) siswa-siswa yang telah dinyatakan lolos dan telah mendaftar ulang.
     <br>${tekstambahan}
    <br>Pilih Kelas:
    <select id="lls_pilihrombel" class="w3-select w3-border w3-border-blue" onchange="pilihrombel()"><option value="all" selected>Pilih Semua Kelas</option>`
        for (c = 0; c < kuotakelas; c++) {
            html += `<option value="${abjad[c]}">${abjad[c]}</option>`;

        }
        html += `</select>
    <h4 class="w3-center judulrombel">Data Seluruh Kelas</h4>
    <div class="w3-border w3-border-blue w3-round-large w3-container">
    Jumlah : <span class="ll_jumlahtotal"></span><br>
    Jumlah Laki-laki:<span class="ll_jumlahl"></span><br>
    Jumlah Perempuan:<span class="ll_jumlahp"></span><br>
    <hr/>
    <button class="w3-button w3-blue prinrombel" onclick="prtrombel('all')"><i class="fa fa-print"></i> Print</button>
    <button class="w3-button w3-green excelrombel" onclick="excelrombel('all')"><i class="fa fa-file-excel-o"></i> Export Xls</button>
    <hr/>
    </div>
    <hr/>
    <div class="lls_divrombel" style="overflow-x:auto">
     <table class="w3-table-all garis w3-tiny"><thead>
     <tr class="w3-aqua">
         <th rowspan="2">No. Urut</th>
         <th rowspan="2">No Induk Sekolah</th>
         <th rowspan="2">Rombel</th>
         <th rowspan="2">Nama CPDB</th>
         <th rowspan="2">Tempat, Tanggal Lahir</th>
         <th rowspan="2">Jenis Kelamin</th>
         <th colspan="6">Alamat Lengkap</th>
        </tr>
     <tr>
         
         <th>Jalan</th>
         <th>RT</th>
         <th>RW</th>
         <th>Kelurahan</th>
         <th>Kecamatan</th>
         <th>Kota</th>
 
     </tr>
     </thead><tbody>`;
        for (let i = 0; i < namaurut.length; i++) {
            html += `<tr>
        <td>${i + 1}</td>
        <td>${namaurut[i].noinduksiswa}</td>
        <td>${namaurut[i].rombel}</td>
        <td>${namaurut[i].nama_cpdb}</td>
        <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
        <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
        <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
        <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
        </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
        </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
        </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
        </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
        
        </td>
       
        </tr>`
        }
        html += "</tbody></table></div>";
        div.innerHTML = html;
        // console.log(dbbaru.filter(s => s.rombel == "A").length)
        // console.log(dbbaru.filter(s => s.rombel == "B").length)
        let v_total = document.querySelector(".ll_jumlahtotal");
        let v_lk = document.querySelector(".ll_jumlahl");
        let v_pr = document.querySelector(".ll_jumlahp");
        v_total.innerHTML = dbbaru.length;
        v_lk.innerHTML = dbbaru.filter(s => s.cpdb_jk == "L").length;
        v_pr.innerHTML = dbbaru.filter(s => s.cpdb_jk == "P").length;
    }
    catch (er) {
        let div = document.querySelector(".final_resultppdb");
        div.innerHTML = "BELUM ADA DATA";
        console.log(er)
    }

};

const data_final_induk = async () => {
    try {
        dbbaru = [];
        // alert('penomoran buku induk dilakukan setelah pendaftar melakukan registrasi ulang.');
        let div = document.querySelector(".final_resultppdb");
        div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        let db_daftarulang
        let param = "?action=getdatasheet&tab=daftarulang";
        await fetch(urlppdb + param).then(m => m.json()).then(r => {
            db_daftarulang = r.records;
        }).catch(er => console.log(er));


        let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
        await fetch(link).then(m => m.json()).then(r => {
            objek_settingseleksi = r.records;
        }).catch(er => console.log(er))


        let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
        await fetch(linkpagu).then(m => m.json()).then(r => {
            objek_settingpagu = r.records;
        }).catch(er => console.log(er))

        let jumlahtotal = objek_settingpagu[0].total_cpdb
        let jumlahdaftarulang = db_daftarulang.filter(s => s.ket_registrasi == "MENDAFTAR ULANG");
        // console.log("jumlahtotal pagu");
        // console.log(jumlahtotal);
        // console.log("jumlahtotal daftar ulang");
        // console.log(jumlahdaftarulang.length);
        // console.log("jumlahtotal pendaftar ulang");
        // console.log(jumlahdaftarulang);
        let tekstambahan = ""
        if (jumlahtotal !== jumlahdaftarulang.length) {
            alert(`Jumlah yang telah mendaftar ulang (${jumlahdaftarulang.length})dengan jumlah daya tampung (${jumlahtotal})berbeda. Pastikan jumlah yang MENDAFTAR ULANG sama dengan jumlah TOTAL KUOTA PAGU`);
            tekstambahan = `<sub class="w3-text-red">Data Pendaftar yang telah melakukan daftar ulang (${jumlahdaftarulang.length}) tidak sama dengan jumlah daya tampung (${jumlahtotal})</sub>`
            // return
        }


        let html = `<h3 class="w3-center">Penomoran Nomor Induk Siswa</h3>
    ${tekstambahan}<br>
    Berikut adalah penomoran Buku Induk berdasarkan data pendaftar yang telah melakukan Registrasi Ulang.
    <hr/>
    <button class="w3-button w3-blue " onclick="printinduk('tabelprintnomorinduk')"><i class="fa fa-print"></i> Print</button>
    <button class="w3-button w3-green" onclick="excelinduk('tabelprintnomorinduk')"><i class="fa fa-file-excel-o"></i> Export Xls</button>
    <hr/>
    <table class="w3-table-all garis w3-tiny tabelprintnomorinduk"><thead>
    <tr class="w3-aqua">
        <th rowspan="2">No. Urut</th>
        <th rowspan="2">No Induk Sekolah</th>
        <th rowspan="2">Rombel</th>
        <th rowspan="2">Nama CPDB</th>
        <th rowspan="2">Tempat, Tanggal Lahir</th>
        <th rowspan="2">Jenis Kelamin</th>
        <th colspan="6">Alamat Lengkap</th>
        <th rowspan="2">Jalur CPBD</th>
    </tr>
    <tr>
        
        <th>Jalan</th>
        <th>RT</th>
        <th>RW</th>
        <th>Kelurahan</th>
        <th>Kecamatan</th>
        <th>Kota</th>

    </tr>
    </thead><tbody>`;
        let ade = jumlahdaftarulang.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));
        //TAHAPAN PENOMORAN BUKU INDUK DAN PENGISIAN KELASL
        let kuotakelas = objek_settingpagu[0].kuota_kelas;
        let abjad = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        let flaginduk = 1;
        let lk = ade.filter(s => s.cpdb_jk == "L");
        for (b = 0; b < kuotakelas; b++) {
            let o = b;//(b % 2 == 0) ? 0 : 1;

            for (a = o; a < lk.length; a += kuotakelas) {
                let ob = {};
                ob = lk[a];
                ob["rombel"] = abjad[b];

                dbbaru.push(ob)
            }
        }
        // console.log(dbbaru)

        let pr = ade.filter(s => s.cpdb_jk == "P");
        for (b = 0; b < kuotakelas; b++) {
            let o = b;//(b % 2 == 0) ? 0 : 1;

            for (a = o; a < pr.length; a += kuotakelas) {
                let ob = {};
                ob = pr[a];
                ob["rombel"] = abjad[b];
                dbbaru.push(ob)
            }
        }
        // let 
        dbinduk = [];
        let dbbaruu = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        for (let y = 0; y < dbbaruu.length; y++) {
            let obj = {}
            obj = dbbaruu[y];
            obj["noinduksiswa"] = `222301${nomor3digit(y + 1)}`;
            dbinduk.push(obj);
        };
        //console.log(dbinduk)
        let namaurut = dbinduk;//dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        for (let i = 0; i < namaurut.length; i++) {
            html += `<tr>
        <td>${i + 1}</td>
        <td>${namaurut[i].noinduksiswa}</td>
        <td>${namaurut[i].rombel}</td>
        <td>${namaurut[i].nama_cpdb}</td>
        <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
        <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
        <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
        <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
        </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
        </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
        </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
        </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
        
        </td>
        <td>${namaurut[i].jalur_cpdb}</td>
        </tr>`
        }
        html += "</tbody></table>";
        div.innerHTML = html;
        // console.log(dbbaru.filter(s => s.rombel == "A").length)
        // console.log(dbbaru.filter(s => s.rombel == "B").length)
    }
    catch (er) {
        let div = document.querySelector(".final_resultppdb");
        div.innerHTML = "BELUM ADA DATA";
        console.log(er)
    }
};


const pilihrombel = () => {
    let dsel = document.querySelector("#lls_pilihrombel");
    let div = document.querySelector(".lls_divrombel");
    let v_total = document.querySelector(".ll_jumlahtotal");
    let v_lk = document.querySelector(".ll_jumlahl");
    let v_pr = document.querySelector(".ll_jumlahp");
    let v_judul = document.querySelector(".judulrombel");
    let prin = document.querySelector(".prinrombel");
    let exel = document.querySelector(".excelrombel");
    // let div = document.querySelector(".final_resultppdb");
    //lls_divrombel
    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let x = dsel.options;
    let y = dsel.selectedIndex;
    let v = x[y].value;
    if (v == "all") {
        let html2 = `
                <table class="w3-table-all garis w3-tiny"><thead>
                <tr class="w3-aqua">
                    <th rowspan="2">No. Urut</th>
                    <th rowspan="2">No Induk Sekolah</th>
                    <th rowspan="2">Rombel</th>
                    <th rowspan="2">Nama CPDB</th>
                    <th rowspan="2">Tempat, Tanggal Lahir</th>
                    <th rowspan="2">Jenis Kelamin</th>
                    <th colspan="6">Alamat Lengkap</th>
                    </tr>
                <tr>
                    
                    <th>Jalan</th>
                    <th>RT</th>
                    <th>RW</th>
                    <th>Kelurahan</th>
                    <th>Kecamatan</th>
                    <th>Kota</th>
            
                </tr>
                </thead><tbody>`;
        let namaurut = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;

        for (let i = 0; i < namaurut.length; i++) {
            html2 += `<tr>
                    <td>${i + 1}</td>
                    <td>${namaurut[i].noinduksiswa}</td>
                    <td>${namaurut[i].rombel}</td>
                    <td>${namaurut[i].nama_cpdb}</td>
                    <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
                    <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                    <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
                    <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
                    </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
                    </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
                    </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
                    </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
                    
                    </td>
                   
                    </tr>`
        }
        html2 += "</tbody></table>";
        div.innerHTML = html2;
        v_total.innerHTML = namaurut.length;
        v_lk.innerHTML = namaurut.filter(s => s.cpdb_jk == "L").length;
        v_pr.innerHTML = namaurut.filter(s => s.cpdb_jk == "P").length;
        v_judul.innerHTML = "Daftar Siswa Seluruh Kelas";
        prin.setAttribute("onclick", "prtrombel('all')");
        exel.setAttribute("onclick", "excelrombel('all')");
    } else {
        let html3 = `
            <table class="w3-table-all garis w3-tiny"><thead>
            <tr class="w3-aqua">
                <th rowspan="2">No. Urut</th>
                <th rowspan="2">No Induk Sekolah</th>
                <th rowspan="2">Rombel</th>
                <th rowspan="2">Nama CPDB</th>
                <th rowspan="2">Tempat, Tanggal Lahir</th>
                <th rowspan="2">Jenis Kelamin</th>
                <th colspan="6">Alamat Lengkap</th>
                </tr>
            <tr>
                
                <th>Jalan</th>
                <th>RT</th>
                <th>RW</th>
                <th>Kelurahan</th>
                <th>Kecamatan</th>
                <th>Kota</th>
        
            </tr>
            </thead><tbody>`;
        let tesnamaurut = dbbaru.sort((a, b) => a.nama_cpdb.toUpperCase().localeCompare(b.nama_cpdb.toUpperCase()));;
        namaurut = tesnamaurut.filter(s => s.rombel == v)
        for (let i = 0; i < namaurut.length; i++) {
            html3 += `<tr>
                <td>${i + 1}</td>
                <td>${namaurut[i].noinduksiswa}</td>
                <td>${namaurut[i].rombel}</td>
                <td>${namaurut[i].nama_cpdb}</td>
                <td>${namaurut[i].cpdb_tempat_lahir}, ${(namaurut[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(namaurut[i].cpdb_tanggal_lahir)}</td>
                <td>${(namaurut[i].cpdb_jk == "L") ? "Laki-laki" : "Perempuan"}</td>
                <td>${(namaurut[i].cpdb_alamat_jalan == "") ? "" : namaurut[i].cpdb_alamat_jalan}</td>
                <td>${(namaurut[i].cpdb_rt == "") ? "" : "" + namaurut[i].cpdb_rt}
                </td><td>${(namaurut[i].cpdb_rw == "") ? "" : namaurut[i].cpdb_rw}
                </td><td>${(namaurut[i].cpdb_kel == "") ? "" : namaurut[i].cpdb_kel}
                </td><td>${(namaurut[i].cpdb_kec == "") ? "" : namaurut[i].cpdb_kec}
                </td><td>${(namaurut[i].cpdb_kota == "") ? "" : namaurut[i].cpdb_kota}
                
                </td>
              
                </tr>`
        }
        html3 += "</tbody></table>";
        div.innerHTML = html3;
        v_total.innerHTML = namaurut.length;
        v_lk.innerHTML = namaurut.filter(s => s.cpdb_jk == "L").length;
        v_pr.innerHTML = namaurut.filter(s => s.cpdb_jk == "P").length;
        v_judul.innerHTML = "Daftar Siswa Kelas " + v;
        prin.setAttribute("onclick", "prtrombel('" + v + "')");
        exel.setAttribute("onclick", "excelrombel('" + v + "')");
    }
};

const excelinduk = (kelas) => {
    //alert(kelas);
    let div = document.getElementById("frameexcel");
    // let db = dbbaru;
    let db = dbinduk;
    let html = `<table class="versi-table"> <thead> 
    <tr><td>Data Export PENOMORAN BUKU INDUK</td></tr> <tr>
       <th>waktu_registrasi</th>
       <th>id_registrasi</th>
       <th>ket_registrasi</th>
       <th>datadata_jalur</th>
        `



    html += `<th>WAKTU_DAFTAR </th><th>ID_PENDAFTAR </th><th>ID_STATUS </th>
    <th>KET_STATUS </th><th>JALUR_CPDB </th>
    <th>No Induk</th>
    <th>ROMBEL</th>
    <th>NAMA_CPDB </th>
    <th>CPDB_TANGGAL_LAHIR </th><th>CPDB_UMUR </th><th>CPDB_KOTA </th><th>CPDB_KEC </th>
    <th>CPDB_KEL </th><th>CPDB_RW </th><th>CPDB_RT </th><th>CPDB_TEMPAT_LAHIR </th><th>CPDB_JK </th>
    <th>CPDB_AGAMA </th><th>CPDB_ABK </th><th>CPDB_ANAKKE </th><th>CPDB_KEWARGANEGARAAN </th><th>CPDB_NO_REG_AKTE </th>
    <th>CPDB_ID_FILE_AKTA </th>
    <th>CPDB_NIK </th>
    <th>CPDB_NO_KK </th>
    <th>CPDB_ALAMAT_JALAN </th><th>CPDB_ID_FILE_KK </th>
    <th>CPDB_ID_FILE_DOMISILI </th><th>CPDB_NPSN </th><th>CPDB_SEKOLAHASAL </th><th>CPDB_ID_FILE_IJAZAH </th>
    <th>CPDB_NISN </th><th>ORTU_NAMA_AYAH </th><th>ORTU_NIK_AYAH </th><th>ORTU_TTL_AYAH </th>
    <th>ORTU_PENDIDIKAN_AYAH </th><th>ORTU_PEKERJAAN_AYAH </th><th>ORTU_PENGHASILAN_AYAH </th><th>ORTU_ABK_AYAH </th>
    <th>ORTU_NAMA_IBU </th><th>ORTU_NIK_IBU </th><th>ORTU_TTL_IBU </th>
    <th>ORTU_PENDIDIKAN_IBU </th><th>ORTU_PEKERJAAN_IBU </th><th>ORTU_PENGHASILAN_IBU </th><th>ORTU_ABK_IBU </th>
    <th>ORTU_NAMA_WALI </th><th>ORTU_NIK_WALI </th><th>ORTU_TTL_WALI </th>
    <th>ORTU_PENDIDIKAN_WALI </th><th>ORTU_PEKERJAAN_WALI </th><th>ORTU_PENGHASILAN_WALI </th>
    <th>ORTU_ABK_WALI </th><th>CPDB_ID_FILE_FILEPENDUKUNG_0 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_1 </th>
    <th>CPDB_ID_FILE_FILEPENDUKUNG_2 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_3 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_4 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_5 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_6 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_7 </th><th>ORTU_HP_IBU </th><th>ORTU_HP_AYAH </th><th>CPDB_KOTA_LAINNYA</th> </tr> </thead> <tbody>`;
    for (let i = 0; i < db.length; i++) {
        html += `<tr><td>${tanggalfulllengkap(db[i].waktu_registrasi)}</td>
            <td>${db[i].id_registrasi}</td>
            <td>${db[i].ket_registrasi}</td>
            <td>${db[i].datadata_jalur}</td>
    <td>${tanggalfulllengkap(db[i].waktu_daftar)}
    </td><td>${db[i].id_pendaftar}
    </td><td> ${db[i].id_status}
    </td><td>${db[i].ket_status}
    </td><td>${db[i].jalur_cpdb}
    </td><td>${db[i].noinduksiswa}
    </td><td>${db[i].rombel}
    </td><td>${db[i].nama_cpdb}
    </td><td>${(db[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(db[i].cpdb_tanggal_lahir)}
    </td><td>'${db[i].cpdb_umur}
    </td><td>${db[i].cpdb_kota}
    </td><td>${db[i].cpdb_kec}
    </td><td>${db[i].cpdb_kel}
    </td><td>${db[i].cpdb_rw}
    </td><td>${db[i].cpdb_rt}
    </td><td>${db[i].cpdb_tempat_lahir}
    </td><td>${db[i].cpdb_jk}
    </td><td>${db[i].cpdb_agama}
    </td><td>${db[i].cpdb_abk}
    </td><td>${db[i].cpdb_anakke}
    </td><td>${db[i].cpdb_kewarganegaraan}
    </td><td>${db[i].cpdb_no_reg_akte}
    </td><td>${(db[i].cpdb_id_file_akta == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_akta}
    </td><td>'${db[i].cpdb_nik}
    </td><td>'${db[i].cpdb_no_kk}
    </td><td>${db[i].cpdb_alamat_jalan}
    </td><td>${(db[i].cpdb_id_file_kk == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_kk}
    </td><td>${(db[i].cpdb_id_file_domisili == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_domisili}
    </td><td>${db[i].cpdb_npsn}
    </td><td>${db[i].cpdb_sekolahasal}
    </td><td>${(db[i].cpdb_id_file_ijazah == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_ijazah}
    </td><td>${db[i].cpdb_nisn}
    </td><td>${db[i].ortu_nama_ayah}
    </td><td>'${db[i].ortu_nik_ayah}
    </td><td>${tanggalfull(db[i].ortu_ttl_ayah)}
    </td><td>${db[i].ortu_pendidikan_ayah}
    </td><td>${db[i].ortu_pekerjaan_ayah}
    </td><td>${db[i].ortu_penghasilan_ayah}
    </td><td>${db[i].ortu_abk_ayah}
    </td><td>${db[i].ortu_nama_ibu}
    </td><td>'${db[i].ortu_nik_ibu}
    </td><td>${tanggalfull(db[i].ortu_ttl_ibu)}
    </td><td>${db[i].ortu_pendidikan_ibu}
    </td><td>${db[i].ortu_pekerjaan_ibu}
    </td><td>${db[i].ortu_penghasilan_ibu}
    </td><td>${db[i].ortu_abk_ibu}
    </td><td>${db[i].ortu_nama_wali}
    </td><td>${db[i].ortu_nik_wali}
    </td><td>${db[i].ortu_ttl_wali}
    </td><td>${db[i].ortu_pendidikan_wali}
    </td><td>${db[i].ortu_pekerjaan_wali}
    </td><td>${db[i].ortu_penghasilan_wali}
    </td><td>${db[i].ortu_abk_wali}
    </td><td>${(db[i].cpdb_id_file_filependukung_0 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_0}
    </td><td>${(db[i].cpdb_id_file_filependukung_1 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_1}
    </td><td>${(db[i].cpdb_id_file_filependukung_2 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_2}
    </td><td>${(db[i].cpdb_id_file_filependukung_3 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_3}
    </td><td>${(db[i].cpdb_id_file_filependukung_4 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_4}
    </td><td>${(db[i].cpdb_id_file_filependukung_5 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_5}
    </td><td>${(db[i].cpdb_id_file_filependukung_6 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_6}
    </td><td>${(db[i].cpdb_id_file_filependukung_7 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_7}
    </td><td>'${db[i].ortu_hp_ibu}
    </td><td>'${db[i].ortu_hp_ayah}
    </td><td>${db[i].cpdb_kota_lainnya}
    </td></tr>`
    };

    html += `</tbody>
    </table>`
    div.innerHTML = html;
    let lr = db.length;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: "PENOMORAN BUKU INDUK" + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 1,
        barisatas: 1,
        tabelmana: lr

    });
    div.innerHTML = "";
}
const excelrombel = (kelas) => {
    //alert(kelas);
    let div = document.getElementById("frameexcel");
    let db, judul
    if (kelas == "all") {
        // db = dbbaru;
        db = dbinduk;
        judul = "SEMUA KELAS"
    } else {
        // db = dbbaru.filter(s => s.rombel == kelas);
        db = dbinduk.filter(s => s.rombel == kelas);
        judul = "KELAS " + kelas;
    }
    let html = `<table class="versi-table"> <thead> 
    <tr><td>Data Export  ${judul}</td></tr> <tr>
       <th>No Induk</th>
       <th>ROMBEL</th>
    <th>NAMA_CPDB </th>
    <th>CPDB_TANGGAL_LAHIR </th><th>CPDB_UMUR </th><th>CPDB_KOTA </th><th>CPDB_KEC </th>
    <th>CPDB_KEL </th><th>CPDB_RW </th><th>CPDB_RT </th><th>CPDB_TEMPAT_LAHIR </th><th>CPDB_JK </th>
    <th>CPDB_AGAMA </th><th>CPDB_ABK </th><th>CPDB_ANAKKE </th><th>CPDB_KEWARGANEGARAAN </th><th>CPDB_NO_REG_AKTE </th>
    <th>CPDB_ID_FILE_AKTA </th>
    <th>CPDB_NIK </th>
    <th>CPDB_NO_KK </th>
    <th>CPDB_ALAMAT_JALAN </th><th>CPDB_ID_FILE_KK </th>
    <th>CPDB_ID_FILE_DOMISILI </th><th>CPDB_NPSN </th><th>CPDB_SEKOLAHASAL </th><th>CPDB_ID_FILE_IJAZAH </th>
    <th>CPDB_NISN </th><th>ORTU_NAMA_AYAH </th><th>ORTU_NIK_AYAH </th><th>ORTU_TTL_AYAH </th>
    <th>ORTU_PENDIDIKAN_AYAH </th><th>ORTU_PEKERJAAN_AYAH </th><th>ORTU_PENGHASILAN_AYAH </th><th>ORTU_ABK_AYAH </th>
    <th>ORTU_NAMA_IBU </th><th>ORTU_NIK_IBU </th><th>ORTU_TTL_IBU </th>
    <th>ORTU_PENDIDIKAN_IBU </th><th>ORTU_PEKERJAAN_IBU </th><th>ORTU_PENGHASILAN_IBU </th><th>ORTU_ABK_IBU </th>
    <th>ORTU_NAMA_WALI </th><th>ORTU_NIK_WALI </th><th>ORTU_TTL_WALI </th>
    <th>ORTU_PENDIDIKAN_WALI </th><th>ORTU_PEKERJAAN_WALI </th><th>ORTU_PENGHASILAN_WALI </th>
    <th>ORTU_ABK_WALI </th><th>CPDB_ID_FILE_FILEPENDUKUNG_0 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_1 </th>
    <th>CPDB_ID_FILE_FILEPENDUKUNG_2 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_3 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_4 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_5 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_6 </th><th>CPDB_ID_FILE_FILEPENDUKUNG_7 </th><th>ORTU_HP_IBU </th><th>ORTU_HP_AYAH </th><th>CPDB_KOTA_LAINNYA</th> </tr> </thead> <tbody>`;
    for (let i = 0; i < db.length; i++) {
        html += `<tr>
        <td>${db[i].noinduksiswa}
    </td><td>${db[i].rombel}
    </td><td>${db[i].nama_cpdb}
    </td><td>${(db[i].cpdb_tanggal_lahir == "") ? "" : tanggalfull(db[i].cpdb_tanggal_lahir)}
    </td><td>'${db[i].cpdb_umur}
    </td><td>${db[i].cpdb_kota}
    </td><td>${db[i].cpdb_kec}
    </td><td>${db[i].cpdb_kel}
    </td><td>${db[i].cpdb_rw}
    </td><td>${db[i].cpdb_rt}
    </td><td>${db[i].cpdb_tempat_lahir}
    </td><td>${db[i].cpdb_jk}
    </td><td>${db[i].cpdb_agama}
    </td><td>${db[i].cpdb_abk}
    </td><td>${db[i].cpdb_anakke}
    </td><td>${db[i].cpdb_kewarganegaraan}
    </td><td>${db[i].cpdb_no_reg_akte}
    </td><td>${(db[i].cpdb_id_file_akta == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_akta}
    </td><td>'${db[i].cpdb_nik}
    </td><td>'${db[i].cpdb_no_kk}
    </td><td>${db[i].cpdb_alamat_jalan}
    </td><td>${(db[i].cpdb_id_file_kk == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_kk}
    </td><td>${(db[i].cpdb_id_file_domisili == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_domisili}
    </td><td>${db[i].cpdb_npsn}
    </td><td>${db[i].cpdb_sekolahasal}
    </td><td>${(db[i].cpdb_id_file_ijazah == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_ijazah}
    </td><td>${db[i].cpdb_nisn}
    </td><td>${db[i].ortu_nama_ayah}
    </td><td>'${db[i].ortu_nik_ayah}
    </td><td>${tanggalfull(db[i].ortu_ttl_ayah)}
    </td><td>${db[i].ortu_pendidikan_ayah}
    </td><td>${db[i].ortu_pekerjaan_ayah}
    </td><td>${db[i].ortu_penghasilan_ayah}
    </td><td>${db[i].ortu_abk_ayah}
    </td><td>${db[i].ortu_nama_ibu}
    </td><td>'${db[i].ortu_nik_ibu}
    </td><td>${tanggalfull(db[i].ortu_ttl_ibu)}
    </td><td>${db[i].ortu_pendidikan_ibu}
    </td><td>${db[i].ortu_pekerjaan_ibu}
    </td><td>${db[i].ortu_penghasilan_ibu}
    </td><td>${db[i].ortu_abk_ibu}
    </td><td>${db[i].ortu_nama_wali}
    </td><td>${db[i].ortu_nik_wali}
    </td><td>${db[i].ortu_ttl_wali}
    </td><td>${db[i].ortu_pendidikan_wali}
    </td><td>${db[i].ortu_pekerjaan_wali}
    </td><td>${db[i].ortu_penghasilan_wali}
    </td><td>${db[i].ortu_abk_wali}
    </td><td>${(db[i].cpdb_id_file_filependukung_0 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_0}
    </td><td>${(db[i].cpdb_id_file_filependukung_1 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_1}
    </td><td>${(db[i].cpdb_id_file_filependukung_2 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_2}
    </td><td>${(db[i].cpdb_id_file_filependukung_3 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_3}
    </td><td>${(db[i].cpdb_id_file_filependukung_4 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_4}
    </td><td>${(db[i].cpdb_id_file_filependukung_5 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_5}
    </td><td>${(db[i].cpdb_id_file_filependukung_6 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_6}
    </td><td>${(db[i].cpdb_id_file_filependukung_7 == "") ? "" : "https://drive.google.com/file/d/" + db[i].cpdb_id_file_filependukung_7}
    </td><td>'${db[i].ortu_hp_ibu}
    </td><td>'${db[i].ortu_hp_ayah}
    </td><td>${db[i].cpdb_kota_lainnya}
    </td></tr>`
    };

    html += `</tbody>
    </table>`
    div.innerHTML = html;
    let lr = db.length;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: "DATA  " + judul + " " + new Date().getTime(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true,
        jumlahheader: 1,
        barisatas: 1,
        tabelmana: lr

    });
    div.innerHTML = "";
}

function formattanggalinput(tgl) {
    var d = new Date(tgl);
    var tgl = d.getDate();
    var bln = d.getMonth() + 1;
    var thn = d.getFullYear();
    return thn + "-" + addZero(bln) + "-" + addZero(tgl)
  };
  
const rekap_tidakpakeaplikasi = () =>{
    let divkonten = document.querySelector(".verif_resultseleksi");
    let html = "";
    html +=`<h3 class="w3-center">Cek Pendaftar dari Sekolah Lain yang Mendaftar dengan Aplikasi ini</h3>`;
    html +=`(Dalam kasus tahun ini, SDN Citayam 1 tidak menggunakan Aplikasi, sehingga di sini akan melacak data Jurnal SDN Citayam 1 dengan data yang telah di Jurnal di masing-masing sekolah pengguna aplikasi)`;
    html +=`<hr><div class="w3-center"><img src="/img/barloading.gif"></div>`
    divkonten.innerHTML = html;
    fetch(terminal+"?action=panggilsekolahasing").then(m=>m.json()).then(r=>{
        let duplikatcitayam = r.duplikatcitayam;
        let koleksi_idsekolah = r.koleksi_idsekolah;
        let jurnlacitayam = r.jurnalciatyam;
            html = "";
            html +=`<h3 class="w3-center">Cek Pendaftar dari Sekolah Lain yang Mendaftar dengan Aplikasi ini</h3>`;
            html +=`(Dalam kasus tahun ini, SDN Citayam 1 tidak menggunakan Aplikasi, sehingga di sini akan melacak data Jurnal SDN Citayam 1 dengan data yang telah di Jurnal di masing-masing sekolah pengguna aplikasi)`;
            //Koleksi Data Pendaftar Citayam 1 yang mendaftar juga di Sekolah Lamaso
            html +=`<h4 class="w3-center">Data Pendaftar SDN Citayam 1 yang Mendaftar Juga di SDN Lain</h4>`;
            html +=`(Klik pada <b>kolom nama</b> untuk melihat detail di Jurnal SDN Citayam 1, atau klik <b>Status</b> untuk melihat detail dari Aplikasi PPDB ini)`
            html +=`<table class="w3-table-all w3-tiny">`;
            html +=`<head>`;
                html +=`<tr>`;
                    html +=`<th class="w3-khaki w3-border w3-center" colspan="3">Data Jurnal Citayam 1</th>`
                    html +=`<th class="w3-pale-red w3-border w3-center"  colspan="4">Data Jurnal Webb PPDB</th>`
                html +=`</tr>`
                html +=`<tr>`;
                    html +=`<th class="w3-border">No Urut</th>`;
                    html +=`<th class="w3-khaki w3-border">No Form</th>`;
                    html +=`<th class="w3-khaki w3-border">Nama CPDB</th>`;
                    html +=`<th class="w3-pale-red w3-border">Mendaftar Selain di Citayam 1 di</th>`
                    html +=`<th class="w3-pale-red w3-border">Status</th>`
                    html +=`<th class="w3-pale-red w3-border">Keterangan Status</th>`
                    html +=`<th class="w3-pale-red w3-border">ID Pendaftar</th>`
                html +=`</tr>`;
            html +=`</head>`;
            html +=`<tbody>`;
                for(let i = 0 ; i < duplikatcitayam.length ; i ++){
                    let x = duplikatcitayam[i]
                    let db = duplikatcitayam[i].nama_cpdb;
                    let idsk = duplikatcitayam[i].tujuan_mendaftar;
                    let namasekolah = koleksi_idsekolah.filter(s => s.id_sekolah == idsk)[0].nama_sekolah
                    let nofor = jurnlacitayam.filter(s => s.nama_cpdb == db )[0].no_form;
                    let no = jurnlacitayam.filter(s => s.nama_cpdb == db )[0].no;
                    if(idsk == id_sekolah){
                        html+=`<tr class="w3-pale-green">`;

                    }else{
                        html+=`<tr>`;

                    }
                        html +=`<td class="w3-border">${i+1}</td>`;
                        html +=`<td class="w3-border">${nofor}</td>`;
                        html +=`<td style="cursor:pointer" class="w3-border detailcitayam1" data-detailjurnalcitayam="${no}">${db}</td>`;
                        html +=`<td class="w3-border">${namasekolah}</td>`;
                        html +=`<td style="cursor:pointer" class="w3-border detaildatappdbbycitayam" data-detailjurnalWebcitayam="${x.baris_terminal}">${x.id_status}</td>`;
                        html +=`<td class="w3-border">${x.ket_status}</td>`;
                        html +=`<td class="w3-border">${x.id_pendaftar}</td>`;
                    html+=`</tr>`;
                }
            html +=`</tbody>`;
            html +=`</table><hr>`;

        divkonten.innerHTML = html;
        let details = document.querySelectorAll(".detailcitayam1");
        for(let j = 0 ; j < details.length ; j++){
            let klik = details[j];
            klik.onclick = function (e) {
                    let acuan = e.target.getAttribute("data-detailjurnalcitayam");
                    console.log(acuan);
                    let datajurnalcitayam = jurnlacitayam.filter(s => s.no == acuan)[0];
                    console.log(acuan, datajurnalcitayam)
                    let divid = document.getElementById("id_modal_info");
                        divid.style.display = "block";
                    let dividinfo = document.querySelector(".teks_info_modal");
                    let html = `<h3 class="w3-center">Data Pendaftar Terjurnal di SDN Citayam 1</h3>`;
                    html +=`<table class="w3-table-all w3-tiny w3-margin-bottom">`;
                        html +=`<tr>`;
                            html+=`<td>No Urut Jurnal</td><td>: ${datajurnalcitayam.no}</td>`
                        html +=`</tr>`;
                        html +=`<tr>`;
                            html+=`<td>Nomor Form</td><td>: ${datajurnalcitayam.no_form}</td>`
                        html +=`</tr>`;
                        html +=`<tr>`;
                            html+=`<td>Nama Anak</td><td>: ${datajurnalcitayam.nama_cpdb}</td>`
                        html +=`</tr>`;
                        html +=`<tr>`;
                            html+=`<td>Tanggal Lahir</td><td>: ${tanggalfull(datajurnalcitayam.cpdb_tanggal_lahir)}</td>`
                        html +=`</tr>`;
                        html +=`<tr>`;
                            html+=`<td>Nama Orang Tua</td><td>: ${datajurnalcitayam.ortu_nama_ayah}</td>`
                        html +=`</tr>`;
                    html +=`</table>`;
                    dividinfo.innerHTML = html;
            }

        }
        let detailss = document.querySelectorAll(".detaildatappdbbycitayam");
        for(let j = 0 ; j < detailss.length ; j++){
            let klik = detailss[j];
            klik.onclick = function () {
            let acuan = klik.getAttribute("data-detailjurnalWebcitayam");
            let datajurnalcitayam = duplikatcitayam.filter(s => s.baris_terminal == acuan)[0];

            
                let divid = document.getElementById("id_modal_info");
                    divid.style.display = "block";
                let dividinfo = document.querySelector(".teks_info_modal");
                let html = `<h3 class="w3-center">Data Pendaftar Terjurnal di SDN Citayam 1</h3>`;
                html +=`<table class="w3-table-all w3-tiny w3-margin-bottom">`;
                    html +=`<tr>`;
                        html+=`<td>No Urut dB Terminal</td><td>: ${datajurnalcitayam.baris_terminal}</td>`
                    html +=`</tr>`;
                    html +=`<tr>`;
                        html+=`<td>Status Pendaftaran</td><td>: ${datajurnalcitayam.id_status}</td>`
                    html +=`</tr>`;
                    html +=`<tr>`;
                        html+=`<td>Nama Anak</td><td>: ${datajurnalcitayam.nama_cpdb}</td>`
                    html +=`</tr>`;
                    html +=`<tr>`;
                        html+=`<td>Tanngal Lahir</td><td>: ${tanggalfull(datajurnalcitayam.cpdb_tanggal_lahir)}</td>`
                    html +=`</tr>`;
                    html +=`<tr>`;
                        html+=`<td>Nama Orang Tua Ayah</td><td>: ${datajurnalcitayam.ortu_nama_ayah}</td>`
                    html +=`</tr>`;
                    html +=`<tr>`;
                        html+=`<td>Nama Orang Tua Ibu</td><td>: ${datajurnalcitayam.ortu_nama_ibu}</td>`
                    html +=`</tr>`;
                    if(datajurnalcitayam.tujuan_mendaftar == id_sekolah){
                        html +=`<tr>`;
                            html+=`<td>Ubah Publikasi</td><td>: <button onclick="detailpublikasicpdb('${datajurnalcitayam.baris_terminal}','x','Prioritas tidak terdeteksi via fitur ini')">UBAH STATUS DI SEKOLAH INI</button></td>`
                            
                        html +=`</tr>`;
                    }
                html +=`</table><br>`;
                dividinfo.innerHTML = html;
            }

        }
    })
}

const format_dapodik = (reg) =>{
    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";

    let html = "";
    html +=`<div style="font-size:10px!important" class="areaprint_FPD">`
    html +=`<h4 style="background-color:#FF5E4A;color:#fff;text-align:center;padding:5px">FORMULIR PESERTA DIDIK</h4>`;
    html +=`<div style="border:.5pt solid #000;width:100px;float:right;padding:5px;text-align:center">F-PD</div>`;
    html +=`<div style="clear:both"></div>`;
    html +=`Tanggal:<span data-daftarulang="waktu_registrasi"></span>`;
    html +=`<h5 style="background-color:blue;color:white;padding:1px 2px">DATA PRIBADI</h5>`;
    html +=`<table style="border-collapse:collapse" border="0">`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">1.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left;">Nama Lengkap</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="nama_cpdb"></td>`
        html +=`</tr>`;
        //untuk keterangan di bawahnya
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama peserta didik sesuai dokumen resmi yang berlaku (Akta atau Ijazah sebelumnya ). Hanya bisa diubah melalui http://vervalpd.data.kemdikbud.go.id.`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">2.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Jenis Kelamin</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
                html +=`<input id="daftarulang_jk_l" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_jk" value="L">`;
                html +=`<label for="daftarulang_jk_l">Laki-laki</label>`;
                html +=`<input id="daftarulang_jk_p" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_jk" value="P">`;
                html +=`<label for="daftarulang_jk_p">Perempuan</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">3.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NISN</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_nisn"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >Nomor Induk Siswa Nasional peserta didik (jika memiliki). Jika belum memiliki, maka wajib dikosongkan. NISN memiliki format 10 digit angka.<br>Contoh: 0009321234. Untuk memeriksa NISN, dapat mengunjungi laman http://nisn.data.kemdikbud.go.id/page/data</td>`
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">4.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK/No. KITAS(Untuk WNA)</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_nik"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga, Kartu Identitas Anak, atau KTP (jika sudah memiliki) bagi WNI. NIK memiliki format 16 digit angka. Contoh: 6112090906021104.<br><br>`
                html +=`Pastikan NIK tidak tertukar dengan No. Kartu Keluarga, karena keduanya memiliki format yang sama. Bagi WNA, diisi dengan nomor Kartu Izin Tinggal Terbatas (KITAS)`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">5.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">No KK</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_no_kk"></td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">6.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tempat Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_tempat_lahir"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tempat lahir peserta didik sesuai dokumen resmi yang berlaku`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">7.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tanggal Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_tanggal_lahir"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tanggal lahir peserta didik sesuai dokumen resmi yang berlaku. Hanya bisa diubah melalui http://vervalpd.data.kemdikbud.go.id`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">8.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">No Registrasi Akta lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_no_reg_akte"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor registrasi Akta Kelahiran. Nomor registrasi yang dimaksud umumnya tercantum pada bagian tengah atas lembar kutipan akta kelahiran`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">9.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Agama & Kepercayaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"><span data-daftarulang="cpdb_agama"></span><span style="margin-left:5px;color:black;padding:2px 5px;font-size:8px">01) Islam 02) Kristen/ Protestan 03) Katholik 04) Hindu 05) Budha 06) Khonghucu 07) Kepercayaan Kepada Tuhan YME</span></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Agama atau kepercayaan yang dianut oleh peserta didik. Apabila peserta didik adalah penghayat kepercayaan (misalnya pada daerah tertentu yang masih memiliki penganut kepercayaan), dapat memilih opsi Kepercayaan kpd Tuhan YME`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">10.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kewarganegaraan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_wni" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_wni" value="WNI">`;
                html +=`<label for="daftarulang_wni">WNI</label>`;
                html +=`<input id="daftarulang_wna" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_wni" value="WNA">`;
                html +=`<label for="daftarulang_wna">WNA</label>`;
                html +=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nama Negara : `;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kewarganegaraan peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">11.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="cpdb_abk"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan Khusus yang disandang peserta didik dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">12.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Alamat Jalan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee" data-daftarulang="cpdb_alamat_jalan"></td>`;
        html +=`</tr>`;
        
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Jalur tempat tinggal peserta didik, terdiri atas gang, kompleks, blok, nomor rumah, dan sebagainya selain informasi yang diminta oleh kolom-kolom 
                yang lain pada bagian ini. Sebagai contoh, peserta didik tinggal di sebuah kompleks perumahan Griya Adam yang berada pada Jalan Kemanggisan, 
                dengan nomor rumah 4-C, di lingkungan RT 005 dan RW 011, Dusun Cempaka, Desa Salatiga. Maka dapat diisi dengan Jl. Kemanggisan, Komp. Griya Adam, No. 4-C`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">13.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">RT</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee">`
            html += `<div style="float:left" data-daftarulang="cpdb_rt"></div>`;
            html += `<div style="float:left;color:#4CDEFF;font-size:8px" >Nomor RT tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan angka 5.</div>`;
            html +=`</td>`;
        html +=`</tr>`;
       
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">14.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">RW</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee">`
                html += `<div style="float:left" data-daftarulang="cpdb_rw"></div>`
                html += `<div style="float:left;color:#4CDEFF;font-size:8px" >Nomor RW tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan angka 11.</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">15.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Dusun</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama dusun tempat tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan Campak`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">16.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Nama Kelurahan/Desa</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_kel">`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama desa atau kelurahan tempat tinggal peserta didik saat ini. Dari contoh di atas, dapat diisi dengan Bayongbong`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">17.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kecamatan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_kec">`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kecamatan tempat tinggal peserta didik saat ini.`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">18.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kode Pos</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kode pos tempat tinggal peserta didik saat ini`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">19.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Lintang</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Titik Koordinat tempat tinggal siswa`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">20.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Bujur</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Titik Koordinat tempat tinggal siswa`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">21.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tempat Tinggal</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">01) Bersama orang tua 02) Wali 03) Kos 04) Asrama 05) Panti Asuhan</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kepemilikan tempat tinggal peserta didik saat ini (yang telah diisikan pada kolom-kolom sebelumnya di atas)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">22.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Moda Transportasi</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">01) Jalan kaki 02) Kendaraan pribadi 03) Kendaraan Umum/angkot/Pete-pete 04) Jemputan Sekolah 05) Kereta Api
                06)Ojek 07)Andong/Bendi/Sado/ Dokar/Delman/Beca 08) Perahu penyebrangan/ Rakit/ Getek 99) Lainnya</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kepemilikan tempat tinggal peserta didik saat ini (yang telah diisikan pada kolom-kolom sebelumnya di atas)`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">23.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Anak keberapa</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_anakke">`;
                // html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="cpdb_anakke">&nbsp;&nbsp;</div>`;
                //html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">01) Jalan kaki 02) Kendaraan pribadi 03) Kendaraan Umum/angkot/Pete-pete 04) Jemputan Sekolah 05) Kereta Api
                  //      06)Ojek 07)Andong / Bendi / Sado / Dokar/Delman/Beca 08) Perahu penyebrangan/ Rakit/ Getek 99) Lainnya</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">24.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan (Diperuntukkan untuk warga belajar)</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">25.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Apakah punya KIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_punyakip_y" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_punyakip" value="Ya">`;
                html +=`<label for="daftarulang_punyakip_y">Ya</label>`;
                html +=`<input id="daftarulang_punyakip_t" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_punyakip" value="Tidak">`;
                html +=`<label for="daftarulang_punyakip_t">Tidak</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pilih Ya apabila peserta didik memiliki Kartu Indonesia Pintar (KIP), pilih Tidak jikat tidak memiliki`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">26.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Apakah peserta didik tersebtu tetap akan menerima KIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_penerimakip_y" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_penerimakip" value="Ya">`;
                html +=`<label for="daftarulang_penerimakip_y">Ya</label>`;
                html +=`<input id="daftarulang_penerimakip_t" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_penerimakip" value="Tidak">`;
                html +=`<label for="daftarulang_penerimakip_t">Tidak</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Status bahwa peserta didik sudah menerima atau belum menerima Kartu Indonesia Pintar secara fisik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">27.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Alasan menolak PIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Dilarang pemda karena menerima bantuan serupa 02)Menolak 03)Sudah Mampu`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Alasan utama peserta didik jika layak enerima manfaat PIP. Kolom ini akan muncul apabila dipilih Ya untuk mengisi kolom usulan dari sekolah (layak PIP)`;
            html +=`</td>`;
        html +=`</tr>`;
        //Kecamatan tempat tinggal peserta didik saat ini.
    // html +=`</table>`;
    // html +=`<h5 style="background-color:blue;color:white;padding:1px 2px">DATA AYAH KANDUNG</h5>`;
    // html +=`<table style="border-collapse:collapse" border="0">`;
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA AYAH KANDUNG</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">28.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama Ayah Kandung</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_ayah"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama ayah kandung peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">29.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK Ayah</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP ayah kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">30.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir ayah kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">31.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_ayah">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">32.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_ayah">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila ayah kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">33.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_ayah">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">34.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="ortu_abk_ayah"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan khusus yang disandang oleh ayah peserta didik. Dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        //////////////ibu
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA IBU KANDUNG</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">35.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama ibu Kandung</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_ibu"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama ibu kandung peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">36.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK Ibu</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_ibu"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP ibu kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">37.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_ibu"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir ibu kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">38.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_ibu">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">39.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_ibu">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila ibu kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">40.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_ibu">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">41.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="ortu_abk_ibu"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan khusus yang disandang oleh ibu peserta didik. Dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        ///wali
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA WALI</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">42.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama wali</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_wali"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama wali peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">43.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">NIK wali</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_wali"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">44.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_wali"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">45.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_wali">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">46.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_wali">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila wali kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">47.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_wali">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        //KONTAK
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">KONTAK</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">48.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Nomor Telepon Rumah</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Diisi nomor telepon rumah (milik pribadi, orang tua, atau wali) tanpa tanda baca`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">49.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Nomor HP</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_hp_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify"  data-daftarulang="ortu_hp_ibu" >`;
                // html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                 html +=`Diisi nomor telepon selular (milik pribadi, orang tua, atau wali) tanpa tanda baca. (No HP Ayah/No. HP Ibu)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">50.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Email</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Diisi alamat surat elektronik (surel) peserta didik yang dapat dihubungi (milik pribadi, orang tua, atau wali)`;
            html +=`</td>`;
        html +=`</tr>`;
        
    html +=`</table><br><br>`;
    html +=`<div style="float:left;width:49.9%;text-align:center">`;
        html +=`........................2022<br>Wali Kelas<br><br><br><br>.............................`
    html +=`</div>`;
    html +=`<div style="float:right;width:49.9%;text-align:center">`;
        html +=`........................2022<br>Orang Tua/Wali Siswa<br><br><br><br>.............................`
    html +=`</div>`;
    html +=`<div style="clear:both"></div>`
    


    html +=`</div><hr><hr class="w3-border-bottom w3-border w3-border-black">`;
    html +=`<div class="w3-center"><button onclick="printF_PD('areaprint_FPD','Formulir Peserta Didik')">Print</button></div>`
    dividinfo.innerHTML = html;
    let data = new FormData();
    data.append("action", "postgetumum");
    data.append("idss", idsss);
    data.append("tab", "daftarulang");
    
    fetch(urllogin, {method: 'post',body: data}).then(m => m.json()).then(r =>{
        let db_du = r.records.filter(s => s.id_registrasi == reg)[0];
        let elemens = document.querySelectorAll("[data-daftarulang]");
        for(let a = 0 ; a < elemens.length ; a++){
            let elemen = elemens[a]
            let key = elemen.getAttribute("data-daftarulang");
            let val = db_du[key];
            if(key.indexOf("tanggal")>-1 || key.indexOf("tgl")>-1|| key.indexOf("waktu")>-1|| key.indexOf("ttl")>-1){
                let t = new Date(val);
                let d = t.getDate();
                let m = t.getMonth()+1;
                let y = t.getFullYear();
                elemen.innerHTML = splitteks(addZero(d).toString()) +"   /   " + splitteks(addZero(m).toString()) + "   /   " + splitteks(addZero(y).toString());
            }else if(key.indexOf("agama")>-1){
                elemen.innerHTML = teksagama(val);
            }else if(key.indexOf("_abk")>-1){
                elemen.innerHTML = teks_abk(val);
            }else if(key == "cpdb_alamat_jalan"){
                elemen.innerHTML = val;
            }else if(key.indexOf("pendidikan")>-1){
                elemen.innerHTML = pendidikan_split(val);
            }else if(key.indexOf("_rt")>-1 || key.indexOf("_rw")>-1){
                elemen.innerHTML = `<span style="border:.5pt solid #000;padding:2px 5px;">0</span>` + splitteks(addZero(val.toString()));;
            }else if(key.indexOf("anakke")>-1){
                elemen.innerHTML = splitteks(addZero(addZero(val).toString()));;
            }else if(key.indexOf("penghasilan")>-1){
                elemen.innerHTML = penghasilan_split(val)
            }else if(key.indexOf("pekerjaan")>-1){
                elemen.innerHTML = pekerjaansplit(val)
            }
            //else if(key.indexOf("_hp")>-1){
              //  elemen.innerHTML = `<span style="border:.5pt solid #000;padding:2px 5px;">+</span><span style="border:.5pt solid #000;padding:2px 5px;">6</span><span style="border:.5pt solid #000;padding:2px 5px;">2</span>`+splitteks(val.toString());
            //}
            else{
                if(val == ""){
                    let html = "";
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                    elemen.innerHTML = html ;//`<b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b>`;
                }else{
                    if(key.indexOf("_hp")>-1){
                        elemen.innerHTML =`<span style="border:.5pt solid #000;padding:2px 5px;">+</span><span style="border:.5pt solid #000;padding:2px 5px;">6</span><span style="border:.5pt solid #000;padding:2px 5px;">2</span>`+splitteks(val.toString());
                    }else{
                        elemen.innerHTML = splitteks(val.toString());
                    }

                }
            }
        }
        //khusus RADIO
        //jk
        let jk = db_du.cpdb_jk;
        if(jk == "L"){
            document.getElementById("daftarulang_jk_l").checked = true
        }else{
            document.getElementById("daftarulang_jk_p").checked = true
        }

    }).catch(er => console.log(er))

}
const format_dapodik2 = (reg) =>{
    let divid = document.getElementById("id_modal_info");
    let dividinfo = document.querySelector(".teks_info_modal");
    divid.style.display = "block";

    let html = "";
    html +=`<div style="font-size:10px!important" class="areaprint_FPD">`
    html +=`<h4 style="background-color:#FF5E4A;color:#fff;text-align:center;padding:5px">FORMULIR PESERTA DIDIK</h4>`;
    html +=`<div style="border:.5pt solid #000;width:100px;float:right;padding:5px;text-align:center">F-PD</div>`;
    html +=`<div style="clear:both"></div>`;
    html +=`Tanggal: <span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>   /  <span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>   /   <span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
    html +=``;
                
    html +=`<h5 style="background-color:blue;color:white;padding:1px 2px">DATA PRIBADI</h5>`;
    html +=`<table style="border-collapse:collapse" border="0">`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">1.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left;">Nama Lengkap</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="nama_cpdb"></td>`
        html +=`</tr>`;
        //untuk keterangan di bawahnya
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama peserta didik sesuai dokumen resmi yang berlaku (Akta atau Ijazah sebelumnya ). Hanya bisa diubah melalui http://vervalpd.data.kemdikbud.go.id.`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">2.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Jenis Kelamin</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
                html +=`<input id="daftarulang_jk_l" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_jk" value="L">`;
                html +=`<label for="daftarulang_jk_l">Laki-laki</label>`;
                html +=`<input id="daftarulang_jk_p" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_jk" value="P">`;
                html +=`<label for="daftarulang_jk_p">Perempuan</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">3.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NISN</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_nisn"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >Nomor Induk Siswa Nasional peserta didik (jika memiliki). Jika belum memiliki, maka wajib dikosongkan. NISN memiliki format 10 digit angka.<br>Contoh: 0009321234. Untuk memeriksa NISN, dapat mengunjungi laman http://nisn.data.kemdikbud.go.id/page/data</td>`
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">4.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK/No. KITAS(Untuk WNA)</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_nik"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga, Kartu Identitas Anak, atau KTP (jika sudah memiliki) bagi WNI. NIK memiliki format 16 digit angka. Contoh: 6112090906021104.<br><br>`
                html +=`Pastikan NIK tidak tertukar dengan No. Kartu Keluarga, karena keduanya memiliki format yang sama. Bagi WNA, diisi dengan nomor Kartu Izin Tinggal Terbatas (KITAS)`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">5.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">No KK</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_no_kk"></td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">6.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tempat Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_tempat_lahir"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tempat lahir peserta didik sesuai dokumen resmi yang berlaku`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">7.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tanggal Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_tanggal_lahir"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tanggal lahir peserta didik sesuai dokumen resmi yang berlaku. Hanya bisa diubah melalui http://vervalpd.data.kemdikbud.go.id`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">8.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">No Registrasi Akta lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="cpdb_no_reg_akte"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor registrasi Akta Kelahiran. Nomor registrasi yang dimaksud umumnya tercantum pada bagian tengah atas lembar kutipan akta kelahiran`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">9.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Agama & Kepercayaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"><span data-daftarulang="cpdb_agama"></span><span style="margin-left:5px;color:black;padding:2px 5px;font-size:8px">01) Islam 02) Kristen/ Protestan 03) Katholik 04) Hindu 05) Budha 06) Khonghucu 07) Kepercayaan Kepada Tuhan YME</span></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Agama atau kepercayaan yang dianut oleh peserta didik. Apabila peserta didik adalah penghayat kepercayaan (misalnya pada daerah tertentu yang masih memiliki penganut kepercayaan), dapat memilih opsi Kepercayaan kpd Tuhan YME`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">10.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kewarganegaraan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_wni" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_wni" value="WNI">`;
                html +=`<label for="daftarulang_wni">WNI</label>`;
                html +=`<input id="daftarulang_wna" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_wni" value="WNA">`;
                html +=`<label for="daftarulang_wna">WNA</label>`;
                html +=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nama Negara : `;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kewarganegaraan peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">11.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="cpdb_abk"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan Khusus yang disandang peserta didik dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">12.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Alamat Jalan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee" data-daftarulang="cpdb_alamat_jalan"></td>`;
        html +=`</tr>`;
        
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Jalur tempat tinggal peserta didik, terdiri atas gang, kompleks, blok, nomor rumah, dan sebagainya selain informasi yang diminta oleh kolom-kolom 
                yang lain pada bagian ini. Sebagai contoh, peserta didik tinggal di sebuah kompleks perumahan Griya Adam yang berada pada Jalan Kemanggisan, 
                dengan nomor rumah 4-C, di lingkungan RT 005 dan RW 011, Dusun Cempaka, Desa Salatiga. Maka dapat diisi dengan Jl. Kemanggisan, Komp. Griya Adam, No. 4-C`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">13.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">RT</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee">`
            html += `<div style="float:left" data-daftarulang="cpdb_rt"></div>`;
            html += `<div style="float:left;color:#4CDEFF;font-size:8px" >Nomor RT tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan angka 5.</div>`;
            html +=`</td>`;
        html +=`</tr>`;
       
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">14.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">RW</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;border-bottom:.5pt solid #eee">`
                html += `<div style="float:left" data-daftarulang="cpdb_rw"></div>`
                html += `<div style="float:left;color:#4CDEFF;font-size:8px" >Nomor RW tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan angka 11.</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">15.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Dusun</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama dusun tempat tinggal peserta didik saat ini. Dari contoh di atas, misalnya dapat diisi dengan Campak`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">16.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Nama Kelurahan/Desa</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_kel">`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama desa atau kelurahan tempat tinggal peserta didik saat ini. Dari contoh di atas, dapat diisi dengan Bayongbong`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">17.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kecamatan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_kec">`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kecamatan tempat tinggal peserta didik saat ini.`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">18.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Kode Pos</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`;
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kode pos tempat tinggal peserta didik saat ini`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">19.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Lintang</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Titik Koordinat tempat tinggal siswa`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">20.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Bujur</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Titik Koordinat tempat tinggal siswa`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">21.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tempat Tinggal</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">01) Bersama orang tua 02) Wali 03) Kos 04) Asrama 05) Panti Asuhan</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kepemilikan tempat tinggal peserta didik saat ini (yang telah diisikan pada kolom-kolom sebelumnya di atas)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">22.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Moda Transportasi</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">01) Jalan kaki 02) Kendaraan pribadi 03) Kendaraan Umum/angkot/Pete-pete 04) Jemputan Sekolah 05) Kereta Api
                06)Ojek 07)Andong/Bendi/Sado/ Dokar/Delman/Beca 08) Perahu penyebrangan/ Rakit/ Getek 99) Lainnya</span>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kepemilikan tempat tinggal peserta didik saat ini (yang telah diisikan pada kolom-kolom sebelumnya di atas)`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">23.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Anak keberapa</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left" data-daftarulang="cpdb_anakke">`;
                // html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="cpdb_anakke">&nbsp;&nbsp;</div>`;
                //html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">01) Jalan kaki 02) Kendaraan pribadi 03) Kendaraan Umum/angkot/Pete-pete 04) Jemputan Sekolah 05) Kereta Api
                  //      06)Ojek 07)Andong / Bendi / Sado / Dokar/Delman/Beca 08) Perahu penyebrangan/ Rakit/ Getek 99) Lainnya</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;

        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">24.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan (Diperuntukkan untuk warga belajar)</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">25.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Apakah punya KIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_punyakip_y" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_punyakip" value="Ya">`;
                html +=`<label for="daftarulang_punyakip_y">Ya</label>`;
                html +=`<input id="daftarulang_punyakip_t" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_punyakip" value="Tidak">`;
                html +=`<label for="daftarulang_punyakip_t">Tidak</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pilih Ya apabila peserta didik memiliki Kartu Indonesia Pintar (KIP), pilih Tidak jikat tidak memiliki`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">26.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Apakah peserta didik tersebtu tetap akan menerima KIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<input id="daftarulang_penerimakip_y" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_penerimakip" value="Ya">`;
                html +=`<label for="daftarulang_penerimakip_y">Ya</label>`;
                html +=`<input id="daftarulang_penerimakip_t" type="radio" style="width:10px;height:10px;position:relative;margin:2px 5px" name="daftarulang_penerimakip" value="Tidak">`;
                html +=`<label for="daftarulang_penerimakip_t">Tidak</label>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Status bahwa peserta didik sudah menerima atau belum menerima Kartu Indonesia Pintar secara fisik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">27.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Alasan menolak PIP</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
            html +=`<span style="margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Dilarang pemda karena menerima bantuan serupa 02)Menolak 03)Sudah Mampu`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Alasan utama peserta didik jika layak enerima manfaat PIP. Kolom ini akan muncul apabila dipilih Ya untuk mengisi kolom usulan dari sekolah (layak PIP)`;
            html +=`</td>`;
        html +=`</tr>`;
        //Kecamatan tempat tinggal peserta didik saat ini.
    // html +=`</table>`;
    // html +=`<h5 style="background-color:blue;color:white;padding:1px 2px">DATA AYAH KANDUNG</h5>`;
    // html +=`<table style="border-collapse:collapse" border="0">`;
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA AYAH KANDUNG</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">28.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama Ayah Kandung</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_ayah"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama ayah kandung peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">29.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK Ayah</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP ayah kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">30.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir ayah kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">31.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_ayah">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">32.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_ayah">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila ayah kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">33.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_ayah">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">34.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="ortu_abk_ayah"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan khusus yang disandang oleh ayah peserta didik. Dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        //////////////ibu
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA IBU KANDUNG</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">35.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama ibu Kandung</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_ibu"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama ibu kandung peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">36.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">NIK Ibu</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_ibu"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP ibu kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">37.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_ibu"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir ibu kandung peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">38.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_ibu">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">39.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_ibu">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila ibu kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">40.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_ibu">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">41.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Berkebutuhan Khusus</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify">`;
            html +=`<div style="float:left;" data-daftarulang="ortu_abk_ibu"></div>
            <div style="float:right;margin-left:5px;color:black;padding:2px 5px;font-size:8px">
                01)Tidak 02)Netra(A) 03)Rungu(B) 04)Grahita Ringan(C) 05)Grahita Sedang(C1) 
                06)Daksa Ringan(D) 07)Daksa Sedang(D1) 08)Laras 09)Wicara(F) 10)Tuna Ganda(G) 
                11)Hiperaktif(H) 12)Cerdas Istimewa(i) 13)Bakat Istimewa (J) 14)Kesulitan Belajar (K) 
                15)Narkoba(N) 16)Indigo(O) 17)Down Sindrome(P) 18)Autis(Q) 
            </div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Kebutuhan khusus yang disandang oleh ibu peserta didik. Dapat dipilih lebih dari satu`;
            html +=`</td>`;
        html +=`</tr>`;
        ///wali
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">DATA WALI</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">42.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left;">Nama wali</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left;line-height:20px" data-daftarulang="ortu_nama_wali"></td>`
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nama wali peserta didik sesuai dokumen resmi yang berlaku. Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">43.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">NIK wali</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_nik_wali"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">44.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Tahun Lahir</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_ttl_wali"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Tahun lahir wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`; 
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">45.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pendidikan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
                html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pendidikan_wali">&nbsp;&nbsp;</div>`;
                html +=`<div style="float:left;width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
                    01)Tidak Sekolah 02)Putus SD 03)SD Sederajat 04)SMP Sederajat 05)SMA Sederajat 
                        06)D1 07)D2 08)D3 09)D4/S1 10)S1 11)S2</div>`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Sesuaikan dengan urutan pada kartu Keluarga`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">46.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Pekerjaan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_pekerjaan_wali">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01)Tidak bekerja 02)Nelayan 03)Petani 04)Peternak 05)PNS/TNI/POLRI 06)Karyawan Swasta 07)Pedagang kecil 08)Pedagang Besar 09)Wiraswasta 10)Wirausaha 11)Buruh 12)Pensiunan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Pekerjaan utama yah kandung peserta didik. Pilih Meninggal Dunia apabila wali kandung peserrta didik telah meninggal dunia`;
            html +=`</td>`;
        html +=`</tr>`;
        html+=`<tr>`;
            html +=`<td style="width:5px;padding:2px 5px;vertical-align:top;text-align:center">47.</td>`
            html +=`<td style="width:205px;padding:2px 5px;vertical-align:top;text-align:left">Penghasilan Bulanan</td>`;
            html +=`<td style="width:1px;vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:left">`;
            html +=`<div style="float:left;padding:2px 5px;" data-daftarulang="ortu_penghasilan_wali">&nbsp;&nbsp;</div>`;
            html +=`<div style="float:left; width:95%;margin-left:5px;font-size:8px;padding:2px 5px;">
            01) < Rp. 500.000 02) Rp. 500.000-Rp.999.999 03) Rp. 1.000.000-Rp.1.999.999  04) Rp.2.000.000-Rp.4.999.999 05) Rp.5.000.000-Rp.20.000.000 06) > Rp.20.000.000 07) Tidak Berpenghasilan</div>`
            html +=`</td>`;
        html +=`</tr>`;
        //KONTAK
        html +=`<tr><td colspan="4"><h5 style="background-color:blue;color:white;padding:1px 2px">KONTAK</h5></td></tr>`
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">48.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Nomor Telepon Rumah</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Diisi nomor telepon rumah (milik pribadi, orang tua, atau wali) tanpa tanda baca`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">49.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Nomor HP</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify" data-daftarulang="ortu_hp_ayah"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify"  data-daftarulang="ortu_hp_ibu" >`;
                // html +=`Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga atau KTP wali peserta didik`;
            html +=`</td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                 html +=`Diisi nomor telepon selular (milik pribadi, orang tua, atau wali) tanpa tanda baca. (No HP Ayah/No. HP Ibu)`;
            html +=`</td>`;
        html +=`</tr>`;
        
        html+=`<tr>`;
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:center">50.</td>`
            html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">Email</td>`;
            html +=`<td style="vertical-align:top">:</td>`
            html +=`<td style="vertical-align:top;text-align:justify"></td>`;
        html +=`</tr>`;
        html +=`<tr>`;
            html +=`<td colspan="3"></td>`;
            html +=`<td style="vertical-align:top;text-align:justify;color:#4CDEFF;font-size:8px" >`;
                html +=`Diisi alamat surat elektronik (surel) peserta didik yang dapat dihubungi (milik pribadi, orang tua, atau wali)`;
            html +=`</td>`;
        html +=`</tr>`;
        
    html +=`</table><br><br>`;
    html +=`<div style="float:left;width:49.9%;text-align:center">`;
        html +=`........................2022<br>Wali Kelas<br><br><br><br>.............................`
    html +=`</div>`;
    html +=`<div style="float:right;width:49.9%;text-align:center">`;
        html +=`........................2022<br>Orang Tua/Wali Siswa<br><br><br><br>.............................`
    html +=`</div>`;
    html +=`<div style="clear:both"></div>`
    


    html +=`</div><hr><hr class="w3-border-bottom w3-border w3-border-black">`;
    html +=`<div class="w3-center"><button onclick="printF_PD('areaprint_FPD','Formulir Peserta Didik')">Print</button></div>`
    dividinfo.innerHTML = html;
    let data = new FormData();
    data.append("action", "postgetumum");
    data.append("idss", idsss);
    data.append("tab", "respon");
    
    fetch(urllogin, {method: 'post',body: data}).then(m => m.json()).then(r =>{
        let db_du = r.records.filter(s => s.id_pendaftar == reg)[0];
        let elemens = document.querySelectorAll("[data-daftarulang]");
        for(let a = 0 ; a < elemens.length ; a++){
            let elemen = elemens[a]
            let key = elemen.getAttribute("data-daftarulang");
            let val = db_du[key];
            if(key.indexOf("tanggal")>-1 || key.indexOf("tgl")>-1|| key.indexOf("waktu")>-1|| key.indexOf("ttl")>-1){
                let t = new Date(val);
                let d = t.getDate();
                let m = t.getMonth()+1;
                let y = t.getFullYear();
                elemen.innerHTML = splitteks(addZero(d).toString()) +"   /   " + splitteks(addZero(m).toString()) + "   /   " + splitteks(addZero(y).toString());
            }else if(key.indexOf("agama")>-1){
                elemen.innerHTML = teksagama(val);
            }else if(key.indexOf("_abk")>-1){
                elemen.innerHTML = teks_abk(val);
            }else if(key == "cpdb_alamat_jalan"){
                elemen.innerHTML = val;
            }else if(key.indexOf("pendidikan")>-1){
                elemen.innerHTML = pendidikan_split(val);
            }else if(key.indexOf("_rt")>-1 || key.indexOf("_rw")>-1){
                elemen.innerHTML = `<span style="border:.5pt solid #000;padding:2px 5px;">0</span>` + splitteks(addZero(val.toString()));;
            }else if(key.indexOf("anakke")>-1){
                elemen.innerHTML = splitteks(addZero(addZero(val).toString()));;
            }else if(key.indexOf("penghasilan")>-1){
                elemen.innerHTML = penghasilan_split(val)
            }else if(key.indexOf("pekerjaan")>-1){
                elemen.innerHTML = pekerjaansplit(val)
            }
            //else if(key.indexOf("_hp")>-1){
              //  elemen.innerHTML = `<span style="border:.5pt solid #000;padding:2px 5px;">+</span><span style="border:.5pt solid #000;padding:2px 5px;">6</span><span style="border:.5pt solid #000;padding:2px 5px;">2</span>`+splitteks(val.toString());
            //}
            else{
                if(val == ""){
                    let html = "";
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span><span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
                    elemen.innerHTML = html ;//`<b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b><b style="border:.5pt solid #eee;padding:2px 5px">&nbsp;</b>`;
                }else{
                    if(key.indexOf("_hp")>-1){
                        elemen.innerHTML =`<span style="border:.5pt solid #000;padding:2px 5px;">+</span><span style="border:.5pt solid #000;padding:2px 5px;">6</span><span style="border:.5pt solid #000;padding:2px 5px;">2</span>`+splitteks(val.toString());
                    }else{
                        elemen.innerHTML = splitteks(val.toString());
                    }

                }
            }
        }
        //khusus RADIO
        //jk
        let jk = db_du.cpdb_jk;
        if(jk == "L"){
            document.getElementById("daftarulang_jk_l").checked = true
        }else{
            document.getElementById("daftarulang_jk_p").checked = true
        }

    }).catch(er => console.log(er))

}
const splitteks = (tek) =>{
    let html = ""
    for(let i = 0 ; i < tek.length ; i++){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">${tek[i]}</span>`;
    }
    
    return html
}
const teksagama = (val) =>{
    let html = ""
    if(val == "ISLAM"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "KRISTEN"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else if(val == "KATHOLIK"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "HINDU"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "BUDHA"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">5</span>`;
    }else if(val == "KHONGHUCU"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "LAINNYA"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else{
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;"> </span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;"> </span>`;
    }
    return html;
}
const teks_abk = (val)=>{
    let html ="";
    // html +=`01)Tidak 02)Netra (A)  03)Rungu (B) 05)Grahita Ringan (C) 06)Grahita Sedang (C1) 
    // 07)Daksa Ringan (D) 08)Daksa Sedang (D1) 09)Indigo (O) 09)Down Sindrome (P) 10)Autis (Q) 
    // 11)Laras ( E) 12)Wicara (F) 13)Tuna Ganda (G) 14)Hiperaktif (H) 15)Cerdas Istimewa (i) 
    // 16)Bakat Istimewa (J) 17)Kesulitan Belajar (K)`
    if(val == "BELUM PILIH"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
    }else if(val == "TIDAK"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "NETRA (A)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else if(val == "RUNGU (B)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "GRAHITA RINGAN (C)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "GRAHITA SEDANG (C1)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">5</span>`;
    }else if(val == "DAKSA RINGAN (D)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "DAKSA SEDANG (D1)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else if(val == "LARAS (E)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">8</span>`;
    }else if(val == "WICARA (F)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">9</span>`;
    }else if(val == "TUNA GANDA (G)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
    }else if(val == "HIPERAKTIF (H)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "CERDAS ISTIMEWA (I)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "KESULITAN BELAJAR (K)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "INDIGO (O)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "DOWN SINDROME (P)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else if(val == "AUTIS (Q)"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">8</span>`;
    }else{
        let tek = val.toString();
        for(let i = 0 ; i < tek.length ; i++){
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">${tek[i]}</span>`;
        }
    }
   return html
}

const pekerjaansplit = (val) =>{
    let html ="";
    if(val == "Belum Memilih"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
    }else if(val == "Tidak Bekerja"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "Nelayan"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else if(val == "Petani"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "Peternak"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "PNS/TNI/Polri"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">5</span>`;
    }else if(val == "Karyawan Swasta"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "Pedagang Kecil"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else if(val == "Pedagang Besar"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">8</span>`;
    }else if(val == "Wiraswasta"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">9</span>`;
    }else if(val == "Wirausaha"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
    }else if(val == "Buruh"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "Pensiunan"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else{
        let tek = val.toString();
        for(let i = 0 ; i < tek.length ; i++){
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">${tek[i]}</span>`;
        }
    }
    return html
}
const pendidikan_split = (val) =>{
    let html ="";
    if(val == "Tidak Sekolah"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "Putus SD"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else if(val == "SD Sederajat"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "SMP Sederajat"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "SMA Sederajat"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">5</span>`;
    }else if(val == "D1"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "D2"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else if(val == "D3"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">8</span>`;
    }else if(val == "D4/S1"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">9</span>`;
    }else if(val == "S2"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
    }else if(val == "S3"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else{
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
    }
    return html
}
const penghasilan_split = (val) =>{
    let html ="";
    if(val == "Belum Memilih"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">&nbsp;&nbsp;</span>`;
    }else if(val == "Kurang dari Rp. 500.000"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">1</span>`;
    }else if(val == "Rp. 500.000 - Rp. 999.999"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">2</span>`;
    }else if(val == "Rp. 1.000.000 - Rp. 1.999.999"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">3</span>`;
    }else if(val == "Rp. 2.000.000 - Rp. 4.999.999"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">4</span>`;
    }else if(val == "Rp. 5.000.000 - Rp. 20.000.000"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">5</span>`;
    }else if(val == "Lebih dari Rp.20.000.000"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">6</span>`;
    }else if(val == "Tidak Berpenghasilan"){
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">0</span>`;
        html +=`<span style="border:.5pt solid #000;padding:2px 5px;">7</span>`;
    }else{
         let tek = val.toString();
        for(let i = 0 ; i < tek.length ; i++){
            html +=`<span style="border:.5pt solid #000;padding:2px 5px;">${tek[i]}</span>`;
        }
    }
    return html
}
const printF_PD = (kelas,judul)=>{
    let isibody = document.querySelector("." + kelas).innerHTML;
    //let judul;
    // if (kelas =="nTB_tidaklolosseleksi"){
    //     judul ="DATA PENDAFTAR TIDAK LOLOS SELEKSI<br/>(DIKEMBALIKAN, DITOLAK, dan MENDAFTAR GANDA)";
    // }else{
    //     judul ="DATA PENDAFTAR YANG MENDAFTAR LEBIH DARI SATU SEKOLAH";
    // };


    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc =  el.contentDocument || el.contentWindow.document;;//el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>${judul}</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{margin:0;padding:0}
        
         @page {
            size: A4 portrait;
            max-height:100%;
            max-width:100%;
            
            }
    }
    </style>`;



    // body.innerHTML = `<h3 class="w3-center">PPDB ${val_namasekolah.toUpperCase()} TAHUN PELAJARAN 2021/2022</h3>`;
    // body.innerHTML += `<h4 class="w3-center">${judul.toUpperCase()}</h4>`;
    // body.innerHTML += `<table class="w3-table-all garis ntnt_new">${isibody}</table>`;
    body.innerHTML = isibody;
    // let asal = document.querySelector("."+kelas)
    // let cekradio_JK = asal.querySelectorAll("[daftarulang_jk]")
    // let jk
    // cekradio_JK.forEach(el =>{
    //     if(el.checked){
    //         let id = el.getAttribute("id");
    //         doc.getElementById(id).checked = true
    //         console.log(doc.getElementById(id))
    //     }
    // })



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}
const final_pembagiankelasstatistik = () =>{
    let div = document.querySelector(".final_resultppdb");
        div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
        let db_daftarulang
        let param = "?action=getdatasheet&tab=daftarulang";
        fetch(urlppdb + param).then(m => m.json()).then(r => {
            
            db_daftarulang = r.records.filter(s => s.ket_registrasi == "MENDAFTAR ULANG");

            // console.log(db_daftarulang.filter(s=> !(parseFloat(s.cpdb_umur)>=parseFloat(8.0000)&&(parseFloat(s.cpdb_umur)>=parseFloat(7.0000) && parseFloat(s.cpdb_umur)<=parseFloat(7.1131)&&parseFloat(s.cpdb_umur)>=parseFloat(6.0000) && parseFloat(s.cpdb_umur)<=parseFloat(6.1131))) && s.cpdb_jk == "L").map(m => m.cpdb_umur))
            // console.log(db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(7.0000) && parseFloat(s.cpdb_umur)<=parseFloat(7.1131) && s.cpdb_jk == "L").map(m => m.cpdb_umur))
            // console.log(db_daftarulang.filter(s=>  parseFloat(s.cpdb_umur)>=parseFloat(6.0000) && parseFloat(s.cpdb_umur)<=parseFloat(6.1131) && s.cpdb_jk == "L").map(m => m.cpdb_umur))
            // console.log(db_daftarulang.filter(s=>   s.cpdb_jk == "").map(m => m.cpdb_umur))

            let d_L_8 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(8.0000) && s.cpdb_jk == "L").length;
            let d_L_7 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(7.0000) && parseFloat(s.cpdb_umur)<=parseFloat(7.9999) && s.cpdb_jk == "L").length;
            let d_L_6 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(6.0000) && parseFloat(s.cpdb_umur)<=parseFloat(6.9999) && s.cpdb_jk == "L").length;
            let d_L_T = db_daftarulang.filter(s=> s.cpdb_jk == "L").length;

            let d_P_8 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(8.0000) && s.cpdb_jk == "P").length;
            let d_P_7 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(7.0000) && parseFloat(s.cpdb_umur)<=parseFloat(7.9999) && s.cpdb_jk == "P").length;
            let d_P_6 = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(6.0000) && parseFloat(s.cpdb_umur)<=parseFloat(6.9999) && s.cpdb_jk == "P").length;
            let d_P_T = db_daftarulang.filter(s=> s.cpdb_jk == "P").length;
            let d_8  = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(8.0000)).length;
            let d_7  = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(7.0000) && parseFloat(s.cpdb_umur)<=parseFloat(7.9999)).length;
            let d_6  = db_daftarulang.filter(s=> parseFloat(s.cpdb_umur)>=parseFloat(6.0000) && parseFloat(s.cpdb_umur)<=parseFloat(6.9999)).length;
            let html ="";
                html +=`<div class="areaprint_statistikPDB">`
                html +=`<h3 class="w3-center">Data Statistik Peserta Didik Baru</h3>`;
                html +=`<h3 class="w3-center">Tahun Pelajaran 2022/2023</h3><br><br>`;
                html +=`<table class="w3-table-all w3-tiny w3-centered">`;
                html +=`<thead>`;
                    html +=`<tr class="w3-dark-gray">`;
                        html +=`<th rowspan="2" class="w3-border">Keterangan</th>`
                        html +=`<th class="w3-border" colspan="3">Jumlah Berdasarkan Rentang Usia</th>`;
                        html +=`<th rowspan="2">Total</th>`
                    html +=`</tr>`;
                    html +=`<tr  class="w3-dark-gray">`;
                        html+=`<th class="w3-border"> &plusmn; 8 Tahun</th>`
                        html+=`<th class="w3-border"> &plusmn; 7 Tahun</th>`
                        html+=`<th class="w3-border"> &plusmn; 6 Tahun</th>`
                    html +=`</tr>`;
                html +=`</thead>`;
                html +=`<tbody>`;
                    html+=`<tr>`;
                        html+=`<td class="w3-border">Laki-Laki</td>`
                        html+=`<td class="w3-border">${d_L_8}</td>`
                        html+=`<td class="w3-border">${d_L_7}</td>`
                        html+=`<td class="w3-border">${d_L_6}</td>`
                        html+=`<td class="w3-border">${d_L_T}</td>`
                    html+=`</tr>`;
                    html+=`<tr>`;
                        html+=`<td class="w3-border">Perempuan</td>`
                        html+=`<td class="w3-border">${d_P_8}</td>`
                        html+=`<td class="w3-border">${d_P_7}</td>`
                        html+=`<td class="w3-border">${d_P_6}</td>`
                        html+=`<td class="w3-border">${d_P_T}</td>`
                    html+=`</tr>`;
                    html+=`<tr>`;
                        html+=`<td class="w3-border">Total</td>`
                        html+=`<td class="w3-border">${d_8}</td>`
                        html+=`<td class="w3-border">${d_7}</td>`
                        html+=`<td class="w3-border">${d_6}</td>`
                        html+=`<td class="w3-border">${db_daftarulang.length}</td>`
                    html+=`</tr>`;
                html +=`</tbody>`;
                html +=`</table><br><br>`;
                html +=`</div>`
                html +=`<div class="w3-round-xlarge w3-padding w3-card-4 w3-center">`;
                    html +=`<button class="w3-btn w3-round-xxlarge w3-pale-blue w3-tiny w3-bottombar w3-border w3-border-black" onclick="printAwi('areaprint_statistikPDB')">PRINT</button>`;
                html +=`</div>`

                div.innerHTML = html;


    }).catch(er =>{
         console.log(er)
         div.innerHTML = er;
        });

}
const printAwi = (kelas)=>{
        //alert(kelas)
    //tabelprintnomorinduk
    let isibody = document.querySelector("."+kelas).innerHTML;
    


    //let tabel2 = document.querySelector("." + kelasgagal).outerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>DATA STATISTIKA PDB</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css"> .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000} .garis td,.garis th,.garis tr{border:0.5px solid rgb(119, 116, 116)} .garis th{border:1px solid #000;text-align:center;vertical-align:middle} </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {
        html,body{margin:0;padding:0}
        
         @page {
            size: A4 portrait;
            
            }
    }
    </style>`;
    body.innerHTML = isibody;



    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();

}