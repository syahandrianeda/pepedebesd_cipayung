  var myIndex = 0;
  const terminal = "https://script.google.com/macros/s/AKfycbx-AabThUSB1cVPIKmbfJqjzJQTIihdkTkN7bQ8ouhmXpGijbfUF-NjNxAaeeD76j34cQ/exec";
  //"https://script.google.com/macros/s/AKfycbwoRP0VaqvyQk6maCfku5zOfgxUZVIqOaFO_c8DYDsbjPbgodki1-F90uAdLFntYcSjRQ/exec";

  carousel();

  let div_view = document.querySelector(".bataskontendaftar")
  let div_view2 = document.querySelector(".kontenscroll")
  let klik = document.querySelector(".goto_pilihansekolah");
  let klik2 = document.querySelector(".goto_ttgppdb");
  
  let cariUpdate = [];
  klik.addEventListener("click", () => {
    div_view.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end"
    });

  })
  klik2.onclick = function(){
    div_view2.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end"
    });
  }

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {

    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 800) {
      $('.kontenscroll').addClass('w3-animate-left');
    } else if ($(this).scrollTop() > 900) {
      $('.kontendaftar').addClass('w3-animate-left');
    } else {
      $('.kontendaftar').removeClass('w3-animate-left');
      $('.kontenscroll').removeClass('w3-animate-left');
    }
  });

/**
 * Definsi:
 * url = urllogin
 * idss = spreadsheet
 * 
 */
  let link = [{
    "sekolah": "ratujaya1",
    "kelas": "kuota_ratujaya1",
    "url": "https://script.google.com/macros/s/AKfycbzpl-CIjAjTVOwlpf7ZKQ34hELzrPupKNF1v94yz9nU4AKY5RfUaMg3pP70lYd3iYkk/exec",
    "idss": "1U65gnNh7bRfZlD0B3JxZ6B5j6RFgyD77ro67jvrQ1Hg",
    "urlpddb":"https://script.google.com/macros/s/AKfycbw_CxeurtA5idnQukkl7-xtnFWITXc-tgrqQ7F6OKiKUepV0gWUA5Jl4lR4sBDFC8j6/exec"
  }, {
    "sekolah": "ratujaya2",
    "kelas": "kuota_ratujaya2",
    "url": "https://script.google.com/macros/s/AKfycbyomW88hiqeaM6EKAr3nul28QoXcukop3E61r9Byf10NJtE3xkybat0v9kqSh3-ySahVA/exec",
    "idss": "1avLVXKt-LVXs3XB_Q452L0a4-bjmZDEjEr1npKzdigY",
    "urlppdb":"https://script.google.com/macros/s/AKfycbwBzMzpHXe4tt-t0ZkINwF65cPcPAfonUMAHb3FO7BfXZVSO0drotC_S2HzYnBpJfeGBw/exec"
  }, {
    "sekolah": "ponter1",
    "kelas": "kuota_ponter1",
    "idss": "10ikKaNupSl6Ssww0KEWw9o8sQJQ1RpA1c3U8po4LYuQ",
    "url": "https://script.google.com/macros/s/AKfycbyZOmnGVRMZfoopwLIoQ2LeDmayjdP7_wTU53HOBwGfiM_ylU0wKuzJyzGjcJs_9ySmgA/exec",
    "urlppdb":"https://script.google.com/macros/s/AKfycbyfogeCk3qiRblZA0cnwujJqdHoNKwkHveEfw7WyeFdfDOFL6FuOe0Wf1P-oPVlsBoe/exec"
  }, {
    "sekolah": "ponter3",
    "kelas": "kuota_ponter3",
    "url": "https://script.google.com/macros/s/AKfycbx4UVsESvnS-HFQOLZ1HPHtuYWI9K1aApAc_yxmDZQpEImXUKNH9ZWL-ex_lmyNppzj/exec",
    "idss": "1zKMNI-AhN4ziGhZ20p_bMZAOjE50HMBJ6-NG_QqobDc",
    "urlppdb":"https://script.google.com/macros/s/AKfycbzYMPW4a9VJUVLC5OKjUwYiJYjyaq8HLaih1IWOxTqa04nOyVByLJQIdpLeukZx5py3/exec"
  }, {
    "sekolah": "ponter4",
    "kelas": "kuota_ponter4",
    "url": "https://script.google.com/macros/s/AKfycbzgtCkGubK9ANlTswcRHzaP-xqQd8lqxZLjT3DkAb1KZ-CJ_b80dNcTMqdcyHUOdACv0A/exec",
    "idss": "1bKxTClpqJ34IkAo_gVuCl__u6CprEGBMWPJFh5c8KN4",
    "urlppdb":"https://script.google.com/macros/s/AKfycbyLkRUvG9_gtuBh3UNhICNjifkhOnSj9ObX-EYYX51R3OW81PREN857jHyRTU5WDQm7/exec"
  }, {
    "sekolah": "ratujaya3",
    "kelas": "kuota_ratujaya3",
    "url": "https://script.google.com/macros/s/AKfycbyZEMq50GvQBFlPTeO06vwI9fpxgGL4wedkYqw8kodK8TFvIejHE5AbPfoS7XPaRvs4jg/exec",
    "idss": "1AkJ2PYsAGLE6PQu9DMJP48R5NXOxu-ipdueyJC4Akrs",
    "urlppdb":"https://script.google.com/macros/s/AKfycbwUy4hxy6xB3toKOJp1cvHtS99zJrQ8pfvg1foA9KFUtjdti08rGk-uuyZIX9Fdp87O/exec"
  }, {
    "sekolah": "utanjaya",
    "kelas": "kuota_utanjaya",
    "url": "https://script.google.com/macros/s/AKfycbwIJK3JGkczKEawtP6qAdx-b_DtNq5T0NPYRiyCbiFwC7_XOHgGSalMW67IHhE4h__4eQ/exec",
    "idss": "19siwvo-vFhJuhU12iwU_diF36EGLUzs1v6anJ0xwhfk",
    "urlppdb":"https://script.google.com/macros/s/AKfycby1IAT32XXre0kd6_O9UWWanql-vkVGhnef9Q1D0m2QcyCBlg8DboA2CviNU1MSho7LOA/exec"
  }, {
    "sekolah": "cipayung1",
    "kelas": "kuota_cipayung1",
    "url": "https://script.google.com/macros/s/AKfycbwIJK3JGkczKEawtP6qAdx-b_DtNq5T0NPYRiyCbiFwC7_XOHgGSalMW67IHhE4h__4eQ/exec",
    "idss": "19siwvo-vFhJuhU12iwU_diF36EGLUzs1v6anJ0xwhfk",
    "urlppdb":"https://script.google.com/macros/s/AKfycby1IAT32XXre0kd6_O9UWWanql-vkVGhnef9Q1D0m2QcyCBlg8DboA2CviNU1MSho7LOA/exec"
  }, {
    "sekolah": "cipayung2",
    "kelas": "kuota_cipayung2",
    "idss": "10OOIxTrPAakmnYpgKsyQjTf41B-u9T-f6BrPqxTimPY",
    "url": "https://script.google.com/macros/s/AKfycbw2kv0h79eThXl_20XVSWyZYKeTpCUqBs-Bvlz-q9R6y1FOB-vziybrq-BiaZvhxZ11/exec",
    "urlppdb":"https://script.google.com/macros/s/AKfycbzyN2wqEuyYfryuBqQg8s2HHNy4ES2aWkuqAtJPO2Gr1Pxn4154o-pNEmgRnQJHOU80/exec"


  }, {
    "sekolah": "cipayung3",
    "kelas": "kuota_cipayung3",
    "idss": "1G3fff9ybmPwGVFaR_oqunI0BMTZ1b-75HMAsk8QbA6c",
    "url": "https://script.google.com/macros/s/AKfycbzWHfR_CcExF9FWANc5nakR1-4iHEpleW6zPdU0qjHt9_tiBqt_tYH9yCXTUG7C0uLKmQ/exec"
  }, {
    "sekolah": "cipayung4",
    "kelas": "kuota_cipayung4",
    "idss": "1YTBSa8rurPsJQKb-qRLIRw3b7H8RXmxfcBQLtrqosyk",
    "url": "https://script.google.com/macros/s/AKfycbzgk2nUK447BUNrZ729BH9vCU1DYnE4U1pT0_myBxz6n_LUVZiRgFp4v6wtXMvN9pN3/exec"
  }, {
    "sekolah": "citayam1",
    "kelas": "kuota_citayam1",
    "idss": "1Zs7AU-lWKvXUrwjgqTHlTe0EE6jCkafiG2yDCJFRQDI",
    "url": "https://script.google.com/macros/s/AKfycbx_QKugHrnQHwFZAVrpcvI7FPCEpnMUfM_nJyLIPvREySE7j05J5T37n2yJu7ZRjytn/exec"
    }, {
    "sekolah": "citayam4",
    "kelas": "kuota_citayam4",
    "idss": "1e2KCLdvmD7js72Yrb6h3PMjos4bfnpGFMdiqXq0lKeE",
    "url": "https://script.google.com/macros/s/AKfycby5m9iXQt_fYT61eezYS9I2knGFC3aLtJyX3OdL39IciXV1XyVHU9N1i1cBYPVaiFRi/exec"
  }]
  const arraybulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

let classCollection =[
  { "id":2,
    "img":"cipayung1.png",
    "kelas":"kuota_cipayung1",
    "header":"h_cipayung1",
    "urlsetting":""
},{"id":3,
"img":"cipayung2.png",
    "kelas":"kuota_cipayung2",
    "header":"h_cipayung2",
    "urlsetting":""
},{ "id":4,
"img":"cipayung3.jpeg",
    "kelas":"kuota_cipayung3",
    "header":"h_cipayung3",
    "urlsetting":""
},{ "id":5,
"img":"cipayung4.png",
    "kelas":"kuota_cipayung4",
    "header":"h_cipayung4",
    "urlsetting":""
},{"id":6,
"img":"citayam1.png",
    "kelas":"kuota_citayam1",
    "header":"h_citayam1",
    "urlsetting":""
},{"id":7,
"img":"citayam4.jpg",
    "kelas":"kuota_citayam4",
    "header":"h_citayam4",
    "urlsetting":""
},{"id":8,
"img":"pondokterong1.png",
    "kelas":"kuota_ponter1",
    "header":"h_ponter1",
    "urlsetting":""
},{"id":9,
"img":"Lambang_Kota_Depok.png",
    "kelas":"kuota_ponter3",
    "header":"h_ponter3",
    "urlsetting":""
},{ "id":10,
"img":"pondokterong4.png",
    "kelas":"kuota_ponter4",
    "header":"h_ponter4",
    "urlsetting":""
},{ "id":11,
"img":"ratujaya1.png",
    "kelas":"kuota_ratujaya1",
    "header":"h_ratujaya1",
    "urlsetting":""
},{ "id":12,
"img":"ratujaya2.png",
    "kelas":"kuota_ratujaya2",
    "header":"h_ratujaya2",
    "urlsetting":""
},{ "id":13,
"img":"ratujaya3.png",
    "kelas":"kuota_ratujaya3",
    "header":"h_ratujaya3",
    "urlsetting":""
},{ "id":14,
"img":"utanjaya.png",
    "kelas":"kuota_utanjaya",
    "header":"h_utanjaya",
    "urlsetting":""
}
]
/**
 *2	SDN Cipayung 1
3	SDN Cipayung 2
4	SDN Cipayung 3
5	SDN Cipayung 4
6	SDN Citayam 1
7	SDN Citayam 2
8	SDN Pondok Terong 1
9	SDN Pondok Terong 3
10	SDN Pondok Terong 4
11	SDN Ratujaya 1
12	SDN Ratujaya 2
13	SDN Ratujaya 3
14	SDN Utan Jaya 
 * 
 * 
 */
let db_settingppdbsekolah = [];
let urllogin = "";
const getDataPagu = (id, hh, kelas) => {
  //console.log(id,hh);
  
    let div = document.querySelector("." + kelas);
    let h = document.querySelector("." + hh);

    fetch(terminal + "?action=settingPerSekolah")
      .then(m => m.json())
      .then(r => {
        
        db_settingppdbsekolah = r.setting;
        
        let result = r.setting;
        let data = result.filter(s => s.id_sekolah == id);
        
        div.innerHTML = data[0].total_cpdb + " Murid";
        h.innerHTML = data[0].nama_sekolah.toUpperCase();

      })
      .catch(er => {
        console.log(er);
        div.innerHTML = er;
        h.innerHTML = er;
      })
}
for (let a = 0; a < classCollection.length; a++) {
    getDataPagu(classCollection[a].id, classCollection[a].header, classCollection[a].kelas);
}

const formPendaftaranCPDB = ()=>{
  let modal = document.getElementById("modalFormulirPendaftaran");
  let tambahanformformulircpdbawal = document.querySelector(".tambahanformformulircpdbawal");
  let cekformulircpdbawal = document.querySelector(".cekformulircpdbawal");
  let formulircpdbawal = document.querySelector(".formulircpdbawal");
  if(formulircpdbawal.className.indexOf("w3-hide")>-1){
    formulircpdbawal.classList.remove("w3-hide")
  }
  
  modal.style.display = 'block';

  tambahanformformulircpdbawal.innerHTML = `<div class="w3-center"><button class="w3-purple w3-button w3-bottombar w3-border w3-border-yellow w3-round-xxlarge w3-margin-top" onclick="periksaNIKCPDB(this)">PILIH SEKOLAH</button></div>`;
  
  cekformulircpdbawal.innerHTML = "";

  let input_namasiswa = document.querySelector("[data-formulircpdb='nama_cpdb']");
        if(input_namasiswa.hasAttribute("disabled")){
          input_namasiswa.removeAttribute("disabled");
        };
  let input_tempatlahir = document.querySelector("[data-formulircpdb='cpdb_tempat_lahir']");
        if(input_tempatlahir.hasAttribute("disabled")){
          input_tempatlahir.removeAttribute("disabled");
        };
  let input_tgllahir = document.querySelector("[data-formulircpdb='cpdb_tanggal_lahir']");
        if(input_tgllahir.hasAttribute("disabled")){
          input_tgllahir.removeAttribute("disabled");
        };
  let input_nik = document.querySelector("[data-formulircpdb='cpdb_nik']");
        if(input_nik.hasAttribute("disabled")){
          input_nik.removeAttribute("disabled");
        };
  

  

}
const toCapitalize = (e) =>{
  let teks = e.value;
  e.value = teks.toUpperCase();
}
const toStringDate = (el, kelas) =>{
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
        div.innerHTML = `${d.getDate()} ${arraybulan[d.getMonth()]} ${d.getFullYear()} (${umur(d).tahun} Tahun ${umur(d).bulan} Bulan ${umur(d).hari} Hari per 1 Juli 2022)`;
        div.className = div.className.replace("w3-text-red", "w3-text-blue");

    }
}
const periksaNIKCPDB = (el)=>{
  let inputnik = document.getElementById("frm_nikcpdb");
  let nik = inputnik.value;
  if(nik.length !== 16){
    alert("Nomor NIK CPDB tidak 16 digit")
    return
  }
  el.innerHTML = `<img src="/img/barloading.gif"/>`;
  el.setAttribute("onclick","alert('Hanya untuk satu kali klik')")
  let ceknik = new FormData();
  ceknik.append("action", "ceknik");
  ceknik.append("nik",nik);
  fetch(terminal,{method:"post",body:ceknik})
  .then(m => m.json())
  .then(r =>{ 
    console.log(r);
    // let bolehlanjut = r.bolehlanjut;
    let bolehlanjut = r.result;
    if(bolehlanjut == "tidak ditemukan"){
      //html_formulir("zonasi");
      html_cpdbpilihsekolah();
    }else{
      
      let data = r.records[0];
      let cekid_status = data.id_status;

      if(cekid_status == "Proses Jurnal"){
        html_dilaranglanjutdaftar(data);
      }else{
        html_maucobalagidaftar(data, cekid_status)
      }

    }
    let input_namasiswa = document.querySelector("[data-formulircpdb='nama_cpdb']");
        input_namasiswa.setAttribute("disabled","true");
    let input_tempatlahir = document.querySelector("[data-formulircpdb='cpdb_tempat_lahir']");
        input_tempatlahir.setAttribute("disabled","true");
    let input_tgllahir = document.querySelector("[data-formulircpdb='cpdb_tanggal_lahir']");
        input_tgllahir.setAttribute("disabled","true");
    let input_nik = document.querySelector("[data-formulircpdb='cpdb_nik']");
        input_nik.setAttribute("disabled","true");
  //   let tes = `{
  //     "records": "",
  //     "bolehlanjut": "Boleh",
  //     "result": "tidak ditemukan",
  //     "warning": 0,
  //     "barisganda": []
  // }`;
    
  }).catch(er => console.log(er))
}

