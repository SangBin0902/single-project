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

    private String number;

    @OneToMany(mappedBy = "customer")
    private List<PhoneBill> phoneBills;

    @OneToMany(mappedBy = "customer")
    private List<Mobile> mobiles;

    @OneToMany(mappedBy = "customer")
    private List<Contract> contracts;
}
