/* hide tip amount on load */
// document.getElementById("result").style.display="none";
// document.getElementById("each").style.display="none";
// document.getElementsByClassName("hideClass").style.display="none";

/*  call function to calculate amount of tip*/


function calculateTip() {

    /* get value of total bill */
    var totalBill = document.getElementById('bill').value;

    /* get tip option amount*/

    // var tipSelected_index = document.getElementById('serviceOptions').selectedIndex;
    // var tipSelected_option = document.getElementById('serviceOptions').options;
    // var tipSelected = tipSelected_option[tipSelected_index].text;

    var tipSelected = document.getElementById('serviceOptions').value;

    /* get size of people sharing the bill amount*/

    var people = document.getElementById('share').value;

    // Quick validation

    if(totalBill === "" || tipSelected == 0){
         window.alert("Please enter values to calculate tip");
        return;
    }

    //Checl if the input is empty or less than equal to 1 in people's input

    if (people === "" || people <=1){
        people=1;

        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }

    // Calculating total tip here

    var tip_total = (totalBill * tipSelected) / people;

    tip_total = Math.round(tip_total * 100)/100;
    tip_total =tip_total.toFixed(2);

    document.getElementById("result").innerHTML=tip_total;

}





