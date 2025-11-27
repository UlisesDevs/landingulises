package com.ulisesdevs.portfolio.controller;

import com.ulisesdevs.portfolio.model.ContactMessage;
import com.ulisesdevs.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ContactMessage sendMessage(@RequestBody ContactMessage message) {
        return contactMessageRepository.save(message);
    }
}
