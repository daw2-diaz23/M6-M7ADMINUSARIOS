import multiavatar from '@multiavatar/multiavatar/esm'
export const Registre = {
    template: `
        <form id="formulario-registro" class="p-5">
            <div class="mb-3 ">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" @input="generateAvatar" required pattern="[A-Z_]{1,10}">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" required pattern="[A-Z]{1,}[^A-Z]{1,}[0-9]{1,}">
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
        <div id="avatar" class="col-2">

        </div>


    `
    ,
    script:()=>{
        document.querySelector('#nombre').addEventListener("keydown", (event)=>{
    
            let svgCode = multiavatar(event.target.value)
            document.querySelector('#avatar').innerHTML = svgCode;
          })


    
      },

}