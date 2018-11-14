//feedbackFormValidate.js

function createAccountValidate()
{
    var contactObj = document.getElementById("contact");
    var firstName = contactObj.firstName.value;
    var lastName = contactObj.lastName.value;
    var phone = contactObj.phone.value;
    var email = contactObj.email.value;
    var username = contactObj.username.value;
    var password = contactObj.password.value;
    var confirmation = contactObj.confirmation.value;
    var everythingOK = true;

    if (!validateName(firstName))
    {
        alert("Error: Invalid first name.");
        everythingOK = false;
    }

    if (!validateName(lastName))
    {
        alert("Error: Invalid last name.");
        everythingOK = false;
    }

    if (!validatePhone(phone))
    {
        alert("Error: Invalid phone number.");
        everythingOK = false;
    }

    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }

    if (!validateConfirmation(confirmation, password))
    {
        alert("Error: Password and Confirmation do not Match");
        everythingOK = false;
    }

    if (everythingOK)
    {
        return true;
    }
    else
        return false;
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validateConfirmation(confirmation, password)
{
  if (confirmation == password)
      return true;
  else
      return false;
}
