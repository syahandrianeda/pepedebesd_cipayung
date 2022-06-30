
let db_pendaftarrekap, objek_settingpagurekap, objek_settingseleksirekap;
const rekap_panggilsemuadata = async () => {
    //rekapsettingpagu:
    //rekapsettigprioritas:
    //rekappendaftar:
    //rekaploos;
    //urlppdb == linkppdb
    //urlppdb == linklogin;
    // idss = idss setting
    let div = document.querySelector(".verif_resultseleksi");
    div.innerHTML = `
    <div class="w3-margin w3-center   w3-pale-red w3-round-large" style="margin:0 auto">
      <h2 class="">Rekapitulasi Pendaftar</h2>
      <div class="tombolpengawas w3-margin">
        <button onclick="prntPengawsrekap()" class="w3-button w3-green w3-round-xxlarge">PRINT</button>
        <button onclick="xlPengawsrekap()" class="w3-button w3-blue w3-round-xxlarge">Export Xls</button>
       
      </div>
      <div class="tabelrekappengawas w3-border w3-border-blue w3-round-large w3-margin w3-white" style="overflow-x: auto;">
        <h4 class="w3-center" contenteditable="true">DATA PESERTA DIDIDK BARU SD NEGERI KECAMATAN CIPAYUNG</h4>
        <h5 class="w3-center" contenteditable="true">TAHUN PELAJARAN 2021/2022</h5> 
        <table class="w3-table-all garis rekaptabelsekecamatan w3-tiny">
          <thead >
            <tr class="w3-light-grey">
              <th rowspan="2">No</th>
              <th rowspan="2">Nama Sekolah</th>
              <th colspan="3">Jumlah Pendaftar</th>
              <th colspan="3">Jumlah Diterima</th>
              <th rowspan="2">Jumlah Rombel</th>
              <th rowspan="2">Keterangan</th>
            </tr>
            <tr class="w3-light-grey">
              <th>L</th>
              <th>P</th>
              <th>Jumlah</th>
              <th>L</th>
              <th>P</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="10"  class="w3-center">
                <img src="/app/barloading.gif" alt="proses loading">
              </td>
            </tr>
          </tbody>
        </table>
        <br>
        <br>
        <div class="w3-cente w3-small" style="float:right;margin-right: 30px;">
          Depok, <span contenteditable="true"> Juli 2021</span><br>
          <span contenteditable="true">Koordintor Pengawas Kec. Cipayung</span>
          <br>
          <br>
          <br>
          <br>
          <u><b contenteditable="true">KETIKAN NAMA PENGAWAS</b></u><br>
          <span contenteditable="true">KETIKAN NIP PENGAWAS</span>
        
        </div>
        <div style="clear: both;"></div>
        </div>
      <br>
      <br>
      <br>
    </div>`

    let urlscript = [{
        "sekolah": "SDN RATUJAYA 1",
        "kelas": "kuota_ratujaya1",
        "url": "https://script.google.com/macros/s/AKfycbzpl-CIjAjTVOwlpf7ZKQ34hELzrPupKNF1v94yz9nU4AKY5RfUaMg3pP70lYd3iYkk/exec",
        "idss": "1U65gnNh7bRfZlD0B3JxZ6B5j6RFgyD77ro67jvrQ1Hg",
        "ppdb": "https://script.google.com/macros/s/AKfycbw_CxeurtA5idnQukkl7-xtnFWITXc-tgrqQ7F6OKiKUepV0gWUA5Jl4lR4sBDFC8j6/exec"
    }, {
        "sekolah": "SDN RATUJAYA 2",
        "kelas": "kuota_ratujaya2",
        "url": "https://script.google.com/macros/s/AKfycbyomW88hiqeaM6EKAr3nul28QoXcukop3E61r9Byf10NJtE3xkybat0v9kqSh3-ySahVA/exec",
        "idss": "1avLVXKt-LVXs3XB_Q452L0a4-bjmZDEjEr1npKzdigY",
        "ppdb": "https://script.google.com/macros/s/AKfycbwBzMzpHXe4tt-t0ZkINwF65cPcPAfonUMAHb3FO7BfXZVSO0drotC_S2HzYnBpJfeGBw/exec"
    }, {
        "sekolah": "SDN PONDOK TERONG 1",
        "kelas": "kuota_ponter1",
        "idss": "10ikKaNupSl6Ssww0KEWw9o8sQJQ1RpA1c3U8po4LYuQ",
        "url": "https://script.google.com/macros/s/AKfycbyZOmnGVRMZfoopwLIoQ2LeDmayjdP7_wTU53HOBwGfiM_ylU0wKuzJyzGjcJs_9ySmgA/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbyfogeCk3qiRblZA0cnwujJqdHoNKwkHveEfw7WyeFdfDOFL6FuOe0Wf1P-oPVlsBoe/exec"
    }, {
        "sekolah": "SDN PONDOK TERONG 3",
        "kelas": "kuota_ponter3",
        "url": "https://script.google.com/macros/s/AKfycbx4UVsESvnS-HFQOLZ1HPHtuYWI9K1aApAc_yxmDZQpEImXUKNH9ZWL-ex_lmyNppzj/exec",
        "idss": "1zKMNI-AhN4ziGhZ20p_bMZAOjE50HMBJ6-NG_QqobDc",
        "ppdb": "https://script.google.com/macros/s/AKfycbzYMPW4a9VJUVLC5OKjUwYiJYjyaq8HLaih1IWOxTqa04nOyVByLJQIdpLeukZx5py3/exec"
    }, {
        "sekolah": "SDN PONDOK TERONG 4",
        "kelas": "kuota_ponter4",
        "url": "https://script.google.com/macros/s/AKfycbzgtCkGubK9ANlTswcRHzaP-xqQd8lqxZLjT3DkAb1KZ-CJ_b80dNcTMqdcyHUOdACv0A/exec",
        "idss": "1bKxTClpqJ34IkAo_gVuCl__u6CprEGBMWPJFh5c8KN4",
        "ppdb": "https://script.google.com/macros/s/AKfycbyLkRUvG9_gtuBh3UNhICNjifkhOnSj9ObX-EYYX51R3OW81PREN857jHyRTU5WDQm7/exec"
    }, {
        "sekolah": "SDN RATUJAYA 3",
        "kelas": "kuota_ratujaya3",
        "url": "https://script.google.com/macros/s/AKfycbyZEMq50GvQBFlPTeO06vwI9fpxgGL4wedkYqw8kodK8TFvIejHE5AbPfoS7XPaRvs4jg/exec",
        "idss": "1AkJ2PYsAGLE6PQu9DMJP48R5NXOxu-ipdueyJC4Akrs",
        "ppdb": "https://script.google.com/macros/s/AKfycbwUy4hxy6xB3toKOJp1cvHtS99zJrQ8pfvg1foA9KFUtjdti08rGk-uuyZIX9Fdp87O/exec"
    }, {
        "sekolah": "SDN UTAN JAYA",
        "kelas": "kuota_utanjaya",
        "url": "https://script.google.com/macros/s/AKfycbwIJK3JGkczKEawtP6qAdx-b_DtNq5T0NPYRiyCbiFwC7_XOHgGSalMW67IHhE4h__4eQ/exec",
        "idss": "19siwvo-vFhJuhU12iwU_diF36EGLUzs1v6anJ0xwhfk",
        "ppdb": "https://script.google.com/macros/s/AKfycby1IAT32XXre0kd6_O9UWWanql-vkVGhnef9Q1D0m2QcyCBlg8DboA2CviNU1MSho7LOA/exec"
    }, {
        "sekolah": "SDN CIPAYUNG 1",
        "kelas": "kuota_cipayung1",
        "url": "https://script.google.com/macros/s/AKfycbysXu3g6jkD-OAdjzAmSjvkpFdCYOmqbPPcfvCWpNMPTBA6GyaggTvg3o6n3c2ymI-d/exec",
        "idss": "1E1LoeoUXVn7raLQFHeUtpvrt2Ns1ZWFziZahV-UoZO0",
        "ppdb": "https://script.google.com/macros/s/AKfycbzY3E6aNSCnrgFV4hbT03Xd_VOhSWfK83GZRc7fMLQlZB_199KZVxNIMCdjGFymyh0E1g/exec"
    }, {
        "sekolah": "SDN CIPAYUNG 2",
        "kelas": "kuota_cipayung2",
        "idss": "10OOIxTrPAakmnYpgKsyQjTf41B-u9T-f6BrPqxTimPY",
        "url": "https://script.google.com/macros/s/AKfycbw2kv0h79eThXl_20XVSWyZYKeTpCUqBs-Bvlz-q9R6y1FOB-vziybrq-BiaZvhxZ11/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbzyN2wqEuyYfryuBqQg8s2HHNy4ES2aWkuqAtJPO2Gr1Pxn4154o-pNEmgRnQJHOU80/exec"
    }, {
        "sekolah": "SDN CIPAYUNG 3",
        "kelas": "kuota_cipayung3",
        "idss": "1G3fff9ybmPwGVFaR_oqunI0BMTZ1b-75HMAsk8QbA6c",
        "url": "https://script.google.com/macros/s/AKfycbzWHfR_CcExF9FWANc5nakR1-4iHEpleW6zPdU0qjHt9_tiBqt_tYH9yCXTUG7C0uLKmQ/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbxApSIpLIZf6bNWgpKwh9YOoq7RFS91F99ol_dclrbM1Dy2nnBmj24nm_0ccy4iFC60Gg/exec"
    }, {
        "sekolah": "SDN CIPAYUNG 4",
        "kelas": "kuota_cipayung4",
        "idss": "1YTBSa8rurPsJQKb-qRLIRw3b7H8RXmxfcBQLtrqosyk",
        "url": "https://script.google.com/macros/s/AKfycbzgk2nUK447BUNrZ729BH9vCU1DYnE4U1pT0_myBxz6n_LUVZiRgFp4v6wtXMvN9pN3/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbwYIVjnZxB_Wc2cSRVh9ekKFley8f_ZzTei5vI5tOUXJMOdMFDgR6Vr4vIISISGtysmsA/exec"
    }, {
        "sekolah": "SDN CITAYAM 1",
        "idss": "1Zs7AU-lWKvXUrwjgqTHlTe0EE6jCkafiG2yDCJFRQDI",
        "url": "https://script.google.com/macros/s/AKfycbx_QKugHrnQHwFZAVrpcvI7FPCEpnMUfM_nJyLIPvREySE7j05J5T37n2yJu7ZRjytn/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbwSFZslGYKE9YybQ47ecw9NyHfO2Brg1Ij82aKpdssG9OSjOTzoeWapUeo6gGxvnHwtEg/exec"
    }, {
        "sekolah": "SDN CITAYAM 4",
        "kelas": "kuota_citayam4",
        "idss": "1e2KCLdvmD7js72Yrb6h3PMjos4bfnpGFMdiqXq0lKeE",
        "url": "https://script.google.com/macros/s/AKfycby5m9iXQt_fYT61eezYS9I2knGFC3aLtJyX3OdL39IciXV1XyVHU9N1i1cBYPVaiFRi/exec",
        "ppdb": "https://script.google.com/macros/s/AKfycbxNIrTDAsJVJ8qwrcrnBCDW1zyF3zMrhQe3-94Aj148lQseM5y-1c_q0AVvFHNwMler/exec"
    }];
    let html = "";
    let tbody = document.querySelector(".rekaptabelsekecamatan").getElementsByTagName("tbody")[0];
    for (i = 0; i < urlscript.length; i++) {
        let urlppdb = urlscript[i].ppdb;
        let namasekolah = urlscript[i].sekolah;
        let urllogin = urlscript[i].url;
        let idss = urlscript[i].idss;

        let param = "?action=getdatasheet&tab=respon";
        await fetch(urlppdb + param).then(m => m.json()).then(r => {
            db_pendaftarrekap = r.records;
        }).catch(er => console.log(er));


        let link = urllogin + "?action=getsistemseleksi&idss=" + idss;
        await fetch(link).then(m => m.json()).then(r => {
            objek_settingseleksirekap = r.records;
        }).catch(er => console.log(er))


        let linkpagu = urllogin + "?action=getpagu&idss=" + idss;
        await fetch(linkpagu).then(m => m.json()).then(r => {
            objek_settingpagurekap = r.records;
        }).catch(er => console.log(er))
        let datazonasi = fungsi_html_jurnalrekap("kuota_zonasi");
        let dataafirmasi = fungsi_html_jurnalrekap("kuota_afirmasi");
        let dataptk = fungsi_html_jurnalrekap("kuota_ptk");

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
        let rekapcpdblolos = eda;

        html += `<tr>
        <td>${i + 1}</td>
        <td>${namasekolah}</td>
        <td contenteditable="true">${db_pendaftarrekap.filter(l => l.cpdb_jk == "L").length}</td>
        <td contenteditable="true">${db_pendaftarrekap.filter(l => l.cpdb_jk == "P").length}</td>
        <td contenteditable="true">${db_pendaftarrekap.length}</td>
        <td contenteditable="true">${rekapcpdblolos.filter(l => l.cpdb_jk == "L").length}</td>
        <td contenteditable="true">${rekapcpdblolos.filter(l => l.cpdb_jk == "P").length}</td>
        <td contenteditable="true">${rekapcpdblolos.length}</td>
        <td contenteditable="true" class="w3-center">${objek_settingpagurekap[0].kuota_kelas}</td>
        <td contenteditable="true"></td>
    </tr>`;
        console.log(i)
        tbody.innerHTML = `<tr><td colspan="10" class="w3-center"><img src="/app/barloading.gif" alt="proses loading"> Memproses data ${namasekolah}</td></tr>`;
    };

    tbody.innerHTML = html;

};


