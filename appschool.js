const barcari = document.querySelector(".barcari");
const div_overlaycari = document.querySelector(".overlaycari");
const div_sidebarcari = document.querySelector(".sidebarcari");
const nav_sidebar = document.querySelector("nav");
const div_resultmenu = document.querySelector(".resultmenu");
const div_namasekolah = document.querySelectorAll(".namasekolah");
const div_view = document.querySelector(".viewscroll");

// const val_namasekolah = "SDN CIPAYUNG 1";
// const setting_kecamatan = "CIPAYUNG";
// const idss = "1E1LoeoUXVn7raLQFHeUtpvrt2Ns1ZWFziZahV-UoZO0"; // SETTING
// const urllogin = "https://script.google.com/macros/s/AKfycbysXu3g6jkD-OAdjzAmSjvkpFdCYOmqbPPcfvCWpNMPTBA6GyaggTvg3o6n3c2ymI-d/exec";
// const urlppdb = "https://script.google.com/macros/s/AKfycbzY3E6aNSCnrgFV4hbT03Xd_VOhSWfK83GZRc7fMLQlZB_199KZVxNIMCdjGFymyh0E1g/exec";

// = "https://script.google.com/macros/s/AKfycbzY3E6aNSCnrgFV4hbT03Xd_VOhSWfK83GZRc7fMLQlZB_199KZVxNIMCdjGFymyh0E1g/exec";

let val_namasekolah, setting_kecamatan, idss, urllogin, urlppdb;

div_namasekolah.forEach(m => m.innerHTML = val_namasekolah);

let cariUpdate = [];
let api_jalur = [];

const div_showhide_password = document.querySelector("#fpl_lihatpassword");
const rd_jalur = document.querySelectorAll('input[name=sistem_jalur');
const btn_daftar = document.querySelector('.btn_daftar');
const arraybulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]


barcari.addEventListener("click", () => {
    // div_overlaycari.style.display = "block";
    // div_sidebarcari.style.display = "block";
    menu_cari();
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
div_overlaycari.addEventListener("click", () => {
    // div_overlaycari.style.display = "none";
    // div_sidebarcari.style.display = "none";
    w3_close();
});

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
    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    w3_close();
};

const menu_alur = () => {
    div_resultmenu.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let param = "?action=getsistemseleksi&idss=" + idss;
    fetch(urllogin + param).then(m => m.json())
        .then(k => {
            console.log(k);
            let r = k.records[0];

            let html = `
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
    <h3> Alur dan Seleksi</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-center w3-padding">
        <img class="w3-image pointerkan" src="/app/alur.png" onclick="klikpoto(this)"/>
    </div>
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
    <h3> Sistem Jurnal dalam Seleksi</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-center w3-padding">
    ${val_namasekolah} beralamat di:`

            html += `
    <table class="w3-table-all">
        <tr>
            <td>RT</td>
            <td>${r.alamat_rt}</td>
        </tr>
        <tr>
            <td>RW</td>
            <td>${r.alamat_rw}</td>
        </tr>
        <tr>
            <td>Kelurahan</td>
            <td>${r.alamat_kelurahan}</td>
        </tr>
        <tr>
            <td>Kecamatan</td>
            <td>${r.alamat_kecamatan}</td>
        </tr>
        <tr>
            <td>Kota</td>
            <td>${r.alamat_kota}</td>
        </tr>
    </table>
    Sesuai dengan Juknis dan Perwal Kota Depok No. 17 Tahun 2021 tentang Juknis PPDB TK SD dan SMP, serta Rapat Koordinasi dengan Dewan Komite Sekolah dan Tokoh Masyarakat.
    Maka, penjurnalan seleksi mengacu pada prioritas umur 7 tahun lebih dalam lingkungan satu RW dengan alamat sekolah di atas.
    </div>
    `;
            div_resultmenu.innerHTML = html;
        }).catch(er => {
            console.log(er);
            div_resultmenu.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda."
        })

    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    w3_close();
};

const klikpoto = (el) => {
    document.getElementById("zoompoto").src = el.src;
    document.getElementById("previewpoto").style.display = "block";
}
const menu_jadwal = () => {
    let linkjadwal = urllogin + "?idss=" + idss + "&action=getjadwal";
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    fetch(linkjadwal)
        .then(m => m.json())
        .then(r => {
            let obj = r.result;
            html_jadwal(obj);
        }).catch(er => {
            console.log(er);
            div_resultmenu.innerHTML = `Maaf, terjadi kesalahan. Silakan ulangi sesi Anda.`;
        })

    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });

    w3_close();

};

const html_jadwal = (ob) => {
    let html = `
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
    <h3> Jadwal PPDB ${val_namasekolah}</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
        <table class="versi-table w3-small">
            <thead>
                <tr>
                    <th>Pelaksanaan</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                    <th>Lokasi</th>
                    <th>Keterangan</th>
                </tr>
            </thead>
            <tbody>`;
    for (let i = 0; i < ob.length; i++) {
        html += `<tr>
                <td>${ob[i].pelaksanaan}</td>
                <td>${ob[i].tanggal}</td>
                <td>${ob[i].waktu}</td>
                <td>${ob[i].lokasi}</td>
                <td>${ob[i].keterangan}</td>
                
            </tr>`;
    }
    html += `</tbody>
        </table>

    </div>
    
    `;
    div_resultmenu.innerHTML = html;
};

const menu_statistika = () => {
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    let param = "?action=getdatasheet&tab=respon";
    fetch(urlppdb + param).then(m => m.json())
        .then(r => {
            // console.log(r);

            let html = `
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
    <h3 class="w3-center"> Statistik Pendaftaran</h3>
    </div>
    <div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
    <h4>Statistik</h4>
        <table class="w3-table-all">
            <thead>
                <tr>
                    <th>Kegiatan</th>
                    <th>Angka</th>
                    
                </tr>
            <thead>
            <tbody>
                <tr>
                    <td>Pendaftar Keseluruhan</td>
                    <td>${r.records.length}</td>
                    
                </tr>
                <tr>
                    <td>Sedang Proses Verifikasi</td>
                    <td>${r.records.filter(k => k.id_status == "MENUNGGU VERIFIKASI").length}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tahap Seleksi</td>
                    <td>${r.records.filter(k => k.id_status == "TAHAP SELEKSI").length}</td>
                    
                </tr>
                <tr>
                    <td>Lainnya (Ganda, tidak lengkap, Spam, atau dikembalikan)</td>
                    <td>${r.records.filter(k => k.id_status == "DITOLAK" || k.id_status == "DIKEMBALIKAN" || k.id_status == "MENDAFTAR GANDA").length}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>


    `;

            div_resultmenu.innerHTML = html;
        }).catch(er => {
            console.log(er);
        })
    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    w3_close();
};

