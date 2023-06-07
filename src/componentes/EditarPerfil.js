import multiavatar from '@multiavatar/multiavatar/esm';

export const EditarPerfil = {
  template: `
    <div class=" m-5 editar-perfil">
      <h5>Editar Perfil</h5>
      <form id="formulario-editar">
        <div class="mb-3">
          <label for="editar-nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="editar-nombre" @input="generateAvatar" required pattern="[A-Z_]{1,10}">
        </div>
        <div class="mb-3">
          <label for="editar-email" class="form-label">Email</label>
          <input type="email" class="form-control" id="editar-email" required pattern="^[A-Za-z0-9._%+-]+@gmail\.com$">
        </div>
      </form>
      <div id="editar-avatar" class="col-2"></div>
      <button type="button" class="btn btn-primary" id="guardar-cambios">Guardar Cambios</button>
    </div>
  `,
  script: () => {
    // Generar un avatar basado en el nombre del usuario y mostrarlo en la interfaz
    document.querySelector('#editar-nombre').addEventListener("input", (event) => {
      let svgCode = multiavatar(event.target.value);
      document.querySelector('#editar-avatar').innerHTML = svgCode;
    });

    // Manejar el evento del botón "Guardar Cambios"
    document.querySelector('#guardar-cambios').addEventListener("click", () => {
      const nombre = document.querySelector('#editar-nombre').value;
      const email = document.querySelector('#editar-email').value;

      
    });
  },
};
