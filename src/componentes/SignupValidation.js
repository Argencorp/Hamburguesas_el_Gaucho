function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if(values.name === "") {
        error.name = "El nombre no debe estar vacio"
    } else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "El email no debe estar vacio"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "El email no coincide"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "la contraseña no debe estar vacia"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "la contraseña no coincide"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation