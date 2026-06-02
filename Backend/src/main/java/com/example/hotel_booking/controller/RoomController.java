package com.example.hotel_booking.controller;

import com.example.hotel_booking.entity.Room;
import com.example.hotel_booking.repository.RoomRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // GET all rooms
    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // POST create room
    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }
}