const html_maucobalagidaftar = (data, idstts) =>{
  //ini kondisinya bisa jadi:
  // Dikembalikan, bisa daftar di sekolah sebelumnya
  // Ditolak, Keluar Jurnal, tidak bisa daftar di sekolah yang ada di riwayat;
  
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  let html ="";//[//] =`<div class="w3-card-4 w3-container w3-pale-red w3-margin-top">`;
  
  if(idstts == "Dikembalikan"){
    let id = data.tujuan_mendaftar;
  let row = data.baris_terminal;
  let idpendaftar = data.id_pendaftar;
  let jalurppdb = data.jalur_cpdb;
      let dbSetting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
      let alamat = dbSetting[0].alamat_kelurahan + ",<br>RT " + dbSetting[0].alamat_rt + ", RW " + dbSetting[0].alamat_rw;
    let tekstitle = `Alamat: ${alamat}`;
    html += `<div class="w3-card-4 w3-container w3-pale-red w3-margin-top">`;
      html +=`Status pendaftaran Ananda CPDB <b>Dikembalikan</b> di sekolah tujuan <b>${dbSetting[0].nama_sekolah}</b> dengan keterangan <b>${data.ket_status}</b>, bisa saja status ini karena kesalahan/ketidaklengkapan dokumen yang dibutuhkan. Segera lengkapi!`;
      // start
      html +=`<div class="w3-row w3-card-4 w3-margin-top w3-white">`;
            html +=`<div class="w3-col l12 s12 w3-center w3-border-bottom w3-border-black">Jalur PPDB Yang Dipilih Sebelumnya</div>`;
                html +=`<div class="w3-col l4 s12 w3-border-right"><div class="w3-center">Anda Memilih Sekolah:</div>`;
                
                    
                      html +=`<div class="w3-row w3-tiny w3-border w3-card-4 w3-margin w3-round-xlarge">`;
                        html +=`<img src="${dbSetting[0].logosekolah}" class="w3-col l4 s4" style="height:65px">`;
                        html +=`<div class="w3-col s8 w3-hide-large w3-margin-top"></div>`;
                        html +=`<div class="w3-col l8 s8 w3-center">${dbSetting[0].nama_sekolah.toUpperCase()}</div>`;
                        html +=`<div class="w3-col l8 s8 w3-center">Kuota Total: ${dbSetting[0].total_cpdb}<span class="w3-tiny"><br>${tekstitle}</span></div>`;
                        html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
                      html +=`</div>`;
                      //html +=`<div class="w3-center w3-tiny">Atau</div>`;
                      //html +=`<div class="w3-center"><div class="w3-tiny w3-border w3-card-4 w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN</div></div>`;
              
              html +=`</div>`;

              html +=`<div class="w3-col l8 s12">`;
                html +=`<div class="w3-center">Jalur yang dipilih sebelumnya</div>`;
                html+=`<div id="cekjalurppdb_idsekolahini" class="w3-margin-bottom">`;
                  // html +=`<button class="w3-btn w3-border w3-pale-green w3-small w3-round w3-margin" onclick="html_formulir('${jalurppdb.toLowerCase()}',${id},'${dbSetting[0].nama_sekolah}')">${jalurppdb}</button>`;
                  html +=`<button class="w3-btn w3-border w3-pale-green w3-small w3-round w3-margin" onclick="alert('Anda harus menyelesaikan kesalahan/ketidaklengkapan formulir ini')">${jalurppdb}</button>`;
                html +=`</div>`;
              html +=`</div>`;
        html +=`</div>`;
      // end
      html +=`<hr class="w3-clear">Sistem akan mengembalikan data yang pernah Anda input sebelumnya:`
    html += `</div>`;
    html +=`<div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-pale-red">Pilihan Sekolah dan Jalur yang Dipilih:</h4>Kode Sekolah Tujuan:<input type="number" data-formulircpdb="tujuan_mendaftar" class="w3-input w3-border w3-light-grey" value="2" disabled><br>Tujuan Sekolah: <span class="w3-input w3-border w3-light-grey">SDN CIPAYUNG 1</span><br>Jalur yang Dipilih:<input type="text" data-formulircpdb="jalur_cpdb" id="jalur_cpdb" class="w3-input w3-border w3-light-grey" value="ZONASI" disabled><br></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-blue">Form Pendaftaran Jalur zonasi</h4><label for="cpdb_umur">Skor Umur:<input type="text" data-formulircpdb="cpdb_umur" id="cpdb_umur" class="w3-border" style="width:80px" value="0" disabled></label><br><br><label for="cpdb_jk">Jenis Kelamin: <select id="cpdb_jk" data-formulircpdb="cpdb_jk" class="w3-select w3-light-grey"><option value="L">Laki-laki</option><option value="P">Perempuan</option></select></label><br><br><label for="cpdb_agama">Agama yang dianut CPDB:<select id="cpdb_agama" data-formulircpdb="cpdb_agama" class="w3-border w3-select w3-light-gray"><option value="">Pilih Agama yang Dianut?</option><option value="ISLAM">ISLAM</option><option value="KRISTEN">KRISTEN(PROTESTAN)</option><option value="KATHOLIK">KATHOLIK</option><option value="HINDU">HINDU</option><option value="BUDHA">BUDHA</option><option value="KHONGHUCU">KHONGHUCU</option><option value="LAINNYA">LAINNYA</option></select></label><br><br>
            <label for="cpdb_abk">Berkebutuhan Khusus?:<select id="cpdb_abk" data-formulircpdb="cpdb_abk" class="w3-select w3-border"><option value="BELUM PILIH" selected="">Silakan Pilih</option><option value="TIDAK">Tidak</option><option value="NETRA (A)">Netra (A)</option><option value="RUNGU (B)">Rungu (B)</option><option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option><option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option><option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option><option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option><option value="INDIGO (O)">Indigo (O)</option><option value="DOWN SINDROME (P)">Down Sindrome (P)</option><option value="AUTIS (Q)">Autis (Q)</option><option value="LARAS (E)">Laras ( E)</option><option value="WICARA (F)">Wicara (F)</option><option value="TUNA GANDA (G)">Tuna Ganda (G)</option><option value="HIPERAKTIF (H)">Hiperaktif (H)</option><option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option><option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option><option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option></select></label><br><br><label for="cpdb_anakke">ANAK KE-</label><input type="number" class="w3-border" min="1" style="width:250px" id="cpdb_anakke" data-formulircpdb="cpdb_anakke"><br><br><label for="cpdb_kewarganegaraan">Kewarganegaraan:</label><select id="cpdb_kewarganegaraan" data-formulircpdb="cpdb_kewarganegaraan" class="w3-select w3-border"><option value="BELUM PILIH WNA" selected="">Silakan Pilih</option><option value="WNI">WNI</option> <option value="WNA">WNA</option></select><br><br><label for="cpdb_no_reg_akte">No. Registrasi Akte:<input type="text" id="cpdb_no_reg_akte" data-formulircpdb="cpdb_no_reg_akte" class="w3-border w3-input"></label><br><br>File Pendukung: 
                        <ul class="w3-ul">
                          <li>1. Akta Kelahiran/Surat Kenal Lahir 
                              <label for="up_akta" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                          </li>
                        </ul>
                        
                        <table class="w3-table-all w3-tiny">
                          <tbody><tr>
                            <td class="preview_akta">Preview Akta</td>
                          </tr>
                          <tr>
                            <td><input type="text" class="cpdb_id_file_akta w3-input" id="cpdb_id_file_akta" data-formulircpdb="cpdb_id_file_akta" disabled>
                            </td>
                          </tr>
                        </tbody></table></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-center w3-card-2 w3-aqua">Alamat CPDB dan Dokumen Kartu Keluarga</h5><label for="cpdb_no_kk">No Kartu Keluarga CPDB</label>
                                  <input type="text" data-formulircpdb="cpdb_no_kk" id="cpdb_no_kk" class="w3-input w3-border"><br><br>
                          <label for="cpdb_kota">Kota(atau Kabupaten)</label>
                              <select data-formulircpdb="cpdb_kota" id="cpdb_kota" class="w3-select w3-border" onchange="pilih_kota(this,'kondisi_alamat')">
                                <option value="">Pilih Kota Tinggal</option>
                                <option value="KOTA DEPOK">KOTA DEPOK</option>
                                <option value="Lainnya">LAINNYA</option>
                              </select>
                        <div class="kondisi_alamat"><br><label for="cpdb_kec">Kecamatan:</label>
          <select class="w3-border w3-select" id="cpdb_kec" data-formulircpdb="cpdb_kec" onchange="pilih_kec(this,'kondisi_kel')">
          <option value="" selected="">Pilih Kecamatan</option>
          <option value="CIPAYUNG">CIPAYUNG</option>
          <option value="CILODONG">CILODONG</option>
          <option value="BOJONG SARI">BOJONG SARI</option>
          <option value="SAWANGAN">SAWANGAN</option>
          <option value="BEJI">BEJI</option>
          <option value="CIMANGGIS">CIMANGGIS</option>
          <option value="LIMO">LIMO</option>
          <option value="CINERE">CINERE</option>
          <option value="PANCORAN MAS">PANCORAN MAS</option>
          <option value="SUKMAJAYA">SUKMAJAYA</option>
          <option value="TAPOS">TAPOS</option>
          </select>
          
          </div>
                        <div class="kondisi_kel"><br><label for="cpdb_kel">Kelurahan:</label>
          <select class="w3-border w3-select" id="cpdb_kel" data-formulircpdb="cpdb_kel">
          <option value="">Pilih Kelurahan</option>
          <option value="CIPAYUNG">CIPAYUNG</option>
          <option value="RATUJAYA">RATUJAYA</option>
          <option value="BOJONG PONDOK TERONG">BOJONG PONDOK TERONG</option>
          <option value="PONDOK JAYA">PONDOK JAYA</option>
          <option value="CIPAYUNG JAYA">CIPAYUNG JAYA</option>
          </select><br>
          <label for="cpdb_rw">RW</label>
          <input type="number" class="w3-input w3-border" min="1" style="width:123px" id="cpdb_rw" data-formulircpdb="cpdb_rw">
          <br><label for="cpdb_rt">RT</label>
          <input type="number" class="w3-input w3-border" min="1" style="width:123px" id="cpdb_rt" data-formulircpdb="cpdb_rt">
          <br><label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
          <input type="text" id="cpdb_alamat_jalan" data-formulircpdb="cpdb_alamat_jalan" class="w3-input w3-border" x="" oninput="ketik_kapital(this)">
          <br>File Pendukung:
                  <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
                  <table class="w3-table-all w3-tiny">
                  <tbody><tr>
                      <td class="preview_kk"></td>
                  </tr><tr>
                      <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" data-formulircpdb="cpdb_id_file_kk" disabled>
                      </td>
                  </tr>
                  </tbody></table>
          </div></div><div class="w3-card-4 w3-padding w3-margin-top">
                        <h4 class="w3-center w3-card-2 w3-aqua">Data Riwayat PAUD/TK/RA</h4>
    
                          <label for="cpdb_npsn">NPSN (Nomor Pokok Sekolah Nasional)</label>
                            <input type="text" data-formulircpdb="cpdb_npsn" id="cpdb_npsn" class="w3-input w3-border"> 
                        <label for="cpdb_nisn">NISN (Nomor Induk Siswa Nasional)</label>
                            <input type="text" data-formulircpdb="cpdb_nisn" id="cpdb_nisn" class="w3-input w3-border">
                        <label for="cpdb_sekolahasal">Nama Sekolah Asal PAUD/TK/RA</label>
                            <input type="text" data-formulircpdb="cpdb_sekolahasal" id="cpdb_sekolahasal" class="w3-input w3-border" oninput="ketik_kapital(this)"> 
                        
                        File Pendukung: 
                          <ul class="w3-ul">
                              <li>1. Ijazah/STSB PAUD/TK
                                  <label for="up_ijazah" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                              </li>
                          </ul>
                          
                          <table class="w3-table-all w3-tiny">
                              <tbody><tr>
                                  <td class="preview_ijazah"></td>
                              </tr>
                              <tr>
                                <td><input type="text" class="cpdb_id_file_ijazah w3-input" id="cpdb_id_file_ijazah" data-formulircpdb="cpdb_id_file_ijazah" disabled>
                                </td>
                              </tr>
                          </tbody></table></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-aqua">Data Orang Tua</h4>
                          <h5 class="w3-pale-green">Data Ayah Kandung</h5> 
                            <label for="ortu_nama_ayah">Nama Ayah</label>
                                <input type="text" id="ortu_nama_ayah" data-formulircpdb="ortu_nama_ayah" class="w3-input w3-border" oninput="ketik_kapital(this)">
                            <label for="ortu_nik_ayah">NIK Ayah</label>
                                <input type="text" id="ortu_nik_ayah" data-formulircpdb="ortu_nik_ayah" class="w3-input w3-border"><br>
                            <label for="ortu_ttl_ayah">Tanggal Lahir Ayah</label>
                                <input type="date" data-formulircpdb="ortu_ttl_ayah" value="1987-07-01" id="ortu_ttl_ayah" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_ayah')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_ayah"></sub><br> 
                            <label for="ortu_pendidikan_ayah">Pendidikan Ayah</label>
                                <select id="ortu_pendidikan_ayah" data-formulircpdb="ortu_pendidikan_ayah" class="w3-select w3-border">
                                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                                    <option value="Putus SD">Putus SD</option>
                                    <option value="SD Sederajat">SD Sederajat</option>
                                    <option value="SMP Sederajat">SMP Sederajat</option>
                                    <option value="SMA Sederajat">SMA Sederajat</option>
                                    <option value="D1">D1</option>
                                    <option value="D2">D2</option>
                                    <option value="D3">D3</option>
                                    <option value="D4/S1">D4/S1</option>
                                    <option value="S2">S2</option>
                                    <option value="S2">S3</option>
                                </select><br><br>
                                
                            <label for="ortu_pekerjaan_ayah">Pekerjaan Ayah</label> 
                                <select id="ortu_pekerjaan_ayah" data-formulircpdb="ortu_pekerjaan_ayah" class="w3-select w3-border">
                                    <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                                    <option value="Tidak Bekerja">Tidak bekerja</option>
                                    <option value="Nelayan">Nelayan</option>
                                    <option value="Petani">Petani</option>
                                    <option value="Peternak">Peternak</option>
                                    <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                                    <option value="Karyawan Swasta">Karyawan Swasta</option>
                                    <option value="Pedagang Kecil">Pedagang Kecil</option>
                                    <option value="Pedagang Besar">Pedagang Besar</option>
                                    <option value="Wiraswasta">Wiraswasta</option>
                                    <option value="Wirausaha">Wirausaha</option>
                                    <option value="Buruh">Buruh</option>
                                    <option value="Pensiunan">Pensiunan</option>
                                    <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                                    <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                                    <option value="Meninggal Dunia">Meninggal Dunia</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select><br><br>
                            <label for="ortu_penghasilan_ayah">Penghasilan Ayah</label>
                                <select id="ortu_penghasilan_ayah" data-formulircpdb="ortu_penghasilan_ayah" class="w3-select w3-border">
                                    <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                                    <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                                    <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                                    <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                                    <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                                    <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                                    <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                                    <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                                    <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                                    <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                                    <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select><br><br>
                          <label for="ortu_abk_ayah">Ayah Berkebutuhan Khusus?</label> 
                              <select id="ortu_abk_ayah" data-formulircpdb="ortu_abk_ayah" class="w3-select w3-border">
                                <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                                <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option>
                                <option value="RUNGU (B)">Rungu (B)</option>
                                <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                                <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                                <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                                <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                                <option value="INDIGO (O)">Indigo (O)</option>
                                <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                                <option value="AUTIS (Q)">Autis (Q)</option>
                                <option value="LARAS (E)">Laras ( E)</option>
                                <option value="WICARA (F)">Wicara (F)</option>
                                <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                                <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                                <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                                <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                                <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                              </select><br><br> 
    
                        <label for="ortu_hp_ayah">No. HP/WA Ayah</label>
                            <input type="tel" id="ortu_hp_ayah" data-formulircpdb="ortu_hp_ayah" class="w3-input w3-border"></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-pale-green"> Data Ibu Kandung</h5>
                      <label for="ortu_nama_ibu">Nama Ibu</label>
                      <input type="text" id="ortu_nama_ibu" data-formulircpdb="ortu_nama_ibu" class="w3-input w3-border" oninput="ketik_kapital(this)"><br>
                      <label for="ortu_nik_ibu">NIK Ibu</label>
                      <input type="text" id="ortu_nik_ibu" data-formulircpdb="ortu_nik_ibu" class="w3-input w3-border"><br><br> 
                      <label for="ortu_ttl_ibu">Tanggal Lahir Ibu</label>
                      <input type="date" data-formulircpdb="ortu_ttl_ibu" value="1987-07-01" id="ortu_ttl_ibu" class="w3-input w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Ibu')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Ibu"></sub> 
                      <label for="ortu_pendidikan_ibu">Pendidikan Ibu</label>
                      <select id="ortu_pendidikan_ibu" data-formulircpdb="ortu_pendidikan_ibu" class="w3-select w3-border">
                          <option value="Tidak Sekolah">Tidak Sekolah</option>
                          <option value="Putus SD">Putus SD</option>
                          <option value="SD Sederajat">SD Sederajat</option>
                          <option value="SMP Sederajat">SMP Sederajat</option>
                          <option value="SMA Sederajat">SMA Sederajat</option>
                          <option value="D1">D1</option> 
                          <option value="D2">D2</option>
                          <option value="D3">D3</option>
                          <option value="D4/S1">D4/S1</option>
                          <option value="S2">S2</option>
                          <option value="S2">S3</option>
                      </select><br><br>
                  <label for="ortu_pekerjaan_ibu">Pekerjaan Ibu</label>
                  <select id="ortu_pekerjaan_ibu" data-formulircpdb="ortu_pekerjaan_ibu" class="w3-select w3-border">
                      <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                      <option value="Tidak Bekerja">Tidak bekerja</option>
                      <option value="Nelayan">Nelayan</option>
                      <option value="Petani">Petani</option>
                      <option value="Peternak">Peternak</option>
                      <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                      <option value="Karyawan Swasta">Karyawan Swasta</option>
                      <option value="Pedagang Kecil">Pedagang Kecil</option>
                      <option value="Pedagang Besar">Pedagang Besar</option>
                      <option value="Wiraswasta">Wiraswasta</option>
                      <option value="Wirausaha">Wirausaha</option>
                      <option value="Buruh">Buruh</option>
                      <option value="Pensiunan">Pensiunan</option>
                      <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                      <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                      <option value="Meninggal Dunia">Meninggal Dunia</option>
                      <option value="Lainnya">Lainnya</option>
                  </select><br><br>
                  
                  <label for="ortu_penghasilan_ibu">Penghasilan Ibu</label>
                  <select id="ortu_penghasilan_ibu" data-formulircpdb="ortu_penghasilan_ibu" class="w3-select w3-border">
                      <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                      <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                      <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                      <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                      <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                      <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                      <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                      <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                      <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                      <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                      <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                      <option value="Lainnya">Lainnya</option>
                  </select><br><br>
                  
                  <label for="ortu_abk_ibu">Ibu Berkebutuhan Khusus?</label>
                  <select id="ortu_abk_ibu" data-formulircpdb="ortu_abk_ibu" class="w3-select w3-border">
                      <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                      <option value="TIDAK">Tidak</option>
                      <option value="NETRA (A)">Netra (A)</option>
                      <option value="RUNGU (B)">Rungu (B)</option>
                      <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                      <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                      <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                      <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                      <option value="INDIGO (O)">Indigo (O)</option>
                      <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                      <option value="AUTIS (Q)">Autis (Q)</option>
                      <option value="LARAS (E)">Laras ( E)</option>
                      <option value="WICARA (F)">Wicara (F)</option>
                      <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                      <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                      <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                      <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                      <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                  </select><br><br>
                  
                  <label for="ortu_hp_ibu">No. HP/WA Ibu</label>
                      <input type="tel" id="ortu_hp_ibu" data-formulircpdb="ortu_hp_ibu" class="w3-input w3-border"></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-pale-green">Data Wali</h5>
                    <label for="ortu_nama_wali">Nama wali</label>
                        <input type="text" id="ortu_nama_wali" data-formulircpdb="ortu_nama_wali" class="w3-input w3-border" oninput="ketik_kapital(this)">
                    <label for="ortu_nik_wali">NIK Wali</label>
                        <input type="text" id="ortu_nik_wali" data-formulircpdb="ortu_nik_wali" class="w3-input w3-border"><br>
                    <label for="ortu_ttl_wali">Tanggal Lahir Wali</label>
                        <input type="date" data-formulircpdb="ortu_ttl_wali" value="1987-07-01" id="ortu_ttl_wali" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Wali')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Wali"></sub><br> 
                    
                    <label for="ortu_pendidikan_wali">Pendidikan Wali</label>
                    <select id="ortu_pendidikan_wali" data-formulircpdb="ortu_pendidikan_wali" class="w3-select w3-border">
                        <option value="Tidak Sekolah">Tidak Sekolah</option>
                        <option value="Putus SD">Putus SD</option>
                        <option value="SD Sederajat">SD Sederajat</option>
                        <option value="SMP Sederajat">SMP Sederajat</option>
                        <option value="SMA Sederajat">SMA Sederajat</option>
                        <option value="D1">D1</option> <option value="D2">D2</option>
                        <option value="D3">D3</option> <option value="D4/S1">D4/S1</option>
                        <option value="S2">S2</option> <option value="S2">S3</option>
                    </select><br><br>
                    
                    <label for="ortu_pekerjaan_wali">Pekerjaan Wali</label>
                    <select id="ortu_pekerjaan_wali" data-formulircpdb="ortu_pekerjaan_wali" class="w3-select w3-border">
                        <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                        <option value="Tidak Bekerja">Tidak bekerja</option>
                        <option value="Nelayan">Nelayan</option>
                        <option value="Petani">Petani</option>
                        <option value="Peternak">Peternak</option>
                        <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                        <option value="Karyawan Swasta">Karyawan Swasta</option>
                        <option value="Pedagang Kecil">Pedagang Kecil</option>
                        <option value="Pedagang Besar">Pedagang Besar</option>
                        <option value="Wiraswasta">Wiraswasta</option>
                        <option value="Wirausaha">Wirausaha</option>
                        <option value="Buruh">Buruh</option>
                        <option value="Pensiunan">Pensiunan</option>
                        <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                        <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                        <option value="Meninggal Dunia">Meninggal Dunia</option>
                        <option value="Lainnya">Lainnya</option>
                    </select><br><br>
                    
                    <label for="ortu_penghasilan_wali">Penghasilan Wali</label>
                    <select id="ortu_penghasilan_wali" data-formulircpdb="ortu_penghasilan_wali" class="w3-select w3-border">
                        <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                        <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                        <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                        <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                        <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                        <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                        <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                        <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                        <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                        <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                        <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                        <option value="Lainnya">Lainnya</option>
                    </select><br><br>
                    
                    <label for="ortu_abk_wali">Wali Berkebutuhan Khusus?</label>
                    <select id="ortu_abk_wali" data-formulircpdb="ortu_abk_wali" class="w3-select w3-border">
                        <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                        <option value="TIDAK">Tidak</option>
                        <option value="NETRA (A)">Netra (A)</option>
                        <option value="RUNGU (B)">Rungu (B)</option>
                        <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                        <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                        <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                        <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                        <option value="INDIGO (O)">Indigo (O)</option>
                        <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                        <option value="AUTIS (Q)">Autis (Q)</option>
                        <option value="LARAS (E)">Laras ( E)</option>
                        <option value="WICARA (F)">Wicara (F)</option>
                        <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                        <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                        <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                        <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                        <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                    </select></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-pale-red">FILE PENDUKUNG</h4><table class="w3-table-all w3-small"><tbody><tr>
                            <td>STSB/IJASAH PAUD <label for="up_filependukung_0" class="w3-button w3-right w3-green w3-small">
                            <i class="fa fa-upload"></i> Upload </label> 
                            </td>
                            </tr>
    
                            <tr>
                                <td class="preview_filependukung_0"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_0" data-formulircpdb="cpdb_id_file_filependukung_0" disabled>
                            </td>
                        </tr>
                        <tr class="w3-dark-white w3-pale-green"><td></td>
                        </tr><tr>
                            <td>SPTJM <label for="up_filependukung_1" class="w3-button w3-right w3-green w3-small">
                            <i class="fa fa-upload"></i> Upload </label> 
                            </td>
                            </tr>
    
                            <tr>
                                <td class="preview_filependukung_1"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_1" data-formulircpdb="cpdb_id_file_filependukung_1" disabled>
                            </td>
                        </tr>
                        <tr class="w3-dark-white w3-pale-green"><td></td>
                        </tr><tr>
                            <td>KTP <label for="up_filependukung_2" class="w3-button w3-right w3-green w3-small">
                            <i class="fa fa-upload"></i> Upload </label> 
                            </td>
                            </tr>
    
                            <tr>
                                <td class="preview_filependukung_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_2" data-formulircpdb="cpdb_id_file_filependukung_2" disabled>
                            </td>
                        </tr>
                        <tr class="w3-dark-white w3-pale-green"><td></td>
                        </tr><tr>
                            <td>Poto Calon Peserta Didik Baru <label for="up_filependukung_3" class="w3-button w3-right w3-green w3-small">
                            <i class="fa fa-upload"></i> Upload </label> 
                            </td>
                            </tr>
    
                            <tr>
                                <td class="preview_filependukung_3"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_3" data-formulircpdb="cpdb_id_file_filependukung_3" disabled>
                            </td>
                        </tr>
                        <tr class="w3-dark-white w3-pale-green"><td></td>
                        </tr> </tbody></table></div><div class="w3-hide">
                <input type="file" id="up_akta" onchange="uploadfile(this)">
                    <input type="file" id="up_kk" onchange="uploadfile(this)">
                    <input type="file" id="up_domisili" onchange="uploadfile(this)">
                    <input type="file" id="up_ijazah" onchange="uploadfile(this)"><input type="file" id="up_filependukung_0" onchange="uploadfile(this)"> kode 0<input type="file" id="up_filependukung_1" onchange="uploadfile(this)"> kode 1<input type="file" id="up_filependukung_2" onchange="uploadfile(this)"> kode 2<input type="file" id="up_filependukung_3" onchange="uploadfile(this)"> kode 3</div>
                <br>
                    <div class="w3-card-4 w3-container">
                        <ul class="w3-ul">
                    <li>
                        <label for="setuju">
                            <input type="checkbox" class="w3-check ceksetuju" id="setuju" value="Setuju" > Dengan ini menyatakan bahwa data yang saya isi dan unggah benar-benar data yang sebenarnya.</label>
                    </li><li><label for="takluk">
                    <input type="checkbox" id="takluk" class="w3-check ceksetuju" > Anda setuju dan tunduk pada peraturan PPDB SD di sekolah kami (SDN Cipayung 1) dan menerima sepenuhnya sistem seleksi yang telah ditetapkan melalui pendaftaran di web ini.
                    </label>
                    </li>
                    <li>
                    <label for="verifikasi">
                    <input type="checkbox" id="verifikasi" class="w3-check ceksetuju" >
                    Anda setuju bahwa Tim Verifikasi/Panitia PPDB berhak menolak/mengembalikan apabila data  identitas CPDB tidak sesuai dengan dokumen Akta Kelahiran, dan/atau alamat CPDB tidak sesuai dengan dokumen Kartu Keluarga (bukan Surat Keterangan Domisili)
                    </label></li>    
                    <li><label for="gugat">
                    <input type="checkbox" id="gugat" class="w3-check ceksetuju" > Anda setuju bahwa keputusan hasil seleksi ini tidak dapat diganggu gugat
                    </label>
                        </li>
                        </ul>
                        <button disabled class="w3-green w3-input w3-button w3-round-xxlarge kirimformulir" onclick="kirimformulirdikembalikan(this,2,${row},'${idpendaftar}')" style="width:60%;margin:0 auto">DAFTAR</button><hr>
                    </div>
                    <hr class="w3-clear">`
    divform.innerHTML = html;
    let elemenjalur = document.querySelectorAll("[data-formulircpdb]");
    for(let i = 0 ; i < elemenjalur.length ; i++){
      let el = elemenjalur[i];
      let key = el.getAttribute("data-formulircpdb");
      let val = data[key];
      if(el.type == "date"){
        el.value = val ==""?"":StringTanggalnol(new Date(val));
      }else{
        el.value = val;
      }
      // let val = dataT[key]
      //                       if(inputan.type == "date"){
      //                           inputan.value = val ==""?"":StringTanggalnol(new Date(val));
      //                       }else if(inputan.type =="select-one"){
      //                           inputan.value = val;
      //                       }else{
      //                           inputan.value = val;
      //                       }
      //console.log(el, key, data[key],el.hasAttribute("disabled"))
    }
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
    
  }else{
    let riwayat = JSON.parse(data.riwayat_pendaftaran);
    let idsekolahtolak = riwayat.map(s => s.tujuan_mendaftar);
    let id_cpdb = data.baris_terminal;
    let html = ``;
    //start
    html += `<div class="w3-row-padding w3-card-4 w3-margin-top ">`;
    html +=`Silakan memilih tujuan sekolah lain untuk mencoba mendaftar kembali (Sekolah berwarna merah tidak bisa dipilih):`
    html +=`<div class=" w3-col l12 s12 w3-center">Pilih Sekolah</div>`;
        for (let i = 0 ; i <classCollection.length ; i++){
          let id = classCollection[i].id;
          let setting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
          //console.log(id, setting,idsekolahtolak.indexOf(id))

          
          let namasekolah = setting[0].nama_sekolah;
          let kuota = setting[0].total_cpdb;
          let splitkelas = classCollection[i].img;
          let alamat = setting[0].alamat_kelurahan + ",<br>RT " + setting[0].alamat_rt + ", RW " + setting[0].alamat_rw;
          let tekstitle = `Alamat: ${alamat}`
          if(idsekolahtolak.indexOf(id)>-1){
                let ket_riwayat = riwayat.filter(s => s.tujuan_mendaftar == id)[0].ket_status;
                let ket_status = riwayat.filter(s => s.tujuan_mendaftar == id)[0].id_status;
                html +=`<div class="w3-col l3 s6 w3-border w3-round w3-red w3-btn w3-hover-green" title="${tekstitle}" style="margin:5px 0" onclick="alert('Maaf, Anda pernah ${ket_status} di sekolah ini dengan keterangan ${ket_riwayat}, silakan pilih sekolah lain')">`;
                html +=`<div class="w3-row w3-tiny w3-round-large">`;
                  html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4  w3-hide-small w3-hide-medium" style="height:65px">`;
                  html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
                  html +=`<div class="w3-col l8 s12">${namasekolah.toUpperCase()}</div>`;
                  html +=`<div class="w3-col l8 s12">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span>`;
                  html +=`</div>`;
                  html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
                html +=`</div>`;
              html +=`</div>`;
          }else{

          
            html +=`<div class="w3-col l3 s6 w3-border w3-round w3-btn w3-hover-green" title="${tekstitle}" style="margin:5px 0" onclick="cpdbmemilihsekolah_daripilihanPernahdaftar(${id},${id_cpdb})">`;
              html +=`<div class="w3-row w3-tiny w3-round-large">`;
                html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4  w3-hide-small w3-hide-medium" style="height:65px">`;
                html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
                html +=`<div class="w3-col l8 s12">${namasekolah.toUpperCase()}</div>`;
                html +=`<div class="w3-col l8 s12">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span>`;
                html +=`</div>`;
                html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
              html +=`</div>`;
            html +=`</div>`;
          }

        }
  html +=`</div>`;
    //end
    divform.innerHTML = html;

  }
      // html +=`Maaf, Ananda CPDB pernah mendaftar`

      // html +=`Maaf, CPDB Sebelumnya pernah mendaftar di <b>${dbSetting[0].nama_sekolah}</b>, sayangnya status pendaftaran`;
      // html +=`<b>${data.id_status}</b>.`;
      // if(data.id_status == "Dikembalikan"){
      //   html +=`Ananda masih berkesempatan mendaftarkan diri di <b>${dbSetting[0].nama_sekolah}</b> atau sekolah lainnya. Silakan lengkapi dan penuhi seluruh persyaratan yang dibutuhkan kemudian pilih sekolah tujuan. `
      //   html +=` Berikut ini adalah riwayat pendaftaran sekolah Anda:`
      // }else {
      //   html +=` Anda masih berkesempatan mendaftarkan ke sekolah tujuan lain selain ${dbSetting[0].nama_sekolah}.<br>`;
      //   html +=` Berikut ini adalah riwayat pendaftaran sekolah Anda:`

      // }
      // // html +=`<table class="w3-table-all w3-tiny">`;
      //   html +=`<thead><tr class="w3-white">`;
      //     html +=`<th></th><th>Nama Pendaftar</th><th colspan="2">: ${data.nama_cpdb}</th></tr><tr class="w3-white">`;
      //     html +=`<th></th><th>NIK</th><th colspan="2">: ${data.cpdb_nik}</th>`;
      //     html +=`</tr><tr><th colspan="4" class="w3-center w3-pale-green">Riwayat Pendaftaran</th></tr><tr>`;
      //     html +=`<th class="w3-border">No</th><th class="w3-border">Sekolah Tujuan</th><th class="w3-border">Status</th><th class="w3-border">Keterangan</th>`;
      //   html +=`</tr></thead>`;
      //   html+=`<tbody>`;
      // for(let i = 0 ; i <riwayat.length ; i++){
      //   let idd = riwayat[i].tujuan_mendaftar;
      //   let sekolahtujuan = db_settingppdbsekolah.filter(s=> s.id_sekolah == idd);
      //   html +=`<tr>`;
      //     html +=`<td class="w3-border">${(i+1)}</td>`;
      //     html +=`<td class="w3-border">${sekolahtujuan[0].nama_sekolah}</td>`;
      //     html +=`<td class="w3-border">${riwayat[i].id_status}</td>`;
      //     html +=`<td class="w3-border">${riwayat[i].ket_status}</td>`;
      //   html +=`</tr>`;
      // }
      // html +=`</tbody></table><br>`;
      // html +=`</div`;

     // divform.innerHTML = html;

}

