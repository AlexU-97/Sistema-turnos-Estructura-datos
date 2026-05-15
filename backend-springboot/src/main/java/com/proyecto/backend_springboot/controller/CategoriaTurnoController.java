package com.proyecto.backend_springboot.controller;

import com.proyecto.backend_springboot.model.CategoriaTurno;
import com.proyecto.backend_springboot.repository.CategoriaTurnoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin("*")
public class CategoriaTurnoController {

    @Autowired
    private CategoriaTurnoRepository categoriaRepository;

    @GetMapping
    public List<CategoriaTurno> obtenerCategorias() {
        return categoriaRepository.findAll();
    }

    @PostMapping
    public CategoriaTurno guardarCategoria(@RequestBody CategoriaTurno categoria) {
        return categoriaRepository.save(categoria);
    }

    @PutMapping("/{id}")
    public CategoriaTurno actualizarCategoria(@PathVariable Long id,
                                              @RequestBody CategoriaTurno categoriaActualizada) {

        CategoriaTurno categoria = categoriaRepository.findById(id).orElse(null);

        if (categoria != null) {
            categoria.setNombre(categoriaActualizada.getNombre());
            categoria.setDescripcion(categoriaActualizada.getDescripcion());

            return categoriaRepository.save(categoria);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void eliminarCategoria(@PathVariable Long id) {
        categoriaRepository.deleteById(id);
    }
}