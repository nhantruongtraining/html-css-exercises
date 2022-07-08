function reportSliderVal() {
  var fev = document.getElementById("frontend_slider").value;
  document.getElementById("frontend_val").innerHTML = fev;
  document.getElementById("frontend_val").style.width =
    (parseInt(fev) / parseInt(document.getElementById("frontend_slider").max)) *
      100 +
    "%";

  var sql = document.getElementById("sql_slider").value;
  document.getElementById("sql_val").innerHTML = sql;
  document.getElementById("sql_val").style.width =
    (parseInt(sql) / parseInt(document.getElementById("sql_slider").max)) *
      100 +
    "%";

  var bev = document.getElementById("backend_slider").value;
  document.getElementById("backend_val").innerHTML = bev;
  document.getElementById("backend_val").style.width =
    (parseInt(bev) / parseInt(document.getElementById("backend_slider").max)) *
      100 +
    "%";

  var total =
    parseInt(document.getElementById("frontend_slider").max) +
    parseInt(document.getElementById("sql_slider").max) +
    parseInt(document.getElementById("backend_slider").max);

  var currentValue = parseInt(fev) + parseInt(sql) + parseInt(bev);
  console.log(currentValue);

  var currentPercentage = ((currentValue / total) * 100).toFixed(0);

  updateOverallPercentage(currentPercentage);
  document.getElementById("percentage").style.width = currentPercentage + "%";
  if (currentPercentage < 40) {
    document.getElementById("percentage").style.backgroundColor = "salmon";
  } else if (currentPercentage < 70) {
    document.getElementById("percentage").style.backgroundColor = "turquoise";
  } else {
    document.getElementById("percentage").style.backgroundColor = "lightgreen";
  }
}

function updateOverallPercentage(currentPercentage) {
  document.getElementById(
    "numeric_percentage"
  ).innerHTML = `${currentPercentage}%`;
}
