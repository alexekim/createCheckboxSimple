var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "verifycheckbox";
checkbox.value = "1";
checkbox.id = "captchaText";
checkbox.class = "form-text required";
var div = document.getElementById("captcha");
div.appendChild(checkbox);
checkbox.checked = false;
