function validacion(){
    var nombre, mensaje, campos;
    nombre = document.getElementById("nombre").value;
    mensaje =document.getElementById("mensaje").value;
    campos = document.getElementById("#campoVacio");
    nombreError = document.getElementById("#nombreLargo");
    mensajeError= document.getElementById("#mensajeLargo");

  
    if(nombre === "" || nombre === null || mensaje === ''  || mensaje === null){

      campoVacio.innerHTML=" ** Todos los campos son obligatorios";
       return false;
  
    }
  
     else  if (nombre.length>40){
      nombreLargo.innerHTML=" ** El nombre es muy largo";
      return false;
    }
      
    else if (mensaje.length>120){
    mensajeLargo.innerHTML=" ** El mensaje es muy largo";
      return false;
    }

    else {
        alert("Gracias por tu mensaje")
    } 


}

  function submitForm(event){
    event.preventDefault();
    window.history.back();
  }


