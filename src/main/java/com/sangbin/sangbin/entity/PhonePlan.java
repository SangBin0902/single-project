package com.sangbin.sangbin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class PhonePlan {
    // 요금제
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String planName; // 요금제 이름

    private String monthlyFee; // 월 요금

    private String dataLimit; // 데이터 용량(GB)

    private String callMinutes; // 음성 통화 제공 분수

    private String smsLimit; // 문자 제공 수

    private String contractLength; // 계약 기간(개월)
}
