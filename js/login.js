let contenedorPrincipal = document.getElementById("seccion");
// seccion.style.visibility="hidden"

const ingresar=()=>{
    contenedorPrincipal.innerHTML= `

    <div class="ingreso">

    <h3>Iniciar sesión</h3>

    <div>
    <input id= "usuario-mail" class="inputs input_usuario" type="text" class="form-control" placeholder=" Escriba su correo electrónico" required>
    </div>

    <div>
    <input id="usuario-pass" class="inputs input_contraseña" type="password" class="form-control" placeholder=" Escriba su Contraseña" required>
    </div>

    <div class="">
    <button class="btn-entrar" onclick="validarSesion()">Entrar</button>
    </div>


</div>
    
    
    `;
}


function validarSesion(){
    var mail, pass;
    mail = document.getElementById("usuario-mail").value;
    pass =document.getElementById("usuario-pass").value;
    expresion = /\w+@\w+\.+[a-z]/;
    pagina =document.getElementById("")
    mailUsuario = "usuario@ejemplo.com";
    passContrasena = "passCorrecta";
  
    console.log("hola");
  
  
   
    if(mail === '' ||  mail === null || pass === '' || pass === null ){
     alert('Todos los campos son obligatorios');
       return false;
  
    }
 
    else if (!expresion.test(mail)){
      alert('Ingresa un correo válido')
      return false
    }


    else if (mail === "usuario@ejemplo.com" &&  passContrasena === "passCorrecta"){
      return true
    }



    }

  

    