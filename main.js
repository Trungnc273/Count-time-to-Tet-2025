const tet = new Date(Date.UTC(2025, 0, 29, 0, 0, 0));
function countTime() {
  let currentDate = new Date();
  let time = tet.getTime() - currentDate.getTime();
  let ngay = time / (1000 * 60 * 60 * 24);
  let gio = (ngay % Math.floor(ngay)) * 24;
  let phut = (gio % Math.floor(gio)) * 60;
  let giay = (phut % Math.floor(phut)) * 60;
  document.querySelector("#time").innerHTML =
    Math.floor(ngay) +
    " ngày " +
    Math.floor(gio) +
    " giờ " +
    Math.floor(phut) +
    " phút " +
    Math.floor(giay) +
    " giây" +
    tet.getTime() +
    currentDate.getTime();
}
let loop = setInterval(countTime, 1000);
