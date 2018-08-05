function validatePassword() {
    var validator = $("#signup_form").validate({
        rules: {
            password: "required",
            confirmpassword: {
                equalTo: "#password"
            }
        },
        messages: {
            password: " Enter Password",
            confirmpassword: " Enter Confirm Password Same as Password"
        }
    });
    if (validator.form()) {
        alert('Sucess');
    }
}