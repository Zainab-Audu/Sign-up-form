const submitRequest = document.getElementById("btn");
submitRequest.addEventListener("click", getFormData);

function showPreview() {
  const form = document.getElementById("Regform");

  if (form.checkValidity()) {
    // The form is valid, perform your desired action here
    document.getElementById("Regform").style.display = "none";
  } else {
    // The form is invalid, display error messages if any
    form.reportValidity();
  }
}

const submitPage = document.getElementById("btn");
submitPage.addEventListener("click", () => {
  alert("Submission completed. Thank you");
  document.getElementById("Regform").reset();
});

function getFormData() {
  // 1.fetch form data
  const formData = document.getElementById("Regform");
  const FirstNameInput = formData.querySelector("#FirstName").value;
  const LastNameInput = formData.querySelector("#LastName").value;
  const EmailInput = formData.querySelector("#Email").value;
  const PassWord = formData.querySelector("#Email").value;
}

function validateForm() {}
