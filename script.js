var nombre= document.getElementById('nombre');
var lastname= document.getElementById('lastname');
var email= document.getElementById('email');
var phone= document.getElementById('phone');
var error= document.getElementById('error');
error.style.color = 'red';

/*
function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError=[];
    
    if(nombre.value == null || nombre.value===''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(lastname.value == null || lastname.value===''){
        mensajesError.push('Ingresa tu apellido');
    }
    if(email.value == "@" || nombre.value===''){
        mensajesError.push('Ingresa tu mail');
    }
    if(phone.value == null || nombre.value===''){
        mensajesError.push('Ingresa tu celular');
    }

    error.innerHTML= mensajesError.join(', ');
    return false;
}*/

var form = document.getElementById('formulario');
form.addEventListener('submit', function(enviarFormulario){
    enviarFormulario.preventDefault();
    var mensajesError=[];
    
    if(nombre.value == null || nombre.value===''){
        mensajesError.push('Ingresa su nombre');
    }
    if(lastname.value == null || lastname.value===''){
        mensajesError.push('Ingresa su apellido');
    }
    if(email.value == "@" || nombre.value===''){
        mensajesError.push('Ingresa su mail');
    }
    if(phone.value == null || nombre.value===''){
        mensajesError.push('Ingresa su celular');
    }

    error.innerHTML= mensajesError.join(', ');

})

function enviarFormulario(){
    //alert("Gracias por escribirnos! Pronto nos contactaremos con usted");
    console.log('Formulario enviado...'); 
}

/*
function validarEmail(elemento){

    var texto = document.getElementById(elemento.id).value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
    if (!regex.test(texto)) {
        document.getElementById("resultado").innerHTML = "Correo invalido";
    } else {
      document.getElementById("resultado").innerHTML = "";
    }
  
  }

function enviarFormulario(){
    alert("Gracias por escribirnos! Pronto nos contactaremos con usted");
}

function message(){ 
    document.getElementById("demo").innerHTML = "Hemos recibido tu mensaje correctamente.<br />En breve nos pondremos en contacto contigo";
    alert("Tu formulario ha sido enviado!");
}*/    