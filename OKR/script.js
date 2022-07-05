function reportSliderVal() {
    var fev = document.getElementById('frontend_slider').value;
    document.getElementById("frontend_val").innerHTML = fev;

    var sql = document.getElementById('sql_slider').value;
    document.getElementById("sql_val").innerHTML = sql;

    var bev = document.getElementById('backend_slider').value;
    document.getElementById("backend_val").innerHTML = bev;

    var total = parseInt (document.getElementById("frontend_slider").max) 
    + parseInt(document.getElementById('sql_slider').max )
    + parseInt(document.getElementById('backend_slider').max);

    var currentValue = parseInt(fev) + parseInt(sql) + parseInt(bev);
    console.log(currentValue);

    var currentPercentage = (currentValue / total * 100).toFixed(0);
    
    updateOverallPercentage(currentPercentage);
    document.getElementById("percentage").style.width = currentPercentage + "%";
};

function updateOverallPercentage(currentPercentage) {
    document.getElementById("numeric_percentage").innerHTML=`${currentPercentage}%`;
}

