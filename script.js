$(document).ready(function () {
  $("button").click(function () {
    var a = $("input");
    for (var i = 0; i < a.length; i++) {
      if (a[i].value >= 50) {
        a[i].style.border = "5px solid blue";
      }
    }
  });
});
