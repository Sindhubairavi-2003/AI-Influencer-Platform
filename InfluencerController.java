package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/influencers")
public class InfluencerController {

    @Autowired
    private InfluencerService service;

    @GetMapping
    public List<Influencer> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Influencer getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/category/{category}")
    public List<Influencer> filter(@PathVariable String category) {
        return service.filter(category);
    }

    @GetMapping("/top")
    public List<Influencer> top() {
        return service.top();
    }

    @GetMapping("/trending")
    public List<Influencer> trending() {
        return service.trending();
    }

    @PostMapping
    public Influencer add(@RequestBody Influencer i) {
        return service.save(i);
    }
}