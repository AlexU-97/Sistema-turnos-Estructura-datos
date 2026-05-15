package com.proyecto.backend_springboot.controller;

import com.proyecto.backend_springboot.model.Turno;
import com.proyecto.backend_springboot.repository.TurnoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/turnos")
@CrossOrigin("*")
public class TurnoController {

    @Autowired
    private TurnoRepository turnoRepository;

    @GetMapping
    public List<Turno> obtenerTurnos() {
        return turnoRepository.findAll();
    }

    @PostMapping
    public Turno guardarTurno(@RequestBody Turno turno) {
        return turnoRepository.save(turno);
    }

    @PutMapping("/{id}")
    public Turno actualizarTurno(@PathVariable Long id,
                                 @RequestBody Turno turnoActualizado) {

        Turno turno = turnoRepository.findById(id).orElse(null);

        if (turno != null) {
            turno.setEstado(turnoActualizado.getEstado());
            turno.setPersona(turnoActualizado.getPersona());
            turno.setCategoriaTurno(turnoActualizado.getCategoriaTurno());

            return turnoRepository.save(turno);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void eliminarTurno(@PathVariable Long id) {
        turnoRepository.deleteById(id);
    }
}