import * as React from "react";
import './Footer.css';

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function appBar(label) {
    return (
        <Toolbar>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h7" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label}
            </Typography>
        </Toolbar>
    );
  }

export default function Footer() {

    return (
        <>
            <footer>
                <ul class="footer-nav">
                    <li><a href="#"><YouTubeIcon /></a></li>
                    <li><a href="#"><TwitterIcon /></a></li>
                    <li><a href="https://github.com/usabilityTeam9/kajiken_topping_gacha"><GitHubIcon /></a></li>
                </ul>
                <p><small>&copy; 2022 Usability Team9</small></p>
            </footer>
            {/* <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <AppBar position="relative" color="primary">
                    {appBar("歌志軒")}
                </AppBar>
            </Stack> */}
        </>
    )
}