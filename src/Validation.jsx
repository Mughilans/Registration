const Validation = (values) => {
    let errors = {};

    if (!values.type) {
        errors.type = "Identification type is required"
    }
    if (!values.number) {
        errors.number = "Identification number is required"
    }
    if (!values.comapanyname) {
        errors.comapanyname = "Comapany Name is required"
    }
    if (!values.firstname) {
        errors.firstname = "First Name is required"
    }
    if (!values.secondname) {
        errors.secondname = "Second Name is required"
    }
    if (!values.firstlastname) {
        errors.firstlastname = "First Last Name is required"
    }
    if (!values.secondlastame) {
        errors.secondlastame = "Second Last Name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\$+@\$+\.\$+/.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.address) {
        errors.address = "Address is required"
    }
    if (!values.cellphone) {
        errors.cellphone = "Cell Phone is required"
    }
    if (!values.municipality) {
        errors.municipality = "Municipality is required"
    }


    return errors;
}

export default Validation