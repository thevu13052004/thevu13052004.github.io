$(document).ready(function () {
  $("#toggle").click(function () {
    $("nav").slideToggle();
  });
});
$(document).ready(function () {
  $("#main-menu li a").click(function (event) {
    event.preventDefault(); // Ngăn chặn load lại trang khi click

    // Kiểm tra nếu người dùng click vào "Trang chủ"
    if ($(this).text() === "JavaScript") {
      $("#article").html(`
                <h2>Bài viết về Object trong JavaScript</h2>
                <p>
                    Object trong JavaScript là một kiểu dữ liệu quan trọng, giúp lưu trữ các cặp key-value. 
                    Một object có thể chứa các thuộc tính (property) và phương thức (method) để xử lý dữ liệu hiệu quả.
                </p>

            `);
    }
  });
});
