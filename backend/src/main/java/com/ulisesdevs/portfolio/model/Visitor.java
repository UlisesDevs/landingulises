package com.ulisesdevs.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "visitors")
@Data
public class Visitor {
    @Id
    private Long id;
    private Long count;

    public Visitor() {
    }

    public Visitor(Long id, Long count) {
        this.id = id;
        this.count = count;
    }
}
