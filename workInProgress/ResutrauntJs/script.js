$(document).ready(function () {
    $("#form").validate({
        rules: {
            email: { required: true, email: true },
            password: { required: true, minlength: 8 }
        },
        messages: {  
            email: "Enter a valid email",
            password: "Enter at least 8 characters"
        }
    });
});