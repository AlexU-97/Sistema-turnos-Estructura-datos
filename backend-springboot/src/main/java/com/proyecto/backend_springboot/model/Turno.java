package com.proyecto.backend_springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "turnos")
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String estado;

    @ManyToOne
    @JoinColumn(name = "persona_id")
    private Persona persona;

    @ManyToOne
    @JoinColumn(name = "categoria_turno_id")
    private CategoriaTurno categoriaTurno;

    public Turno() {
    }

    public Turno(Long id, String estado, Persona persona, CategoriaTurno categoriaTurno) {
        this.id = id;
        this.estado = estado;
        this.persona = persona;
        this.categoriaTurno = categoriaTurno;
    }

    public Long getId() {
        return id;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public CategoriaTurno getCategoriaTurno() {
        return categoriaTurno;
    }

    public void setCategoriaTurno(CategoriaTurno categoriaTurno) {
        this.categoriaTurno = categoriaTurno;
    }
}