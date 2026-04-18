package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InfluencerRepository extends JpaRepository<Influencer, Long> {

    List<Influencer> findByCategory(String category);
    List<Influencer> findAllByOrderByFollowersDesc();
    List<Influencer> findAllByOrderByIdDesc();
}