const html_kesempatankeduamendaftar = (data) =>{
  let divform = document.querySelector(".cekformulircpdbawal");
  let html = "";
    html += `<div class="w3-row-padding w3-card-4 w3-margin-top ">`;
    html +=`<div class=" w3-col l12 s12 w3-center">Pilih Sekolah</div>`;
  for (let i = 0 ; i <classCollection.length ; i++){
    let id = classCollection[i].id;
    let setting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
    let namasekolah = setting[0].nama_sekolah;
    let kuota = setting[0].total_cpdb;
    let splitkelas = classCollection[i].img;
    let alamat = setting[0].alamat_kelurahan + ",<br>RT " + setting[0].alamat_rt + ", RW " + setting[0].alamat_rw;
    let tekstitle = `Alamat: ${alamat}`

    html +=`<div class="w3-col l3 s6 w3-border w3-round w3-btn w3-hover-green" title="${tekstitle}" style="margin:5px 0" onclick="cpdbmemilihsekolah_daripilihan(${id})">`;
      html +=`<div class="w3-row w3-tiny w3-round-large">`;
        html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4  w3-hide-small w3-hide-medium" style="height:65px">`;
        html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
        html +=`<div class="w3-col l8 s12">${namasekolah.toUpperCase()}</div>`;
        html +=`<div class="w3-col l8 s12">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span>`;
        html +=`</div>`;
        html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
      html +=`</div>`;
    html +=`</div>`;

  }
  html +=`</div>`;
  divform.innerHTML = html;
  let divform2 = document.querySelector(".tambahanformformulircpdbawal");
      divform2.innerHTML ="";
}

