package com.ulisesdevs.portfolio.controller;

import com.ulisesdevs.portfolio.model.Visitor;
import com.ulisesdevs.portfolio.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/visitors")
public class VisitorController {

    @Autowired
    private VisitorRepository visitorRepository;

    @GetMapping("/count")
    public Visitor getCount() {
        return visitorRepository.findById(1L)
                .map(visitor -> {
                    visitor.setCount(visitor.getCount() + 1);
                    return visitorRepository.save(visitor);
                })
                .orElseGet(() -> visitorRepository.save(new Visitor(1L, 1L)));
    }
}
