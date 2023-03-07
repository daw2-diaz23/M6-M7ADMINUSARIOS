import { users } from "../componentes/AdminUsuarios";
import { Registre } from "../componentes/Registre.js";
import { v4 as uuidv4 } from 'uuid';

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
        <tr>
          <td>1</td>
          <td>user1</td>
          <td>user1@example.com</td>
          <td><button type="button" class="btn btn-danger eliminar">Eliminar</button></td>
          <td><button type="button" class="btn btn-success editar">Editar</button></td>
        </tr>
      </tbody>
    </table>
    ${Registre.template}
`,


  script: () => {
    let html = "";

    users.forEach((user) => {
      html += `
        <tr id="${user.id}">
          <th class="px-5">${user.id}</th>
          <td class="px-5">${user.nick}</td>
          <td class="px-5">${user.email}</td>
          <td class="px-5"><button data-id="${user.id}" type="button" class="btn btn-danger eliminar">Eliminar</button></td>
          <td class="px-5"><button data-id="${user.id}" type="button" class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
        </tr>
      `;
    });

    document.querySelector("#Tabla").innerHTML = html;

    const eliminarBotones = document.querySelectorAll(".eliminar");
    eliminarBotones.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const userId = e.target.getAttribute("data-id");
        alert(`Estás borrando el usuario con id: ${userId}`);
        const filaUsuario = e.target.closest("tr");
        filaUsuario.classList.add("fila-oculta");
      });
    });
    
    Registre.script()

    const formularioRegistro = document.querySelector('#formulario-registro');

    formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos de texto del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Crear un objeto con los datos del usuario nuevo
    const nuevoUsuario = {
      id: uuidv4(),
      nick: nombre,
      email: email,
      password: password
    };

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(nuevoUsuario);

    // Crear una nueva fila de la tabla con los datos del usuario nuevo
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
      <th class="px-5">${nuevoUsuario.id}</th>
      <td class="px-5">${nuevoUsuario.nick}</td>
      <td class="px-5">${nuevoUsuario.email}</td>
      <td class="px-5"><button data-id="${nuevoUsuario.id}" type="button" class="btn btn-danger eliminar">Eliminar</button></td>
      <td class="px-5"><button data-id="${nuevoUsuario.id}" type="button" class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
    `;

    // Agregar la nueva fila a la tabla
    document.querySelector('#Tabla').appendChild(nuevaFila);
  });
      
  },
};
