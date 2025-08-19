$(document).ready(function () {
  // Modal
  $("#preModal").modal("show");

  // Date
  var now = new Date();
  $(".curyear").text(now.getFullYear());

  //   Product Image Selection
  $(".product-image-selector .product").on("click", function () {
    let newSrc = $(this).attr("src");

    $(".main-product").attr("src", newSrc);
    $(".product-image-selector .product").removeClass("active");

    $(this).addClass("active");
  });
});

function closeModal() {
  $("#preModal").modal("hide");
}
