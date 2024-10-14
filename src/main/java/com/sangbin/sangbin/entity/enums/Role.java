package com.sangbin.sangbin.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {
    ROLE_MASTER("ROLE_MASTER"),
    ROLE_MANAGER("ROLE_MANAGER");

    private final String role;
}
