let userInput = document.getElementById("date");
let button = document.getElementById("calculate-btn");
let result = document.getElementById("result");

// Set the max attribute to today's date in ISO format
userInput.max = new Date().toISOString().split("T")[0];

// Add event listener for the button click
button.addEventListener("click", calculateAge);

function calculateAge() {
  // Check if the user has selected a date
  if (!userInput.value) {
    alert("Please select a birth date.");
    return;
  }

  let birthDate = new Date(userInput.value); // Get the birth date from the input
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1; // Calculate the year difference

  if (m2 >= m1) {
    m3 = m2 - m1; // Calculate the month difference
  } else {
    y3--; // If the current month is less than the birth month, decrease the year by 1
    m3 = 12 + m2 - m1; // Adjust the month calculation
  }

  if (d2 >= d1) {
    d3 = d2 - d1; // Calculate the day difference
  } else {
    m3--; // If the current day is less than the birth day, decrease the month by 1
    d3 = getDaysInMonth(y1, m1) + d2 - d1; // Adjust the day calculation
  }

  if (m3 < 0) {
    m3 = 11; // If the month difference goes below 0, reset it to 11 and decrease the year by 1
    y3--;
  }

  // Display the calculated age
  result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate(); // Return the number of days in the month
}
