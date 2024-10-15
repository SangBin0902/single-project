package com.sangbin.sangbin.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    // 요금제

    @OneToMany(mappedBy = "id")
    private List<PhoneBill> phoneBills;

    @OneToMany(mappedBy = "id")
    private List<Mobile> mobiles;
}
