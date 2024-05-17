window.onload = function() {
    // Get the current date
    var currentDate = new Date();

    // Get the next year's date
    var nextYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

    // Calculate the difference in days
    var differenceInTime = nextYearDate.getTime() - currentDate.getTime();
    var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    // Display the result
    document.getElementById("daysLeft").innerHTML = "Days left in the year: " + differenceInDays;
    document.getElementById("currentDate").innerHTML = "Current date: " + currentDate.toLocaleDateString();
}