const html_dilaranglanjutdaftar = (data) =>{
  let riwayat = JSON.parse(data.riwayat_pendaftaran);
      let id = data.tujuan_mendaftar;
      let dbSetting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
      let divform = document.querySelector(".tambahanformformulircpdbawal");
      let html =`<div class="w3-card-4 w3-container w3-pale-red w3-margin-top">`;
      
      html +=`<b>${data.id_status}</b> di sekolah tujuan <b>${dbSetting[0].nama_sekolah}</b>`
      html +=`, Anda bisa mendaftarkan ke sekolah tujuan lain setelah proses di sekolah tersebut selesai (Keterangan: Keluar Jurnal, Ditolak, atau Dikembalikan).`;
      html +=`<table class="w3-table-all w3-tiny">`;
        html +=`<thead><tr class="w3-white">`;
          html +=`<th></th><th>Nama Pendaftar</th><th colspan="2">: ${data.nama_cpdb}</th></tr><tr class="w3-white">`;
          html +=`<th></th><th>NIK</th><th colspan="2">: ${data.cpdb_nik}</th>`;
          html +=`</tr><tr><th colspan="4" class="w3-center w3-pale-green">Riwayat Pendaftaran</th></tr><tr>`;
          html +=`<th class="w3-border">No</th><th class="w3-border">Sekolah Tujuan</th><th class="w3-border">Status</th><th class="w3-border">Keterangan</th>`;
        html +=`</tr></thead>`;
        html+=`<tbody>`;
      for(let i = 0 ; i <riwayat.length ; i++){
        let idd = riwayat[i].tujuan_mendaftar;
        let sekolahtujuan = db_settingppdbsekolah.filter(s=> s.id_sekolah == idd);
        html +=`<tr>`;
          html +=`<td class="w3-border">${(i+1)}</td>`;
          html +=`<td class="w3-border">${sekolahtujuan[0].nama_sekolah}</td>`;
          html +=`<td class="w3-border">${riwayat[i].id_status}</td>`;
          html +=`<td class="w3-border">${riwayat[i].ket_status}</td>`;
        html +=`</tr>`;
      }
      html +=`</tbody></table><br>`;
      html +=`</div`;
      divform.innerHTML = html;
}
const html_cpdbpilihsekolah = ()=>{
  let divform = document.querySelector(".cekformulircpdbawal");
  let html = "";
    html += `<div class="w3-row-padding w3-card-4 w3-margin-top ">`;
    html +=`<div class=" w3-col l12 s12 w3-center">Pilih Sekolah</div>`;
  for (let i = 0 ; i <classCollection.length ; i++){
    let id = classCollection[i].id;
    let setting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
    let namasekolah = setting[0].nama_sekolah;
    let kuota = setting[0].total_cpdb;
    let splitkelas = classCollection[i].img;
    let alamat = setting[0].alamat_kelurahan + ",<br>RT " + setting[0].alamat_rt + ", RW " + setting[0].alamat_rw;
    let tekstitle = `Alamat: ${alamat}`

    html +=`<div class="w3-col l3 s6 w3-border w3-round w3-btn w3-hover-green" title="${tekstitle}" style="margin:5px 0" onclick="cpdbmemilihsekolah_daripilihan(${id})">`;
      html +=`<div class="w3-row w3-tiny w3-round-large">`;
        html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4  w3-hide-small w3-hide-medium" style="height:65px">`;
        html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
        html +=`<div class="w3-col l8 s12">${namasekolah.toUpperCase()}</div>`;
        html +=`<div class="w3-col l8 s12">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span>`;
        html +=`</div>`;
        html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
      html +=`</div>`;
    html +=`</div>`;

  }
  html +=`</div>`;
  divform.innerHTML = html;
  let divform2 = document.querySelector(".tambahanformformulircpdbawal");
      divform2.innerHTML ="";
}
const cpdbmemilihsekolah_daripilihan = (id) =>{
  let setting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);

  let divform = document.querySelector(".cekformulircpdbawal");
  divform.innerHTML = `<img src="/img/barloading.gif" class="w3-margin-top"> ...`;
  
  let namasekolah = setting[0].nama_sekolah;
  let kuota = setting[0].total_cpdb;
  let splitkelas = classCollection.filter(s => s.id == id)[0].img;
  let alamat = setting[0].alamat_kelurahan + " RT/RW " + setting[0].alamat_rt +"/" +setting[0].alamat_rw;
  let tekstitle = `Alamat: ${alamat}`;
  
  let html ="";
  html +=`<div class="w3-row w3-card-4 w3-margin-top">`;
    html +=`<div class="w3-col l12 s12 w3-center w3-border-bottom w3-border-black">Memilih Jalur PPDB</div>`;
    html +=`<div class="w3-col l4 s12 w3-border-right"><div class="w3-center">Anda Memilih Sekolah:</div>`;
    
        
          html +=`<div class="w3-row w3-tiny w3-border w3-card-4 w3-margin w3-round-xlarge">`;
            html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4" style="height:65px">`;
            html +=`<div class="w3-col s8 w3-hide-large w3-margin-top"></div>`;
            html +=`<div class="w3-col l8 s8 w3-center">${namasekolah.toUpperCase()}</div>`;
            html +=`<div class="w3-col l8 s8 w3-center">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span></div>`;
            html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
          html +=`</div>`;
          html +=`<div class="w3-center w3-tiny">Atau</div>`;
          html +=`<div class="w3-center"><div class="w3-tiny w3-border w3-card-4 w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN</div></div>`;
  
  html +=`</div>`;

  html +=`<div class="w3-col l8 s12">`;
    html +=`<div class="w3-center">Silakan Pilih Jalur Pendaftaran</div>`;
    html+=`<div id="cekjalurppdb_idsekolahini" class="w3-margin-bottom"><img src="/img/barloading.gif"></div>`;
  html +=`</div>`;
  
  // html +=`<div class="w3-col l12 s12 w3-border-right"></div>`
  // html +=`<div class="w3-col l4 s12 w3-border-right">`;
  // //html +=`<div class="w3-center w3-tiny w3-border w3-card-4 w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN`;
  // // html +=`</div>`;
  // html +=`</div>`;

  html +=`</div>`;
  divform.innerHTML = html;
  let hasilcek_html = document.getElementById("cekjalurppdb_idsekolahini");
  
  fetch(terminal + "?action=settingPerSekolah")
      .then(m => m.json())
      .then(r => {
        
        db_settingppdbsekolah = r.setting;
        let idsekolahini = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
        let dbsekolahini = idsekolahini[0]
        let koleksi_jalur = Object.keys(dbsekolahini).filter(s => s.indexOf("sistem_")>-1);//.map(m => [m, dbsekolahini[m]])
        let t = `<div class="w3-center">`
        for(let i = 0 ; i < koleksi_jalur.length ; i++){
          let keyjalur = koleksi_jalur[i]
          let dbjalur = dbsekolahini[keyjalur];
          let teksjalur = keyjalur.split("_")[1];//.join().toUpperCase()
          if(dbjalur == "Aktif"){
            t+=`<button class="w3-btn w3-border w3-pale-green w3-small w3-round w3-margin" onclick="html_formulir('${teksjalur}',${id},'${namasekolah}')">${teksjalur == "ptk"?"Pindah Kerja/PTK":teksjalur.toUpperCase()}</button>`;
          }
        }
        let forbiden = "";
        forbiden +=`<div class="w3-container w3-tiny w3-center w3-red">Maaf, Formulir Pendaftaran di<br><br><b> ${namasekolah} </b><br><br> sedang tidak dibuka. Kunjungi sekolah lain atau lihat jadwal pendaftaran.<br><br>`;
        forbiden +=`<div class="w3-center w3-tiny w3-border w3-card-4 w3-blue w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN</div>`;
        forbiden +=`</div>`;
        t +=`</div>`
        if(dbsekolahini.setingan_formdaftar){
          hasilcek_html.innerHTML = t;
        }else{
          hasilcek_html.innerHTML = forbiden;
        }
        let divform2 = document.querySelector(".tambahanformformulircpdbawal");
        divform2.innerHTML ="";
      }).catch(er => console.log(er))

}
const cpdbmemilihsekolah_daripilihanPernahdaftar = (id, id_cpdb) =>{
  let setting = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);

  let divform = document.querySelector(".cekformulircpdbawal");
  divform.innerHTML = `<img src="/img/barloading.gif" class="w3-margin-top"> ...`;
  
  let namasekolah = setting[0].nama_sekolah;
  let kuota = setting[0].total_cpdb;
  let splitkelas = classCollection.filter(s => s.id == id)[0].img;
  let alamat = setting[0].alamat_kelurahan + " RT/RW " + setting[0].alamat_rt +"/" +setting[0].alamat_rw;
  let tekstitle = `Alamat: ${alamat}`;
  
  let html ="";
  html +=`<div class="w3-row w3-card-4 w3-margin-top">`;
    html +=`<div class="w3-col l12 s12 w3-center w3-border-bottom w3-border-black">Memilih Jalur PPDB</div>`;
    html +=`<div class="w3-col l4 s12 w3-border-right"><div class="w3-center">Anda Memilih Sekolah:</div>`;
    
        
          html +=`<div class="w3-row w3-tiny w3-border w3-card-4 w3-margin w3-round-xlarge">`;
            html +=`<img src="/img/${splitkelas}" class="w3-col l4 s4" style="height:65px">`;
            html +=`<div class="w3-col s8 w3-hide-large w3-margin-top"></div>`;
            html +=`<div class="w3-col l8 s8 w3-center">${namasekolah.toUpperCase()}</div>`;
            html +=`<div class="w3-col l8 s8 w3-center">Kuota Total: ${kuota}<span class="w3-tiny"><br>${tekstitle}</span></div>`;
            html +=`<div class="w3-col s12 w3-hide-large w3-margin-top"></div>`;
          html +=`</div>`;
          html +=`<div class="w3-center w3-tiny">Atau</div>`;
          html +=`<div class="w3-center"><div class="w3-tiny w3-border w3-card-4 w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolahPernahdaftar()">PILIH SEKOLAH LAIN</div></div>`;
  
  html +=`</div>`;

  html +=`<div class="w3-col l8 s12">`;
    html +=`<div class="w3-center">Silakan Pilih Jalur Pendaftaran</div>`;
    html+=`<div id="cekjalurppdb_idsekolahini" class="w3-margin-bottom"><img src="/img/barloading.gif"></div>`;
  html +=`</div>`;
  
  // html +=`<div class="w3-col l12 s12 w3-border-right"></div>`
  // html +=`<div class="w3-col l4 s12 w3-border-right">`;
  // //html +=`<div class="w3-center w3-tiny w3-border w3-card-4 w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN`;
  // // html +=`</div>`;
  // html +=`</div>`;

  html +=`</div>`;
  divform.innerHTML = html;
  let hasilcek_html = document.getElementById("cekjalurppdb_idsekolahini");
  
  fetch(terminal + "?action=settingPerSekolah")
      .then(m => m.json())
      .then(r => {
        
        db_settingppdbsekolah = r.setting;
        let idsekolahini = db_settingppdbsekolah.filter(s=> s.id_sekolah == id);
        let dbsekolahini = idsekolahini[0]
        let koleksi_jalur = Object.keys(dbsekolahini).filter(s => s.indexOf("sistem_")>-1);//.map(m => [m, dbsekolahini[m]])
        let t = `<div class="w3-center">`
        for(let i = 0 ; i < koleksi_jalur.length ; i++){
          let keyjalur = koleksi_jalur[i]
          let dbjalur = dbsekolahini[keyjalur];
          let teksjalur = keyjalur.split("_")[1];//.join().toUpperCase()
          if(dbjalur == "Aktif"){
            t+=`<button class="w3-btn w3-border w3-pale-green w3-small w3-round w3-margin" onclick="html_formulirPernahdaftar('${id_cpdb}','${teksjalur}',${id},'${namasekolah}')">${teksjalur == "ptk"?"Pindah Kerja/PTK":teksjalur.toUpperCase()}</button>`;
          }
        }
        let forbiden = "";
        forbiden +=`<div class="w3-container w3-tiny w3-center w3-red">Maaf, Formulir Pendaftaran di<br><br><b> ${namasekolah} </b><br><br> sedang tidak dibuka. Kunjungi sekolah lain atau lihat jadwal pendaftaran.<br><br>`;
        forbiden +=`<div class="w3-center w3-tiny w3-border w3-card-4 w3-blue w3-margin w3-btn w3-padding" onclick="html_cpdbpilihsekolah()">PILIH SEKOLAH LAIN</div>`;
        forbiden +=`</div>`;
        t +=`</div>`
        if(dbsekolahini.setingan_formdaftar){
          hasilcek_html.innerHTML = t;
        }else{
          hasilcek_html.innerHTML = forbiden;
        }
        let divform2 = document.querySelector(".tambahanformformulircpdbawal");
        divform2.innerHTML ="";
      }).catch(er => console.log(er))

}
const html_formulirPernahdaftar = (id_cpdb,teksjalur,id,namasekolah) =>{
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  let html ="";
  html+=`<div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-pale-red">Pilihan Sekolah dan Jalur yang Dipilih:</h4>Kode Sekolah Tujuan:<input type="number" data-formulircpdb="tujuan_mendaftar" class="w3-input w3-border w3-light-grey" value="2" disabled=""><br>Tujuan Sekolah: <span class="w3-input w3-border w3-light-grey">SDN CIPAYUNG 1</span><br>Jalur yang Dipilih:<input type="text" data-formulircpdb="jalur_cpdb" id="jalur_cpdb" class="w3-input w3-border w3-light-grey" value="ZONASI" disabled=""><br></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-blue">Form Pendaftaran Jalur zonasi</h4><label for="cpdb_umur">Skor Umur:<input type="text" data-formulircpdb="cpdb_umur" id="cpdb_umur" class="w3-border" style="width:80px" value="4.0012" disabled=""></label><br><br><label for="cpdb_jk">Jenis Kelamin: <select id="cpdb_jk" data-formulircpdb="cpdb_jk" class="w3-select w3-light-grey"><option value="L">Laki-laki</option><option value="P">Perempuan</option></select></label><br><br><label for="cpdb_agama">Agama yang dianut CPDB:<select id="cpdb_agama" data-formulircpdb="cpdb_agama" class="w3-border w3-select w3-light-gray"><option value="">Pilih Agama yang Dianut?</option><option value="ISLAM">ISLAM</option><option value="KRISTEN">KRISTEN(PROTESTAN)</option><option value="KATHOLIK">KATHOLIK</option><option value="HINDU">HINDU</option><option value="BUDHA">BUDHA</option><option value="KHONGHUCU">KHONGHUCU</option><option value="LAINNYA">LAINNYA</option></select></label><br><br>
  <label for="cpdb_abk">Berkebutuhan Khusus?:<select id="cpdb_abk" data-formulircpdb="cpdb_abk" class="w3-select w3-border"><option value="BELUM PILIH" selected="">Silakan Pilih</option><option value="TIDAK">Tidak</option><option value="NETRA (A)">Netra (A)</option><option value="RUNGU (B)">Rungu (B)</option><option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option><option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option><option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option><option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option><option value="INDIGO (O)">Indigo (O)</option><option value="DOWN SINDROME (P)">Down Sindrome (P)</option><option value="AUTIS (Q)">Autis (Q)</option><option value="LARAS (E)">Laras ( E)</option><option value="WICARA (F)">Wicara (F)</option><option value="TUNA GANDA (G)">Tuna Ganda (G)</option><option value="HIPERAKTIF (H)">Hiperaktif (H)</option><option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option><option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option><option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option></select></label><br><br><label for="cpdb_anakke">ANAK KE-</label><input type="number" class="w3-border" min="1" style="width:250px" id="cpdb_anakke" data-formulircpdb="cpdb_anakke"><br><br><label for="cpdb_kewarganegaraan">Kewarganegaraan:</label><select id="cpdb_kewarganegaraan" data-formulircpdb="cpdb_kewarganegaraan" class="w3-select w3-border"><option value="BELUM PILIH WNA" selected="">Silakan Pilih</option><option value="WNI">WNI</option> <option value="WNA">WNA</option></select><br><br><label for="cpdb_no_reg_akte">No. Registrasi Akte:<input type="text" id="cpdb_no_reg_akte" data-formulircpdb="cpdb_no_reg_akte" class="w3-border w3-input"></label><br><br>File Pendukung: 
                    <ul class="w3-ul">
                      <li>1. Akta Kelahiran/Surat Kenal Lahir 
                          <label for="up_akta" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                      </li>
                    </ul>
                    
                    <table class="w3-table-all w3-tiny">
                      <tbody><tr>
                        <td class="preview_akta">Preview Akta</td>
                      </tr>
                      <tr>
                        <td><input type="text" class="cpdb_id_file_akta w3-input" id="cpdb_id_file_akta" data-formulircpdb="cpdb_id_file_akta" disabled="">
                        </td>
                      </tr>
                    </tbody></table></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-center w3-card-2 w3-aqua">Alamat CPDB dan Dokumen Kartu Keluarga</h5><label for="cpdb_no_kk">No Kartu Keluarga CPDB</label>
                              <input type="text" data-formulircpdb="cpdb_no_kk" id="cpdb_no_kk" class="w3-input w3-border"><br><br>
                      <label for="cpdb_kota">Kota(atau Kabupaten)</label>
                          <select data-formulircpdb="cpdb_kota" id="cpdb_kota" class="w3-select w3-border" onchange="pilih_kota(this,'kondisi_alamat')">
                            <option value="">Pilih Kota Tinggal</option>
                            <option value="KOTA DEPOK">KOTA DEPOK</option>
                            <option value="Lainnya">LAINNYA</option>
                          </select>
                          <div class="kondisi_alamat"><br><label for="cpdb_kec">Kecamatan:</label>
                          <select class="w3-border w3-select" id="cpdb_kec" data-formulircpdb="cpdb_kec" onchange="pilih_kec(this,'kondisi_kel')">
                          <option value="" selected="">Pilih Kecamatan</option>
                          <option value="CIPAYUNG">CIPAYUNG</option>
                          <option value="CILODONG">CILODONG</option>
                          <option value="BOJONG SARI">BOJONG SARI</option>
                          <option value="SAWANGAN">SAWANGAN</option>
                          <option value="BEJI">BEJI</option>
                          <option value="CIMANGGIS">CIMANGGIS</option>
                          <option value="LIMO">LIMO</option>
                          <option value="CINERE">CINERE</option>
                          <option value="PANCORAN MAS">PANCORAN MAS</option>
                          <option value="SUKMAJAYA">SUKMAJAYA</option>
                          <option value="TAPOS">TAPOS</option>
                          </select>
                          
                          </div>
                                        <div class="kondisi_kel"><br><label for="cpdb_kel">Kelurahan:</label>
                          <select class="w3-border w3-select" id="cpdb_kel" data-formulircpdb="cpdb_kel">
                          <option value="">Pilih Kelurahan</option>
                          <option value="CIPAYUNG">CIPAYUNG</option>
                          <option value="RATUJAYA">RATUJAYA</option>
                          <option value="BOJONG PONDOK TERONG">BOJONG PONDOK TERONG</option>
                          <option value="PONDOK JAYA">PONDOK JAYA</option>
                          <option value="CIPAYUNG JAYA">CIPAYUNG JAYA</option>
                          </select><br>
                          <label for="cpdb_rw">RW</label>
                          <input type="number" class="w3-input w3-border" min="1" style="width:123px" id="cpdb_rw" data-formulircpdb="cpdb_rw">
                          <br><label for="cpdb_rt">RT</label>
                          <input type="number" class="w3-input w3-border" min="1" style="width:123px" id="cpdb_rt" data-formulircpdb="cpdb_rt">
                          <br><label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
                          <input type="text" id="cpdb_alamat_jalan" data-formulircpdb="cpdb_alamat_jalan" class="w3-input w3-border" x="" oninput="ketik_kapital(this)">
                          <br>File Pendukung:
                                  <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
                                  <table class="w3-table-all w3-tiny">
                                  <tbody><tr>
                                      <td class="preview_kk"></td>
                                  </tr><tr>
                                      <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" data-formulircpdb="cpdb_id_file_kk" disabled>
                                      </td>
                                  </tr>
                                  </tbody></table>
                          </div></div><div class="w3-card-4 w3-padding w3-margin-top">
                          <h4 class="w3-center w3-card-2 w3-aqua">Data Riwayat PAUD/TK/RA</h4>

                      <label for="cpdb_npsn">NPSN (Nomor Pokok Sekolah Nasional)</label>
                        <input type="text" data-formulircpdb="cpdb_npsn" id="cpdb_npsn" class="w3-input w3-border"> 
                    <label for="cpdb_nisn">NISN (Nomor Induk Siswa Nasional)</label>
                        <input type="text" data-formulircpdb="cpdb_nisn" id="cpdb_nisn" class="w3-input w3-border">
                    <label for="cpdb_sekolahasal">Nama Sekolah Asal PAUD/TK/RA</label>
                        <input type="text" data-formulircpdb="cpdb_sekolahasal" id="cpdb_sekolahasal" class="w3-input w3-border" oninput="ketik_kapital(this)"> 
                    
                    File Pendukung: 
                      <ul class="w3-ul">
                          <li>1. Ijazah/STSB PAUD/TK
                              <label for="up_ijazah" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                          </li>
                      </ul>
                      
                      <table class="w3-table-all w3-tiny">
                          <tbody><tr>
                              <td class="preview_ijazah"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="cpdb_id_file_ijazah w3-input" id="cpdb_id_file_ijazah" data-formulircpdb="cpdb_id_file_ijazah" disabled="">
                            </td>
                          </tr>
                      </tbody></table></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-aqua">Data Orang Tua</h4>
                      <h5 class="w3-pale-green">Data Ayah Kandung</h5> 
                        <label for="ortu_nama_ayah">Nama Ayah</label>
                            <input type="text" id="ortu_nama_ayah" data-formulircpdb="ortu_nama_ayah" class="w3-input w3-border" oninput="ketik_kapital(this)">
                        <label for="ortu_nik_ayah">NIK Ayah</label>
                            <input type="text" id="ortu_nik_ayah" data-formulircpdb="ortu_nik_ayah" class="w3-input w3-border"><br>
                        <label for="ortu_ttl_ayah">Tanggal Lahir Ayah</label>
                            <input type="date" data-formulircpdb="ortu_ttl_ayah" value="1987-07-01" id="ortu_ttl_ayah" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_ayah')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_ayah"></sub><br> 
                        <label for="ortu_pendidikan_ayah">Pendidikan Ayah</label>
                            <select id="ortu_pendidikan_ayah" data-formulircpdb="ortu_pendidikan_ayah" class="w3-select w3-border">
                                <option value="Tidak Sekolah">Tidak Sekolah</option>
                                <option value="Putus SD">Putus SD</option>
                                <option value="SD Sederajat">SD Sederajat</option>
                                <option value="SMP Sederajat">SMP Sederajat</option>
                                <option value="SMA Sederajat">SMA Sederajat</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4/S1">D4/S1</option>
                                <option value="S2">S2</option>
                                <option value="S2">S3</option>
                            </select><br><br>
                            
                        <label for="ortu_pekerjaan_ayah">Pekerjaan Ayah</label> 
                            <select id="ortu_pekerjaan_ayah" data-formulircpdb="ortu_pekerjaan_ayah" class="w3-select w3-border">
                                <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                                <option value="Tidak Bekerja">Tidak bekerja</option>
                                <option value="Nelayan">Nelayan</option>
                                <option value="Petani">Petani</option>
                                <option value="Peternak">Peternak</option>
                                <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                                <option value="Karyawan Swasta">Karyawan Swasta</option>
                                <option value="Pedagang Kecil">Pedagang Kecil</option>
                                <option value="Pedagang Besar">Pedagang Besar</option>
                                <option value="Wiraswasta">Wiraswasta</option>
                                <option value="Wirausaha">Wirausaha</option>
                                <option value="Buruh">Buruh</option>
                                <option value="Pensiunan">Pensiunan</option>
                                <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                                <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                                <option value="Meninggal Dunia">Meninggal Dunia</option>
                                <option value="Lainnya">Lainnya</option>
                            </select><br><br>
                        <label for="ortu_penghasilan_ayah">Penghasilan Ayah</label>
                            <select id="ortu_penghasilan_ayah" data-formulircpdb="ortu_penghasilan_ayah" class="w3-select w3-border">
                                <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                                <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                                <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                                <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                                <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                                <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                                <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                                <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                                <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                                <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                                <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select><br><br>
                      <label for="ortu_abk_ayah">Ayah Berkebutuhan Khusus?</label> 
                          <select id="ortu_abk_ayah" data-formulircpdb="ortu_abk_ayah" class="w3-select w3-border">
                            <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                            <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option>
                            <option value="RUNGU (B)">Rungu (B)</option>
                            <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                            <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                            <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                            <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                            <option value="INDIGO (O)">Indigo (O)</option>
                            <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                            <option value="AUTIS (Q)">Autis (Q)</option>
                            <option value="LARAS (E)">Laras ( E)</option>
                            <option value="WICARA (F)">Wicara (F)</option>
                            <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                            <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                            <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                            <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                            <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                          </select><br><br> 

                    <label for="ortu_hp_ayah">No. HP/WA Ayah</label>
                        <input type="tel" id="ortu_hp_ayah" data-formulircpdb="ortu_hp_ayah" class="w3-input w3-border"></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-pale-green"> Data Ibu Kandung</h5>
                  <label for="ortu_nama_ibu">Nama Ibu</label>
                  <input type="text" id="ortu_nama_ibu" data-formulircpdb="ortu_nama_ibu" class="w3-input w3-border" oninput="ketik_kapital(this)"><br>
                  <label for="ortu_nik_ibu">NIK Ibu</label>
                  <input type="text" id="ortu_nik_ibu" data-formulircpdb="ortu_nik_ibu" class="w3-input w3-border"><br><br> 
                  <label for="ortu_ttl_ibu">Tanggal Lahir Ibu</label>
                  <input type="date" data-formulircpdb="ortu_ttl_ibu" value="1987-07-01" id="ortu_ttl_ibu" class="w3-input w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Ibu')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Ibu"></sub> 
                  <label for="ortu_pendidikan_ibu">Pendidikan Ibu</label>
                  <select id="ortu_pendidikan_ibu" data-formulircpdb="ortu_pendidikan_ibu" class="w3-select w3-border">
                      <option value="Tidak Sekolah">Tidak Sekolah</option>
                      <option value="Putus SD">Putus SD</option>
                      <option value="SD Sederajat">SD Sederajat</option>
                      <option value="SMP Sederajat">SMP Sederajat</option>
                      <option value="SMA Sederajat">SMA Sederajat</option>
                      <option value="D1">D1</option> 
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="D4/S1">D4/S1</option>
                      <option value="S2">S2</option>
                      <option value="S2">S3</option>
                  </select><br><br>
              <label for="ortu_pekerjaan_ibu">Pekerjaan Ibu</label>
              <select id="ortu_pekerjaan_ibu" data-formulircpdb="ortu_pekerjaan_ibu" class="w3-select w3-border">
                  <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                  <option value="Tidak Bekerja">Tidak bekerja</option>
                  <option value="Nelayan">Nelayan</option>
                  <option value="Petani">Petani</option>
                  <option value="Peternak">Peternak</option>
                  <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                  <option value="Karyawan Swasta">Karyawan Swasta</option>
                  <option value="Pedagang Kecil">Pedagang Kecil</option>
                  <option value="Pedagang Besar">Pedagang Besar</option>
                  <option value="Wiraswasta">Wiraswasta</option>
                  <option value="Wirausaha">Wirausaha</option>
                  <option value="Buruh">Buruh</option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                  <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                  <option value="Meninggal Dunia">Meninggal Dunia</option>
                  <option value="Lainnya">Lainnya</option>
              </select><br><br>
              
              <label for="ortu_penghasilan_ibu">Penghasilan Ibu</label>
              <select id="ortu_penghasilan_ibu" data-formulircpdb="ortu_penghasilan_ibu" class="w3-select w3-border">
                  <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                  <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                  <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                  <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                  <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                  <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                  <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                  <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                  <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                  <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                  <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                  <option value="Lainnya">Lainnya</option>
              </select><br><br>
              
              <label for="ortu_abk_ibu">Ibu Berkebutuhan Khusus?</label>
              <select id="ortu_abk_ibu" data-formulircpdb="ortu_abk_ibu" class="w3-select w3-border">
                  <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                  <option value="TIDAK">Tidak</option>
                  <option value="NETRA (A)">Netra (A)</option>
                  <option value="RUNGU (B)">Rungu (B)</option>
                  <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                  <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                  <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                  <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                  <option value="INDIGO (O)">Indigo (O)</option>
                  <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                  <option value="AUTIS (Q)">Autis (Q)</option>
                  <option value="LARAS (E)">Laras ( E)</option>
                  <option value="WICARA (F)">Wicara (F)</option>
                  <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                  <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                  <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                  <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                  <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
              </select><br><br>
              
              <label for="ortu_hp_ibu">No. HP/WA Ibu</label>
                  <input type="tel" id="ortu_hp_ibu" data-formulircpdb="ortu_hp_ibu" class="w3-input w3-border"></div><div class="w3-card-4 w3-padding w3-margin-top"><h5 class="w3-pale-green">Data Wali</h5>
                <label for="ortu_nama_wali">Nama wali</label>
                    <input type="text" id="ortu_nama_wali" data-formulircpdb="ortu_nama_wali" class="w3-input w3-border" oninput="ketik_kapital(this)">
                <label for="ortu_nik_wali">NIK Wali</label>
                    <input type="text" id="ortu_nik_wali" data-formulircpdb="ortu_nik_wali" class="w3-input w3-border"><br>
                <label for="ortu_ttl_wali">Tanggal Lahir Wali</label>
                    <input type="date" data-formulircpdb="ortu_ttl_wali" value="1987-07-01" id="ortu_ttl_wali" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Wali')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Wali"></sub><br> 
                
                <label for="ortu_pendidikan_wali">Pendidikan Wali</label>
                <select id="ortu_pendidikan_wali" data-formulircpdb="ortu_pendidikan_wali" class="w3-select w3-border">
                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                    <option value="Putus SD">Putus SD</option>
                    <option value="SD Sederajat">SD Sederajat</option>
                    <option value="SMP Sederajat">SMP Sederajat</option>
                    <option value="SMA Sederajat">SMA Sederajat</option>
                    <option value="D1">D1</option> <option value="D2">D2</option>
                    <option value="D3">D3</option> <option value="D4/S1">D4/S1</option>
                    <option value="S2">S2</option> <option value="S2">S3</option>
                </select><br><br>
                
                <label for="ortu_pekerjaan_wali">Pekerjaan Wali</label>
                <select id="ortu_pekerjaan_wali" data-formulircpdb="ortu_pekerjaan_wali" class="w3-select w3-border">
                    <option value="Belum Memilih" selected="">Pilih Pekerjaan</option>
                    <option value="Tidak Bekerja">Tidak bekerja</option>
                    <option value="Nelayan">Nelayan</option>
                    <option value="Petani">Petani</option>
                    <option value="Peternak">Peternak</option>
                    <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                    <option value="Karyawan Swasta">Karyawan Swasta</option>
                    <option value="Pedagang Kecil">Pedagang Kecil</option>
                    <option value="Pedagang Besar">Pedagang Besar</option>
                    <option value="Wiraswasta">Wiraswasta</option>
                    <option value="Wirausaha">Wirausaha</option>
                    <option value="Buruh">Buruh</option>
                    <option value="Pensiunan">Pensiunan</option>
                    <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                    <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                    <option value="Meninggal Dunia">Meninggal Dunia</option>
                    <option value="Lainnya">Lainnya</option>
                </select><br><br>
                
                <label for="ortu_penghasilan_wali">Penghasilan Wali</label>
                <select id="ortu_penghasilan_wali" data-formulircpdb="ortu_penghasilan_wali" class="w3-select w3-border">
                    <option value="Belum Memilih" selected="">Pilih kisaran penghasilan</option>
                    <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                    <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                    <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                    <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                    <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                    <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                    <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                    <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                    <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                    <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                    <option value="Lainnya">Lainnya</option>
                </select><br><br>
                
                <label for="ortu_abk_wali">Wali Berkebutuhan Khusus?</label>
                <select id="ortu_abk_wali" data-formulircpdb="ortu_abk_wali" class="w3-select w3-border">
                    <option value="BELUM PILIH" selected="">Silakan Pilih</option>
                    <option value="TIDAK">Tidak</option>
                    <option value="NETRA (A)">Netra (A)</option>
                    <option value="RUNGU (B)">Rungu (B)</option>
                    <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                    <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                    <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                    <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                    <option value="INDIGO (O)">Indigo (O)</option>
                    <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                    <option value="AUTIS (Q)">Autis (Q)</option>
                    <option value="LARAS (E)">Laras ( E)</option>
                    <option value="WICARA (F)">Wicara (F)</option>
                    <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                    <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                    <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                    <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                    <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                </select></div><div class="w3-card-4 w3-padding w3-margin-top"><h4 class="w3-center w3-card-2 w3-pale-red">FILE PENDUKUNG</h4><table class="w3-table-all w3-small"><tbody><tr>
                        <td>STSB/IJASAH PAUD <label for="up_filependukung_0" class="w3-button w3-right w3-green w3-small">
                        <i class="fa fa-upload"></i> Upload </label> 
                        </td>
                        </tr>

                        <tr>
                            <td class="preview_filependukung_0"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_0" data-formulircpdb="cpdb_id_file_filependukung_0" disabled="">
                        </td>
                    </tr>
                    <tr class="w3-dark-white w3-pale-green"><td></td>
                    </tr><tr>
                        <td>SPTJM <label for="up_filependukung_1" class="w3-button w3-right w3-green w3-small">
                        <i class="fa fa-upload"></i> Upload </label> 
                        </td>
                        </tr>

                        <tr>
                            <td class="preview_filependukung_1"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_1" data-formulircpdb="cpdb_id_file_filependukung_1" disabled="">
                        </td>
                    </tr>
                    <tr class="w3-dark-white w3-pale-green"><td></td>
                    </tr><tr>
                        <td>KTP <label for="up_filependukung_2" class="w3-button w3-right w3-green w3-small">
                        <i class="fa fa-upload"></i> Upload </label> 
                        </td>
                        </tr>

                        <tr>
                            <td class="preview_filependukung_2"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_2" data-formulircpdb="cpdb_id_file_filependukung_2" disabled="">
                        </td>
                    </tr>
                    <tr class="w3-dark-white w3-pale-green"><td></td>
                    </tr><tr>
                        <td>Poto Calon Peserta Didik Baru <label for="up_filependukung_3" class="w3-button w3-right w3-green w3-small">
                        <i class="fa fa-upload"></i> Upload </label> 
                        </td>
                        </tr>

                        <tr>
                            <td class="preview_filependukung_3"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_3" data-formulircpdb="cpdb_id_file_filependukung_3" disabled="">
                        </td>
                    </tr>
                    <tr class="w3-dark-white w3-pale-green"><td></td>
                    </tr> </tbody></table></div><div class="w3-hide">
            <input type="file" id="up_akta" onchange="uploadfile(this)">
                <input type="file" id="up_kk" onchange="uploadfile(this)">
                <input type="file" id="up_domisili" onchange="uploadfile(this)">
                <input type="file" id="up_ijazah" onchange="uploadfile(this)"><input type="file" id="up_filependukung_0" onchange="uploadfile(this)"> kode 0<input type="file" id="up_filependukung_1" onchange="uploadfile(this)"> kode 1<input type="file" id="up_filependukung_2" onchange="uploadfile(this)"> kode 2<input type="file" id="up_filependukung_3" onchange="uploadfile(this)"> kode 3</div>
            <br>
                <div class="w3-card-4 w3-container">
                    <ul class="w3-ul">
                <li>
                    <label for="setuju">
                        <input type="checkbox" class="w3-check ceksetuju" id="setuju" value="Setuju" unchecked=""> Dengan ini menyatakan bahwa data yang saya isi dan unggah benar-benar data yang sebenarnya.</label>
                </li><li><label for="takluk">
                <input type="checkbox" id="takluk" class="w3-check ceksetuju" unchecked=""> Anda setuju dan tunduk pada peraturan PPDB SD di sekolah kami (SDN Cipayung 1) dan menerima sepenuhnya sistem seleksi yang telah ditetapkan melalui pendaftaran di web ini.
                </label>
                </li>
                <li>
                <label for="verifikasi">
                <input type="checkbox" id="verifikasi" class="w3-check ceksetuju" unchecked="">
                Anda setuju bahwa Tim Verifikasi/Panitia PPDB berhak menolak/mengembalikan apabila data  identitas CPDB tidak sesuai dengan dokumen Akta Kelahiran, dan/atau alamat CPDB tidak sesuai dengan dokumen Kartu Keluarga (bukan Surat Keterangan Domisili)
                </label></li>    
                <li><label for="gugat">
                <input type="checkbox" id="gugat" class="w3-check ceksetuju" unchecked=""> Anda setuju bahwa keputusan hasil seleksi ini tidak dapat diganggu gugat
                </label>
                    </li>
                    </ul>
                    <button disabled="" class="w3-green w3-input w3-button w3-round-xxlarge kirimformulir" onclick="kirimformulirPernahdaftar(this,${id},${id_cpdb})" style="width:60%;margin:0 auto">DAFTAR</button><hr>
                </div>
                <input type="text" data-formulircpdb="riwayat_pendaftaran" class="w3-hide" >
                <input type="text" data-formulircpdb="id_pendaftar" class="w3-hide">
                <hr class="w3-clear">`;
  divform.innerHTML = html ;
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
  fetch(terminal+"?action=panggildatasatuanak&id_cpdb="+id_cpdb)
  .then(m => m.json()).then(r =>{
    let dbanak = r.records[0];
    let elemens = document.querySelectorAll("[data-formulircpdb]");
    for(let i = 0 ; i < elemens.length ; i++){
        
        let inputitem = elemens[i];
        let el = elemens[i];
        let key = inputitem.getAttribute("data-formulircpdb");
        let val ;//= dbanak[key];
        if(key == "tujuan_mendaftar"){
          val = id
        }else if(key == "jalur_cpdb"){
          val = teksjalur
        }else if(key == "riwayat_pendaftaran"){
          let rwy = JSON.parse(dbanak.riwayat_pendaftaran);
          let obj = {"tujuan_mendaftar":id, "id_status":"Perlu Verifikasi","ket_status":"Perlu Verifikasi"}
          rwy.push(obj);
          val =JSON.stringify(rwy)
        }else{
          val = dbanak[key]
        }
        
          if(el.type == "date"){
            el.value = val ==""?"":StringTanggalnol(new Date(val));
          }else{
            el.value = val;
          }
    }
  }).catch(er => console.log(er))

}
const kirimformulirPernahdaftar = (th,id, id_cpdb)=>{
  th.setAttribute("onclick","alert('sedang proses')");
  
  let link = db_settingppdbsekolah.filter(s => s.id_sekolah == id)[0].url_pendaftar;
  let datakirim = new FormData();
  datakirim.append("action","daftarlagipernahDitolak");
  datakirim.append("baris_terminal",id_cpdb)
  let elemens = document.querySelectorAll("[data-formulircpdb]");
    for(let i = 0 ; i < elemens.length ; i++){
      let inputitem = elemens[i];
        let key = inputitem.getAttribute("data-formulircpdb");
        let val;// = elemens[i].value;
        // if(key == "riwayat_pendaftaran"){
        //   let rwy = JSON.parse(inputitem.value);
          
        //   val = JSON.stringify(rwy)
        // }else{
        // }
        val = elemens[i].value;
        
        datakirim.append(key,val)
        
    }
  //daftarlagipernahDitolak
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  divform.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"> ...</div>`
  fetch(link, {method:"post",body:datakirim})
  .then(m => m.json()).then(r => {
    console.log(r);
    divform.innerHTML = r.result
  }).catch(er => {console.log(er)})
}
const html_formulir = (jalur,id,namasekolah) => {
  //tambahanformformulircpdbawal
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  let cekkosonginner =divform.innerHTML;
  if(cekkosonginner !== ""){
    let conf = confirm("Laman pilihan jalur sebelumnya telah terbuka, Anda akan membuka pilihan jalur "+ jalur + " dan akan menghilangkan seluruh isian data Anda sebelumnya jika Anda melanjutkan memilih.");
    if(!conf){
      return
    }
  }
  divform.innerHTML = `<div class="w3-center w3-margin-top"><img src="/img/barloading.gif"></div>`;
  let input_umur = document.getElementById("frm_tanggallahircpdb");
  //console.log(input_umur.value)
  let tglL, umur_siswa;
  if(input_umur.value !==""){
      tglL = new Date(input_umur.value);
      umur_siswa = skor_umur(umur(tglL).tahun, umur(tglL).bulan, umur(tglL).hari);
  }else{
      umur_siswa = 0;
  }
  
  let serversettingppdb_id = db_settingppdbsekolah.filter(s => s.id_sekolah == id)[0];
  let urlserver = serversettingppdb_id.url_settingppdb;
  urllogin = serversettingppdb_id.url_settingppdb;
  //console.log(db_settingppdbsekolah);
  fetch(urlserver+"?action=getpagu").then(m => m.json())
  .then(r => {
          let html = `<div class="w3-card-4 w3-padding w3-margin-top">`;
              html+= `<h4 class="w3-center w3-card-2 w3-pale-red">Pilihan Sekolah dan Jalur yang Dipilih:</h4>`;
                    html+=`Kode Sekolah Tujuan:<input type="number"  data-formulircpdb="tujuan_mendaftar" class="w3-input w3-border w3-light-grey" value="${id}" disabled/><br>`;
                    html+=`Tujuan Sekolah: <span class="w3-input w3-border w3-light-grey">${namasekolah.toUpperCase()}</span><br>`;
                    html+=`Jalur yang Dipilih:<input type="text" data-formulircpdb="jalur_cpdb" id="jalur_cpdb" class="w3-input w3-border w3-light-grey" value="${jalur.toUpperCase()}" disabled/><br>`;
              html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
                    html+= `<h4 class="w3-center w3-card-2 w3-blue">Form Pendaftaran Jalur ${jalur}</h4>`;
                    html +=`<label for="cpdb_umur">Skor Umur:<input type="text" data-formulircpdb="cpdb_umur" id="cpdb_umur" class="w3-border" style="width:80px" value="${umur_siswa}" disabled></label><br><br>`;
                    html +=`<label for="cpdb_jk">Jenis Kelamin: <select id="cpdb_jk" data-formulircpdb="cpdb_jk" class="w3-select w3-light-grey"><option value="L">Laki-laki</option><option value="P">Perempuan</option></select></label><br><br>`;
                    html +=`<label for="cpdb_agama">Agama yang dianut CPDB:`;
                    html +=`<select id="cpdb_agama" data-formulircpdb="cpdb_agama" class="w3-border w3-select w3-light-gray">`
                        html +=`<option value="">Pilih Agama yang Dianut?</option>` 
                        html +=`<option value="ISLAM">ISLAM</option>`;
                        html +=`<option value="KRISTEN">KRISTEN(PROTESTAN)</option>`; 
                        html +=`<option value="KATHOLIK">KATHOLIK</option>` 
                        html +=`<option value="HINDU">HINDU</option>`; 
                        html +=`<option value="BUDHA">BUDHA</option>`; 
                        html +=`<option value="KHONGHUCU">KHONGHUCU</option>`; 
                        html +=`<option value="LAINNYA">LAINNYA</option>`; 
                    html +=`</select></label><br><br>`;
                    html +=`<label for="cpdb_abk">Berkebutuhan Khusus?:`;
                    html +=`<select id="cpdb_abk" data-formulircpdb="cpdb_abk" class="w3-select w3-border">`; 
                        html+=`<option value="BELUM PILIH" selected>Silakan Pilih</option><option value="TIDAK">Tidak</option><option value="NETRA (A)">Netra (A)</option><option value="RUNGU (B)">Rungu (B)</option><option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option><option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option><option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option><option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option><option value="INDIGO (O)">Indigo (O)</option><option value="DOWN SINDROME (P)">Down Sindrome (P)</option><option value="AUTIS (Q)">Autis (Q)</option><option value="LARAS (E)">Laras ( E)</option><option value="WICARA (F)">Wicara (F)</option><option value="TUNA GANDA (G)">Tuna Ganda (G)</option><option value="HIPERAKTIF (H)">Hiperaktif (H)</option><option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option><option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option><option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>`;
                    html +=`</select></label><br/><br/>`;
                    html +=`<label for="cpdb_anakke">ANAK KE-</label><input type="number" class="w3-border" min="1" style="width:250px" id="cpdb_anakke" data-formulircpdb="cpdb_anakke"><br><br>`; 
                        html +=`<label for="cpdb_kewarganegaraan">Kewarganegaraan:</label>`;
                            html +=`<select id="cpdb_kewarganegaraan" data-formulircpdb="cpdb_kewarganegaraan" class="w3-select w3-border"><option value="BELUM PILIH WNA" selected>Silakan Pilih</option><option value="WNI">WNI</option> <option value="WNA">WNA</option></select><br><br>`;
                    html +=`<label for="cpdb_no_reg_akte">No. Registrasi Akte:<input type="text" id="cpdb_no_reg_akte" data-formulircpdb="cpdb_no_reg_akte" class="w3-border w3-input"/></label><br><br>`;
                    html +=`File Pendukung: 
                    <ul class="w3-ul">
                      <li>1. Akta Kelahiran/Surat Kenal Lahir 
                          <label for="up_akta" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                      </li>
                    </ul>
                    
                    <table class="w3-table-all w3-tiny">
                      <tr>
                        <td class="preview_akta">Preview Akta</td>
                      </tr>
                      <tr>
                        <td><input type="text" class="cpdb_id_file_akta w3-input" id="cpdb_id_file_akta" data-formulircpdb="cpdb_id_file_akta" disabled>
                        </td>
                      </tr>
                    </table>`
                    
                    html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
                    html +=`<h5 class="w3-center w3-card-2 w3-aqua">Alamat CPDB dan Dokumen Kartu Keluarga</h5>`;
                    html +=`<label for="cpdb_no_kk">No Kartu Keluarga CPDB</label>
                              <input type="text" data-formulircpdb="cpdb_no_kk" id="cpdb_no_kk" class="w3-input w3-border"/><br><br>
                      <label for="cpdb_kota">Kota(atau Kabupaten)</label>
                          <select data-formulircpdb="cpdb_kota" id="cpdb_kota" class="w3-select w3-border" onchange="pilih_kota(this,'kondisi_alamat')">
                            <option value="">Pilih Kota Tinggal</option>
                            <option value="KOTA DEPOK">KOTA DEPOK</option>
                            <option value="Lainnya">LAINNYA</option>
                          </select>
                    <div class="kondisi_alamat"></div>
                    <div class="kondisi_kel"></div>`;
                    html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
                    html +=`
                    <h4 class="w3-center w3-card-2 w3-aqua">Data Riwayat PAUD/TK/RA</h4>

                      <label for="cpdb_npsn">NPSN (Nomor Pokok Sekolah Nasional)</label>
                        <input type="text" data-formulircpdb="cpdb_npsn" id="cpdb_npsn" class="w3-input w3-border"> 
                    <label for="cpdb_nisn">NISN (Nomor Induk Siswa Nasional)</label>
                        <input type="text" data-formulircpdb="cpdb_nisn" id="cpdb_nisn" class="w3-input w3-border"/>
                    <label for="cpdb_sekolahasal">Nama Sekolah Asal PAUD/TK/RA</label>
                        <input type="text" data-formulircpdb="cpdb_sekolahasal" id="cpdb_sekolahasal" class="w3-input w3-border" oninput="ketik_kapital(this)"/> 
                    
                    File Pendukung: 
                      <ul class="w3-ul">
                          <li>1. Ijazah/STSB PAUD/TK
                              <label for="up_ijazah" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
                          </li>
                      </ul>
                      
                      <table class="w3-table-all w3-tiny">
                          <tr>
                              <td class="preview_ijazah"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="cpdb_id_file_ijazah w3-input" id="cpdb_id_file_ijazah" data-formulircpdb="cpdb_id_file_ijazah" disabled>
                            </td>
                          </tr>
                      </table>`;
                      html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
                      html +=`<h4 class="w3-center w3-card-2 w3-aqua">Data Orang Tua</h4>
                      <h5 class="w3-pale-green">Data Ayah Kandung</h5> 
                        <label for="ortu_nama_ayah">Nama Ayah</label>
                            <input type="text" id="ortu_nama_ayah" data-formulircpdb="ortu_nama_ayah" class="w3-input w3-border" oninput="ketik_kapital(this)">
                        <label for="ortu_nik_ayah">NIK Ayah</label>
                            <input type="text" id="ortu_nik_ayah" data-formulircpdb="ortu_nik_ayah" class="w3-input w3-border" ><br/>
                        <label for="ortu_ttl_ayah">Tanggal Lahir Ayah</label>
                            <input type="date" data-formulircpdb="ortu_ttl_ayah" value="1987-07-01" id="ortu_ttl_ayah" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_ayah')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_ayah"></sub><br/> 
                        <label for="ortu_pendidikan_ayah">Pendidikan Ayah</label>
                            <select id="ortu_pendidikan_ayah" data-formulircpdb="ortu_pendidikan_ayah" class="w3-select w3-border">
                                <option value="Tidak Sekolah">Tidak Sekolah</option>
                                <option value="Putus SD">Putus SD</option>
                                <option value="SD Sederajat">SD Sederajat</option>
                                <option value="SMP Sederajat">SMP Sederajat</option>
                                <option value="SMA Sederajat">SMA Sederajat</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4/S1">D4/S1</option>
                                <option value="S2">S2</option>
                                <option value="S2">S3</option>
                            </select><br/><br/>
                            
                        <label for="ortu_pekerjaan_ayah">Pekerjaan Ayah</label> 
                            <select id="ortu_pekerjaan_ayah" data-formulircpdb="ortu_pekerjaan_ayah" class="w3-select w3-border">
                                <option value="Belum Memilih" selected>Pilih Pekerjaan</option>
                                <option value="Tidak Bekerja">Tidak bekerja</option>
                                <option value="Nelayan">Nelayan</option>
                                <option value="Petani">Petani</option>
                                <option value="Peternak">Peternak</option>
                                <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                                <option value="Karyawan Swasta">Karyawan Swasta</option>
                                <option value="Pedagang Kecil">Pedagang Kecil</option>
                                <option value="Pedagang Besar">Pedagang Besar</option>
                                <option value="Wiraswasta">Wiraswasta</option>
                                <option value="Wirausaha">Wirausaha</option>
                                <option value="Buruh">Buruh</option>
                                <option value="Pensiunan">Pensiunan</option>
                                <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                                <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                                <option value="Meninggal Dunia">Meninggal Dunia</option>
                                <option value="Lainnya">Lainnya</option>
                            </select><br><br>
                        <label for="ortu_penghasilan_ayah">Penghasilan Ayah</label>
                            <select id="ortu_penghasilan_ayah" data-formulircpdb="ortu_penghasilan_ayah" class="w3-select w3-border">
                                <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option>
                                <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                                <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                                <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                                <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                                <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                                <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                                <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                                <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                                <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                                <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select><br><br>
                      <label for="ortu_abk_ayah">Ayah Berkebutuhan Khusus?</label> 
                          <select id="ortu_abk_ayah" data-formulircpdb="ortu_abk_ayah" class="w3-select w3-border">
                            <option value="BELUM PILIH" selected>Silakan Pilih</option>
                            <option value="TIDAK">Tidak</option> <option value="NETRA (A)">Netra (A)</option>
                            <option value="RUNGU (B)">Rungu (B)</option>
                            <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                            <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                            <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                            <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                            <option value="INDIGO (O)">Indigo (O)</option>
                            <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                            <option value="AUTIS (Q)">Autis (Q)</option>
                            <option value="LARAS (E)">Laras ( E)</option>
                            <option value="WICARA (F)">Wicara (F)</option>
                            <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                            <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                            <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                            <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                            <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                          </select><br><br> 

                    <label for="ortu_hp_ayah">No. HP/WA Ayah</label>
                        <input type="tel" id="ortu_hp_ayah" data-formulircpdb="ortu_hp_ayah" class="w3-input w3-border">`;
            html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
            html +=`<h5 class="w3-pale-green"> Data Ibu Kandung</h5>
                  <label for="ortu_nama_ibu">Nama Ibu</label>
                  <input type="text" id="ortu_nama_ibu" data-formulircpdb="ortu_nama_ibu" class="w3-input w3-border" oninput="ketik_kapital(this)"><br>
                  <label for="ortu_nik_ibu">NIK Ibu</label>
                  <input type="text" id="ortu_nik_ibu" data-formulircpdb="ortu_nik_ibu" class="w3-input w3-border" ><br><br> 
                  <label for="ortu_ttl_ibu">Tanggal Lahir Ibu</label>
                  <input type="date" data-formulircpdb="ortu_ttl_ibu" value="1987-07-01" id="ortu_ttl_ibu" class="w3-input w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Ibu')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Ibu"></sub> 
                  <label for="ortu_pendidikan_ibu">Pendidikan Ibu</label>
                  <select id="ortu_pendidikan_ibu" data-formulircpdb="ortu_pendidikan_ibu" class="w3-select w3-border">
                      <option value="Tidak Sekolah">Tidak Sekolah</option>
                      <option value="Putus SD">Putus SD</option>
                      <option value="SD Sederajat">SD Sederajat</option>
                      <option value="SMP Sederajat">SMP Sederajat</option>
                      <option value="SMA Sederajat">SMA Sederajat</option>
                      <option value="D1">D1</option> 
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="D4/S1">D4/S1</option>
                      <option value="S2">S2</option>
                      <option value="S2">S3</option>
                  </select><br><br>
              <label for="ortu_pekerjaan_ibu">Pekerjaan Ibu</label>
              <select id="ortu_pekerjaan_ibu" data-formulircpdb="ortu_pekerjaan_ibu" class="w3-select w3-border">
                  <option value="Belum Memilih" selected>Pilih Pekerjaan</option>
                  <option value="Tidak Bekerja">Tidak bekerja</option>
                  <option value="Nelayan">Nelayan</option>
                  <option value="Petani">Petani</option>
                  <option value="Peternak">Peternak</option>
                  <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                  <option value="Karyawan Swasta">Karyawan Swasta</option>
                  <option value="Pedagang Kecil">Pedagang Kecil</option>
                  <option value="Pedagang Besar">Pedagang Besar</option>
                  <option value="Wiraswasta">Wiraswasta</option>
                  <option value="Wirausaha">Wirausaha</option>
                  <option value="Buruh">Buruh</option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                  <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                  <option value="Meninggal Dunia">Meninggal Dunia</option>
                  <option value="Lainnya">Lainnya</option>
              </select><br><br>
              
              <label for="ortu_penghasilan_ibu">Penghasilan Ibu</label>
              <select id="ortu_penghasilan_ibu" data-formulircpdb="ortu_penghasilan_ibu" class="w3-select w3-border">
                  <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option>
                  <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                  <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                  <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                  <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                  <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                  <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                  <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                  <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                  <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                  <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                  <option value="Lainnya">Lainnya</option>
              </select><br><br>
              
              <label for="ortu_abk_ibu">Ibu Berkebutuhan Khusus?</label>
              <select id="ortu_abk_ibu" data-formulircpdb="ortu_abk_ibu" class="w3-select w3-border">
                  <option value="BELUM PILIH" selected>Silakan Pilih</option>
                  <option value="TIDAK">Tidak</option>
                  <option value="NETRA (A)">Netra (A)</option>
                  <option value="RUNGU (B)">Rungu (B)</option>
                  <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                  <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                  <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                  <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                  <option value="INDIGO (O)">Indigo (O)</option>
                  <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                  <option value="AUTIS (Q)">Autis (Q)</option>
                  <option value="LARAS (E)">Laras ( E)</option>
                  <option value="WICARA (F)">Wicara (F)</option>
                  <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                  <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                  <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                  <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                  <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
              </select><br><br>
              
              <label for="ortu_hp_ibu">No. HP/WA Ibu</label>
                  <input type="tel" id="ortu_hp_ibu" data-formulircpdb="ortu_hp_ibu" class="w3-input w3-border">`;
        html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
        html +=`<h5 class="w3-pale-green">Data Wali</h5>
                <label for="ortu_nama_wali">Nama wali</label>
                    <input type="text" id="ortu_nama_wali" data-formulircpdb="ortu_nama_wali" class="w3-input w3-border" oninput="ketik_kapital(this)">
                <label for="ortu_nik_wali">NIK Wali</label>
                    <input type="text" id="ortu_nik_wali" data-formulircpdb="ortu_nik_wali" class="w3-input w3-border" ><br>
                <label for="ortu_ttl_wali">Tanggal Lahir Wali</label>
                    <input type="date" data-formulircpdb="ortu_ttl_wali" value="1987-07-01" id="ortu_ttl_wali" class="w3-select w3-border" onchange="konversi_tanggal(this,'sub_arti_tanggal_Wali')" style="width:150px"><br><sub class="w3-text-red sub_sub sub_arti_tanggal_Wali"></sub><br> 
                
                <label for="ortu_pendidikan_wali">Pendidikan Wali</label>
                <select id="ortu_pendidikan_wali" data-formulircpdb="ortu_pendidikan_wali" class="w3-select w3-border">
                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                    <option value="Putus SD">Putus SD</option>
                    <option value="SD Sederajat">SD Sederajat</option>
                    <option value="SMP Sederajat">SMP Sederajat</option>
                    <option value="SMA Sederajat">SMA Sederajat</option>
                    <option value="D1">D1</option> <option value="D2">D2</option>
                    <option value="D3">D3</option> <option value="D4/S1">D4/S1</option>
                    <option value="S2">S2</option> <option value="S2">S3</option>
                </select><br><br>
                
                <label for="ortu_pekerjaan_wali">Pekerjaan Wali</label>
                <select id="ortu_pekerjaan_wali" data-formulircpdb="ortu_pekerjaan_wali" class="w3-select w3-border">
                    <option value="Belum Memilih" selected>Pilih Pekerjaan</option>
                    <option value="Tidak Bekerja">Tidak bekerja</option>
                    <option value="Nelayan">Nelayan</option>
                    <option value="Petani">Petani</option>
                    <option value="Peternak">Peternak</option>
                    <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                    <option value="Karyawan Swasta">Karyawan Swasta</option>
                    <option value="Pedagang Kecil">Pedagang Kecil</option>
                    <option value="Pedagang Besar">Pedagang Besar</option>
                    <option value="Wiraswasta">Wiraswasta</option>
                    <option value="Wirausaha">Wirausaha</option>
                    <option value="Buruh">Buruh</option>
                    <option value="Pensiunan">Pensiunan</option>
                    <option value="Tenaga Kerja Indonesia (TKI)">Tenaga Kerja Indonesia (TKI)</option>
                    <option value="Tidak dapat diterapkan">Tidak dapat diterapkan</option>
                    <option value="Meninggal Dunia">Meninggal Dunia</option>
                    <option value="Lainnya">Lainnya</option>
                </select><br><br>
                
                <label for="ortu_penghasilan_wali">Penghasilan Wali</label>
                <select id="ortu_penghasilan_wali" data-formulircpdb="ortu_penghasilan_wali" class="w3-select w3-border">
                    <option value="Belum Memilih" selected>Pilih kisaran penghasilan</option>
                    <option value="Kurang dari Rp. 1.000.000,-">Kurang dari Rp. 1.000.000,-</option>
                    <option value="Rp. 1.000.000 - Rp. 2.000.000">Rp. 1.000.000 - Rp. 2.000.000</option>
                    <option value="Lebih dari Rp. 2.000.000">Lebih dari Rp. 2.000.000</option>
                    <option value="Kurang dari Rp. 500.000">Kurang dari Rp. 500.000</option>
                    <option value="Rp. 500.000 - Rp. 999.999">Rp. 500.000 - Rp. 999.999</option>
                    <option value="Rp. 1.000.000 - Rp. 1.999.999">Rp. 1.000.000 - Rp. 1.999.999</option>
                    <option value="Rp. 2.000.000 - Rp. 4.999.999">Rp. 2.000.000 - Rp. 4.999.999</option>
                    <option value="Rp. 5.000.000 - Rp. 20.000.000">Rp. 5.000.000 - Rp. 20.000.000</option>
                    <option value="Lebih dari Rp.20.000.000">Lebih dari Rp.20.000.000</option>
                    <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                    <option value="Lainnya">Lainnya</option>
                </select><br><br>
                
                <label for="ortu_abk_wali">Wali Berkebutuhan Khusus?</label>
                <select id="ortu_abk_wali" data-formulircpdb="ortu_abk_wali" class="w3-select w3-border">
                    <option value="BELUM PILIH" selected>Silakan Pilih</option>
                    <option value="TIDAK">Tidak</option>
                    <option value="NETRA (A)">Netra (A)</option>
                    <option value="RUNGU (B)">Rungu (B)</option>
                    <option value="GRAHITA RINGAN (C)">Grahita Ringan (C)</option>
                    <option value="GRAHITA SEDANG (C1)">Grahita Sedang (C1)</option>
                    <option value="DAKSA RINGAN (D)">Daksa Ringan (D)</option>
                    <option value="DAKSA SEDANG (D1)">Daksa Sedang (D1)</option>
                    <option value="INDIGO (O)">Indigo (O)</option>
                    <option value="DOWN SINDROME (P)">Down Sindrome (P)</option>
                    <option value="AUTIS (Q)">Autis (Q)</option>
                    <option value="LARAS (E)">Laras ( E)</option>
                    <option value="WICARA (F)">Wicara (F)</option>
                    <option value="TUNA GANDA (G)">Tuna Ganda (G)</option>
                    <option value="HIPERAKTIF (H)">Hiperaktif (H)</option>
                    <option value="CERDAS ISTIMEWA (I)">Cerdas Istimewa (i)</option>
                    <option value="BAKAT ISTIMEWA (J)">Bakat Istimewa (J)</option>
                    <option value="KESULITAN BELAJAR (K)">Kesulitan Belajar (K)</option>
                </select>`;
                html += `</div><div class="w3-card-4 w3-padding w3-margin-top">`;
                html +=`<h4 class="w3-center w3-card-2 w3-pale-red">FILE PENDUKUNG</h4>`;



                

            
            
            html +=`<table class="w3-table-all w3-small">`;

            //let datapendukung = api_jalur.filter(k => k.ket_doc_zonasi !== "" && k.ket_doc_afirmasi !== "" && k.ket_doc_ptk !== "");
            let rec = r.records;
            let key = "ket_doc_" + jalur.toLowerCase();
            let perjalur = rec.filter(k => k[key] !== "");
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
                            <td><input type="text" class="w3-input w3-border" id="cpdb_id_file_filependukung_${a}" data-formulircpdb="cpdb_id_file_filependukung_${a}" disabled></input>
                        </td>
                    </tr>
                    <tr class="w3-dark-white w3-pale-green"><td></td>
                    </tr>`;
            }
            html += ` </table>`;
            html +=`</div>`;
            html +=`<div class="w3-hide">
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
                <input type="checkbox" id="takluk" class="w3-check ceksetuju" unchecked> Anda setuju dan tunduk pada peraturan PPDB SD di sekolah kami (${namasekolah}) dan menerima sepenuhnya sistem seleksi yang telah ditetapkan melalui pendaftaran di web ini.
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
                    <button disabled class="w3-green w3-input w3-button w3-round-xxlarge kirimformulir" onclick="kirimformulir(this,${id})" style="width:60%;margin:0 auto">DAFTAR</button><hr/>
                </div>
                <hr class="w3-clear">`;

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
            
  
  }).catch(er => console.log(er));

};
/// start refrensi

const ketik_kapital = (el) => el.value = el.value.toUpperCase();

const kirimformulir = (el,id) => { // ini untuk orang yang pertama kali daftar....
  let datasetting = db_settingppdbsekolah.filter(s => s.id_sekolah == id)[0];
  let urlppdb = datasetting.url_pendaftar;
  val_namasekolah = datasetting.nama_sekolah;


  
  el.setAttribute("onclick","alert('sedang proses kirim')");
  el.innerHTML = `<img src="/img/barloading.gif">`;
  
  let elemensinput = document.querySelectorAll("[data-formulircpdb]")
  
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  let formulircpdbawal = document.querySelector(".formulircpdbawal");
  let cekformulircpdbawal = document.querySelector(".cekformulircpdbawal");
  
  if(formulircpdbawal.className.indexOf("w3-hide")==-1){
    formulircpdbawal.classList.add("w3-hide")
  }
  let data = new FormData();
  //data.append("action", "cpdbdaftarawal");
  for (let i = 0; i < elemensinput.length; i++) {
    let ein = elemensinput[i];
    let keys = ein.getAttribute("data-formulircpdb");
    let val = ein.value;
    // console.log(keys, val);
      data.append(keys, val)
  };
  // karena ini awal, maka riwayat_pendaftaran dibuat awal-awal:
  // key = "riwayat_pendaftaran"
  let vel = [{"tujuan_mendaftar":id,"id_status":"Perlu Verifikasi","ket_status":"Perlu Verifikasi"}];
      data.append("riwayat_pendaftaran",JSON.stringify(vel));
  let acuan_Zonasi = lacak_zonasi(id);

      data.append("patokan_zonasi",acuan_Zonasi);


  divform.innerHTML = `<img src="/img/barloading.gif" alt="proses loading"> ...`;
  for (let i = 0; i < elemensinput.length; i++) {
    let ein = elemensinput[i];
    ein.value = "";
  };
  fetch(urlppdb+"?action=cpdbdaftarawal", 
      { method: "post", 
      body: data 
    }).then(m => m.json())
      .then(r => {
          
          cekformulircpdbawal.innerHTML = "";
          cariUpdate = r.objek;
          let tgldaftar = new Date(r.objek[0].waktu_daftar);
          let html = `<div id="statusformulir" style="overflow-x:auto">`;
          html +=`<table style="width:98%;margin:0 auto;font-size:12px">`;
            html +=`<tr>`;
              html +=`<td style="padding:2px 5px;width:56px"><img src="/img/Lambang_Kota_Depok.png" style="width:50px"></td>`;
              html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">PPDB SDN Kecamatan Cipayung`;
                html +=`<br>Tanda Bukti Pendaftaran PPDB` ;
                html +=`<br>Tahun Pelajaran 2022/2023` ;
              html +=`</td>`;
            html +=`</tr>`;
          html +=`</table><br>`;
          html +=`<table style="width:98%;margin:0 auto;border-collapse:collapse;font-size:12px">`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Data Calon Peserta Didik Baru</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:125px">ID Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:1px">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_pendaftar}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:98px">NIK Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:1px">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].cpdb_nik}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;">Nama CPDB</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].nama_cpdb}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">Tempat, Tanggal Lahir</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">${r.objek[0].cpdb_tempat_lahir}, ${r.objek[0].cpdb_tanggal_lahir == ""?"":tanggalfull(r.objek[0].cpdb_tanggal_lahir)}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">Alamat</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">RT : ${r.objek[0].cpdb_rt}, <br>RW : ${r.objek[0].cpdb_rw}, <br>Kelurahan : ${r.objek[0].cpdb_kel}, <br>Kecamatan : ${r.objek[0].cpdb_kec} <br>Kota/Kab : ${r.objek[0].cpdb_kota}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Tujuan Sekolah</td>`;
            html+=`</tr>`;
            
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;">Waktu Mendaftar</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${tanggalfulllengkap(tgldaftar)}</td>`;
            html+=`</tr>`; 
            html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">ID Pilihan Sekolah</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${id}</td>`;
            html+=`</tr>`; 
            html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">Nama Sekolah</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${val_namasekolah}</td>`;
            html+=`</tr>`; 
              html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">Status Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_status}</td>`;
            html+=`</tr>`;
            // html+=`<tr>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">Status Pendaftaran</td>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_status}</td>`;
            // html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Tahapan selanjutnya, Silakan Anda cek di Menu <b class="w3-red">Cari</b> untuk melihat/mengetahui data telah dikonfirmasi oleh Tim Verifikasi/Panitia PPDB.<br>Data yang telah diverifikasi akan masuk ke tahap Seleksi pada menu <b class="w3-red">SELEKSI</b>.</td>`;
            html+=`</tr>`;
          html +=`</table><br></div><div class="w3-center">`;
          html +=`<button onclick="printA5('statusformulir')" class="w3-button w3-pale-blue w3-round-large"><i class="fa fa-print"></i> Cetak</button><button onclick="document.getElementById('modalFormulirPendaftaran').style.display='none';" class="w3-button w3-pale-red w3-round-large"><i class="fa fa-times-rectangle-o"></i> Tutup</button>`;
          divform.innerHTML = html;


          let divform2_innerHTML = `
          Terimakasih telah mendaftar di ${val_namasekolah}. Data Anda telah berhasil terkirim. Berikut data pokok yang wajib Anda ketahui:
          <div id="statusformulir" style="overflow-x:auto">
          <table class="w3-table-all garis">
          <tr class="w3-aqua w3-centered">
              <td colspan="2" class="w3-center">Status Pendaftaran</td>
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
          <button onclick="printA5('statusformulir')" class="w3-button w3-blue w3-round-large"><i class="fa fa-print"></i> Cetak</button>            
          <button onclick="fn_close_daftar()" class="w3-button w3-red w3-round-large"><i class="fa fa-times-rectangle-o"></i> Tutup</button>
          </div>`
      }).catch(er => {
          console.log(er);
          divform.innerHTML = "Maaf, Trafik jaringan penuh. Silakan ulangi sesi Anda."
      })

}
const kirimformulirdikembalikan = (el,id,row,idd) => { // ini untuk orang yang pertama kali daftar....
  let datasetting = db_settingppdbsekolah.filter(s => s.id_sekolah == id)[0];
  let urlppdb = datasetting.url_pendaftar;
  val_namasekolah = datasetting.nama_sekolah;
  



  
  el.setAttribute("onclick","alert('sedang proses kirim')");
  el.innerHTML = `<img src="/img/barloading.gif">`;
  
  let elemensinput = document.querySelectorAll("[data-formulircpdb]")
  
  let divform = document.querySelector(".tambahanformformulircpdbawal");
  let formulircpdbawal = document.querySelector(".formulircpdbawal");
  let cekformulircpdbawal = document.querySelector(".cekformulircpdbawal");
  
  if(formulircpdbawal.className.indexOf("w3-hide")==-1){
    formulircpdbawal.classList.add("w3-hide")
  }
  let data = new FormData();
  //data.append("action", "cpdbdaftarawal");
  for (let i = 0; i < elemensinput.length; i++) {
    let ein = elemensinput[i];
    let keys = ein.getAttribute("data-formulircpdb");
    let val = ein.value;
    // console.log(keys, val);
    if(keys == "riwayat_pendaftaran"){
      //start
          let riwayat = JSON.parse(val);
        //   let dataverif = {};
        // dataverif.id_status = "Perlu Verifikasi";
        // dataverif.ket_status = "Perlu Verifikasi";


        // // //console.log(riwayat);

        let updateRiwayat = riwayat.filter(s => s.tujuan_mendaftar == id_sekolah)[0];
        updateRiwayat.id_status = idstatus;
        updateRiwayat.ket_status = ketstatus;
        console.log(updateRiwayat);
        
        let newState = riwayat.map(obj => obj.tujuan_mendaftar == id_sekolah ?  Object.assign({},obj, updateRiwayat): obj);
        console.log(newState);
        //dt.riwayat_pendaftaran = JSON.stringify(newState)
        //console.log(dt);
        // dataverif.riwayat_pendaftaran = JSON.stringify(newState)
          //end
          data.append(keys, JSON.stringify(newState))
    }else if(keys == "id_status"){
      data.append(keys, "Perlu Verifikasi")

    }else if(keys == "ket_status"){
      data.append(keys, "Perlu Verifikasi")

    }else{
      data.append(keys, val)

    }
  };
  // karena ini awal, maka riwayat_pendaftaran dibuat awal-awal:
  // key = "riwayat_pendaftaran"
  let vel = [{"tujuan_mendaftar":id,"id_status":"Perlu Verifikasi","ket_status":"Perlu Verifikasi"}];
      data.append("riwayat_pendaftaran",JSON.stringify(vel));
  let acuan_Zonasi = lacak_zonasi(id);

      data.append("patokan_zonasi",acuan_Zonasi);


  divform.innerHTML = `<img src="/img/barloading.gif" alt="proses loading"> ...`;
  for (let i = 0; i < elemensinput.length; i++) {
    let ein = elemensinput[i];
    ein.value = "";
  };
  data.append("baris_terminal",row);
  data.append("id_pendaftar",idd);
  fetch(urlppdb+"?action=cpdbdaftarlagi", 
      { method: "post", 
      body: data 
    }).then(m => m.json())
      .then(r => {
          
          cekformulircpdbawal.innerHTML = "";
          console.log(r)
          cariUpdate = r.objek;
          let tgldaftar = new Date(r.objek[0].waktu_daftar);
          let html = `<div id="statusformulir" style="overflow-x:auto">`;
          html +=`<table style="width:98%;margin:0 auto;font-size:12px">`;
            html +=`<tr>`;
              html +=`<td style="padding:2px 5px;width:56px"><img src="/img/Lambang_Kota_Depok.png" style="width:50px"></td>`;
              html +=`<td style="padding:2px 5px;vertical-align:top;text-align:left">PPDB SDN Kecamatan Cipayung`;
                html +=`<br>Tanda Bukti Pendaftaran PPDB` ;
                html +=`<br>Tahun Pelajaran 2022/2023` ;
              html +=`</td>`;
            html +=`</tr>`;
          html +=`</table><br>`;
          html +=`<table style="width:98%;margin:0 auto;border-collapse:collapse;font-size:12px">`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Data Calon Peserta Didik Baru</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:125px">ID Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:1px">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_pendaftar}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:98px">NIK Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;width:1px">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].cpdb_nik}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;">Nama CPDB</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].nama_cpdb}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">Tempat, Tanggal Lahir</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">${r.objek[0].cpdb_tempat_lahir}, ${r.objek[0].cpdb_tanggal_lahir == ""?"":tanggalfull(r.objek[0].cpdb_tanggal_lahir)}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">Alamat</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;vertical-align:top">RT : ${r.objek[0].cpdb_rt}, <br>RW : ${r.objek[0].cpdb_rw}, <br>Kelurahan : ${r.objek[0].cpdb_kel}, <br>Kecamatan : ${r.objek[0].cpdb_kec} <br>Kota/Kab : ${r.objek[0].cpdb_kota}</td>`;
            html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Tujuan Sekolah</td>`;
            html+=`</tr>`;
            
            html+=`<tr>`;
              html+=`<td style="border-bottom:.5pt solid #000;">Waktu Mendaftar</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${tanggalfulllengkap(tgldaftar)}</td>`;
            html+=`</tr>`; 
            html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">ID Pilihan Sekolah</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${id}</td>`;
            html+=`</tr>`; 
            html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">Nama Sekolah</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${val_namasekolah}</td>`;
            html+=`</tr>`; 
              html+=`<tr>`;   
              html+=`<td style="border-bottom:.5pt solid #000;">Status Pendaftaran</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
              html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_status}</td>`;
            html+=`</tr>`;
            // html+=`<tr>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">Status Pendaftaran</td>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">:</td>`;
            //   html+=`<td style="border-bottom:.5pt solid #000;">${r.objek[0].id_status}</td>`;
            // html+=`</tr>`;
            html+=`<tr>`;
              html+=`<td colspan="3" style="border:.5pt solid #000;padding:2px 5px;text-align:center;">Tahapan selanjutnya, Silakan Anda cek di Menu <b class="w3-red">Cari</b> untuk melihat/mengetahui data telah dikonfirmasi oleh Tim Verifikasi/Panitia PPDB.<br>Data yang telah diverifikasi akan masuk ke tahap Seleksi pada menu <b class="w3-red">SELEKSI</b>.</td>`;
            html+=`</tr>`;
          html +=`</table><br></div><div class="w3-center">`;
          html +=`<button onclick="printA5('statusformulir')" class="w3-button w3-pale-blue w3-round-large"><i class="fa fa-print"></i> Cetak</button><button onclick="document.getElementById('modalFormulirPendaftaran').style.display='none';" class="w3-button w3-pale-red w3-round-large"><i class="fa fa-times-rectangle-o"></i> Tutup</button>`;
          divform.innerHTML = html;

      }).catch(er => {
          console.log(er);
          divform.innerHTML = "Maaf, Trafik jaringan penuh. Silakan ulangi sesi Anda. "+er
      })

}

