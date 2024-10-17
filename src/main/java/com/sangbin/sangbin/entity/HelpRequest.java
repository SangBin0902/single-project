package com.sangbin.sangbin.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class HelpRequest {
    // 고객 지원 요청
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId")
    private Customer customers;

    private String requestDate; // 요청 날짜

    private String issueType; // 문제 유형

    private String description; // 요청 내용

    private String status; // 처리 상태
}
