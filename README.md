# Sistema Inteligente de Gestión de Turnos Médicos

## Descripción

Este proyecto corresponde a la Parte 1 del proyecto final de Estructura de Datos.

La aplicación permite gestionar turnos médicos mediante el registro de personas, especialidades médicas y turnos asociados.

El sistema fue desarrollado utilizando Spring Boot, MySQL, HTML, CSS, JavaScript y Axios.

---

## Tecnologías utilizadas

- Java 17
- Spring Boot
- MySQL
- HTML5
- CSS3
- JavaScript
- Axios
- Visual Studio Code

---

## Funcionalidades

### Personas
- Registrar personas
- Consultar personas
- Editar personas
- Eliminar personas

### Especialidades médicas
- Registrar especialidades
- Consultar especialidades
- Editar especialidades
- Eliminar especialidades

### Turnos
- Crear turnos
- Asociar persona y especialidad
- Cambiar estado del turno
- Eliminar turnos

---

## Estados de turno

- Reservado
- En espera
- Atendido
- Cancelado

---

## Estructura del proyecto

```plaintext
parte-1-mi-primera-web/
├── backend-springboot/
├── frontend-html-axios/
├── db-mysql/
└── README.md
```

---

## Configuración de base de datos

Base de datos utilizada:

```sql
CREATE DATABASE turnos_db;
```

---

## Ejecución del backend

1. Abrir carpeta backend-springboot en Visual Studio Code.
2. Ejecutar la aplicación Spring Boot.
3. Verificar que el backend corra en:

```plaintext
http://localhost:8080
```

---

## Ejecución del frontend

1. Abrir carpeta frontend-html-axios.
2. Abrir index.html con Live Server.
3. Verificar que el frontend cargue correctamente.

---

## Endpoints principales

### Personas
- GET /api/personas
- POST /api/personas
- PUT /api/personas/{id}
- DELETE /api/personas/{id}

### Categorías
- GET /api/categorias
- POST /api/categorias
- PUT /api/categorias/{id}
- DELETE /api/categorias/{id}

### Turnos
- GET /api/turnos
- POST /api/turnos
- DELETE /api/turnos/{id}

---

## Autor

Proyecto académico desarrollado para la asignatura Estructura de Datos.