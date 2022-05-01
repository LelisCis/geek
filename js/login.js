let contenedorPrincipal = document.getElementById("seccion");
// seccion.style.visibility="hidden"

const ingresar=()=>{
    contenedorPrincipal.innerHTML= `

    <div class="ingreso">

    <h3>Iniciar sesión</h3>
    <div id="camposVacios" class="error"></div>
    <div id="correoInvalido" class="error"></div> 
    <div id="bienvenidoUsuario"></div> 


    <div>
    <input id= "usuario-mail" class="inputs input_usuario" type="text" class="form-control" placeholder=" Escriba su correo electrónico" required>
    </div>

    <div>
    <input id="usuario-pass" class="inputs input_contraseña" type="password" class="form-control" placeholder=" Escriba su Contraseña" required>
    </div>

    <div class="">
    <button class="btn-entrar" onclick="validarSesion()">Entrar</button>
    </a>
    </div>


</div>
    
    
    `;
}


function validarSesion(){
    var mail, pass;
    mail = document.getElementById("usuario-mail").value;
    pass =document.getElementById("usuario-pass").value;
    expresion = /\w+@\w+\.+[a-z]/;
    var camposVacios = document.querySelector("#camposVacios");
    var correoInvalido = document.querySelector("#correoInvalido");
    var bienvenidoUsuario = document.querySelector("#bienvenidoUsuario");



         
    if(mail === '' ||  mail === null || pass === '' || pass === null ){

      camposVacios.innerHTML=" ** Todos los campos son obligatorios";
      return false;
    }
 
    else if (!expresion.test(mail)){
      correoInvalido.innerHTML=" ** Ingresa un correo válido";
      return false
    }


    else if (mail ==='ejemplo@ejemplo.com' &&  pass === 'ejemplo'){
     alert("¡Bienvenid@!")

    }



    }

  

    