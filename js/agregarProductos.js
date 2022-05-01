let agregarProducto = document.getElementById("seccionTodos");
// seccion.style.visibility="hidden"

const agregar=()=>{
    agregarProducto.innerHTML= `


    <div class="contenedor-agregar">
        <h3>Agregar nuevo producto</h3>
    
        <div class="agregarImg">
            <div class="arrastrarImg">
            <img src="img/Vector.png" id=img-preview>
           <p>Arrastre para agregar una imagen para el producto</p>
            </div>
           
            <div class="arrastrarBoton">
            <h4>O</h4>           
            <label class="custom-file-upload"><input type="file"/>Buscar en su computadora</label>
           </div>
        </div>

   
        <div class= "contenedor-inputs">
        
        <div>
        <input class="input_nombreProducto" type="text" class="form-control" placeholder=" Nombre del producto" required>
        </div>
        
        
        <div>
        <input class="input_preciProducto" type="text" class="form-control" placeholder=" Precio del producto" required>
        </div>
        
        
        <div>
        <input class="input_descripcionProducto" type="text" class="form-control" placeholder=" Descripción del producto" required>
        </div>
        
        
        <div class="">
        <button class="btn-agregarProducto">Agregar producto</button>
        </div>
        
        </div>

    </div>
    
    `;
}