const printA5 = (iddiv) => {
    let div = document.getElementById(iddiv);
    let pracetak = document.getElementById("pracetak");
    //
    let doc = pracetak.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>PPDB SDN KECAMATAN CIPAYUNG</title>`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
    head.innerHTML += `<link href="https://fonts.googleapis.com/css?family=Raleway">`;
    head.innerHTML += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>`;
    head.innerHTML += `<style type="text/css">
    .versii-table{width:950px;max-width:100%;border-collapse:collapse}.versi-table{width:auto;max-width:100%;border-collapse:collapse}.versi-table td,.versi-table th,.versi-table tr,.versii-table td,.versii-table th,.versii-table tr{border:.5pt solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th,.versii-table th{background-color:#eee;color:#00f;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td,.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:.5pt solid #000}.versi-table tr:nth-of-type(odd) td,.versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:.5pt solid #000}
    </style>`;

    head.innerHTML += `<style type="text/css" media="print">
    @media print {html,body{margin:0;padding:0}
    @page {size: A5 portrait;max-height:100%;max-width:100%;}}</style>`;

    body.innerHTML = div.innerHTML


    window.frames["pracetak"].focus();
    window.frames["pracetak"].print();



}
const lacak_zonasi = (id) =>{
  let acuansekolah = db_settingppdbsekolah.filter(s => s.id_sekolah == id)[0];
  let rt_sekolah = acuansekolah.alamat_rt;
  let rw_sekolah = acuansekolah.alamat_rw;
  let kelurahan_sekolah = acuansekolah.alamat_kelurahan;
  let kecamatan_sekolah = acuansekolah.alamat_kecamatan;
  let kota_sekolah = acuansekolah.alamat_kota;

  let rt_cpdb = document.querySelector("[data-formulircpdb='cpdb_rt']")
  let rw_cpdb = document.querySelector("[data-formulircpdb='cpdb_rw']")
  let kelurahan_cpdb = document.querySelector("[data-formulircpdb='cpdb_kel']")
  let kecamatan_cpdb = document.querySelector("[data-formulircpdb='cpdb_kec']")
  let kota_cpdb = document.querySelector("[data-formulircpdb='cpdb_kota']")
  let ket = "";
  if(rt_cpdb == null ||  rw_cpdb == null || kelurahan_cpdb == null || kecamatan_cpdb == null || kota_cpdb == null){
    ket = "Alamat tidak lengkap";
    console.log(rt_cpdb, rw_cpdb, kelurahan_cpdb, kecamatan_cpdb, kota_cpdb)
  }else{

    if(rt_sekolah == rt_cpdb.value && rw_sekolah == rw_cpdb.value  && kelurahan_sekolah == kelurahan_cpdb.value && kecamatan_sekolah == kecamatan_cpdb.value && kota_sekolah == kota_cpdb.value){
        ket ="se_rt"
    }else if(rt_sekolah != rt_cpdb.value && rw_sekolah == rw_cpdb.value  && kelurahan_sekolah == kelurahan_cpdb.value && kecamatan_sekolah == kecamatan_cpdb.value && kota_sekolah == kota_cpdb.value){
        ket ="se_rw"
    }else if(rt_sekolah != rt_cpdb.value && rw_sekolah != rw_cpdb.value  && kelurahan_sekolah == kelurahan_cpdb.value && kecamatan_sekolah == kecamatan_cpdb.value && kota_sekolah == kota_cpdb.value){
        ket ="se_kelurahan"
    }else if(rt_sekolah != rt_cpdb.value && rw_sekolah != rw_cpdb.value  && kelurahan_sekolah != kelurahan_cpdb.value && kecamatan_sekolah == kecamatan_cpdb.value && kota_sekolah == kota_cpdb.value){
        ket ="se_kecamatan"
    }else if(rt_sekolah != rt_cpdb.value && rw_sekolah != rw_cpdb.value  && kelurahan_sekolah != kelurahan_cpdb.value && kecamatan_sekolah != kecamatan_cpdb.value && kota_sekolah == kota_cpdb.value){
        ket ="se_kota"
    }else{
        ket ="luar_kota"
      }
  }
  return ket
}
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
      html = `<br><label for="cpdb_kec">Kecamatan:</label>
      <select class="w3-border w3-select" id="cpdb_kec" data-formulircpdb="cpdb_kec" onchange="pilih_kec(this,'kondisi_kel')">
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
      html = `<br><label for="cpdb_kota_lainnya">Kota/Kabupaten:</label>
      <input type="text" class="w3-input w3-border" data-formulircpdb="cpdb_kota_lainnya" id="cpdb_kota_lainnya" oninput="ketik_kapital(this)"/>
      <label for="cpdb_kec">Kecamatan:</label>
      <input type="text" class="w3-input w3-border" data-formulircpdb="cpdb_kec" id="cpdb_kec" oninput="ketik_kapital(this)"/>
      <label for="cpdb_kel">Kelurahan:</label>
      <input type="text" class="w3-input w3-border" data-formulircpdb="cpdb_kel" id="cpdb_kel" oninput="ketik_kapital(this)"/>
      <label for="cpdb_rw">RW</label>
      <input type="number" class="w3-input w3-border"  min="1" style="width:123px" id="cpdb_rw" data-formulircpdb="cpdb_rw">
      <label for="cpdb_rt">RT</label>
      <input type="number" class="w3-input w3-border"  min="1"  style="width:123px" id="cpdb_rt" data-formulircpdb="cpdb_rt">
      <label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
      <input type="text" id="cpdb_alamat_jalan" data-formulircpdb="cpdb_alamat_jalan" class="w3-input w3-border"x  oninput="ketik_kapital(this)"/>
      
      File Pendukung:
      
      <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> <br/>
              </li><li>2. Surat Keterangan Domisili <label for="up_domisili" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label>
          </li></ul>
              <table class="w3-table-all w3-tiny">
              <tr>
                  <td class="preview_kk">Preview Akta</td>
                  </tr>
                  <tr>
                  <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" data-formulircpdb="cpdb_id_file_kk" disabled></input>
                  </td>
              </tr>
              <tr>
                  <td class="preview_domisili">Preview Akta</td></tr>
                  <tr>
                  <td><input type="text" class="cpdb_id_file_domisili w3-input" id="cpdb_id_file_domisili" data-formulircpdb="cpdb_id_file_domisili" disabled></input>
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
      html = `<br><label for="cpdb_kel">Kelurahan:</label>
      <select class="w3-border w3-select" id="cpdb_kel" data-formulircpdb="cpdb_kel" >
      <option value="" >Pilih Kelurahan</option>
      <option value="CIPAYUNG" >CIPAYUNG</option>
      <option value="RATUJAYA" >RATUJAYA</option>
      <option value="BOJONG PONDOK TERONG" >BOJONG PONDOK TERONG</option>
      <option value="PONDOK JAYA" >PONDOK JAYA</option>
      <option value="CIPAYUNG JAYA">CIPAYUNG JAYA</option>
      </select><br>
      <label for="cpdb_rw">RW</label>
      <input type="number" class="w3-input w3-border"  min="1" style="width:50px" id="cpdb_rw" data-formulircpdb="cpdb_rw">
      <br><label for="cpdb_rt">RT</label>
      <input type="number" class="w3-input w3-border"  min="1"  style="width:50px" id="cpdb_rt" data-formulircpdb="cpdb_rt">
      <br><label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
      <input type="text" id="cpdb_alamat_jalan" data-formulircpdb="cpdb_alamat_jalan" class="w3-input w3-border"x  oninput="ketik_kapital(this)"/>
      <br>File Pendukung:
              <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
              <table class="w3-table-all w3-tiny">
              <tr>
                  <td class="preview_kk"></td>
              </tr><tr>
                  <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" data-formulircpdb="cpdb_id_file_kk" disabled></input>
                  </td>
              </tr>
              </table>
      `;
  } else {
      html = `<br><label for="cpdb_kel">Kelurahan:</label>
      <input type="text" class="w3-input w3-border" data-formulircpdb="cpdb_kel" id="cpdb_kel" oninput="ketik_kapital(this)"/>
      <label for="cpdb_rw">RW</label>
      <input type="number" class="w3-input w3-border"  min="1"  style="width:50px" id="cpdb_rw" data-formulircpdb="cpdb_rw">
      <label for="cpdb_rt">RT</label>
      <input type="number" class="w3-input w3-border"  min="1" style="width:50px" id="cpdb_rt" data-formulircpdb="cpdb_rt">
      <label for="cpdb_alamat_jalan">Alamat Jalan/Komplek</label>
      <input type="text" id="cpdb_alamat_jalan" data-formulircpdb="cpdb_alamat_jalan" class="w3-input w3-border" oninput="ketik_kapital(this)"/>
      File Pendukung:
      <ul class="w3-ul"><li>1. Kartu Keluarga <label for="up_kk" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> <br/>
              </li><li>2. Surat Keterangan Domisili <label for="up_domisili" class="w3-button w3-round w3-green w3-small"><i class="fa fa-upload"></i> Upload </label> </li></ul>
              <table class="w3-table-all w3-tiny">
              <tr>
                  <td class="preview_kk"></td>
                  </tr>
                  <tr>
                  <td><input type="text" class="cpdb_id_file_kk w3-input" id="cpdb_id_file_kk" data-formulircpdb="cpdb_id_file_kk" disabled></input>
                  </td>
              </tr>
              <tr>
                  <td class="preview_domisili"></td></tr>
                  <tr>
                  <td><input type="text" class="cpdb_id_file_domisili w3-input" id="cpdb_id_file_domisili" data-formulircpdb="cpdb_id_file_domisili" disabled></input>
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

  div.innerHTML = `<img src="/img/barloading.gif" alt="proses loading">`;
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

  console.log(kelas);
  // console.log(kelas + "\n" + param);https://script.google.com/macros/s/AKfycbzvqVQtlBTMRUgkFN-ESC9RDaHhGHeou3i0LIjg-48jXWkjAO6S8jl8i2SwsN69QscB/exec
  let div = document.querySelector("input[data-formulircpdb='cpdb_id_file_" + kelas + "']"); //cpdb_id_file_
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

const StringTanggalnol = (tgl) => { //parameter tgl bentuk tgl
  let m = tgl.getMonth() + 1;
  let d = tgl.getDate();
  let y = tgl.getFullYear();


  let string = y + "-" + addZero(m) + "-" + addZero(d);


  //console.log(string)
  return string
}
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
  mod_teks.innerHTML = `<img src="/img/barloading.gif" alt="proses loading">`;
  let param = "?action=getAllDataTerminal";
  fetch(terminal + param).then(m => m.json())
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



const areainfo_modalinfosekolah = document.querySelector(".areainfo_modalinfosekolah");
const btn_info = document.querySelector(".btn_info");
const btn_syarat = document.querySelector(".btn_syrt");
const btn_pagu = document.querySelector(".btn_pagu");
const btn_alur = document.querySelector(".btn_alur");
const btn_stsk = document.querySelector(".btn_stsk");
const btn_selek = document.querySelector(".btn_selek");
const btn_yt = document.querySelector(".btn_yt");
const btn_wa = document.querySelector(".btn_wa");

const goToLink = async (s) =>{
  let modal = document.getElementById("modalinfosekolah");
  modal.style.display = 'block';

  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  //matikanfungsinya dulu;
  btn_info.onclick = null;
  btn_syarat.onclick = null;
  btn_pagu.onclick = null;
  btn_alur.onclick = null;
  btn_stsk.onclick = null;
  btn_selek.onclick = null; 
  btn_yt.onclick = null;
  btn_wa.onclick = null;


  let dbSekolah = db_settingppdbsekolah.filter(a => a.id_sekolah == s)[0];
  let namasekolah = dbSekolah.nama_sekolah;
  let mdsnamaskeolah = document.querySelector(".mdsnamaskeolah");
      mdsnamaskeolah.innerHTML = namasekolah.toUpperCase();
  let linkSetting = dbSekolah.url_settingppdb; // = urllogin
  let linkdBPendaftar =dbSekolah.url_pendaftar;
  let ss_dbPendaftar = dbSekolah.ss_pendaftar;
  let ss_dbSetting = dbSekolah.ss_settingppdb; // = idss 
  //pertama buka, panggil data di  ss Setting PPDDB, ambil teks_info-nya.
  
  await fetch(linkSetting + "?action=getpagu&idss=" + ss_dbSetting)
    .then(m => m.json())
    .then(r => {
        
        let teks1 = r.records[0].teks_info;
        areainfo_modalinfosekolah.innerHTML = teks1;
        // let bol = r.records[0].form_dikembalikan;
        // let bol = r.records[0].setingan_formdaftar;
        // let tmbl = document.querySelector(".bnt_daftar");
        // if(bol === true){
        //     tmbl.className =tmbl.className.replace("w3-hide","");
        // }else{
        //     tmbl.className += " w3-hide";
        // }

        // let info = document.querySelector(".divinfobaru");
    }).catch(er =>  {
      areainfo_modalinfosekolah.innerHTML =`Maaf, server sedang trafik. Kode(${er})`;

    })
  btn_pagu.onclick = function (){
    menu_kuota(linkSetting, namasekolah,ss_dbSetting)
  }
  btn_info.onclick = function (){
    menu_jadwal(linkSetting, namasekolah,ss_dbSetting)
  }
  btn_alur.onclick = function (){
    menu_alur(linkSetting, namasekolah, ss_dbSetting)
  }
  btn_syarat.onclick = function (){
    menu_persyaratan(linkSetting, namasekolah, ss_dbSetting)
  }
  btn_selek.onclick = function (){
    //urllogin, urlppdb, idss, idss
    menu_seleksi(linkSetting, linkdBPendaftar, ss_dbSetting)
  }
  btn_yt.onclick = function (){
    //urllogin, urlppdb, idss, idss
    menu_tutorial(linkSetting, namasekolah, ss_dbSetting)
  }
  btn_stsk.onclick = function (){
    menu_statistika(linkdBPendaftar);
  }
  btn_wa.onclick = function (){
    let html =`<div class="w3-card-4 w3-container">`;
        html +=`Silakan Anda dapat menghubungi Panitia PPDB di Sekolah Kami. Atau Anda dapat menghubungi:`;
        if(dbSekolah.no_wa !== ""){
          html +=`<div class="w3-xxlarge w3-center w3-text-blue"><a href="https://wa.me/${dbSekolah.no_wa}" target="_blank">https://wa.me/${dbSekolah.no_wa}</a></div>`
        }
        if(dbSekolah.urlgrup_wa !==""){
          html +=`<hr><div class="w3-xxlarge w3-center w3-text-blue">Atau silakan bergabung di Grup Whatsapp PPDB melalui tautan berikut <a href="${dbSekolah.urlgrup_wa}" target="_blank">${dbSekolah.urlgrup_wa}</a></div>`

        }
    html +=`</div>`;
    areainfo_modalinfosekolah.innerHTML = html
  }
}


