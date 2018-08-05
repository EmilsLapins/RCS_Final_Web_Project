function validatePassword() {
    var validator = $("#signup_form").validate({
        rules: {
            password: "required",
            confirmpassword: {
                equalTo: "#password"
            },
            password: {
                required: true,
                minlength: 8
              }
              
        },
        messages: {
            password: "Password too short",
            confirmpassword: " Passwords don't match!"
        }
    });
    if (validator.form()) {
        
    }
}

// https://jqueryvalidation.org/reference/ saved me