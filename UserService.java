package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User login(User u) {
        return repo.findByUsernameAndPassword(
            u.getUsername(), u.getPassword()
        );
    }

    public User register(User u) {
        return repo.save(u);
    }
}