const fungsi_html_jurnalrekap = (zonasi) => {

    let kuota = objek_settingpagurekap[0][zonasi];


    let keyOb = zonasi.split("_")[1];
    // let warna = Math.floor(Math.random() * 16777215).toString(16);
    let arrayWarna = ["w3-light-blue", "w3-aqua", "w3-lime", "w3-sand", "w3-khaki", "w3-light-gray", "w3-pale-red", "w3-pale-yellow", "w3-pale-green", "w3-pale-blue"];
    let indekwarna = (Math.random() * 10).toFixed(0);
    let warna = arrayWarna[indekwarna];
    let html = ``;
    let htmlnonkuota = ``;
    let prioritas = objek_settingseleksirekap;
    let db = db_pendaftarrekap.filter(k => k.jalur_cpdb == zonasi.replace("kuota_", "").toUpperCase() && k.id_status == "TAHAP SELEKSI");
    let count = 0;
    let urut = 1;

    let acc = [];
    let nonacc = []
    for (let a = 0; a < prioritas.length; a++) {
        let objekfilter = Object.fromEntries(Object.entries(objek_settingseleksirekap[a]).filter(([k, v]) => !(v == 0 || v == "Selainnya" || v == "SELAINNYA" || k.indexOf("set") == -1)));
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

const prntPengawsrekap = () => {
    let isibody = document.querySelector(".tabelrekappengawas").innerHTML;
    let el = document.getElementById("iframeprint");
    let doc = el.contentDocument;
    // head, body
    let head = doc.head;
    let body = doc.body;
    //isikan HEAD dengan title, style, link, dll.
    head.innerHTML = `<title>REKAPITULASI SELEKSI PPDB SDN KECAMATAN CIPAYUNG</title>`;
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


    body.innerHTML = `${isibody}<div style="break-after:page"></div>`;




    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
};

const xlPengawsrekap = () => {
    let nama_tabel = document.querySelector(".rekaptabelsekecamatan");
    let div = document.getElementById("frameexcel");
    let db = nama_tabel;
    let html = `<table><tr>
    <td colspan="${db.rows[2].cells.length}">DATA PESERTA DIDIDK BARU SD NEGERI KECAMATAN CIPAYUNG</td></tr>
    <tr><td colspan="${db.rows[2].cells.length}">TAHUN PELAJARAN 2021/2022</td>
    </tr>
    ${nama_tabel.innerHTML}
    </table>`;
    div.innerHTML = html;
    let lr = db.rows.length;
    $("#frameexcel").table2excel({

        name: "Worksheet Name",
        filename: "DATA REKAP PPDB SEKECAMATAN CIPAYUNG " + new Date().getTime(),
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

}

