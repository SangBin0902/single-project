import React from "react";
import { CssBaseline, Container, Typography, Button, Grid, Card, CardContent, Drawer, AppBar, Toolbar, List, ListItem, ListItemText, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import Header from "./header";

const drawerWidth = 240;

const SalesPerformance = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const sidebarItems = [
        { text: "대시보드", link: "#" },
        { text: "사용자 관리", link: "#" },
        { text: "영업 실적", link: "/sales" },
        { text: "통계", link: "#" },
        { text: "설정", link: "#" },
    ];

    return (
        <Container>
            <CssBaseline />
            <Header toggleDrawer={toggleDrawer} />
            <Drawer
                variant="temporary"
                open={open}
                onClose={toggleDrawer}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <List>
                    {sidebarItems.map((item, index) => (
                        <ListItem button key={index} component={Link} to={item.link}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Typography variant="h4" gutterBottom>
                영업 실적 페이지입니다.
            </Typography>
            <TextField 
                variant="outlined"
                label="검색" 
                fullWidth 
                margin="normal" 
                placeholder="검색어를 입력하세요" 
            />
        </Container>
    );
};

export default SalesPerformance;