package com.proyecto.backend_springboot.controller;

import com.proyecto.backend_springboot.model.Persona;
import com.proyecto.backend_springboot.repository.PersonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
@CrossOrigin("*")
public class PersonaController {

    @Autowired
    private PersonaRepository personaRepository;

    // LISTAR PERSONAS
    @GetMapping
    public List<Persona> obtenerPersonas() {
        return personaRepository.findAll();
    }

    // GUARDAR PERSONA
    @PostMapping
    public Persona guardarPersona(@RequestBody Persona persona) {
        return personaRepository.save(persona);
    }
    // BUSCAR PERSONA POR ID
@GetMapping("/{id}")
public Persona obtenerPersonaPorId(@PathVariable Long id) {
    return personaRepository.findById(id).orElse(null);
}

// ACTUALIZAR PERSONA
@PutMapping("/{id}")
public Persona actualizarPersona(@PathVariable Long id, @RequestBody Persona personaActualizada) {

    Persona persona = personaRepository.findById(id).orElse(null);

    if (persona != null) {
        persona.setNombre(personaActualizada.getNombre());
        persona.setCorreo(personaActualizada.getCorreo());
        persona.setNumeroDocumento(personaActualizada.getNumeroDocumento());

        return personaRepository.save(persona);
    }

    return null;
}

// ELIMINAR PERSONA
@DeleteMapping("/{id}")
public void eliminarPersona(@PathVariable Long id) {
    personaRepository.deleteById(id);
}
}