const menu_persyaratan = () => {
    let linkjadwal = urllogin + "?idss=" + idss + "&action=getpersyaratan";
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    fetch(linkjadwal)
        .then(m => m.json())
        .then(r => {
            //console.log(r);
            html_persyaratan(r.result);
        }).catch(er => console.log(er))

    w3_close();
};
const html_persyaratan = (r) => {
    let syarat = r.filter(k => k.umum !== "");
    let dokumen = r
    let datalink = r.filter(l => l.link !== "");

    let html = `
<div class="w3-card-4 w3-container w3-margin w3-round-large">
<h3> Persyaratan PPDB ${val_namasekolah}</h3>
</div>
<div class="w3-card-4 w3-container w3-round-large" >    
<h4>Persyaratan Umum</h4>
<ul class="w3-ul">`;
    for (let a = 0; a < syarat.length; a++) {
        html += `<li>${syarat[a].umum}</li>`;
    }
    html += `</ul>
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
<tbody>`;
    for (let b = 0; b < dokumen.length; b++) {
        html += `<tr>
    <td>${dokumen[b].persyaratan}</td>
    <td>${dokumen[b].optional}</td>
    <td>${dokumen[b].keterangan}</td>
</tr>`;
    }
    html += `</tbody>
</table>
Akte Kelahiran digunakan untuk mengisi identitas pada formulir pendaftaran.<br/>
Kartu Keluarga digunakan untuk mengisi alamat pada formulir pendaftaran (Bukan Surat Keterangan Domisili)
</div><br/>
<div class="w3-card-4 w3-container w3-small w3-round-large w3-padding">
<h4>Data Unduhan</h4>
<div class="w3-row-padding">
<div class="w3-col m4 l2">
    <button onclick="window.open('/app/SURAT%20PERNYATAAN%20TANGGUNG%20JAWAB%20MUTLAK.pdf','','width=720,height=600')" class="w3-button w3-blue w3-round-xxlarge" title="Unduh SPTJM"><i class="fa fa-download"></i> SPTJM</button>
    </div>`;
    for (let c = 0; c < datalink.length; c++) {
        html += `<div class="w3-col  l2 m4">
        <button onclick="window.open('${datalink[c].link}','','width=720,height=600')" class="w3-button w3-blue w3-round-xxlarge" title="Unduh ${datalink[c].kodelink}"><i class="fa fa-download"></i> ${datalink[c].kodelink}</button>
        </div>
        `;
    }
    html += `
<div class="w3-col s12">
Keterangan:
    <ul class="w3-ul">
        <li>SPTJM = Surat Pernyataan Tanggung Jawab Mutlak</li>`;
    for (let f = 0; f < datalink.length; f++) {
        html += `<li>${datalink[f].kodelink} = ${datalink[f].ketlink}</li>`;
    };
    html += `</ul></div>`;


    html += `</div>`;
    div_resultmenu.innerHTML = html;
}
const menu_kuota = () => {
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            api_jalur = r.records;
            let total_benar = (r.records[0].showutama_total == "Dipublikasikan") ? true : false;
            let jalur_benar = (r.records[0].showutama_perjalur == "Dipublikasikan") ? true : false;
            let khusus_benar = (r.records[0].showutama_khusus == "Disembunyikan") ? false : true;


            let html = `
                <div class="w3-card-4 w3-container w3-margin w3-round-large">
                <h3 class="w3-center"> Pagu/Kuota (Daya Tampung) ${val_namasekolah}</h3>
                
                    <div class="w3-row-padding">`;
            if (total_benar) {
                html += `<div class="w3-col l12 m12  w3-container w3-center">
                    <div class="w3-blue">Jumlah Keseluruhan Daya Tampung</div>
                    <div class="w3-round-large w3-pale-blue w3-card"><span class="w3-jumbo">${r.records[0].total_cpdb}</span><br/>Calon PDB</div>
                    </div><hr class="w3-clear"/>`;
            }
            if (jalur_benar) {
                html += `<div class="w3-col l12 m12 w3-container w3-margin-top w3-center"> <h3>Kuota Berdasarkan Sistem Jalur PPDB</h3> </div>`;
                if (r.records[0].sistem_zonasi == "Aktif") {
                    html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Zonasi</div> <div class="w3-round-large w3-deep-orange w3-card">
                    <span class="w3-jumbo">${r.records[0].kuota_zonasi}</span><br/> Calon PDB
                </div> </div>`;
                }
                if (r.records[0].sistem_afirmasi == "Aktif") {
                    html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Afirmasi</div> <div class="w3-round-large w3-orange w3-card">
                            <span class="w3-jumbo">${r.records[0].kuota_afirmasi}</span><br/> Calon PDB
                        </div> </div>`;
                }
                if (r.records[0].sistem_ptk == "Aktif") {
                    html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Perpindahan Tugas/PTK</div> <div class="w3-round-large w3-khaki w3-card">
                    <span class="w3-jumbo">${r.records[0].kuota_ptk}</span><br/> Calon PDB
                </div> </div>`;
                }
            }
            if (khusus_benar) {
                html += `<div class="w3-col l12 m12  w3-container ">
                    <div class="w3--pale-blue w3-padding w3-justify">${r.records[0].showutama_khusus}</div>
                    </div>`;
            }
            html += `</div><hr/></div>`;
            if (jalur_benar) {
                html += `<div class="w3-card-4 w3-container w3-margin w3-round-large">
                <h3 class="w3-center">Persyaratan dan/atau Ketentuan tiap-tiap Sistem Jalur</h3>`;
                if (r.records[0].sistem_zonasi == "Aktif") {
                    html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Zonasi:</span>
                    <ul class="w3-ul w3-card-4 w3-container">`;
                    let data = r.records.filter(k => k.syarat_zonasi !== "");
                    for (let a = 0; a < data.length; a++) {
                        html += `<li>${data[a].syarat_zonasi}`;
                    }
                    html += `</ul><hr/>`;
                }
                if (r.records[0].sistem_afirmasi == "Aktif") {
                    html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Afirmasi:</span>
                    <ul class="w3-ul w3-container w3-card-4">`;
                    let dataafirmasi = r.records.filter(k => k.syarat_afirmasi !== "");
                    for (let b = 0; b < dataafirmasi.length; b++) {
                        html += `<li>${dataafirmasi[b].syarat_afirmasi}`;
                    }
                    html += `</ul><hr/>`;
                }
                if (r.records[0].sistem_ptk == "Aktif") {
                    html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Perpindahan Tugas/Anak PTK:</span>
                    <ul class="w3-ul w3-container w3-card-4">`;
                    let dataaptk = r.records.filter(k => k.syarat_ptk !== "");
                    for (let c = 0; c < dataaptk.length; c++) {
                        html += `<li>${dataaptk[c].syarat_ptk}`;
                    }
                    html += `</ul><hr/>`;
                }
            }
            html += `</div>
            `;
            div_resultmenu.innerHTML = html;
        })
        .catch(er => console.log(er));
    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    w3_close();
};
const menu_tutorial = () => {
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    let data = new FormData();
    data.append('action', 'postgetumum');
    data.append("idss", idss);
    data.append("tab", "yt");
    fetch(urllogin, { method: 'post', body: data }).then(m => m.json())
        .then(r => {
            //console.log(r);
            let rec = r.records.filter(k => k.status_yt == "Dipublikasikan")
            html_yt(rec);
        }).catch(er => {
            console.log(er);
            div_resultmenu.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda.";
        })


    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    w3_close();

};
const html_yt = (r) => {
    let html = `
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
        <h3 class="w3-center"> Informasi Visual</h3>
    </div>
    <div class="w3-card-4  w3-round-large w3-padding w3-margin-bottom" >
    Di sini Anda dapat meyimak ulasan mengenai informasi seputar PPDB di ${val_namasekolah} Tahun Pelajaran ini. Baik berupa informasi, petunjuk, tutorial pengisian, dan penjelasan-penjelasan lainnya. Silakan pilih jenis informasi melalui pilihan berikut ini.<br/>
    Pilih Informasi:
        <select class="w3-select w3-border w3-border-blue select_yt" onchange="pilih_yt()">
        <option value="0" selected>Pilih</option>`;
    for (i = 0; i < r.length; i++) {
        html += `<option value="${r[i].id_yt}">${r[i].ket_yt}</option>`;
    };

    html += `</select></div> <div class="w3-card-4  w3-round-large w3-padding" >
    <div class="containerbaru content_yt">`;

    html += `<iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/${r[0].id_yt}" title="YT"></iframe>`;

    html += `</div></div>`;
    div_resultmenu.innerHTML = html;
};
const pilih_yt = () => {
    let sel = document.querySelector('.select_yt');
    let id = sel.options[sel.selectedIndex].value;
    let el = document.querySelector('.content_yt');

    el.innerHTML = `<iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/${id}" title="YT"></iframe>`;
};

