import { users } from "../componentes/AdminUsuarios";
import { Registre } from "../componentes/Registre.js";
import { v4 as uuidv4 } from 'uuid';
import { EditarPerfil } from "../componentes/EditarPerfil";
import 'bootstrap'; // Importar la biblioteca Bootstrap

export const Admin = {
  template: `
    <div>
      <table class="table table-dark mb-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nick</th>
            <th scope="col">Email</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody id="Tabla">
        </tbody>
      </table>
      ${Registre.template}
      ${EditarPerfil.template} <!-- Agregar el template del componente EditarPerfil -->
    </div>
  `,
  script: () => {
    // Función para eliminar un usuario
    const eliminarUsuario = (userId) => {
    
      alert(`Estás borrando el usuario con id: ${userId}`);
      const filaUsuario = document.querySelector(`#${userId}`);
    
      filaUsuario.classList.add("fila-oculta");
    };

    // Función para cargar los datos del usuario en el formulario de edición de perfil
    const cargarDatosEditarPerfil = (userId) => {
      const editarPerfilSection = document.querySelector('.editar-perfil');
       // Mostrar la sección de edición de perfil estableciendo el estilo de visualización en "block"
      editarPerfilSection.style.display = "block";
      // Obtener los elementos de entrada de nombre y email en el formulario de edición
      const editarNombreInput = document.querySelector('#editar-nombre');
      const editarEmailInput = document.querySelector('#editar-email');
      // Buscar el usuario correspondiente en la lista "users" utilizando el ID del usuario
      const usuario = users.find((user) => user.id === userId);
      // Establecer los valores de nombre y email del usuario en los campos de edición
      editarNombreInput.value = usuario.nick;
      editarEmailInput.value = usuario.email;
      // Guardar el ID del usuario en el formulario utilizando el atributo "data-user-id"
      editarPerfilSection.setAttribute("data-user-id", userId); // Guardar el ID del usuario en el formulario
    };


    // Función para guardar los cambios realizados en el perfil del usuario
    const guardarCambiosPerfil = () => {
      // Obtener el ID del usuario desde el atributo "data-user-id" en la sección de edición de perfil
      const userId = document.querySelector('.editar-perfil').getAttribute("data-user-id");
      // Obtener los elementos de entrada de nombre y email en el formulario de edición
      const editarNombreInput = document.querySelector('#editar-nombre');
      const editarEmailInput = document.querySelector('#editar-email');
      // Buscar el usuario correspondiente en la lista "users" utilizando el ID del usuario
      const usuario = users.find((user) => user.id === userId);
       // Establecer los valores de nombre y email del usuario en los campos de edición
      usuario.nick = editarNombreInput.value;
      usuario.email = editarEmailInput.value;
      renderizarUsuarios();
    };

    // Función para renderizar la lista de usuarios en la tabla
    const renderizarUsuarios = () => {
      // Obtener la tabla de usuarios utilizando el identificador "Tabla"
      const tablaUsuarios = document.querySelector("#Tabla");
      // Variable para almacenar el HTML generado
      let html = "";

      // Recorrer cada usuario en la lista "users"
      users.forEach((user) => {
         // Generar el HTML para cada fila de usuario utilizando el ID, Nick y Email del usuario
        html += `
          <tr id="${user.id}">
            <th class="px-5">${user.id}</th>
            <td class="px-5">${user.nick}</td>
            <td class="px-5">${user.email}</td>
            <td class="px-5"><button data-id="${user.id}" type="button" class="btn btn-danger eliminar">Eliminar</button></td>
            <td class="px-5"><button data-id="${user.id}" type="button" class="btn btn-success editar">Editar</button></td>
          </tr>
        `;
      });

      // Asignar el HTML generado a la tabla de usuarios
      tablaUsuarios.innerHTML = html;

      // Configurar eventos de click para los botones de eliminar
      const eliminarBotones = document.querySelectorAll(".eliminar");
      eliminarBotones.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          // Obtener el ID del usuario desde el atributo "data-id" del botón
          const userId = e.target.getAttribute("data-id");
          // Llamar a la función eliminarUsuario pasando el ID del usuario a eliminar
          eliminarUsuario(userId);
        });
      });

      // Configurar eventos de click para los botones de editar
      const editarBotones = document.querySelectorAll(".editar");
      editarBotones.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          // Obtener el ID del usuario desde el atributo "data-id" del botón
          const userId = e.target.getAttribute("data-id");
           // Llamar a la función cargarDatosEditarPerfil pasando el ID del usuario a editar
          cargarDatosEditarPerfil(userId);
        });
      });
    };

    renderizarUsuarios();
    Registre.script();// Llamar el script del componente Registro
    EditarPerfil.script(); // Llamar el script del componente EditarPerfil

    // Configurar el evento de envío del formulario de registro
    const formularioRegistro = document.querySelector('#formulario-registro');
    formularioRegistro.addEventListener('submit', (e) => {
      e.preventDefault();

      // Obtener los valores ingresados en los campos de nombre, email y password
      const nombre = document.querySelector('#nombre').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      // Crear un nuevo objeto de usuario con un ID único generado por uuidv4
      const nuevoUsuario = {
        id: uuidv4(),
        nick: nombre,
        email: email,
        password: password
      };

      // Obtener los valores ingresados en los campos de nombre, email y password
      users.push(nuevoUsuario);

      // Renderizar nuevamente la lista de usuarios en la tabla para reflejar el nuevo usuario
      renderizarUsuarios();

      // Reiniciar el formulario de registro
      formularioRegistro.reset();
    });

    // Configurar el evento del botón "Guardar cambios" en el formulario de edición de perfil
    const guardarCambiosBtn = document.querySelector('#guardar-cambios');
    guardarCambiosBtn.addEventListener("click", () => {
      // Llamar a la función guardarCambiosPerfil para guardar los cambios realizados en el perfil del usuario
      guardarCambiosPerfil();
       // Ocultar la sección de edición de perfil estableciendo el estilo de visualización en "none"
      const editarPerfilSection = document.querySelector('.editar-perfil');
      editarPerfilSection.style.display = "none";
    });
  },
};
