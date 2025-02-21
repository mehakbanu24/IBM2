document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.getElementById("studentForm");
  const resultDiv = document.getElementById("result");
  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course");
    const courseName = course.options[course.selectedIndex].text;
    const gender = document.querySelector('input[name="gender"]:checked');
    // Validate form
    if (!name || !email || !gender) {
      alert("Please fill in all fields!");
      return;
    }
    // Display results
    const output = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Course:</strong> ${courseName}<br>
    <strong>Gender:</strong> ${gender.value}
    `;
    resultDiv.innerHTML = output;
    // Add success message styling
    resultDiv.style.backgroundColor = "#e8f5e9";
    resultDiv.style.padding = "10px";
    resultDiv.style.borderRadius = "4px";
    resultDiv.style.marginTop = "15px";
  });
});