const menu_pesan = () => {
    let load_pesan = document.querySelector("#pesan_forum");
    load_pesan.style.display = "block";

};
const menu_seleksi = () => {
    div_resultmenu.innerHTML = ` <img src="app/barloading.gif" alt="proses loading">`;
    fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            // console.log(r);
            api_jalur = r.records;
            let bol = api_jalur[0];
            let c_zonasi = (r.records[0].sistem_zonasi == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="ZONASI" id="se_zon" class="w3-radio" onchange="get_Seleksi(this)"> <label for="se_zon"> Seleksi Jalur Zonasi</label><br/>` : "";
            let c_afirmasi = (r.records[0].sistem_afirmasi == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="AFIRMASI" id="se_afr" class="w3-radio" onchange="get_Seleksi(this)"><label for="se_afr"> Seleksi Jalur Afirmasi</label><br/>` : "";
            let c_ptk = (r.records[0].sistem_ptk == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="PERPINDAHAN TUGAS/ANAK PTK" id="se_ptk" class="w3-radio" onchange="get_Seleksi(this)"><label for="se_ptk">Seleksi Jalur Perpindahan Tugas/Anak PTK</ptk>` : "";


            let html = `
    <div class="w3-card-4 w3-container w3-margin w3-round-large">
        <h3 class="w3-center"> Tahap Seleksi</h3>
    </div>
    <div class="w3-card-4  w3-round-large w3-padding"  style="overflow-x:auto">
        <div class=" w3-pale-red w3-container w3-padding">
        ${c_zonasi} ${c_afirmasi} ${c_ptk}
        </div>
    </div>
    <hr/>
    <div class="w3-card-4  w3-round-large w3-padding result_jurnal_seleksi"  style="overflow-x:auto">
    </div>
    `;
            div_resultmenu.innerHTML = html;

        }).catch(er => {
            console.log(er);
            div_resultmenu.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda."
        })
    div_view.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
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

const showhidepassword = () => {
    var x = document.getElementById("passwordedit");
    var label = document.getElementById("lihatpasswordedit");
    if (x.type === "password") {
        x.type = "text";
        label.innerHTML = "<i class='fa fa-eye-slash'></i> Sembunyikan Password"
    } else {
        x.type = "password";
        label.innerHTML = "<i class='fa fa-eye'></i> Lihat Password"
    }
};

div_showhide_password.addEventListener("click", () => {
    var x = document.getElementById("fpl_password");
    var label = document.querySelector(".class_fpl_lihatpassword");
    if (x.type === "password") {
        x.type = "text";
        label.innerHTML = "<i class='fa fa-eye-slash'></i> Sembunyikan Password"
    } else {
        x.type = "password";
        label.innerHTML = "<i class='fa fa-eye'></i> Lihat Password"
    }
});
const btn_login = () => {
    let animasi = document.querySelector(".logintim_loading");
    animasi.className = animasi.className.replace("w3-hide", "");
    let nama_form = document.querySelector("#form_pesan_login");
    let data = new FormData(nama_form);
    data.append("action", "tes");
    data.append("idss", idss);

    let url = urllogin;
    fetch(url, { method: "post", body: data })
        .then(m => m.json()).then(r => {

            let lr = r.login.akses;
            if (lr == "Sukses") {
                //alert(lr)
                localStorage.setItem("datalogin", JSON.stringify(r.login));
                window.location.replace("/user/admin.html");
            } else {
                alert("Anda tidak bisa login dengan user dan password ini.")
                window.localStorage.clear();
            }
            animasi.className += " w3-hide";//(animasi.className.indexOf("w3-hide") == "1")? replace("w3-show", "w3-hide");

        })

};

const fn_btn_daftar = () => {
    menu_beranda();
    let modal = document.getElementById("pilihjalur");
    let judul = document.querySelector(".judul_daftar");
    judul.innerHTML = "PENDAFTARAN PPDB";
    let tombol_jalur = document.querySelector(".tombol_form_jalur");
    tombol_jalur.className = tombol_jalur.className.replace("w3-hide", "")
    let div_pj = document.querySelector(".pra_jalur");
    modal.style.display = "block";
    tombol_jalur.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let divform = document.querySelector(".di_infojalur");
    divform.innerHTML = "";
    fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            //console.log(r);
            //let

            api_jalur = r.records;
            div_pj.className = div_pj.className.replace("w3-hide", "");
            tombol_jalur.innerHTML = "";
            let c = 0;
            rd_jalur.forEach(el => {
                el.checked = false;
                let sp = el.value.replace("syarat_", "sistem_");
                let label = document.querySelector("." + el.value);
                if (r.records[0][sp] == "Aktif") {
                    el.className = el.className.replace("w3-hide", "");
                    label.className = label.className.replace("w3-hide", "");
                    c += 1;
                } else {
                    el.className += " w3-hide";
                    label.className += " w3-hide";

                }
            });
            if (c == 0) {
                divform.innerHTML = "Mohon Maaf, pendaftaran di semua jalur tidak bisa diakses. Lihat jadwal pelaksanaan.";
            }

        })
        .catch(er => {
            console.log(er);

        });

};
rd_jalur.forEach(el => {
    el.addEventListener('click', () => {
        let html = `Sebelum Anda Mulai Mendaftar, pastikan Anda telah mempersiapkan dokumen dan memahami informasi berikut:
        <div class="w3-card w3-padding"><ul class="w3-ul w3-justify">`
        let datainfo = api_jalur.map(k => k[el.value]).filter(s => s !== "");

        for (i = 0; i < datainfo.length; i++) {
            html += `<li>${datainfo[i]}</li>`;
        }
        if (api_jalur[0].setingan_formdaftar === true) {
            html += `</ul></div><hr/>
            <button class="w3-button w3-green" onclick="show_formDaftar('${el.value}')">MULAI DAFTAR</button><hr/>`;
        } else {
            html += `</ul></div><hr/>
            Mohon Maaf, pendaftaran telah ditutup. Lihat informasi jadwal pendaftaran atau hubungi panitia.`;
        }


        document.querySelector(".tombol_form_jalur").innerHTML = html;
        let divform = document.querySelector(".div_formulir");
        divform.innerHTML = "";

    })
});
const fn_close_daftar = () => {
    document.getElementById('pilihjalur').style.display = 'none';
    document.querySelector(".tombol_form_jalur").innerHTML = "";
    document.querySelector(".pra_jalur").className = "w3-container w3-hide pra_jalur";
    let divform = document.querySelector(".div_formulir");
    divform.innerHTML = "";

};
const show_formDaftar = (el) => {
    let judul = document.querySelector(".judul_daftar");
    let jalur = el.replace("syarat_", "").toUpperCase();
    judul.innerHTML = (el == "syarat_ptk") ? "PENDAFTARAN JALUR PERPINDAHAN TUGAS/ANAK PTK" : "PENDAFTARAN JALUR " + jalur;
    document.querySelector(".tombol_form_jalur").className += " w3-hide";
    document.querySelector(".pra_jalur").className = "w3-container w3-hide pra_jalur";
    // divform.innerHTML = "Tampilkan form";
    html_formulir(jalur)
};
const html_formulir = (jalur) => {
    let divform = document.querySelector(".div_formulir");

    let html = ` <form class="form_daftar"> 
    <h4 class="w3-center w3-card-2 w3-blue">Form Pendaftaran Jalur ${jalur}</h4> 
    <fieldset class="w3-card-4 w3-border"> 
        <input type="text" name="jalur_cpdb" id="jalur_cpdb" class="w3-input w3-border" value="${jalur}" disabled/>
    </fieldset> 
        <h4 class="w3-center w3-card-2 w3-aqua">Data Pribadi Calon Peserta Didik</h4> 
    <fieldset class="w3-card-4 w3-border"> 
        <label for="nama_cpdb">Nama Calon Peserta Didik:</label> 
            <input type="text" name="nama_cpdb" id="nama_cpdb" class="w3-input w3-border" oninput="ketik_kapital(this)"> 
        <label for="cpdb_tempat_lahir">Tempat Lahir:</label> 
            <input type="text" name="cpdb_tempat_lahir" id="cpdb_tempat_lahir" class="w3-input w3-border" oninput="ketik_kapital(this)"><hr/> <label for="cpdb_tanggal_lahir">Tanggal Lahir:</label> <input type="date" name="cpdb_tanggal_lahir" value="2015-07-01" id="cpdb_tanggal_lahir" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal')" style="width:150px"> <br/><sub class="w3-text-blue sub_sub sub_arti_tanggal"></sub><hr/> 
    <label for="cpdb_umur">Skor Umur:</label> <input type="text" name="cpdb_umur" id="cpdb_umur" class="w3-border" style="width:80px" disabled><br/><hr/> Jenis Kelamin:<br/> <input type="radio" name="cpdb_jk" id="cpdb_lk" value="L" class="w3-radio"/> <label for="cpdb_lk">Laki-laki</label> <input type="radio" name="cpdb_jk" id="cpdb_pr" value="P" class="w3-radio"/> <label for="cpdb_pr">Perempuan</label><hr/> <label for="cpdb_agama">Agama yang dianut CPDB</label> <select id="cpdb_agama" name="cpdb_agama" class="w3-border w3-select"> <option value="" selected="selected">Pilih Agama yang Dianut?</option> <option value="ISLAM">ISLAM</option> <option value="KRISTEN">KRISTEN(PROTESTAN)</option> <option value="KATHOLIK">KATHOLIK</option> <option value="HINDU">HINDU</option> <option value="BUDHA">BUDHA</option> <option value="KHONGHUCU">KHONGHUCU</option> <option value="LAINNYA">LAINNYA</option> </select><hr/> <label for="cpdb_abk">Berkebutuhan Khusus?:</label> <select id="cpdb_abk" name="cpdb_abk" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <hr/> <label for="cpdb_anakke">ANAK KE-</label> <input type="number" class="w3-input w3-border" min="1" style="width:50px" id="cpdb_anakke" name="cpdb_anakke"> <hr/> <label for="cpdb_kewarganegaraan">Kewarganegaraan:</label> 
    <select id="cpdb_kewarganegaraan" name="cpdb_kewarganegaraan" class="w3-select w3-border"> <option value="BELUM PILIH WNA" selected>Silakan Pilih</option> <option value="WNI">WNI</option> <option value="WNA">WNA</option> </select> <hr/> <label for="cpdb_no_reg_akte">No. Registrasi Akte:</label> <input type="text" id="cpdb_no_reg_akte" name="cpdb_no_reg_akte" class="w3-border w3-input"/> <hr/> File Pendukung: <ul class="w3-ul"><li>1. Akta Kelahiran/Surat Kenal Lahir <label for="up_akta" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul> <table class="w3-table-all w3-tiny"> <tr> <td class="preview_akta">Preview Akta</td> </tr> <tr> <td><input type="text" class="cpdb_id_file_akta w3-input" id="cpdb_id_file_akta" name="cpdb_id_file_akta" disabled></input> </td> </tr> </table> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Alamat Calon Peserta Didik</h4> <fieldset class="w3-card-4"> 
    <label for="cpdb_nik">NIK (Nomor Induk Kependudukan) CPDB</label> <input type="text" name="cpdb_nik" id="cpdb_nik" class="w3-input w3-border"/> <hr/> <label for="cpdb_no_kk">No Kartu Keluarga CPDB</label> <input type="text" name="cpdb_no_kk" id="cpdb_no_kk" class="w3-input w3-border"/> <hr/> <label for="cpdb_kota">Kota(atau Kabupaten)</label> <select name="cpdb_kota" id="cpdb_kota" class="w3-select w3-border" onchange="pilih_kota(this,'kondisi_alamat')"> <option value="">Pilih Kota Tinggal</option> <option value="KOTA DEPOK">KOTA DEPOK</option> <option value="Lainnya">LAINNYA</option> </select> <div class="kondisi_alamat"></div> <div class="kondisi_kel"></div> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Riwayat PAUD/TK/RA</h4> <fieldset class="w3-card-4"> <label for="cpdb_npsn">NPSN (Nomor Pokok Sekolah Nasional)</label> <input type="text" name="cpdb_npsn" id="cpdb_npsn" class="w3-input w3-border"/> 
    <label for="cpdb_nisn">NISN (Nomor Induk Siswa Nasional)</label> <input type="text" name="cpdb_nisn" id="cpdb_nisn" class="w3-input w3-border"/> <label for="cpdb_sekolahasal">Nama Sekolah Asal PAUD/TK/RA</label> <input type="text" name="cpdb_sekolahasal" id="cpdb_sekolahasal" class="w3-input w3-border" oninput="ketik_kapital(this)"/> File Pendukung: <ul class="w3-ul"><li>1. Ijazah/STSB PAUD/TK <label for="up_ijazah" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul> <table class="w3-table-all w3-tiny"> <tr> <td class="preview_ijazah"></td> </tr> <tr> <td><input type="text" class="cpdb_id_file_ijazah w3-input" id="cpdb_id_file_ijazah" name="cpdb_id_file_ijazah" disabled></input> </td> </tr> </table> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Orang Tua</h4> <fieldset class="w3-card-4"> <h5>Data Ayah Kandung</h5> 
    <label for="ortu_nama_ayah">Nama Ayah</label> <input type="text" id="ortu_nama_ayah" name="ortu_nama_ayah" class="w3-input w3-border" oninput="ketik_kapital(this)"> <label for="ortu_nik_ayah">NIK Ayah</label> <input type="text" id="ortu_nik_ayah" name="ortu_nik_ayah" class="w3-input w3-border" ><br/> <label for="ortu_ttl_ayah">Tanggal Lahir Ayah</label> <input type="date" name="ortu_ttl_ayah" value="1987-07-01" id="ortu_ttl_ayah" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_ayah')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_ayah"></sub><br/> <label for="ortu_pendidikan_ayah">Pendidikan Ayah</label> <select id="ortu_pendidikan_ayah" name="ortu_pendidikan_ayah" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/><br/> <label for="ortu_pekerjaan_ayah">Pekerjaan Ayah</label> 
    <select id="ortu_pekerjaan_ayah" name="ortu_pekerjaan_ayah" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_penghasilan_ayah">Penghasilan Ayah</label> <select id="ortu_penghasilan_ayah" name="ortu_penghasilan_ayah" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_abk_ayah">Ayah Berkebutuhan Khusus?</label> 
    <select id="ortu_abk_ayah" name="ortu_abk_ayah" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <br/> <br/> 
    <label for="ortu_hp_ayah">No. HP/WA Ayah</label> <input type="tel" id="ortu_hp_ayah" name="ortu_hp_ayah" class="w3-input w3-border"> </fieldset> <br/> <fieldset class="w3-card-4"> <h5> Data Ibu Kandung</h5> <label for="ortu_nama_ibu">Nama Ibu</label> <input type="text" id="ortu_nama_ibu" name="ortu_nama_ibu" class="w3-input w3-border" oninput="ketik_kapital(this)"> <br/> <label for="ortu_nik_ibu">NIK Ibu</label> <input type="text" id="ortu_nik_ibu" name="ortu_nik_ibu" class="w3-input w3-border" > <br/><br/> <label for="ortu_ttl_ibu">Tanggal Lahir Ibu</label> <input type="date" name="ortu_ttl_ibu" value="1987-07-01" id="ortu_ttl_ibu" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Ibu')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_Ibu"></sub> <br/> <label for="ortu_pendidikan_ibu">Pendidikan Ibu</label> <select id="ortu_pendidikan_ibu" name="ortu_pendidikan_ibu" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/> <br/> <label for="ortu_pekerjaan_ibu">Pekerjaan Ibu</label> <select id="ortu_pekerjaan_ibu" name="ortu_pekerjaan_ibu" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> 
    <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_penghasilan_ibu">Penghasilan Ibu</label> <select id="ortu_penghasilan_ibu" name="ortu_penghasilan_ibu" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_abk_ibu">Ibu Berkebutuhan Khusus?</label> <select id="ortu_abk_ibu" name="ortu_abk_ibu" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <br/> <br/> 
    <label for="ortu_hp_ibu">No. HP/WA Ibu</label> <input type="tel" id="ortu_hp_ibu" name="ortu_hp_ibu" class="w3-input w3-border"> </fieldset> <br/> <fieldset class="w3-card-4"> <h5>Data Wali</h5> <label for="ortu_nama_wali">Nama wali</label> <input type="text" id="ortu_nama_wali" name="ortu_nama_wali" class="w3-input w3-border" oninput="ketik_kapital(this)"> <label for="ortu_nik_wali">NIK Wali</label> <input type="text" id="ortu_nik_wali" name="ortu_nik_wali" class="w3-input w3-border" ><br/> <label for="ortu_ttl_wali">Tanggal Lahir Wali</label> <input type="date" name="ortu_ttl_wali" value="1987-07-01" id="ortu_ttl_wali" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Wali')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_Wali"></sub><br/> <label for="ortu_pendidikan_wali">Pendidikan Wali</label> <select id="ortu_pendidikan_wali" name="ortu_pendidikan_wali" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/><br/> <label for="ortu_pekerjaan_wali">Pekerjaan Wali</label> <select id="ortu_pekerjaan_wali" name="ortu_pekerjaan_wali" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> 
    <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/><br/> <label for="ortu_penghasilan_wali">Penghasilan Wali</label> <select id="ortu_penghasilan_wali" name="ortu_penghasilan_wali" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/><br/> <label for="ortu_abk_wali">Wali Berkebutuhan Khusus?</label> <select id="ortu_abk_wali" name="ortu_abk_wali" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> 
    <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> 
    <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> 
    </fieldset> <h4 class="w3-center w3-card-2 w3-pale-red">FILE PENDUKUNG</h4> 
    <fieldset class="w3-card-4"><table class="w3-table-all w3-small">`;

    // //let datapendukung = api_jalur.filter(k => k.ket_doc_zonasi !== "" && k.ket_doc_afirmasi !== "" && k.ket_doc_ptk !== "");
    // let key = "ket_doc_" + jalur.toLowerCase();
    // let perjalur = api_jalur.filter(k => k[key] !== "");
    // //console.log(key);

    // //console.log(perjalur);
    // for (let a = 0; a < perjalur.length; a++) {
    //     html += `<tr>
    //             <td>${perjalur[a][key]} <label for="up_filependukung_${a}" class="w3-button w3-right w3-green w3-small">
    //             <i class="fa fa-upload"></i> Upload </label> 
    //             </td>
    //             </tr>

    //             <tr>
    //                 <td class="preview_filependukung_${a}"></td>
    //             </tr>
    //             <tr>
    //                 <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_${a}" name="cpdb_id_file_filependukung_${a}" disabled></input>
    //             </td>
    //         </tr>
    //         <tr class="w3-dark-white w3-pale-green"><td></td>
    //         </tr>
    //    `;
    // }
    // html += ` </table>`;
    html+=`</fieldset>
    </form>
    <div class="w3-show">
    <input type="file" id="up_akta" onchange="uploadfile(this)">
        <input type="file" id="up_kk" onchange="uploadfile(this)">
        <input type="file" id="up_domisili" onchange="uploadfile(this)">
        <input type="file" id="up_ijazah" onchange="uploadfile(this)">`
    for (b = 0; b < perjalur.length; b++) {
        html += `<input type="file" id="up_filependukung_${b}" onchange="uploadfile(this)"> kode ${b}`

    }
    html += `</div>
    <br/>
        <div class="w3-card-4 w3-container">
            <ul class="w3-ul">
        <li>
            <label for="setuju">
                <input type="checkbox" class="w3-check ceksetuju" id="setuju" value="Setuju" unchecked> Dengan ini menyatakan bahwa data yang saya isi dan unggah benar-benar data yang sebenarnya.</label>
        </li><li><label for="takluk">
        <input type="checkbox" id="takluk" class="w3-check ceksetuju" unchecked> Anda setuju dan tunduk pada peraturan PPDB SD di sekolah kami dan menerima sepenuhnya sistem seleksi yang telah ditetapkan melalui pendaftaran di web ini.
        </label>
        </li>
        <li>
        <label for="verifikasi">
        <input type="checkbox" id="verifikasi"  class="w3-check ceksetuju" unchecked>
        Anda setuju bahwa Tim Verifikasi/Panitia PPDB berhak menolak/mengembalikan apabila data  identitas CPDB tidak sesuai dengan dokumen Akta Kelahiran, dan/atau alamat CPDB tidak sesuai dengan dokumen Kartu Keluarga (bukan Surat Keterangan Domisili)
        </li>    
        <li><label for="gugat">
        <input type="checkbox" id="gugat"  class="w3-check ceksetuju" unchecked> Anda setuju bahwa keputusan hasil seleksi ini tidak dapat diganggu gugat
        </label>
            </li>
            </ul>
            <button disabled class="w3-green w3-input w3-button w3-round-xxlarge kirimformulir" onclick="kirimformulir()" style="width:60%;margin:0 auto">DAFTAR</button><hr/>
        </div>
        <hr class="w3-clear">
    `

    divform.innerHTML = html;
    let setuju = document.querySelectorAll(".ceksetuju");
    let kirim = document.querySelector(".kirimformulir");
    let count = 0
    setuju.forEach(el => {
        el.addEventListener("click", () => {
            if (el.checked) {
                count++;
            } else {
                count--;
            };
            if (count == 4) {
                kirim.removeAttribute("disabled");
            } else {
                kirim.setAttribute("disabled", "true");
            }
        })
    })

};
const kirimformulir = () => {
    let objek = elemen_form();
    let divform = document.querySelector(".div_formulir");
    // let divsebelumnya = document.querySelector(".tombol_form_jalur");
    // divsebelumnya.className = divsebelumnya.className.replace("w3-hide"," ");
    // divsebelumnya.innerHTML=""
    divform.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let key = Object.keys(objek);

    let data = new FormData();
    data.append("action", "mendaftar");
    for (let i = 0; i < key.length; i++) {
        data.append(key[i], objek[key[i]])
    }
    fetch(urlppdb, { method: "post", body: data })
        .then(m => m.json())
        .then(r => {
            console.log(r);
            cariUpdate = r.objek;
            let tgldaftar = new Date(r.objek[0].waktu_daftar);
            divform.innerHTML = `
            Terimakasih telah mendaftar di ${val_namasekolah}. Data Anda telah berhasil terkirim. Berikut data pokok yang wajib Anda ketahui:
            <div id="statusformulir" style="overflow-x:auto">
            <table class="w3-table-all garis">
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Status Pendaftaran</td>
            </tr>
            <tr>
                <td>PILIHAN JALUR</td>
                <td>${r.objek[0].jalur_cpdb}</td>
            </tr>
             <tr>
                <td>ID PENDAFTAR</td>
                <td>${r.objek[0].id_pendaftar}</td>
            </tr>
            <tr>
                <td>Status Pendaftaran</td>
                <td class="w3-large">${r.objek[0].id_status}</td>
            </tr>
            <tr>
                <td>Waktu Pendaftaran</td>
                <td>${tanggalfulllengkap(tgldaftar)}</td>
            </tr>
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Data Pokok Pendaftar</td>
            </tr>
            <tr>
                <td>NAMA CALON PDB</td>
                <td>${r.objek[0].nama_cpdb}</td>
            </tr>
            <tr>
                <td>Skor Umur</td>
                <td>${r.objek[0].cpdb_umur}</td>
            </tr>
            <tr>
                <td>Alamat:</td>
                <td> Kota/Kab :${r.objek[0].cpdb_kota}<br/><br/>
                    Kec. :${r.objek[0].cpdb_kec}<br/><br/>
                    Kelurahan/Desa :${r.objek[0].cpdb_kel}<br/><br/>
                    RW :${r.objek[0].cpdb_rw}<br/><br/>
                    RT :${r.objek[0].cpdb_rt}<br/><br/>
                
                </td>
            </tr>
            
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Akun Fitur Pesan <br/><sub>Gunakan username dan password berikut untuk menggunakan fitur pesan</sub></td>
            </tr>
            <tr>
                <td>Username: ${r.objek[0].id_pendaftar}</td>
                <td>Password: ${r.objek[0].ortu_nama_ayah}</td>
            </tr>
            <tr class="w3-pale-green">
            <td colspan="2">
                Tahapan selanjutnya, Silakan Anda cek di Menu <b class="w3-red">Cari</b> untuk melihat/mengetahui data telah dikonfirmasi oleh Tim Verifikasi/Panitia PPDB.
                Data yang telah diverifikasi akan masuk ke tahap Seleksi pada menu <b class="w3-red">SELEKSI</b>.
            </td>
            </tr>
            </table></div>
            <div class="w3-center">
            <button onclick="print('statusformulir')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Cetak</button>            
            <button onclick="fn_close_daftar()" class="w3-button w3-red w3-round-large"><i class="fa fa-times-rectangle-o"></i> Tutup</button>
            </div>`
        }).catch(er => {
            console.log(er);
            divform.innerHTML = "Maaf, Trafik jaringan penuh. Silakan ulangi sesi Anda."
        })

}
const print = (iddiv) => {
    let div = document.getElementById(iddiv);
    let pracetak = document.getElementById("pracetak");
    //
    let doc = pracetak.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>PPDB SD</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css">
    .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}
    </style>`;

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

    body.innerHTML = div.innerHTML


    window.frames["pracetak"].focus();
    window.frames["pracetak"].print();



}
const elemen_form = () => {
    let el = document.querySelector(".form_daftar");

    let elements = el.elements;
    let o_field = Object.keys(elements)
        .map(k => (elements[k].name !== undefined) ? elements[k].name : (elements[k].length > 0) ? elements[k].item(0).name : "")
        .filter((item, pos, self) => self.indexOf(item) == pos && item);
    // console.log(cek);
    //console.log(o_field);

    let obj = {};
    o_field.forEach(function (name) {
        var element = elements[name];
        obj[name] = element.value;
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            obj[name] = data.join(', ');
        }
    });

    // el.reset();
    document.querySelectorAll('.sub_sub').forEach(el => el.innerHTML = "");
    // console.table(obj);
    return obj;
};

const ketik_kapital = (el) => el.value = el.value.toUpperCase();

const konversi_tanggal = (el, kelas) => {
    let d = new Date(el.value);
    let div = document.querySelector("." + kelas);
    let divumur = document.querySelector("input[name=cpdb_umur]");
    if (kelas == "sub_arti_tanggal") {
        divumur.value = skor_umur(umur(d).tahun, umur(d).bulan, umur(d).hari);

        if (umur(d).tahun < 6) {
            div.innerHTML = `${d.getDate()} ${arraybulan[d.getMonth()]} ${d.getFullYear()} (${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari per 1 Juli 2021)<br/>Maaf, Umur Ananda belum siap untuk memasuki sekolah jenjang SD.`;
            div.className = div.className.replace("w3-text-blue", "w3-text-red");
        } else {
            div.innerHTML = `${d.getDate()} ${arraybulan[d.getMonth()]} ${d.getFullYear()} (${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari per 1 Juli 2021)`;
            div.className = div.className.replace("w3-text-red", "w3-text-blue");
        };
    } else {
        div.innerHTML = `${d.getDate()} ${arraybulan[d.getMonth()]} ${d.getFullYear()} (${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari per 1 Juli 2021)`;
        div.className = div.className.replace("w3-text-red", "w3-text-blue");

    }
};

function umur(tgllahir) {
    let patokan = new Date("2021-07-01");
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
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
        y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

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
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
};

const skor_umur = (th, bln, hri = 0) => {
    let t = parseInt(th), bl = parseInt(bln), hr = parseInt(hri);
    let d_bln = (bl / 100).toFixed(2);
    let d_hr = (hr / 10000);//.toFixed(4)
    let skor = parseFloat(t) + parseFloat(d_bln) + parseFloat(d_hr);
    return skor.toFixed(4);

};
const pilih_kota = (el, kelas) => {
    let div = document.querySelector("." + kelas);
    let options = el.options;
    let html = "";
    let indek = el.selectedIndex;
    if (options[indek].value == "KOTA DEPOK") {
        html = `<label for="cpdb_kec">Kecamatan:</label>
        <select class="w3-border w3-select" id="cpdb_kec" name="cpdb_kec" onchange="pilih_kec(this,'kondisi_kel')">
        <option value="" selected>Pilih Kecamatan</option>
        <option value="CIPAYUNG" >CIPAYUNG</option>
        <option value="CILODONG" >CILODONG</option>
        <option value="BOJONG SARI" >BOJONG SARI</option>
        <option value="SAWANGAN" >SAWANGAN</option>
        <option value="BEJI">BEJI</option>
        <option value="CIMANGGIS">CIMANGGIS</option>
        <option value="LIMO">LIMO</option>
        <option value="CINERE">CINERE</option>
        <option value="PANCORAN MAS">PANCORAN MAS</option>
        <option value="SUKMAJAYA">SUKMAJAYA</option>
        <option value="TAPOS">TAPOS</option>
        </select>
        
        `;
    } else {
        html = `<label for="cpdb_kota_lainnya">Kota/Kabupaten:</label>
        <input type="text" class="w3-input w3-border" name="cpdb_kota_lainnya" id="cpdb_kota_lainnya" oninput="ketik_kapital(this)"/>
        <label for="cpdb_kec">Kecamatan:</label>
        <input type="text" class="w3-input w3-border" name="cpdb_kec" id="cpdb_kec" oninput="ketik_kapital(this)"/>
        <label for="cpdb_kel">Kelurahan:</label>
        <input type="text" class="w3-input w3-border" name="cpdb_kel" id="cpdb_kel" oninput="ketik_kapital(this)"/>
        <label for="cpdb_rw">RW</label>
        <input type="number" class="w3-input w3-border"  min="1" style="width:50px" id="cpdb_rw" name="cpdb_rw">
        <label for="cpdb_rt">RT</label>
        <input type="number" class="w3-input w3-border"  min="1"  style="width:50px" id="cpdb_rt" name="cpdb_rt">
        <label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
        <input type="text" id="cpdb_alamat_jalan" name="cpdb_alamat_jalan" class="w3-input w3-border"x  oninput="ketik_kapital(this)"/>
        
        File Pendukung:
        
        <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> <br/>
                </li><li>2. Surat Keterangan Domisili <label for="up_domisili" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
            </li></ul>
                <table class="w3-table-all w3-tiny">
                <tr>
                    <td class="preview_kk">Preview Akta</td>
                    </tr>
                    <tr>
                    <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" name="cpdb_id_file_kk" disabled></input>
                    </td>
                </tr>
                <tr>
                    <td class="preview_domisili">Preview Akta</td></tr>
                    <tr>
                    <td><input type="text" class="cpdb_id_file_domisili w3-input" id="cpdb_id_file_domisili" name="cpdb_id_file_domisili" disabled></input>
                    </td>
                </tr>
                </table>

        `;


    }
    div.innerHTML = html;
};
const pilih_kec = (el, kelas) => {
    let div = document.querySelector("." + kelas);
    let options = el.options;
    let html = "";
    let indek = el.selectedIndex;
    if (options[indek].value == "CIPAYUNG") {
        html = `<label for="cpdb_kel">Kelurahan:</label>
        <select class="w3-border w3-select" id="cpdb_kel" name="cpdb_kel" >
        <option value="" >Pilih Kelurahan</option>
        <option value="CIPAYUNG" >CIPAYUNG</option>
        <option value="RATUJAYA" >RATUJAYA</option>
        <option value="BOJONG PONDOK TERONG" >BOJONG PONDOK TERONG</option>
        <option value="PONDOK JAYA" >PONDOK JAYA</option>
        <option value="CIPAYUNG JAYA">CIPAYUNG JAYA</option>
        </select>
        <label for="cpdb_rw">RW</label>
        <input type="number" class="w3-input w3-border"  min="1" style="width:50px" id="cpdb_rw" name="cpdb_rw">
        <label for="cpdb_rt">RT</label>
        <input type="number" class="w3-input w3-border"  min="1"  style="width:50px" id="cpdb_rt" name="cpdb_rt">
        <label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
        <input type="text" id="cpdb_alamat_jalan" name="cpdb_alamat_jalan" class="w3-input w3-border"x  oninput="ketik_kapital(this)"/>
        File Pendukung:
                <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
                <table class="w3-table-all w3-tiny">
                <tr>
                    <td class="preview_kk"></td>
                </tr><tr>
                    <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" name="cpdb_id_file_kk" disabled></input>
                    </td>
                </tr>
                </table>
        `;
    } else {
        html = `<label for="cpdb_kel">Kelurahan:</label>
        <input type="text" class="w3-input w3-border" name="cpdb_kel" id="cpdb_kel" oninput="ketik_kapital(this)"/>
        <label for="cpdb_rw">RW</label>
        <input type="number" class="w3-input w3-border"  min="1"  style="width:50px" id="cpdb_rw" name="cpdb_rw">
        <label for="cpdb_rt">RT</label>
        <input type="number" class="w3-input w3-border"  min="1" style="width:50px" id="cpdb_rt" name="cpdb_rt">
        <label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
        <input type="text" id="cpdb_alamat_jalan" name="cpdb_alamat_jalan" class="w3-input w3-border" oninput="ketik_kapital(this)"/>
        File Pendukung:
        <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> <br/>
                </li><li>2. Surat Keterangan Domisili <label for="up_domisili" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
                <table class="w3-table-all w3-tiny">
                <tr>
                    <td class="preview_kk"></td>
                    </tr>
                    <tr>
                    <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" name="cpdb_id_file_kk" disabled></input>
                    </td>
                </tr>
                <tr>
                    <td class="preview_domisili"></td></tr>
                    <tr>
                    <td><input type="text" class="cpdb_id_file_domisili w3-input" id="cpdb_id_file_domisili" name="cpdb_id_file_domisili" disabled></input>
                    </td>
                </tr>
                </table>
        `
    }
    div.innerHTML = html;
};

const uploadfile = (el) => {
    //el.preventDefault();
    let item = el.id;
    let kelas = item.replace("up_", "preview_");
    let kelasinput = item.replace("up_", "");
    let div = document.querySelector("." + kelas);

    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    div.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });


    var file = document.getElementById(item).files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        //document.getElementById('uploadForm').submit();

        let src = e.target.result;
        let data = src.replace(/^.*,/, '');
        let tipe = e.target.result.match(/^.*(?=;)/)[0];
        upload_file(kelasinput, data, tipe);
        // console.log(tipe);
        // console.log(data);
    }
    reader.readAsDataURL(file);

};

function formatBytes(a, b = 2) {
    if (0 === a)
        return "0 Bytes";
    const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
    return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
};
const upload_file = (kelas, param, tipe) => {
    //console.log(kelas);
    // console.log(kelas + "\n" + param);https://script.google.com/macros/s/AKfycbzvqVQtlBTMRUgkFN-ESC9RDaHhGHeou3i0LIjg-48jXWkjAO6S8jl8i2SwsN69QscB/exec
    let div = document.querySelector("input[name=cpdb_id_file_" + kelas + "]"); //cpdb_id_file_
    let divstatus = document.querySelector(".preview_" + kelas);
    let namapendaftar = document.querySelector("input[id=nama_cpdb]").value;
    let data = new FormData();
    data.append("action", "uploadfile");
    data.append("file", param);
    data.append("tipe", tipe);
    data.append("namapendaftar", namapendaftar);
    fetch(urllogin, {
        method: 'post',
        body: data
    }).then(m => m.json())
        .then(r => {
            //console.log(r);
            div.value = r.id
            //https://drive.google.com/file/d/1iX1tg6xe2OIR7ehnKETrxs-epVejZyKg/view?usp=drivesdk
            divstatus.innerHTML = r.result;//+ `  <div class="w3-btn w3-tiny w3-blue" onclick='window.open("https://drive.google.com/file/d/${r.id}/view?usp=drivesdk","","width=720,height=600")'><i class="fa fa-eye"></i> Preview</div>`;//id; //r.type = '''.....;//id; //r.type = '''.....

        })
        .catch(er => {
            console.log(er);
            divstatus.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Unggah Anda."
        })

};
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
            // console.log(r);
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
                html += `<tr><td colspan="3" class="w3-centered">Data Yang Anda cari tidak ditemukan</td></tr>`;
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
                    </tr>`;
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

function tanggalfull(tgl) {
    var d = new Date(tgl);
    var tgl = d.getDate();
    var bln = d.getMonth();
    var thn = d.getFullYear();
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return tgl + " " + bulan[bln] + " " + thn
};
function formattanggalinput(tgl) {
    var d = new Date(tgl);
    var tgl = d.getDate();
    var bln = d.getMonth() + 1;
    var thn = d.getFullYear();
    return thn + "-" + addZero(bln) + "-" + addZero(tgl)
};
///////////////////////////////////

const get_Seleksi = async (el) => {
    let divin = document.querySelector(".result_jurnal_seleksi");
    divin.innerHTML = `<img src="app/barloading.gif" alt="proses loading">`;
    let teks = (el.value == "PERPINDAHAN TUGAS/ANAK PTK") ? "ptk" : el.value.toLowerCase();
    let dataseleksi = await fungsi_objek_jurnal(teks);
    let html = `<h3 class="w3-center">TAHAP JURNAL PPDB JALUR ${el.value}<br/>PER ${tanggalfulllengkap(new Date())}</h3>
    <div style="overflow-x:auto;"><table class="versi-table w3-small" style="margin:0 auto">
    <thead> 
    <tr class="w3-centered"> 
    <th rowspan="2">Jalur PPDB</th>
    <th rowspan="2">Prioritas</th> <th rowspan="2">No. Urut</th> <th rowspan="2">ID Pendaftar</th> <th rowspan="2">Nama CPDB</th> <th rowspan="2">Umur</th> <th colspan="5">Alamat</th> </tr> <tr> <th>RT</th> <th>RW</th> <th>Kelurahan</th> <th>Kecamata</th> <th>Kota</th> </tr></thead><tbody>`;
    html += dataseleksi.terseleksikuota;
    html += `</tbody></table></div><p class="w3-tiny">Prioritas adalah penjurnalan berdasarkan kriteria rentang umur tertentu dan zonasi pendaftar. Penentuan kriteria prioritas disesuaikan dengan Perwal Kota Depok No. 17 Tahun 2021 dan Rapat dengan Dewan Komite</p>`;
    let bol = api_jalur[0]["publikasi_seleksi_" + teks];
    //console.log(bol);
    if (bol) {
        divin.innerHTML = html;
    } else {
        divin.innerHTML = `<strong>Mohon maaf, Sistem seleksi tidak dipublikasikan</strong>`;

    }




};
const fungsi_objek_jurnal = async (zonasi) => {
    let objek_settingseleksi

    // let kuota = objek_settingpagu[0][zonasi];
    let db_pendaftar;
    let param = "?action=getsistemseleksi&idss=" + idss;
    let params = "?action=getdatasheet&tab=respon";
    await fetch(urllogin + param).then(m => m.json())
        .then(k => {

            objek_settingseleksi = k.records;
            // console.log(objek_settingseleksi)
        }

        ).catch(er => console.log(er));
    await fetch(urlppdb + params).then(m => m.json())
        .then(r => {

            db_pendaftar = r.records;
            cariUpdate = r.records;
        })
        .catch(er => console.log(er));
    let kuota;
    await fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            api_jalur = r.records;
            kuota = api_jalur[0]["kuota_" + zonasi];
        }).catch(er => console.log(er))


    let keyOb = zonasi;
    // let warna = Math.floor(Math.random() * 16777215).toString(16);
    let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
    let indekwarna = (Math.random() * 10).toFixed(0);
    let warna = arrayWarna[indekwarna];
    let html = ``;
    let htmlnonkuota = ``;
    let prioritas = objek_settingseleksi;
    let db = db_pendaftar.filter(k => k.jalur_cpdb == zonasi.toUpperCase() && k.id_status == "TAHAP SELEKSI");
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
                <td class="${warna}">${zonasi.toUpperCase()}</td>
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
                        </tr>`;
            } else {
                acc.push(data[i]);
                html += `<tr><td class="${warna}">${zonasi.toUpperCase()}</td>
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
                        </tr>`;
            }

        }

        db = db.filter(k => data.indexOf(k) == -1);//.sort((a, b) => a.umur < b.umur ? 1 : -1);
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
                
                </tr>`;
    }
    // htmllimit += `</table>`;
    let data = {};

    data.terseleksikuota = html;

    //data.terseleksikuota = html;
    // console.log(api_jalur)

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
    return data;//.sort((a, b) => a.umur < b.umur ? 1 : -1);
};
const pendaftarmerevisi = (id) => {
    let lr = id.split("_")[0];
    let modalrevisi = document.getElementById("modalmulti");
    let judul = document.querySelector(".judul_modalmulti");
    let isi = document.querySelector(".isi_modalmulti");
    // Data isian si pendaftar
    let data = cariUpdate.filter(k => k.id_pendaftar == id)[0];
    let jalur = data.jalur_cpdb;
    // Tutup dulu, modal pencarian
    fn_close_cari();
    // buka dulu, modalmulti dan animasikan sebagai tanda sedang loading.
    modalrevisi.style.display = "block";
    judul.innerHTML = `<img src="app/barloading.gif" alt="proses loading">`;
    isi.innerHTML = "";
    //pastikan tidak muncul format pendaftaran di html karena id dan namenya akan bentrok;
    document.querySelector('.div_formulir').innerHTML = "";

    //sediakan template html
    let html = "";
    //panggil sistem jalur yang sedang dibuka.
    fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            //console.log(r);
            html += `<form class="formrevisi_daftar" id="formrevisi_daftar" name="formrevisi_daftar">
            <fieldset class="w3-card-4 w3-border w3-round-large w3-margin-bottom">
            <h4 class="w3-center w3-card-2 w3-blue">Pilihan Sistem Jalur PPDB</h4>
            <sub class="w3-text-red">Jika Anda memilih pindah Sistem Jalur, maka semua File Pendukung harus diunggah ulang</sub>
            <hr/><label for="jalur_cpdb">JALUR PPDB YANG DIPILIH:</label>
            <select id="jalur_cpdb" name="jalur_cpdb" class="w3-select w3-border" onchange="revisi_jalurppdb()">
            `;
            api_jalur = r.records;
            let datajalur = r.records[0];
            let jalursistem = Object.fromEntries(Object.entries(datajalur).filter(([k, v]) => v == "Aktif"));
            let jalurpendaftarsebelumnya = Object.keys(jalursistem).filter(k => k !== "sistem_" + jalur.toLowerCase()).map(s => s.replace("sistem_", "").toUpperCase());;
            //let arrayjalursistem = Object.keys(jalursistem).map(s => s.replace("sistem_", "").toUpperCase());
            // let jalurselainpendaftarpilih = Object.fromEntries(Object.entries(datajalur).filter(([k,v])=> k.indexOf(jalur.toLowerCase()>-1)));
            // console.log(datajalur);
            // console.log(jalursistem);
            // console.log(arrayjalursistem);
            //console.log(jalurpendaftarsebelumnya);
            html += `<option value="${jalur.toUpperCase()}" selected>${jalur.toUpperCase()}</option>`;
            for (let a = 0; a < jalurpendaftarsebelumnya.length; a++) {
                html += `<option value="${jalurpendaftarsebelumnya[a]}">${jalurpendaftarsebelumnya[a]}</option>`;
            };

            html += `</select></fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Pribadi Calon Peserta Didik</h4> <fieldset class="w3-card-4 w3-border"> <label for="nama_cpdb">Nama Calon Peserta Didik:</label> <input type="text" name="nama_cpdb" id="nama_cpdb" class="w3-input w3-border" oninput="ketik_kapital(this)"> <label for="cpdb_tempat_lahir">Tempat Lahir:</label> <input type="text" name="cpdb_tempat_lahir" id="cpdb_tempat_lahir" class="w3-input w3-border" oninput="ketik_kapital(this)"><hr/> <label for="cpdb_tanggal_lahir">Tanggal Lahir:</label> <input type="date" name="cpdb_tanggal_lahir" value="2015-07-01" id="cpdb_tanggal_lahir" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal')" style="width:150px"> <br/><sub class="w3-text-blue sub_sub sub_arti_tanggal"></sub><hr/> <label for="cpdb_umur">Skor Umur:</label> <input type="text" name="cpdb_umur" id="cpdb_umur" class="w3-border" style="width:80px" disabled><br/><hr/> Jenis Kelamin:<br/> <input type="radio" name="cpdb_jk" id="cpdb_lk" value="L" class="w3-radio"/> <label for="cpdb_lk">Laki-laki</label> <input type="radio" name="cpdb_jk" id="cpdb_pr" value="P" class="w3-radio"/> <label for="cpdb_pr">Perempuan</label><hr/> <label for="cpdb_agama">Agama yang dianut CPDB</label> <select id="cpdb_agama" name="cpdb_agama" class="w3-border w3-select"> <option value="" selected="selected">Pilih Agama yang Dianut?</option> <option value="ISLAM">ISLAM</option> <option value="KRISTEN">KRISTEN(PROTESTAN)</option> <option value="KATHOLIK">KATHOLIK</option> <option value="HINDU">HINDU</option> <option value="BUDHA">BUDHA</option> <option value="KHONGHUCU">KHONGHUCU</option> <option value="LAINNYA">LAINNYA</option> </select><hr/> <label for="cpdb_abk">Berkebutuhan Khusus?:</label> <select id="cpdb_abk" name="cpdb_abk" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <hr/> <label for="cpdb_anakke">ANAK KE-</label> <input type="number" class="w3-input w3-border" min="1" style="width:50px" id="cpdb_anakke" name="cpdb_anakke"> <hr/> <label for="cpdb_kewarganegaraan">Kewarganegaraan:</label> <select id="cpdb_kewarganegaraan" name="cpdb_kewarganegaraan" class="w3-select w3-border"> <option value="BELUM PILIH WNA" selected>Silakan Pilih</option> <option value="WNI">WNI</option> <option value="WNA">WNA</option> </select> <hr/> <label for="cpdb_no_reg_akte">No. Registrasi Akte:</label> <input type="text" id="cpdb_no_reg_akte" name="cpdb_no_reg_akte" class="w3-border w3-input"/> <hr/> File Pendukung: <ul class="w3-ul"><li>1. Akta Kelahiran/Surat Kenal Lahir <label for="up_akta" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul> <table class="w3-table-all w3-tiny"> <tr> <td class="preview_akta">Preview Akta</td> </tr> <tr> <td><input type="text" class="cpdb_id_file_akta w3-input" id="cpdb_id_file_akta" name="cpdb_id_file_akta" disabled></input> </td> </tr> </table> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Alamat Calon Peserta Didik</h4> <fieldset class="w3-card-4"> <label for="cpdb_nik">NIK (Nomor Induk Kependudukan) CPDB</label> <input type="text" name="cpdb_nik" id="cpdb_nik" class="w3-input w3-border"/> <hr/> <label for="cpdb_no_kk">No Kartu Keluarga CPDB</label> <input type="text" name="cpdb_no_kk" id="cpdb_no_kk" class="w3-input w3-border"/> <hr/> <label for="cpdb_kota">Kota(atau Kabupaten)</label> <select name="cpdb_kota" id="cpdb_kota" class="w3-select w3-border" onchange="pilih_kota(this,'kondisi_alamat')"> <option value="">Pilih Kota Tinggal</option> <option value="KOTA DEPOK">KOTA DEPOK</option> <option value="Lainnya">LAINNYA</option> </select> <div class="kondisi_alamat"></div> <div class="kondisi_kel"></div> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Riwayat PAUD/TK/RA</h4> <fieldset class="w3-card-4"> <label for="cpdb_npsn">NPSN (Nomor Pokok Sekolah Nasional)</label> <input type="text" name="cpdb_npsn" id="cpdb_npsn" class="w3-input w3-border"/> <label for="cpdb_nisn">NISN (Nomor Induk Siswa Nasional)</label> <input type="text" name="cpdb_nisn" id="cpdb_nisn" class="w3-input w3-border"/> <label for="cpdb_sekolahasal">Nama Sekolah Asal PAUD/TK/RA</label> <input type="text" name="cpdb_sekolahasal" id="cpdb_sekolahasal" class="w3-input w3-border" oninput="ketik_kapital(this)"/> File Pendukung: <ul class="w3-ul"><li>1. Ijazah/STSB PAUD/TK <label for="up_ijazah" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul> <table class="w3-table-all w3-tiny"> <tr> <td class="preview_ijazah"></td> </tr> <tr> <td><input type="text" class="cpdb_id_file_ijazah w3-input" id="cpdb_id_file_ijazah" name="cpdb_id_file_ijazah" disabled></input> </td> </tr> </table> </fieldset> <h4 class="w3-center w3-card-2 w3-aqua">Data Orang Tua</h4> <fieldset class="w3-card-4"> <h5>Data Ayah Kandung</h5> <label for="ortu_nama_ayah">Nama Ayah</label> <input type="text" id="ortu_nama_ayah" name="ortu_nama_ayah" class="w3-input w3-border" oninput="ketik_kapital(this)"> <label for="ortu_nik_ayah">NIK Ayah</label> <input type="text" id="ortu_nik_ayah" name="ortu_nik_ayah" class="w3-input w3-border" ><br/> <label for="ortu_ttl_ayah">Tanggal Lahir Ayah</label> <input type="date" name="ortu_ttl_ayah" value="1987-07-01" id="ortu_ttl_ayah" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_ayah')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_ayah"></sub><br/> <label for="ortu_pendidikan_ayah">Pendidikan Ayah</label> <select id="ortu_pendidikan_ayah" name="ortu_pendidikan_ayah" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/><br/> <label for="ortu_pekerjaan_ayah">Pekerjaan Ayah</label> <select id="ortu_pekerjaan_ayah" name="ortu_pekerjaan_ayah" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_penghasilan_ayah">Penghasilan Ayah</label> <select id="ortu_penghasilan_ayah" name="ortu_penghasilan_ayah" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_abk_ayah">Ayah Berkebutuhan Khusus?</label> <select id="ortu_abk_ayah" name="ortu_abk_ayah" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <br/> <br/> <label for="ortu_hp_ayah">No. HP/WA Ayah</label> <input type="tel" id="ortu_hp_ayah" name="ortu_hp_ayah" class="w3-input w3-border"> </fieldset> <br/> <fieldset class="w3-card-4"> <h5> Data Ibu Kandung</h5> <label for="ortu_nama_ibu">Nama Ibu</label> <input type="text" id="ortu_nama_ibu" name="ortu_nama_ibu" class="w3-input w3-border" oninput="ketik_kapital(this)"> <br/> <label for="ortu_nik_ibu">NIK Ibu</label> <input type="text" id="ortu_nik_ibu" name="ortu_nik_ibu" class="w3-input w3-border" > <br/><br/> <label for="ortu_ttl_ibu">Tanggal Lahir Ibu</label> <input type="date" name="ortu_ttl_ibu" value="1987-07-01" id="ortu_ttl_ibu" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Ibu')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_Ibu"></sub> <br/> <label for="ortu_pendidikan_ibu">Pendidikan Ibu</label> <select id="ortu_pendidikan_ibu" name="ortu_pendidikan_ibu" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/> <br/> <label for="ortu_pekerjaan_ibu">Pekerjaan Ibu</label> <select id="ortu_pekerjaan_ibu" name="ortu_pekerjaan_ibu" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_penghasilan_ibu">Penghasilan Ibu</label> <select id="ortu_penghasilan_ibu" name="ortu_penghasilan_ibu" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/> <br/> <label for="ortu_abk_ibu">Ibu Berkebutuhan Khusus?</label> <select id="ortu_abk_ibu" name="ortu_abk_ibu" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> <br/> <br/> <label for="ortu_hp_ibu">No. HP/WA Ibu</label> <input type="tel" id="ortu_hp_ibu" name="ortu_hp_ibu" class="w3-input w3-border"> </fieldset> <br/> <fieldset class="w3-card-4"> <h5>Data Wali</h5> <label for="ortu_nama_wali">Nama wali</label> <input type="text" id="ortu_nama_wali" name="ortu_nama_wali" class="w3-input w3-border" oninput="ketik_kapital(this)"> <label for="ortu_nik_wali">NIK Wali</label> <input type="text" id="ortu_nik_wali" name="ortu_nik_wali" class="w3-input w3-border" ><br/> <label for="ortu_ttl_wali">Tanggal Lahir Wali</label> <input type="date" name="ortu_ttl_wali" value="1987-07-01" id="ortu_ttl_wali" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Wali')" style="width:150px"> <br/><sub class="w3-text-red sub_sub sub_arti_tanggal_Wali"></sub><br/> <label for="ortu_pendidikan_wali">Pendidikan Wali</label> <select id="ortu_pendidikan_wali" name="ortu_pendidikan_wali" class="w3-select w3-border"> <option value="Tidak Sekolah">Tidak Sekolah</option> <option value="Putus SD">Putus SD</option> <option value="SD Sederajat">SD Sederajat</option> <option value="SMP Sederajat">SMP Sederajat</option> <option value="SMA Sederajat">SMA Sederajat</option> <option value="D1">D1</option> <option value="D2">D2</option> <option value="D3">D3</option> <option value="D4/S1">D4/S1</option> <option value="S2">S2</option> <option value="S2">S3</option> </select> <br/><br/> <label for="ortu_pekerjaan_wali">Pekerjaan Wali</label> <select id="ortu_pekerjaan_wali" name="ortu_pekerjaan_wali" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih Pekerjaan</option> <option value="Tidak Bekerja">Tidak bekerja</option> <option value="Nelayan">Nelayan</option> <option value="Petani">Petani</option> <option value="Peternak">Peternak</option> <option value="PNS/TNI/Polri">PNS/TNI/Polri</option> <option value="Karyawan Swasta">Karyawan Swasta</option> <option value="Pedagang Kecil">Pedagang Kecil</option> <option value="Pedagang Besar">Pedagang Besar</option> <option value="Wiraswasta">Wiraswasta</option> <option value="Wirausaha">Wirausaha</option> <option value="Buruh">Buruh</option> <option value="Pensiunan">Pensiunan</option> <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option> <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option> <option value="Meninggal Dunia">Meninggal Dunia</option> <option value="Lainnya">Lainnya</option> </select> <br/><br/> <label for="ortu_penghasilan_wali">Penghasilan Wali</label> <select id="ortu_penghasilan_wali" name="ortu_penghasilan_wali" class="w3-select w3-border"> <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option> <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option> <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option> <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option> <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option> <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option> <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option> <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option> <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option> <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option> <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option> <option value="Lainnya">Lainnya</option> </select> <br/><br/> <label for="ortu_abk_wali">Wali Berkebutuhan Khusus?</label> <select id="ortu_abk_wali" name="ortu_abk_wali" class="w3-select w3-border"> <option value="BELUM PILIH" selected>Silakan Pilih</option> <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option> <option value="RUNGU (B)">Rungu (B)</option> <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option> <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option> <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option> <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option> <option value="INDIGO (O)">Indigo (O)</option> <option value="DOWN SINDROME (P)">Down Sindrome (P)</option> <option value="AUTIS (Q)">Autis (Q)</option> <option value="LARAS (E)">Laras ( E)</option> <option value="WICARA (F)">Wicara (F)</option> <option value="TUNA GANDA (G)">Tuna Ganda (G)</option> <option value="HIPERAKTIF (H)">Hiperaktif (H)</option> <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option> <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option> <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option> </select> </fieldset> <h4 class="w3-center w3-card-2 w3-pale-red">FILE PENDUKUNG</h4> <fieldset class="w3-card-4 revisipendukung"><table class="w3-table-all w3-small">`;
            //let datapendukung = api_jalur.filter(k => k.ket_doc_zonasi !== "" && k.ket_doc_afirmasi !== "" && k.ket_doc_ptk !== "");
            let key = "ket_doc_" + jalur.toLowerCase();
            let perjalur = api_jalur.filter(k => k[key] !== "");
            //console.log(key);

            //console.log(perjalur);
            for (let a = 0; a < perjalur.length; a++) {
                html += `<tr>
                <td>${perjalur[a][key]} <label for="up_filependukung_${a}" class="w3-button w3-right w3-green w3-small">
                <i class="fa fa-upload"></i> Upload </label> 
                </td>
                </tr>

                <tr>
                    <td class="preview_filependukung_${a}"></td>
                </tr>
                <tr>
                    <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_${a}" name="cpdb_id_file_filependukung_${a}" disabled></input>
                </td>
            </tr>
            <tr class="w3-dark-white w3-pale-green"><td></td>
            </tr>
       `;
            }
            html += ` </table></fieldset>
    </form>
    <div class="w3-hide">
    <input type="file" id="up_akta" onchange="uploadfile(this)">
        <input type="file" id="up_kk" onchange="uploadfile(this)">
        <input type="file" id="up_domisili" onchange="uploadfile(this)">
        <input type="file" id="up_ijazah" onchange="uploadfile(this)">`
            for (b = 0; b < perjalur.length; b++) {
                html += `<input type="file" id="up_filependukung_${b}" onchange="uploadfile(this)"> kode ${b}`

            }
            html += `</div>
    <br/>
        <div class="w3-card-4 w3-container">
            <ul class="w3-ul">
        <li>
            <label for="setuju">
                <input type="checkbox" class="w3-check ceksetuju" id="setuju" value="Setuju" unchecked> Dengan ini menyatakan bahwa data yang saya isi dan unggah benar-benar data yang sebenarnya.</label>
        </li><li><label for="takluk">
        <input type="checkbox" id="takluk" class="w3-check ceksetuju" unchecked> Anda setuju dan tunduk pada peraturan PPDB SD di sekolah kami dan menerima sepenuhnya sistem seleksi yang telah ditetapkan melalui pendaftaran di web ini.
        </label>
        </li>
        <li>
        <label for="verifikasi">
        <input type="checkbox" id="verifikasi"  class="w3-check ceksetuju" unchecked>
        Anda setuju bahwa Tim Verifikasi/Panitia PPDB berhak menolak/mengembalikan apabila data  identitas CPDB tidak sesuai dengan dokumen Akta Kelahiran, dan/atau alamat CPDB tidak sesuai dengan dokumen Kartu Keluarga (bukan Surat Keterangan Domisili)
        </li>    
        <li><label for="gugat">
        <input type="checkbox" id="gugat"  class="w3-check ceksetuju" unchecked> Anda setuju bahwa keputusan hasil seleksi ini tidak dapat diganggu gugat
        </label>
            </li>
            </ul>
            <button disabled class="w3-green w3-input w3-button w3-round-xxlarge kirimformulir" onclick="kirimformulirrevisi(${lr})" style="width:60%;margin:0 auto">KIRIM PERBAIKAN</button><hr/>
        </div>
        <hr class="w3-clear">
    `

            isi.innerHTML = html;
            judul.innerHTML = "FORMULIR PERBAIKAN DATA CPDB";
            // cek aalamat
            let cekkota = data.cpdb_kota;

            let elkota = document.querySelector(".formrevisi_daftar #cpdb_kota");
            // console.log(elkota.nodeName)
            if (cekkota !== "KOTA DEPOK") {
                elkota.options[2].selected = true

            } else {
                elkota.options[1].selected = true

            }
            pilih_kota(elkota, "kondisi_alamat");

            let cekkec = data.cpdb_kec;
            let elkec = document.querySelector(".formrevisi_daftar #cpdb_kec");
            if (cekkota == "KOTA DEPOK") {
                pilih_kec(elkec, "kondisi_kel");
            }
            // if (elkec.options[elkec.selectedIndex].value == cekkec && cekkec == setting_kecamatan) {
            //     ;// = setting_kecamatan;
            // }
            //     pilih_kec(elkec, "kondisi_kel");
            // if (elkec.nodeName == "input" && cekkec == setting_kecamatan) {
            // }
            // let elkel = document.querySelector(".formrevisi_daftar #cpdb_kel");
            // if (elkel.nodeName == "input") {
            //     // pilih_kec(elkec, "kondisi_kel");
            // }

            let keyv = Object.keys(data); // key == header
            let nilai = Object.keys(data).map(m => data[m]);

            var elementform = document.getElementById("formrevisi_daftar").elements;

            for (x = 0; x < elementform.length; x++) {

                if (elementform[x].type !== "file") {
                    for (d = 0; d < keyv.length; d++) {
                        if (elementform[x].name == keyv[d]) {

                            if (elementform[x].type == "date") {
                                let tes = formattanggalinput(nilai[d]);
                                console.log(tes)
                                elementform[x].value = formattanggalinput(nilai[d])
                            } else if (elementform[x].type == "radio" && elementform[x].value == nilai[d]) {
                                elementform[x].checked = true;

                            } else {
                                elementform[x].value = nilai[d];

                            }
                        }
                    }
                }
            };
            let setuju = document.querySelectorAll(".ceksetuju");
            let kirim = document.querySelector(".kirimformulir");
            let count = 0
            setuju.forEach(el => {
                el.addEventListener("click", () => {
                    if (el.checked) {
                        count++;
                    } else {
                        count--;
                    };
                    if (count == 4) {
                        kirim.removeAttribute("disabled");
                    } else {
                        kirim.setAttribute("disabled", "true");
                    }
                })
            })


        })
        .catch(er => console.log(er));


};
const revisi_jalurppdb = () => {
    let elemenselect = document.querySelector("#jalur_cpdb");
    let opsielemen = elemenselect.options;
    let opsiterpilih = elemenselect.selectedIndex;
    let valueterpilih = opsielemen[opsiterpilih].value;
    let jalur = valueterpilih;

    let tempathtml = document.querySelector(".revisipendukung")
    let html = ``;
    //let datapendukung = api_jalur.filter(k => k.ket_doc_zonasi !== "" && k.ket_doc_afirmasi !== "" && k.ket_doc_ptk !== "");
    let key = "ket_doc_" + jalur.toLowerCase();
    let perjalur = api_jalur.filter(k => k[key] !== "");
    //console.log(key);

    //console.log(perjalur);
    for (let a = 0; a < perjalur.length; a++) {
        html += `<tr>
                    <td>${perjalur[a][key]} <label for="up_filependukung_${a}" class="w3-button w3-right w3-green w3-small">
                    <i class="fa fa-upload"></i> Upload </label> 
                    </td>
                    </tr>
    
                    <tr>
                        <td class="preview_filependukung_${a}"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_${a}" name="cpdb_id_file_filependukung_${a}" disabled></input>
                    </td>
                </tr>
                <tr class="w3-dark-white w3-pale-green"><td></td>
                </tr>
           `;
    }
    html += ` </table>`;
    tempathtml.innerHTML = html;
}
const fn_close_modalmulti = () => {
    let modalrevisi = document.getElementById("modalmulti");
    let judul = document.querySelector(".judul_modalmulti");
    let isi = document.querySelector(".isi_modalmulti");
    isi.innerHTML = "";
    judul.innerHTML = "MODAL MULTI";
    modalrevisi.style.display = "none";
    w3_close();
};
const uploadfilerevisi = (el) => {
    //el.preventDefault();
    let item = el.id;
    let kelas = item.replace("uprevisi_", "previewrevisi_");
    let kelasinput = item.replace("uprevisi_", "");
    let div = document.querySelector("." + kelas);

    div.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    div.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });


    var file = document.getElementById(item).files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        //document.getElementById('uploadForm').submit();

        let src = e.target.result;
        let data = src.replace(/^.*,/, '');
        let tipe = e.target.result.match(/^.*(?=;)/)[0];
        uploadrevisi_file(kelasinput, data, tipe);
        // console.log(tipe);
        // console.log(data);
    }
    reader.readAsDataURL(file);

};
const uploadrevisi_file = (kelas, param, tipe) => {
    //console.log(kelas);
    // console.log(kelas + "\n" + param);https://script.google.com/macros/s/AKfycbzvqVQtlBTMRUgkFN-ESC9RDaHhGHeou3i0LIjg-48jXWkjAO6S8jl8i2SwsN69QscB/exec
    let div = document.querySelector("input[name=cpdb_id_file_" + kelas + "]"); //cpdb_id_file_
    let divstatus = document.querySelector(".previewrevisi_" + kelas);
    let namapendaftar = document.querySelector("input[id=nama_cpdb]").value;
    let data = new FormData();
    data.append("action", "uploadfile");
    data.append("file", param);
    data.append("tipe", tipe);
    data.append("namapendaftar", namapendaftar);
    fetch(urllogin, {
        method: 'post',
        body: data
    }).then(m => m.json())
        .then(r => {
            //console.log(r);
            div.value = r.id
            //https://drive.google.com/file/d/1iX1tg6xe2OIR7ehnKETrxs-epVejZyKg/view?usp=drivesdk
            divstatus.innerHTML = r.result;//+ `  <div class="w3-btn w3-tiny w3-blue" onclick='window.open("https://drive.google.com/file/d/${r.id}/view?usp=drivesdk","","width=720,height=600")'><i class="fa fa-eye"></i> Preview</div>`;//id; //r.type = '''.....;//id; //r.type = '''.....

        })
        .catch(er => {
            console.log(er);
            divstatus.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Unggah Anda."
        })

};
const kirimformulirrevisi = (id) => {
    let objek = elemen_formrevisi();
    let divform = document.querySelector(".isi_modalmulti");
    // let divsebelumnya = document.querySelector(".tombol_form_jalur");
    // divsebelumnya.className = divsebelumnya.className.replace("w3-hide"," ");
    // divsebelumnya.innerHTML=""
    divform.innerHTML = `<img src="/app/barloading.gif" alt="proses loading">`;
    let key = Object.keys(objek);

    let data = new FormData();
    data.append("action", "revisipendaftaran");
    for (let i = 0; i < key.length; i++) {
        data.append(key[i], objek[key[i]])
    };
    data.append("baris", id);
    fetch(urlppdb, { method: "post", body: data })
        .then(m => m.json())
        .then(r => {
            console.log(r);
            cariUpdate = r.objek;
            let tgldaftar = new Date(r.objek[0].waktu_daftar);
            divform.innerHTML = `
            Terimakasih telah  merevisi pendaftaran PPDB di ${val_namasekolah}. Data Anda telah berhasil terkirim. Berikut data pokok yang wajib Anda ketahui:
            <div id="statusformulir" style="overflow-x:auto">
            <table class="w3-table-all garis">
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Status Pendaftaran</td>
            </tr>
            <tr>
                <td>PILIHAN JALUR</td>
                <td>${r.objek[0].jalur_cpdb}</td>
            </tr>
             <tr>
                <td>ID PENDAFTAR</td>
                <td>${r.objek[0].id_pendaftar}</td>
            </tr>
            <tr>
                <td>Status Pendaftaran</td>
                <td class="w3-large">${r.objek[0].id_status}</td>
            </tr>
            <tr>
                <td>Waktu Pendaftaran</td>
                <td>${tanggalfulllengkap(tgldaftar)}</td>
            </tr>
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Data Pokok Pendaftar</td>
            </tr>
            <tr>
                <td>NAMA CALON PDB</td>
                <td>${r.objek[0].nama_cpdb}</td>
            </tr>
            <tr>
                <td>Skor Umur</td>
                <td>${r.objek[0].cpdb_umur}</td>
            </tr>
            <tr>
                <td>Alamat:</td>
                <td> Kota/Kab :${r.objek[0].cpdb_kota}<br/><br/>
                    Kec. :${r.objek[0].cpdb_kec}<br/><br/>
                    Kelurahan/Desa :${r.objek[0].cpdb_kel}<br/><br/>
                    RW :${r.objek[0].cpdb_rw}<br/><br/>
                    RT :${r.objek[0].cpdb_rt}<br/><br/>
                
                </td>
            </tr>
            
            <tr class="w3-aqua w3-centered">
                <td colspan="2">Akun Fitur Pesan <br/><sub>Gunakan username dan password berikut untuk menggunakan fitur pesan</sub></td>
            </tr>
            <tr>
                <td>Username: ${r.objek[0].id_pendaftar}</td>
                <td>Password: ${r.objek[0].ortu_nama_ayah}</td>
            </tr>
            <tr class="w3-pale-green">
            <td colspan="2">
                Tahapan selanjutnya, Silakan Anda cek di Menu <b class="w3-red">Cari</b> untuk melihat/mengetahui data telah dikonfirmasi oleh Tim Verifikasi/Panitia PPDB.
                Data yang telah diverifikasi akan masuk ke tahap Seleksi pada menu <b class="w3-red">SELEKSI</b>.
            </td>
            </tr>
            </table></div>
            <div class="w3-center">
            <button onclick="print('statusformulir')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Cetak</button>            
            <button onclick="fn_close_daftar()" class="w3-button w3-red w3-round-large"><i class="fa fa-times-rectangle-o"></i> Tutup</button>
            </div>`
        }).catch(er => {
            console.log(er);
            divform.innerHTML = "Maaf, Trafik jaringan penuh. Silakan ulangi sesi Anda."
        })

};

