import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({toggleDrawer}) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Button color="inherit" onClick={toggleDrawer}>
                    메뉴
                </Button>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    관리자 대시보드
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;