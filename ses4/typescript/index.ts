class ConNguoi {
    ten: string;
    tuoi: number;
    sex: number;
    diachi: string;
   
constructor(ten: string, tuoi: number, sex: number, diachi: string){
    this.ten = ten;
    this.tuoi = tuoi;
    this.sex = sex;
    this.diachi = diachi
}
    sexcheck(){
        if (this.sex == 1){
            return 'Nam'
        } else if (this.sex == 2){
            return 'Nữ'
        } else {
            return 'Không đề cập'
        }
    }
    showinfo(): void {
        var tbody = document.getElementById("tbody");
        tbody!.innerHTML += `<tr>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.sexcheck()}</td>
            <td>${this.diachi}</td>
        </tr>`
    }
}
var nguoi1 = new ConNguoi('Ngo Vu Thanh Loc', 18, 1,'Ha Noi')
nguoi1.showinfo();
var nguoi2 = new ConNguoi('Ngo Quyen', 30, 1,'Ha Noi')
nguoi2.showinfo();
var nguoi3 = new ConNguoi('Ngo Kha Ba', 25, 1,'Ha Noi')
nguoi3.showinfo();
var nguoi4 = new ConNguoi('Ngo Phu Nu', 18, 2,'Ha Noi')
nguoi4.showinfo();
var nguoi5 = new ConNguoi('Ngo Gioi Tinh Khac', 18, 3,'Ha Noi')
nguoi5.showinfo();

class NhanVien extends ConNguoi {
    mgv: string;
    luongcb: number;
    songaycong: number;
    constructor(ten: string, tuoi: number, sex: number, diachi: string, mgv: string, luongcb: number, songaycong: number){
        super(ten,tuoi,sex,diachi)
        this.mgv = mgv;
        this.luongcb = luongcb;
        this.songaycong = songaycong
    }
    salary(): number{
        return (this.luongcb*this.songaycong);
    }
    showmgvinfo():void{
        var _tbodybot = document.getElementById("tbody-bot");
        _tbodybot!.innerHTML += `<tr>
        <td>${this.ten}</td>
        <td>${this.tuoi}</td>
        <td>${this.sexcheck()}</td>
        <td>${this.diachi}</td>
        <td>${this.mgv}</td>
        <td>${this.luongcb}</td>
        <td>${this.songaycong}</td>
        <td>${this.salary()}</td>
        </tr>`
    }
}
var nhanvien1 = new NhanVien('Ngo Vu Thanh Loc',18,1,'Hanoi','A01',3000,20);
nhanvien1.showmgvinfo();
var nhanvien2 = new NhanVien('Khong Biet Ten',18,1,'Hanoi','A02',3000,30);
nhanvien2.showmgvinfo();
var nhanvien3 = new NhanVien('Ngo Vu Loc Thanh',18,1,'Hanoi','A03',4000,10);
nhanvien1.showmgvinfo();

class SinhVien extends ConNguoi{
    msv: string;
    diemtoan: number;
    diemly: number;
    diemhoa: number;
    constructor(ten: string, tuoi: number, sex: number, diachi: string, msv: string, diemtoan: number, diemly: number, diemhoa: number){
        super(ten,tuoi,sex,diachi)
        this.msv = msv;
        this.diemtoan = diemtoan;
        this.diemly = diemly;
        this.diemhoa = diemhoa
    }
    diemtb(): number{
        return ((this.diemtoan+this.diemhoa+this.diemly)/3)
    }
    sort(): string{
        let avgscore = this.diemtb();
        if (avgscore < 5){
            return 'Học Sinh Yếu'
        } else if (avgscore >= 5 && avgscore < 7.5){
            return 'Học Sinh Khá'
        } else {
            return 'Học Sinh Giỏi'
        }
    }
    showstudentinfo(): void{
        var _tbody = document.getElementById("tbody-list");
        _tbody!.innerHTML += `<tr>
        <td>${this.ten}</td>
        <td>${this.tuoi}</td>
        <td>${this.sexcheck()}</td>
        <td>${this.diachi}</td>   
        <td>${this.msv}</td>   
        <td>${this.diemtoan}</td>   
        <td>${this.diemly}</td>   
        <td>${this.diemhoa}</td>   
        <td>${this.diemtb().toFixed(2)}</td>   
        <td>${this.sort()}</td>   
    </tr>`;
    }
}
var sv1 = new SinhVien('Ngo Loc', 19, 1, 'Hanoi','A1',10,10,10)
sv1.showstudentinfo();
var sv2 = new SinhVien('Ngo Kha Ba', 19, 2, 'Hanoi','A2',4,4,4)
sv2.showstudentinfo();
var sv3 = new SinhVien('Hok Biet', 1, 2, 'Hanoi','A3',9,6,7)
sv3.showstudentinfo();
var sv4 = new SinhVien('La Ai', 5, 3, 'Hanoi','A4',7,9,7)
sv4.showstudentinfo();