import * as React from "react";
import "./Footer.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <footer>
        <ul class="footer-nav">
          <li>
            <a href="#">
              <YouTubeIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/usabilityTeam9/kajiken_topping_gacha">
              <GitHubIcon />
            </a>
          </li>
        </ul>
        <p>
          <small>&copy; 2022 Usability Team9</small>
        </p>
      </footer>
    </>
  );
}
