"use client";

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";

export const EbookNavbar = () => {
  const [openMathematics, setOpenMathematics] = useState<boolean>(true);
  const [openCalculus, setOpenCalculus] = useState<boolean>(false);
  const [openTrigonometry, setOpenTrigonometry] = useState<boolean>(false);
  const [openPhysics, setOpenPhysics] = useState<boolean>(false);
  const [openMechanics, setOpenMechanics] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  return (
    <Box>
      <IconButton onClick={() => setShowNavbar(!showNavbar)}>
        <MenuIcon />
      </IconButton>

      {showNavbar && (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              EBooks (Class - 8)
            </ListSubheader>
          }
        >
          <ListItemButton onClick={() => setOpenMathematics(!openMathematics)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Mathematics" />
            {openMathematics ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openMathematics} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setOpenCalculus(!openCalculus)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Calculus" />
                {openCalculus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openCalculus} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Differential Equations" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Integration" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setOpenTrigonometry(!openTrigonometry)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Trigonometry" />
                {openTrigonometry ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openTrigonometry} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Topic 1" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpenPhysics(!openPhysics)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Physics" />
            {openPhysics ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openPhysics} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setOpenMechanics(!openMechanics)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Mechanics" />
                {openMechanics ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openMechanics} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Kinematics" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Dynamics" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      )}
    </Box>
  );
};