const menu_kuota = (urllogin, namasekolah, idss) => {
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  fetch(urllogin + "?action=getpagu&idss=" + idss)
      .then(m => m.json())
      .then(r => {
          // api_jalur = r.records;
          let total_benar = (r.records[0].showutama_total == "Dipublikasikan") ? true : false;
          let jalur_benar = (r.records[0].showutama_perjalur == "Dipublikasikan") ? true : false;
          let khusus_benar = (r.records[0].showutama_khusus == "Disembunyikan") ? false : true;

          let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large"><h3 class="w3-center"> Pagu/Kuota (Daya Tampung) ${namasekolah}</h3><div class="w3-row-padding">`;
          if (total_benar) {
              html += `<div class="w3-col l12 m12  w3-container w3-center"><div class="w3-blue">Jumlah Keseluruhan Daya Tampung</div><div class="w3-round-large w3-pale-blue w3-card"><span class="w3-jumbo">${r.records[0].total_cpdb}</span><br/>Calon PDB</div></div><hr class="w3-clear"/>`;
          }
          if (jalur_benar) {
              html += `<div class="w3-col l12 m12 w3-container w3-margin-top w3-center"> <h3>Kuota Berdasarkan Sistem Jalur PPDB</h3> </div>`;
              if (r.records[0].sistem_zonasi == "Aktif") {
                  html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Zonasi</div> <div class="w3-round-large w3-deep-orange w3-card"><span class="w3-jumbo">${r.records[0].kuota_zonasi}</span><br/> Calon PDB</div> </div>`;
              }
              if (r.records[0].sistem_afirmasi == "Aktif") {
                  html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Afirmasi</div> <div class="w3-round-large w3-orange w3-card"><span class="w3-jumbo">${r.records[0].kuota_afirmasi}</span><br/> Calon PDB</div> </div>`;
              }
              if (r.records[0].sistem_ptk == "Aktif") {
                  html += `<div class="w3-col l4 m4 w3-center"> <div class="w3-aqua w3-center">Sistem Perpindahan Tugas/PTK</div> <div class="w3-round-large w3-khaki w3-card"><span class="w3-jumbo">${r.records[0].kuota_ptk}</span><br/> Calon PDB</div> </div>`;
              }
          }
          if (khusus_benar) {
              html += `<div class="w3-col l12 m12  w3-container "><div class="w3--pale-blue w3-padding w3-justify">${r.records[0].showutama_khusus}</div></div>`;
          }
          html += `</div><hr/></div>`;
          if (jalur_benar) {
              html += `<div class="w3-card-4 w3-container w3-margin w3-round-large"><h3 class="w3-center">Persyaratan dan/atau Ketentuan tiap-tiap Sistem Jalur</h3>`;
              if (r.records[0].sistem_zonasi == "Aktif") {
                  html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Zonasi:</span><ul class="w3-ul w3-card-4 w3-container">`;
                  let data = r.records.filter(k => k.syarat_zonasi !== "");
                  for (let a = 0; a < data.length; a++) {
                      html += `<li>${data[a].syarat_zonasi}</li>`;
                  }
                  html += `</ul><hr/>`;
              }
              if (r.records[0].sistem_afirmasi == "Aktif") {
                  html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Afirmasi:</span>
                  <ul class="w3-ul w3-container w3-card-4">`;
                  let dataafirmasi = r.records.filter(k => k.syarat_afirmasi !== "");
                  for (let b = 0; b < dataafirmasi.length; b++) {
                      html += `<li>${dataafirmasi[b].syarat_afirmasi}</li>`;
                  }
                  html += `</ul><hr/>`;
              }
              if (r.records[0].sistem_ptk == "Aktif") {
                  html += `Syarat dan Ketentuan Calon Peserta Didik Baru melalui <span class="w3-deep-orange">Jalur Perpindahan Tugas/Anak PTK:</span>
                  <ul class="w3-ul w3-container w3-card-4">`;
                  let dataaptk = r.records.filter(k => k.syarat_ptk !== "");
                  for (let c = 0; c < dataaptk.length; c++) {
                      html += `<li>${dataaptk[c].syarat_ptk}</li>`;
                  }
                  html += `</ul><hr/>`;
              }
          }
          html += `</div>`;
          areainfo_modalinfosekolah.innerHTML = html;
      })
      .catch(er => {
        console.log(er);

      });
      
};

