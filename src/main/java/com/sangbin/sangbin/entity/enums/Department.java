package com.sangbin.sangbin.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Department {
    ASSISTANT("영업지원팀"),
    SOUTH("강남점"),
    EAST("강동점"),
    WEST("강서점");

    private final String department;
}
