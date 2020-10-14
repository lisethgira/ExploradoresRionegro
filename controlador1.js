let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("contrasena");
let telefono = document.getElementById("telefono");
let direccion = document.getElementById("direccion");
let registro= document.getElementById("registro");
let noNombre = document.getElementById("noNombre");
let noCorreo = document.getElementById("noCorreo");
let noContrasena = document.getElementById("noContrasena");
let noTelefono = document.getElementById("noTelefono");
let noDireccion = document.getElementById("noDireccion");
let formulario = document.getElementById("formulario")

registro.addEventListener("click", validarFormulario);

function validarFormulario(evento){
    evento.preventDefault();
    
    if(nombre.value == "" && correo.value == ""  && contrasena.value == "" && telefono.value == "" && direccion.value == ""){
       alert("Debes ingresar todos los datos");

    }else if(nombre.value =="" && correo.value != "" && contrasena.value != "" &&telefono.value != "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";

    }else if(nombre.value !="" && correo.value == "" && contrasena.value != "" &&telefono.value != "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa tu Correo";

    }else if(nombre.value !="" && correo.value != ""  && contrasena.value == "" &&telefono.value != "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noContrasena.classList.add("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una Contraseña";


    }else if(nombre.value !="" && correo.value != "" && contrasena.value != "" &&telefono.value == "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un telefono";

    }else if(nombre.value !="" && correo.value != "" && contrasena.value != "" &&telefono.value != "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una dirección";    

    }else if(nombre.value !="" && correo.value == "" && contrasena.value == "" &&telefono.value == "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";


    }else if(nombre.value =="" && correo.value != "" && contrasena.value == "" &&telefono.value == "" && direccion.value == ""){

        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noCorreo.classList.add ("valid-feedback");
        noCorreo.textContent = "Correo Válido";
        noContrasena.classList.add("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";

    }else if(nombre.value =="" && correo.value == "" && contrasena.value != "" &&telefono.value == "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Contraseña Válida";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";


    }else if(nombre.value =="" && correo.value == "" && contrasena.value == "" &&telefono.value != "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add ("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("valid-feedback");
        noTelefono.textContent = "número de Teléfono válido";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";

    }else if(nombre.value =="" && correo.value == "" && contrasena.value == "" &&telefono.value == "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add ("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("valid-feedback");
        noDireccion.textContent = "Dirección válida";

    }else if(nombre.value !="" && email.value != "" && password.value == "" &&telefono.value == "" && direccion.value == ""){
        
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noCorreo.classList.add("valid-feedback");
        noCorreo.textContent = "Correo válido";
        noContrasena.classList.add("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";

    }else if(nombre.value !="" && correo.value == "" && contrasena.value != "" &&telefono.value == "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Contraseña válida";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";



    }else if(nombre.value !="" && correo.value == ""  && contrasena.value == "" &&telefono.value != "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Debes ingresar una contraseña";
        noTelefono.classList.add("valid-feedback");
        noTelefono.textContent = "Numero de Teléfono válido";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";



    }else if(nombre.value =="" && correo.value != "" && contrasena.value != "" &&telefono.value == "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noCorreo.classList.add("valid-feedback");
        noCorreo.textContent = "Correo válido";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Contraseña válida";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Debes ingresar un Teléfono";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";



    }else if(nombre.value =="" && correo.value != "" && contrasena.value == "" &&telefono.value != "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noCorreo.classList.add("valid-feedback");
        noCorreo.textContent = "Correo válido";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Contraseña válida";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Numero de Teléfono válido";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";

    }else if(nombre.value =="" && correo.value == "" && contrasena.value != "" &&telefono.value != "" && direccion.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("valid-feedback");
        noContrasena.textContent = "Contraseña válida";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Numero de Teléfono válido";
        noDireccion.classList.add("invalid-feedback");
        noDireccion.textContent = "Debes ingresar una Dirección";

    }else if(nombre.value =="" && correo.value == "" && contrasena.value == "" &&telefono.value != "" && direccion.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";    
        noCorreo.classList.add("invalid-feedback");
        noCorreo.textContent = "Ingresa un Correo";
        noContrasena.classList.add("invalid-feedback");
        noContrasena.textContent = "Debes ingresar una Contraseña";
        noTelefono.classList.add("invalid-feedback");
        noTelefono.textContent = "Numero de Teléfono válido";
        noDireccion.classList.add("valid-feedback");
        noDireccion.textContent = "Dirección válida";

    }else{
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Válido";
        noCorreo.classList.add("valid-feedback");
        noCorreo.textContent = "Válido";
        noPass.classList.add("valid-feedback");
        noPass.textContent = "Válido";
        noTelefono.classList.add("valid-feedback");
        noTelefono.textContent = "válido";
        noDireccion.classList.add("valid-feedback");
        noDireccion.textContent = "válido";
            
    }


}