const menu_jadwal = (urllogin, namasekolah, idss) => {
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  fetch(urllogin + "?idss=" + idss + "&action=getjadwal")
  .then(m => m.json()).then(r => {
            let ob = r.result;
            console.log(r);
            // html_jadwal(ob);
            let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large">
            <h3> Jadwal PPDB ${namasekolah}</h3></div><div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto">
            <table class="w3-table-all w3-small"><thead>`;
            html +=`<tr class="w3-pale-green">
                    <th class="w3-border">Pelaksanaan</th>
                    <th class="w3-border">Tanggal</th>
                    <th class="w3-border">Waktu</th>
                    <th class="w3-border">Lokasi</th>
                    <th class="w3-border">Keterangan</th>
                </tr>
            </thead>
            <tbody>`;
    for (let i = 0; i < ob.length; i++) {
        html += `<tr>
                <td class="w3-border">${ob[i].pelaksanaan}</td>
                <td class="w3-border">${ob[i].tanggal}</td>
                <td class="w3-border">${ob[i].waktu}</td>
                <td class="w3-border">${ob[i].lokasi}</td>
                <td class="w3-border">${ob[i].keterangan}</td>
                
            </tr>`;
    }
    html += `</tbody></table></div>`;
    areainfo_modalinfosekolah.innerHTML =  html;
        }).catch(er => {
            console.log(er);
            areainfo_modalinfosekolah.innerHTML =  `Maaf, terjadi kesalahan. Silakan ulangi sesi Anda.`;
        })

};

const menu_alur = (urllogin, namasekolah,idss) => {
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  let param = "?action=getsistemseleksi&idss=" + idss;
  fetch(urllogin + param).then(m => m.json())
      .then(k => {
          console.log(k);
          let r = k.records[0];
          let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large"><h3> Alur dan Seleksi</h3></div><div class="w3-card-4 w3-container w3-round-large w3-center w3-padding">`;
          html +=`<img class="w3-image pointerkan" src="/app/alur.png" onclick="klikpoto(this)"/>`
          html +=`</div><div class="w3-card-4 w3-container w3-margin w3-round-large"><h3> Sistem Jurnal dalam Seleksi</h3></div>`;
          html +=`<div class="w3-card-4 w3-container w3-round-large w3-center w3-padding">${namasekolah} beralamat di:`
          html += `<table class="w3-table-all w3-small">`;
            html +=`<tr><td>RT</td><td>${r.alamat_rt}</td></tr>`;
            html +=`<tr><td>RW</td><td>${r.alamat_rw}</td></tr>`;
            html +=`<tr><td>Kelurahan</td><td>${r.alamat_kelurahan}</td></tr>`;
            html +=`<tr><td>Kecamatan</td><td>${r.alamat_kecamatan}</td></tr>`;
            html +=`<tr><td>Kota</td><td>${r.alamat_kota}</td></tr>`
          html +=`</table></div>`;
          areainfo_modalinfosekolah.innerHTML = html;
      }).catch(er => {
          console.log(er);
          areainfo_modalinfosekolah.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda."
      })
};

