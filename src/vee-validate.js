import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "Este campo es obligatorio"
});

extend("email", {
  ...email,
  message: "Ingrese un email válido"
});

extend("confirmed", {
  ...confirmed,
  message: "Las contraseñas no coinciden"
});

extend("len", value => {
  return value.length >= 8
  ? true
  : 'La contraseña debe tener minimo 8 caracteres'
});

extend('email-edu', value => {
  return /(E|e|le|LE)[0-9]+@((itmerida[.]edu[.]mx)|(merida[.]tecnm[.]mx))/.test(
    value
  )
    ? true
    : 'Este email no es institucional'
})

extend('matricula', value => {
  return /(E|LE)[0-9]{8}/.test(
    value
  )
    ? true
    : 'La matrícula debe tener el formato E12345678'
})
