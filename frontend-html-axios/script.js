// =============================
// PERSONAS
// =============================

const API_URL = "http://localhost:8080/api/personas";

let personaEditandoId = null;

// LISTAR PERSONAS
async function obtenerPersonas() {

    try {

        const respuesta = await axios.get(API_URL);

        const personas = respuesta.data;

        const tabla = document.getElementById("tablaPersonas");

        tabla.innerHTML = "";

        personas.forEach(persona => {

            tabla.innerHTML += `
                <tr>

                    <td>${persona.id}</td>
                    <td>${persona.nombre}</td>
                    <td>${persona.correo}</td>
                    <td>${persona.numeroDocumento}</td>

                    <td>

                        <button onclick="editarPersona(
                            ${persona.id},
                            '${persona.nombre}',
                            '${persona.correo}',
                            '${persona.numeroDocumento}'
                        )">
                            Editar
                        </button>

                        <button onclick="eliminarPersona(${persona.id})">
                            Eliminar
                        </button>

                    </td>

                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
    }
}

// GUARDAR PERSONA
async function guardarPersona() {

    const nombre = document.getElementById("nombre").value;

    const correo = document.getElementById("correo").value;

    const documento = document.getElementById("documento").value;

    const persona = {
        nombre: nombre,
        correo: correo,
        numeroDocumento: documento
    };

    try {

        if (personaEditandoId) {

            await axios.put(
                `${API_URL}/${personaEditandoId}`,
                persona
            );

            alert("Persona actualizada");

            personaEditandoId = null;

        } else {

            await axios.post(API_URL, persona);

            alert("Persona guardada");
        }

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("documento").value = "";

        obtenerPersonas();

        cargarPersonasSelect();

    } catch (error) {
        console.error(error);
    }
}

// ELIMINAR PERSONA
async function eliminarPersona(id) {

    try {

        await axios.delete(`${API_URL}/${id}`);

        alert("Persona eliminada");

        obtenerPersonas();

        cargarPersonasSelect();

    } catch (error) {
        console.error(error);
    }
}

// EDITAR PERSONA
function editarPersona(id, nombre, correo, documento) {

    personaEditandoId = id;

    document.getElementById("nombre").value = nombre;

    document.getElementById("correo").value = correo;

    document.getElementById("documento").value = documento;
}

// =============================
// CATEGORIAS
// =============================

const API_CATEGORIAS = "http://localhost:8080/api/categorias";

let categoriaEditandoId = null;

// LISTAR CATEGORIAS
async function obtenerCategorias() {

    try {

        const respuesta = await axios.get(API_CATEGORIAS);

        const categorias = respuesta.data;

        const tabla = document.getElementById("tablaCategorias");

        tabla.innerHTML = "";

        categorias.forEach(categoria => {

            tabla.innerHTML += `
                <tr>

                    <td>${categoria.id}</td>
                    <td>${categoria.nombre}</td>
                    <td>${categoria.descripcion}</td>

                    <td>

                        <button onclick="editarCategoria(
                            ${categoria.id},
                            '${categoria.nombre}',
                            '${categoria.descripcion}'
                        )">
                            Editar
                        </button>

                        <button onclick="eliminarCategoria(${categoria.id})">
                            Eliminar
                        </button>

                    </td>

                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
    }
}

// GUARDAR CATEGORIA
async function guardarCategoria() {

    const nombre = document.getElementById("nombreCategoria").value;

    const descripcion = document.getElementById("descripcionCategoria").value;

    const categoria = {
        nombre: nombre,
        descripcion: descripcion
    };

    try {

        if (categoriaEditandoId) {

            await axios.put(
                `${API_CATEGORIAS}/${categoriaEditandoId}`,
                categoria
            );

            alert("Categoría actualizada");

            categoriaEditandoId = null;

        } else {

            await axios.post(API_CATEGORIAS, categoria);

            alert("Categoría guardada");
        }

        document.getElementById("nombreCategoria").value = "";
        document.getElementById("descripcionCategoria").value = "";

        obtenerCategorias();

        cargarCategoriasSelect();

    } catch (error) {
        console.error(error);
    }
}

// ELIMINAR CATEGORIA
async function eliminarCategoria(id) {

    try {

        await axios.delete(`${API_CATEGORIAS}/${id}`);

        alert("Categoría eliminada");

        obtenerCategorias();

        cargarCategoriasSelect();

    } catch (error) {
        console.error(error);
    }
}

// EDITAR CATEGORIA
function editarCategoria(id, nombre, descripcion) {

    categoriaEditandoId = id;

    document.getElementById("nombreCategoria").value = nombre;

    document.getElementById("descripcionCategoria").value = descripcion;
}

// =============================
// TURNOS
// =============================

const API_TURNOS = "http://localhost:8080/api/turnos";

// CARGAR PERSONAS EN SELECT
async function cargarPersonasSelect() {

    const respuesta = await axios.get(API_URL);

    const personas = respuesta.data;

    const select = document.getElementById("personaTurno");

    select.innerHTML = "";

    personas.forEach(persona => {

        select.innerHTML += `
            <option value="${persona.id}">
                ${persona.nombre}
            </option>
        `;
    });
}

// CARGAR CATEGORIAS EN SELECT
async function cargarCategoriasSelect() {

    const respuesta = await axios.get(API_CATEGORIAS);

    const categorias = respuesta.data;

    const select = document.getElementById("categoriaTurno");

    select.innerHTML = "";

    categorias.forEach(categoria => {

        select.innerHTML += `
            <option value="${categoria.id}">
                ${categoria.nombre}
            </option>
        `;
    });
}

// LISTAR TURNOS
async function obtenerTurnos() {

    try {

        const respuesta = await axios.get(API_TURNOS);

        const turnos = respuesta.data;

        const tabla = document.getElementById("tablaTurnos");

        tabla.innerHTML = "";

        turnos.forEach(turno => {

            tabla.innerHTML += `
                <tr>

                    <td>${turno.id}</td>

                    <td>${turno.persona.nombre}</td>

                    <td>${turno.categoriaTurno.nombre}</td>

                    <td>${turno.estado}</td>

                    <td>

                        <button onclick="eliminarTurno(${turno.id})">
                            Eliminar
                        </button>

                    </td>

                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
    }
}

// GUARDAR TURNO
async function guardarTurno() {

    const personaId = document.getElementById("personaTurno").value;

    const categoriaId = document.getElementById("categoriaTurno").value;

    const estado = document.getElementById("estadoTurno").value;

    const turno = {

        estado: estado,

        persona: {
            id: personaId
        },

        categoriaTurno: {
            id: categoriaId
        }
    };

    try {

        await axios.post(API_TURNOS, turno);

        alert("Turno guardado");

        obtenerTurnos();

    } catch (error) {
        console.error(error);
    }
}

// ELIMINAR TURNO
async function eliminarTurno(id) {

    try {

        await axios.delete(`${API_TURNOS}/${id}`);

        alert("Turno eliminado");

        obtenerTurnos();

    } catch (error) {
        console.error(error);
    }
}

// =============================
// INICIAR TODO
// =============================

obtenerPersonas();

obtenerCategorias();

cargarPersonasSelect();

cargarCategoriasSelect();

obtenerTurnos();