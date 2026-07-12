import * as React from "react";
import {type ReactNode} from "react";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Reorder';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";

export interface WithHeaderProps {
    children: ReactNode;
    header: ReactNode;
}

export function WithHeader(props: WithHeaderProps) {
  const navigate = useNavigate();
  const [menuAnchorElement, setMenuAnchorElement] = React.useState<null | HTMLElement>(null);
  return <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <div style={{flex: "0 0 auto", backgroundColor: "#ccc", borderBottom: "1px solid #aaa", position: "relative"}}>
        <div style={{position: "absolute", top: "0", right: "0"}}>
          <IconButton onClick={(event) => setMenuAnchorElement(event.currentTarget)}>
            <MenuIcon fontSize={"large"} />
          </IconButton>
          <Menu anchorEl={menuAnchorElement} open={!!menuAnchorElement} onClose={() => setMenuAnchorElement(null)}>
            <MenuItem onClick={() => {navigate("/");}}>Start Page</MenuItem>
            <MenuItem onClick={() => {navigate("/_/printExerciseSheet");}}>Create Printed Exercise Sheet</MenuItem>
            <MenuItem onClick={() => {navigate("/_/about");}}>About</MenuItem>
          </Menu>
        </div>
        {props.header}
      </div>
      <div style={{flex: "1 1 0", overflowX: "hidden", overflowY: "scroll"}}>
        {props.children}
      </div>
  </div>;
}