const menu_persyaratan = (urllogin, namasekolah, idss) => {
  let linkjadwal = urllogin + "?idss=" + idss + "&action=getpersyaratan";
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  
  fetch(linkjadwal)
      .then(m => m.json())
      .then(s => {
          //console.log(r);
          let r = s.result;
          let syarat = r.filter(k => k.umum !== "");
          let dokumen = r
          let datalink = r.filter(l => l.link !== "");

              let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large"><h3> Persyaratan PPDB ${namasekolah}</h3></div>`;
              html +=`<div class="w3-card-4 w3-container w3-round-large" ><h4>Persyaratan Umum</h4><ul class="w3-ul">`;
              for (let a = 0; a < syarat.length; a++) {
                  html += `<li>${syarat[a].umum}</li>`;
              }
              html += `</ul></div>`;
              html +=`<br/><div class="w3-card-4 w3-container w3-round-large w3-padding"  style="overflow-x:auto"><h4>Persyaratan Dokumen</h4>`;
              html +=`<table class="w3-table-all w3-tiny"><thead><tr><th class="w3-border">Persyaratan</th><th class="w3-border">Opsional</th><th class="w3-border">Keterangan</th></tr></thead><tbody>`;
                for (let b = 0; b < dokumen.length; b++) {
                    html += `<tr>
                    <td class="w3-border">${dokumen[b].persyaratan}</td>
                    <td class="w3-border">${dokumen[b].optional}</td>
                    <td class="w3-border">${dokumen[b].keterangan}</td></tr>`;
                }
              html += `</tbody></table>
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
              areainfo_modalinfosekolah.innerHTML = html ;
      }).catch(er => console.log(er))

  
};

const menu_statistika = (urlppdb ) => {
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  let param = "?action=getdatasheet&tab=respon";
  fetch(urlppdb + param).then(m => m.json())
      .then(r => {
          // console.log(r);

          let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large">
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
                  <td>${r.records.filter(k => k.id_status == "Perlu Verifikasi").length}</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>Tahap Seleksi</td>
                  <td>${r.records.filter(k => k.id_status == "Proses Jurnal").length}</td>
                  
              </tr>
              <tr>
                  <td>Lainnya (tidak lengkap, Spam, atau dikembalikan)</td>
                  <td>${r.records.filter(k => k.id_status == "Ditolak" || k.id_status == "Dikembalikan").length}</td>
                  
              </tr>
          </tbody>
      </table>
  </div>


  `;

  areainfo_modalinfosekolah.innerHTML = html;
      }).catch(er => {
          console.log(er);
      })
};

let jalur_api = [];
const menu_seleksi = (urllogin, urlppdb, idss) => {
  jalur_api = []
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  fetch(urllogin + "?action=getpagu&idss=" + idss)
      .then(m => m.json())
      .then(r => {
          // console.log(r);
          jalur_api = r.records;
          let bol = jalur_api[0];
          let c_zonasi = (r.records[0].sistem_zonasi == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="ZONASI" id="se_zon" class="w3-radio" onchange="get_Seleksi('${urllogin}', '${urlppdb}', '${idss}', this)"> <label for="se_zon"> Seleksi Jalur Zonasi</label><br/>` : "";
          let c_afirmasi = (r.records[0].sistem_afirmasi == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="AFIRMASI" id="se_afr" class="w3-radio" onchange="get_Seleksi('${urllogin}', '${urlppdb}', '${idss}',this)"><label for="se_afr"> Seleksi Jalur Afirmasi</label><br/>` : "";
          let c_ptk = (r.records[0].sistem_ptk == "Aktif") ? `<input type="radio" name="jurnal_seleksi" value="PERPINDAHAN TUGAS/ANAK PTK" id="se_ptk" class="w3-radio" onchange="get_Seleksi('${urllogin}', '${urlppdb}', '${idss}',this)"><label for="se_ptk">Seleksi Jalur Perpindahan Tugas/Anak PTK</ptk>` : "";


          let html = `<div class="w3-card-4 w3-container w3-margin w3-round-large"><h3 class="w3-center"> Tahap Seleksi</h3></div>`
          html +=`<div class="w3-card-4  w3-round-large w3-padding"  style="overflow-x:auto"><div class=" w3-pale-red w3-container w3-padding">
      ${c_zonasi} ${c_afirmasi} ${c_ptk}
      </div>
  </div>
  <hr/>
  <div class="w3-card-4  w3-round-large w3-padding result_jurnal_seleksi"  style="overflow-x:auto">
  </div>
  `;
      areainfo_modalinfosekolah.innerHTML = html;

      }).catch(er => {
          console.log(er);
          areainfo_modalinfosekolah.innerHTML = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda."
      })
      
};


const get_Seleksi = async (urllogin, urlppdb, idss, el) => {
  let divin = document.querySelector(".result_jurnal_seleksi");
  divin.innerHTML = `<img src="app/barloading.gif" alt="proses loading">`;
  let teks = (el.value == "PERPINDAHAN TUGAS/ANAK PTK") ? "ptk" : el.value.toLowerCase();
  let dataseleksi = await fungsi_objek_jurnal(urllogin, urlppdb, idss, teks);
  console.log(dataseleksi)
  let html = `<h3 class="w3-center">TAHAP JURNAL PPDB JALUR ${el.value}<br/>PER ${tanggalfulllengkap(new Date())}</h3>
  <div style="overflow-x:auto;"><table class="w3-table-all w3-tiny w3-centered" style="margin:0 auto">
  <thead> 
  <tr class="w3-pale-red"> 
      <th rowspan="2" style="text-align:center;vertical-align:middle;border:.5pt solid #000">Jalur PPDB</th>
      <th rowspan="2" style="text-align:center;vertical-align:middle;border:.5pt solid #000">Prioritas</th> 
      <th rowspan="2" style="text-align:center;vertical-align:middle;border:.5pt solid #000">No. Urut</th> 
      <th rowspan="2" style="text-align:center;vertical-align:middle;border:.5pt solid #000">ID Pendaftar</th> 
      <th rowspan="2"  style="text-align:center;vertical-align:middle;border:.5pt solid #000">Nama CPDB</th> 
      <th rowspan="2" style="text-align:center;vertical-align:middle;border:.5pt solid #000">Umur</th> 
      <th colspan="5" style="text-align:center;vertical-align:middle;border: .5pt solid #000000">Alamat</th> 
  </tr> 
  <tr class="w3-pale-red"> 
    <th style="text-align:center;vertical-align:middle;border:.5pt solid #000">RT</th>
    <th style="text-align:center;vertical-align:middle;border:.5pt solid #000">RW</th>
    <th style="text-align:center;vertical-align:middle;border:.5pt solid #000">Kelurahan</th>
    <th style="text-align:center;vertical-align:middle;border:.5pt solid #000">Kecamatan</th>
    <th style="text-align:center;vertical-align:middle;border:.5pt solid #000">Kota</th>
  </tr></thead><tbody>`;
  html += dataseleksi.terseleksikuota;
  html += `</tbody></table></div>`;
  //html+=`<p class="w3-tiny">Prioritas adalah penjurnalan berdasarkan kriteria rentang umur tertentu dan zonasi pendaftar. Penentuan kriteria prioritas disesuaikan dengan Perwal Kota Depok No. 17 Tahun 2021 dan Rapat dengan Dewan Komite</p>`;
  let bol = jalur_api[0]["publikasi_seleksi_" + teks];
  //console.log(bol);
  if (bol) {
      divin.innerHTML = html;
  } else {
      divin.innerHTML = `<strong>Mohon maaf, Sistem seleksi tidak dipublikasikan</strong>`;

  }




};

const fungsi_objek_jurnal = async (urllogin, urlppdb, idss, zonasi) => {
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
          jalur_api = r.records;
          kuota = jalur_api[0]["kuota_" + zonasi];
      }).catch(er => console.log(er))
  
  console.log(cariUpdate)
  console.log(jalur_api)
  console.log(db_pendaftar)
  console.log(zonasi)
  

  let keyOb = zonasi;
  // let warna = Math.floor(Math.random() * 16777215).toString(16);
  let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
  let indekwarna = (Math.random() * 10).toFixed(0);
  let warna = arrayWarna[indekwarna];
  let html = ``;
  let htmlnonkuota = ``;
  let prioritas = objek_settingseleksi;
  let db = db_pendaftar.filter(k => k.jalur_cpdb == zonasi.toUpperCase() && k.id_status == "Proses Jurnal");
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
              <td class="${warna}" style="border:.5pt solid #000">${zonasi.toUpperCase()}</td>
              <td class="${warna2}" style="border:.5pt solid #000">${prioritas[a].nama_prioritas}</td>
              
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${nourut - kuota}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].id_pendaftar}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].nama_cpdb}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_umur}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_rt}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_rw}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kel}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kec}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kota}</td>
                      </tr>`;
          } else {
              acc.push(data[i]);
              html += `<tr><td class="${warna}" style="border:.5pt solid #000">${zonasi.toUpperCase()}</td>
              <td class="${warna2}" style="border:.5pt solid #000">${prioritas[a].nama_prioritas}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${nourut}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].id_pendaftar}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].nama_cpdb}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_umur}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_rt}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_rw}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kel}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kec}</td>
                      <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${data[i].cpdb_kota}</td>
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
      htmllimit += `<tr><td style="text-align:left;vertical-align:top;border:.5pt solid #000">${x + 1}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].id_status}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].id_pendaftar}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].jalur_cpdb}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].nama_cpdb}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_umur}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_rt}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_rw}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_kel}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_kec}</td>
              <td style="text-align:left;vertical-align:top;border:.5pt solid #000">${db[x].cpdb_kota}</td>
              
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

//start

const menu_tutorial = (urllogin, namasekolah, idss) => {
  areainfo_modalinfosekolah.innerHTML = `<div class="w3-center"><img src="/img/barloading.gif"></div>`;
  let data = new FormData();
  data.append('action', 'postgetumum');
  data.append("idss", idss);
  data.append("tab", "yt");
  fetch(urllogin, { method: 'post', body: data }).then(m => m.json())
      .then(r => {
          //console.log(r);
          let rec = r.records.filter(k => k.status_yt == "Dipublikasikan")
          html_yt(rec,namasekolah);
      }).catch(er => {
          console.log(er);
          areainfo_modalinfosekolah.innerHTML  = "Maaf, terjadi kesalahan. Silakan ulangi sesi Anda.";
      })


};
const html_yt = (r,namasekolah) => {
  let html = `
  <div class="w3-card-4 w3-container w3-margin w3-round-large">
      <h3 class="w3-center"> Informasi Visual</h3>
  </div>
  <div class="w3-card-4  w3-round-large w3-padding w3-margin-bottom" >
  Di sini Anda dapat meyimak ulasan mengenai informasi seputar PPDB di <b>${namasekolah}</b> Tahun Pelajaran ini. Baik berupa informasi, petunjuk, tutorial pengisian, dan penjelasan-penjelasan lainnya. Silakan pilih jenis informasi melalui pilihan berikut ini.<br/>
  Pilih Informasi:
      <select class="w3-select w3-border w3-pale-red w3-border-blue select_yt" onchange="pilih_yt()">
      <option value="0" selected>Pilih</option>`;
  for (i = 0; i < r.length; i++) {
      html += `<option value="${r[i].id_yt}">${r[i].ket_yt}</option>`;
  };

  html += `</select></div> <div class="w3-card-4  w3-round-large w3-padding w3-center" >
  <div class="containerbaru content_yt">`;

  html += `<iframe class="responsive-iframebaru" src="https://www.youtube.com/embed/${r[0].id_yt}" title="YT"></iframe>`;

  html += `</div></div>`;
  areainfo_modalinfosekolah.innerHTML  = html;
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
//end
const barcari = document.querySelector(".barcari");
const div_overlaycari = document.querySelector(".overlaycari");
const div_sidebarcari = document.querySelector(".sidebarcari");
barcari.onclick = function (){
  div_overlaycari.style.display = "block";
    div_sidebarcari.style.display = "block";
}
