package com.proyecto.backend_springboot.repository;

import com.proyecto.backend_springboot.model.CategoriaTurno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaTurnoRepository extends JpaRepository<CategoriaTurno, Long> {

}