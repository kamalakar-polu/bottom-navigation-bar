feather.replace();

$(document).ready(function () {
  $(".bottom-navbar .nav>.nav-item").click(function () {
    $(".bottom-navbar .nav>.nav-item").removeClass("active");
    $(this).addClass("active");
  });
});
