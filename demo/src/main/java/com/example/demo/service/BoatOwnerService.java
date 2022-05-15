package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.Boat;
import com.example.demo.model.BoatOwner;
import com.example.demo.model.Property;
import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;

public interface BoatOwnerService {
    BoatOwner findById(Integer id);
    BoatOwner findByEmail(String email);
    List<BoatOwner> findAll ();
    BoatOwner save(User user);

//    List<Boat> findAllMyBoats(BoatOwner u);
}
