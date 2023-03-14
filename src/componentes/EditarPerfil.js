export const EditarPerfil = {
    template: `
      <form id="formulario-editar" class="p-5">
        <div class="d-flex">
        <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="nombre" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar cambios</button>
      </form>
      <div class="card col-6">
      <div class="card-container">
      <h4><b>San Miguel Especial</b></h4>
      <p>Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.</p>
      <img src="https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png" alt="Cervesa" style="width:5%">
      </div>
</div>
    `,
  };