function getFormvalue() {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form element by id
  const form = document.getElementById("form1");

  // Get the values of the input fields, trim to remove extra spaces
  const firstName = form.elements["fname"].value.trim();
  const lastName = form.elements["lname"].value.trim();

  // Concatenate the values
  const fullName = firstName + " " + lastName;

  // Display the alert with full name
  alert(fullName);
}
