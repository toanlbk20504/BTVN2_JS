function tinhTien (){
    var luongNgayEl=document.getElementById("txt-luong");
    var ngayLamEl= document.getElementById("txt-ngay");

    var luongNgayValue=luongNgayEl.value*1;
    var ngayLamValue=ngayLamEl.value*1;
    var tienLuong= luongNgayValue*ngayLamValue;
    document.getElementById("result").innerHTML= `<h1>Tiền lương tháng này của bạn:${tienLuong.toFixed(2)}VND</h1>`
}
function tinhTrungBinh(){
    var soThuNhatValue=document.getElementById("so-thu-nhat").value*1;
    var soThuHaiValue=document.getElementById("so-thu-hai").value*1;
    var soThuBaValue=document.getElementById("so-thu-ba").value*1;
    var soThuTuValue=document.getElementById("so-thu-tu").value*1;
    var soThuNamValue=document.getElementById("so-thu-nam").value*1;
    var trungBinh= (soThuNhatValue+soThuHaiValue+soThuBaValue+soThuTuValue+soThuNamValue)/5;
    document.getElementById("result2").innerHTML=`<h1>Trung bình của 5 số: ${trungBinh.toFixed(2)}</h1>`
}
function doi(){
    var tienDoValue=document.getElementById("so-do").value*1;
    var tienViet= tienDoValue*23500;
    document.getElementById("result3").innerHTML=`<h1>${tienViet.toFixed(2)} VND</h1>`
}
function tinhChuVi(){
    var chieuDaiValue=document.getElementById("chieu-dai").value*1;
    var chieuRongValue = document.getElementById("chieu-rong").value*1;
    var dienTich= chieuDaiValue*chieuRongValue;
    var chuVi= (chieuDaiValue+chieuRongValue)*2;
    document.getElementById("result4").innerHTML=`<h1>Diện tích là: ${dienTich.toFixed(2)} Chu vi là: ${chuVi.toFixed(2)}</h1>`
}
function tongCacChuSo(){
    var soDaNhap=document.getElementById("so-da-nhap").value*1;
    var soHangChuc=Math.floor(soDaNhap/10);
    var soHangDonVi=soDaNhap%10;
    var tongHaiSo=soHangChuc+soHangDonVi;
    document.getElementById("result5").innerHTML=`<h1>Tổng của 2 chữ số là: ${tongHaiSo}</h1>`
}