const elemen_formrevisi = () => {
    let el = document.querySelector(".formrevisi_daftar");

    let elements = el.elements;
    let o_field = Object.keys(elements)
        .map(k => (elements[k].name !== undefined) ? elements[k].name : (elements[k].length > 0) ? elements[k].item(0).name : "")
        .filter((item, pos, self) => self.indexOf(item) == pos && item);
    // console.log(cek);
    //console.log(o_field);

    let obj = {};
    o_field.forEach(function (name) {
        var element = elements[name];
        obj[name] = element.value;
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            obj[name] = data.join(', ');
        }
    });

    // el.reset();
    document.querySelectorAll('.sub_sub').forEach(el => el.innerHTML = "");
    // console.table(obj);
    return obj;
};



const cekdataT = async (id) => {
    //let mod = document.getElementById("resultcari");

    let mod_teks = document.querySelector(".teksresultcari");
    let cek = cariUpdate.filter(k => k.id_pendaftar == id)[0];
    await fetch(urllogin + "?action=getpagu&idss=" + idss)
        .then(m => m.json())
        .then(r => {
            api_jalur = r.records;
            let aksesform= r.records[0].form_dikembalikan;

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
        <td class="w3-pale-red">${cek.id_status}<hr/>${cek.ket_status}</td>
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
    Catatan: Data ini menunjukkan data dalam tahap verifikasi berkas/dokumen. Keputusan diterima/ditolak ada pada tahap penjurnalan di menu SELEKSI (Menunggu konfirmasi ditampilkan sistem seleksi di sekolah).
    <hr/>`;
            if (cek.id_status == "DIKEMBALIKAN" && cek.editable === true && aksesform === true) {
                html += `<div class="w3-pale-green w3-center">
        Silakan Anda klik tombol di bawah ini untuk memperbaiki data pendaftaran Anda<br/>
        <button onclick="pendaftarmerevisi('${cek.id_pendaftar}')">Perbaiki Pendaftaran</button>
        </div>;`
            } else {
                html += `<div class="w3-pale-green w3-center"></div>`
            }

            mod_teks.innerHTML = html;
        }).catch(er => console.log(er));
};


fetch(urllogin + "?action=getpagu&idss=" + idss)
.then(m => m.json())
.then(r => {
    api_jalur = r.records;
    let teks1 = r.records[0].teks_info;
    // let bol = r.records[0].form_dikembalikan;
    let bol = r.records[0].setingan_formdaftar;
    let tmbl = document.querySelector(".bnt_daftar");
    if(bol === true){
        tmbl.className =tmbl.className.replace("w3-hide","");
    }else{
        tmbl.className += " w3-hide";
    }

    let info = document.querySelector(".divinfobaru");
    info.innerHTML = teks1;

}).catch(er=>console.log(er))
