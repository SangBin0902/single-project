import React from "react";
import { CssBaseline, Container, Typography, Button, Grid, Card, CardContent, Drawer, AppBar, Toolbar, List, ListItem, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import Header from "./header";

const drawerWidth = 240;

const Index = () => {
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
        <>
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
            <Container maxWidth="lg" style={{ marginTop: '64px' }}>
                <Button variant="contained" color="primary" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    데이터 업데이트
                </Button>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">사용자 관리</Typography>
                                <Typography color="textSecondary">사용자 목록 및 관리 기능</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">통계 보기</Typography>
                                <Typography color="textSecondary">사이트 통계 및 분석</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">설정</Typography>
                                <Typography color="textSecondary">시스템 설정 및 환경 구성</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Index;
