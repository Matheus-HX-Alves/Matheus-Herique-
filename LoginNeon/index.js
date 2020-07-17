function Validator() {
    let Username = login.LoginCase.value;
    let Password = password.PasswordCase.value;
    if (Username == "")
        (alert('Fill in the Login field.'))
    login.LoginCase.focus();
    if (Password == "")
        (alert('Fill in the Password field.'))
    password.PasswordCase.focus();
}