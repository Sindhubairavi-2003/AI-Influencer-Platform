package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfluencerService {

    @Autowired
    private InfluencerRepository repo;

    public List<Influencer> getAll() { return repo.findAll(); }

    public List<Influencer> filter(String category) {
        return repo.findByCategory(category);
    }

    public List<Influencer> top() {
        return repo.findAllByOrderByFollowersDesc();
    }

    public List<Influencer> trending() {
        return repo.findAllByOrderByIdDesc();
    }

    public Influencer getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Influencer save(Influencer i) {
        return repo.save(i);
    }
}