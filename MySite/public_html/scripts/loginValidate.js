//feedbackFormValidate.js

function loginValidate()
{
    var contactObj = document.getElementById("contact");
    var username = contactObj.username.value;
    var password = contactObj.password.value;
    var everythingOK = true;

    if (!validateUsername(username))
    {
        alert("Error: Invalid username.");
        everythingOK = false;
    }

    if (!validatePassword(password))
    {
        alert("Error: Invalid password.");
        everythingOK = false;
    }

    if (everythingOK)
    {
        return true;
    }
    else
        return false;
}

function validateUsername(username)
{
    var p = name.search(/^[-'\w\s\d]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePassword(password)
{
    var p = phone.search(/^[-'\w\s\d]$/);
    if (p == 0)
        return true;
    else
        return false;
}
