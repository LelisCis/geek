function validacion(){
    var nombre, mensaje;
    nombre = document.getElementById("nombre").value;
    mensaje =document.getElementById("mensaje").value;
  
    console.log("hola");
  
  
   
    if(nombre === "" || nombre === null || mensaje === ''  || mensaje === null){
     alert('Todos los campos son obligatorios');
       return false;
  
    }
  
   else  if (nombre.length>40){
      alert('El nombre es muy largo');
      return false;
    }
      
   else if (mensaje.length>120){
      alert('El mensaje es muy largo');
      return false;
    }

    else {
        alert("Gracias por tu mensaje")
    } 


}




