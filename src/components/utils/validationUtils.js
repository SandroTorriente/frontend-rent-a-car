export function validateEmptyFields(fields) {
  let errors = {};

  for (let field in fields) {
    if (!fields[field]) {
      errors[
        `${field}Error`
      ] = `Por favor, llena el campo que no puede estar vacio.`;
    }
  }

  return errors;
}

export function validateIdentityCard(ci) {
  let errors = {};

  if (!/^\d{11}$/.test(ci)) {
    errors.ciError =
      "El número de identidad debe tener exactamente 11 dígitos.";
  } else {
    const yearOfBirth = parseInt(ci.toString().slice(0, 2));
    const monthOfBirth = parseInt(ci.toString().slice(2, 4));
    const dayOfBirth = parseInt(ci.toString().slice(4, 6));

    const currentYear = new Date().getFullYear();
    const currentYearLastTwoDigits = currentYear % 100;
    const age = currentYearLastTwoDigits - yearOfBirth;

    if (monthOfBirth > 12 || dayOfBirth > 31) {
      errors.ciError = "El número de identidad no es válido.";
    } else if (age < 18 || age > 120) {
      errors.ciError = "El número de identidad no es válido.";
    }
  }

  return errors;
}

export function onlyNumber(event) {
  let keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode < 48 || keyCode > 57) {
    // 48-57 son los códigos de tecla para los números 0-9
    event.preventDefault();
  }
}

export function onlyLetters(event) {
  let keyCode = event.keyCode;
  if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {
    // si no es una letra
    event.preventDefault(); // no se ingresan caracterer
  }
}
