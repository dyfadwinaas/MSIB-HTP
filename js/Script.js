function dataperson() {
    let forms = document.getElementById('frm');
    let nema = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let data = `input data : 
    <br> Nama: ${nama}
    <br> Pekerjaan: ${pekerjaan}
    <br> hobby: ${hobby}`;
    document.getElementById('hasil').innerHTML = data;


}