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
public class PhoneBill {
    // 요금 청구서
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId")
    private Customer customers;

    @Column(nullable = false)
    private String billingPeriod; // 청구 기간

    @Column(nullable = false)
    private String amountDue; // 청구 금액

    @Column(nullable = false)
    private String dueDate; // 납부 기한

    @Column(nullable = false)
    private String paymentStatus; // 결제 상태

    @Column(nullable = false)
    private String issueDate; // 발행 날짜
}
