let imgBall = null;
imgBall = document.getElementById("ball");
function init() {
    imgBall = document.getElementById("ball");
    imgBall.style.position = 'relative'; // đặt hình ảnh liên quan đến vị trí bình thường. thuộc tính position thuộc css
    imgBall.style.left = '0px'; // đặt vị trí ngang của quả bóng thành 0px từ bên trái so với vị trí mặc định của n
}
function moveRight() {
    imgBall.style.left = parseInt(imgBall.style.left) + 10 + "px"; // dịch chuyển quả bóng sang bên phải 10px so với vị trí hiện tại
}
window.onload=init(); // set up lại quả bóng khi trình duyệt tải lần đầu