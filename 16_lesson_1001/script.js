function show_password(field_id) {
    let input = document.querySelector(field_id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

