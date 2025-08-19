$(document).ready(function () {
  // Modal
  $("#preModal").modal("show");

  // Date
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const todayDay = now.getDate();
  const currentMonthIndex = now.getMonth();
  const currentYear = now.getFullYear();

  const randomDate = function () {
    let monthOffset = Math.floor(Math.random() * 4);
    let tempDate = new Date(now);
    tempDate.setMonth(tempDate.getMonth() - monthOffset);

    const maxDay = Math.min(
      todayDay,
      new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, 0).getDate()
    );
    const randomDay = Math.floor(Math.random() * maxDay) + 1;

    tempDate.setDate(randomDay);

    const formattedMonth = monthNames[tempDate.getMonth()];
    const formattedDay = tempDate.getDate();
    const formattedYear = tempDate.getFullYear();

    return `${formattedMonth} ${formattedDay}, <span class="nowYear">${formattedYear}</span>`;
  };

  $(".curMonth").text(monthNames[currentMonthIndex]);
  $(".prevMonth").text(
    monthNames[currentMonthIndex === 0 ? 11 : currentMonthIndex - 1]
  );
  $(".curYear").text(currentYear);

  $(".date").each(function () {
    $(this).html(randomDate());
  });

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

function checkout() {
  let $toast = $("#toast");

  $toast.addClass("show");

  setTimeout(() => {
    $toast.removeClass("show");
    window.location.href = "checkout.html";
  }, 1500);
}
